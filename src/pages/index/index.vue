<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import { getHomeBanner } from '@/service'
import { TestEnum } from '@/typings'
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})

const current = ref(0)
const swiperList = ref([])

const hotSearchMsg = ref('搜索')
onLoad(init)
async function init() {
  // hotSearchMsg

  getHomeBanner().then(({ data: { banner } }) => {
    console.log('homeBannerList', banner)
    swiperList.value = (banner || []).map((v) => ({ id: v.id, value: v.cover, type: 'image' }))
  })
}

function handleBackHome() {
  uni.reLaunch({ url: '/pages/index/index' })
}
function toDemo() {
  uni.navigateTo({ url: '/pages-sub/demo/demo' })
}
function toSearchPage() {
  uni.navigateTo({ url: '/pages/index/search' })
}
</script>
<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared', // 解除样式隔离
  },
}
</script>
<template>
  <view class="p-3">
    <wd-navbar title="home" fixed placeholder safe-area-inset-top>
      <!-- <template #capsule>
        <wd-navbar-capsule @back-home="handleBackHome" />
      </template> -->
    </wd-navbar>

    <view @click="toSearchPage">
      <wd-search disabled hide-cancel :placeholder="hotSearchMsg" />
    </view>

    <view class="card-swiper mt-3">
      <wd-swiper
        v-model:current="current"
        autoplay
        custom-indicator-class="custom-indicator-class"
        :indicator="true"
        :list="swiperList"
      ></wd-swiper>
    </view>

    <wd-button @click="toDemo">主要按钮</wd-button>

    <Tabbar tabbar-path="/pages/index/index" />
  </view>
</template>
<style lang="scss" scoped>
.card-swiper {
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 24rpx;
  --wot-swiper-nav-dot-color: #e7e7e7;
  --wot-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24px;
  :deep(.custom-indicator-class) {
    color: white;
  }
  :deep(.custom-image) {
    border-radius: 12px;
  }
  :deep(.wd-swiper__item) {
    padding: 0;
  }
  :deep(.wd-swiper__track) {
    height: 240px !important;
  }
}
</style>

<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
