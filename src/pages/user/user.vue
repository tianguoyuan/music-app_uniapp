<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'

defineOptions({
  name: 'User',
})
const tabbar = ref(1)
</script>
<template>
  <view class="p-3">
    <wd-navbar title="user" fixed placeholder safe-area-inset-top></wd-navbar>

    user
    <Tabbar :tabbar-index="1" />
  </view>
</template>

<style lang="scss" scoped></style>

<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
