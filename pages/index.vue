<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <MainHeader />
    <div class="container">
      <MainIntro />
      <div class="content">
        <MainContent ref="mainContent" />
        <MainNotice />
        <MainAI @ai-recommendation="triggerAIRecom" />
      </div>
    </div>
    <MainStartOffcanvas
      v-if="isStartOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-startOffcanvas="closeStartOffcanvas"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOffcanvasAni: false,
      isStartOffcanvasOpen: false
    }
  },
  mounted() {
    this.openStartOffcanvas()
  },
  methods: {
    triggerAIRecom() {
      // MainContent의 aiRecom 메소드 호출
      this.$refs.mainContent.aiRecom();
    },
    openStartOffcanvas() {
      this.isOffcanvasAni = true
      this.isStartOffcanvasOpen = true
    },
    closeStartOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isStartOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.wrap{
  @apply w-full max-w-full;
}
.container{
  @apply w-full max-w-full;
}
.content{
  @apply w-full max-w-full;
}
</style>
