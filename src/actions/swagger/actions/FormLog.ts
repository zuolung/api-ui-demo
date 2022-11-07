/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type { IformlogPagequerylog } from '../types/FormLog'

// 表单引擎操作日志
export const IformlogPagequerylogAction = createFetch<
  IformlogPagequerylog['request'],
  IformlogPagequerylog['response']
>('/api/lowcodecenter/form-log/page-query-log', 'post')
