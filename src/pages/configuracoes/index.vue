<script setup>
import { ref, computed, onMounted } from 'vue'
import usuariosApi from '@/server/Usuarios'

// Metadados da rota para proteção de navegação
definePage({
  meta: {
    menuKey: 'configuracoes',
  },
})

const currentUser = computed(() => {
  try {
    return JSON.parse(localStorage.getItem('userData') || '{}')
  } catch (e) {
    return {}
  }
})

const isSuperAdmin = computed(() => currentUser.value.role === 'super_admin')

// Estados de listagem
const usuarios = ref([])
const lojas = ref([])
const todosMenus = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
const filtroLoja = ref(null)

// Dialog de Cadastro/Edição
const dialogUsuario = ref(false)
const isEditing = ref(false)
const editUserId = ref(null)
const isSaving = ref(false)
const activeTab = ref('dados')

// Formulário de Usuário
const formUsuario = ref({
  username: '',
  password: '',
  role: 'funcionario',
  loja_id: null,
  ativo: true,
  menus: [],
  horarios: []
})

// Estrutura padrão de 7 dias da semana
const DIAS_SEMANA = [
  { id: 0, nome: 'Domingo' },
  { id: 1, nome: 'Segunda-feira' },
  { id: 2, nome: 'Terça-feira' },
  { id: 3, nome: 'Quarta-feira' },
  { id: 4, nome: 'Quinta-feira' },
  { id: 5, nome: 'Sexta-feira' },
  { id: 6, nome: 'Sábado' },
]

const inicializarHorariosPadrao = () => {
  return DIAS_SEMANA.map(dia => ({
    dia_semana: dia.id,
    dia_nome: dia.nome,
    ativo: dia.id >= 1 && dia.id <= 5, // Seg a Sex ativos por padrão
    hora_inicio: '08:00:00',
    hora_fim: '18:00:00'
  }))
}

// Opções de Roles disponíveis no select
const rolesDisponiveis = computed(() => {
  const opcoes = [
    { title: 'Funcionário / Operador', value: 'funcionario' },
    { title: 'Gerente da Loja', value: 'admin_loja' }
  ]
  if (isSuperAdmin.value) {
    opcoes.push({ title: 'Super Administrador (Matriz)', value: 'super_admin' })
  }
  return opcoes
})

// Feedback com Snackbar
const snackbar = ref({
  show: false,
  text: '',
  color: 'success'
})

const mostrarAlerta = (text, color = 'success') => {
  snackbar.value = { show: true, text, color }
}

// Carregamento de dados
const carregarDadosIniciais = async () => {
  isLoading.value = true
  try {
    const [resLojas, resMenus] = await Promise.allSettled([
      usuariosApi.listarLojas(),
      usuariosApi.listarTodosMenus()
    ])

    if (resLojas.status === 'fulfilled' && resLojas.value?.data) {
      lojas.value = resLojas.value.data
    }

    if (resMenus.status === 'fulfilled' && resMenus.value?.data) {
      todosMenus.value = resMenus.value.data
    }

    await carregarUsuarios()
  } catch (error) {
    mostrarAlerta('Erro ao carregar dados iniciais', 'error')
  } finally {
    isLoading.value = false
  }
}

const carregarUsuarios = async () => {
  try {
    const lojaIdFiltro = isSuperAdmin.value && filtroLoja.value ? filtroLoja.value : null
    const res = await usuariosApi.listar(lojaIdFiltro)
    if (res?.data) {
      usuarios.value = res.data
    }
  } catch (error) {
    mostrarAlerta('Erro ao listar usuários', 'error')
  }
}

// Filtragem na tela
const usuariosFiltrados = computed(() => {
  return usuarios.value.filter(u => {
    const matchSearch = !searchQuery.value ||
      u.username.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (u.loja_nome && u.loja_nome.toLowerCase().includes(searchQuery.value.toLowerCase()))

    const matchLoja = !filtroLoja.value || u.loja_id === filtroLoja.value

    return matchSearch && matchLoja
  })
})

// Ações do Formulário
const abrirModalCriar = () => {
  isEditing.value = false
  editUserId.value = null
  activeTab.value = 'dados'

  formUsuario.value = {
    username: '',
    password: '',
    role: 'funcionario',
    loja_id: isSuperAdmin.value ? (lojas.value[0]?.id || null) : currentUser.value.loja_id,
    ativo: true,
    menus: [],
    horarios: inicializarHorariosPadrao()
  }

  dialogUsuario.value = true
}

