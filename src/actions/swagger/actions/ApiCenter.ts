/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type {
  IlowcodecenterApicenter,
  IapicenterPagequeryapi,
  IapicenterId,
  IexecuteapiApiId,
  IapicenterAnalysisjson,
  IapicenterSystemparams,
} from '../types/ApiCenter'

// 添加修改第三方api
export const IlowcodecenterApicenterAction = createFetch<
  IlowcodecenterApicenter['request'],
  IlowcodecenterApicenter['response']
>('/api/lowcodecenter/api-center', 'post')

// 分页获取第三方api信息
export const IapicenterPagequeryapiAction = createFetch<
  IapicenterPagequeryapi['request'],
  IapicenterPagequeryapi['response']
>('/api/lowcodecenter/api-center/page-query-api', 'post')

// 获取第三方api信息
export const IapicenterIdAction = createFetch<
  IapicenterId['request'],
  IapicenterId['response']
>('/api/lowcodecenter/api-center/{id}', 'get')

// 执行第三方api
export const IexecuteapiApiIdAction = createFetch<
  IexecuteapiApiId['request'],
  IexecuteapiApiId['response']
>('/api/lowcodecenter/api-center/execute-api/{apiId}', 'post')

// 解析json参数对象
export const IapicenterAnalysisjsonAction = createFetch<
  IapicenterAnalysisjson['request'],
  IapicenterAnalysisjson['response']
>('/api/lowcodecenter/api-center/analysis-json', 'post')

// 获取系统参数
export const IapicenterSystemparamsAction = createFetch<
  IapicenterSystemparams['request'],
  IapicenterSystemparams['response']
>('/api/lowcodecenter/api-center/system-params', 'get')
