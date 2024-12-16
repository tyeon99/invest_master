<template>
  <div class="missionEpisodeContent">
    <div class="selectBox" @click="dropDown">
      <div class="selected-option">
        {{ selectedItem }}
      </div>
      <img width="18" src="~/assets/img/mission/select-icon.png" alt="드롭다운 아이콘">
      <ul v-if="isDropdownOpen" class="dropdown-options">
        <li
          v-for="(item, idx) in items"
          :key="idx"
          class="dropdown-option"
          @click.stop="selectItem(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="item-txt">
      <p v-if="selectedItem === '티플랙스'">
        차트 매매기법 미션이므로 별도의 투자정보를 제공하지 않습니다. <br />
        차트/매매 탭으로 이동하여 체험매매를 진행해주세요.  
      </p>
      <p v-else-if="selectedItem === '대주전자재료'">
        차트 매매기법 미션이므로 별도의 투자정보를 제공하지 않습니다. <br />
        차트/매매 탭으로 이동하여 체험매매를 진행해주세요.  
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedItem: "티플랙스",
      items: ["티플랙스", "대주전자재료"]
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
    }
  }
};
</script>

<style scoped>
.missionEpisodeContent {
  @apply w-full p-[28px_16px_0] bg-[#fff];
}
.selectBox {
  @apply relative w-full h-[48px] cursor-pointer flex justify-between items-center px-[16px] border-b-[2px] border-[#2C2C2C];
}
.selected-option {
  @apply font-extrabold text-[20px] leading-[20px] text-[#2c2c2c];
}
.dropdown-options {
  @apply absolute w-full bg-[#fff] top-[48px] left-0 shadow-2xl z-10;
}
.dropdown-option {
  @apply font-bold px-[16px] py-[12px] cursor-pointer text-[16px] border-b border-[#2c2c2c] last:border-b-0 text-[#2c2c2c];
}
.item-txt {
  @apply mt-[44px] px-[8px];
}
.item-txt p {
  @apply font-extrabold leading-[24px] text-[14px] text-[#2c2c2c];
}
</style>
