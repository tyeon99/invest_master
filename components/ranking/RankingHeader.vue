<template>
  <div class="episodeHeader">
    <div class="episodeHeader__menu">
      <button @click="goBack">
        <img width="10" src="~/assets/img/common/back-icon.png" alt="뒤로가기">
      </button>
    </div>
    <div class="episodeHeader__txt">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  } 
}
</script>

<style scoped>
.episodeHeader{
  @apply sticky top-0 z-[999] w-full h-[47px] p-[13px_16px] flex justify-between items-center bg-[#fff];
}
.episodeHeader__menu{
  @apply flex justify-center items-center relative z-[99];
}
.episodeHeader__txt{
  @apply w-full text-center absolute left-[50%] translate-x-[-50%] font-extrabold text-[18px] leading-[21.48px] text-[#2c2c2c];
}
</style>