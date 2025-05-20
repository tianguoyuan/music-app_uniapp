<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import Navbar from '@/components/Navbar.vue'
import PLATFORM, { platform } from '@/utils/platform'

import ICON_BG_COVER from '@/assets/icons/musicListBgCover.svg'
import IMG_FILTER from '@/assets/icons/filter.svg'
import ICON_MUSIC_PLAY from '@/assets/icons/musicPlay.svg'

import IMG_KIND_BANNER from '@/assets/icons/kindBanner.svg'
import IMG_KIND_LIST1 from '@/assets/icons/kindList1.svg'
import IMG_KIND_LIST2 from '@/assets/icons/kindList2.svg'
import IMG_KIND_LIST3 from '@/assets/icons/kindList3.svg'
import IMG_KIND_LIST4 from '@/assets/icons/kindList4.svg'
import IMG_KIND_LIST5 from '@/assets/icons/kindList5.svg'
import { getNavbarTop } from '@/utils'
import { useUniAppSystemRectInfo } from '@/utils/useUniAppSystemRectInfo'

const { navBarInfo } = useUniAppSystemRectInfo()

const musicList = [
  {
    label:
      '还真别说，我幻想过，假如我脑子里有个大容量硬盘，我把维基百科或者百度百科的镜像缓存到脑子里，一定帅呆了。',
    tags: [
      { label: '唱品：', value: '李冬' },
      { label: '封品：', value: '宇宙预报员' },
    ],
    price: '255',
    icon: IMG_KIND_LIST1,
  },

  {
    label:
      '我倒不是说他是个坏人——他不是坏人。可是不一定是坏人才能让人心烦——你可以是个好人，却同时让人心烦。',
    tags: [
      { label: '唱品：', value: '李子强' },
      { label: '封品：', value: '不如自成宇宙' },
    ],
    price: '329',
    icon: IMG_KIND_LIST2,
  },

  {
    label: '那我的也就差不多，老子只要往那儿一站，王霸之气辐射方圆数百里。',
    tags: [
      { label: '唱品：', value: '苏迪' },
      { label: '封品：', value: '冬天才去跳海' },
    ],
    price: '490',
    icon: IMG_KIND_LIST3,
  },

  {
    label: '不过，我却摇了摇头，居然还在乎白不白的问题？',
    tags: [
      { label: '唱品：', value: '黎楠' },
      { label: '封品：', value: '樱桃肉肉丸' },
    ],
    price: '792',
    icon: IMG_KIND_LIST4,
  },

  {
    label: '闻言，我当即清楚，这是小黑的声音。',
    tags: [
      { label: '唱品：', value: '郭文' },
      { label: '封品：', value: '二号葫芦娃' },
    ],
    price: '891',
    icon: IMG_KIND_LIST5,
  },
]

defineOptions({
  name: 'Kind',
})
onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})
</script>
<template>
  <view class="px-5" :style="{ paddingTop: navBarInfo.statusHeight + 'px' }">
    <view
      class="color-#fff flex justify-between text-4 items-center"
      :style="{ height: navBarInfo.height - navBarInfo.statusHeight + 'px' }"
    >
      <view>淘碟</view>
      <image class="w-4 h-4" src="@/assets/icons/search.svg" />
    </view>

    <image class="w-full mt-3" :src="IMG_KIND_BANNER" mode="widthFix" />

    <view class="mt-5">
      <view class="flex justify-between mt-2">
        <view class="flex items-center">
          <view class="color-#fff line-height-4 text-3">最新</view>
          <view class="color-#818387 text-2.5 line-height-3.5 pl-2">|</view>
          <view class="ml-2 color-#818387 text-2.5 line-height-3.5">价格</view>
        </view>
        <view class="bg-#252830 color-#fff flex items-center justify-center px-2 py-1">
          <image class="w-2.5 h-2.5" :src="IMG_FILTER" />
          <view class="ml-1">筛选</view>
        </view>
      </view>
    </view>

    <view v-for="item in musicList" :key="item.label" class="mt-5 flex">
      <view class="relative h-27.5 w-30.5 flex-shrink-0">
        <image class="w-27.5 h-27.5 absolute left-3" :src="ICON_BG_COVER" />
        <image class="w-27.5 h-27.5 absolute left-0" :src="item.icon" />

        <image class="w-7.5 h-7.5 absolute right-4 bottom-1" :src="ICON_MUSIC_PLAY" />
      </view>
      <view class="flex flex-col justify-between ml-5">
        <view class="color-#fff text-3.5 line-height-4 line-clamp-2">{{ item.label }}</view>
        <view class="flex flex-col flex-1 justify-between">
          <view>
            <view
              v-for="tab in item.tags"
              :key="tab.label"
              class="flex color-#818387 px-2 py-1 bg-#252830 mt-1 w-max"
            >
              <view>{{ tab.label }}</view>
              <view class="pl-0.5">{{ tab.value }}</view>
            </view>
          </view>

          <view class="color-#F76C5A flex items-end">
            <view class="text-2.5">￥</view>
            <view class="ml-1 text-3.5">{{ item.price }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
  <Tabbar tabbar-path="/pages/kind/kind" />
</template>

<style lang="scss" scoped></style>

<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '海蝶',
  },
}
</route>
