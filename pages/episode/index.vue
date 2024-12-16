<template>
  <div class="wrap">
    <EpisodeHeader />
    <div class="container">
      <EpisodeIntro />
      <div class="content">
        <EpisodeContent />
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