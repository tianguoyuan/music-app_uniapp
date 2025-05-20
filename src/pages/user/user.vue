<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import Navbar from '@/components/Navbar.vue'
import PLATFORM from '@/utils/platform'
import IMG_USER_BGCOVER from '@/assets/icons/userBgCover.svg'

import IMG_USER_TAB1 from '@/assets/icons/userTab1.svg'
import IMG_USER_TAB2 from '@/assets/icons/userTab2.svg'
import IMG_USER_TAB3 from '@/assets/icons/userTab3.svg'

import IMG_USER_LIST1 from '@/assets/icons/userList1.svg'
import IMG_USER_LIST2 from '@/assets/icons/userList2.svg'
import IMG_USER_LIST3 from '@/assets/icons/userList3.svg'
import IMG_USER_LIST4 from '@/assets/icons/userList4.svg'
import IMG_USER_LIST5 from '@/assets/icons/userList5.svg'
import IMG_USER_LIST6 from '@/assets/icons/userList6.svg'
import { useUniAppSystemRectInfo } from '@/utils/useUniAppSystemRectInfo'

const { navBarInfo } = useUniAppSystemRectInfo()
defineOptions({
  name: 'User',
})
onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})
function toDemo() {
  uni.navigateTo({ url: '/pages-sub/demo/demo' })
}

const tabList = [
  { label: '出售', value: '175', icon: IMG_USER_TAB1 },
  { label: '发布', value: '312', icon: IMG_USER_TAB2 },
  { label: '收藏', value: '806', icon: IMG_USER_TAB3 },
]

const list = [
  { icon: IMG_USER_LIST1, label: '我的订单' },
  { icon: IMG_USER_LIST2, label: '我的评论' },
  { icon: IMG_USER_LIST3, label: '我的草稿' },
  { icon: IMG_USER_LIST4, label: '数据指南' },
  { icon: IMG_USER_LIST5, label: '帮助中心' },
  { icon: IMG_USER_LIST6, label: '我要反馈' },
]
</script>
<template>
  <view>
    <view class="relative w-full h-55">
      <image class="absolute h-full w-full" :src="IMG_USER_BGCOVER" />
      <view :style="{ 'padding-top': navBarInfo.statusHeight + 'px' }">
        <view
          class="flex justify-between px-5 items-center"
          :style="{
            height: navBarInfo.height - navBarInfo.statusHeight + 'px',
          }"
        >
          <image class="w-5 h-5" src="@/assets/icons/setting.svg" />
          <image class="w-4 h-4" src="@/assets/icons/search.svg" />
        </view>
      </view>

      <view class="absolute right-5 bottom-5">
        <image class="w-22.5 h-22.5" src="@/assets/icons/userAvatar.svg" />
      </view>
    </view>

    <view class="px-5 mt-6 grid grid-cols-3 gap-4">
      <view v-for="item in tabList" :key="item.label">
        <view class="color-#818387 text-3 line-height-4">{{ item.label }}</view>
        <view class="bg-#252830 mt-1 flex items-center justify-center flex-col py-6">
          <image class="w-6 h-6" :src="item.icon" />
          <view class="mt-2.5 color-#fff text-3 line-height-4">{{ item.value }}</view>
        </view>
      </view>
    </view>

    <view class="mt-7.5 px-5">
      <view v-for="item in list" :key="item.label" class="py-2.5 flex">
        <view class="w-5">
          <image :src="item.icon" class="h-4.5" mode="heightFix" />
        </view>
        <view class="ml-4 color-#fff text-3.5 line-height-5">
          {{ item.label }}
        </view>
      </view>
    </view>
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
