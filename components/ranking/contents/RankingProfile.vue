<template>
  <div class="rankingContent__profile">
    <div class="top">
      <div class="left">
        <div class="icon">
          <img width="56" src="~/assets/img/ranking/character-icon.png" alt="캐릭터">
        </div>
        <div class="name">
          <strong>액티브시니어</strong> 님
        </div>
      </div>
      <div class="right">
        <div class="level">
          <span>게임레벨</span>
          <div class="txt"><strong>6520</strong> (12위)</div>
        </div>
        <div class="master">
          <span>클래스마스터</span>
          <div class="txt">미달성</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>수익률 메달</span>
      <div class="medal">
        <img width="10" src="~/assets/img/ranking/medal-gold01.png" alt="금메달">
        <strong>30<em>개</em></strong>
      </div>
      <div class="medal">
        <img width="10" src="~/assets/img/ranking/medal-silver01.png" alt="은메달">
        <strong>20<em>개</em></strong>
      </div>
      <div class="medal">
        <img width="10" src="~/assets/img/ranking/medal-bronze01.png" alt="동메달">
        <strong>99<em>개</em></strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rankingContent__profile{
  @apply w-full rounded-[12px] p-[21px_12px_12px];
  background: linear-gradient(132.8deg, #131313 10.37%, #003B48 59.38%, #00C0CC 84.95%);
}
.rankingContent__profile .top{
  @apply w-full flex justify-between items-center mb-[19px];
}
.rankingContent__profile .top .left{
  @apply flex flex-col gap-[12px] justify-start items-center pl-[12px];
}
.rankingContent__profile .top .left .name{
  @apply font-medium text-[12px] leading-[15px] text-[#fff];
}
.rankingContent__profile .top .left .name strong{
  @apply font-extrabold text-[16px] leading-[20px] text-[#fff];
}
.rankingContent__profile .top .right{
  @apply flex flex-col justify-start items-center gap-[24px];
}
.rankingContent__profile .top .right .level, .rankingContent__profile .top .right .master{
  @apply w-[168px] flex justify-between items-center;
}
.rankingContent__profile .top .right .level span, .rankingContent__profile .top .right .master span{
  @apply p-[5px_9px] rounded-[12px] font-extrabold text-[12px] leading-[14px] text-[#2c2c2c];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.rankingContent__profile .top .right .level .txt, .rankingContent__profile .top .right .master .txt{
  @apply font-medium text-[14px] leading-[17px] text-[#fff];
}
.rankingContent__profile .top .right .level .txt strong, .rankingContent__profile .top .right .master .txt strong{
  @apply font-extrabold text-[16px] leading-[19px];
}
.rankingContent__profile .bottom{
  @apply w-full rounded-[12px] bg-[rgba(0,0,0,0.6)] p-[10px] flex justify-self-auto items-center gap-[20px];
}
.rankingContent__profile .bottom span{
  @apply p-[5px_9px] rounded-[12px] font-extrabold text-[12px] leading-[14px] text-[#2c2c2c];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.rankingContent__profile .bottom .medal{
  @apply flex justify-start items-center gap-[8px];
}
.rankingContent__profile .bottom .medal strong{
  @apply font-extrabold text-[14px] leading-[17px] text-[#fff];
}
.rankingContent__profile .bottom .medal strong em{
  @apply font-medium text-[12px] leading-[14px];
}
</style>