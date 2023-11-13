/* eslint-disable space-before-function-paren */
import { zApi } from '@dian/app-utils'
import type {
  ApiLowcodecenterFormstructdataSave,
  ApiLowcodecenterFormstructdata,
  ApiLowcodecenterFormstructdataImportdataFormId,
  ApiLowcodecenterFormstructdataTriggerapprovalworkflow,
  ApiLowcodecenterFormstructdataTransferimgdatato3FormId,
  ApiLowcodecenterFormstructdataGetprintdataFormId,
  ApiLowcodecenterFormstructdataPagequeryfreeformdata,
  ApiLowcodecenterFormstructdataExportfreeformdata,
  ApiLowcodecenterFormstructdataDataimporttemplate,
} from '../types/formStructData'

/** 保存表单数据 */
export async function ApiLowcodecenterFormstructdataSaveService(
  params: ApiLowcodecenterFormstructdataSave['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct-data/save',
    params,
  )
  return data
}

/** 删除表单数据 */
export async function ApiLowcodecenterFormstructdataService(
  params: ApiLowcodecenterFormstructdata['request'],
) {
  const data = await zApi.delete(
    '/ojbk/api/lowcodecenter/form-struct-data',
    params,
  )
  return data
}

/** 导入数据 */
export async function ApiLowcodecenterFormstructdataImportdataFormIdService(
  params: ApiLowcodecenterFormstructdataImportdataFormId['request'],
  query: string,
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct-data/import-data/{formId}'.replace(
      '{formId}',
      query,
    ),
    params,
  )
  return data
}

/** 发起审批 */
export async function ApiLowcodecenterFormstructdataTriggerapprovalworkflowService(
  params: ApiLowcodecenterFormstructdataTriggerapprovalworkflow['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct-data/trigger-approval-workflow',
    params,
  )
  return data
}

/** 从1.0转移图片数据到2.0(转移完可以删了) */
export async function ApiLowcodecenterFormstructdataTransferimgdatato3FormIdService(
  params: ApiLowcodecenterFormstructdataTransferimgdatato3FormId['request'],
  query: string,
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct-data/transfer-img-data-to3/{formId}'.replace(
      '{formId}',
      query,
    ),
    params,
  )
  return data
}

/** 获取打印的数据 */
export async function ApiLowcodecenterFormstructdataGetprintdataFormIdService(
  params: ApiLowcodecenterFormstructdataGetprintdataFormId['request'],
  query: string,
) {
  const data = await zApi.post<
    ApiLowcodecenterFormstructdataGetprintdataFormId['response']['data']
  >(
    '/ojbk/api/lowcodecenter/form-struct-data/get-print-data/{formId}'.replace(
      '{formId}',
      query,
    ),
    params,
  )
  return data
}

/** 获取表单分页数据 */
export async function ApiLowcodecenterFormstructdataPagequeryfreeformdataService(
  params: ApiLowcodecenterFormstructdataPagequeryfreeformdata['request'],
) {
  const data = await zApi.post<
    ApiLowcodecenterFormstructdataPagequeryfreeformdata['response']['data']
  >(
    '/ojbk/api/lowcodecenter/form-struct-data/page-query-free-form-data',
    params,
  )
  return data
}

/** 导出表单数据 */
export async function ApiLowcodecenterFormstructdataExportfreeformdataService(
  params: ApiLowcodecenterFormstructdataExportfreeformdata['request'],
) {
  const data = await zApi.post(
    '/ojbk/api/lowcodecenter/form-struct-data/export-free-form-data',
    params,
  )
  return data
}

/** 获取数据导入模板 */
export async function ApiLowcodecenterFormstructdataDataimporttemplateService(
  params: ApiLowcodecenterFormstructdataDataimporttemplate['request'],
) {
  const data = await zApi.get(
    '/ojbk/api/lowcodecenter/form-struct-data/data-import-template',
    { params },
  )
  return data
}
