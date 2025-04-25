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
  <view class="">
    <Navbar title="index" show-home-icon @click-home-icon="toDashboard" />
    index

    <Tabbar tabbar-path="/pages/index/index" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: 'index',
  },
  needLogin: true,
}
</route>
