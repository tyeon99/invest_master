<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="mainAI">
    <button @click="openAIOffcanvas">
      <p>
        <span>AI가 추천하는 클래스 마스터 과정</span>
        <em>(추천을 누르고 원하는 클래스를 PICK)</em>
      </p>
      <img width="64" src="~/assets/img/main/main_ai-icon.png" alt="ai추천">
    </button>
    <MainAIOffcanvas
      v-if="isAIOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-aiOffcanvas="closeAIOffcanvas"
      @ai-recommendation="triggerAIRecom"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOffcanvasAni: false,
      isAIOffcanvasOpen: false
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
    triggerAIRecom() {
      // MainContent 컴포넌트를 ref로 참조하여 aiRecom 메소드 호출
      this.$emit('ai-recommendation')
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
</style>