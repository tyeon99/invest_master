<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="missionQContent">
    <div class="quizGroup">
      <div
        v-for="(quiz, index) in quizzes"
        :key="index"
        class="quiz"
      >
        <div class="question">
          <div class="question-num">
            {{ (index + 1).toString().padStart(2, '0') }}
          </div>
          <div class="question-txt">
            {{ quiz.question }}
          </div>
        </div>
        <div v-if="!isResultVisible" class="answer">
          <div
            v-for="(answer, idx) in quiz.answers" 
            :key="idx"
            class="answer_radio"
          >
          <input 
            :id="`quiz${(index + 1).toString().padStart(2, '0')}_${(idx + 1).toString().padStart(2, '0')}`" 
            v-model="quiz.selected" 
            type="radio"
            :name="`quiz${(index + 1).toString().padStart(2, '0')}`"
            :value="idx"
          />
          <label :for="`quiz${(index + 1).toString().padStart(2, '0')}_${(idx + 1).toString().padStart(2, '0')}`">
            {{ answer }}
          </label>
          </div>
        </div>
        <!-- 결과화면 -->
        <div v-if="isResultVisible" class="result">
          <div class="select-answer">
            <span
              :class="{ correct: isCorrect(index), wrong: !isCorrect(index) }"
            >
              선 택
            </span>
            <p :class="{ wrong: !isCorrect(index) }">
              {{ quiz.answers[quiz.selected].charAt(0) }}) 
              <em v-if="isCorrect(index)">정답입니다.</em>
              <em v-else>오답입니다.</em>
            </p>
          </div>
          <div class="correct-answer">
            <span>정 답</span>
            <p>{{ quizzes[index].answers[correctAnswers[index]] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isResultVisible" class="submit">
      <button
        :class="{ active: allAnswered }"
        @click="allAnswered ? resultScreen() : openNoAnswerOffcanvas()"
      >
        제 출
      </button>
    </div>
    <div v-if="isResultVisible" class="submit">
      <button class="active" @click="goLink('/mission/episode')">
        체험매매 에피소드로 시작
      </button>
    </div>
    <MissionNoAnswerOffcanvas 
      v-if="isNoAnswerOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-noAnswerOffcanvas="closeNoAnswerOffcanvas"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizzes: [
        {
          question: "골든크로스는 어떤 이동평균선의 교차로 발생하나요?",
          answers: [
            "a) 단기 이평선이 장기 이평선을 하향 돌파할 때",
            "b) 단기 이평선이 장기 이평선을 상향 돌파할 때",
            "c) 장기 이평선이 단기 이평선을 상향 돌파할 때",
            "d) 장기 이평선이 단기 이평선을 하향 돌파할 때"
          ],
          selected: null
        },
        {
          question: "단기 이동평균선은 보통 며칠 이평선을 사용하는가?",
          answers: [
            "a) 50일",
            "b) 5일",
            "c) 100일",
            "d) 200일"
          ],
          selected: null
        },
        {
          question: "5일선이 20일선을 강하게 교차할 때 어떤 행동을 취해야 하나요?",
          answers: [
            "a) 매도 진입",
            "b) 매수 진입",
            "c) 관망",
            "d) 추가 정보가 필요하다"
          ],
          selected: null
        },
        {
          question: "골든크로스 매매에서 손절매 타이밍은 언제인가요?",
          answers: [
            "a) 5일선이 다시 20일선을 하향 이탈할 때",
            "b) 5일선이 상승할 때",
            "c) 주가가 급락할 때",
            "d) 거래량이 줄어들 때"
          ],
          selected: null
        },
        {
          question: "5일선이 20일선을 강하게 상향 돌파하는 것이 중요한 이유는 무엇인가요?",
          answers: [
            "a) 하락 추세가 지속될 것을 의미히기 때문이다.",
            "b) 상승 추세가 시작될 신호이기 때문이다.",
            "c) 단기 변동성이 높아질 것이기 때문이다.",
            "d) 주가가 크게 움직이지 않을 것이다."
          ],
          selected: null
        }
      ],
      correctAnswers: [1, 1, 1, 0 ,1],
      isResultVisible: false,
      isOffcanvasAni: false,
      isNoAnswerOffcanvasOpen: false
    };
  },
  computed: {
    allAnswered() {
      return this.quizzes.every((quiz) => quiz.selected !== null)
    },
    score() {
      return this.quizzes.filter(
        (quiz, index) => quiz.selected === this.correctAnswers[index]
      ).length
    },
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    openNoAnswerOffcanvas() {
      this.isOffcanvasAni = true
      this.isNoAnswerOffcanvasOpen = true
    },
    closeNoAnswerOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isNoAnswerOffcanvasOpen = false
      }, 300)
    },
    resultScreen() {
      this.$emit("result-screen", this.score)
      this.isResultVisible = true
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    isCorrect(index) {
      return this.quizzes[index].selected === this.correctAnswers[index]
    }
  }
}
</script>

<style scoped>
.missionQContent{
  @apply w-full h-full min-h-[calc(100vh-146px)] bg-[#EEF0F3] p-[33px_16px_50px];
}
.quizGroup{
  @apply w-full flex flex-col justify-start items-center gap-[16px];
}
.quiz{
  @apply w-full bg-[#fff] border border-[#d7dff9] p-[16px_12px];
}
.question{
  @apply w-full flex justify-start items-start gap-[12px] mb-[16px];
}
.question .question-num{
  @apply w-[30px] min-w-[30px] h-[30px] flex justify-center items-center bg-[#3EC3D6] rounded-full font-extrabold text-[14px] leading-[16px] text-[#fff];
}
.question .question-txt{
  @apply font-extrabold text-[16px] leading-[20px] text-[#2c2c2c];
}
.answer{
  @apply w-full pl-[12px] flex flex-col justify-start items-start gap-[12px];
}
.answer_radio input[type=radio]{
  @apply hidden;
}
.answer_radio input[type=radio]+label{
  @apply block w-full min-w-[20px] pl-[32px] bg-[url(~/assets/img/common/radio.png)] bg-no-repeat bg-[length:20px_20px] bg-left font-medium text-[14px] leading-[20px] text-[#2c2c2c];
}
.answer_radio input[type=radio]:checked+label{
  @apply bg-[url(~/assets/img/common/radio-checked.png)];
}
.result{
  @apply w-full pl-[12px] flex flex-col justify-start items-start gap-[12px];
}
.select-answer, .correct-answer{
  @apply w-full flex justify-start items-start gap-[12px];
}
.select-answer span, .correct-answer span{
  @apply min-w-[42px] h-[24px] flex justify-center items-center font-extrabold text-[12px] leading-[16px] text-[#fff];
}
.select-answer p, .correct-answer p{
  @apply pt-[3px] font-medium text-[14px] leading-[18px] text-[#2c2c2c];
}
.submit{
  @apply w-full flex justify-center items-center mt-[40px];
}
.submit button{
  @apply w-[320px] h-[48px] rounded-[28px] border-[2px] border-[#9BA2AE] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#9BA2AE] pt-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#EEF0F3];
}
.submit button.active{
  @apply border-[#2c2c2c] bg-[#fff] text-[#2c2c2c];
}
.select-answer span.wrong{
  @apply bg-[#FF7593];
}
.select-answer span.correct{
  @apply bg-[#AE8EFF];
}
.select-answer p.wrong{
  @apply text-[#FF7593];
}
.correct-answer span{
  @apply bg-[#3EC3D6];
}
</style>