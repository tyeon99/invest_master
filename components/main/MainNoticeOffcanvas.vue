<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeNoticeOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="182" src="~/assets/img/main/offcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        &lt;공지사항&gt;<br />
        액티브시니어를 위한 <br />
        투자교육 게임 오픈 안내
      </div>
      <div class="offcanvas-body">
        액티브 시니어를 위한 게이미피케이션 투자 교육 게임, 클래스 마스터가 드디어 오픈했습니다! <br />
        이제 복잡한 투자 이론이 아닌, 게임을 통해 쉽고 재미있게 배우는 투자 교육을 경험해보세요!
      </div>
      <div class="offcanvas-footer">
        <button @click="closeNoticeOffcanvas">닫 기</button>
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
    closeNoticeOffcanvas() {
      this.$emit('close-noticeOffcanvas')
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
  @apply font-[JalnanGothic] font-normal text-[20px] leading-[24px] text-center text-[#2c2c2c] mb-[12px];
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
  @apply w-[208px] h-[45px] rounded-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#2c2c2c] pt-[3px];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
</style>