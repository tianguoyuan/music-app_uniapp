<script lang="ts" setup>
import IMG_FILTER from '@/assets/icons/filter.svg'
import IMG_RECORD_COMPANY1 from '@/assets/icons/recordCompany1.svg'
import IMG_RECORD_COMPANY2 from '@/assets/icons/recordCompany2.svg'
import IMG_RECORD_COMPANY3 from '@/assets/icons/recordCompany3.svg'
import IMG_RECORD_COMPANY4 from '@/assets/icons/recordCompany4.svg'
import IMG_RECORD_COMPANY5 from '@/assets/icons/recordCompany5.svg'
import IMG_RECORD_COMPANY6 from '@/assets/icons/recordCompany6.svg'
import IMG_RECORD_COMPANY7 from '@/assets/icons/recordCompany7.svg'
import IMG_RECORD_COMPANY8 from '@/assets/icons/recordCompany8.svg'
import IMG_RECORD_COMPANY9 from '@/assets/icons/recordCompany9.svg'
import IMG_RECORD_COMPANY10 from '@/assets/icons/recordCompany10.svg'
import IMG_RECORD_COMPANY11 from '@/assets/icons/recordCompany11.svg'
import IMG_RECORD_COMPANY12 from '@/assets/icons/recordCompany12.svg'

const listData = [
  { name: 'Esther Mike', desc: '银河造梦机', icon: IMG_RECORD_COMPANY1 },
  { name: 'Freda Betty', desc: '派大星的海洋裤', icon: IMG_RECORD_COMPANY2 },

  { name: 'Henry Arthur', desc: '小熊吹奶盖', icon: IMG_RECORD_COMPANY3 },
  { name: 'Maud Betsy', desc: '白雪公主的后妈', icon: IMG_RECORD_COMPANY4 },

  { name: 'Fisher Marjorie', desc: '討厭和人归類', icon: IMG_RECORD_COMPANY5 },
  { name: 'Hawkins Ted', desc: '有薄雾的夏日', icon: IMG_RECORD_COMPANY6 },

  { name: 'Myra Stuart', desc: '内只松鼠好眼熟', icon: IMG_RECORD_COMPANY7 },
  { name: 'Glenn Bartholomew', desc: '来一份甜豆', icon: IMG_RECORD_COMPANY8 },

  { name: 'Shirley Grote', desc: '脑袋困掉了嗷', icon: IMG_RECORD_COMPANY9 },
  { name: 'Jeffrey Tracy', desc: '比基尼小熊', icon: IMG_RECORD_COMPANY10 },

  { name: 'Cora Middleton', desc: '元气少女李逵', icon: IMG_RECORD_COMPANY11 },
  { name: 'Kristin Dickey', desc: '偷摘天上云', icon: IMG_RECORD_COMPANY12 },
]
</script>

<template>
  <view class="px-5">
    <view class="flex items-center mt-2">
      <view class="color-#FFF text-4.5 line-height-6">全部唱片公司</view>
      <view class="ml-1.5 color-#818387 text-3">938</view>
    </view>

    <view class="flex justify-between mt-2">
      <view class="flex items-center">
        <view class="color-#fff line-height-4 text-3">全部</view>
        <view class="ml-2 color-#818387 text-2.5 line-height-3.5">A开头</view>
      </view>
      <view class="bg-#252830 color-#fff flex items-center justify-center px-2 py-1">
        <image class="w-2.5 h-2.5" :src="IMG_FILTER" />
        <view>筛选</view>
      </view>
    </view>

    <view class="grid grid-cols-2 gap-3.5 justify-between mt-2">
      <view
        v-for="item in listData"
        :key="item.name"
        class="bg-#252830 p-5 flex flex-col justify-center items-center"
      >
        <view class="w-25 h-25">
          <image :src="item.icon" class="w-full h-full" />
        </view>
        <view class="text-3 line-height-6 mt-2 color-#fff">{{ item.name }}</view>
        <view class="color-#818387 text-3 line-height-4">{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
