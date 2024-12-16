<template>
  <div class="missionQIntro">
    <div v-if="!isResultVisible" class="missionQIntro__txt">
      <div class="missionQIntro__txt--title">
        <strong>평가퀴즈</strong>
        <em>미션01</em>
      </div>
      <span>
        매매기법을 복습하고 이해도를 확인하는 <br />
        퀴즈입니다.
      </span>
    </div>
    <!-- 평가퀴즈 완료 -->
    <div v-if="isResultVisible" class="missionQIntro__txt">
      <div class="missionQIntro__txt--title">
        <strong>평가퀴즈 완료</strong>
      </div>
      <span>
        총 <strong>5문제</strong> 중 <strong>{{ correctAnswers }}문제</strong>를 맞추셨습니다. <br />
        <em>{{ resultText }}</em>
      </span>
    </div>
    <div class="missionQIntro__img">
      <img width="97" src="~/assets/img/mission/missionQ-img.png" alt="평가퀴즈 이미지">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isResultVisible: {
      type: Boolean,
      required: true,
    },
    correctAnswers: {
      type: Number,
      required: true,
    },
  },
  computed: {
    resultText() {
      if (this.correctAnswers === 5) {
        return '미션학습에 대한 이해도가 매우 높습니다. 잘하셨습니다.'
      } else if (this.correctAnswers === 4) {
        return '미션학습에 대한 이해도가 매우 높습니다. 잘하셨습니다.'
      } else if (this.correctAnswers === 3) {
        return '나쁘지 않은 성과입니다. 기본적인 이해는 있지만 몇 가지 세부사항에 대한 학습이 필요합니다.'
      } else if (this.correctAnswers === 2) {
        return '노력하셨습니다. 더 많은 학습과 복습이 필요합니다.'
      } else{
        return '현재 이해도가 부족합니다. 다시 한번 학습해 보세요.'
      }
    }
  }
}
</script>

<style scoped>
.missionQIntro{
  @apply w-full flex justify-between items-center gap-[10px] bg-[#7875FD] p-[23px_36px_16px_16px];
}
.missionQIntro__txt{
  @apply flex flex-col justify-start items-start gap-[8px]
}
.missionQIntro__txt--title {
  @apply flex justify-start items-center gap-[8px];
}
.missionQIntro__txt--title strong{
  @apply font-extrabold text-[22px] leading-[22px] text-[#fff];
}
.missionQIntro__txt--title em{
  @apply p-[3px_10px] border border-[#fff] rounded-[12px] font-semibold text-[10px] leading-[12px] text-[#fff];
}
.missionQIntro__txt span{
  @apply font-medium text-[12px] leading-[14.32px] text-[#fff];
}
.missionQIntro__txt span strong{
  @apply text-[16px] font-extrabold;
}
.missionQIntro__txt span em{
  @apply inline-block mt-[4px] font-extrabold text-[12px] leading-[14px];
}
.missionQIntro__img img{
  @apply min-w-[97px];
}
</style>