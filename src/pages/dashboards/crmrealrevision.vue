<script setup>
import illustration1 from '@/assets/images/cards/illustration-1.png'
import illustration2 from '@/assets/images/cards/illustration-2.png'
import CrmSalesOverview from '@/views/dashboards/crmrealrevision/CrmSalesOverview.vue'
import CrmTransactions from '@/views/dashboards/crmrealrevision/CrmTransactions.vue'

const statisticsWithImages = [
  {
    title: 'Ratings',
    subtitle: 'Year of 2021',
    stats: '13k',
    change: 38,
    image: illustration1,
    color: 'primary'
  },
  {
    title: 'Sessions',
    subtitle: 'Last Week',
    stats: '24.5k',
    change: -22,
    image: illustration2,
    color: 'secondary'
  }
]
const statistic = {
  title: 'New Project',
  color: 'primary',
  icon: 'mdi-briefcase-variant-outline',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project'
}
</script>

<template>
  <section>
    <VRow class="mb-2">
      <VCol
        cols="12"
        md="6"
      >
        <CrmTransactions />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <CrmSalesOverview />
      </VCol>
    </VRow>
  </section>
</template>

