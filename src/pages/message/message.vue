<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<script lang="ts" setup>
import Tabbar from '@/components/Tabbar.vue'
import PLATFORM from '@/utils/platform'
import TabNav from '@/components/TabNav.vue'

import IMG_AVATAR1 from '@/assets/icons/videoAvatar1.svg'
import IMG_AVATAR2 from '@/assets/icons/videoAvatar2.svg'
import IMG_AVATAR3 from '@/assets/icons/videoAvatar3.svg'
import IMG_AVATAR4 from '@/assets/icons/videoAvatar4.svg'
import IMG_AVATAR5 from '@/assets/icons/videoAvatar5.svg'
import IMG_AVATAR6 from '@/assets/icons/videoAvatar6.svg'
import IMG_AVATAR7 from '@/assets/icons/videoAvatar7.svg'
import IMG_AVATAR8 from '@/assets/icons/videoAvatar8.svg'
import IMG_AVATAR9 from '@/assets/icons/videoAvatar9.svg'
import IMG_AVATAR10 from '@/assets/icons/videoAvatar10.svg'
import IMG_AVATAR11 from '@/assets/icons/videoAvatar11.svg'
import IMG_AVATAR12 from '@/assets/icons/videoAvatar12.svg'

import IMG_USER_AVATAR1 from '@/assets/icons/videoUserAvatar1.svg'
import IMG_USER_AVATAR2 from '@/assets/icons/videoUserAvatar2.svg'
import IMG_USER_AVATAR3 from '@/assets/icons/videoUserAvatar3.svg'
import IMG_USER_AVATAR4 from '@/assets/icons/videoUserAvatar4.svg'

import IMG_BG_COVER1 from '@/assets/icons/videoBgCover1.svg'
import IMG_BG_COVER2 from '@/assets/icons/videoBgCover2.svg'
import IMG_BG_COVER3 from '@/assets/icons/videoBgCover3.svg'
import IMG_BG_COVER4 from '@/assets/icons/videoBgCover4.svg'

import IMG_LIKE from '@/assets/icons/videoLike.svg'
import IMG_MESSAGE from '@/assets/icons/videoMessage.svg'
import IMG_SHARE from '@/assets/icons/videoShare.svg'
import IMG_VIDEO_PLAY from '@/assets/icons/videoPlay.svg'

defineOptions({
  name: 'Message',
})
onLoad(() => {
  if (PLATFORM.isApp) uni.hideTabBar()
})

const tabList = ref([
  { label: '最新发布', key: 'release', active: true },
  { label: '最新出售', key: 'sell', active: false },
])

function handleClick(v) {
  console.log('v', v)
}

