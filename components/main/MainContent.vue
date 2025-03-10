<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mainContent">
    <div class="mainContent__class">
      <div
        v-for="(classData, idx) in classDatas"
        :key="idx"
        class="mainContent__class--box"
      >
        <div class="classNum">
          <span>{{ classData.number }}</span>
        </div>
        <div class="className" v-html="classData.name"></div>
      </div>
    </div>
    <div class="mainContent__mission lock"> <!--로그아웃상태일 때 클래스 lock 추가-->
      <table>
        <tbody>
          <tr
            v-for="(missionRow, rowIndex) in missionRows"
            :key="rowIndex"
          >
            <td
              v-for="(mission, colIndex) in missionRow"
              :key="colIndex"
              :class="{ lock: colIndex !== 0, ai: rowIndex === 1 && colIndex === 0 }"
              @click="goLink('/mission')"
            >
              <div class="missionBox">
                <span 
                  v-if="!(rowIndex === 2 && colIndex === 0) && !(rowIndex === 3 && colIndex === 0)"
                  class="missionStatus"
                >
                  {{
                    rowIndex === 0 && colIndex === 0 ? '미션완료' :
                    rowIndex === 1 && colIndex === 0 ? 'AI추천' :
                    '잠긴미션'
                  }}
                </span>
                <div class="missionName" v-html="mission.name"></div>
                <div class="missionPer">
                  <div class="perBox">
                    <strong>수행률</strong>
                    <div :style="{ '--completionWidth': calculateCompletionRate(mission.completionRate) }"></div>
                    <span>{{ mission.completionRate }}</span>
                  </div>
                  <div class="perBox">
                    <strong>적중률</strong>
                    <div></div>
                    <span>{{ mission.accuracyRate }}</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="lockPopup">
        <img width="150" src="~/assets/img/main/lockPopup-icon.png" alt="잠김">
        <div class="title">환영합니다!</div>
        <p>
          새로운 모험이 기다리고 있습니다!<br />
          계정을 로그인하고 게임을 시작하세요.
        </p>
        <button>로그인</button>
      </div>
    </div>
    <MainCheckOffcanvas
      v-if="isCheckOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-checkOffcanvas="closeCheckOffcanvas"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      classDatas: [
        { number: 'Class 01', name: '가격패턴 <br>투자기법' },
        { number: 'Class 02', name: '대가들의 <br>투자기법' },
        { number: 'Class 03', name: '가치평가 <br>매매기법' }
        // { number: 'Class 04', name: 'AI 라씨 <br>매매신호' },
      ],
      missionRows: [
        [
          {
            name: "단기 이평선,<br> 단기 이평선<br> 매매기법",
            completionRate: "3%",
            accuracyRate: "0%",
          },
          {
            name: "이동평균선 <br>심화 매매기법 01",
            completionRate: "0%",
            accuracyRate: "0%",
          },
          {
            name: "캔들, 파동동<br> 매매기법",
            completionRate: "0%",
            accuracyRate: "0%",
          }
        ],
        [
          {
            name: "워렌 버핏의 <br> 가치투자 기법",
            completionRate: "0%",
            accuracyRate: "0%",
          },
          {
            name: "조지 소로스의<br> 메크로 투자",
            completionRate: "0%",
            accuracyRate: "0%",
          },
          {
            name: "조엘 그린블라 <br>트의 마법공식 <br> 투자기법",
            completionRate: "0%",
            accuracyRate: "0%",
          }
        ],
        [
          {
            name: "PER PBR<br> EV/EBITDA",
            completionRate: "0%",
            accuracyRate: "0%",
          },
          {
            name: "적정가치<br> 구하기",
            completionRate: "0%",
            accuracyRate: "0%",
          },
          {
            name: "재무제표 <br>분석",
            completionRate: "0%",
            accuracyRate: "0%",
          }
        ],
        // [
        //   {
        //     name: "AI매매 기본<br> 활용하기",
        //     completionRate: "0%",
        //     accuracyRate: "0%",
        //   },
        //   {
        //     name: "종목캐치 활용은<br> 큰손으로",
        //     completionRate: "0%",
        //     accuracyRate: "0%",
        //   },
        //   {
        //     name: "고도화된 알고 <br>리즘 활용하기",
        //     completionRate: "0%",
        //     accuracyRate: "0%",
        //   }
        // ],
      ],
      isOffcanvasAni: false,
      isCheckOffcanvasOpen: false,
      aiHighlightedCells: []
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    openCheckOffcanvas() {
      this.isOffcanvasAni = true
      this.isCheckOffcanvasOpen = true
    },
    closeCheckOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isCheckOffcanvasOpen = false
      }, 300)
    },
    calculateCompletionRate(rate) {
      const numericRate = parseInt(rate.replace('%', ''), 10)
      return `${numericRate}%`
    }
  }
}
</script>

