<template>
  <div class="missionContent">
    <div class="fullBtnGroup">
      <button @click="openPDF">
        <img width="24" src="~/assets/img/mission/pdf-icon.png" alt="PDF 아이콘">
        <span>PDF 보기(전체)</span>
      </button>
      <button @click="goToYoutube">
        <img width="24" src="~/assets/img/mission/youtube-icon.png" alt="youtube 아이콘">
        <span>동영상 보기(전체)</span>
      </button>
    </div>
    <!-- 미션 설명 영역 -->
    <div class="nextButton">
      <button @click="goLink('/mission/quiz')">NEXT</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    goToYoutube() {
      window.location.href = "https://youtu.be/kYNivijylq8"
    },
    openPDF() {
      const pdfPath = require('~/assets/pdf/mission-pdf.pdf')
      window.open(pdfPath.default || pdfPath, "_blank")
    }
  }
}
</script>

<style scoped>
.missionContent{
  @apply w-full p-[20px_0px_50px];
}
.fullBtnGroup{
  @apply w-full px-[18px] flex justify-center items-center gap-[12px] mb-[23px];
}
.fullBtnGroup button{
  @apply w-[50%] h-[42px] flex justify-center items-center gap-[12px] last:gap-[8px] border border-[#2C2C2C] rounded-[8px];
}
.fullBtnGroup button span{
  @apply font-extrabold text-[14px] leading-[14px] text-[#2c2c2c];
}
.nextButton{
  @apply w-full flex justify-center items-center;
}
.nextButton button{
  @apply w-[320px] h-[48px] rounded-[28px] border-[2px] border-[#2c2c2c] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#2c2c2c] pt-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff];
}
</style>