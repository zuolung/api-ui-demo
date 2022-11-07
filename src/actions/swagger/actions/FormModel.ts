/** @type from swagger */

// @ts-nocheck
import { createFetch } from '../../../request'
import type {
  IformmodelSave,
  IlowcodecenterFormmodel,
  IformmodelGetmodelsqlparamfield,
  IformmodelId,
  IformmodelPagequeryfreeformmodel,
  IformmodelDatatablelist,
  IformmodelGetdatatablefield,
  IformmodelModellist,
  ImodelsublistModelId,
  IformmodelPagequerymodeldata,
} from '../types/FormModel'

// 保存模型
export const IformmodelSaveAction = createFetch<
  IformmodelSave['request'],
  IformmodelSave['response']
>('/api/lowcodecenter/form-model/save', 'post')

// 删除模型
export const IlowcodecenterFormmodelAction = createFetch<
  IlowcodecenterFormmodel['request'],
  IlowcodecenterFormmodel['response']
>('/api/lowcodecenter/form-model', 'delete')

// 获取模型sql的参数字段
export const IformmodelGetmodelsqlparamfieldAction = createFetch<
  IformmodelGetmodelsqlparamfield['request'],
  IformmodelGetmodelsqlparamfield['response']
>('/api/lowcodecenter/form-model/get-model-sql-param-field', 'post')

// 获取模型数据
export const IformmodelIdAction = createFetch<
  IformmodelId['request'],
  IformmodelId['response']
>('/api/lowcodecenter/form-model/{id}', 'get')

// 分页获取表单模型列表
export const IformmodelPagequeryfreeformmodelAction = createFetch<
  IformmodelPagequeryfreeformmodel['request'],
  IformmodelPagequeryfreeformmodel['response']
>('/api/lowcodecenter/form-model/page-query-free-form-model', 'post')

// 获取数据库所有有描述的数据表信息
export const IformmodelDatatablelistAction = createFetch<
  IformmodelDatatablelist['request'],
  IformmodelDatatablelist['response']
>('/api/lowcodecenter/form-model/data-table-list', 'get')

// 获取表或sql的字段信息
export const IformmodelGetdatatablefieldAction = createFetch<
  IformmodelGetdatatablefield['request'],
  IformmodelGetdatatablefield['response']
>('/api/lowcodecenter/form-model/get-data-table-field', 'post')

// 获取表单模型的列表
export const IformmodelModellistAction = createFetch<
  IformmodelModellist['request'],
  IformmodelModellist['response']
>('/api/lowcodecenter/form-model/model-list', 'get')

// 获取单个模型的字段列表
export const ImodelsublistModelIdAction = createFetch<
  ImodelsublistModelId['request'],
  ImodelsublistModelId['response']
>('/api/lowcodecenter/form-model/model-sub-list/{modelId}', 'get')

// 按模型分页获取数据
export const IformmodelPagequerymodeldataAction = createFetch<
  IformmodelPagequerymodeldata['request'],
  IformmodelPagequerymodeldata['response']
>('/api/lowcodecenter/form-model/page-query-model-data', 'post')
