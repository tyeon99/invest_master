<template>
  <div class="missionEpisodeContent">
    <div class="selectBox" @click="dropDown">
      <div class="selected-option">
        <p>{{ selectedItem.name }}</p>
        <span>{{ selectedItem.code }}</span>
      </div>
      <img width="18" src="~/assets/img/mission/select-icon.png" alt="드롭다운 아이콘">
      <ul v-if="isDropdownOpen" class="dropdown-options">
        <li
          v-for="(item, idx) in items"
          :key="idx"
          class="dropdown-option"
          @click.stop="selectItem(item)"
        >
          <p>{{ item.name }}</p>
          <span>{{ item.code }}</span>
        </li>
      </ul>
    </div>

    <div class="item-box">
      <div v-if="selectedItem.name === '티플랙스'"></div>
      <div v-if="selectedItem.name === '대주전자재료'"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedItem: { name: "티플랙스", code: "034302" },
      items: [
        { name: "티플랙스", code: "034302" },
        { name: "대주전자재료", code: "078600" }
      ]
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
  @apply flex justify-start items-center gap-[8px];
}
.selected-option p{
  @apply font-extrabold text-[20px] leading-[20px] text-[#2c2c2c];
}
.selected-option span{
  @apply font-extrabold text-[12px] leading-[12px] text-[#adadad];
}
.dropdown-options {
  @apply absolute w-full bg-[#fff] top-[48px] left-0 shadow-2xl z-10;
}
.dropdown-option {
  @apply flex justify-start items-center gap-[8px] px-[18px] py-[12px] cursor-pointer border-b border-[#2c2c2c] last:border-b-0;
}
.dropdown-option p {
  @apply font-bold text-[16px] text-[#2c2c2c];
}
.dropdown-option span{
  @apply font-bold text-[10px] leading-[8px] text-[#adadad];
}
.item-box{
  @apply pt-[24px];
}
</style>
