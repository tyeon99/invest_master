<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="mainNotice">
    <button @click="openNoticeOffcanvas">
      <span>
        <img width="10" src="~/assets/img/main/main_notice-icon.png" alt="공지사항">
        <em>공지사항</em>
      </span>
      <p>5월 신규 미션 추가 안내</p>
    </button>
    <MainNoticeOffcanvas
      v-if="isNoticeOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-noticeOffcanvas="closeNoticeOffcanvas"
    />
  </div>
</template>

<script>
export default {
  data() {
    return{
      isOffcanvasAni: false,
      isNoticeOffcanvasOpen: false,
    }
  },
  methods: {
    openNoticeOffcanvas() {
      this.isOffcanvasAni = true
      this.isNoticeOffcanvasOpen = true
    },
    closeNoticeOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isNoticeOffcanvasOpen = false
      }, 300)
    },
  }
}
</script>

<style scoped>
.mainNotice{
  @apply w-full p-[0px_12px] mb-[15px];
}
.mainNotice button{
  @apply w-full flex justify-start items-center gap-[12px];
}
.mainNotice span{
  @apply w-[68px] h-[20px] flex justify-center items-center gap-[3.6px] border border-[#00e2ac] rounded-[12px];
}
.mainNotice span em{
  @apply font-extrabold text-[11px] leading-[13.13px] text-[#0cc2c2] pt-[2px];
}
.mainNotice p{
  @apply font-medium text-[14px] leading-[16.71px] text-[#2c2c2c];
}
</style>