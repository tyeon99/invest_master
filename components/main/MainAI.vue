<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="mainAI">
    <button @click="openAIOffcanvas">
      <p>
        <span>AI가 추천하는 클래스 마스터 과정</span>
        <em>(추천을 누르고 원하는 클래스를 PICK)</em>
      </p>
      <!-- 활성화 -->
      <img width="64" src="~/assets/img/main/main_ai-icon.png" alt="ai추천">
      <!-- 비활성화 -->
      <!-- <img width="64" src="~/assets/img/main/main_ai-icon-disabled.png" alt="ai추천"> -->
    </button>
    <MainAIOffcanvas
      v-if="isAIOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-aiOffcanvas="closeAIOffcanvas"
    />
    <!-- 토스트 메시지 -->
    <div v-if="toastMessage" class="toast">
      로그인 후 이용가능합니다.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOffcanvasAni: false,
      isAIOffcanvasOpen: false,
      toastMessage: false
    }
  },
  methods: {
    openAIOffcanvas() {
      this.isOffcanvasAni = true
      this.isAIOffcanvasOpen = true
    },
    closeAIOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isAIOffcanvasOpen = false
      }, 300)
    },
    showToast() {
      this.toastMessage = true
      setTimeout(() => {
        this.toastMessage = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.mainAI{
  @apply w-full h-[74px] bg-[#FBD7FF] bg-[url(~/assets/img/main/main_ai-bg.png)] bg-[length:375px_74px] bg-left bg-no-repeat
}
.mainAI button{
  @apply w-full p-[5px_24px] flex justify-between items-center text-left;
}
.mainAI button p{
  @apply flex flex-col gap-[6px] justify-start items-start;
}
.mainAI button p span{
  @apply font-[JalnanGothic] font-normal text-[14px] leading-[16px] text-[#2d2262];
}
.mainAI button p em{
  @apply font-medium text-[11px] leading-[13px] text-[#2d2262];
}
.toast{
  @apply absolute bottom-[13%] left-[50%] translate-x-[-50%] font-normal text-[12px] text-[#fff] bg-[rgba(90,90,90,0.9)] p-[8px_12px] rounded-[24px];
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>