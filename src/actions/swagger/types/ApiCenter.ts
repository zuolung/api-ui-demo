/** @type swagger(标注swagger生成的代码，请确认后修改) */
import {
  SaveApiExternalReqDtoApiCenter,
  MyJsonCore,
  PageQueryApiReqDtoApiCenter,
  MyJson1Core,
  MyJson1Core0,
  MyJson1Core1,
  MyJson1Core2,
} from '../baseTypes'

/**
 * 添加修改第三方api
 * @url /api/lowcodecenter/api-center
 * @method post
 * @introduce --
 */
export type IlowcodecenterApicenter = {
  request: SaveApiExternalReqDtoApiCenter

  response: MyJsonCore
}

/**
 * 分页获取第三方api信息
 * @url /api/lowcodecenter/api-center/page-query-api
 * @method post
 * @introduce --
 */
export type IapicenterPagequeryapi = {
  request: PageQueryApiReqDtoApiCenter

  response: MyJson1Core
}

/**
 * 获取第三方api信息
 * @url /api/lowcodecenter/api-center/{id}
 * @method get
 * @introduce --
 */
export type IapicenterId = {
  request: Record<string, any>

  response: MyJson1Core0
}

/**
 * 执行第三方api
 * @url /api/lowcodecenter/api-center/execute-api/{apiId}
 * @method post
 * @introduce --
 */
export type IexecuteapiApiId = {
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
 * 解析json参数对象
 * @url /api/lowcodecenter/api-center/analysis-json
 * @method post
 * @introduce --
 */
export type IapicenterAnalysisjson = {
  request: Record<string, any>

  response: MyJson1Core1
}

/**
 * 获取系统参数
 * @url /api/lowcodecenter/api-center/system-params
 * @method get
 * @introduce --
 */
export type IapicenterSystemparams = {
  request: Record<string, any>

  response: MyJson1Core2
}
