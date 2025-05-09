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
function tabClick(item: (typeof homeTabList.value)[number]) {
  homeTabList.value.forEach((v) => (v.active = false))
  item.active = true
}
type HomeTabListKey = 'recommend' | 'record' | 'artist' | 'recordCompany' | 'rankingList'
const currentTabKey = computed(() => homeTabList.value.find((v) => v.active).key as HomeTabListKey)

// eslint-disable-next-line vue/return-in-computed-property
const currentComponent = computed(() => {
  if (currentTabKey.value === 'recommend') {
    return Recommend
  } else if (currentTabKey.value === 'record') {
    return Record
  } else if (currentTabKey.value === 'artist') {
    return Artist
  } else if (currentTabKey.value === 'recordCompany') {
    return RecordCompany
  } else if (currentTabKey.value === 'rankingList') {
    return RankingList
  }
})
</script>

<template>
  <view class="px-5 pt-safe">
    <view class="sticky bg-#1a1d25 top-0 z-10">
      <view v-if="!PLATFORM.isMp" class="h-4" />
      <view v-if="PLATFORM.isMpWeixin" :style="{ height: getNavbarTop() + 'px' }"></view>
      <view class="pb-4 flex justify-between items-center">
        <view class="flex">
          <view
            v-for="item in homeTabList"
            :key="item.label"
            class="color-#818387 mr-3 relative text-3"
            :class="[item.active ? 'color-#fff text-3.5' : '']"
            @click="tabClick(item)"
          >
            <view>{{ item.label }}</view>
            <view
              v-show="item.active"
              class="absolute h-0.5 left--1.5 right--1.5 bottom--3 bg-#E8CDA7"
            ></view>
          </view>
        </view>
        <view>
          <image class="w-4 h-4" src="../../assets/icons/search.svg" />
        </view>
      </view>
    </view>
    <Recommend v-show="currentTabKey === 'recommend'" />
    <Record v-show="currentTabKey === 'record'" />
    <Artist v-show="currentTabKey === 'artist'" />
    <RecordCompany v-show="currentTabKey === 'recordCompany'" />
    <RankingList v-show="currentTabKey === 'rankingList'" />

    <!-- 占据空白位置 -->
    <view class="h-5" />
  </view>
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
