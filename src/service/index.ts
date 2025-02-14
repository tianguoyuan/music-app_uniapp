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
