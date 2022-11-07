/** @type swagger(标注swagger生成的代码，请确认后修改) */
import { MyJson1Core16, MyJsonCore, MyJson1Core18 } from '../baseTypes'

/**
 * 获取短链接
 * @url /api/lowcodecenter/oss/oss-short-link
 * @method get
 * @introduce --
 */
export type IossOssshortlink = {
  request: Record<string, any>

  response: MyJson1Core16
}

/**
 * 检查是否开启了OSS
 * @url /api/lowcodecenter/oss/get-check-oss-configure
 * @method post
 * @introduce --
 */
export type IossGetcheckossconfigure = {
  request: Record<string, any>

  response: MyJsonCore
}

/**
 * 获取stsToken
 * @url /api/lowcodecenter/oss/aliyun-oss-sts-token
 * @method get
 * @introduce --
 */
export type IossAliyunossststoken = {
  request: Record<string, any>

  response: MyJson1Core18
}
