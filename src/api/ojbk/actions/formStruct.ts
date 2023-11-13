/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type {
  ApiLowcodecenterFormstruct,
  ApiLowcodecenterFormstructReduction,
  ApiLowcodecenterFormstructSaveform,
  ApiLowcodecenterFormstructSaveformstruct,
  ApiLowcodecenterFormstructSetformtocurrentversionVersionId,
  ApiLowcodecenterFormstructModuleFormId,
  ApiLowcodecenterFormstructIsoutFormId,
  ApiLowcodecenterFormstructPagequeryfreeform,
  ApiLowcodecenterFormstructPagequeryfreeformversion,
  ApiLowcodecenterFormstructQueryformsublistFormId,
  ApiLowcodecenterFormstructCheckformula,
  ApiLowcodecenterFormstructFormjoinsqlFormId,
} from '../types/formStruct'

/** 逻辑删除表单 */
export async function ApiLowcodecenterFormstructService(
  params: ApiLowcodecenterFormstruct['request'],
) {
  const data = await zApi.delete('/ojbk/api/lowcodecenter/form-struct', params)
  return data
}

/** 还原逻辑删除的表单 */
export async function ApiLowcodecenterFormstructReductionService(
  params: ApiLowcodecenterFormstructReduction['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct/reduction',
    params,
  )
  return data
}

/** 创建表单 */
export async function ApiLowcodecenterFormstructSaveformService(
  params: ApiLowcodecenterFormstructSaveform['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormstructSaveform['response']['data']
  >('/ojbk/api/lowcodecenter/form-struct/save-form', params)
  return data
}

/** 保存表单结构 */
export async function ApiLowcodecenterFormstructSaveformstructService(
  params: ApiLowcodecenterFormstructSaveformstruct['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormstructSaveformstruct['response']['data']
  >('/ojbk/api/lowcodecenter/form-struct/save-form-struct', params)
  return data
}

/** 设为当前表单版本 */
export async function ApiLowcodecenterFormstructSetformtocurrentversionVersionIdService(
  params: ApiLowcodecenterFormstructSetformtocurrentversionVersionId['request'],
  query: string,
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct/set-form-to-current-version/{versionId}'.replace(
      '{versionId}',
      query,
    ),
    params,
  )
  return data
}

/** 同步表单至AM，创建菜单 */
export async function ApiLowcodecenterFormstructModuleFormIdService(
  params: ApiLowcodecenterFormstructModuleFormId['request'],
  query: string,
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct/module/{formId}'.replace(
      '{formId}',
      query,
    ),
    params,
  )
  return data
}

/** 判断该表单是否可外部分享 */
export async function ApiLowcodecenterFormstructIsoutFormIdService(
  params: ApiLowcodecenterFormstructIsoutFormId['request'],
  query: string,
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct/is-out/{formId}'.replace(
      '{formId}',
      query,
    ),
    params,
  )
  return data
}

/** 分页获取表单列表信息 */
export async function ApiLowcodecenterFormstructPagequeryfreeformService(
  params: ApiLowcodecenterFormstructPagequeryfreeform['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormstructPagequeryfreeform['response']['data']
  >('/ojbk/api/lowcodecenter/form-struct/page-query-free-form', params)
  return data
}

/** 分页获取表单版本列表信息 */
export async function ApiLowcodecenterFormstructPagequeryfreeformversionService(
  params: ApiLowcodecenterFormstructPagequeryfreeformversion['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormstructPagequeryfreeformversion['response']['data']
  >('/ojbk/api/lowcodecenter/form-struct/page-query-free-form-version', params)
  return data
}

/** 获取当前版本表单的子表单列表 */
export async function ApiLowcodecenterFormstructQueryformsublistFormIdService(
  params: ApiLowcodecenterFormstructQueryformsublistFormId['request'],
  query: string,
) {
  const data = await zApi.get<
    ApiLowcodecenterFormstructQueryformsublistFormId['response']['data']
  >(
    '/ojbk/api/lowcodecenter/form-struct/query-form-sub-list/{formId}'.replace(
      '{formId}',
      query,
    ),
    { params },
  )
  return data
}

/** 检查公式正确性 */
export async function ApiLowcodecenterFormstructCheckformulaService(
  params: ApiLowcodecenterFormstructCheckformula['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct/check-formula',
    params,
  )
  return data
}

/** 获取表单的sql查询语句 */
export async function ApiLowcodecenterFormstructFormjoinsqlFormIdService(
  params: ApiLowcodecenterFormstructFormjoinsqlFormId['request'],
  query: string,
) {
  const data = await zApi.get<
    ApiLowcodecenterFormstructFormjoinsqlFormId['response']['data']
  >(
    '/ojbk/api/lowcodecenter/form-struct/form-join-sql/{formId}'.replace(
      '{formId}',
      query,
    ),
    { params },
  )
  return data
}
