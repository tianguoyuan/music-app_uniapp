<script lang="ts" setup>
import ICON_RECORD_BANNER1 from '@/assets/icons/recordBanner1.svg'
import ICON_RECORD_BANNER2 from '@/assets/icons/recordBanner2.svg'
import ICON_RECORD_BANNER3 from '@/assets/icons/recordBanner3.svg'
import ICON_RECORD_BANNER4 from '@/assets/icons/recordBanner4.svg'

import ICON_RECORD_LIST1 from '@/assets/icons/recordList1.svg'
import ICON_RECORD_LIST2 from '@/assets/icons/recordList2.svg'
import ICON_RECORD_LIST3 from '@/assets/icons/recordList3.svg'
import ICON_RECORD_LIST4 from '@/assets/icons/recordList4.svg'
import ICON_RECORD_LIST5 from '@/assets/icons/recordList5.svg'
import ICON_RECORD_LIST6 from '@/assets/icons/recordList6.svg'

import ICON_BG_COVER from '@/assets/icons/musicListBgCover.svg'
import ICON_MUSIC_PLAY from '@/assets/icons/musicPlay.svg'
const bannerList = [
  { label: 'LP黑胶', icon: ICON_RECORD_BANNER1 },
  { label: 'CD', icon: ICON_RECORD_BANNER2 },
  { label: 'SACD', icon: ICON_RECORD_BANNER3 },
  { label: 'xxxx', icon: ICON_RECORD_BANNER4 },
]

const musicList = [
  {
    label:
      '还真别说，我幻想过，假如我脑子里有个大容量硬盘，我把维基百科或者百度百科的镜像缓存到脑子里，一定帅呆了。',
    desc: '你出生的时候，你哭着，周围的人笑着；你逝去的时候，你笑着，而周围的人在哭！',
    icon: ICON_RECORD_LIST1,
  },

  {
    label:
      '一个不成熟男子的标志是他愿意为某种事业英勇地死去，一个成熟男子的标志是他愿意为某种事业卑贱地活着。',
    desc: '哈利波特里的“阿尼玛格斯”—会自己变形的巫师。整个魔法世界唯一能变成虎鲸的男人。',
    icon: ICON_RECORD_LIST2,
  },

  {
    label: '我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。',
    desc: '我遇见过很多当年很红但是后来不红的人，再遇见她们的时候，能明显在她们身上看到时代的痕迹。',
    icon: ICON_RECORD_LIST3,
  },

  {
    label:
      '你不管做什么事，如果做得太好了，一不警惕，就会在无意中卖弄起来。那样的话，你就不再那么好了。',
    desc: '我遇见过很多当年很红但是后来不红的人，再遇见她们的时候，能明显在她们身上看到时代的痕迹。',
    icon: ICON_RECORD_LIST4,
  },

  {
    label:
      '我也和你一样，一样的帽子，一样的衣服，一样的动作。可是哈克，你可以和我一样吗？在麦田自由的奔跑……',
    desc: '我的骄傲被爹妈看出来了，我没在收假最后一天才写完作业，我知道，这是我的我骄傲，也是其他小朋友的恨。',
    icon: ICON_RECORD_LIST5,
  },

  {
    label: '你千万别跟任何人谈任何事情。你只要一谈起，就会想念起每一个人来。',
    desc: '不过，我却摇了摇头，居然还在乎白不白的问题？',
    icon: ICON_RECORD_LIST6,
  },
]
</script>

<template>
  <view class="">
    <view class="mt-5"></view>

    <view class="flex overflow-x-auto">
      <view
        v-for="item in bannerList"
        :key="item.label"
        class="w-22.5 h-12 relative ml-5 flex-shrink-0 last:mr-5"
      >
        <image :src="item.icon" class="w-full h-full" />
        <!-- 蒙板 -->
        <view class="absolute left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.7)]">
          <view class="text-3.5 color-#fff line-height-12 text-center">{{ item.label }}</view>
        </view>
      </view>
    </view>

    <view class="px-5">
      <view v-for="item in musicList" :key="item.label" class="mt-5 flex">
        <view class="relative h-27.5 w-30.5 flex-shrink-0">
          <image class="w-27.5 h-27.5 absolute left-3" :src="ICON_BG_COVER" />
          <image class="w-27.5 h-27.5 absolute left-0" :src="item.icon" />

          <image class="w-7.5 h-7.5 absolute right-4 bottom-1" :src="ICON_MUSIC_PLAY" />
        </view>
        <view class="flex flex-col justify-between ml-5">
          <view class="color-#fff text-3.5 line-height-4 line-clamp-2">{{ item.label }}</view>
          <view class="color-#818387 text-3 line-height-4.5 line-clamp-2">{{ item.desc }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
