<script lang="ts" setup>
import { ColorEnum } from '@/enums/ColorEnum'
import { TnTabbar, TnTabbarItem } from '@tuniao/tnui-vue3-uniapp'
import { useTabbarStore } from '@/store/tabbar'
const tabbarStore = useTabbarStore()

const tabbarList = [
  { title: '首页', icon: 'home', path: '/pages/index/index' },
  { title: '分类', icon: 'align-right', path: '/pages/kind/kind' },
  { title: '购物车', icon: 'shop', path: '/pages/shopping/shopping' },
  { title: '我的', icon: 'my', path: '/pages/user/user' },
] as const
type PathType = (typeof tabbarList)[number]['path']
const props = withDefaults(
  defineProps<{
    tabbarPath: PathType
    topShadow: boolean
  }>(),
  {
    topShadow: true,
  },
)

// 初次进入生效
const tabbarIndex = tabbarList.findIndex((v) => v.path === props.tabbarPath)
tabbarStore.changeTabbarIndex(tabbarIndex)

function pageTo(index: number) {
  tabbarStore.changeTabbarIndex(index)
  const path = tabbarList[index]?.path
  if (!path) return
  uni.switchTab({ url: path })
}
</script>

<template>
  <TnTabbar
    v-if="!tabbarStore.hideTabbar"
    :model-value="tabbarStore.tabbarIndex"
    fixed
    :active-color="ColorEnum.MAIN_COLOR"
    safe-area-inset-bottom
    :top-shadow="props.topShadow"
    placeholder
  >
    <TnTabbarItem
      v-for="(item, index) in tabbarList"
      :key="index"
      :icon="item.icon"
      :active-icon="item.icon"
      :text="item.title"
      @click="pageTo(index)"
    />
  </TnTabbar>
</template>

<style lang="scss" scoped>
//
</style>
