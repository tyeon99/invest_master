<template>
  <div class="introContent">
    <div class="introContent--box">
      <div class="top">
        <span>투자, 게임처럼 쉽게 배우자!</span>
      </div>
      <div class="bottom">
        <p>
          투자 마스터 클래스는 게임을 통해 실전 투자 전략을 배우는 체험형 교육 플랫폼입니다.<br /><br />

          미션으로 투자 기법을 익히고, 에피소드로 실제 매매를 체험하면서 투자 감각을 키워보세요!
        </p>
      </div>
    </div>
    <div class="introContent--box">
      <div class="top">
        <span>어떻게 진행되나요?</span>
      </div>
      <div class="bottom">
        <p>
          <strong>💡 미션</strong><br />
          핵심 투자 기법을 쉽고 빠르게 학습.<br />
          퀴즈로 이해도를 확인하고 보너스 포인트 획득.<br /><br />
          
          <strong>📊 에피소드</strong><br />
          배운 투자 기법을 활용해 시뮬레이션 매매 체험.<br />
          투자 결과와 적중률을 분석하며 실전 감각 강화.<br /><br />
          
          <strong>🏆 보상</strong><br />
          미션과 에피소드를 완료하면 포인트와 업적 보상.<br />
          랭킹을 올리고, 클래스 마스터 휘장을 획득.
        </p>
      </div>
    </div>
    <div class="introContent--box">
      <div class="top">
        <span>왜 마스터 클래스일까요?</span>
      </div>
      <div class="bottom">
        <p>
          <span>
            ✅ 쉽고 재미있게: 퀴즈와 시뮬레이션으로 부담 없이 학습 <br />
            ✅ 실전처럼: 실제 시장 데이터를 기반으로 한 체험 매매<br />
            ✅ 개인 맞춤: AI가 최적의 미션과 학습 경로 추천<br />
            ✅ 보상과 경쟁: 포인트, 업적, 랭킹으로 성취감 UP
          </span>
        </p>
      </div>
    </div>
    <div class="introContent--box">
      <div class="top">
        <span>지금 바로 시작해보세요!</span>
      </div>
      <div class="bottom">
        <p>
          미션 완료 → 에피소드 체험 → 보너스 획득 → 투자 실력 <strong>LEVEL UP!</strong><br /><br />

          투자, 이제 게임처럼 쉽고 재미있게 배우세요!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.introContent{
  @apply w-full pt-[20px] px-[16px] flex flex-col justify-start items-start gap-[20px] pb-[60px];
}
.introContent .introContent--box{
  @apply w-full rounded-[12px] border border-[#D7DFF9];
}
.introContent .introContent--box .top{
  @apply w-full bg-[#1AB6D8] rounded-t-[12px] p-[11px_16px_8px_16px];
}
.introContent .introContent--box .top span{
  @apply block font-[JalnanGothic] font-normal text-[16px] leading-[20px] text-[#fff];
}
.introContent .introContent--box .bottom{
  @apply w-full p-[16px_14px] bg-[#fff] rounded-b-[12px] flex flex-col justify-start items-start gap-[22px];
}
.introContent .introContent--box .bottom p{
  @apply font-semibold text-[14px] leading-[16px] text-[#2c2c2c];
}
.introContent .introContent--box .bottom p span{
  @apply leading-[24px];
}
</style>