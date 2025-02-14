<script lang="ts" setup>
const props = defineProps<{
  tabbarIndex: number
}>()

const tabbarList = [
  { title: '首页', icon: 'home', path: '/pages/index/index' },
  { title: '我的', icon: 'user', path: '/pages/user/user' },
]

function pageTo(index: number) {
  const path = tabbarList[index]?.path
  if (!path) return
  uni.switchTab({ url: path })
}
</script>

<template>
  <wd-tabbar
    :model-value="props.tabbarIndex"
    fixed
    bordered
    safe-area-inset-bottom
    placeholder
    @update:model-value="pageTo"
  >
    <wd-tabbar-item
      v-for="item in tabbarList"
      :key="item.title"
      :title="item.title"
      :icon="item.icon"
    />
    <!-- @click="pageTo(item.path)" -->
  </wd-tabbar>
</template>

<style lang="scss" scoped>
//
</style>