const abrirModalEditar = async (usuario) => {
  isEditing.value = true
  editUserId.value = usuario.id
  activeTab.value = 'dados'
  isLoading.value = true

  try {
    const res = await usuariosApi.buscarPorId(usuario.id)
    const dados = res.data

    // Mapeia os horários existentes preenchendo os 7 dias
    const horariosCompletos = DIAS_SEMANA.map(dia => {
      const existente = dados.horarios?.find(h => Number(h.dia_semana) === dia.id)
      if (existente) {
        return {
          dia_semana: dia.id,
          dia_nome: dia.nome,
          ativo: existente.ativo,
          hora_inicio: existente.hora_inicio?.slice(0, 5) || '08:00',
          hora_fim: existente.hora_fim?.slice(0, 5) || '18:00'
        }
      }
      return {
        dia_semana: dia.id,
        dia_nome: dia.nome,
        ativo: false,
        hora_inicio: '08:00',
        hora_fim: '18:00'
      }
    })

    formUsuario.value = {
      username: dados.username,
      password: '', // em branco para não alterar
      role: dados.role,
      loja_id: dados.loja_id,
      ativo: dados.ativo !== undefined ? dados.ativo : true,
      menus: dados.menusIds || [],
      horarios: horariosCompletos
    }

    dialogUsuario.value = true
  } catch (error) {
    mostrarAlerta('Erro ao carregar detalhes do usuário', 'error')
  } finally {
    isLoading.value = false
  }
}

const salvarUsuario = async () => {
  if (!formUsuario.value.username) {
    mostrarAlerta('O nome de usuário é obrigatório', 'warning')
    return
  }

  if (!isEditing.value && !formUsuario.value.password) {
    mostrarAlerta('A senha é obrigatória para novo usuário', 'warning')
    return
  }

  isSaving.value = true

  try {
    // Formata os horários ativos para envio
    const horariosParaSalvar = formUsuario.value.horarios
      .filter(h => h.ativo)
      .map(h => ({
        dia_semana: Number(h.dia_semana),
        hora_inicio: h.hora_inicio.length === 5 ? `${h.hora_inicio}:00` : h.hora_inicio,
        hora_fim: h.hora_fim.length === 5 ? `${h.hora_fim}:00` : h.hora_fim,
        ativo: true
      }))

    const payload = {
      username: formUsuario.value.username,
      role: formUsuario.value.role,
      loja_id: formUsuario.value.loja_id,
      ativo: formUsuario.value.ativo,
      menus: formUsuario.value.menus,
      horarios: horariosParaSalvar
    }

    if (formUsuario.value.password) {
      payload.password = formUsuario.value.password
    }

    if (isEditing.value) {
      await usuariosApi.atualizar(editUserId.value, payload)
      mostrarAlerta('Usuário atualizado com sucesso!')
    } else {
      await usuariosApi.criar(payload)
      mostrarAlerta('Usuário cadastrado com sucesso!')
    }

    dialogUsuario.value = false
    await carregarUsuarios()
  } catch (error) {
    const msg = error.response?.data?.error || error.response?.data?.message || 'Erro ao salvar usuário'
    mostrarAlerta(msg, 'error')
  } finally {
    isSaving.value = false
  }
}

const toggleAtivo = async (usuario) => {
  try {
    const novoStatus = !usuario.ativo
    await usuariosApi.atualizar(usuario.id, { ativo: novoStatus })
    usuario.ativo = novoStatus
    mostrarAlerta(`Usuário ${novoStatus ? 'ativado' : 'desativado'} com sucesso!`)
  } catch (error) {
    mostrarAlerta('Erro ao alterar status do usuário', 'error')
  }
}

onMounted(() => {
  carregarDadosIniciais()
})
</script>

