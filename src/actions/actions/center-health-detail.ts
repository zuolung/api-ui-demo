/* eslint-disable import/no-cycle */
// @ts-nocheck
import { createFetch } from '../request'
import type {
  IdetailDay,
  IdetailDoRemark,
  IdetailDoUpdate,
  IdetailExportData,
  IdetailExportStudentDailyStats,
  IdetailExportTeacherDailyStats,
  IdetailGetById,
  IdetailListData,
  IrouteDay,
  IrouteGetGroupByTypeList,
} from './types/center-health-detail'

// 分页查询健康状况日汇总
export const IdetailDay = createFetch<
  IdetailDay['request'],
  IdetailDay['response']
>('/center/health/detail/day', 'post')

// 打卡信息备注
export const IdetailDoRemark = createFetch<
  IdetailDoRemark['request'],
  IdetailDoRemark['response']
>('/center/health/detail/doRemark', 'post')

// 修改健康状况日报
export const IdetailDoUpdate = createFetch<
  IdetailDoUpdate['request'],
  IdetailDoUpdate['response']
>('/center/health/detail/doUpdate', 'post')

// 导出
export const IdetailExportData = createFetch<
  IdetailExportData['request'],
  IdetailExportData['response']
>('/center/health/detail/exportData', 'post')

// 导出学生日汇总
export const IdetailExportStudentDailyStats = createFetch<
  IdetailExportStudentDailyStats['request'],
  IdetailExportStudentDailyStats['response']
>('/center/health/detail/exportStudentDailyStats', 'post')

// 导出教职工日汇总
export const IdetailExportTeacherDailyStats = createFetch<
  IdetailExportTeacherDailyStats['request'],
  IdetailExportTeacherDailyStats['response']
>('/center/health/detail/exportTeacherDailyStats', 'post')

// 根据id查询信息
export const IdetailGetById = createFetch<
  IdetailGetById['request'],
  IdetailGetById['response']
>('/center/health/detail/getById', 'post')

// 分页查询健康状况日报
export const IdetailListData = createFetch<
  IdetailListData['request'],
  IdetailListData['response']
>('/center/health/detail/listData', 'post')

// 分页查询健康状况日汇总(route)
export const IrouteDay = createFetch<
  IrouteDay['request'],
  IrouteDay['response']
>('/center/health/detail/route/day', 'post')

// 获取用户需要分组统计的类型列表(route)
export const IrouteGetGroupByTypeList = createFetch<
  IrouteGetGroupByTypeList['request'],
  IrouteGetGroupByTypeList['response']
>('/center/health/detail/route/getGroupByTypeList', 'post')
