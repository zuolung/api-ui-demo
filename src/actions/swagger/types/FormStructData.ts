/** @type swagger(标注swagger生成的代码，请确认后修改) */
import {
  MyJsonCore,
  MyJson1Core16,
  PageQueryFormDataReqDtoFormStruct,
  MyJson1Core17,
  ExportFormDataReqDtoFormStruct,
} from '../baseTypes'

/**
 * 保存表单数据
 * @url /api/lowcodecenter/form-struct-data/save
 * @method post
 * @introduce --
 */
export type IformstructdataSave = {
  request: {}

  response: MyJsonCore
}

/**
 * 删除表单数据
 * @url /api/lowcodecenter/form-struct-data
 * @method delete
 * @introduce --
 */
export type IlowcodecenterFormstructdata = {
  request: string[]

  response: MyJsonCore
}

/**
 * 导入数据
 * @url /api/lowcodecenter/form-struct-data/import-data/{formId}
 * @method post
 * @introduce --
 */
export type IimportdataFormId = {
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
 * 发起审批
 * @url /api/lowcodecenter/form-struct-data/trigger-approval-workflow
 * @method post
 * @introduce --
 */
export type IformstructdataTriggerapprovalworkflow = {
  request: Record<string, any>

  response: MyJsonCore
}

/**
 * 获取打印的数据
 * @url /api/lowcodecenter/form-struct-data/get-print-data/{formId}
 * @method post
 * @introduce --
 */
export type IgetprintdataFormId = {
  request: string[]

  response: MyJson1Core16
}

/**
 * 获取表单分页数据
 * @url /api/lowcodecenter/form-struct-data/page-query-free-form-data
 * @method post
 * @introduce --
 */
export type IformstructdataPagequeryfreeformdata = {
  request: PageQueryFormDataReqDtoFormStruct

  response: MyJson1Core17
}

/**
 * 导出表单数据
 * @url /api/lowcodecenter/form-struct-data/export-free-form-data
 * @method post
 * @introduce --
 */
export type IformstructdataExportfreeformdata = {
  request: ExportFormDataReqDtoFormStruct

  response: MyJsonCore
}

/**
 * 获取数据导入模板
 * @url /api/lowcodecenter/form-struct-data/data-import-template
 * @method get
 * @introduce --
 */
export type IformstructdataDataimporttemplate = {
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
