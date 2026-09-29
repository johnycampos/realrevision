/**
 * Utilitário para Impressão de Cupom Não Fiscal (Térmica 80mm)
 * Abre uma nova janela autocontida formatada para impressão térmica e aciona window.print().
 */

const formatarMoeda = valor => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor) || 0)
}

const formatarData = dataIso => {
  if (!dataIso) {
    const agora = new Date()
    return agora.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }
  const d = new Date(dataIso)
  if (isNaN(d.getTime())) return String(dataIso)
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
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
    lojaNome = 'Real Revision',
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

  const printWindow = window.open('', '_blank', 'width=380,height=650,menubar=no,toolbar=no,location=no,status=no')

  if (!printWindow) {
    alert('Não foi possível abrir a janela de impressão. Por favor, verifique se o bloqueador de pop-ups está ativado.')
    return
  }

  const dataFormatada = formatarData(dataVenda)
  const subtotalCalculado = subtotal !== null ? subtotal : itens.reduce((acc, it) => acc + (Number(it.totalItem) || (Number(it.quantidade) * Number(it.precoUnitario)) || 0), 0)
  const temDesconto = Number(descontoValor) > 0 || Number(descontoPercentual) > 0

  const htmlItens = itens.map((item, idx) => {
    const cod = item.codigo ? `[${escaparHtml(item.codigo)}] ` : ''
    const nome = escaparHtml(item.nome || `Item ${idx + 1}`)
    const qtd = Number(item.quantidade) || 1
    const unit = formatarMoeda(item.precoUnitario || 0)
    const tot = formatarMoeda(item.totalItem !== undefined ? item.totalItem : (qtd * (Number(item.precoUnitario) || 0)))

    return `
      <div class="item-linha">
        <div class="item-descricao">${cod}${nome}</div>
        <div class="item-detalhe">
          <span>${qtd} un &times; ${unit}</span>
          <span class="item-total">${tot}</span>
        </div>
      </div>
    `
  }).join('')

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Cupom de Venda #${escaparHtml(vendaId)}</title>
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
      line-height: 1.3;
      color: #000;
      background: #fff;
      width: 80mm;
      padding: 4mm;
      margin: 0 auto;
    }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .bold { font-weight: bold; }
    .divider {
      border-top: 1px dashed #000;
      margin: 6px 0;
    }
    .header {
      text-align: center;
      margin-bottom: 6px;
    }
    .header .loja-nome {
      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      word-break: break-word;
    }
    .header .subtitulo {
      font-size: 11px;
      letter-spacing: 0.5px;
      margin-top: 2px;
    }
    .header .aviso-fiscal {
      font-size: 10px;
      margin-top: 2px;
    }
    .info-bloco {
      font-size: 11px;
      margin-bottom: 4px;
    }
    .info-linha {
      display: flex;
      justify-content: space-between;
    }
    .itens-container {
      margin: 6px 0;
    }
    .item-linha {
      margin-bottom: 5px;
      page-break-inside: avoid;
    }
    .item-descricao {
      word-break: break-word;
      font-size: 11px;
      font-weight: 600;
    }
    .item-detalhe {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      padding-left: 6px;
    }
    .totais-bloco {
      font-size: 12px;
      margin: 6px 0;
    }
    .totais-linha {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
    }
    .total-destaque {
      font-size: 14px;
      font-weight: bold;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      padding: 4px 0;
      margin: 4px 0;
    }
    .pagamento-bloco {
      font-size: 11px;
      margin: 6px 0;
    }
    .footer {
      text-align: center;
      font-size: 11px;
      margin-top: 10px;
      padding-top: 6px;
    }
    .btn-bar {
      margin-bottom: 12px;
      text-align: center;
      padding-bottom: 8px;
      border-bottom: 1px solid #ccc;
    }
    .btn-bar button {
      padding: 6px 14px;
      font-size: 12px;
      cursor: pointer;
      margin: 0 4px;
      border-radius: 4px;
      border: 1px solid #333;
      background: #f0f0f0;
      font-family: inherit;
    }
    .btn-bar button.primary {
      background: #1976d2;
      color: #fff;
      border-color: #1976d2;
    }
    @media print {
      .no-print {
        display: none !important;
      }
      body {
        padding: 2mm 3mm;
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
    <div class="subtitulo">SISTEMA DE GESTÃO AUTOMOTIVA</div>
    <div class="aviso-fiscal">CUPOM NÃO FISCAL &mdash; SEM VALOR FISCAL</div>
  </div>

  <div class="divider"></div>

  <div class="info-bloco">
    <div class="info-linha">
      <span>VENDA: <strong>#${escaparHtml(vendaId || '-')}</strong></span>
      <span>${escaparHtml(dataFormatada)}</span>
    </div>
    <div class="info-linha">
      <span>VENDEDOR: ${escaparHtml(vendedorNome)}</span>
    </div>
  </div>

  <div class="divider"></div>
  <div class="text-center bold" style="font-size: 11px; margin-bottom: 4px;">ITENS DA VENDA</div>

  <div class="itens-container">
    ${htmlItens || '<div class="text-center">Nenhum item</div>'}
  </div>

  <div class="divider"></div>

  <div class="totais-bloco">
    <div class="totais-linha">
      <span>SUBTOTAL:</span>
      <span>${formatarMoeda(subtotalCalculado)}</span>
    </div>
    ${temDesconto ? `
    <div class="totais-linha">
      <span>DESCONTO${Number(descontoPercentual) > 0 ? ` (${descontoPercentual}%)` : ''}:</span>
      <span>-${formatarMoeda(descontoValor || (subtotalCalculado * Number(descontoPercentual) / 100))}</span>
    </div>` : ''}
    <div class="totais-linha total-destaque">
      <span>TOTAL GERAL:</span>
      <span>${formatarMoeda(totalGeral)}</span>
    </div>
  </div>

  <div class="pagamento-bloco">
    <div class="totais-linha">
      <span>FORMA PAGTO:</span>
      <span class="bold">${escaparHtml(formaPagamento)}${parcelas ? ` (${escaparHtml(parcelas)}x)` : ''}</span>
    </div>
    ${valorRecebido !== null && Number(valorRecebido) > 0 ? `
    <div class="totais-linha">
      <span>VALOR RECEBIDO:</span>
      <span>${formatarMoeda(valorRecebido)}</span>
    </div>` : ''}
    ${troco !== null && Number(troco) > 0 ? `
    <div class="totais-linha bold">
      <span>TROCO:</span>
      <span>${formatarMoeda(troco)}</span>
    </div>` : ''}
  </div>

  <div class="divider"></div>

  <div class="footer">
    <div>Obrigado pela preferência!</div>
    <div>Volte sempre!</div>
    <div style="font-size: 9px; margin-top: 6px; color: #555;">Real Revision PDV</div>
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.focus();
        window.print();
      }, 250);
    });
    window.onafterprint = function() {
      // Pequeno delay para garantir que o spool encerrou
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
