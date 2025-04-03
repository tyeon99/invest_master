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
      </div>
      <div class="offcanvas-body">
        <div class="title">
          &lt;5-20 골든크로스 투자기법 EP-01&gt; 에피소드 결과
        </div>
        <div class="insignia">
          <div class="insignia-box">
            <div class="left">
              <span>클래스 마스터 레벨 획득!</span>
              <em>슈퍼 울트라캡숑 <br />가격패턴 투자기법</em>
            </div>
            <!-- 휘장01 -->
            <div class="right insignia01">
              <img width="240" src="~/assets/img/mission/insignia-img01.png" alt="휘장01">
            </div>
            <!-- 휘장02 -->
            <!-- <div class="right insignia02">
              <img width="258" src="~/assets/img/mission/insignia-img02.png" alt="휘장02">
            </div> -->
            <!-- 휘장03 -->
            <!-- <div class="right insignia03">
              <img width="332" src="~/assets/img/mission/insignia-img03.png" alt="휘장03">
            </div> -->
            <!-- 휘장04 -->
            <!-- <div class="right insignia04">
              <img width="176" src="~/assets/img/mission/insignia-img04.png" alt="휘장04">
            </div> -->
            <!-- 휘장05 -->
            <!-- <div class="right insignia05">
              <img width="315" src="~/assets/img/mission/insignia-img05.png" alt="휘장05">
            </div> -->
          </div>
        </div>
        <div class="correctContent">
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
          <div class="correctContent--box">
            <div class="top">
              <span>매매 결과</span>
            </div>
            <div class="bottom">
              <div class="listBox">
                <div class="list">
                  <span>게임구분</span>
                  <div class="type">단판 종가매매</div>
                </div>
                <div class="list">
                  <span>매매종목</span>
                  <div class="type">사원시스템, 우피고, 오성생명, 국성디지털</div>
                </div>
                <div class="list">
                  <span>기초자산</span>
                  <div class="type">4,789,345,000 원</div>
                </div>
                <div class="list">
                  <span>수익률</span>
                  <div class="type"><em>21.4%</em></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="investInfo-table">
          <div class="title">매매내역</div>
          <table>
            <colgroup>
              <col width="84">
              <col width="56">
              <col width="*">
              <col width="79">
              <col width="64">
            </colgroup>
            <thead>
              <tr>
                <th>거래일자</th>
                <th>구분</th>
                <th>종목명</th>
                <th>주문단가</th>
                <th>수익률</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.02.23</td>
                <td class="up">매수</td>
                <td class="text-truncate">사원시스템즈</td>
                <td>44,000</td>
                <td class="up">+12.3%</td>
              </tr>
              <tr>
                <td>2024.02.23</td>
                <td class="down">매도</td>
                <td class="text-truncate">사원시스템즈</td>
                <td>44,000</td>
                <td class="down">-12.3%</td>
              </tr>
            </tbody>
          </table>
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
  @apply relative w-full h-[calc(100%-10px)] bg-[#fff] pb-[45px] rounded-t-[36px] overflow-y-auto;
}
.offcanvas-header{
  @apply w-full flex justify-end items-center mb-[16px] p-[26px_24px_8px] sticky top-0 bg-[#fff] z-[99];
}
.offcanvas-body .title{
  @apply w-full font-extrabold text-[16px] leading-[19px] text-[#2c2c2c] text-center mb-[28px];
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
.offcanvas-body .insignia{
  @apply w-full px-[16px] mb-[24px];
}
.offcanvas-body .insignia-box{
  @apply relative w-full h-[167px] rounded-[12px] p-[33px_38px_33px_16px] flex justify-between items-start gap-[40px] overflow-hidden;
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
.offcanvas-body .insignia-box .right.insignia01{
  @apply absolute top-0 right-[-49px];
}
.offcanvas-body .insignia-box .right.insignia02{
  @apply absolute top-0 right-[-60px];
}
.offcanvas-body .insignia-box .right.insignia03{
  @apply absolute top-[-76px] right-[-86px];
}
.offcanvas-body .insignia-box .right.insignia04{
  @apply absolute top-[33px] right-[-8px];
}
.offcanvas-body .insignia-box .right.insignia05{
  @apply absolute top-[-42px] right-[-89px];
}
.offcanvas-body .insignia-box .right img{
  @apply mix-blend-screen;
  filter: contrast(1.0) saturate(1.2);
}
.offcanvas-body .correctContent{
  @apply w-full px-[16px] flex flex-col justify-start items-start gap-[20px] mb-[36px];
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
  @apply w-full p-[16px] bg-[#fff] rounded-b-[12px] flex flex-col justify-start items-start gap-[22px];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox{
  @apply w-full flex flex-col justify-start items-start gap-[8px];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list{
  @apply w-full flex justify-start items-center gap-[48px];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list span{
  @apply py-[6px] min-w-[80px] h-[24px] flex justify-center items-center border border-[#7ED8E4] rounded-[16px] font-extrabold text-[12px] leading-[12px] text-[#00A6BD];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list .type{
  @apply font-medium text-[14px] leading-[19px] text-[#2c2c2c];
}
.offcanvas-body .correctContent .correctContent--box .bottom .listBox .list .type em{
  @apply font-extrabold text-[#FF4646];
}
.offcanvas-body .correctContent .correctContent--box .bottom .point{
  @apply w-full text-center font-extrabold text-[16px] leading-[20px] text-[#FF5291];
}
.investInfo-table{
  @apply w-full mb-[40px];
}
.investInfo-table .title{
  @apply text-left pl-[16px];
}
.investInfo-table table{
  @apply w-full table-fixed;
}
.investInfo-table table thead tr th{
  @apply h-[42px] text-center bg-[#F0F4FA] border-b border-r border-[#DBE3EE] last:border-r-0 font-medium text-[14px] leading-[16px] text-[#2c2c2c];
}
.investInfo-table table tbody tr td{
  @apply h-[36px] text-center border-r border-[#DBE3EE] last:border-r-0 font-medium text-[12px] leading-[14px] text-[#2c2c2c] px-[5px];
}
.investInfo-table table tbody tr td.up{
  @apply text-[#FF4646];
}
.investInfo-table table tbody tr td.down{
  @apply text-[#467AFF];
}
.offcanvas-footer{
  @apply w-full flex justify-center items-center;
}
.offcanvas-footer button{
  @apply w-[100px] h-[48px] rounded-[6px] flex justify-center items-center border border-[#00a6bd] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#00a6bd] pt-[3px];
}
</style>