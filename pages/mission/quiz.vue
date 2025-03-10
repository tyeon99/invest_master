<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="wrap">
    <MissionQHeader />
    <div class="container">
      <MissionQIntro 
        :isResultVisible="isResultVisible" 
        :correctAnswers="correctAnswers"
      />
      <div class="content">
        <MissionQContent @result-screen="resultScreen" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isResultVisible: false, // 결과 화면의 표시 여부
      correctAnswers: 0, // 맞춘 문제 수
    };
  },
  methods: {
    resultScreen(correctAnswers) {
      this.correctAnswers = correctAnswers
      this.isResultVisible = true
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