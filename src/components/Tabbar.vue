<script lang="ts" setup>
import { ColorEnum } from '@/enums/ColorEnum'
import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'
import { useTabbarStore } from '@/store/tabbar'
import IconHome from '@/assets/icons/home.svg'
import IconHomeActive from '@/assets/icons/homeActive.svg'
import IconAlbum from '@/assets/icons/album.svg'
import IconAlbumActive from '@/assets/icons/albumActive.svg'
import IconMessage from '@/assets/icons/message.svg'
import IconMessageActive from '@/assets/icons/messageActive.svg'
import IconUser from '@/assets/icons/user.svg'
import IconUserActive from '@/assets/icons/userActive.svg'
import IconPublish from '@/assets/icons/publish.svg'
import { getSafeArea } from '@/utils'

const tabbarStore = useTabbarStore()

const tabbarList = [
  { title: '首页', icon: IconHome, activeIcon: IconHomeActive, path: '/pages/index/index' },
  { title: '海蝶', icon: IconAlbum, activeIcon: IconAlbumActive, path: '/pages/kind/kind' },
  { icon: IconPublish, path: '/pages/publish/publish' },
  {
    title: '动态',
    icon: IconMessage,
    activeIcon: IconMessageActive,
    path: '/pages/message/message',
  },
  { title: '我的', icon: IconUser, activeIcon: IconUserActive, path: '/pages/user/user' },
]
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
    :bg-color="ColorEnum.MAIN_COLOR"
    active-color="#fff"
    safe-area-inset-bottom
    :top-shadow="props.topShadow"
    placeholder
  >
    <TnTabbarItem v-for="(item, index) in tabbarList" :key="index" @click="pageTo(index)">
      <template #default>
        <view v-if="item.title" class="flex-1 flex items-center h-45px">
          <view class="flex flex-col items-center justify-center text-3">
            <view>
              <image
                v-show="index === tabbarStore.tabbarIndex"
                :src="item.activeIcon"
                class="w-5 h-5"
              />
              <image v-show="index !== tabbarStore.tabbarIndex" :src="item.icon" class="w-5 h-5" />
            </view>
            <view class="mt-1">{{ item.title }}</view>
          </view>
        </view>

        <view v-else class="flex-1 flex items-start h-45px">
          <image :src="item.icon" class="w-9 h-9 mt-1" />
        </view>
      </template>
    </TnTabbarItem>
  </TnTabbar>
</template>

<style lang="scss" scoped>
//
</style>
