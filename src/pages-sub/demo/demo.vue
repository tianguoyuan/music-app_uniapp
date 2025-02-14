<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

//
function back() {
  uni.reLaunch({ url: '/pages/index/index' })
}

function pageToList() {
  uni.navigateTo({
    url: '/pages-sub/demo/list',
  })
}
</script>

<template>
  <view class="">
    <view>demo -- {{ PLATFORM.platform }}</view>
    <wd-button @click="back">back</wd-button>
    <view class="mt-3">
      <wd-button @click="pageToList">PageTo-List</wd-button>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: 'demo',
  },
}
</route>
