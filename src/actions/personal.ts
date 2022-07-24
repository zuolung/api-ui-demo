/* eslint-disable import/no-cycle */
// @ts-nocheck
import { createFetch } from '../request'
import type { collectionList } from './types/personal'

// 获取用户商品列表
export const collectionListPersonal = createFetch<
  collectionList['request'],
  collectionList['response']
>('/z/personal/1.0/collection/list', 'GET')
