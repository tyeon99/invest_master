<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="missionEpisode">
    <div class="missionEpisode__tab">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="{ active: activeTab === tab.name }"
        @click="tabClick(tab)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="missionEpisode__content">
      <div
        v-for="(tab, idx) in tabs"
        v-show="activeTab === tab.name"
        :key="idx"
        class="missionEpisode__content--box"
      >
        <component
          :is="tab.component"
          @change-tab="changeTab"
        />
      </div>
    </div>
    <MissionEndOffcanvas 
      v-if="isEndOffcanvasOpen"
      :isOffcanvasAni="isOffcanvasAni"
      @close-endOffcanvas="closeEndOffcanvas"
    />
  </div>
</template>

<script>
import MissionEpisodeContent01 from '~/components/mission/MissionEpisodeContent01.vue'
import MissionEpisodeContent02 from '~/components/mission/MissionEpisodeContent02.vue'
import MissionEpisodeContent03 from '~/components/mission/MissionEpisodeContent03.vue'

export default {
  data() {
    return {
      activeTab: "tab1",
      tabs: [
        { name: "tab1", label: '브리핑', component: MissionEpisodeContent01 },
        { name: "tab2", label: '투자정보', component: MissionEpisodeContent02 },
        { name: "tab3", label: '차트/매매', component: MissionEpisodeContent03 },
        { name: "tab4", label: '미션종료' }
      ],
      isOffcanvasAni: false,
      isEndOffcanvasOpen: false
    }
  },
  methods: {
    changeTab(tabName) {
      this.activeTab = tabName
    },
    tabClick(tab) {
      if (tab.name === "tab4") {
        this.openEndOffcanvas()
      } else {
        this.activeTab = tab.name
      }
    },
    openEndOffcanvas() {
      this.isOffcanvasAni = true
      this.isEndOffcanvasOpen = true
    },
    closeEndOffcanvas() {
      this.isOffcanvasAni = false
      setTimeout(() => {
        this.isEndOffcanvasOpen = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.missionEpisode{
  @apply w-full;
}
.missionEpisode__tab{
  @apply w-full flex justify-center items-center sticky top-0 bg-[#fff] z-[999];
}
.missionEpisode__tab button{
  @apply w-[25%] h-[42px] border-b-[2px] border-[#2c2c2c] font-semibold text-[16px] leading-[20px] text-center text-[#B6BECA] pt-[2px];
}
.missionEpisode__tab button.active{
  @apply font-extrabold text-[#2c2c2c] border-[#00A6BD];
}
</style>