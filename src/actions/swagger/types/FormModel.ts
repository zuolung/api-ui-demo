/** @type swagger(标注swagger生成的代码，请确认后修改) */
import {
  SaveModelReqDtoFormModel,
  MyJsonCore,
  MyJson1Core5,
  MyJson1Core6,
  PageQueryModelReqDtoFormModel,
  MyJson1Core7,
  MyJson1Core8,
  DataTableFieldReqDtoFormModel,
  MyJson1Core9,
  MyJson1Core10,
  MyJson1Core11,
  PageQueryModelDataReqDtoFormModel,
  MyJson1Core12,
} from '../baseTypes'

/**
 * 保存模型
 * @url /api/lowcodecenter/form-model/save
 * @method post
 * @introduce --
 */
export type IformmodelSave = {
  request: SaveModelReqDtoFormModel

  response: MyJsonCore
}

/**
 * 删除模型
 * @url /api/lowcodecenter/form-model
 * @method delete
 * @introduce --
 */
export type IlowcodecenterFormmodel = {
  request: string[]

  response: MyJsonCore
}

/**
 * 获取模型sql的参数字段
 * @url /api/lowcodecenter/form-model/get-model-sql-param-field
 * @method post
 * @introduce --
 */
export type IformmodelGetmodelsqlparamfield = {
  request: string
  response: MyJson1Core5
}

/**
 * 获取模型数据
 * @url /api/lowcodecenter/form-model/{id}
 * @method get
 * @introduce --
 */
export type IformmodelId = {
  request: Record<string, any>

  response: MyJson1Core6
}

/**
 * 分页获取表单模型列表
 * @url /api/lowcodecenter/form-model/page-query-free-form-model
 * @method post
 * @introduce --
 */
export type IformmodelPagequeryfreeformmodel = {
  request: PageQueryModelReqDtoFormModel

  response: MyJson1Core7
}

/**
 * 获取数据库所有有描述的数据表信息
 * @url /api/lowcodecenter/form-model/data-table-list
 * @method get
 * @introduce --
 */
export type IformmodelDatatablelist = {
  request: Record<string, any>

  response: MyJson1Core8
}

/**
 * 获取表或sql的字段信息
 * @url /api/lowcodecenter/form-model/get-data-table-field
 * @method post
 * @introduce --
 */
export type IformmodelGetdatatablefield = {
  request: DataTableFieldReqDtoFormModel

  response: MyJson1Core9
}

/**
 * 获取表单模型的列表
 * @url /api/lowcodecenter/form-model/model-list
 * @method get
 * @introduce --
 */
export type IformmodelModellist = {
  request: Record<string, any>

  response: MyJson1Core10
}

/**
 * 获取单个模型的字段列表
 * @url /api/lowcodecenter/form-model/model-sub-list/{modelId}
 * @method get
 * @introduce --
 */
export type ImodelsublistModelId = {
  request: Record<string, any>

  response: MyJson1Core11
}

/**
 * 按模型分页获取数据
 * @url /api/lowcodecenter/form-model/page-query-model-data
 * @method post
 * @introduce --
 */
export type IformmodelPagequerymodeldata = {
  request: PageQueryModelDataReqDtoFormModel

  response: MyJson1Core12
}
