<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Tabbar from '@/components/Tabbar.vue'
import PLATFORM from '@/utils/platform'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import Recommend from './components/Recommend.vue'
import Record from './components/Record.vue'
import Artist from './components/Artist.vue'
import RecordCompany from './components/RecordCompany.vue'
import RankingList from './components/RankingList.vue'
import { getNavbarTop, getSafeArea } from '@/utils'
import TabNav from '@/components/TabNav.vue'

onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})

function toDashboard() {
  uni.redirectTo({
    url: '/pages/dashboard',
  })
}

const homeTabList = ref([
  { label: '推荐', key: 'recommend', active: true },
  { label: '唱片', key: 'record', active: false },
  { label: '艺术家', key: 'artist', active: false },
  { label: '唱片公司', key: 'recordCompany', active: false },
  { label: '榜单', key: 'rankingList', active: false },
])

type HomeTabListKey = 'recommend' | 'record' | 'artist' | 'recordCompany' | 'rankingList'
const currentTabKey = computed(() => homeTabList.value.find((v) => v.active).key as HomeTabListKey)

function handleClick(v) {
  console.log('v', v)
}
</script>

<template>
  <TabNav :tab-list="homeTabList" @handle-click="handleClick" />

  <Recommend v-show="currentTabKey === 'recommend'" />
  <Record v-show="currentTabKey === 'record'" />
  <Artist v-show="currentTabKey === 'artist'" />
  <RecordCompany v-show="currentTabKey === 'recordCompany'" />
  <RankingList v-show="currentTabKey === 'rankingList'" />
  <!-- 占据空白位置 -->
  <view class="h-5" />
  <Tabbar tabbar-path="/pages/index/index" />
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="home">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
  needLogin: false,
}
</route>
