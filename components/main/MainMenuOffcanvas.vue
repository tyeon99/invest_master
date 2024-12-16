<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeMenuOffcanvas">
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInLeft': isOffcanvasAni, 'animate__fadeOutLeft': !isOffcanvasAni }"
      @click.stop
    >
      <div class="offcanvas-close">
        <button @click="closeMenuOffcanvas">
          <img width="14" src="~/assets/img/main/offcanvas_close-icon.png" alt="닫기">
        </button>
      </div>
      <div class="offcanvas-header">
        <div class="logo">
          <img width="62" src="~/assets/img/main/logo-icon.png" alt="로고">
        </div>
        <div class="txt">투자 마스터 클래스</div>
        <div class="logOut">로그아웃</div>
      </div>
      <div class="offcanvas-body">
        <div class="profile">
          <div class="left">
            <div class="icon">
              <img width="70" src="~/assets/img/ranking/character-icon.png" alt="캐릭터">
            </div>
            <div class="name">
              <strong>액티브시니어</strong> 님
            </div>
          </div>
          <div class="right">
            <div class="ranking">
              <img width="24" src="~/assets/img/main/badge-icon.png" alt="배지">
              <span>12<em>위</em></span>
            </div>
            <div class="level">
              <img width="16" src="~/assets/img/main/game-icon.png" alt="게임 아이콘">
              <span>게임레벨</span>
              <strong>20</strong>
            </div>
            <div class="classMaster">
              <strong>미달성</strong>
              <span>클래스마스터</span>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <div class="line"></div>
        <div class="menu">
          <button @click="goLink('/')">메인-게임참여</button>
          <button @click="goLink('/ranking')">업적&랭킹</button>
          <button>공지사항</button>
        </div>
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
  methods: {
    closeMenuOffcanvas() {
      this.$emit('close-menuOffcanvas')
    },
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-center z-[999] pr-[55px];
}
.offcanvas-content{
  @apply w-full h-full bg-[#fff] p-[28px_10px];
}
.offcanvas-close{
  @apply pl-[18px] mb-[40px];
}
.offcanvas-header{
  @apply pl-[15px] mb-[30px];
}
.offcanvas-header .logo{
  @apply mb-[4px];
}
.offcanvas-header .txt{
  @apply mb-[32px] font-extrabold text-[22px] leading-[26.25px] text-[#2c2c2c];
}
.offcanvas-header .logOut{
  @apply w-fit flex justify-center items-center p-[9px_24px] font-extrabold text-[14px] leading-[14px] text-[#2c2c2c] rounded-[16px] border border-[#2c2c2c];
}
.offcanvas-body{
  @apply w-full mb-[38px];
}
.offcanvas-body .profile{
  @apply w-[300px] rounded-[8px] p-[13px_24px_15px] flex justify-between items-center;
  box-shadow: 0px 4px 4px 0px rgba(36, 74, 148, 0.25);
  background: linear-gradient(134.97deg, #00F0FF 10.59%, #1C78FF 47.89%, #5162FF 107.1%);
}
.offcanvas-body .profile .left{
  @apply flex flex-col justify-start items-center gap-[10px];
}
.offcanvas-body .profile .left .name{
  @apply font-medium text-[12px] leading-[16px] text-[#fff];
}
.offcanvas-body .profile .left .name strong{
  @apply text-[16px];
}
.offcanvas-body .profile .right{
  @apply flex flex-col justify-start items-end gap-[10px];
}
.offcanvas-body .profile .right .ranking{
  @apply relative flex justify-end items-center;
}
.offcanvas-body .profile .right .ranking img{
  @apply block absolute left-[-14px] top-[50%] translate-y-[-50%];
}
.offcanvas-body .profile .right .ranking span{
  @apply p-[3px_13px] bg-[#fff] rounded-[12px] font-extrabold text-[12px] leading-[14px] text-[#2177ff];
}
.offcanvas-body .profile .right .ranking span em{
  @apply text-[12px];
}
.offcanvas-body .profile .right .level{
  @apply flex justify-end items-center gap-[5px];
}
.offcanvas-body .profile .right .level span{
  @apply font-medium text-[12px] leading-[14px] text-[#fff];
}
.offcanvas-body .profile .right .level strong{
  @apply pl-[5px] font-extrabold text-[24px] leading-[14px] text-[#fff];
}
.offcanvas-body .profile .right .classMaster{
  @apply pt-[24px] flex flex-col justify-end items-end gap-[10px];
}
.offcanvas-body .profile .right .classMaster strong{
  @apply block font-extrabold text-[20px] leading-[14px] text-[#fff] pr-[4px];
}
.offcanvas-body .profile .right .classMaster span{
  @apply p-[5px_9px] rounded-[12px] border border-[#fff] font-medium text-[10px] leading-[14px] text-[#fff];
}
.offcanvas-footer{
  @apply pl-[15px]
}
.offcanvas-footer .line{
  @apply w-[140px] h-[6px] bg-[#2c2c2c] mb-[34px];
}
.offcanvas-footer .menu{
  @apply flex flex-col gap-[24px] justify-start items-start;
}
.offcanvas-footer .menu button{
  @apply font-extrabold text-[20px] leading-[24px] text-[#2c2c2c];
}
</style>