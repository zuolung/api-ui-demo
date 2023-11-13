/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type {
  ApiLowcodecenterOssOssshortlink,
  ApiLowcodecenterOssGetcheckossconfigure,
  ApiLowcodecenterOssAliyunossststoken,
} from '../types/oss'

/** 获取短链接 */
export async function ApiLowcodecenterOssOssshortlinkService(
  params?: ApiLowcodecenterOssOssshortlink['request'],
) {
  const data = await zApi.get<
    ApiLowcodecenterOssOssshortlink['response']['data']
  >('/ojbk/api/lowcodecenter/oss/oss-short-link', { params })
  return data
}

/** 检查是否开启了OSS */
export async function ApiLowcodecenterOssGetcheckossconfigureService(
  params?: ApiLowcodecenterOssGetcheckossconfigure['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/oss/get-check-oss-configure',
    params,
  )
  return data
}

/** 获取stsToken */
export async function ApiLowcodecenterOssAliyunossststokenService(
  params?: ApiLowcodecenterOssAliyunossststoken['request'],
) {
  const data = await zApi.get<
    ApiLowcodecenterOssAliyunossststoken['response']['data']
  >('/ojbk/api/lowcodecenter/oss/aliyun-oss-sts-token', { params })
  return data
}
