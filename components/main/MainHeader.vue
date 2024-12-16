<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="mainHeader">
    <div class="mainHeader__menu">
      <button @click="openMenuOffcanvas">
        <img width="18" src="~/assets/img/main/menu-icon.png" alt="메뉴 아이콘">
      </button>
    </div>
    <div class="mainHeader__txt">투자 마스터 클래스</div>
    <MainMenuOffcanvas 
      v-if="isMenuOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-menuOffcanvas="closeMenuOffcanvas"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOffcanvasAni: false,
      isMenuOffcanvasOpen: false
    }
  },
  methods: {
    openMenuOffcanvas() {
      this.isOffcanvasAni = true
      this.isMenuOffcanvasOpen = true
    },
    closeMenuOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isMenuOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.mainHeader{
  @apply sticky top-0 z-[999] w-full h-[47px] p-[13px_16px] flex justify-between items-center bg-[#fff];
}
.mainHeader__menu{
  @apply flex justify-center items-center;
}
.mainHeader__txt{
  @apply absolute left-[50%] translate-x-[-50%] font-extrabold text-[18px] leading-[21.48px] text-[#2c2c2c];
}
</style>