<template>
  <div
    class="offcanvas-overlay animate__animated animate__faster"
    :class="{ 'animate__fadeIn': isOffcanvasAni, 'animate__fadeOut': !isOffcanvasAni }" @click="closeCorrectOffcanvas"
  >
    <div
      class="offcanvas-content animate__animated animate__faster"
      :class="{ 'animate__fadeInUp': isOffcanvasAni, 'animate__fadeOutDown': !isOffcanvasAni }" @click.stop
    >
      <div class="offcanvas-header">
        <div class="close">
          <button @click="closeCorrectOffcanvas">
            <img width="14" src="~/assets/img/mission/close-btn.png" alt="닫기">
          </button>
        </div>
        <div class="title">
          5-20 골든크로스 투자기법 EP-01> 에피소드 결과
        </div>
      </div>
      <div class="offcanvas-body">
        <div class="txt">
          <span>정답입니다.</span>
          <p>
            티플렉스는 5일 이동평균선이 20일 이동평균선을 강하게
            상향 돌파하며 골든크로스를 형성했고, 이후 상승세를 이어갔습니다.
          </p>
        </div>
        <div class="insignia-box">
          <div class="left">
            <span>클래스 마스터 레벨 획득!</span>
            <em>가격 패턴 투자 기법 <br />클래스 마스터</em>
          </div>
          <div class="right">
            <!-- <div class="bg"><img width="120" src="~/assets/img/mission/insignia-bg.png" alt="빛 효과"></div> -->
            <img width="64" src="~/assets/img/mission/insignia-img.png" alt="휘장">
          </div>
        </div>
        <div class="correctContent">
          <div class="correctContent--box">
            <div class="top">
              <span>미션 포인트</span>
            </div>
            <div class="bottom">
              <p>
                ★ 신규 에피소드 EP-01 체험 완료 
                <span>EXP 10% Up!</span>
              </p>
              <p>
                ★ 투자기법에 맞는 매수종목 적중 2/5, 
                <span>HRP 8.0% Up!</span>
              </p>
            </div>
          </div>
          <div class="correctContent--box">
            <div class="top">
              <span>업적 랭킹</span>
            </div>
            <div class="bottom">
              <p>
                ★ 클래스1-미션1 수익률 랭킹 1위!
                <img width="19" src="~/assets/img/mission/medal-icon.png" alt="금메달">
              </p>
            </div>
          </div>
          <div class="correctContent--box">
            <div class="top">
              <span>매매 결과</span>
            </div>
            <div class="bottom">
              <div class="listBox">
                <div class="list">
                  <span>투자종목</span>
                  <div class="type">티플랙스</div>
                </div>
                <div class="list">
                  <span>투자기간</span>
                  <div class="type">20일 (영업일 기준)</div>
                </div>
                <div class="list">
                  <span>기초자산</span>
                  <div class="type">100,000,000 원</div>
                </div>
                <div class="list">
                  <span>평가자산</span>
                  <div class="type">11,829,882 원</div>
                </div>
                <div class="list">
                  <span>수의금/수익률</span>
                  <div class="type"><em>118,299,882 원  &nbsp;&nbsp;&nbsp;+18.30%</em></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas-footer">
        <button @click="closeCorrectOffcanvas">닫 기</button>
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
    closeCorrectOffcanvas() {
      this.$emit('close-correctOffcanvas')
    }
  }
}
</script>

<style scoped>
.offcanvas-overlay {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-start items-end z-[999];
}
.offcanvas-content{
  @apply relative w-full h-[calc(100%-10px)] bg-[#fff] p-[60px_16px_45px] rounded-t-[36px] overflow-y-auto;
}
.offcanvas-header{
  @apply relative w-full mb-[27px];
}
.offcanvas-header .close{
  @apply absolute top-[-36px] right-[8px];
}
.offcanvas-header .title{
  @apply w-full font-extrabold text-[16px] leading-[19px] text-[#2c2c2c] text-center;
}
.offcanvas-body .txt{
  @apply w-full px-[8px] mb-[28px];
}
.offcanvas-body .txt span{
  @apply block font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#00AAD0] mb-[8px];
}
.offcanvas-body .txt p{
  @apply font-semibold text-[14px] leading-[15px] text-[#00AAD0];
}
.offcanvas-body .insignia-box{
  @apply w-full rounded-[12px] p-[33px_38px_33px_16px] flex justify-between items-start gap-[40px] mb-[24px];
  background: linear-gradient(134.97deg, #008D94 -4.81%, #1B3564 32.5%, #040B1D 96.44%);
}
.offcanvas-body .insignia-box .left{
  @apply flex flex-col justify-start items-start gap-[12px] pt-[9px];
}
.offcanvas-body .insignia-box .left span{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[19px] text-[#4ae9ff];
}
.offcanvas-body .insignia-box .left em{
  @apply font-[JalnanGothic] font-normal text-[12px] leading-[14px] text-[#C8ECFF];
}
.offcanvas-body .insignia-box .right{
  @apply relative;
}
.offcanvas-body .insignia-box .right .bg{
  @apply absolute right-0;
}
.offcanvas-body .insignia-box .right .bg img{
  @apply min-w-[120px];
}
.offcanvas-body .correctContent{
  @apply w-full flex flex-col justify-start items-start gap-[12px] mb-[65px];
}
.offcanvas-body .correctContent .correctContent--box{
  @apply w-full rounded-[12px] border border-[#D7DFF9];
}
.offcanvas-body .correctContent .correctContent--box .top{
  @apply w-full bg-[#1AB6D8] rounded-t-[12px] p-[10px_16px];
}
.offcanvas-body .correctContent .correctContent--box .top span{
  @apply block font-extrabold text-[16px] leading-[16px] text-[#fff];
}
.offcanvas-body .correctContent .correctContent--box .bottom{
  @apply w-full p-[16px] bg-[#fff] rounded-b-[12px] flex flex-col justify-start items-start gap-[8px];
}
.offcanvas-body .correctContent .correctContent--box .bottom p{
  @apply w-full font-medium text-[14px] leading-[16px] text-[#2c2c2c] flex justify-start items-center gap-[2px];
}
.offcanvas-body .correctContent .correctContent--box .bottom p span{
  @apply font-extrabold text-[#00A6BD];
}
.offcanvas-body .correctContent .correctContent--box .bottom p img{
  @apply inline-block ml-[9px];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list{
  @apply w-full flex justify-start items-center gap-[48px] last:gap-[22px];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list span{
  @apply p-[6px_13px] h-[24px] flex justify-center items-center border border-[#7ED8E4] rounded-[16px] font-extrabold text-[12px] leading-[12px] text-[#00A6BD];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list .type{
  @apply font-medium text-[14px] leading-[19px] text-[#2c2c2c];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list .type em{
  @apply font-extrabold text-[#FF4646];
}
.offcanvas-footer{
  @apply w-full flex justify-center items-center;
}
.offcanvas-footer button{
  @apply w-[100px] h-[48px] rounded-[6px] flex justify-center items-center border border-[#00a6bd] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#00a6bd] pt-[3px];
}
</style>