const listData = [
  {
    userAvatar: IMG_USER_AVATAR1,
    username: '最新发布',
    articleType: '发布了视频',
    date: '12-01 23:51',
    title: '哪怕是野火焚烧，哪怕是冰雪覆盖，依然是志向不改，依然是信念不衰。',
    bgCover: IMG_BG_COVER1,
    likeNum: '167',
    commentNum: '200',
    commentUserAvatar: [IMG_AVATAR1, IMG_AVATAR2, IMG_AVATAR3],
    commentList: [
      {
        label: '宇宙预报员',
        value:
          '的确如此。石猴很聪明，需要如来佛承诺。否则取完经，只落得一个什么使者，岂不是白干一场？',
      },
      { label: '全世界爱自己第一名', value: 'SMIC的数据分析是写脚本么？' },
    ],
  },

  {
    userAvatar: IMG_USER_AVATAR2,
    username: '樱桃肉肉丸',
    articleType: '发布了视频',
    date: '11-29 01:38',
    title:
      '我没回答他，我只是起身走到窗口往外眺望，一霎时，我觉得寂寞极了，我简直希望自己已经死了。',
    bgCover: IMG_BG_COVER2,
    likeNum: '259',
    commentNum: '358',
    commentUserAvatar: [IMG_AVATAR4, IMG_AVATAR5, IMG_AVATAR6],
    commentList: [
      {
        label: '超级凶鸭',
        value:
          '哈哈哈我们当时都是撕卷子，合到一起，听到撕卷子的声音就知道大家做到完形填空了[飙泪笑]',
      },
      {
        label: '不如自成宇宙',
        value: '当然好啦，国家大力扶植产业。“选择”是人各有志，无论怎么选，想清楚了选了就是最好的。',
      },
    ],
  },

  {
    userAvatar: IMG_USER_AVATAR3,
    username: '全世界爱自己第一名',
    articleType: '发布了视频',
    date: '12-04 23:29',
    title: '我是说不到你开始做的时候，你怎么知道自己打算怎么做？回答是，你没法知道。',
    bgCover: IMG_BG_COVER3,
    likeNum: '362',
    commentNum: '601',
    commentUserAvatar: [IMG_AVATAR7, IMG_AVATAR8, IMG_AVATAR9],
    commentList: [
      {
        label: '小熊出击',
        value: 'SMIC的数据分析是写脚本么？',
      },
      { label: '前任三秒', value: '这两网站算不得魔法部，顶多就是个预言家日报' },
    ],
  },

  {
    userAvatar: IMG_USER_AVATAR4,
    username: '团子不加冰',
    articleType: '发布了视频',
    date: '12-08 08:52',
    title: '你出生的时候，你哭着，周围的人笑着；你逝去的时候，你笑着，而周围的人在哭！',
    bgCover: IMG_BG_COVER4,
    likeNum: '686',
    commentNum: '766',
    commentUserAvatar: [IMG_AVATAR10, IMG_AVATAR11, IMG_AVATAR12],
    commentList: [
      {
        label: '小熊吹奶盖',
        value: '能力是通用的！很棒！',
      },
      { label: 'キスを月', value: '笑死我了[飙泪笑][飙泪笑][飙泪笑]' },
    ],
  },
]
</script>
<template>
  <TabNav :tab-list="tabList" @handle-click="handleClick" />

  <view v-for="item in listData" :key="item.username" class="bg-#252830 p-5 mt-5">
    <view class="flex items-center">
      <image :src="item.userAvatar" class="w-10 h-10" />
      <view class="ml-2.5 line-height-4.25">
        <view class="flex">
          <view class="text-3 color-#fff">{{ item.username }}</view>
          <view class="ml-1 text-2.5 color-#818387">{{ item.articleType }}</view>
        </view>
        <view class="text-2.5 color-#818387">{{ item.date }}</view>
      </view>
    </view>

    <view class="color-#fff text-3.5 line-height-5 line-clamp-1 mt-3">{{ item.title }}</view>

    <view class="mt-2 relative">
      <image :src="item.bgCover" class="h-50 w-full" />
      <image
        :src="IMG_VIDEO_PLAY"
        class="w-12 h-12 absolute left-0 right-0 top-0 bottom-0 m-auto"
      />
    </view>

    <view class="flex justify-between color-#818387 text-2.5 mt-5">
      <view>
        <view class="relative flex items-center">
          <view class="w-16.25 h-7">
            <image
              v-for="(commentAvatar, cI) in item.commentUserAvatar"
              :key="cI"
              class="w-7 h-7 absolute"
              :style="{ left: cI * 36 + 'rpx' }"
              :src="commentAvatar"
            />
          </view>
          <image :src="IMG_LIKE" class="w-4 ml-5" mode="widthFix" />
          <view class="ml-1">{{ item.likeNum }}</view>
          <view>人收藏</view>
        </view>
      </view>
      <view class="flex items-center">
        <image :src="IMG_MESSAGE" class="w-3.5" mode="widthFix" />
        <view class="ml-1">{{ item.commentNum }}</view>
        <image :src="IMG_SHARE" class="w-3.5 ml-6" mode="widthFix" />
      </view>
    </view>

    <view
      v-for="comment in item.commentList"
      :key="comment.label"
      class="mt-2 first:mt-1 line-height-4.25 flex"
    >
      <view class="color-#fff text-3 flex-shrink-0">{{ comment.label }}</view>
      <view class="color-#818387 text-2.5 line-clamp-1">：{{ comment.value }}</view>
    </view>
  </view>
  <Tabbar tabbar-path="/pages/message/message" />
</template>

<style lang="scss" scoped></style>

<route lang="json5">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '动态',
  },
}
</route>
