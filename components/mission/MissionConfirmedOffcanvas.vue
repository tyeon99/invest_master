<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeConfirmedOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="182" src="~/assets/img/main/aiOffcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        모든 종목의 매수를 확정하셨나요?
      </div>
      <div class="offcanvas-body">
        ‘확인’ 버튼을 누르면, 매수하신 종목은 <br />
        만료일까지 매일 종가를 기준으로 손절가, 목표가, <br />
        또는 만료일 종가 중 가장 먼저 도달하는 <br />
        가격에 매도됩니다. <br />
        이후 매매 결과 화면으로 이동하게 됩니다.<br />
        <span>진행하시겠습니까?</span>
      </div>
      <div class="offcanvas-footer">
        <button class="active" @click="openCompleteOffcanvas">종 료</button>
        <button @click="closeConfirmedOffcanvas">취 소</button>
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
    closeConfirmedOffcanvas() {
      this.$emit('close-confirmedOffcanvas')
    },
    openCompleteOffcanvas() {
      this.$emit('open-completeOffcanvas')
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
  @apply absolute top-[-70px] left-[50%] translate-x-[-50%];
}
.offcanvas-header{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-center text-[#2c2c2c] mb-[30px];
}
.offcanvas-body{
  @apply w-full p-[16px_20px] rounded-[12px] bg-[#f2f9fa] mb-[40px] font-semibold text-[14px] leading-[16px] text-center text-[#00A6BD];
}
.offcanvas-body span{
  @apply font-extrabold text-[16px];
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