<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="missionEpisodeContent">
    <div class="missionEpisodeContent__selected">
      <div class="selectBox" @click="dropDown">
        <div class="selected-option">{{ selectedItem.name }}</div>
        <img width="18" src="~/assets/img/mission/select-icon.png" alt="드롭다운 아이콘">
        <ul v-if="isDropdownOpen" class="dropdown-options">
          <li
            v-for="(item, idx) in items"
            :key="idx"
            class="dropdown-option"
            @click.stop="selectItem(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="selectPrice">
        <span>현재가</span>
        <strong>{{ selectedItem.price }} 원</strong>
      </div>
    </div>
    <div class="missionEpisodeContent__btn">
      <button class="buy" @click="openBuyOffcanvas">매 수</button>
      <!-- <button class="cancel">매수취소</button> -->
      <button @click="openConfirmedOffcanvas">매매완료</button>
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
      <div v-if="selectedItem.name === '티플랙스'" class="chart chart01">
        <div ref="chartLeft" class="left">
          <img width="795" src="~/assets/img/mission/item01-chart01.png" @load="scrollToRight">
        </div>
        <div class="right">
          <img width="60" src="~/assets/img/mission/item01-chart01-right.png">
        </div>
      </div>

      <!-- 대주전자재료 -->
      <div v-if="selectedItem.name === '대주전자재료'" class="chart chart02">
        <div ref="chartLeft" class="left">
          <img width="766.455" src="~/assets/img/mission/item02-chart01.png" @load="scrollToRight">
        </div>
        <div class="right">
          <img width="60" src="~/assets/img/mission/item02-chart01-right.png">
        </div>
      </div>
    </div>
    <!-- 매수 주문 -->
    <MissionBuyOffcanvas 
      v-if="isBuyOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-buyOffcanvas="closeBuyOffcanvas"
      @open-orderCmpOffcanvas="openOrderCmpOffcanvas"
    />
    <!-- 주문 체결 완료 -->
    <MissionOrderCmpOffcanvas 
      v-if="isOrderCmpOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-orderCmpOffcanvas="closeOrderCmpOffcanvas"
    />
    <!-- 매수 확정 -->
    <MissionConfirmedOffcanvas 
      v-if="isConfirmedOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-confirmedOffcanvas="closeConfirmedOffcanvas"
      @open-completeOffcanvas="openCompleteOffcanvas"
    />
    <!-- 미션 완료 -->
    <MissionCompleteOffcanvas 
      v-if="isCompleteOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-completeOffcanvas="closeCompleteOffcanvas"
      @open-correctOffcanvas="openCorrectOffcanvas"
    />
    <!-- 결과 화면 -->
    <MissionCorrectOffcanvas
      v-if="isCorrectOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-correctOffcanvas="closeCorrectOffcanvas"
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
      isDropdownOpen: false,
      selectedItem: { name: "티플랙스", price: "312,300" },
      items: [
        { name: "티플랙스", price: "312,300" },
        { name: "대주전자재료", price: "426,400" }
      ],
      isOffcanvasAni: false,
      isCompleteOffcanvasOpen: false,
      isCorrectOffcanvasOpen: false,
      isBuyOffcanvasOpen: false,
      isOrderCmpOffcanvasOpen: false,
      isConfirmedOffcanvasOpen: false
    }
  },
  watch: {
    activeTab(newValue) {
      if (newValue === 'tab3') {
        this.scrollToRight()
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.closeDropDown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropDown);
  },
  methods: {
    dropDown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectItem(item) {
      this.selectedItem = item
      this.isDropdownOpen = false
    },
    closeDropDown(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false
      }
    },
    scrollToRight() {
      const chartLeft = this.$refs.chartLeft

      if (chartLeft) {
        chartLeft.scrollLeft = chartLeft.scrollWidth
      }
    },
    openBuyOffcanvas() {
      this.isOffcanvasAni = true
      this.isBuyOffcanvasOpen = true
    },
    closeBuyOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isBuyOffcanvasOpen = false
      }, 300)
    },
    openOrderCmpOffcanvas() {
      this.closeBuyOffcanvas()
      setTimeout(() => {
        this.isOffcanvasAni = true
        this.isOrderCmpOffcanvasOpen = true
      }, 200)
    },
    closeOrderCmpOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isOrderCmpOffcanvasOpen = false
      }, 300)
    },
    openConfirmedOffcanvas() {
      this.isOffcanvasAni = true
      this.isConfirmedOffcanvasOpen = true
    },
    closeConfirmedOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isConfirmedOffcanvasOpen = false
      }, 300)
    },
    openCompleteOffcanvas() {
      this.closeConfirmedOffcanvas()
      setTimeout(() => {
        this.isOffcanvasAni = true
        this.isCompleteOffcanvasOpen = true
      }, 200)
    },
    closeCompleteOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isCompleteOffcanvasOpen = false
      }, 300)
    },
    openCorrectOffcanvas() {
      this.closeCompleteOffcanvas()
      setTimeout(() => {
        this.isOffcanvasAni = true
        this.isCorrectOffcanvasOpen = true
      }, 200)
    },
    closeCorrectOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isCorrectOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.missionEpisodeContent{
  @apply w-full py-[24px] bg-[#fff];
}
.missionEpisodeContent__selected{
  @apply w-full flex justify-start items-center gap-[45px] px-[16px] mb-[40px];
}
.selectBox{
  @apply relative w-[180px] h-[44px] flex justify-between items-center cursor-pointer px-[8px] border-b-[2px] border-[#2C2C2C];
}
.selected-option{
  @apply font-extrabold text-[18px] leading-[20px] text-[#2c2c2c];
}
.dropdown-options {
  @apply absolute w-full bg-[#fff] top-[44px] left-0 shadow-2xl z-10;
}
.dropdown-option {
  @apply flex justify-start items-center gap-[8px] p-[12px] cursor-pointer border-b border-[#2c2c2c] last:border-b-0 font-bold text-[16px] text-[#2c2c2c];
}
.selectPrice{
  @apply flex flex-col justify-center items-start gap-[5px];
}
.selectPrice span{
  @apply block font-medium text-[12px] leading-[12px] text-[#2c2c2c];
}
.selectPrice strong{
  @apply block font-extrabold text-[16px] leading-[20px] text-[#2c2c2c];
}
.missionEpisodeContent__btn{
  @apply px-[35px] w-full flex justify-center items-center gap-[12px] mb-[32px];
}
.missionEpisodeContent__btn button{
  @apply w-[50%] h-[36px] border border-[#2c2c2c] bg-[#fff] rounded-[6px] font-extrabold text-[14px] leading-[14px] text-[#2c2c2c];
}
.missionEpisodeContent__btn button.buy{
  @apply border-none bg-[#FF4646] text-[#fff];
}
.missionEpisodeContent__btn button.cancel{
  @apply border-none bg-[#3C4552] text-[#fff];
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