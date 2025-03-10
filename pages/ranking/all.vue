<template>
  <div class="wrap">
    <RankingHeader title="전체 랭킹" />
    <div class="container">
      <div class="content">
        <RankingAllContent />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{
  @apply w-full max-w-full;
}
.container{
  @apply w-full max-w-full;
}
.content{
  @apply w-full max-w-full;
}
</style>