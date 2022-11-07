/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type {
  IossOssshortlink,
  IossGetcheckossconfigure,
  IossAliyunossststoken,
} from '../types/Oss'

// 获取短链接
export const IossOssshortlinkAction = createFetch<
  IossOssshortlink['request'],
  IossOssshortlink['response']
>('/api/lowcodecenter/oss/oss-short-link', 'get')

// 检查是否开启了OSS
export const IossGetcheckossconfigureAction = createFetch<
  IossGetcheckossconfigure['request'],
  IossGetcheckossconfigure['response']
>('/api/lowcodecenter/oss/get-check-oss-configure', 'post')

// 获取stsToken
export const IossAliyunossststokenAction = createFetch<
  IossAliyunossststoken['request'],
  IossAliyunossststoken['response']
>('/api/lowcodecenter/oss/aliyun-oss-sts-token', 'get')
