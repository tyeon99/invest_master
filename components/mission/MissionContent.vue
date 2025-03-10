<template>
  <div class="missionContent">
    <div class="w-full">
      <div class="missionContent__name">
        <span>미션01</span>
        <p>5-20일 골든크로스 투자기법</p>
      </div>
      <div class="fullBtnGroup">
        <button @click="openPDF">
          <img width="24" src="~/assets/img/mission/pdf-icon.png" alt="PDF 아이콘">
          <span>PDF 보기(전체)</span>
        </button>
      </div>
      <div class="missionContent__pdf">
        <!-- <img src="~/assets/img/mission/pdf-preview.png" alt="PDF 미리보기"> -->
        <!-- <embed :src="pdfSrc" width="100%" height="400px" type="application/pdf" /> -->
        <iframe :src="pdfSrc" width="100%" height="400px"></iframe>
        <!-- <object :data="pdfSrc" type="application/pdf" width="100%" height="400px"></object> -->
      </div>
    </div>
    <div class="nextButton">
      <button @click="goLink('/mission/quiz')">NEXT</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pdfSrc: require('~/assets/pdf/mission-pdf.pdf')
      // pdfSrc: '/pdf/mission-pdf.pdf'
      pdfUrl: "https://img.thinkpool.com/invest_master/pdf/mission-pdf.pdf",
      pdfSrc: "https://docs.google.com/gview?embedded=true&url=" + encodeURIComponent("https://img.thinkpool.com/invest_master/pdf/mission-pdf.pdf")
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    // openYoutube() {
    //   window.open("https://youtu.be/kYNivijylq8", "_blank")
    // },
    openPDF() {
      window.open(this.pdfSrc.default || this.pdfSrc, "_blank")
    }
  }
}
</script>

<style scoped>
.missionContent{
  @apply w-full p-[20px_0px_50px] flex flex-col justify-between items-center bg-[#fff];
}
.missionContent__name{
  @apply w-full flex justify-start items-center gap-[12px] px-[16px] mb-[16px];
}
.missionContent__name span{
  @apply inline-block border border-[#7ED8E4] rounded-[12px] p-[5px_9px] font-semibold text-[12px] leading-[12px] text-[#00A6BD];
}
.missionContent__name p{
  @apply font-[JalnanGothic] font-normal text-[14px] leading-[16px] text-[#2c2c2c];
}
.fullBtnGroup{
  @apply w-full px-[18px] flex justify-start items-center gap-[12px] mb-[23px];
}
.fullBtnGroup button{
  @apply w-[50%] h-[42px] flex justify-center items-center gap-[12px] last:gap-[8px] border border-[#2C2C2C] rounded-[8px];
}
.fullBtnGroup button span{
  @apply font-extrabold text-[14px] leading-[14px] text-[#2c2c2c];
}
.missionContent__pdf{
  @apply w-full h-[100%];
}
.nextButton{
  @apply w-full flex justify-center items-center mt-[30px];
}
.nextButton button{
  @apply w-[320px] h-[48px] rounded-[28px] border-[2px] border-[#2c2c2c] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#2c2c2c] pt-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff];
}
</style>