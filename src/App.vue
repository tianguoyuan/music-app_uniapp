<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
/* stylelint-disable selector-type-no-unknown */
button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 微信 tabbar.custom隐藏， h5单独设置
// #ifndef MP
.uni-tabbar-bottom {
  display: none;
}
// #endif

// #ifdef MP
pages {
  background-color: #f8f9fa;
}
// #endif
// #ifndef MP
html {
  background-color: #f8f9fa;
}
// #endif
</style>
