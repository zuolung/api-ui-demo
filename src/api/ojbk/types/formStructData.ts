/* eslint-disable camelcase */
import type {
  UFXCloudCoreMyJson,
  UFXCloudCoreMyJsonSystemStringSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae,
  UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructPageQueryFormDataResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull,
} from './swagger-base'

/**
 * 保存表单数据
 * @url /api/lowcodecenter/form-struct-data/save
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataSave = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 删除表单数据
 * @url /api/lowcodecenter/form-struct-data
 * @method delete
 * @introduce --
 */
export type ApiLowcodecenterFormstructdata = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 导入数据
 * @url /api/lowcodecenter/form-struct-data/import-data/{formId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataImportdataFormId = {
  request: undefined

  response: undefined
}

/**
 * 发起审批
 * @url /api/lowcodecenter/form-struct-data/trigger-approval-workflow
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataTriggerapprovalworkflow = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 从1.0转移图片数据到2.0(转移完可以删了)
 * @url /api/lowcodecenter/form-struct-data/transfer-img-data-to3/{formId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataTransferimgdatato3FormId = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 获取打印的数据
 * @url /api/lowcodecenter/form-struct-data/get-print-data/{formId}
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataGetprintdataFormId = {
  request: undefined

  response: UFXCloudCoreMyJsonSystemStringSystemPrivateCoreLibVersionCultureneutralPublicKeyTokencecdbeae
}

/**
 * 获取表单分页数据
 * @url /api/lowcodecenter/form-struct-data/page-query-free-form-data
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataPagequeryfreeformdata = {
  request: undefined

  response: UFXCloudCoreMyJsonUFXSCMCloudLowCodeCenterDomainSharedDtosResponseFormStructPageQueryFormDataResDtoUFXSCMCloudLowCodeCenterDomainSharedVersionCultureneutralPublicKeyTokennull
}

/**
 * 导出表单数据
 * @url /api/lowcodecenter/form-struct-data/export-free-form-data
 * @method post
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataExportfreeformdata = {
  request: undefined

  response: UFXCloudCoreMyJson
}

/**
 * 获取数据导入模板
 * @url /api/lowcodecenter/form-struct-data/data-import-template
 * @method get
 * @introduce --
 */
export type ApiLowcodecenterFormstructdataDataimporttemplate = {
  request: {
    formId: string
    subFormId: string
  }
  response: undefined
}
