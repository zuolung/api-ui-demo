/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type {
  IformstructdataSave,
  IlowcodecenterFormstructdata,
  IimportdataFormId,
  IformstructdataTriggerapprovalworkflow,
  IgetprintdataFormId,
  IformstructdataPagequeryfreeformdata,
  IformstructdataExportfreeformdata,
  IformstructdataDataimporttemplate,
} from '../types/FormStructData'

// 保存表单数据
export const IformstructdataSaveAction = createFetch<
  IformstructdataSave['request'],
  IformstructdataSave['response']
>('/api/lowcodecenter/form-struct-data/save', 'post')

// 删除表单数据
export const IlowcodecenterFormstructdataAction = createFetch<
  IlowcodecenterFormstructdata['request'],
  IlowcodecenterFormstructdata['response']
>('/api/lowcodecenter/form-struct-data', 'delete')

// 导入数据
export const IimportdataFormIdAction = createFetch<
  IimportdataFormId['request'],
  IimportdataFormId['response']
>('/api/lowcodecenter/form-struct-data/import-data/{formId}', 'post')

// 发起审批
export const IformstructdataTriggerapprovalworkflowAction = createFetch<
  IformstructdataTriggerapprovalworkflow['request'],
  IformstructdataTriggerapprovalworkflow['response']
>('/api/lowcodecenter/form-struct-data/trigger-approval-workflow', 'post')

// 获取打印的数据
export const IgetprintdataFormIdAction = createFetch<
  IgetprintdataFormId['request'],
  IgetprintdataFormId['response']
>('/api/lowcodecenter/form-struct-data/get-print-data/{formId}', 'post')

// 获取表单分页数据
export const IformstructdataPagequeryfreeformdataAction = createFetch<
  IformstructdataPagequeryfreeformdata['request'],
  IformstructdataPagequeryfreeformdata['response']
>('/api/lowcodecenter/form-struct-data/page-query-free-form-data', 'post')

// 导出表单数据
export const IformstructdataExportfreeformdataAction = createFetch<
  IformstructdataExportfreeformdata['request'],
  IformstructdataExportfreeformdata['response']
>('/api/lowcodecenter/form-struct-data/export-free-form-data', 'post')

// 获取数据导入模板
export const IformstructdataDataimporttemplateAction = createFetch<
  IformstructdataDataimporttemplate['request'],
  IformstructdataDataimporttemplate['response']
>('/api/lowcodecenter/form-struct-data/data-import-template', 'get')
