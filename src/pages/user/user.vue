<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import Navbar from '@/components/Navbar.vue'
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'User',
})
onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})
function toDemo() {
  uni.navigateTo({ url: '/pages-sub/demo/demo' })
}
</script>
<template>
  <view class="p-3">
    <view class="color-#fff">user</view>
  </view>
  <Tabbar tabbar-path="/pages/user/user" />
</template>

<style lang="scss" scoped></style>

<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '我的',
  },
}
</route>
