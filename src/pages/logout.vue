<script setup>
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'

const router = useRouter()
const ability = useAppAbility()

// Limpa a sessão sem apagar o login salvo intencionalmente pelo usuário.
localStorage.removeItem('userData')
localStorage.removeItem('accessToken')
localStorage.removeItem('userAbilities')
localStorage.removeItem('userMenus')
ability.update(initialAbility)

router.replace('/login')
</script>

<template>
  <div />
</template>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
</route>
