<script lang="ts" setup>
import PLATFORM from '@/utils/platform'
import { getNavbarTop } from '@/utils'

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
  <view class="pt-safe">
    <view class="sticky bg-#1a1d25 top-0 z-10 px-5">
      <view v-if="!PLATFORM.isMp" class="h-4" />
      <view v-if="PLATFORM.isMpWeixin" :style="{ height: getNavbarTop() + 'px' }"></view>
      <view class="pb-4 flex justify-between items-center">
        <view class="flex">
          <view
            v-for="item in tabList"
            :key="item.label"
            class="color-#818387 mr-3 relative text-3"
            :class="[item.active ? 'color-#fff text-3.5' : '']"
            @click="tabClick(item)"
          >
            <view>{{ item.label }}</view>
            <view
              v-show="item.active"
              class="absolute h-0.5 left--1.5 right--1.5 bottom--3 bg-#E8CDA7"
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
