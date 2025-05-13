<script lang="ts" setup>
import IMG_ARTIST_A1 from '@/assets/icons/artistListA1.svg'
import IMG_ARTIST_A2 from '@/assets/icons/artistListA2.svg'
import IMG_ARTIST_A3 from '@/assets/icons/artistListA3.svg'
import IMG_ARTIST_B1 from '@/assets/icons/artistListB1.svg'
import IMG_ARTIST_B2 from '@/assets/icons/artistListB2.svg'
import IMG_ARTIST_B3 from '@/assets/icons/artistListB3.svg'
import IMG_ARTIST_C1 from '@/assets/icons/artistListC1.svg'
import IMG_ARTIST_C2 from '@/assets/icons/artistListC2.svg'
import IMG_ARTIST_C3 from '@/assets/icons/artistListC3.svg'

const listData = [
  {
    title: '作曲',
    count: '665',
    list: [
      { name: '徐建', desc: 'Faithe Tuttle', icon: IMG_ARTIST_A1 },
      { name: '陈梓鑫', desc: 'Bruno Harriman', icon: IMG_ARTIST_A2 },
      { name: '李瑶', desc: 'Freda Betty', icon: IMG_ARTIST_A3 },
    ],
  },

  {
    title: '指挥',
    count: '966',
    list: [
      { name: '张江平', desc: 'Gill Bill', icon: IMG_ARTIST_B1 },
      { name: '王熙', desc: 'Bell Floyd', icon: IMG_ARTIST_B2 },
      { name: '李成逸', desc: 'Richards Aubrey', icon: IMG_ARTIST_B3 },
    ],
  },

  {
    title: '钢琴',
    count: '197',
    list: [
      { name: '吕星', desc: 'Hawkins Ted', icon: IMG_ARTIST_C1 },
      { name: '吴立', desc: 'Gordon Jimmy', icon: IMG_ARTIST_C2 },
      { name: '李德夏', desc: 'Xavier Burne-Jones', icon: IMG_ARTIST_C3 },
    ],
  },
]
</script>

<template>
  <view class="mt-5">
    <view class="grid grid-cols-3 gap-3 color-#fff text-3.5 px-5">
      <view class="bg-[linear-gradient(90deg,#716363_0%,#9A8584_100%)] h-12 line-height-12 pl-2.5">
        作曲
      </view>
      <view class="bg-[linear-gradient(90deg,#8198A0_0%,#8BA3AD_100%)] h-12 line-height-12 pl-2.5">
        指挥
      </view>
      <view class="bg-[linear-gradient(90deg,#787468_0%,#414144_100%)] h-12 line-height-12 pl-2.5">
        钢琴
      </view>
    </view>

    <view v-for="item in listData" :key="item.title" class="mt-5">
      <view class="flex justify-between items-center px-5">
        <view class="flex items-center">
          <view class="color-#fff text-4.5 line-height-6">{{ item.title }}</view>
          <view class="ml-2 color-#818387 text-2.5 line-height-3.5">{{ item.count }}</view>
        </view>
        <view class="color-#fff w-9 h-5.5 flex justify-center items-center text-2.5 bg-#252830">
          全部
        </view>
      </view>

      <view class="pl-5 flex mt-3.5 overflow-x-auto">
        <view
          v-for="list in item.list"
          :key="list.name"
          class="bg-#252830 p-5 mr-2 last:mr-5 flex-shrink-0"
        >
          <view class="w-25 h-25">
            <image :src="list.icon" class="w-full h-full" />
          </view>
          <view class="text-3 line-height-6 mt-2 color-#fff">{{ list.name }}</view>
          <view class="color-#818387 text-3 line-height-4">{{ list.desc }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
