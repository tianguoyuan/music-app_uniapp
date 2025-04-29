<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Tabbar from '@/components/Tabbar.vue'
import PLATFORM from '@/utils/platform'

onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})

function toDashboard() {
  uni.redirectTo({
    url: '/pages/dashboard',
  })
}
</script>

<template>
  <view class="px-5">
    <!-- banner -->
    <view class="mt-5">
      <image src="../../assets/images/indexBanner.png" mode="widthFix" class="w-full" />
    </view>
    <!-- 歌单推荐 -->
    <view class="mt-5">
      <view class="flex justify-between items-center">
        <view class="text-4.5 color-#E8CDA7 line-height-8">歌单推荐</view>
        <view class="bg-#252830 color-#fff px-2 py-1 text-2.5">全部</view>
      </view>

      <view class="mt-2.5 relative">
        <image
          src="../../assets/images/indexBackgroundPlaylistRecommendation.png"
          mode="widthFix"
          class="w-full"
        />
        <view class="absolute top-7 left-34.75 right-4">
          <view class="color-#fff text-3.5 line-height-4.5">
            这个国产的Mac包管理工具，是否能成为HomeBrew
          </view>
          <view class="mt-3 color-#818387 text-3 line-height-3.5">
            我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。
          </view>
          <view class="mt-3 flex">
            <view class="flex px-2 py-1.5 bg-#252830">
              <image src="../../assets/images/singleMusic.png" mode="widthFix" class="w-1.8" />
              <view class="color-#fff text-2.5 ml-1">442</view>
            </view>
          </view>
        </view>
      </view>
    </view>
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
