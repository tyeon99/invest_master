<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeMenuOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInLeft': isOffcanvasAni, 'animate__fadeOutLeft': !isOffcanvasAni }" @click.stop>
      <div class="offcanvas-close"
    >
        <button @click="closeMenuOffcanvas">
          <img width="14" src="~/assets/img/main/offcanvas_close-icon.png" alt="닫기">
        </button>
      </div>
      <div class="offcanvas-header">
        <div class="logo">
          <img width="62" src="~/assets/img/main/logo-icon.png" alt="로고">
        </div>
        <div class="txt">투자 마스터 클래스</div>
        <div class="logGroup">
          <button class="logIn">로그인</button>
          <button class="logOut" @click="showToast">로그아웃</button>
        </div>
      </div>
      <div class="offcanvas-body">
        <div class="profile">
          <div class="left">
            <div class="icon">
              <img width="70" src="~/assets/img/ranking/character-icon01.png" alt="캐릭터">
              <!-- 5단계 캐릭터 이미지명 character-icon 뒤에 01 02 03 04 05  -->
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
              <span>게임포인트</span>
              <strong>20</strong>
            </div>
            <div class="classMaster">
              <div class="decoration">
                <img width="44" src="~/assets/img/ranking/insignia01-lg.png" alt="클래스마스터 훈장">
              </div>
              <div class="txt">
                <strong>미달성</strong>
                <span>클래스마스터</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <div class="line"></div>
        <div class="menu">
          <button @click="goLink('/')">메인-게임참여</button>
          <button @click="goLink('/intro')">게임소개</button>
          <button @click="goLink('/ranking')">업적&랭킹</button>
          <button @click="goLink('/ranking/all')">전체 랭킹</button>
        </div>
      </div>
    </div>
    <!-- 토스트 메시지 -->
    <div v-if="toastMessage" class="toast">
      로그인 후 이용가능합니다.
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
      toastMessage: false
    }
  },
  methods: {
    closeMenuOffcanvas() {
      this.$emit('close-menuOffcanvas')
    },
    goLink(path) {
      this.$router.push(path)
    },
    showToast() {
      this.toastMessage = true
      setTimeout(() => {
        this.toastMessage = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-center z-[999] pr-[55px];
}
.offcanvas-content{
  @apply w-[320px] h-full bg-[#fff] p-[28px_10px] overflow-y-auto;
}
.offcanvas-close{
  @apply pl-[18px] mb-[30px];
}
.offcanvas-header{
  @apply pl-[15px] mb-[30px];
}
.offcanvas-header .logo{
  @apply mb-[4px];
}
.offcanvas-header .txt{
  @apply mb-[30px] font-extrabold text-[22px] leading-[26.25px] text-[#2c2c2c];
}
.offcanvas-header .logGroup{
  @apply w-full flex justify-start items-center gap-[8px];
}
.offcanvas-header button{
  @apply w-fit flex justify-center items-center p-[9px_24px] font-extrabold text-[14px] leading-[14px] text-[#2c2c2c] rounded-[16px] border border-[#2c2c2c];
}
.offcanvas-header button.logIn{
  @apply bg-[#2C2C2C] text-[#fff];
}
.offcanvas-body{
  @apply w-full mb-[30px];
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
  @apply pt-[20px] flex justify-end items-end gap-[10px];
}
.offcanvas-body .profile .right .classMaster .txt{
  @apply flex flex-col gap-[10px] justify-end items-end;
}
.offcanvas-body .profile .right .classMaster strong{
  @apply block font-extrabold text-[20px] leading-[20px] text-[#fff] pr-[4px];
}
.offcanvas-body .profile .right .classMaster span{
  @apply p-[5px_9px] rounded-[12px] border border-[#fff] font-medium text-[10px] leading-[14px] text-[#fff];
}
.offcanvas-footer{
  @apply pl-[15px]
}
.offcanvas-footer .line{
  @apply w-[140px] h-[6px] bg-[#2c2c2c] mb-[30px];
}
.offcanvas-footer .menu{
  @apply flex flex-col gap-[24px] justify-start items-start;
}
.offcanvas-footer .menu button{
  @apply font-extrabold text-[20px] leading-[24px] text-[#2c2c2c];
}
.toast{
  @apply absolute bottom-[5%] left-[50%] translate-x-[-50%] font-normal text-[12px] text-[#fff] bg-[rgba(90,90,90,0.9)] p-[8px_12px] rounded-[24px];
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>