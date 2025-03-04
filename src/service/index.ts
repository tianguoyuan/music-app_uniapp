import { http } from '@/utils/http'

/** 首页 - banner */
interface HomeBannerRes {
  banner: {
    id: string
    cover: string
  }[]
}
export const getHomeBanner = () => {
  return http.get<HomeBannerRes>('/home/banner')
}

interface UserGetPhoneCodeParams {
  phone: string
}
interface UserGetPhoneCodeRes {
  code: string
}
export const userGetPhoneCode = (data: UserGetPhoneCodeParams) => {
  return http.post<UserGetPhoneCodeRes>('/user/getPhoneCode', data)
}
