<template>
  <div class="rankingContent">
    <component
      :is="component"
      v-for="(component, idx) in components"
      :key="idx"
    />
  </div>
</template>

<script>
import RankingProfile from '~/components/ranking/contents/RankingProfile.vue'
import RankingClassMaster from '~/components/ranking/contents/RankingClassMaster.vue'
import RankingMedal from '~/components/ranking/contents/RankingMedal.vue'

export default {
  components: {
    RankingProfile,
    RankingClassMaster,
    RankingMedal,
  },
  data() {
    return {
      components: ['RankingProfile', 'RankingClassMaster', 'RankingMedal']
    }
  }
}
</script>

<style scoped>
.rankingContent{
  @apply w-full p-[12px_16px] flex flex-col justify-start items-start gap-[32px];
}
</style>