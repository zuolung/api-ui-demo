// @ts-nocheck
import { createFetch } from '../../../request'
import type { userInfo } from '../types/common'

// 获取用户列表信息
export const userInfoAction = createFetch<
  userInfo['request'],
  userInfo['response']
>('/z/common/user/list', 'GET')
