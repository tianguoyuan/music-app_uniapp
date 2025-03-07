import { HttpEnum } from '@/enums/HttpEnum'
import { PageEnum } from '@/enums/PageEnum'
import { CustomRequestOptions } from '@/interceptors/request'
import { useUserStore } from '@/store'

export const http = <T>(options: CustomRequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<IResData<T>>((resolve, reject) => {
    uni.showLoading({ title: '加载中...' })
    uni.request({
      ...options,
      timeout: HttpEnum.TIMEOUT,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(res) {
        uni.hideLoading()
        const userStore = useUserStore()

        const result = res.data as IResData<T>
        const code = result[HttpEnum.RESPONSE_CODE_FIELD] + ''
        const msg = result[HttpEnum.RESPONSE_MSG_FIELD]

        if (HttpEnum.SUCCESS_CODE_ARR.includes(code)) {
          resolve(result)
        } else if (code === HttpEnum.RESPONSE_CODE_ERROR_AUTH) {
          // 401错误  -> 清理用户信息，跳转到登录页
          userStore.clearUserInfo()
          uni.showToast({
            icon: 'none',
            title: '登录过期, 请重新登录',
            duration: 1000 * 2,
          })
          uni.navigateTo({ url: PageEnum.LOGIN_PATH })
          reject(res)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          !options.hideErrorToast &&
            uni.showToast({
              icon: 'none',
              title: msg || '请求错误',
              duration: 1000 * 2,
            })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.hideLoading()

        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
          duration: 1000 * 2,
        })
        reject(err)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @returns
 */
export const httpGet = <T>(url: string, query?: Record<string, any>) => {
  return http<T>({
    url,
    query,
    method: 'GET',
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @returns
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
) => {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
  })
}

http.get = httpGet
http.post = httpPost
