/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type {
  ApiLowcodecenterApicenter,
  ApiLowcodecenterApicenterPagequeryapi,
  ApiLowcodecenterApicenterId,
  ApiLowcodecenterApicenterExecuteapiApiId,
  ApiLowcodecenterApicenterAnalysisjson,
  ApiLowcodecenterApicenterSystemparams,
} from '../types/apiCenter'

/** 添加修改第三方api */
export async function ApiLowcodecenterApicenterService(
  params: ApiLowcodecenterApicenter['request'],
) {
  const data = await zApi.post('/ojbk/api/lowcodecenter/api-center', params)
  return data
}

/** 分页获取第三方api信息 */
export async function ApiLowcodecenterApicenterPagequeryapiService(
  params: ApiLowcodecenterApicenterPagequeryapi['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterApicenterPagequeryapi['response']['data']
  >('/ojbk/api/lowcodecenter/api-center/page-query-api', params)
  return data
}

/** 获取第三方api信息 */
export async function ApiLowcodecenterApicenterIdService(
  params: ApiLowcodecenterApicenterId['request'],
  query: string,
) {
  const data = await zApi.get<ApiLowcodecenterApicenterId['response']['data']>(
    '/ojbk/api/lowcodecenter/api-center/{id}'.replace('{id}', query),
    { params },
  )
  return data
}

/** 执行第三方api */
export async function ApiLowcodecenterApicenterExecuteapiApiIdService(
  params: ApiLowcodecenterApicenterExecuteapiApiId['request'],
  query: string,
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/api-center/execute-api/{apiId}'.replace(
      '{apiId}',
      query,
    ),
    params,
  )
  return data
}

/** 解析json参数对象 */
export async function ApiLowcodecenterApicenterAnalysisjsonService(
  params: ApiLowcodecenterApicenterAnalysisjson['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterApicenterAnalysisjson['response']['data']
  >('/ojbk/api/lowcodecenter/api-center/analysis-json', params)
  return data
}

/** 获取系统参数 */
export async function ApiLowcodecenterApicenterSystemparamsService(
  params: ApiLowcodecenterApicenterSystemparams['request'],
) {
  const data = await zApi.get<
    ApiLowcodecenterApicenterSystemparams['response']['data']
  >('/ojbk/api/lowcodecenter/api-center/system-params', { params })
  return data
}
