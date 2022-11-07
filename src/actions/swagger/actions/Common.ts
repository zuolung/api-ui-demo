/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type { IcommonEnum } from '../types/Common'

// 获取枚举数据
export const IcommonEnumAction = createFetch<
  IcommonEnum['request'],
  IcommonEnum['response']
>('/api/lowcodecenter/common/enum', 'get')
