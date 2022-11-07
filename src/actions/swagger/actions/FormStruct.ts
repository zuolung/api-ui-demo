/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type {
  IcompareformjsonMenuId,
  IformstructSaveformjson,
  IlowcodecenterFormstruct,
  IformstructReduction,
  IformstructSaveform,
  IformstructSaveformstruct,
  IsetformtocurrentversionVersionId,
  ImoduleFormId,
  IisoutFormId,
  IformstructPagequeryfreeform,
  IformstructPagequeryfreeformversion,
  IqueryformsublistFormId,
  IformstructCheckformula,
  IformjoinsqlFormId,
} from '../types/FormStruct'

// 获取最新的表单架构json，自动比对默认版本和当前用户自定义版本，合并
export const IcompareformjsonMenuIdAction = createFetch<
  IcompareformjsonMenuId['request'],
  IcompareformjsonMenuId['response']
>('/api/lowcodecenter/form-struct/compare-form-json/{menuId}', 'get')

// 保存表单json结构到服务器，仅限于开发者特供版
export const IformstructSaveformjsonAction = createFetch<
  IformstructSaveformjson['request'],
  IformstructSaveformjson['response']
>('/api/lowcodecenter/form-struct/save-form-json', 'post')

// 逻辑删除表单
export const IlowcodecenterFormstructAction = createFetch<
  IlowcodecenterFormstruct['request'],
  IlowcodecenterFormstruct['response']
>('/api/lowcodecenter/form-struct', 'delete')

// 还原逻辑删除的表单
export const IformstructReductionAction = createFetch<
  IformstructReduction['request'],
  IformstructReduction['response']
>('/api/lowcodecenter/form-struct/reduction', 'post')

// 创建表单
export const IformstructSaveformAction = createFetch<
  IformstructSaveform['request'],
  IformstructSaveform['response']
>('/api/lowcodecenter/form-struct/save-form', 'post')

// 保存表单结构
export const IformstructSaveformstructAction = createFetch<
  IformstructSaveformstruct['request'],
  IformstructSaveformstruct['response']
>('/api/lowcodecenter/form-struct/save-form-struct', 'post')

// 设为当前表单版本
export const IsetformtocurrentversionVersionIdAction = createFetch<
  IsetformtocurrentversionVersionId['request'],
  IsetformtocurrentversionVersionId['response']
>(
  '/api/lowcodecenter/form-struct/set-form-to-current-version/{versionId}',
  'post',
)

// 同步表单至AM，创建菜单
export const ImoduleFormIdAction = createFetch<
  ImoduleFormId['request'],
  ImoduleFormId['response']
>('/api/lowcodecenter/form-struct/module/{formId}', 'post')

// 判断该表单是否可外部分享
export const IisoutFormIdAction = createFetch<
  IisoutFormId['request'],
  IisoutFormId['response']
>('/api/lowcodecenter/form-struct/is-out/{formId}', 'post')

// 分页获取表单列表信息
export const IformstructPagequeryfreeformAction = createFetch<
  IformstructPagequeryfreeform['request'],
  IformstructPagequeryfreeform['response']
>('/api/lowcodecenter/form-struct/page-query-free-form', 'post')

// 分页获取表单版本列表信息
export const IformstructPagequeryfreeformversionAction = createFetch<
  IformstructPagequeryfreeformversion['request'],
  IformstructPagequeryfreeformversion['response']
>('/api/lowcodecenter/form-struct/page-query-free-form-version', 'post')

// 获取当前版本表单的子表单列表
export const IqueryformsublistFormIdAction = createFetch<
  IqueryformsublistFormId['request'],
  IqueryformsublistFormId['response']
>('/api/lowcodecenter/form-struct/query-form-sub-list/{formId}', 'get')

// 检查公式正确性
export const IformstructCheckformulaAction = createFetch<
  IformstructCheckformula['request'],
  IformstructCheckformula['response']
>('/api/lowcodecenter/form-struct/check-formula', 'post')

// 获取表单的sql查询语句
export const IformjoinsqlFormIdAction = createFetch<
  IformjoinsqlFormId['request'],
  IformjoinsqlFormId['response']
>('/api/lowcodecenter/form-struct/form-join-sql/{formId}', 'get')
