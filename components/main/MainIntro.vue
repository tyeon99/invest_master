<template>
  <div class="mainIntro">
    <div class="mainIntro__banner">
      <div class="mainLogo">
        <img width="62" src="~/assets/img/main/logo-icon.png" alt="로고">
      </div>
      <div class="mainIntro__banner--txt">
        <span>대가들의 투자기법</span>을 마스터하는 <br />
        액티브한 <em>투자 게이미피케이션 경험</em>
      </div>
      <div class="mainIntro__banner--img">
        <img width="50" src="~/assets/img/main/main-banner_img01.png">
        <img width="68" src="~/assets/img/main/main-banner_img02.png">
      </div>
    </div>
    <div class="mainIntro__title">
      클래스 마스터를 향한 위대한 여정! <span>미션 선택</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainIntro__banner{
  @apply w-full h-[77px];
  background: linear-gradient(136.44deg, #DFEEFF 5.75%, #CDFCFF 96.62%);
}
.mainIntro__banner .mainLogo{
  @apply w-fit;
  background: linear-gradient(136.44deg, #000 10%, rgba(0,0,0,0) 90%);
}
.mainIntro__banner{
  @apply relative flex justify-between items-center p-[34px_16px_13px] mb-[20px];
}
.mainLogo{
  @apply absolute top-0 left-0;
}
.mainIntro__banner--txt{
  @apply font-[JalnanGothic] font-normal text-[12px] leading-[16px] text-[#1A2122];
}
.mainIntro__banner--txt span{
  @apply font-[JalnanGothic] text-[#0F83EF];
}
.mainIntro__banner--txt em{
  @apply font-[JalnanGothic] text-[#6066FF];
}
.mainIntro__banner--img{
  @apply flex justify-end items-center absolute right-[16px] top-[5px];
}
.mainIntro__title{
  @apply w-full font-extrabold text-[16px] leading-[20px] text-[#2C2C2C] pl-[12px] mb-[20px];
}
.mainIntro__title span{
  @apply text-[#00C898] border-b-[2px] border-[#00C898];
}
</style>
