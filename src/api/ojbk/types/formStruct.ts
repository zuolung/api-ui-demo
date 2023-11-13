/* eslint-disable camelcase */
import type {
  UFXCloudCoreMyJson,
  UFXCloudCoreMyJsonSystemGuidSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructFormStructPageResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructFormSubResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonSystemStringSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
} from './swagger-base'

/**
 * 逻辑删除表单
 * @url /api/lowcodecenter/form-struct
 * @method delete
 * @introduce --
 */
export type ApiLowcodecenterFormstruct = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 还原逻辑删除的表单
 * @url /api/lowcodecenter/form-struct/reduction
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructReduction = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 创建表单
 * @url /api/lowcodecenter/form-struct/save-form
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructSaveform = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemGuidSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 保存表单结构
 * @url /api/lowcodecenter/form-struct/save-form-struct
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructSaveformstruct = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemGuidSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 设为当前表单版本
 * @url /api/lowcodecenter/form-struct/set-form-to-current-version/{versionId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructSetformtocurrentversionVersionId = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 同步表单至AM，创建菜单
 * @url /api/lowcodecenter/form-struct/module/{formId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructModuleFormId = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 判断该表单是否可外部分享
 * @url /api/lowcodecenter/form-struct/is-out/{formId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructIsoutFormId = {
  request: undefined

  response: undefined
}

/**
 * 分页获取表单列表信息
 * @url /api/lowcodecenter/form-struct/page-query-free-form
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructPagequeryfreeform = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructFormStructPageResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull
}

/**
 * 分页获取表单版本列表信息
 * @url /api/lowcodecenter/form-struct/page-query-free-form-version
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructPagequeryfreeformversion = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructFormStructPageResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull
}

/**
 * 获取当前版本表单的子表单列表
 * @url /api/lowcodecenter/form-struct/query-form-sub-list/{formId}
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormstructQueryformsublistFormId = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructFormSubResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 检查公式正确性
 * @url /api/lowcodecenter/form-struct/check-formula
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructCheckformula = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 获取表单的sql查询语句
 * @url /api/lowcodecenter/form-struct/form-join-sql/{formId}
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormstructFormjoinsqlFormId = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemStringSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}
