import { ModelAndView } from '../baseTypes'

/**
 * APP应用
 * @url /app/apply/app
 * @method get
 * @introduce --
 */
export type IapplyApp = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 元街品牌编码
     */
    brandCode?: string
    /**
     * @description 元街分类编码
     */
    categoryCode?: string
    /**
     * @description 学工号
     */
    jobNo?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 元街商品编码
     */
    prodCode?: string
    /**
     * @description schoolCode
     */
    schoolCode: string
    /**
     * @description 来源，默认易校园app：  越秀app：yxapp
     */
    source?: string
    /**
     * @description 支付宝appid
     */
    thirdAppid?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 姓名
     */
    userName?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * 驾校报名h5
 * @url /app/apply/app/drive
 * @method get
 * @introduce --
 */
export type IappDrive = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 元街品牌编码
     */
    brandCode?: string
    /**
     * @description 元街分类编码
     */
    categoryCode?: string
    /**
     * @description 学工号
     */
    jobNo?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 元街商品编码
     */
    prodCode?: string
    /**
     * @description schoolCode
     */
    schoolCode: string
    /**
     * @description 来源，默认易校园app：  越秀app：yxapp
     */
    source?: string
    /**
     * @description 支付宝appid
     */
    thirdAppid?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 姓名
     */
    userName?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * 统一入口,不分平台
 * @url /app/apply/entry
 * @method get
 * @introduce --
 */
export type IapplyEntry = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 元街品牌编码
     */
    brandCode?: string
    /**
     * @description 元街分类编码
     */
    categoryCode?: string
    /**
     * @description 学工号
     */
    jobNo?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 元街商品编码
     */
    prodCode?: string
    /**
     * @description schoolCode
     */
    schoolCode: string
    /**
     * @description 来源，默认易校园app：  越秀app：yxapp
     */
    source?: string
    /**
     * @description 支付宝appid
     */
    thirdAppid?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 姓名
     */
    userName?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * 微信应用
 * @url /app/apply/wechat
 * @method get
 * @introduce --
 */
export type IapplyWechat = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description openId
     */
    openid?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 学校编码
     */
    schoolCode?: string
    /**
     * @description 来源
     */
    source?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    /**
     * @description 学校编码
     */
    wxArea?: string
    /**
     * @description 学校编码
     */
    wxCode?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * APP应用
 * @url /apply/app
 * @method get
 * @introduce --
 */
export type IapplyApp1 = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 元街品牌编码
     */
    brandCode?: string
    /**
     * @description 元街分类编码
     */
    categoryCode?: string
    /**
     * @description 学工号
     */
    jobNo?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 元街商品编码
     */
    prodCode?: string
    /**
     * @description schoolCode
     */
    schoolCode: string
    /**
     * @description 来源，默认易校园app：  越秀app：yxapp
     */
    source?: string
    /**
     * @description 支付宝appid
     */
    thirdAppid?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 姓名
     */
    userName?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * 驾校报名h5
 * @url /apply/app/drive
 * @method get
 * @introduce --
 */
export type IappDrive1 = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 元街品牌编码
     */
    brandCode?: string
    /**
     * @description 元街分类编码
     */
    categoryCode?: string
    /**
     * @description 学工号
     */
    jobNo?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 元街商品编码
     */
    prodCode?: string
    /**
     * @description schoolCode
     */
    schoolCode: string
    /**
     * @description 来源，默认易校园app：  越秀app：yxapp
     */
    source?: string
    /**
     * @description 支付宝appid
     */
    thirdAppid?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 姓名
     */
    userName?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * 统一入口,不分平台
 * @url /apply/entry
 * @method get
 * @introduce --
 */
export type IapplyEntry1 = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 元街品牌编码
     */
    brandCode?: string
    /**
     * @description 元街分类编码
     */
    categoryCode?: string
    /**
     * @description 学工号
     */
    jobNo?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 元街商品编码
     */
    prodCode?: string
    /**
     * @description schoolCode
     */
    schoolCode: string
    /**
     * @description 来源，默认易校园app：  越秀app：yxapp
     */
    source?: string
    /**
     * @description 支付宝appid
     */
    thirdAppid?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 姓名
     */
    userName?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    projectId?: number
  }

  response: ModelAndView
}

/**
 * 微信应用
 * @url /apply/wechat
 * @method get
 * @introduce --
 */
export type IapplyWechat1 = {
  request: {
    /**
     * @description 校区编码
     */
    areaCode?: string
    /**
     * @description 应用编码
     */
    methodCode: string
    /**
     * @description openId
     */
    openId?: string
    /**
     * @description openId
     */
    openid?: string
    /**
     * @description 平台
     */
    platform?: string
    /**
     * @description 学校编码
     */
    schoolCode?: string
    /**
     * @description 来源
     */
    source?: string
    /**
     * @description unionid
     */
    unionid?: string
    /**
     * @description 加密后的用户ID
     */
    uuToken?: string
    /**
     * @description 学校编码
     */
    wxArea?: string
    /**
     * @description 学校编码
     */
    wxCode?: string
    projectId?: number
  }

  response: ModelAndView
}
