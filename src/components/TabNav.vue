<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import { getNavbarTop } from '@/utils'
import { useUniAppSystemRectInfo } from '@/utils/useUniAppSystemRectInfo'

const { navBarInfo } = useUniAppSystemRectInfo()

interface ITabItem {
  label: string
  key: string
  active: boolean
}
const props = withDefaults(
  defineProps<{
    tabList: ITabItem[]
  }>(),
  {
    tabList: () => [],
  },
)

const emits = defineEmits<{
  handleClick: [v: ITabItem]
}>()

function tabClick(item: (typeof props.tabList)[number]) {
  props.tabList.forEach((v) => (v.active = false))
  item.active = true

  emits('handleClick', item)
}
</script>

<template>
  <view
    :style="{
      paddingTop: navBarInfo.statusHeight + 'px',
    }"
  >
    <view class="sticky bg-#1a1d25 top-0 z-10 px-5">
      <view
        class="flex justify-between items-center"
        :style="{ height: navBarInfo.height - navBarInfo.statusHeight + 'px' }"
      >
        <view class="flex">
          <view
            v-for="item in tabList"
            :key="item.label"
            class="color-#818387 mr-3 relative text-3 line-height-10"
            :class="[item.active ? 'color-#fff text-3.5' : '']"
            @click="tabClick(item)"
          >
            <view>{{ item.label }}</view>
            <view
              v-show="item.active"
              class="absolute h-0.5 left--1.5 right--1.5 bottom-0 bg-#E8CDA7"
            ></view>
          </view>
        </view>
        <view>
          <image class="w-4 h-4" src="@/assets/icons/search.svg" />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
  },
}
</route>
