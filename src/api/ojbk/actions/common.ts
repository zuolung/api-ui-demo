/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type { ApiLowcodecenterCommonEnum } from '../types/common'

/** 获取枚举数据 */
export async function ApiLowcodecenterCommonEnumService(
  params: ApiLowcodecenterCommonEnum['request'],
) {
  const data = await zApi.get<ApiLowcodecenterCommonEnum['response']['data']>(
    '/ojbk/api/lowcodecenter/common/enum',
    { params },
  )
  return data
}
