<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

//
function back() {
  uni.reLaunch({ url: '/pages/index/index' })
}
</script>

<template>
  <view class="">
    <view>demo -- {{ PLATFORM.platform }}</view>
    <wd-button @click="back">back</wd-button>

    <view class="w-50 h-50 bg-amber"></view>
    <view class="block"></view>
  </view>
</template>

<style lang="scss" scoped>
.block {
  width: 400rpx;
  height: 400rpx;
  background-color: aqua;
}
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: 'demo',
  },
}
</route>
