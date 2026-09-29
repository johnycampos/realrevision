/**
 * Utilitário para Impressão de Cupom Não Fiscal (Térmica 80mm)
 * Layout adaptado para padrão de balcão de auto-peças / oficina.
 */

const formatarMoeda = valor => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor) || 0)
}

const formatarDataHora = dataIso => {
  const d = dataIso ? new Date(dataIso) : new Date()
  const dataValida = !isNaN(d.getTime()) ? d : new Date()

  const dia = String(dataValida.getDate()).padStart(2, '0')
  const mes = String(dataValida.getMonth() + 1).padStart(2, '0')
  const ano = String(dataValida.getFullYear()).slice(-2)
  const hora = String(dataValida.getHours()).padStart(2, '0')
  const min = String(dataValida.getMinutes()).padStart(2, '0')

  return `${dia}/${mes}/${ano} ${hora}:${min}`
}

const escaparHtml = str => {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Imprime um cupom de venda não fiscal formatado para 80mm.
 *
 * @param {Object} dadosRecibo
 * @param {string} dadosRecibo.lojaNome
 * @param {number|string} dadosRecibo.vendaId
 * @param {string} [dadosRecibo.dataVenda]
 * @param {string} [dadosRecibo.vendedorNome]
 * @param {Array} dadosRecibo.itens - [{ codigo, nome, quantidade, precoUnitario, totalItem }]
 * @param {number} [dadosRecibo.subtotal]
 * @param {number} [dadosRecibo.descontoPercentual]
 * @param {number} [dadosRecibo.descontoValor]
 * @param {number} dadosRecibo.totalGeral
 * @param {string} [dadosRecibo.formaPagamento]
 * @param {number|string} [dadosRecibo.parcelas]
 * @param {number} [dadosRecibo.valorRecebido]
 * @param {number} [dadosRecibo.troco]
 */
export function imprimirRecibo(dadosRecibo = {}) {
  const {
    lojaNome = 'REAL REVISION',
    vendaId = '',
    dataVenda = null,
    vendedorNome = 'Atendente',
    itens = [],
    subtotal = null,
    descontoPercentual = 0,
    descontoValor = 0,
    totalGeral = 0,
    formaPagamento = 'Não informada',
    parcelas = null,
    valorRecebido = null,
    troco = null,
  } = dadosRecibo

  const printWindow = window.open('', '_blank', 'width=380,height=680,menubar=no,toolbar=no,location=no,status=no')

  if (!printWindow) {
    alert('Não foi possível abrir a janela de impressão. Por favor, verifique se o bloqueador de pop-ups do navegador está ativado.')
    return
  }

  const dataHoraFormatada = formatarDataHora(dataVenda)
  const subtotalCalculado = subtotal !== null
    ? Number(subtotal)
    : itens.reduce((acc, it) => acc + (Number(it.totalItem) || (Number(it.quantidade) * Number(it.precoUnitario)) || 0), 0)

  const valorDescontoTotal = Number(descontoValor) > 0
    ? Number(descontoValor)
    : (Number(descontoPercentual) > 0 ? (subtotalCalculado * Number(descontoPercentual) / 100) : 0)

  const temDesconto = valorDescontoTotal > 0

  const htmlItens = itens.map((item, idx) => {
    const cod = item.codigo ? `${escaparHtml(item.codigo)} - ` : ''
    const nome = escaparHtml(item.nome || `Item #${idx + 1}`)
    const qtd = Number(item.quantidade) || 1
    const unit = formatarMoeda(item.precoUnitario || 0)
    const tot = formatarMoeda(item.totalItem !== undefined ? item.totalItem : (qtd * (Number(item.precoUnitario) || 0)))

    return `
      <div class="cupom-item">
        <div class="item-linha1">${cod}${nome}</div>
        <div class="item-linha2">
          <span>&nbsp;&nbsp;${qtd} x ${unit}</span>
          <span class="bold">${tot}</span>
        </div>
      </div>
    `
  }).join('')

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Cupom #${escaparHtml(vendaId)}</title>
  <style>
    @page {
      size: 80mm auto;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      line-height: 1.25;
      color: #000;
      background: #fff;
      width: 80mm;
      padding: 3mm 4mm;
      margin: 0 auto;
    }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .bold { font-weight: bold; }
    .divisor {
      font-size: 11px;
      line-height: 1;
      letter-spacing: -0.5px;
      white-space: nowrap;
      overflow: hidden;
      margin: 4px 0;
      user-select: none;
    }
    .header {
      text-align: center;
      margin-bottom: 4px;
    }
    .header .loja-nome {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .header .subtitulo {
      font-size: 10px;
      text-transform: uppercase;
    }
    .linha-dupla {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      line-height: 1.3;
    }
    .tabela-cabecalho {
      font-size: 11px;
      margin-bottom: 4px;
    }
    .cupom-item {
      margin-bottom: 5px;
      font-size: 11px;
      page-break-inside: avoid;
    }
    .item-linha1 {
      font-weight: bold;
      word-break: break-word;
      text-transform: uppercase;
    }
    .item-linha2 {
      display: flex;
      justify-content: space-between;
      padding-right: 2px;
    }
    .linha-pontilhada {
      display: flex;
      align-items: baseline;
      font-size: 12px;
      margin: 2px 0;
    }
    .linha-pontilhada .rotulo {
      white-space: nowrap;
    }
    .linha-pontilhada .pontos {
      flex-grow: 1;
      border-bottom: 1px dotted #000;
      margin: 0 4px;
      height: 0.9em;
    }
    .linha-pontilhada .valor {
      white-space: nowrap;
      font-weight: bold;
    }
    .total-destaque {
      font-size: 13px;
      font-weight: bold;
      margin-top: 3px;
    }
    .secao-titulo {
      text-align: center;
      font-weight: bold;
      font-size: 11px;
      margin: 2px 0;
      letter-spacing: 0.5px;
    }
    .vendedor-info {
      font-size: 11px;
      margin: 4px 0;
      text-transform: uppercase;
    }
    .footer {
      text-align: center;
      font-size: 11px;
      margin-top: 8px;
      padding-top: 4px;
    }
    .btn-bar {
      margin-bottom: 10px;
      text-align: center;
      padding-bottom: 8px;
      border-bottom: 1px solid #ddd;
    }
    .btn-bar button {
      padding: 5px 12px;
      font-size: 12px;
      cursor: pointer;
      margin: 0 4px;
      border-radius: 4px;
      border: 1px solid #333;
      background: #f5f5f5;
      font-family: inherit;
    }
    .btn-bar button.primary {
      background: #1976d2;
      color: #fff;
      border-color: #1976d2;
      font-weight: bold;
    }
    @media print {
      .no-print {
        display: none !important;
      }
      body {
        padding: 0;
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="btn-bar no-print">
    <button class="primary" onclick="window.print()">Imprimir</button>
    <button onclick="window.close()">Fechar</button>
  </div>

  <div class="header">
    <div class="loja-nome">${escaparHtml(lojaNome)}</div>
    <div class="subtitulo">CUPOM N&Atilde;O FISCAL &mdash; SEM VALOR FISCAL</div>
  </div>

  <div class="divisor">------------------------------------------</div>

  <div class="linha-dupla">
    <span class="bold">VENDA No:${escaparHtml(vendaId || '-')}</span>
    <span>${escaparHtml(dataHoraFormatada)}</span>
  </div>
  <div class="linha-dupla">
    <span>CLIENTE: CONSUMIDOR</span>
  </div>

  <div class="divisor">------------------------------------------</div>

  <div class="tabela-cabecalho">
    <div class="bold">C&oacute;digo&nbsp;&nbsp;&nbsp;&nbsp;Descri&ccedil;&atilde;o</div>
    <div>--&gt; QTD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VLR Unit.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtotal</div>
  </div>

  <div class="itens-bloco">
    ${htmlItens || '<div class="text-center">Nenhum item registrado</div>'}
  </div>

  <div class="divisor">------------------------------------------</div>

  ${temDesconto ? `
  <div class="linha-dupla">
    <span>Descontos :</span>
    <span>R$ ${valorDescontoTotal.toFixed(2).replace('.', ',')}</span>
  </div>` : ''}

  <div class="linha-pontilhada total-destaque">
    <span class="rotulo">TOTAL A PAGAR :</span>
    <span class="pontos"></span>
    <span class="valor">${formatarMoeda(totalGeral)}</span>
  </div>

  <div class="divisor">------------------------------------------</div>
  <div class="secao-titulo">FORMA(S) DE PAGAMENTO</div>
  <div class="divisor">------------------------------------------</div>

  <div class="linha-dupla">
    <span class="bold">${escaparHtml(formaPagamento)}${parcelas ? ` (${escaparHtml(parcelas)}x)` : ''}</span>
    <span class="bold">${formatarMoeda(totalGeral)}</span>
  </div>

  ${valorRecebido !== null && Number(valorRecebido) > 0 ? `
  <div class="linha-dupla" style="margin-top: 2px;">
    <span>Valor Recebido:</span>
    <span>${formatarMoeda(valorRecebido)}</span>
  </div>` : ''}

  ${troco !== null && Number(troco) > 0 ? `
  <div class="linha-dupla bold" style="margin-top: 2px;">
    <span>Troco:</span>
    <span>${formatarMoeda(troco)}</span>
  </div>` : ''}

  <div class="divisor">------------------------------------------</div>

  <div class="vendedor-info">
    <span>Vendedor : <strong>${escaparHtml(vendedorNome)}</strong></span>
  </div>

  <div class="divisor">------------------------------------------</div>

  <div class="footer">
    <div>Obrigado pela prefer&ecirc;ncia!</div>
    <div>Volte sempre!</div>
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.focus();
        window.print();
      }, 250);
    });
    window.onafterprint = function() {
      setTimeout(function() {
        window.close();
      }, 500);
    };
  </script>
</body>
</html>`

  printWindow.document.open()
  printWindow.document.write(html)
  printWindow.document.close()
}

export default {
  imprimirRecibo,
}
