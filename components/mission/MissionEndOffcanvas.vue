<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeEndOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="182" src="~/assets/img/main/offcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        미션 에피소드를 종료하시겠습니까?
      </div>
      <div class="offcanvas-body">
        해당 미션의 에피소드를 종료합니다. <br />
        중도 종료 할 경우 매매체험 기록은 저장되지 않습니다.
      </div>
      <div class="offcanvas-footer">
        <button class="active" @click="goLink('/')">종 료</button>
        <button @click="closeEndOffcanvas">취 소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOffcanvasAni: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    closeEndOffcanvas() {
      this.$emit('close-endOffcanvas')
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
}
.offcanvas-content{
  @apply relative w-full bg-[#fff] p-[68px_32px_44px] rounded-t-[36px];
}
.offcanvas-icon{
  @apply absolute top-[-125px] left-[50%] translate-x-[-50%];
}
.offcanvas-header{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-center text-[#2c2c2c] mb-[30px];
}
.offcanvas-body{
  @apply w-full h-[80px] rounded-[12px] bg-[#f2f9fa] flex justify-center items-center mb-[40px] font-semibold text-[14px] leading-[16px] text-center text-[#00A6BD];
}
.offcanvas-footer{
  @apply w-full flex justify-center items-center gap-[24px];
}
.offcanvas-footer button{
  @apply w-[120px] h-[48px] rounded-[6px] flex justify-center items-center border border-[#00a6bd] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#00a6bd] pt-[3px];
}
.offcanvas-footer button.active{
  @apply bg-[#00A6BD] text-[#fff];
}
</style>