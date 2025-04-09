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
    <div ref="chatImg" class="missionEpisodeContent__chart">
      <img
        src="https://files.thinkpool.com/masterclass/%EC%B0%A8%ED%8A%B8_02_01_01_SK%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A401.png"
        alt="차트이미지"
        @load="scrollToRight"
      >
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
      const chatImg = this.$refs.chatImg

      if (chatImg) {
        chatImg.scrollLeft = chatImg.scrollWidth
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
  @apply w-full overflow-x-auto;
}
.missionEpisodeContent__chart img{
  @apply h-[400px] max-w-fit;
}
</style>