<style scoped>
.mainContent{
  @apply w-full flex justify-start items-start pl-[12px] mb-[26px];
}
.mainContent__class{
  @apply flex flex-col justify-start items-start gap-[4px] pt-[28px];
}
.mainContent__class--box{
  @apply relative z-[99] w-[96px] h-[104px] rounded-[8px_0px_0px_8px] p-[4px_12px_24px_4px] flex flex-col justify-between items-start first:before:w-[96px] first:before:h-[24px] first:before:bg-[#fff] first:before:block first:before:absolute first:before:top-[-24px] first:before:left-0;
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.mainContent__class--box .classNum{
  @apply w-full flex justify-start items-center;
}
.mainContent__class--box .classNum span{
  @apply font-[JalnanGothic] w-[55px] h-[17px] flex justify-center items-center rounded-[14px] bg-[#00494F] font-normal text-[9px] leading-[11px] text-[#2AD8E1] pt-[2px];
}
.mainContent__class--box .className{
  @apply font-[JalnanGothic] w-full text-right font-normal text-[12px] leading-[14.4px] text-[#2c2c2c];
}
.mainContent__mission{
  @apply relative !w-[348px] overflow-x-auto pr-[12px];
}
.mainContent__mission table{
  @apply w-[348px] border-separate mt-[24px] border-spacing-y-[4px];
}
.mainContent__mission table tbody tr td{
  @apply relative w-[116px] h-[104px] p-[26px_0_4px] border border-[#a2e3cc] border-l-0;
}
.mainContent__mission tbody tr:first-child td::before{
  @apply absolute content-['미션_01'] flex justify-center items-center w-[114px] h-[24px] top-[-25px] left-[1px] rounded-t-[8px] font-[JalnanGothic] font-normal text-[10px] leading-[12px] text-[#2c2c2c];
  background: linear-gradient(147.24deg, #00E2AC 3.67%, #41D2FE 94.09%);
}
.mainContent__mission tbody tr:first-child td:nth-child(2)::before{
  @apply content-['미션_02'];
}
.mainContent__mission tbody tr:first-child td:nth-child(3)::before{
  @apply content-['미션_03'];
}
.mainContent__mission table tbody tr td.lock{
  @apply relative after:absolute after:inline-block after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:left-0 after:right-0 after:bottom-0 after:top-0 after:z-[10];
}
.mainContent__mission table tbody tr td .missionBox{
  @apply flex flex-col justify-between items-center;
}
.mainContent__mission table tbody tr td .missionStatus{
  @apply absolute top-[4px] right-[4px] w-[52px] h-[18px] rounded-[8px] border border-[#00e2ac] font-semibold text-[10px] leading-[12px] text-[#1EAAAA] flex justify-center items-center z-[11];
}
.mainContent__mission table tbody tr td.lock .missionStatus{
  @apply text-[#00E2AC];
}
.mainContent__mission table tbody tr td .missionName{
  @apply font-[JalnanGothic] w-full h-[40px] flex justify-center items-center font-normal text-[12px] leading-[13px] text-[#0c0c0c] text-center;
}
.mainContent__mission table tbody tr td .missionPer{
  @apply w-full flex flex-col justify-between items-center gap-[1px];
}
.mainContent__mission table tbody tr td .missionPer .perBox{
  @apply w-full flex justify-center items-center gap-[4px];
}
.mainContent__mission table tbody tr td .missionPer .perBox div{
  @apply relative w-[40px] h-[6px] bg-[#B0FFE3] after:absolute after:w-[var(--completionWidth)] after:h-[6px] after:bg-[#00E2AC] after:left-0 after:top-0;
}
.mainContent__mission table tbody tr td .missionPer .perBox strong{
  @apply font-extrabold text-[10px] leading-[14px] text-[#00c294];
}
.mainContent__mission table tbody tr td .missionPer .perBox span{
  @apply font-medium text-[10px] leading-[14px] text-[#00c294];
}
.mainContent__mission table tbody tr td.ai{
  background: linear-gradient(134.97deg, #005E52 0.18%, #001650 107.1%);
}
.mainContent__mission table tbody tr td.ai .missionName{
  @apply text-[#fff];
}
.mainContent__mission table tbody tr td.ai .missionStatus{
  @apply border-none bg-[#00E2AC] text-[#2c2c2c];
}
.mainContent__mission.lock table tbody{
  @apply relative after:absolute after:inline-block after:w-full after:h-[calc(100%-4px)] after:bg-[rgba(0,0,0,0.7)] after:left-0 after:right-0 after:bottom-0 after:top-0 after:z-[12];
}
.lockPopup{
  @apply hidden;
}
.mainContent__mission.lock .lockPopup{
  @apply absolute flex flex-col justify-center items-center z-[15] left-0 top-[24px] p-[8px_26px_0_33px];
}
.mainContent__mission.lock .lockPopup .title{
  @apply font-[JalnanGothic] leading-[24px] font-normal text-[20px] text-[#fff] mb-[8px];
}
.mainContent__mission.lock .lockPopup p{
  @apply font-normal text-[14px] leading-[16px] text-center text-[#fff] mb-[24px];
}
.mainContent__mission.lock .lockPopup button{
  @apply p-[15px_80px_12px] bg-[#FF416E] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[28px] font-[JalnanGothic] font-normal text-[16px] leading-[16px] text-[#fff];
}
</style>