<script lang="ts" setup>
import { TnIcon, TnNavbar } from '@tuniao/tnui-vue3-uniapp'

const props = withDefaults(
  defineProps<{
    title: string
    showBackIcon: boolean
    showHomeIcon: boolean
    bottomShadow: boolean
    showBorder: boolean
  }>(),
  {
    title: '',
    showBackIcon: false,
    showHomeIcon: false,
    bottomShadow: true,
    showBorder: false,
  },
)

const emits = defineEmits<{
  clickBackIcon: []
  clickHomeIcon: []
}>()
</script>

<template>
  <TnNavbar height="44px" fixed :bottom-shadow="props.bottomShadow">
    {{ props.title }}

    <!-- border -->
    <view
      v-if="props.showBorder"
      class="absolute bottom-0 left-0 right-0 h-[1px] scale-y-50 bg-#efefef"
    />
    <template #back>
      <view
        class="relative w-full h-full flex items-center justify-center rounded-full bg-[rgba(0,0,0,.15)] text-[15px] box-border"
        :class="[!props.showBackIcon || !props.showHomeIcon ? 'w-70%!' : '']"
      >
        <TnIcon
          v-if="props.showBackIcon"
          name="left-arrow"
          color="#fff"
          :class="[props.showBackIcon && props.showHomeIcon ? 'flex-1' : '']"
          @click="emits('clickBackIcon')"
        />
        <view
          v-if="props.showBackIcon && props.showHomeIcon"
          class="absolute left-50% top-50% h-60% translate-x--50% translate-y--50% bg-#fff opacity-20 w-1px"
        ></view>
        <TnIcon
          v-if="props.showHomeIcon"
          name="home-capsule-fill"
          color="#fff"
          :class="[props.showBackIcon && props.showHomeIcon ? 'flex-1' : '']"
          @click="emits('clickHomeIcon')"
        />
      </view>
    </template>
  </TnNavbar>
</template>

<style lang="scss" scoped>
//
</style>
