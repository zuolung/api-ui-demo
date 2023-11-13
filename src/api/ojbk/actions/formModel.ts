/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type {
  ApiLowcodecenterFormmodelSave,
  ApiLowcodecenterFormmodel,
  ApiLowcodecenterFormmodelGetmodelsqlparamfield,
  ApiLowcodecenterFormmodelId,
  ApiLowcodecenterFormmodelPagequeryfreeformmodel,
  ApiLowcodecenterFormmodelDatatablelist,
  ApiLowcodecenterFormmodelGetdatatablefield,
  ApiLowcodecenterFormmodelModellist,
  ApiLowcodecenterFormmodelModelsublistModelId,
  ApiLowcodecenterFormmodelPagequerymodeldata,
} from '../types/formModel'

/** 保存模型 */
export async function ApiLowcodecenterFormmodelSaveService(
  params?: ApiLowcodecenterFormmodelSave['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-model/save',
    params,
  )
  return data
}

/** 删除模型 */
export async function ApiLowcodecenterFormmodelService(
  params?: ApiLowcodecenterFormmodel['request'],
) {
  const data = await zApi.delete('/ojbk/api/lowcodecenter/form-model', params)
  return data
}

/** 获取模型sql的参数字段 */
export async function ApiLowcodecenterFormmodelGetmodelsqlparamfieldService(
  params?: ApiLowcodecenterFormmodelGetmodelsqlparamfield['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormmodelGetmodelsqlparamfield['response']['data']
  >('/ojbk/api/lowcodecenter/form-model/get-model-sql-param-field', params)
  return data
}

/** 获取模型数据 */
export async function ApiLowcodecenterFormmodelIdService(
  params?: ApiLowcodecenterFormmodelId['request'],
  query: string,
) {
  const data = await zApi.get<ApiLowcodecenterFormmodelId['response']['data']>(
    '/ojbk/api/lowcodecenter/form-model/{id}'.replace('{id}', query),
    { params },
  )
  return data
}

/** 分页获取表单模型列表 */
export async function ApiLowcodecenterFormmodelPagequeryfreeformmodelService(
  params?: ApiLowcodecenterFormmodelPagequeryfreeformmodel['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormmodelPagequeryfreeformmodel['response']['data']
  >('/ojbk/api/lowcodecenter/form-model/page-query-free-form-model', params)
  return data
}

/** 获取数据库所有有描述的数据表信息 */
export async function ApiLowcodecenterFormmodelDatatablelistService(
  params?: ApiLowcodecenterFormmodelDatatablelist['request'],
) {
  const data = await zApi.get<
    ApiLowcodecenterFormmodelDatatablelist['response']['data']
  >('/ojbk/api/lowcodecenter/form-model/data-table-list', { params })
  return data
}

/** 获取表或sql的字段信息 */
export async function ApiLowcodecenterFormmodelGetdatatablefieldService(
  params?: ApiLowcodecenterFormmodelGetdatatablefield['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormmodelGetdatatablefield['response']['data']
  >('/ojbk/api/lowcodecenter/form-model/get-data-table-field', params)
  return data
}

/** 获取表单模型的列表 */
export async function ApiLowcodecenterFormmodelModellistService(
  params?: ApiLowcodecenterFormmodelModellist['request'],
) {
  const data = await zApi.get<
    ApiLowcodecenterFormmodelModellist['response']['data']
  >('/ojbk/api/lowcodecenter/form-model/model-list', { params })
  return data
}

/** 获取单个模型的字段列表 */
export async function ApiLowcodecenterFormmodelModelsublistModelIdService(
  params?: ApiLowcodecenterFormmodelModelsublistModelId['request'],
  query: string,
) {
  const data = await zApi.get<
    ApiLowcodecenterFormmodelModelsublistModelId['response']['data']
  >(
    '/ojbk/api/lowcodecenter/form-model/model-sub-list/{modelId}'.replace(
      '{modelId}',
      query,
    ),
    { params },
  )
  return data
}

/** 按模型分页获取数据 */
export async function ApiLowcodecenterFormmodelPagequerymodeldataService(
  params?: ApiLowcodecenterFormmodelPagequerymodeldata['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormmodelPagequerymodeldata['response']['data']
  >('/ojbk/api/lowcodecenter/form-model/page-query-model-data', params)
  return data
}
