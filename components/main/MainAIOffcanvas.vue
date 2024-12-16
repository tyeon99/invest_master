<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeAIOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-icon">
        <img width="182" src="~/assets/img/main/aiOffcanvas-icon.png" alt="아이콘">
      </div>
      <div class="offcanvas-header">
        <p v-if="!isAnalyzing">
          마스터 할 클래스를 선택하면 <br />
          AI가 사용자 취향과 자질을 분석하여<br />
          최적의 학습경로를 추천해드립니다.
        </p>
        <p v-else>
          잠시만 기다리세요 <br />
          AI가 최적의 학습경로를 분석중입니다. <br />
          분석 후 AI추천 표시를 확인하세요.
        </p>
      </div>
      <div class="offcanvas-body">
        <div v-if="!isAnalyzing" class="radio-group">
          <div
            v-for="(missionClass, idx) in missionClasses"
            :key="idx" class="radio"
            :class="{ 'disabled': idx !== 0 }"
          >
            <input
              :id="'class0' + (idx + 1)"
              type="radio"
              name="class"
              :checked="idx === 0"
              :disabled="idx !== 0"
            />
            <label :for="'class0' + (idx + 1)">
              <em>{{ missionClass.title }}</em>
              <span>{{ missionClass.description }}</span>
            </label>
          </div>
        </div>
        <div v-else class="analyzing">
          <p>AI 분석중...</p>
          <div class="loadingBar-bg"></div>
          <div class="loadingBar">
            <div class="loading"></div>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button
          class="active"
          :class="{'ing': isAnalyzing}"
          @click="analyzeAI"
        >
          AI 분석
        </button>
        <button @click="closeAIOffcanvas">취 소</button>
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
  data() {
    return {
      missionClasses: [
        { title: "클래스 01", description: "가격패턴 투자기법" },
        { title: "클래스 02", description: "대가들의 투자기법" },
        { title: "클래스 03", description: "가치평가 매매기법" },
        { title: "클래스 04", description: "AI 라씨 매매신호" },
      ],
      isAnalyzing: false
    }
  },
  methods: {
    closeAIOffcanvas() {
      this.$emit('close-aiOffcanvas')
    },
    analyzeAI() {
      this.isAnalyzing = true
      setTimeout(() => {
        this.closeAIOffcanvas()
        this.$emit('ai-recommendation')
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, 5000)
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
}
.offcanvas-content{
  @apply relative w-full bg-[#fff] p-[68px_32px_44px] rounded-t-[36px];
}
.offcanvas-icon{
  @apply absolute top-[-70px] left-[50%] translate-x-[-50%];
}
.offcanvas-header p{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-center text-[#2c2c2c] mb-[28px];
}
.offcanvas-body{
  @apply w-full rounded-[12px] bg-[#f2f9fa] p-[14px_16px] mb-[40px];
}
.offcanvas-body .radio-group{
  @apply flex flex-col gap-[12px] justify-start items-start;
}
.offcanvas-body .radio-group .radio input[type=radio]{
  @apply hidden;
}
.offcanvas-body .radio-group .radio input[type=radio]+label{
  @apply pl-[40px] bg-[url(~/assets/img/common/radio.png)] bg-no-repeat bg-[length:24px_24px] bg-left flex justify-start items-center gap-[8px];
}
.offcanvas-body .radio-group .radio input[type=radio]:checked+label{
  @apply bg-[url(~/assets/img/common/radio-checked.png)];
}
.offcanvas-body .radio-group .radio input[type=radio]+label em{
  @apply w-[68px] h-[24px] border border-[#7ED8E4] flex justify-center items-center font-extrabold text-[12px] leading-[12px] text-[#00A6BD];
}
.offcanvas-body .radio-group .radio input[type=radio]+label span{
  @apply font-semibold text-[16px] leading-[19px] text-[#2c2c2c];
}
.offcanvas-body .analyzing{
  @apply relative p-[24px_10px_36px] flex flex-col justify-center items-center gap-[30px];
}
.offcanvas-body .analyzing p{
  @apply font-[JalnanGothic] font-normal text-[14px] leading-[16px] text-[#514170];
}
.offcanvas-body .analyzing .loadingBar-bg{
  @apply absolute block w-[341px] h-[119px] bg-[url(~/assets/img/main/aiOffcanvas-shadow.png)] bg-center bg-[length:341px_119px] left-[-35px] top-[30px] z-[9];
}
.offcanvas-body .analyzing .loadingBar{
  @apply relative z-[99] w-[248px] h-[24px] rounded-[32px] bg-[#fff] p-[4px_6px];
}
.offcanvas-body .analyzing .loading{
  @apply absolute w-0 max-w-[236px] h-[16px] rounded-[32px] top-[4px] left-[6px] z-[999];
  background: radial-gradient(100.64% 213.71% at -5.14% 100%, #224BDA 0%, #5949DB 29.69%, #AD33B8 54.17%, #C42EA3 77.08%, #E93AB8 100%);
  animation: loadingAnimation 3s ease-in-out forwards;
}
@keyframes loadingAnimation {
  from {
    width: 0;
  }
  to {
    width: 236px;
  }
}
.offcanvas-footer{
  @apply w-full flex justify-center items-center gap-[12px];
}
.offcanvas-footer button{
  @apply w-[100px] h-[48px] rounded-[6px] flex justify-center items-center border border-[#00a6bd] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#00a6bd] pt-[3px];
}
.offcanvas-footer button.active{
  @apply w-[160px] text-[#2c2c2c] border-none;
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.offcanvas-footer button.active.ing{
  @apply bg-[#C6F3F1] text-[#85C0C1] bg-none;
}

.offcanvas-body .radio-group .radio.disabled input[type=radio]+label em{
  @apply border-[#B6BECA] text-[#B6BECA];
}
.offcanvas-body .radio-group .radio.disabled input[type=radio]+label span{
  @apply text-[#B6BECA];
}
</style>