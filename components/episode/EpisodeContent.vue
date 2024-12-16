<template>
  <div class="episodeContent">
    <div
      v-for="(episode, idx) in episodes"
      :key="idx"
      class="episodeContent__episode"
      :class="{ 'disabled': idx !== 0 }"
    >
      <div class="episodeContent__episode--num">
        {{ episode.num }}
      </div>
      <div class="episodeContent__episode--status">
        <div
          class="percentBar"
          :style="{ '--progress': calculateProgress(episode.status) + '%' }"
        ></div>
        <span>{{ episode.status }}</span>
      </div>
      <div class="episodeContent__episode--link">
        <button @click="idx === 0 ? goLink('/mission') : null">go</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      episodes: [
        { num: '에피소드 01', status: '적중률 50%' },
        { num: '에피소드 02', status: '미체험' },
        { num: '에피소드 03', status: '미체험' },
        { num: '에피소드 04', status: '미체험' }
      ]
    }
  },
  methods: {
    goLink(path) {
      this.$router.push(path)
    },
    calculateProgress(status) {
      if (status.includes('적중률')) {
        return parseInt(status.replace('적중률 ', '').replace('%', '')) || 0
      }
      return 0
    }
  }
}
</script>

<style scoped>
.episodeContent{
  @apply w-full h-full min-h-[calc(100vh-204.5px)] bg-[#EEF0F3] p-[37px_16px] flex flex-col justify-start items-center gap-[8px];
}
.episodeContent__episode{
  @apply w-full h-[80px] p-[16px] bg-[#fff] border border-[#d7dff9] rounded-[12px] flex justify-between items-center;
}
.episodeContent__episode--num{
  @apply font-extrabold text-[16px] leading-[16px] text-[#2c2c2c];
}
.episodeContent__episode--status{
  @apply flex flex-col justify-center items-center gap-[8px];
}
.episodeContent__episode--status .percentBar{
  @apply relative w-[114px] h-[12px] rounded-[4px] opacity-40 after:absolute after:w-[var(--progress,0%)] after:h-[12px] after:rounded-[4px] after:left-0 after:top-0;
  background: linear-gradient(180deg, #F3EAEA 11.81%, #E0EEF1 51.02%, #E8C2FF 123.95%);
}
.episodeContent__episode--status .percentBar::after{
  background: linear-gradient(147.24deg, #00DFAA 3.67%, #00B5EC 94.09%);
}
.episodeContent__episode--status span{
  @apply font-extrabold text-[12px] leading-[16px] text-[#00a6bf]
}
.episodeContent__episode--link button{
  @apply w-[48px] h-[48px] flex justify-center items-center bg-[#00a6bd] rounded-[12px] pb-[3px] font-extrabold text-[20px] leading-[20px] text-[#fff];
}

.episodeContent__episode.disabled{
  @apply bg-[#F0F4FA];
}
.episodeContent__episode.disabled .episodeContent__episode--num{
  @apply text-[#B6BECA];
}
.episodeContent__episode.disabled .episodeContent__episode--status span{
  @apply text-[#B6BECA];
}
.episodeContent__episode.disabled .episodeContent__episode--link button{
  @apply bg-[#B6BECA];
}
</style>