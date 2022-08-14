/* eslint-disable import/no-cycle */
// @ts-nocheck
import { createFetch } from '../request'
import type { getRoleList, login, sendCode } from './types/common'

// 获取角色列表111
export const getRoleList = createFetch<
  getRoleList['request'],
  getRoleList['response']
>('/z/common/1.0/role/list', 'GET')

// 登录
export const login = createFetch<login['request'], login['response']>(
  '/z/api/1.0/login',
  'POST',
)

// 获取验证码
export const sendCode = createFetch<sendCode['request'], sendCode['response']>(
  '/z/api/1.0/sendCode',
  'POST',
)
