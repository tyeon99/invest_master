<template>
  <div class="rankingMedal">
    <div class="rankingMedal__title">수익률 상위 수상 메달</div>
    <div class="rankingMedal__box">
      <div class="top">
        <span>2024.05.02</span>
        <strong>클래스-1 미션-2 EP-02</strong>
        <p>수익률 <em>24.5%</em></p>
      </div>
      <div class="bottom">
        <div class="medal">
          <img width="38" src="~/assets/img/ranking/medal-gold02.png" alt="금메달">
          <span>미션 1위</span>
        </div>
        <div class="medal">
          <img width="38" src="~/assets/img/ranking/medal-silver02.png" alt="은메달">
          <span>클래스 2위</span>
        </div>
        <div class="medal">
          <img width="38" src="~/assets/img/ranking/medal-bronze02.png" alt="동메달">
          <span>클래스 4위</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rankingMedal{
  @apply w-full;
}
.rankingMedal__title{
  @apply font-extrabold text-[16px] leading-[14px] text-[#2c2c2c] mb-[16px];
}
.rankingMedal__box{
  @apply w-full bg-[#E3FBFB] rounded-[12px] p-[4px_4px_12px];
}
.rankingMedal__box .top{
  @apply w-full p-[7px_11px] bg-[#1AB6D8] rounded-[8px] flex justify-start items-center gap-[7px] mb-[22px];
}
.rankingMedal__box .top span{
  @apply w-[78px] h-[20px] rounded-[8px] border border-[#7ED8E4] flex justify-center items-center font-extrabold text-[10px] leading-[12px] text-[#fff];
}
.rankingMedal__box .top strong{
  @apply block font-[JalnanGothic] font-normal text-[12px] leading-[14px] text-[#fff] pt-[2px];
}
.rankingMedal__box .top p{
  @apply font-extrabold text-[14px] leading-[14px] text-[#fff];
}
.rankingMedal__box .top p em{
  @apply text-[14px] text-[#FF4646] leading-[14px];
}
.rankingMedal__box .bottom{
  @apply flex justify-center items-center gap-[10px];
}
.rankingMedal__box .bottom .medal{
  @apply w-[92px] flex flex-col justify-center items-center gap-[12px];
}
.rankingMedal__box .bottom .medal span{
  @apply block font-extrabold text-[14px] leading-[14px] text-[#00A6BD];
}
</style>