<template>
  <div class="missionEpisodeContent">
    <div class="missionEpisodeContent__title">5-20일 골든크로스 투자기법 EP-01</div>
    <div class="missionEpisodeContent__content">
      <div class="missionEpisodeContent__content--box">
        <div class="top">
          <span>미션목표</span>
        </div>
        <div class="bottom">
          <p>
            <span>5-20일 골든크로스 투자기법</span>을 활용하여 적정 적정 매수구간인 종목을 찾아 공략하세요!<br />
            투자 기법에 맞는 종목을 매수하면 매수 적중률이 상승하고, 기법에 맞지 않는 종목의 매수는 적중률을 하락시킵니다. 
          </p>
        </div>
      </div>
      <div class="missionEpisodeContent__content--box">
        <div class="top">
          <span>미션조건</span>
        </div>
        <div class="bottom">
          <div class="listBox">
            <div class="list">
              <span>미션종목</span>
              <div class="txt">2종목 <strong>[티플랙스/대주전자재료]</strong></div>
            </div>
            <div class="list">
              <span>기초자산</span>
              <div class="txt">1억원</div>
            </div>
            <div class="list">
              <span>투자기간</span>
              <div class="txt">20일 <em>(영업일)</em></div>
            </div>
            <div class="list">
              <span>매매방식</span>
              <div class="txt">단판 종가매매</div>
            </div>
          </div>
          <div class="txtBox">
            <div class="txtBox-bg">
              <span>만료일까지 투자할 종목들을 시작일에 매수</span>
              <span>매매는 다음 턴에 단판(1턴)으로 마감</span>
              <span>중간매매 없음</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="startButton">
      <button @click="goToChartTab">
        <span>차트/매매 탭으로 이동하여 차트를 보며 매매 시작</span>
        <img width="14" src="~/assets/img/mission/next-btn.png" alt="시작버튼">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToChartTab() {
      this.$emit('change-tab', 'tab3')
    }
  }
}
</script>

<style scoped>
.missionEpisodeContent{
  @apply w-full p-[44px_16px] bg-[#EEF0F3];
}
.missionEpisodeContent__title{
  @apply font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#2c2c2c] mb-[16px];
}
.missionEpisodeContent__content{
  @apply w-full flex flex-col justify-start items-start gap-[12px] mb-[100px];
}
.missionEpisodeContent__content--box{
  @apply w-full rounded-[12px] border border-[#D7DFF9];
}
.missionEpisodeContent__content--box .top{
  @apply w-full bg-[#1AB6D8] rounded-t-[12px] p-[10px_16px];
}
.missionEpisodeContent__content--box .top span{
  @apply block font-extrabold text-[16px] leading-[16px] text-[#fff];
}
.missionEpisodeContent__content--box .bottom{
  @apply w-full bg-[#fff] rounded-b-[12px];
}
.missionEpisodeContent__content--box .bottom p{
  @apply w-full p-[24px_16px] font-medium text-[12px] leading-[14px] text-[#2c2c2c];
}
.missionEpisodeContent__content--box .bottom p span{
  @apply font-extrabold underline text-[#00A6BD]
}
.missionEpisodeContent__content--box .bottom .listBox{
  @apply w-full p-[20px_16px_0] mb-[12px] flex flex-col justify-start items-start gap-[4px];
}
.missionEpisodeContent__content--box .bottom .listBox .list{
  @apply w-full flex justify-start items-center gap-[30px];
}
.missionEpisodeContent__content--box .bottom .listBox .list span{
  @apply w-[68px] h-[24px] flex justify-center items-center border border-[#7ED8E4] rounded-[16px] font-extrabold text-[12px] leading-[12px] text-[#00A6BD];
}
.missionEpisodeContent__content--box .bottom .listBox .list .txt{
  @apply font-medium text-[14px] leading-[19px] text-[#2c2c2c];
}
.missionEpisodeContent__content--box .bottom .listBox .list .txt strong{
  @apply font-extrabold;
}
.missionEpisodeContent__content--box .bottom .listBox .list .txt em{
  @apply text-[12px] leading-[14px];
}
.missionEpisodeContent__content--box .bottom .txtBox{
  @apply w-full p-[16px] pt-0;
}
.missionEpisodeContent__content--box .bottom .txtBox .txtBox-bg{
  @apply w-full bg-[#F0F6F6] rounded-[12px] p-[15px_8px] flex flex-col justify-start items-start gap-[1px];
}
.missionEpisodeContent__content--box .bottom .txtBox .txtBox-bg span{
  @apply relative block font-medium text-[12px] leading-[16px] text-[#00A6BD] pl-[18px] before:content-[''] before:absolute before:block before:w-[2.5px] before:h-[2.5px] before:rounded-full before:bg-[#00a6bd] before:left-[8px] before:top-[50%] before:translate-y-[-50%];
}
.missionEpisodeContent .startButton{
  @apply w-full;
}
.missionEpisodeContent .startButton button{
  @apply w-full h-[52px] bg-[#fff] border border-[#D7DFF9] rounded-[12px] flex justify-between items-center px-[16px];
}
.missionEpisodeContent .startButton button span{
  @apply inline-block font-extrabold text-[14px] leading-[14px] text-[#00A6BD];
}
</style>
