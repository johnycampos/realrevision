<template>
  <div
    class="product-details"
    :hidden="!isOpen"
  >
    <div class="header">
      <h2 class="title">
        Detalhes do Produto
      </h2>
    </div>
    <div class="info-grid">
      <div class="info-card">
        <h3 class="section-title">
          Informações Básicas
        </h3>
        <div class="info-list">
          <div>
            <span class="label">Código</span>
            <p class="value">
              {{ item.codigo }}
            </p>
          </div>
          <div>
            <span class="label">Nome</span>
            <p class="value">
              {{ item.nome }}
            </p>
          </div>
          <div>
            <span class="label">Nome Curto</span>
            <p class="value">
              {{ item.nome_curto }}
            </p>
          </div>
          <div>
            <span class="label">Grupo/Subgrupo</span>
            <p class="value">
              {{ `${item.grupo_id}/${item.subgrupo_id}` }}
            </p>
          </div>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Informações de Preço
        </h3>
        <div class="info-list">
          <div>
            <span class="label">Custo de Compra</span>
            <p class="value">
              {{ formatarPreco(item.custo_compra) }}
            </p>
          </div>
          <div>
            <span class="label">Percentual de Lucro</span>
            <p class="value">
              {{ `${item.percentual_lucro}%` }}
            </p>
          </div>
          <div>
            <span class="label">Valor</span>
            <p class="value">
              {{ formatarPreco(item.valor) }}
            </p>
          </div>
          <div class="price-grid">
            <div>
              <span class="label">Preço Consumidor</span>
              <p class="value">
                {{ formatarPreco(item.preco_consumidor) }}
              </p>
            </div>
            <div>
              <span class="label">Preço Revenda</span>
              <p class="value">
                {{ formatarPreco(item.preco_revenda) }}
              </p>
            </div>
            <div>
              <span class="label">Outros Preços</span>
              <p class="value">
                {{ formatarPreco(item.preco_outros) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Estoque
        </h3>
        <div class="stock-grid">
          <div>
            <span class="label">Quantidade Disponível</span>
            <p class="value">
              {{ item.quantidade_disponivel }}
            </p>
          </div>
          <div>
            <span class="label">Lote Ideal</span>
            <p class="value">
              {{ item.lote_ideal }}
            </p>
          </div>
          <div>
            <span class="label">Quantidade Mínima</span>
            <p class="value">
              {{ item.quantidade_minima }}
            </p>
          </div>
        </div>
      </div>
      <div class="info-card">
        <h3 class="section-title">
          Localização e Fabricante
        </h3>
        <div class="location-grid">
          <div>
            <span class="label">Unidade</span>
            <p class="value">
              {{ item.unidade_id }}
            </p>
          </div>
          <div>
            <span class="label">Fabricante</span>
            <p class="value">
              {{ item.fabricante_id }}
            </p>
          </div>
          <div>
            <span class="label">Local Estoque</span>
            <p class="value">
              {{ item.local_estoque_id }}
            </p>
          </div>
          <div>
            <span class="label">Gaveta</span>
            <p class="value">
              {{ item.gaveta }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="observations">
      <h3 class="section-title">
        Observações
      </h3>
      <p class="observation-text">
        {{ item.observacoes }}
      </p>
    </div>
    <div class="footer">
      <div>
        <span>Data Cadastro: </span><span>{{ item.data_cadastro }}</span>
      </div>
      <div>
        <span>Última Atualização: </span><span>{{ item.ultima_atualizacao }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object,
    required: true,
    default: () => ({
      codigo: "ABC123",
      nome: "Pastilha de Freio Dianteira",
      nome_curto: "Pastilha Freio",
      grupo_id: "01",
      subgrupo_id: "02",
      custo_compra: 89.9,
      percentual_lucro: 35,
      valor: 121.37,
      preco_consumidor: 149.9,
      preco_revenda: 129.9,
      preco_outros: 139.9,
      quantidade_disponivel: 15,
      lote_ideal: 20,
      quantidade_minima: 5,
      unidade_id: "PC",
      fabricante_id: "FRAS-LE",
      local_estoque_id: "A1",
      gaveta: "G3",
      observacoes: "Compatível com modelos 2018-2023",
      data_cadastro: "2023-01-15",
      ultima_atualizacao: "2023-11-28"
    })
  }
})

// Função para formatar valores monetários
const formatarPreco = preco => {
  return `R$ ${parseFloat(preco)}`
}
</script>

<style scoped>
.product-details {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 10%);
  inline-size: 800px;
}

@media (max-width: 640px) {
  .product-details {
    inline-size: 95%;
  }
}

.header {
  border-color: #e5e5e5;
  border-block-end-width: 1px;
  margin-block-end: 24px;
  padding-block-end: 16px;
}

.title {
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 700;
}

.info-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.info-card {
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 6px;
}

.section-title {
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
  margin-block-end: 16px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label {
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
}

.value {
  color: #1a1a1a;
  font-size: 15px;
}

.price-grid {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.stock-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.location-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.observations {
  margin-block-start: 24px;
}

.observation-text {
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #1a1a1a;
  font-size: 15px;
}

.footer {
  display: flex;
  justify-content: space-between;
  border-color: #e5e5e5;
  border-block-start-width: 1px;
  color: #64748b;
  font-size: 14px;
  margin-block-start: 24px;
  padding-block-start: 16px;
}
</style>
