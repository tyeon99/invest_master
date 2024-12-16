<template>
  <div class="episodeIntro">
    <div class="episodeIntro__txt">
      <strong>제공 에피소드</strong>
      <span>
        해당 미션에는 4개의 체험매매 에피소드가 있습니다. <br />
        모든 에피소드를 체험하고, 평균 적중률이 80% 이상이어야 다음 미션을 수행할 수 있습니다.
      </span>
    </div>
    <div class="episodeIntro__img">
      <img width="120" src="~/assets/img/episode/episodeIntro-img.png" alt="에피소드 선택">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.episodeIntro{
  @apply w-full flex justify-between items-center bg-[#3894FF] p-[10px_15px_10px_16px];
}
.episodeIntro__txt{
  @apply flex flex-col justify-start items-start gap-[8px]
}
.episodeIntro__txt strong{
  @apply font-extrabold text-[22px] leading-[22px] text-[#fff];
}
.episodeIntro__txt span{
  @apply font-medium text-[12px] leading-[14.32px] text-[#fff];
}
.episodeIntro__img img{
  @apply min-w-[120px];
}
</style>