/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type { ApiLowcodecenterFormlogPagequerylog } from '../types/formLog'

/** 表单引擎操作日志 */
export async function ApiLowcodecenterFormlogPagequerylogService(
  params?: ApiLowcodecenterFormlogPagequerylog['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormlogPagequerylog['response']['data']
  >('/ojbk/api/lowcodecenter/form-log/page-query-log', params)
  return data
}
