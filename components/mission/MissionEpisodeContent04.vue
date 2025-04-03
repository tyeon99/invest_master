<template>
  <div class="missionEpisodeContent">
    <div class="investInfo-table">
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
    <div class="investInfo-more">
      <button>더보기 +</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
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
.investInfo-more{
  @apply w-full flex justify-center items-center mt-[40px];
}
.investInfo-more button{
  @apply w-[320px] h-[48px] rounded-[28px] border-[2px] border-[#2c2c2c] font-[JalnanGothic] font-normal text-[14px] leading-[14px] text-[#2c2c2c] pt-[3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#fff];
}
</style>