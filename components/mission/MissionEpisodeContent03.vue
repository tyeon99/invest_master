<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="missionEpisodeContent">
    <div class="missionEpisodeContent__title">
      미션 기법에 맞는 매수 종목을 선택하세요.
    </div>
    <div class="missionEpisodeContent__radio">
      <div class="radio-group">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="radio"
        >
          <input
            :id="'item0' + (idx + 1)"
            v-model="selectedItem"
            type="radio"
            name="item" 
            :value="item" 
          />
          <label :for="'item0' + (idx + 1)">
            <span>{{ item }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="missionEpisodeContent__check">
      <div class="item">
        <span>{{ selectedItem }}</span>
        <em>{{ currentPrice }}</em>
      </div>
      <div class="finishButton">
        <button
          :class="{ 'active': isChangeFinal }"
          @click="selectedItem ? openCompleteOffcanvas() : null"
        >
          <em>{{ isChangeFinal ? '2/2' : '1/2' }}</em>
          <span>FINAL</span>
          <img width="8" src="~/assets/img/mission/finish-btn.png" alt="종료 버튼">
        </button>
      </div>
    </div>
    <div class="missionEpisodeContent__chart">
      <div class="explanation">
        <div class="candle">일봉</div>
        <div class="type">
          <span>이동평균선</span>
          <span><em></em>5일</span>
          <span><em></em>20일</span>
          <span><em></em>60일</span>
          <span><em></em>120일</span>
        </div>
      </div>
      <!-- 티플랙스 -->
      <div v-if="selectedItem === '티플랙스'" class="chart chart01">
        <div ref="chartLeft" class="left">
          <img
            :src="isChangeFinal ? require('~/assets/img/mission/item01-chart02.png') : require('~/assets/img/mission/item01-chart01.png')"
            width="795"
            @load="scrollToRight"
          >
        </div>
        <div class="right">
          <img
            :src="isChangeFinal ? require('~/assets/img/mission/item01-chart02-right.png') : require('~/assets/img/mission/item01-chart01-right.png')"
            width="60"
          >
        </div>
      </div>

      <!-- 대주전자재료 -->
      <div v-if="selectedItem === '대주전자재료'" class="chart chart02">
        <div ref="chartLeft" class="left">
          <img
            :src="isChangeFinal ? require('~/assets/img/mission/item02-chart02.png') : require('~/assets/img/mission/item02-chart01.png')"
            width="766.455"
            @load="scrollToRight"
          >
        </div>
        <div class="right">
          <img
            :src="isChangeFinal ? require('~/assets/img/mission/item02-chart02-right.png') : require('~/assets/img/mission/item02-chart01-right.png')"
            width="60"
          >
        </div>
      </div>
    </div>
    <MissionCompleteOffcanvas 
      v-if="isCompleteOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-completeOffcanvas="closeCompleteOffcanvas"
    />
    <!-- 정답 화면 -->
    <MissionCorrectOffcanvas
      v-if="isCorrectOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-correctOffcanvas="closeCorrectOffcanvas"
    />
    <!-- 오답 화면 -->
    <MissionWrongOffcanvas
      v-if="isWrongOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-wrongOffcanvas="closeWrongOffcanvas"
    />
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: ['티플랙스', '대주전자재료'],
      selectedItem: '티플랙스',
      prices: {
        '티플랙스': '4,950원',
        '대주전자재료': '81,968원'
      },
      correctAnswer: 0,
      isOffcanvasAni: false,
      isCompleteOffcanvasOpen: false,
      isCorrectOffcanvasOpen: false,
      isWrongOffcanvasOpen: false,
      isChangeFinal: false
    }
  },
  computed: {
    currentPrice() {
      return this.prices[this.selectedItem]
    }
  },
  watch: {
    activeTab(newValue) {
      if (newValue === 'tab3') {
        this.scrollToRight()
      }
    }
  },
  methods: {
    scrollToRight() {
      const chartLeft = this.$refs.chartLeft

      if (chartLeft) {
        chartLeft.scrollLeft = chartLeft.scrollWidth
      }
    },
    openCompleteOffcanvas() {
      this.isOffcanvasAni = true
      this.isCompleteOffcanvasOpen = true
      this.isChangeFinal = true
    },
    closeCompleteOffcanvas() {
      this.isOffcanvasAni = false
      this.isCompleteOffcanvasOpen = false

      // 정답/오답 확인
      if (this.selectedItem === this.items[this.correctAnswer]) {
        this.openCorrectOffcanvas()
      } else {
        this.openWrongOffcanvas()
      }
    },
    openCorrectOffcanvas() {
      this.isOffcanvasAni = true
      this.isCorrectOffcanvasOpen = true
    },
    closeCorrectOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isCorrectOffcanvasOpen = false
      }, 300)
    },
    openWrongOffcanvas() {
      this.isOffcanvasAni = true
      this.isWrongOffcanvasOpen = true
    },
    closeWrongOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isWrongOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.missionEpisodeContent{
  @apply w-full py-[24px] bg-[#fff];
}
.missionEpisodeContent__title{
  @apply w-full font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#2c2c2c] mb-[16px] text-center;
}
.missionEpisodeContent__radio{
  @apply w-full px-[16px] mb-[22px];
}
.missionEpisodeContent__radio .radio-group{
  @apply w-full p-[12px_13px] flex justify-start items-center gap-[16px] bg-[#F0F4FA] rounded-[8px];
}
.missionEpisodeContent__radio .radio-group .radio input[type=radio]{
  @apply hidden;
}
.missionEpisodeContent__radio .radio-group .radio input[type=radio]+label{
  @apply block min-w-[20px] pl-[28px] bg-[url(~/assets/img/common/radio.png)] bg-no-repeat bg-[length:20px_20px] bg-left;
}
.missionEpisodeContent__radio .radio-group .radio input[type=radio]:checked+label{
  @apply bg-[url(~/assets/img/common/radio-checked.png)];
}
.missionEpisodeContent__radio .radio-group .radio input[type=radio]+label span{
  @apply font-medium text-[14px] leading-[17px] text-[#2c2c2c];
}
.missionEpisodeContent__check{
  @apply w-full flex justify-between items-center mb-[30px] pr-[16px] pl-[20px];
}
.missionEpisodeContent__check .item{
  @apply flex justify-start items-center gap-[15px];
}
.missionEpisodeContent__check .item span{
  @apply font-extrabold text-[18px] leading-[20px] text-[#2c2c2c];
}
.missionEpisodeContent__check .item em{
  @apply font-extrabold text-[16px] leading-[20px] text-[#ff4646];
}
.missionEpisodeContent__check .finishButton button{
  @apply w-[147px] h-[36px] flex justify-center items-center gap-[4px] bg-[#fff] border border-[#2c2c2c] rounded-[6px];
}
.missionEpisodeContent__check .finishButton button em{
  @apply inline-block w-[36px] text-center font-medium text-[12px] leading-[14px] text-[#2c2c2c];
}
.missionEpisodeContent__check .finishButton button span{
  @apply inline-block w-[50px] font-extrabold text-[14px] leading-[14px] text-center text-[#2c2c2c]
}
.missionEpisodeContent__check .finishButton button.active{
  @apply bg-[#2c2c2c];
}
.missionEpisodeContent__check .finishButton button.active em, .missionEpisodeContent .finishButton button.active span{
  @apply text-[#00A6BD];
}
.missionEpisodeContent__chart{
  @apply w-full;
}
.missionEpisodeContent__chart .explanation{
  @apply w-full p-[4px_16px] bg-[#F9F9FA] flex justify-between items-center;
}
.missionEpisodeContent__chart .explanation .candle{
  @apply w-[36px] h-[20px] flex justify-center items-center bg-[#fff] border border-[#9D9D9D] font-extrabold text-[12px] leading-[14px] text-[#2c2c2c];
}
.missionEpisodeContent__chart .explanation .type{
  @apply flex justify-end items-center gap-[8px];
}
.missionEpisodeContent__chart .explanation .type span{
  @apply font-semibold text-[12px] leading-[14px] text-[#2c2c2c] flex justify-center items-center gap-[4px];
}
.missionEpisodeContent__chart .explanation .type span em{
  @apply inline-block w-[6px] h-[6px] rounded-full;
}
.missionEpisodeContent__chart .explanation .type span:nth-child(2) em{
  @apply bg-[#EF4810];
}
.missionEpisodeContent__chart .explanation .type span:nth-child(3) em{
  @apply bg-[#C764D8];
}
.missionEpisodeContent__chart .explanation .type span:nth-child(4) em{
  @apply bg-[#609CDE];
}
.missionEpisodeContent__chart .explanation .type span:nth-child(5) em{
  @apply bg-[#94BC60];
}
.missionEpisodeContent__chart .chart{
  @apply relative w-full pr-[60px] flex justify-end items-center;
}
.missionEpisodeContent__chart .chart .right{
  @apply absolute right-0 top-0;
}
.missionEpisodeContent__chart .chart01 .left{
  @apply w-[795px] overflow-x-auto text-right;
}
.missionEpisodeContent__chart .chart01 .left img{
  @apply min-w-[795px];
}
.missionEpisodeContent__chart .chart02 .left{
  @apply w-[766.455px] overflow-x-auto text-right;
}
.missionEpisodeContent__chart .chart02 .left img{
  @apply min-w-[766.455px];
}
</style>