<template>
  <div>
    <!-- Cabeçalho da Página -->
    <VCard class="mb-6">
      <VCardText class="d-flex flex-wrap justify-space-between align-center gap-4">
        <div>
          <h2 class="text-h4 font-weight-medium">Configurações de Usuários</h2>
          <p class="text-body-1 text-medium-emphasis mb-0">
            Gerencie colaboradores, papéis de acesso, restrições de horários e menus permitidos.
          </p>
        </div>

        <VBtn
          color="primary"
          prepend-icon="mdi-account-plus"
          @click="abrirModalCriar"
        >
          Novo Usuário
        </VBtn>
      </VCardText>
    </VCard>

    <!-- Barra de Filtros -->
    <VCard class="mb-6">
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <VTextField
              v-model="searchQuery"
              placeholder="Buscar por usuário ou loja..."
              prepend-inner-icon="mdi-magnify"
              density="compact"
              clearable
              hide-details
            />
          </VCol>

          <VCol v-if="isSuperAdmin" cols="12" md="6">
            <VSelect
              v-model="filtroLoja"
              :items="lojas"
              item-title="nome"
              item-value="id"
              label="Filtrar por Loja"
              density="compact"
              clearable
              hide-details
              @update:model-value="carregarUsuarios"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- Tabela de Usuários -->
    <VCard :loading="isLoading">
      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th class="text-uppercase">Usuário</th>
            <th class="text-uppercase">Papel</th>
            <th class="text-uppercase">Loja</th>
            <th class="text-uppercase text-center">Status</th>
            <th class="text-uppercase text-center">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in usuariosFiltrados" :key="user.id">
            <td class="font-weight-medium">
              <div class="d-flex align-center">
                <VAvatar color="primary" variant="tonal" size="34" class="me-3">
                  <VIcon icon="mdi-account-outline" size="20" />
                </VAvatar>
                <span>{{ user.username }}</span>
              </div>
            </td>

            <td>
              <VChip
                v-if="user.role === 'super_admin'"
                color="error"
                size="small"
                variant="tonal"
                prepend-icon="mdi-shield-crown"
              >
                Super Admin
              </VChip>
              <VChip
                v-else-if="user.role === 'admin_loja'"
                color="warning"
                size="small"
                variant="tonal"
                prepend-icon="mdi-shield-account"
              >
                Gerente da Loja
              </VChip>
              <VChip
                v-else
                color="info"
                size="small"
                variant="tonal"
                prepend-icon="mdi-account"
              >
                Funcionário
              </VChip>
            </td>

            <td>
              <VChip size="small" variant="outlined" color="primary">
                {{ user.loja_nome || 'Matriz' }}
              </VChip>
            </td>

            <td class="text-center">
              <VChip
                :color="user.ativo ? 'success' : 'secondary'"
                size="small"
                variant="tonal"
              >
                {{ user.ativo ? 'Ativo' : 'Inativo' }}
              </VChip>
            </td>

            <td class="text-center">
              <VBtn
                icon
                size="small"
                variant="text"
                color="primary"
                title="Editar Usuário"
                @click="abrirModalEditar(user)"
              >
                <VIcon icon="mdi-pencil-outline" />
              </VBtn>

              <VBtn
                icon
                size="small"
                variant="text"
                :color="user.ativo ? 'error' : 'success'"
                :title="user.ativo ? 'Desativar Usuário' : 'Ativar Usuário'"
                @click="toggleAtivo(user)"
              >
                <VIcon :icon="user.ativo ? 'mdi-account-off-outline' : 'mdi-account-check-outline'" />
              </VBtn>
            </td>
          </tr>

          <tr v-if="usuariosFiltrados.length === 0">
            <td colspan="5" class="text-center py-6 text-medium-emphasis">
              Nenhum usuário encontrado.
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCard>

    <!-- Dialog de Cadastro / Edição -->
    <VDialog v-model="dialogUsuario" max-width="800" persistent>
      <VCard>
        <VCardTitle class="pa-4 d-flex justify-space-between align-center">
          <span class="text-h6 font-weight-bold">
            {{ isEditing ? 'Editar Usuário: ' + formUsuario.username : 'Novo Usuário' }}
          </span>
          <VBtn icon variant="text" size="small" @click="dialogUsuario = false">
            <VIcon icon="mdi-close" />
          </VBtn>
        </VCardTitle>

        <VDivider />

        <VTabs v-model="activeTab" density="compact" class="px-4 pt-2">
          <VTab value="dados" prepend-icon="mdi-account">Dados de Acesso</VTab>
          <VTab value="menus" prepend-icon="mdi-menu">Permissões de Menus</VTab>
          <VTab value="horarios" prepend-icon="mdi-clock-outline">Horários de Login</VTab>
        </VTabs>

        <VCardText class="pa-4">
          <VWindow v-model="activeTab">
            <!-- Aba 1: Dados Gerais -->
            <VWindowItem value="dados">
              <VRow class="pt-2">
                <VCol cols="12" md="6">
                  <VTextField
                    v-model="formUsuario.username"
                    label="Nome de Usuário (Login) *"
                    density="comfortable"
                    placeholder="ex: joao.silva"
                    required
                  />
                </VCol>

                <VCol cols="12" md="6">
                  <VTextField
                    v-model="formUsuario.password"
                    :label="isEditing ? 'Nova Senha (opcional)' : 'Senha de Acesso *'"
                    type="password"
                    density="comfortable"
                    :placeholder="isEditing ? 'Deixe em branco para não alterar' : 'Senha'"
                  />
                </VCol>

                <VCol cols="12" md="6">
                  <VSelect
                    v-model="formUsuario.role"
                    :items="rolesDisponiveis"
                    label="Papel / Nível de Acesso *"
                    density="comfortable"
                  />
                </VCol>

                <VCol cols="12" md="6">
                  <VSelect
                    v-model="formUsuario.loja_id"
                    :items="lojas"
                    item-title="nome"
                    item-value="id"
                    label="Loja Vinculada *"
                    density="comfortable"
                    :disabled="!isSuperAdmin"
                  />
                </VCol>

                <VCol cols="12">
                  <VSwitch
                    v-model="formUsuario.ativo"
                    label="Usuário Ativo (pode efetuar login no sistema)"
                    color="success"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <!-- Aba 2: Permissões de Menu -->
            <VWindowItem value="menus">
              <div class="pt-2">
                <VAlert
                  v-if="formUsuario.role === 'super_admin' || formUsuario.role === 'admin_loja'"
                  type="info"
                  variant="tonal"
                  class="mb-4"
                >
                  Administradores (Super Admin e Gerentes de Loja) possuem acesso automático e irrestrito a todos os menus.
                </VAlert>

                <p class="text-body-2 text-medium-emphasis mb-3">
                  Selecione quais menus este funcionário terá permissão de visualizar e acessar:
                </p>

                <VRow>
                  <VCol
                    v-for="menu in todosMenus"
                    :key="menu.id"
                    cols="12"
                    sm="6"
                  >
                    <VCheckbox
                      v-model="formUsuario.menus"
                      :value="menu.id"
                      :label="`${menu.label} (${menu.chave})`"
                      :disabled="formUsuario.role === 'super_admin' || formUsuario.role === 'admin_loja'"
                      density="compact"
                      hide-details
                    />
                  </VCol>
                </VRow>
              </div>
            </VWindowItem>

            <!-- Aba 3: Horários Permitidos -->
            <VWindowItem value="horarios">
              <div class="pt-2">
                <VAlert
                  v-if="formUsuario.role === 'super_admin' || formUsuario.role === 'admin_loja'"
                  type="info"
                  variant="tonal"
                  class="mb-4"
                >
                  Administradores não sofrem bloqueio de horário e podem acessar a qualquer momento.
                </VAlert>

                <p class="text-body-2 text-medium-emphasis mb-4">
                  Defina os intervalos permitidos para login de funcionários. Sem horário ativo cadastrado, o login será bloqueado (fail-closed).
                </p>

                <VTable density="compact" class="border rounded">
                  <thead>
                    <tr>
                      <th>Dia da Semana</th>
                      <th class="text-center">Permitido</th>
                      <th>Hora Início</th>
                      <th>Hora Fim</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="h in formUsuario.horarios" :key="h.dia_semana">
                      <td class="font-weight-medium">{{ h.dia_nome }}</td>
                      <td class="text-center">
                        <VSwitch
                          v-model="h.ativo"
                          color="primary"
                          density="compact"
                          hide-details
                          :disabled="formUsuario.role === 'super_admin' || formUsuario.role === 'admin_loja'"
                        />
                      </td>
                      <td>
                        <VTextField
                          v-model="h.hora_inicio"
                          type="time"
                          density="compact"
                          hide-details
                          :disabled="!h.ativo || formUsuario.role === 'super_admin' || formUsuario.role === 'admin_loja'"
                          style="max-width: 140px;"
                        />
                      </td>
                      <td>
                        <VTextField
                          v-model="h.hora_fim"
                          type="time"
                          density="compact"
                          hide-details
                          :disabled="!h.ativo || formUsuario.role === 'super_admin' || formUsuario.role === 'admin_loja'"
                          style="max-width: 140px;"
                        />
                      </td>
                    </tr>
                  </tbody>
                </VTable>
              </div>
            </VWindowItem>
          </VWindow>
        </VCardText>

        <VDivider />

        <VCardActions class="pa-4">
          <VSpacer />
          <VBtn variant="outlined" color="secondary" @click="dialogUsuario = false">
            Cancelar
          </VBtn>
          <VBtn color="primary" :loading="isSaving" @click="salvarUsuario">
            Salvar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Snackbar de Feedback -->
    <VSnackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3500"
      location="top right"
    >
      {{ snackbar.text }}
    </VSnackbar>
  </div>
</template>
