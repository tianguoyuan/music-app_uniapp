<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { PageEnum } from '@/enums/PageEnum'
import { getUserInfo, userGetPhoneCode, userLogin } from '@/service'
import { useUserStore } from '@/store'
import { urlDecode } from '@/utils/url'
import {
  FormRules,
  TnIcon,
  TnForm,
  TnFormItem,
  TnInput,
  TnNavbar,
  TnFormInstance,
} from '@tuniao/tnui-vue3-uniapp'

const userStore = useUserStore()

const formData = ref({
  phone: '',
  code: '',
})
const formRef = ref<TnFormInstance>()
const form = ref()
const formRules: FormRules = {
  phone: [{ required: true, message: '请输入手机号', trigger: ['change', 'blur'] }],
  code: [{ required: true, message: '请输入验证码', trigger: ['change', 'blur'] }],
}
const redirectUrl = ref('')

onLoad((query) => {
  console.log('query', query)
  redirectUrl.value = urlDecode(query.redirect)
  console.log('redirectUrl.value', redirectUrl.value)
})

async function handleSubmit() {
  await formRef.value.validate()
  const loginResult = await userLogin({
    phone: formData.value.phone,
    code: formData.value.code,
  })
  const infoResult = await getUserInfo({
    token: loginResult.data.token,
  })
  userStore.changeToken(loginResult.data.token)
  userStore.changeUserId(infoResult.data.userId)

  if (redirectUrl.value) {
    const pushType = PageEnum.TABBAR_PAGE_LIST.includes(redirectUrl.value)
      ? 'switchTab'
      : 'redirectTo'
    uni[pushType]({
      url: redirectUrl.value,
    })
  } else {
    uni.switchTab({
      url: '/pages/index/index',
    })
  }
}

const time = ref(0)
const timeInstance = ref()
async function sendCode() {
  console.log('sendCode')
  await formRef.value.validateField(['phone'])

  userGetPhoneCode({ phone: formData.value.phone }).then(({ data }) => {
    console.log('data', data)
    formData.value.code = data.code
    time.value = 10
    timeInstance.value = setInterval(() => {
      if (time.value <= 0) {
        clearInterval(timeInstance.value)
      } else {
        time.value--
      }
    }, 1000)
  })
}

function toDashboard() {
  uni.redirectTo({
    url: '/pages/dashboard',
  })
}
function toRegister() {
  const query = redirectUrl.value ? `?redirect=${redirectUrl.value}` : ''
  uni.redirectTo({
    url: `/pages/user/register` + query,
  })
}
</script>

<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared', // 解除样式隔离
  },
}
</script>

<template>
  <view id="container" class="login flex flex-col justify-between">
    <Navbar show-home-icon @click-home-icon="toDashboard" />

    <view class="flex-1 px-7">
      <view class="mt-10 text-6">手机号码登录</view>
      <view class="h-10"></view>
      <TnForm ref="formRef" :model="formData" :rules="formRules" label-width="140rpx">
        <TnFormItem label="手机号" prop="phone">
          <TnInput v-model="formData.phone" placeholder="请输入手机号" clearable />
        </TnFormItem>

        <TnFormItem label="验证码" prop="code">
          <TnInput v-model="formData.code" placeholder="请输入验证码" clearable />
        </TnFormItem>
      </TnForm>
      <view class="text-right py-3">
        <view
          :class="[time === 0 ? 'color-#4d80f0' : 'color-#909399 pointer-events-none']"
          @click="sendCode"
        >
          {{ '发送验证码' + (time !== 0 ? ' ' + time : '') }}
        </view>
      </view>
      <view class="footer">
        <view
          class="h-11 rounded-full bg-#40AE36 text-center color-white line-height-11"
          @click="handleSubmit"
        >
          提交
        </view>
      </view>

      <view class="mt5 block color-[#666262] flex items-center justify-center">
        <view @click="toRegister">新用户注册</view>
        <TnIcon name="right" size="32rpx" />
      </view>
    </view>

    <view class="color-[#666262] pb-10">
      <view class="text-center">其它登录方式</view>
      <view class="mt-5 flex justify-evenly px-5">
        <image class="w-14 h-14" src="../../assets/icons/wechat.svg" />
        <image class="w-14 h-14" src="../../assets/icons/qq.svg" />
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.login {
  :deep(.tn-form-item__wrapper) {
    position: relative;
    height: 88rpx;
    &::after {
      position: absolute;
      right: 40rpx;
      bottom: 0;
      left: 40rpx;
      height: 1px;
      content: '';
      background-color: #f3f3f3;
    }
  }
  :deep(.tn-input) {
    border: none;
  }
}
</style>

<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '登录',
    navigationStyle: 'custom',
  },
}
</route>
