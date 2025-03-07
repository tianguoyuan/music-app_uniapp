import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    function changeToken(v) {
      token.value = v
    }

    const userId = ref('')
    function changeUserId(v) {
      userId.value = v
    }

    const isLogin = computed(() => {
      return !!token.value
    })

    function clearUserInfo() {
      token.value = ''
      userId.value = ''
    }

    return {
      token,
      changeToken,

      userId,
      changeUserId,
      isLogin,

      clearUserInfo,
    }
  },
  {
    persist: true,
  },
)
