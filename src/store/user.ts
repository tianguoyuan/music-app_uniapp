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

    return {
      token,
      changeToken,

      userId,
      changeUserId,
      isLogin,
    }
  },
  {
    persist: true,
  },
)
