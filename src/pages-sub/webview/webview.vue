<script lang="ts" setup>
const url = ref('')
onLoad((query) => {
  console.log('query', query)
  url.value = decodeURIComponent(query.url)
  console.log('url', url)
})
</script>

<template>
  <view>
    <web-view v-if="url" :src="url" />
  </view>
</template>

<style lang="scss" scoped>
//
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: 'webview',
  },
}
</route>
