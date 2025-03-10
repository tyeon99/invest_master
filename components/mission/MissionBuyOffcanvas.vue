<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeBuyOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="150" src="~/assets/img/common/buyOffcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        <p>매수 주문</p>
      </div>
      <div class="offcanvas-body">
        <div class="order-box">
          <div class="order-list">
            <span>종목명</span>
            <p>사원시스템</p>
          </div>
          <div class="order-list">
            <span>주문 단가</span>
            <p>267,000원</p>
          </div>
          <div class="order-list">
            <span>총 주문금액</span>
            <p>71,289,000원</p>
          </div>
          <div class="as">자동 매도 예약 (종가 기준)</div>
          <div class="order-list">
            <span>목표가</span>
            <div class="input-box">
              <input class="price" type="text">
              <label for="price01">원</label>
              <em>매수가 기준 자동계산</em>
            </div>
          </div>
          <div class="order-list">
            <span>손절가</span>
            <div class="input-box">
              <input class="price" type="text">
              <label for="price02">원</label>
              <em>±</em>
              <input class="per" type="text">
              <em>%</em>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button class="buy" @click="openOrderCmpOffcanvas">매 수</button>
        <button @click="closeBuyOffcanvas">취 소</button>
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
    closeBuyOffcanvas() {
      this.$emit('close-buyOffcanvas')
    },
    openOrderCmpOffcanvas() {
      this.$emit('open-orderCmpOffcanvas')
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
}
.offcanvas-content{
  @apply relative w-full bg-[#fff] p-[68px_0px_44px] rounded-t-[36px];
}
.offcanvas-icon{
  @apply absolute top-[-63px] left-[50%] translate-x-[-50%];
}
.offcanvas-header{
  @apply w-full px-[32px];
}
.offcanvas-header p{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-center text-[#2c2c2c] mb-[30px] pb-[24px] border-b border-[#2c2c2c];
}
.offcanvas-body{
  @apply w-full px-[24px];
}
.offcanvas-body .order-box{
  @apply w-full flex flex-col justify-start items-start gap-[16px];
}
.offcanvas-body .order-box .order-list{
  @apply flex justify-start items-center gap-[28px];
}
.offcanvas-body .order-box .order-list span{
  @apply w-[64px] font-semibold text-[14px] leading-[20px] text-[#5C808F];
}
.offcanvas-body .order-box .order-list p{
  @apply font-extrabold text-[16px] leading-[20px] text-[#2c2c2c];
}
.offcanvas-body .order-box .as{
  @apply w-full text-center font-medium text-[14px] leading-[18px] text-[#00A6BD] mt-[10px];
}
.input-box{
  @apply flex justify-start items-center gap-[8px];
}
.input-box input.price{
  @apply w-[104px] h-[36px] p-[8px] text-right border border-[#DBE3EE] bg-[#F0F4FA] rounded-[8px] font-semibold text-[14px] leading-[20px] text-[#2c2c2c];
}
.input-box input.per{
  @apply w-[60px] h-[36px] p-[8px] text-right border border-[#DBE3EE] bg-[#F0F4FA] rounded-[8px] font-semibold text-[14px] leading-[20px] text-[#2c2c2c];
}
.input-box label{
  @apply font-semibold text-[14px] leading-[20px] text-[#2c2c2c];
}
.input-box em{
  @apply font-medium text-[12px] leading-[20px] text-[#5C808F];
}
.offcanvas-footer{
  @apply w-full flex justify-center items-center gap-[24px] mt-[50px];
}
.offcanvas-footer button{
  @apply w-[120px] h-[48px] rounded-[6px] flex justify-center items-center border border-[#2c2c2c] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#2C2C2C] pt-[3px];
}
.offcanvas-footer button.buy{
  @apply bg-[#FF4646] border-none text-[#fff];
}
</style>