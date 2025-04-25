<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import { PageEnum } from '@/enums/PageEnum'
import { userGetPhoneCode, userRegister } from '@/service'
import { useUserStore } from '@/store'
import { urlDecode } from '@/utils/url'
import { TnForm, TnFormItem, TnIcon, TnInput, TnNavbar } from '@tuniao/tnui-vue3-uniapp'
import type { FormRules, TnFormInstance } from '@tuniao/tnui-vue3-uniapp'

const userStore = useUserStore()
const redirectUrl = ref('')

onLoad((query) => {
  console.log('query', query)
  redirectUrl.value = urlDecode(query.redirect)
  console.log('redirectUrl.value', redirectUrl.value)
})
const formRef = ref<TnFormInstance>()

// 表单数据
const formData = ref({
  username: '',
  phone: '',
  code: '',
})

// 规则
const formRules: FormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: ['change', 'blur'] }],
  phone: [{ required: true, message: '请输入手机号', trigger: ['change', 'blur'] }],
  code: [{ required: true, message: '请输入验证码', trigger: ['change', 'blur'] }],
}

const time = ref(0)
const timeInstance = ref()
async function sendCode() {
  await formRef.value.validateField(['phone'])
  userGetPhoneCode({
    phone: formData.value.phone,
  }).then(({ data }) => {
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

async function handleSubmit() {
  await formRef.value.validate()
  const result = await userRegister({
    phone: formData.value.phone,
    code: formData.value.code,
    username: formData.value.username,
  })

  userStore.changeToken(result.data.token)
  userStore.changeUserId(result.data.userId)

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
function toRegister() {
  const query = redirectUrl.value ? `?redirect=${redirectUrl.value}` : ''
  uni.redirectTo({
    url: `/pages/user/login` + query,
  })
}
function clickBackIcon() {
  uni.redirectTo({
    url: '/pages/user/login',
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
    <Navbar show-back-icon @click-back-icon="clickBackIcon" />
    <view class="flex-1 px-7">
      <view class="mt-10 text-6">注册</view>
      <view class="h-10"></view>
      <TnForm ref="formRef" :model="formData" :rules="formRules" label-width="140rpx">
        <TnFormItem label="用户名" prop="username">
          <TnInput v-model="formData.username" placeholder="请输入用户名" clearable />
        </TnFormItem>

        <TnFormItem label="手机号" prop="phone">
          <TnInput v-model="formData.phone" placeholder="请输入手机号" clearable />
        </TnFormItem>

        <TnFormItem label="验证码" prop="code">
          <TnInput v-model="formData.code" placeholder="请输入验证码" clearable />
        </TnFormItem>
      </TnForm>
      <view class="text-right py-3">
        <view
          :type="time === 0 ? 'default' : 'primary'"
          :text="'发送验证码' + (time !== 0 ? ' ' + time : '')"
          @click="sendCode"
        ></view>
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
        <view @click="toRegister">已注册, 去登录</view>
        <TnIcon name="right" size="16px" />
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
    navigationBarTitleText: '用户-注册',
    navigationStyle: 'custom',
  },
}
</route>
