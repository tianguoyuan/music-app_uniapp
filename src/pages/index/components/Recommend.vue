<script lang="ts" setup>
import ICON_MUSIC1 from '../../../assets/icons/musicList1.svg'
import ICON_MUSIC2 from '../../../assets/icons/musicList2.svg'
import ICON_MUSIC3 from '../../../assets/icons/musicList3.svg'
import ICON_MUSIC4 from '../../../assets/icons/musicList4.svg'
import ICON_MUSIC5 from '../../../assets/icons/musicList5.svg'
import ICON_MUSIC6 from '../../../assets/icons/musicList6.svg'
import ICON_MUSIC7 from '../../../assets/icons/musicList7.svg'
import ICON_MUSIC8 from '../../../assets/icons/musicList8.svg'
import ICON_MUSIC9 from '../../../assets/icons/musicList9.svg'

const musicList = [
  { label: '纯装机小白，不想上烈士墙了，有什么需要注意的？', icon: ICON_MUSIC1 },
  { label: '一块可以无限吸收热量的冰块可以拿来干什么?', icon: ICON_MUSIC2 },
  { label: '美国很大，每一个州就像一个国家', icon: ICON_MUSIC3 },
  { label: '为什么你的电脑还没用上国产 CPU？', icon: ICON_MUSIC4 },
  {
    label: '为什么丰巢亏损这么严重，并且已经连亏5年，大家还是不能接受丰巢收费？',
    icon: ICON_MUSIC5,
  },
  { label: '怎样调色才好看？从Ins热门摄影照片中总结出的3大规律！', icon: ICON_MUSIC6 },
  { label: '鞠婧祎和杨超越两个美少女突然打了一架，谁的单兵战斗力更强 ？', icon: ICON_MUSIC7 },
  { label: '秘鲁紧急抄作业，没想到疫情竟然更严重了！', icon: ICON_MUSIC8 },
  { label: '你小时候做过什么可以吹嘘一辈子的事情？', icon: ICON_MUSIC9 },
]
</script>

<template>
  <view>
    <!-- banner -->
    <view class="mt-5">
      <image src="../../../assets/images/indexBanner.png" mode="widthFix" class="w-full" />
    </view>
    <!-- 歌单推荐 -->
    <view class="mt-5">
      <view class="flex justify-between items-center">
        <view class="text-4.5 color-#E8CDA7 line-height-8">歌单推荐</view>
        <view class="bg-#252830 color-#fff px-2 py-1 text-2.5">全部</view>
      </view>

      <view class="mt-2.5 relative">
        <image
          src="../../../assets/images/indexBackgroundPlaylistRecommendation.png"
          mode="widthFix"
          class="w-full"
        />
        <view class="absolute top-7 left-34.75 right-4">
          <view class="color-#fff text-3.5 line-height-4.5">
            这个国产的Mac包管理工具，是否能成为HomeBrew
          </view>
          <view class="mt-3 color-#818387 text-3 line-height-3.5">
            我通过镜子向一颗心脏展示一些妙不可言的磨镜视频，心脏吃不消这么香艳刺激的场面，坏掉了。
          </view>
          <view class="mt-3 flex">
            <view class="flex px-2 py-1.5 bg-#252830">
              <image src="../../../assets/images/singleMusic.png" mode="widthFix" class="w-1.8" />
              <view class="color-#fff text-2.5 ml-1">442</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 音乐列表 -->
    <view class="grid grid-cols-[1fr_auto_1fr] gap-4 mt-4">
      <view v-for="item in musicList" :key="item.label">
        <image :src="item.icon" class="w-25 h-25" />
        <view class="line-clamp-2 text-3.5 color-#fff mt-2 line-height-4.5">{{ item.label }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
