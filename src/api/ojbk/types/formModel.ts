/* eslint-disable camelcase */
import type {
  UFXCloudCoreMyJson,
  UFXCloudCoreMyJsonSystemCollectionsGenericListSystemStringSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeaeSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelModelResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull,
  UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelPageModelResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelDataTableResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelDataTableFieldResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelPageModelResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelModelSubResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelModelDataPageResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull,
} from './swagger-base'

/**
 * 保存模型
 * @url /api/lowcodecenter/form-model/save
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormmodelSave = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 删除模型
 * @url /api/lowcodecenter/form-model
 * @method delete
 * @introduce --
 */
export type ApiLowcodecenterFormmodel = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 获取模型sql的参数字段
 * @url /api/lowcodecenter/form-model/get-model-sql-param-field
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormmodelGetmodelsqlparamfield = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListSystemStringSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeaeSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 获取模型数据
 * @url /api/lowcodecenter/form-model/{id}
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormmodelId = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelModelResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull
}

/**
 * 分页获取表单模型列表
 * @url /api/lowcodecenter/form-model/page-query-free-form-model
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormmodelPagequeryfreeformmodel = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelPageModelResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull
}

/**
 * 获取数据库所有有描述的数据表信息
 * @url /api/lowcodecenter/form-model/data-table-list
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormmodelDatatablelist = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelDataTableResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 获取表或sql的字段信息
 * @url /api/lowcodecenter/form-model/get-data-table-field
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormmodelGetdatatablefield = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelDataTableFieldResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 获取表单模型的列表
 * @url /api/lowcodecenter/form-model/model-list
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormmodelModellist = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelPageModelResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 获取单个模型的字段列表
 * @url /api/lowcodecenter/form-model/model-sub-list/{modelId}
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormmodelModelsublistModelId = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelModelSubResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 按模型分页获取数据
 * @url /api/lowcodecenter/form-model/page-query-model-data
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormmodelPagequerymodeldata = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormModelModelDataPageResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull
}
