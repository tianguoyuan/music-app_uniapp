import { http } from '@/utils/http'

/** 首页-搜索-默认关键词 - /search/defaultMsg */
interface searchDefaultMsgRes {
  searchDefault: string
}
export const searchDefaultMsg = () => {
  return http.get<searchDefaultMsgRes>('/search/defaultMsg')
}
