<template>
  <div class="missionEpisodeContent">
    <div class="investInfo-table">
      <table>
        <colgroup>
          <col width="48">
          <col width="79">
          <col width="*">
          <col width="84">
          <col width="80">
        </colgroup>
        <thead>
          <tr>
            <th>랭킹</th>
            <th>닉네임</th>
            <th>게임<br />포인트</th>
            <th>클래스마스터<br /> 달성</th>
            <th>에피소드 <br />체험 포인트</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, idx) in rankingData" :key="idx">
            <td>{{ player.rank }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.gamePoints }}</td>
            <td>{{ player.classMaster }}</td>
            <td>{{ player.episodePoints }}</td>
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
  data() {
    return {
      rankingData: [
        { rank: 1, name: "닉네임1", gamePoints: "포인트", classMaster: 13420, episodePoints: 1230 },
        { rank: 2, name: "닉네임2", gamePoints: "포인트", classMaster: 10200, episodePoints: 980 },
        { rank: 3, name: "닉네임3", gamePoints: "포인트", classMaster: 8700, episodePoints: 750 }
      ]
    }
  }
}
</script>

<style scoped>
.investInfo-table table{
  @apply w-full;
}
.investInfo-table table thead tr th{
  @apply h-[72px] text-center bg-[#F0F4FA] border-b border-r border-[#DBE3EE] last:border-r-0 font-medium text-[14px] leading-[16px] text-[#2c2c2c];
}
.investInfo-table table tbody tr td{
  @apply h-[32px] text-center border-r border-[#DBE3EE] last:border-r-0 font-medium text-[12px] leading-[14px] text-[#2c2c2c];
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