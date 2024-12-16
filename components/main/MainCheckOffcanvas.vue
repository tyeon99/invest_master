<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeCheckOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="182" src="~/assets/img/main/offcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        확인하세요~
      </div>
      <div class="offcanvas-body">
        해당 미션 공략 레벨이 부족합니다. <br />
        클래스-1의 미션-1 공략 완료 후 <br />
        도전하세요.
      </div>
      <div class="offcanvas-footer">
        <button @click="closeCheckOffcanvas">닫 기</button>
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
    closeCheckOffcanvas() {
      this.$emit('close-checkOffcanvas')
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
}
.offcanvas-content{
  @apply relative w-full bg-[#fff] p-[68px_32px_62px] rounded-t-[36px];
}
.offcanvas-icon{
  @apply absolute top-[-125px] left-[50%] translate-x-[-50%];
}
.offcanvas-header{
  @apply font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-center text-[#2c2c2c] mb-[30px];
}
.offcanvas-body{
  @apply w-full rounded-[12px] bg-[#f2f9fa] p-[20px_28px] mb-[24px] font-normal text-[16px] leading-[19px] text-center text-[#2c2c2c];
}
.offcanvas-body span{
  @apply font-extrabold text-[#00A6BD];
}
.offcanvas-footer{
  @apply w-full flex justify-center items-center;
}
.offcanvas-footer button{
  @apply w-[100px] h-[48px] rounded-[6px] flex justify-center items-center border border-[#00a6bd] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#00a6bd] pt-[3px];
}
</style>