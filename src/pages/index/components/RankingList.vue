<script lang="ts" setup>
import IMG_RANK_LIST1 from '@/assets/icons/rankList1.svg'
import IMG_RANK_LIST2 from '@/assets/icons/rankList2.svg'
import IMG_RANK_LIST3 from '@/assets/icons/rankList3.svg'
import IMG_RANK_LIST4 from '@/assets/icons/rankList4.svg'
import IMG_RANK_LIST5 from '@/assets/icons/rankList5.svg'
import IMG_RANK_LIST6 from '@/assets/icons/rankList6.svg'
import IMG_RANK_LIST7 from '@/assets/icons/rankList7.svg'
import IMG_RANK_LIST8 from '@/assets/icons/rankList8.svg'

const listData = [
  {
    icon: IMG_RANK_LIST1,
    count: 129,
    nameList: [
      '今年大四，已经拿到了腾讯的 offer，但在毕业前一个月被学校开除了，我该怎么办？',
      '为什么消费主义容易给部分女性洗脑而对部分男性影响力相对较小？',
      '为什么很多人认为脂肪在格斗中比肌肉重要？',
    ],
  },

  {
    icon: IMG_RANK_LIST2,
    count: 473,
    nameList: [
      '有什么相见恨晚的背单词方法？',
      '非物理专业的学生想自学理论物理有没有推荐的教材？',
      '28岁在深圳到手15000过的怎么样？',
    ],
  },

  {
    icon: IMG_RANK_LIST3,
    count: 629,
    nameList: [
      '你读过哪些令你有跪感的书？',
      '东野圭吾的小说中，哪些值得推荐？为什么？',
      '如果你是地球，想对人类说什么让他们不要摧毁你？',
    ],
  },

  {
    icon: IMG_RANK_LIST4,
    count: 711,
    nameList: [
      '浙江发现一户人家厨房，那叫一个干净，人性化收纳细节超多！',
      '30年前未曾发行的任天堂红白机游戏，被这个团队从21张软盘恢复了',
      '什么事情让你觉得智商被侮辱？',
    ],
  },

  {
    icon: IMG_RANK_LIST5,
    count: 733,
    nameList: [
      '你见过最反人类的设计是什么？',
      '如何看待周杰伦推出全套14张专辑黑胶唱片版？',
      '别瞎搞橱柜了，橱柜这样设计，多用10年没问题！',
    ],
  },

  {
    icon: IMG_RANK_LIST6,
    count: 825,
    nameList: [
      '3位物理学家意外发现基础数学新方法，数学天才陶哲轩：我开始压根不相信',
      '当国语歌被粤语改编，民谣女声吉他弹唱一人搞定男女对唱情歌',
      '健身小白如何利用好新手福利期？',
    ],
  },

  {
    icon: IMG_RANK_LIST7,
    count: 884,
    nameList: [
      '工作能力强的人有哪些共同特征？',
      '硬拉完第二天下背肌肉没太大感觉，这正常吗？',
      '无伤跑了2600KM后，我总结出了这7个跑姿动作要点[跑姿干货]',
    ],
  },

  {
    icon: IMG_RANK_LIST8,
    count: 955,
    nameList: [
      '今天做了鲜香麻辣口水鸡，在线求夸',
      '太难了！霍华德突遭噩耗！明白了，这就是他拼命打球的原因……',
      '建筑防火规范至尊宝典！速查汇总表 3/5 · 小平面篇',
    ],
  },
]
</script>

<template>
  <view class="px-5">
    <view v-for="(item, index) in listData" :key="index" class="flex bg-#252830 mt-5">
      <view class="w-32 h-32 relative overflow-hidden flex-shrink-0">
        <image :src="item.icon" class="w-full h-full" />
        <view class="bg-#E8CDA7 text-2 line-height-3.5 px-1.5 absolute right-0 bottom-0">
          {{ item.count }}张
        </view>
      </view>
      <view class="px-3 flex flex-col justify-between py-4.5">
        <view
          v-for="name in item.nameList"
          :key="name"
          class="line-clamp-1 text-3 line-height-6 color-#fff"
        >
          <view>· {{ name }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//
</style>
