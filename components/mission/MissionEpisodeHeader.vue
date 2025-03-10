<template>
  <div class="missionHeader">
    <div class="missionHeader__txt">단판 종가매매</div>
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
  @apply sticky top-0 z-[999] w-full h-[58px] p-[13px_16px] flex justify-between items-center bg-[#fff];
}
.missionHeader__txt{
  @apply w-full text-center absolute left-[50%] translate-x-[-50%] font-extrabold text-[18px] leading-[21.48px] text-[#2c2c2c];
}
</style>