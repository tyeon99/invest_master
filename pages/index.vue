<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <MainHeader />
    <div class="container">
      <MainIntro />
      <div class="content">
        <MainContent />
        <MainNotice />
        <MainAI />
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
  layout: 'default',
  data() {
    return {
      isOffcanvasAni: false,
      isStartOffcanvasOpen: false
    }
  },
  mounted() {
    // 로컬 스토리지에서 방문 여부 확인
    const hasVisited = localStorage.getItem("hasVisited")

    if (!hasVisited) {
      // 처음 방문한 경우만 열기
      this.openStartOffcanvas()
      localStorage.setItem("hasVisited", "true") // 방문 기록 저장
    }
    // this.openStartOffcanvas()
  },
  methods: {
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
