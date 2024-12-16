<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeStartOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="182" src="~/assets/img/main/offcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        투자 마스터 클래스 참여를 <br />환영합니다!
      </div>
      <div class="offcanvas-body">
        다양한 <span>투자기법을 학습하고 체험매매</span>를 <br />
        통해 다양한 사례를 경험하세요.<br />
        미션에 참여하여 레벨을 업그레이드하고, <br />
        잠겨 있던 미션들을 하나씩 완료하여 <br />
        클래스 마스터가 되세요!
      </div>
      <div class="offcanvas-footer">
        <button @click="closeStartOffcanvas">게임시작</button>
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
    closeStartOffcanvas() {
      this.$emit('close-startOffcanvas')
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
  @apply w-[208px] h-[45px] rounded-[28px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#2c2c2c] pt-[3px];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
</style>