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
  <view class="p-3">
    <view class="color-#fff">user</view>
  </view>
  <Tabbar tabbar-path="/pages/publish/publish" />
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'index',
  },
  needLogin: false,
}
</route>
