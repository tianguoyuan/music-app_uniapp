<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import PLATFORM from '@/utils/platform'
import TabNav from '@/components/TabNav.vue'

import IMG_AVATAR1 from '@/assets/icons/videoAvatar1.svg'
import IMG_AVATAR2 from '@/assets/icons/videoAvatar2.svg'
import IMG_AVATAR3 from '@/assets/icons/videoAvatar3.svg'
import IMG_AVATAR4 from '@/assets/icons/videoAvatar4.svg'
import IMG_AVATAR5 from '@/assets/icons/videoAvatar5.svg'
import IMG_AVATAR6 from '@/assets/icons/videoAvatar6.svg'
import IMG_AVATAR7 from '@/assets/icons/videoAvatar7.svg'
import IMG_AVATAR8 from '@/assets/icons/videoAvatar8.svg'
import IMG_AVATAR9 from '@/assets/icons/videoAvatar9.svg'
import IMG_AVATAR10 from '@/assets/icons/videoAvatar10.svg'
import IMG_AVATAR11 from '@/assets/icons/videoAvatar11.svg'
import IMG_AVATAR12 from '@/assets/icons/videoAvatar12.svg'

import IMG_USER_AVATAR1 from '@/assets/icons/videoUserAvatar1.svg'
import IMG_USER_AVATAR2 from '@/assets/icons/videoUserAvatar2.svg'
import IMG_USER_AVATAR3 from '@/assets/icons/videoUserAvatar3.svg'
import IMG_USER_AVATAR4 from '@/assets/icons/videoUserAvatar4.svg'

import IMG_BG_COVER1 from '@/assets/icons/videoBgCover1.svg'
import IMG_BG_COVER2 from '@/assets/icons/videoBgCover2.svg'
import IMG_BG_COVER3 from '@/assets/icons/videoBgCover3.svg'
import IMG_BG_COVER4 from '@/assets/icons/videoBgCover4.svg'

import IMG_LIKE from '@/assets/icons/videoLike.svg'
import IMG_MESSAGE from '@/assets/icons/videoMessage.svg'
import IMG_SHARE from '@/assets/icons/videoShare.svg'

defineOptions({
  name: 'Message',
})
onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})

const tabList = ref([
  { label: '最新发布', key: 'release', active: true },
  { label: '最新出售', key: 'sell', active: false },
])

function handleClick(v) {
  console.log('v', v)
}
</script>
<template>
  <TabNav :tab-list="tabList" @handle-click="handleClick" />
  <Tabbar tabbar-path="/pages/message/message" />
</template>

<style lang="scss" scoped></style>

<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '动态',
  },
}
</route>
