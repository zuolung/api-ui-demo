/** @type swagger(标注swagger生成的代码，请确认后修改) */
import {
  MyJsonCore,
  SaveFormJsonReqDtoFormStruct,
  SaveFormReqDtoFormStruct,
  MyJson1Core13,
  SaveFormStructReqDtoFormStruct,
  PageQueryCurrentFormStructReqDtoFormStruct,
  MyJson1Core14,
  PageQueryFormStructVersionReqDtoFormStruct,
  MyJson1Core15,
  MyJson1Core16,
} from '../baseTypes'

/**
 * 获取最新的表单架构json，自动比对默认版本和当前用户自定义版本，合并
 * @url /api/lowcodecenter/form-struct/compare-form-json/{menuId}
 * @method get
 * @introduce --
 */
export type IcompareformjsonMenuId = {
  request: Record<string, any>

  response: MyJsonCore
}

/**
 * 保存表单json结构到服务器，仅限于开发者特供版
 * @url /api/lowcodecenter/form-struct/save-form-json
 * @method post
 * @introduce --
 */
export type IformstructSaveformjson = {
  request: SaveFormJsonReqDtoFormStruct

  response: MyJsonCore
}

/**
 * 逻辑删除表单
 * @url /api/lowcodecenter/form-struct
 * @method delete
 * @introduce --
 */
export type IlowcodecenterFormstruct = {
  request: string[]

  response: MyJsonCore
}

/**
 * 还原逻辑删除的表单
 * @url /api/lowcodecenter/form-struct/reduction
 * @method post
 * @introduce --
 */
export type IformstructReduction = {
  request: string[]

  response: MyJsonCore
}

/**
 * 创建表单
 * @url /api/lowcodecenter/form-struct/save-form
 * @method post
 * @introduce --
 */
export type IformstructSaveform = {
  request: SaveFormReqDtoFormStruct

  response: MyJson1Core13
}

/**
 * 保存表单结构
 * @url /api/lowcodecenter/form-struct/save-form-struct
 * @method post
 * @introduce --
 */
export type IformstructSaveformstruct = {
  request: SaveFormStructReqDtoFormStruct

  response: MyJson1Core13
}

/**
 * 设为当前表单版本
 * @url /api/lowcodecenter/form-struct/set-form-to-current-version/{versionId}
 * @method post
 * @introduce --
 */
export type IsetformtocurrentversionVersionId = {
  request: Record<string, any>

  response: MyJsonCore
}

/**
 * 同步表单至AM，创建菜单
 * @url /api/lowcodecenter/form-struct/module/{formId}
 * @method post
 * @introduce --
 */
export type ImoduleFormId = {
  request: Record<string, any>

  response: MyJsonCore
}

/**
 * 判断该表单是否可外部分享
 * @url /api/lowcodecenter/form-struct/is-out/{formId}
 * @method post
 * @introduce --
 */
export type IisoutFormId = {
  request: Record<string, any>

  response: {
    /**
     * @value 200
     */
    code: number
    /**
     * @value success
     */
    success: boolean
  }
}

/**
 * 分页获取表单列表信息
 * @url /api/lowcodecenter/form-struct/page-query-free-form
 * @method post
 * @introduce --
 */
export type IformstructPagequeryfreeform = {
  request: PageQueryCurrentFormStructReqDtoFormStruct

  response: MyJson1Core14
}

/**
 * 分页获取表单版本列表信息
 * @url /api/lowcodecenter/form-struct/page-query-free-form-version
 * @method post
 * @introduce --
 */
export type IformstructPagequeryfreeformversion = {
  request: PageQueryFormStructVersionReqDtoFormStruct

  response: MyJson1Core14
}

/**
 * 获取当前版本表单的子表单列表
 * @url /api/lowcodecenter/form-struct/query-form-sub-list/{formId}
 * @method get
 * @introduce --
 */
export type IqueryformsublistFormId = {
  request: Record<string, any>

  response: MyJson1Core15
}

/**
 * 检查公式正确性
 * @url /api/lowcodecenter/form-struct/check-formula
 * @method post
 * @introduce --
 */
export type IformstructCheckformula = {
  request: Record<string, any>

  response: MyJsonCore
}

/**
 * 获取表单的sql查询语句
 * @url /api/lowcodecenter/form-struct/form-join-sql/{formId}
 * @method get
 * @introduce --
 */
export type IformjoinsqlFormId = {
  request: Record<string, any>

  response: MyJson1Core16
}
