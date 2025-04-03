<template>
  <div class="rankingContent">
    <div class="rankingContent__profile">
      <div class="profile">
        <div class="left">
          <div class="icon">
            <img width="56" src="~/assets/img/ranking/character-icon01.png" alt="캐릭터">
          </div>
          <div class="name">
            <strong>액티브시니어</strong> 님
          </div>
        </div>
        <div class="right">
          <div class="r-group">
            <div class="top"><span>게임포인트</span></div>
            <div class="txt">
              <span><strong>6520</strong> (12위)</span>
              <button @click="goLink('/ranking/all')">전체보기</button>
            </div>
          </div>
          <div class="r-group">
            <div class="top">
              <span>클래스마스터</span>
              <div class="img-group">
                <img src="~/assets/img/ranking/insignia01.png" alt="휘장01">
                <img src="~/assets/img/ranking/insignia02.png" alt="휘장02">
                <img src="~/assets/img/ranking/insignia03.png" alt="휘장03">
                <img src="~/assets/img/ranking/insignia04.png" alt="휘장04">
                <img src="~/assets/img/ranking/insignia05.png" alt="휘장05">
              </div>
            </div>
            <div class="txt">
              <span>4개의 클래스 마스터 레벨 달성</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rankingClassMaster">
      <div class="rankingClassMaster__title">클래스 마스터 달성</div>
      <!-- 보유 휘장 없을 때 -->
      <!-- <div class="noAchieved">
        <strong>미달성</strong>
        <p>현재 획득한 클래스 마스터 휘장이 없습니다.</p>
      </div> -->
      <div class="achieved">
        <div
          v-for="(achievement, idx) in achievements"
          :key="idx"
          class="achieved-box"
        >
          <div class="top">{{ achievement.title }}</div>
          <div class="bottom">
            <img :src="achievement.imgSrc">
            <div class="txt">
              <span>{{ achievement.description1 }}</span>
              <span>{{ achievement.description2 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rankingPoint">
      <div class="correctContent--box">
        <div class="top">
          <span>미션 포인트</span>
        </div>
        <div class="bottom">
          <div class="listBox">
            <div class="list">
              <span>수행보너스</span>
              <div class="type"><strong>100</strong> 포인트</div>
            </div>
            <div class="list">
              <span>적중보너스</span>
              <div class="type"><strong>79</strong> 포인트</div>
            </div>
            <div class="list">
              <span>퀴즈게임</span>
              <div class="type"><strong>30</strong> 포인트</div>
            </div>
          </div>
          <div class="point">총 209 포인트 획득!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          title: "클래스-01 마스터",
          imgSrc: require("~/assets/img/ranking/insignia01-lg.png"),
          description1: "대가들의 투자기법",
          description2: "가치매매 클래스"
        },
        {
          title: "클래스-02 마스터",
          imgSrc: require("~/assets/img/ranking/insignia02-lg.png"),
          description1: "이동평균선 매매",
          description2: "캔들 파동심화 기법"
        },
        {
          title: "클래스-03 마스터",
          imgSrc: require("~/assets/img/ranking/insignia03-lg.png"),
          description1: "대가들의 투자기법",
          description2: "가치매매 클래스"
        },
        {
          title: "클래스-04 마스터",
          imgSrc: require("~/assets/img/ranking/insignia04-lg.png"),
          description1: "대가들의 투자기법",
          description2: "가치매매 클래스"
        },
        {
          title: "클래스-05 마스터",
          imgSrc: require("~/assets/img/ranking/insignia05-lg.png"),
          description1: "대가들의 투자기법",
          description2: "가치매매 클래스"
        }
      ]
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.rankingContent{
  @apply w-full p-[12px_0px] flex flex-col justify-start items-start gap-[32px];
}
.rankingContent__profile{
  @apply w-full px-[16px];
}
.profile{
  @apply w-full rounded-[12px] p-[21px_12px] flex justify-center items-center gap-[40px];
  background: linear-gradient(132.8deg, #131313 10.37%, #003B48 59.38%, #00C0CC 84.95%);
}
.profile .left{
  @apply flex flex-col gap-[12px] justify-start items-center;
}
.profile .left .name{
  @apply font-medium text-[12px] leading-[15px] text-[#fff];
}
.profile .left .name strong{
  @apply font-extrabold text-[16px] leading-[20px] text-[#fff]; 
}
.profile .right{
  @apply flex flex-col justify-start items-center gap-[17px];
}
.profile .right .r-group{
  @apply w-full flex flex-col justify-start items-start gap-[10px];
}
.profile .right .r-group .top{
  @apply flex justify-start items-center gap-[8px];
}
.profile .right .r-group .top span{
  @apply p-[5px_9px] rounded-[12px] font-extrabold text-[12px] leading-[14px] text-[#2c2c2c];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.profile .right .r-group .top .img-group{
  @apply flex justify-start items-center gap-[4px];
}
.profile .right .r-group .top .img-group img{
  @apply h-[18px];
}
.profile .right .r-group .txt{
  @apply flex justify-start items-center gap-[18px];
}
.profile .right .r-group .txt span{
  @apply font-medium text-[14px] leading-[17px] text-[#fff];
}
.profile .right .r-group .txt span strong{
  @apply font-extrabold text-[16px] leading-[19px];
}
.profile .right .r-group .txt button{
  @apply border border-[#fff] p-[5px_13px] font-extrabold text-[10px] leading-[12px] text-[#fff] rounded-[4px];
}
.rankingClassMaster{
  @apply w-full pl-[16px];
}
.rankingClassMaster__title{
  @apply font-extrabold text-[16px] leading-[14px] text-[#2c2c2c] mb-[16px];
}
.achieved{
  @apply flex justify-start items-center gap-[8px] flex-nowrap overflow-x-auto pr-[16px];
}
.achieved-box{
  @apply min-w-[152px] h-[203px] rounded-[12px];
}
.achieved-box .top{
  @apply text-center p-[10px_18px_9px] font-[JalnanGothic] font-normal text-[14px] leading-[17px] text-[#2c2c2c] rounded-[12px_12px_0_0];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.achieved-box .bottom{
  @apply min-h-[166px] p-[16px_10px_14px] flex flex-col justify-start items-center gap-[8px] rounded-[0_0_12px_12px];
  background: linear-gradient(134.97deg, #008D94 -4.81%, #1B3564 32.5%, #040B1D 96.44%);
}
.achieved-box .bottom img{
  @apply h-[94px];
}
.achieved-box .bottom .txt{
  @apply w-full flex flex-col justify-start items-start;
}
.achieved-box .bottom .txt span{
  @apply relative font-medium text-[14px] leading-[17px] text-[#BFCFE0] pl-[20px] before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:bg-[#BFCFE0] before:absolute before:left-[6px] before:top-[6px];
}
.noAchieved{
  @apply w-full flex flex-col justify-center items-center gap-[8px] pt-[16px] pr-[16px];
}
.noAchieved strong{
  @apply font-[JalnanGothic] font-normal text-[18px] leading-[22px] text-[#00aad0];
}
.noAchieved p{
  @apply font-semibold text-[14px] leading-[14px] text-[#00aad0];
}
.rankingPoint{
  @apply w-full px-[16px] flex flex-col justify-start items-start gap-[20px] mb-[36px];
}
.rankingPoint .correctContent--box{
  @apply w-full rounded-[12px] border border-[#D7DFF9];
}
.rankingPoint .correctContent--box .top{
  @apply w-full bg-[#1AB6D8] rounded-t-[12px] p-[10px_16px];
}
.rankingPoint .correctContent--box .top span{
  @apply block font-extrabold text-[16px] leading-[16px] text-[#fff];
}
.rankingPoint .correctContent--box .bottom{
  @apply w-full p-[16px] bg-[#fff] rounded-b-[12px] flex flex-col justify-start items-start gap-[22px];
}
.rankingPoint .correctContent--box .bottom .listBox{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.rankingPoint .correctContent--box .bottom .listBox .list{
  @apply w-full flex justify-start items-center gap-[48px];
}
.rankingPoint .correctContent--box .bottom .listBox .list span{
  @apply py-[6px] min-w-[80px] h-[24px] flex justify-center items-center border border-[#7ED8E4] rounded-[16px] font-extrabold text-[12px] leading-[12px] text-[#00A6BD];
}
.rankingPoint .correctContent--box .bottom .listBox .list .type{
  @apply font-medium text-[14px] leading-[19px] text-[#2c2c2c];
}
.rankingPoint .correctContent--box .bottom .listBox .list .type em{
  @apply font-extrabold text-[#FF4646];
}
.rankingPoint .correctContent--box .bottom .point{
  @apply w-full text-center font-extrabold text-[16px] leading-[20px] text-[#FF5291];
}
</style>