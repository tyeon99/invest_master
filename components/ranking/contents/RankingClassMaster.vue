<template>
  <div class="rankingClassMaster">
    <div class="rankingClassMaster__title">클래스 마스터 달성</div>
    <div class="noAchieved">
      <strong>미달성</strong>
      <p>현재 획득한 클래스 마스터 휘장이 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rankingClassMaster{
  @apply w-full;
}
.rankingClassMaster__title{
  @apply font-extrabold text-[16px] leading-[14px] text-[#2c2c2c] mb-[16px];
}
.noAchieved{
  @apply w-full flex flex-col justify-center items-center gap-[8px] pt-[16px];
}
.noAchieved strong{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#00aad0];
}
.noAchieved p{
  @apply font-semibold text-[14px] leading-[14px] text-[#00aad0];
}
</style>