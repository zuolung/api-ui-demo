/* eslint-disable camelcase */
import type {
  UFXCloudCoreMyJson,
  UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterPageApiResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull,
  UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterApiResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterApiExternalParamResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterSystemParamResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
} from './swagger-base'

/**
 * 添加修改第三方api
 * @url /api/lowcodecenter/api-center
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterApicenter = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 分页获取第三方api信息
 * @url /api/lowcodecenter/api-center/page-query-api
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterApicenterPagequeryapi = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXCloudCorePagedListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterPageApiResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullUFXCloudCoreVersionCultureneutralPublicKeyTokennull
}

/**
 * 获取第三方api信息
 * @url /api/lowcodecenter/api-center/{id}
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterApicenterId = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterApiResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull
}

/**
 * 执行第三方api
 * @url /api/lowcodecenter/api-center/execute-api/{apiId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterApicenterExecuteapiApiId = {
  request: undefined

  response: undefined
}

/**
 * 解析json参数对象
 * @url /api/lowcodecenter/api-center/analysis-json
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterApicenterAnalysisjson = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterApiExternalParamResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 获取系统参数
 * @url /api/lowcodecenter/api-center/system-params
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterApicenterSystemparams = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemCollectionsGenericListUFXSCMCloudLowCodeCenterDomainSharedDtosResponseApiCenterSystemParamResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennullSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}
