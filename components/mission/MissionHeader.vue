<template>
  <div class="missionHeader">
    <div class="missionHeader__menu">
      <button @click="goBack">
        <img width="10" src="~/assets/img/common/back-icon.png" alt="뒤로가기">
      </button>
    </div>
    <div class="missionHeader__txt text-truncate">미션학습 : 5-20일 골든크로스 투자기법 미션학습 : 5-20일 골든크로스 투자기법</div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.missionHeader{
  @apply sticky top-0 z-[999] w-full h-[47px] p-[13px_16px] flex justify-between items-center bg-[#fff];
}
.missionHeader__menu{
  @apply flex justify-center items-center relative z-[99];
}
.missionHeader__txt{
  @apply w-full text-center absolute left-[50%] translate-x-[-50%] font-extrabold text-[18px] leading-[21.48px] text-[#2c2c2c] pl-[40px] pr-[16px];
}
</style>