// @ts-nocheck
import { createFetch } from '../../../request'
import type {
  IapplyApp,
  IappDrive,
  IapplyEntry,
  IapplyWechat,
  IapplyApp1,
  IappDrive1,
  IapplyEntry1,
  IapplyWechat1,
} from '../types/yingyong'

// APP应用
export const IapplyAppAction = createFetch<
  IapplyApp['request'],
  IapplyApp['response']
>('/app/apply/app', 'get')

// 驾校报名h5
export const IappDriveAction = createFetch<
  IappDrive['request'],
  IappDrive['response']
>('/app/apply/app/drive', 'get')

// 统一入口,不分平台
export const IapplyEntryAction = createFetch<
  IapplyEntry['request'],
  IapplyEntry['response']
>('/app/apply/entry', 'get')

// 微信应用
export const IapplyWechatAction = createFetch<
  IapplyWechat['request'],
  IapplyWechat['response']
>('/app/apply/wechat', 'get')

// APP应用
export const IapplyApp1Action = createFetch<
  IapplyApp1['request'],
  IapplyApp1['response']
>('/apply/app', 'get')

// 驾校报名h5
export const IappDrive1Action = createFetch<
  IappDrive1['request'],
  IappDrive1['response']
>('/apply/app/drive', 'get')

// 统一入口,不分平台
export const IapplyEntry1Action = createFetch<
  IapplyEntry1['request'],
  IapplyEntry1['response']
>('/apply/entry', 'get')

// 微信应用
export const IapplyWechat1Action = createFetch<
  IapplyWechat1['request'],
  IapplyWechat1['response']
>('/apply/wechat', 'get')
