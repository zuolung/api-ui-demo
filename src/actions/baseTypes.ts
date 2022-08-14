/**
 * --
 */
export type ApiElectricAreaVO = {
  /**
   * 校区编码
   * @value
   */
  areaId: string

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type ApiElectricBuildingVO = {
  /**
   * 校区编码
   * @value
   */
  areaId: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type ApiElectricFloorVO = {
  /**
   * 校区编码
   * @value
   */
  areaId: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type ApiElectricOrderBackVO = {
  /**
   * 订单号状态  0、处理中 1、已完成
   * @value
   */
  orderStatus: number

  /**
   * 订单号状态提示信息
   * @value
   */
  orderStatusMsg: string
}

/**
 * --
 */
export type ApiElectricOrderVO = {
  /**
   * 校区ID
   * @value
   */
  areaId: number

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 第三方支付单号
   * @value
   */
  cpPayNo: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 电费订单号
   * @value
   */
  orderCode: string

  /**
   * 订单状态 0、处理中  1、已完成
   * @value
   */
  orderStatus: number

  /**
   * 充值金额
   * @value
   */
  rechargeAmount: number

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type ApiElectricPreOrderVO = {
  /**
   * 电费订单号
   * @value
   */
  orderCode: string
}

/**
 * --
 */
export type ApiElectricRoomRechargeTypeVO = {
  /**
   * 充值类型名称
   * @value
   */
  rechargeName: string

  /**
   * 充值类型
   * @value
   */
  rechargeType: string
}

/**
 * --
 */
export type ApiElectricRoomSurplusBaseVO = {
  /**
   * 校区编码
   * @value
   */
  areaId: number

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 充值类型列表
   * @rule 2
   */
  rechargeTypeList: ApiElectricRoomRechargeTypeVO[]

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 剩余量列表
   * @rule 2
   */
  surplusList: ApiElectricRoomSurplusVO[]
}

/**
 * --
 */
export type ApiElectricRoomSurplusVO = {
  /**
   * 剩余金额
   * @value
   */
  amount: number

  /**
   * 剩余补助
   * @value
   */
  subsidy: number

  /**
   * 剩余补助金额
   * @value
   */
  subsidyAmount: number

  /**
   * 剩余量
   * @value
   */
  surplus: number

  /**
   * 类型名称
   * @value
   */
  typeName: string
}

/**
 * --
 */
export type ApiElectricRoomVO = {
  /**
   * 校区编码
   * @value
   */
  areaId: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type ApiPayCenterListVO = {
  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 名单id
   * @value
   */
  listId: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 项目编码
   * @value
   */
  proId: number

  /**
   * 项目名称
   * @value
   */
  proName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 状态0未缴纳 2缴纳中 1已缴纳
   * @value
   */
  status: number

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * 年级
   * @value
   */
  userGrade: string

  /**
   * 身份证
   * @value
   */
  userIdCard: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 院系
   * @value
   */
  userXi: string

  /**
   * 专业
   * @value
   */
  userZhuan: string
}

/**
 * --
 */
export type ApiQueryOrderByNoVO = {
  /**
   * 订单号
   * @value
   */
  orderNo: string

  /**
   * 缴费状态 1等待支付 2支付成功 3支付失败 4订单关闭
   * @value
   */
  orderStatus: string

  /**
   * 支付单号
   * @value
   */
  payOrder: string

  /**
   * 支付时间
   * @value
   */
  payTime: string
}

/**
 * --
 */
export type ApiQueryOrderPageVO = {
  /**
   * 账户id
   * @value
   */
  accId: string

  /**
   * 缴费期间编码
   * @value
   */
  durationCode: string

  /**
   * 缴费期间名称
   * @value
   */
  durationName: string

  /**
   * 订单号
   * @value
   */
  orderNo: string

  /**
   * 缴费状态 1等待支付 2支付成功 3支付失败 4订单关闭
   * @value
   */
  orderStatus: string

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 支付单号
   * @value
   */
  payOrder: string

  /**
   * 支付时间
   * @value
   */
  payTime: string

  /**
   * 缴费项目ID
   * @value
   */
  proId: string

  /**
   * 缴费项目名称
   * @value
   */
  proName: string

  /**
   * 第三方待缴订单编号
   * @value
   */
  thirdSeqNo: string

  /**
   * 缴费年份
   * @value
   */
  thirdYear: string

  /**
   * 身份证号
   * @value
   */
  userIdCard: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string
}

/**
 * --
 */
export type AppJiaofeiListStatVO = {
  /**
   * 类型[院系、专业、班级]名称
   * @value
   */
  levelName: string

  /**
   * 已缴人数
   * @value
   */
  paidPerson: number

  /**
   * 已缴完成率字符串
   * @value
   */
  recordRateStr: string

  /**
   * 总人数
   * @value
   */
  totalPerson: number

  /**
   * 未缴人数
   * @value
   */
  unPayPerson: number
}

/**
 * --
 */
export type AppJiaofeiPayListVO = {
  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 是否合并支付 0否 1是
   * @value
   */
  isMergePay: number

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 名单id
   * @value
   */
  listId: number

  /**
   * 订单号
   * @value
   */
  orderId: number

  /**
   * 支付状态  0等待支付、2支付成功、3支付失败、-1订单关闭
   * @value
   */
  orderStatus: number

  /**
   * 支付状态
   * @value
   */
  orderStatusStr: string

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 缴费项目名称
   * @value
   */
  proName: string

  /**
   * 身份证号
   * @value
   */
  userIdCard: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string
}

/**
 * --
 */
export type AppJiaofeiProjectStatVO = {
  /**
   * 全部人数
   * @value
   */
  allPerson: number

  /**
   * 是否有数据权限 0否 1是
   * @value
   */
  isOrganization: number

  /**
   * 已缴金额
   * @value
   */
  paidAmount: number

  /**
   * 已缴人数
   * @value
   */
  paidPerson: number

  /**
   * 项目id
   * @value
   */
  projectId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 未缴人数
   * @value
   */
  unPayPerson: number
}

/**
 * --
 */
export type AuthJSAppParam = {
  /**
   * 应用id
   * @value
   */
  appid: string

  /**
   * 用户id
   * @value
   */
  id: number

  /**
   * 接口方法集合
   * @value
   */
  jsApiList: string

  /**
   * 随机数
   * @value
   */
  nonceStr: string

  /**
   * 内部鉴权token
   * @value
   */
  routeToken: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 密钥
   * @value
   */
  secret: string

  /**
   * shiroJID
   * @value
   */
  shiroJID: string

  /**
   * appid 的签名
   * @value
   */
  signature: string

  /**
   * 当前时间戳
   * @value
   */
  timestamp: string

  /**
   * 页面url
   * @value
   */
  url: string
}

/**
 * --
 */
export type AuthOrgVO = {
  /**
   *
   * @value
   */
  createTime: string

  /**
   *
   * @value
   */
  mobilePhone: string

  /**
   *
   * @value
   */
  userId: number

  /**
   *
   * @value
   */
  userName: string
}

/**
 * --
 */
export type AuthUserParam = {
  /**
   * 平台
   * @value
   */
  platform: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 第三方id
   * @value
   */
  thirdOpenid: string

  /**
   * 加密后的用户ID
   * @value
   */
  uuToken: string

  /**
   * token
   * @value
   */
  ymToken: string

  /**
   * 用户id
   * @value
   */
  ymUserId: number
}

/**
 * --
 */
export type AuthWechatmsgPushApiVO = {
  /**
   * 内容
   * @value
   */
  content: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value
   */
  createTimeStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 发送时间
   * @value
   */
  sendTimeStr: string

  /**
   * 推送方式
   * @value
   */
  sendTypeStr: string

  /**
   * 推送状态
   * @value
   */
  statusStr: string

  /**
   * 标题
   * @value
   */
  title: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 微信模板id
   * @value
   */
  wechatTemplateId: string
}

/**
 * --
 */
export type AuthWechatmsgSchoolApiVO = {
  /**
   * 详细内容
   * @value
   */
  content: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 行业
   * @value
   */
  industry: string

  /**
   * 示例图片
   * @value
   */
  logo: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 标题
   * @value
   */
  title: string

  /**
   * 微信模板id
   * @value
   */
  wechatTemplateId: string
}

/**
 * --
 */
export type BaseDataAppVO = {
  /**
   * 分类
   * @value
   */
  classifyCode: string

  /**
   * 描述
   * @value
   */
  description: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * key
   * @value
   */
  optionCode: string

  /**
   * value
   * @value
   */
  optionName: string

  /**
   * 排序
   * @value
   */
  sort: number
}

/**
 * --
 */
export type BaseDataDO = {
  /**
   *
   * @value
   */
  classifyCode: string

  /**
   *
   * @value
   */
  createId: number

  /**
   *
   * @value
   */
  createName: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  deleteFlag: number

  /**
   *
   * @value
   */
  description: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isDefault: number

  /**
   *
   * @value
   */
  optionCode: string

  /**
   *
   * @value
   */
  optionName: string

  /**
   *
   * @value
   */
  optionNameType: number

  /**
   *
   * @value
   */
  sort: number

  /**
   *
   * @value
   */
  updateId: number

  /**
   *
   * @value
   */
  updateName: string

  /**
   *
   * @value #datetime()
   */
  updateTime: string
}

/**
 * 月对账报表明细返回数据参数
 */
export type BillMonthReportInfoVO = {
  /**
   * 对账日期
   * @value
   */
  billDate: number

  /**
   * 一卡通到帐时间
   * @value #datetime()
   */
  billTime: string

  /**
   * 一卡通订单号
   * @value
   */
  cardNo: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 学号
   * @value
   */
  jobNo: string

  /**
   * 操作员
   * @value
   */
  optnum: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   * 支付方式
   * @value
   */
  payTypeName: string

  /**
   * 平台
   * @value
   */
  platform: string

  /**
   * 平台
   * @value
   */
  platformName: string

  /**
   * 对账结果描述
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校编码
   * @value
   */
  schoolCodeName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 微信等第三方订单号
   * @value
   */
  topNo: string

  /**
   * 支付金额
   * @value
   */
  tranMoney: number

  /**
   * 支付金额
   * @value
   */
  tranMoneyStr: string

  /**
   * 支付订单号
   * @value
   */
  tranNo: string

  /**
   * 一卡通账号
   * @value
   */
  userIdcard: string

  /**
   * 用户姓名
   * @value
   */
  userName: string
}

/**
 * 日月账单分析汇总信息VO
 */
export type BillReportDetailVO = {
  /**
   * 账单详情
   * @rule
   */
  billReport: BillReportVO

  /**
   * 账单分析结论
   * @rule
   */
  cardBillReportDetail: CardBillReportDetail

  /**
   * 支付渠道汇总
   * @rule 2
   */
  payVOList: BillReportPayVO[]

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * 对账报表明细返回数据参数
 */
export type BillReportInfoVO = {
  /**
   * 对账日期
   * @value
   */
  billDate: number

  /**
   * 一卡通到帐时间
   * @value #datetime()
   */
  billTime: string

  /**
   * 一卡通订单号
   * @value
   */
  cardNo: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 学号
   * @value
   */
  jobNo: string

  /**
   * 操作员
   * @value
   */
  optnum: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   * 支付方式
   * @value
   */
  payTypeName: string

  /**
   * 平台
   * @value
   */
  platform: string

  /**
   * 平台
   * @value
   */
  platformName: string

  /**
   * 一卡通流水
   * @value
   */
  recid: number

  /**
   * 对账结果描述
   * @value
   */
  remark: string

  /**
   * 报表id
   * @value
   */
  reportId: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolCodeName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 微信等第三方订单号
   * @value
   */
  topNo: string

  /**
   * 支付金额
   * @value
   */
  tranMoney: number

  /**
   * 支付金额
   * @value
   */
  tranMoneyStr: string

  /**
   * 支付订单号
   * @value
   */
  tranNo: string

  /**
   * 一卡通账号
   * @value
   */
  userIdcard: string

  /**
   * 用户姓名
   * @value
   */
  userName: string
}

/**
 * 对账报表付款方式返回数据参数
 */
export type BillReportPayVO = {
  /**
   * 金额
   * @value
   */
  amount: number

  /**
   * 金额
   * @value
   */
  amountStr: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 数量
   * @value
   */
  num: number

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   * 支付方式
   * @value
   */
  payTypeName: string
}

/**
 * 对账报表返回数据参数
 */
export type BillReportVO = {
  /**
   * 支付宝交易额
   * @value
   */
  alipay: number

  /**
   * 支付宝交易额
   * @value
   */
  alipayStr: string

  /**
   * 交易总金额
   * @value
   */
  amount: number

  /**
   * 交易总金额
   * @value
   */
  amountStr: string

  /**
   * 日期
   * @value
   */
  billDate: number

  /**
   * 账单状态
   * @value
   */
  billStatusName: string

  /**
   * 一卡通入账金额
   * @value
   */
  cardAmount: number

  /**
   * 一卡通入账金额
   * @value
   */
  cardAmountStr: string

  /**
   * 一卡通订单数
   * @value
   */
  cardNum: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 账单结束日期
   * @value
   */
  endDate: number

  /**
   * 易校园钱包交易额
   * @value
   */
  epay: number

  /**
   * 易校园钱包交易额
   * @value
   */
  epayStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 差额
   * @value
   */
  lessAmount: number

  /**
   * 差额
   * @value
   */
  lessAmountStr: string

  /**
   * 交易订单数
   * @value
   */
  num: number

  /**
   * 其他交易额
   * @value
   */
  other: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 账单开始日期
   * @value
   */
  startDate: number

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 账单生成状态
   * @value
   */
  statusName: string

  /**
   * 微信交易额
   * @value
   */
  weixin: number

  /**
   * 微信交易额
   * @value
   */
  weixinStr: string
}

/**
 * --
 */
export type BunkInfoVO = {
  /**
   * 床位编号
   * @value
   */
  bunkName: string

  /**
   * 是否已住人 0: 正常未住人  1:已住人
   * @value
   */
  status: number
}

/**
 * --
 */
export type CCBElectricApiRoomSurplusVO = {
  /**
   * 校区编码
   * @value
   */
  areaId: string

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 欠款金额
   * @value
   */
  arrearsAmount: number

  /**
   * 欠款显示名
   * @value
   */
  arrearsName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   *
   * @value
   */
  msg: string

  /**
   * 充值类型列表
   * @rule 2
   */
  rechargeTypeList: ApiElectricRoomRechargeTypeVO[]

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  sign: string

  /**
   *
   * @value
   */
  signType: string

  /**
   *
   * @value
   */
  status: string

  /**
   * 剩余量列表
   * @rule 2
   */
  surplusList: ApiElectricRoomSurplusVO[]
}

/**
 * --
 */
export type CCBElectricApiVO = {
  /**
   *
   * @value
   */
  msg: string
  rows: {}[]

  /**
   *
   * @value
   */
  sign: string

  /**
   *
   * @value
   */
  signType: string

  /**
   *
   * @value
   */
  status: string

  /**
   *
   * @value
   */
  total: string
}

/**
 * --
 */
export type CCBElectricRechargeVOResponse = {
  /**
   *
   * @value
   */
  cpPayNo: string

  /**
   *
   * @value
   */
  msg: string

  /**
   *
   * @value
   */
  orderCode: string

  /**
   *
   * @value
   */
  orderStatus: string

  /**
   *
   * @value
   */
  orderStatusMsg: string

  /**
   *
   * @value
   */
  sign: string

  /**
   *
   * @value
   */
  signType: string

  /**
   *
   * @value
   */
  status: string

  /**
   *
   * @value
   */
  tranNo: string
}

/**
 * 一卡通对账结果
 */
export type CardBillReportDetail = {
  /**
   * 重复充值金额
   * @value
   */
  dupAmount: number

  /**
   * 重复充值金额
   * @value
   */
  dupAmountStr: string

  /**
   * 重复充值数量
   * @value
   */
  dupNum: number

  /**
   * 异常充值金额
   * @value
   */
  errorAmount: number

  /**
   * 异常充值金额
   * @value
   */
  errorAmountStr: string

  /**
   * 异常充值数量
   * @value
   */
  errorNum: number

  /**
   * 未到帐金额
   * @value
   */
  noAmount: number

  /**
   * 未到帐金额
   * @value
   */
  noAmountStr: string

  /**
   * 未到帐数量
   * @value
   */
  noNum: number

  /**
   * 正常金额
   * @value
   */
  normalAmount: number

  /**
   * 正常金额
   * @value
   */
  normalAmountStr: string

  /**
   * 正常数量
   * @value
   */
  normalNum: number

  /**
   * 跨天账金额
   * @value
   */
  spanAmount: number

  /**
   * 跨天账金额
   * @value
   */
  spanAmountStr: string

  /**
   * 跨天账数量
   * @value
   */
  spanNum: number
}

/**
 * --
 */
export type CardInfoVO = {
  /**
   * 是否允许消费：1允许 0不允许
   * @value
   */
  allowPayment: string

  /**
   * 是否允许查询：1允许 0不允许
   * @value
   */
  allowQuery: string

  /**
   * 是否允许充值：1允许 0不允许
   * @value
   */
  allowRecharge: string

  /**
   * 账户余额
   * @value
   */
  cardMoney: string

  /**
   * 卡状态1正常，2挂失，3冻结
   * @value
   */
  cardState: string

  /**
   * 身份名称
   * @value
   */
  clsName: string

  /**
   * 班级
   * @value
   */
  grade: string

  /**
   * 身份证
   * @value
   */
  idCard: string

  /**
   * 手机号
   * @value
   */
  phone: string

  /**
   * 真实姓名
   * @value
   */
  realName: string

  /**
   * 可充值金额,格式是XX.XX元
   * @value
   */
  rechargeableAmount: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 返回状态
   * @value
   */
  resultCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别
   * @value
   */
  sex: string

  /**
   * 学号
   * @value
   */
  studentNumber: string

  /**
   * 一卡通卡号
   * @value
   */
  userCard: string
}

/**
 * --
 */
export type CenterAllDashboardVO = {
  /**
   * 今日打卡情况
   * @value
   */
  clockInStr: string

  /**
   * 是否展示教职工模块 0:是 1:否
   * @value
   */
  isShowStaffDepartment: number

  /**
   * 学生人数地区分布
   * @value
   */
  schoolAreaStr: string

  /**
   * 今日健康状况
   * @value
   */
  schoolHealthStr: string

  /**
   * 师生总数
   * @value
   */
  schoolTotalNumStr: string

  /**
   * 本校疫情看盘
   * @value
   */
  schoolYiqingStr: string

  /**
   * 学生部门打卡率
   * @value
   */
  studentDepartClockRatioStr: string

  /**
   * 学生部门疫情
   * @value
   */
  studentDepartYiqingStr: string

  /**
   * 职工部门打卡率
   * @value
   */
  teacherDepartClockRatioStr: string

  /**
   * 职工部门疫情
   * @value
   */
  teacherDepartYiqingStr: string

  /**
   * 每日打卡数据
   * @value
   */
  totalClockInStr: string

  /**
   * 每日趋势图
   * @value
   */
  totalYiqingStr: string
}

/**
 * --
 */
export type CenterAppJiaofeiAmountVO = {
  /**
   * 未缴金额
   * @value
   */
  arrearageAmount: number

  /**
   * 已缴金额
   * @value
   */
  payAmount: number

  /**
   * 应收金额
   * @value
   */
  receivableAmount: number
}

/**
 * --
 */
export type CenterAppJiaofeiDetialVO = {
  /**
   * 缴费开始时间
   * @value #datetime()
   */
  beginDate: string

  /**
   * 自定义缴费方式,二级分类不为空时，可能存在金额分配信息
   * @rule 2
   */
  centerJiaofeiProDicVo: CenterJiaofeiProDicVO[]

  /**
   * 关闭原因
   * @value
   */
  closeTips: string

  /**
   * 部门ID
   * @value
   */
  deptId: number

  /**
   * 二级分类ID
   * @value
   */
  dicId: number

  /**
   * 缴费结束时间
   * @value #datetime()
   */
  endDate: string

  /**
   * 顶部图片链接
   * @value
   */
  headPicLink: string

  /**
   * 顶部图片
   * @value
   */
  headPicUrl: string

  /**
   * 导入名单用户证件号 0身份证 1学号
   * @value
   */
  importUserType: number

  /**
   * 是否可多次提交 0否 1是
   * @value
   */
  isMorePay: number

  /**
   * 是否需要班级 0否 1是
   * @value
   */
  isNeedClass: number

  /**
   * 是否需要身份证号 0否 1是
   * @value
   */
  isNeedIdcard: number

  /**
   * 是否需要姓名 0否 1是
   * @value
   */
  isNeedName: number

  /**
   * 是否需要手机号 0否 1是
   * @value
   */
  isNeedPhone: number

  /**
   * 是否需要协议 0否 1是
   * @value
   */
  isNeedProtocol: number

  /**
   * 备注是否必填 0否 1是
   * @value
   */
  isNeedRemark: number

  /**
   * 是否需要学号 0否 1是
   * @value
   */
  isNeedUserno: number

  /**
   * 无需支付 0否 1是
   * @value
   */
  isNoPay: number

  /**
   * 是否允许充值0否1是
   * @value
   */
  isOpen: number

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 缴费方式 0自定义 1导入
   * @value
   */
  jiaofeiMethod: number

  /**
   * 最大金额
   * @value
   */
  maxAmount: number

  /**
   * 最小金额
   * @value
   */
  minAmount: number

  /**
   * 公告
   * @value
   */
  notice: string

  /**
   * 英文公告
   * @value
   */
  noticeEn: string

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 项目ID
   * @value
   */
  projectId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 项目英文名称
   * @value
   */
  projectNameEn: string

  /**
   * 协议内容
   * @value
   */
  protocolContent: string

  /**
   * 协议标题
   * @value
   */
  protocolTitle: string

  /**
   * 协议标题英文
   * @value
   */
  protocolTitleEn: string

  /**
   * 备注提示语
   * @value
   */
  remarkMsg: string

  /**
   * 备注提示语英文
   * @value
   */
  remarkMsgEn: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 温馨提示
   * @value
   */
  tips: string

  /**
   * 英文温馨提示
   * @value
   */
  tipsEn: string

  /**
   * 分类ID
   * @value
   */
  typeId: number
}

/**
 * --
 */
export type CenterAppJiaofeiListVO = {
  /**
   * 未缴金额
   * @value
   */
  arrearageAmount: number

  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 部门id
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 部门名称英文
   * @value
   */
  deptNameEn: string

  /**
   * 二级分类费用
   * @rule 2
   */
  dicList: CenterJiaofeiProDicVO[]

  /**
   * 学历
   * @value
   */
  education: string

  /**
   * 缴费名单ID
   * @value
   */
  id: number

  /**
   * 身份证)
   * @value
   */
  idCard: string

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 是否过期 0否 1是
   * @value
   */
  isTimeOut: number

  /**
   * 最大金额
   * @value
   */
  maxAmount: number

  /**
   * 最小金额
   * @value
   */
  minAmount: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 项目图标
   * @value
   */
  projectIcon: string

  /**
   * 项目编码
   * @value
   */
  projectId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 项目英文名称
   * @value
   */
  projectNameEn: string

  /**
   * 应收金额
   * @value
   */
  receivableAmount: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 性别
   * @value
   */
  sex: string

  /**
   * 状态0未缴纳 2缴纳中 1已缴纳
   * @value
   */
  status: number

  /**
   * 学制
   * @value
   */
  studyCount: number

  /**
   * 入学年份
   * @value
   */
  studyYear: string

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * 年级
   * @value
   */
  userGrade: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string

  /**
   * 院系
   * @value
   */
  userXi: string

  /**
   * 专业
   * @value
   */
  userZhuan: string
}

/**
 * --
 */
export type CenterAppJiaofeiPayableVO = {
  /**
   * 导入名单
   * @rule 2
   */
  importPayableList: CenterAppJiaofeiListVO[]

  /**
   * 第三方应付款列表
   * @rule 2
   */
  thirdPayableList: CenterAppJiaofeiThirdPayableVO[]
}

/**
 * --
 */
export type CenterAppJiaofeiThirdPayableVO = {
  /**
   * 易达帐户ID
   * @value
   */
  accId: string

  /**
   * 友财入账银行卡号
   * @value
   */
  bankAccount: string

  /**
   * 收费期间代码
   * @value
   */
  durationCode: string

  /**
   * 收费期间名称
   * @value
   */
  durationName: string

  /**
   * 扩展字段
   * @value
   */
  extJson: string

  /**
   * 友财费用Id
   * @value
   */
  feeId: string

  /**
   * 友财费用类型 0:必收 1:选收 2:学分学费
   * @value
   */
  feeType: number

  /**
   * 友财是否允许部分缴费
   * @value
   */
  isAllowPartPay: boolean

  /**
   * 是否合并缴费
   * @value
   */
  isMergePay: boolean

  /**
   * 友财是否必缴项目
   * @value
   */
  isMustPay: boolean

  /**
   * 友财已缴金额
   * @value
   */
  paid: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: string

  /**
   * 项目编码
   * @value
   */
  proId: string

  /**
   * 项目名称
   * @value
   */
  proName: string

  /**
   * 项目图标
   * @value
   */
  projectIcon: string

  /**
   * 接口类型 0贵阳易达恒志 1兰大缴费 2工贸缴费 3天津学院友财缴费
   * @value
   */
  thirdType: number

  /**
   * 统一接口id
   * @value
   */
  unifiedApiId: number

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学生号
   * @value
   */
  userNo: string

  /**
   *
   * @value
   */
  verificationCode: string

  /**
   * 友财收费年度
   * @value
   */
  year: string
}

/**
 * --
 */
export type CenterAppJiaofeiUnpayVO = {
  /**
   * 金额
   * @value
   */
  amount: number

  /**
   * 笔数
   * @value
   */
  count: number
}

/**
 * --
 */
export type CenterAppJiaofeiUserVO = {
  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 证件号
   * @value
   */
  userNo: string
}

/**
 * --
 */
export type CenterCpBillCheckResultVO = {
  /**
   * 差额
   * @value
   */
  balance: string

  /**
   * 差额标志（大于0则账单总金额比实际总金额大，反之则反之）
   * @value
   */
  balanceFlag: number

  /**
   * 平台交易金额
   * @value
   */
  billAmount: string

  /**
   * 平台交易笔数
   * @value
   */
  billCount: number

  /**
   * 对账总单ID
   * @value
   */
  billId: number

  /**
   * 对账类型
   * @value
   */
  checkBillTypeStr: string

  /**
   * 异常账单笔数
   * @value
   */
  errorBillCount: number

  /**
   * 实际交易金额
   * @value
   */
  realBillAmount: string

  /**
   * 实际交易笔数
   * @value
   */
  realBillCount: number
}

/**
 * --
 */
export type CenterCpBillDetailImportVO = {
  /**
   * 上传失败条数
   * @value
   */
  errorCount: number

  /**
   * 详细错误信息
   * @value
   */
  errorMsg: string[]

  /**
   * 缓存key
   * @value
   */
  key: string

  /**
   * 错误提示
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  success: boolean

  /**
   * 总条数
   * @value
   */
  totalCount: number

  /**
   * 实际交易金额
   * @value
   */
  totalMoney: string
}

/**
 * --
 */
export type CenterCpBillDetailVO = {
  /**
   * 对账结果
   * @value
   */
  checkResult: string

  /**
   * 商户名称
   * @value
   */
  cpName: string

  /**
   * 错误类别，枚举
   * @value
   */
  errorType: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学号
   * @value
   */
  jobNo: string

  /**
   * 实际交易金额
   * @value
   */
  realTranMoney: string

  /**
   * 状态，0正常，1异常，2异常已处理
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 官方订单编号
   * @value
   */
  topTranNo: string

  /**
   * 交易金额
   * @value
   */
  tranMoney: string

  /**
   * 交易订单编号
   * @value
   */
  tranNo: string

  /**
   * 学生姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CenterCpBillPayTypeVO = {
  /**
   * 支付方式
   * @value
   */
  id: string

  /**
   * 是否支持导入对账（0是1否）
   * @value
   */
  spImport: number

  /**
   * 支付方式名称
   * @value
   */
  text: string
}

/**
 * --
 */
export type CenterCustomConfigVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 类型1 、电费 2、水费 3、常工应用 4、网费 5、生活缴费
   * @value
   */
  customType: number

  /**
   * 类型
   * @value
   */
  customTypeStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否自定义金额  0、是 1、否
   * @value
   */
  isCustomAmount: number

  /**
   * 是否自定义金额
   * @value
   */
  isCustomAmountStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterCustomElectricConfigVO = {
  /**
   * 楼栋显示名
   * @value
   */
  buildingShowName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 充值金额起始（元）
   * @value
   */
  customAmountBegin: number

  /**
   * 充值金额结束（元）
   * @value
   */
  customAmountEnd: number

  /**
   * 自定义类型1、电费   2、水费 3、常工应用 4、网费 5、应用缴费
   * @value
   */
  customType: number

  /**
   * 自定义类型1、电费   2、水费 3、常工应用 4、网费 5、应用缴费
   * @value
   */
  customTypeStr: string

  /**
   * 楼层显示名
   * @value
   */
  floorShowName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否自定义金额 0、是 1、否
   * @value
   */
  isCustomAmount: number

  /**
   * 是否自定义金额
   * @value
   */
  isCustomAmountStr: string

  /**
   * 公告
   * @value
   */
  notice: string

  /**
   * 充值金额10|100|200
   * @value
   */
  rechargeAmount: string

  /**
   * 房间显示名
   * @value
   */
  roomShowName: string

  /**
   * 状态： 0、未启用 2、已启用
   * @value
   */
  status: number

  /**
   * 标题显示名称
   * @value
   */
  titleShowName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区显示名
   * @value
   */
  zoneShowName: string
}

/**
 * --
 */
export type CenterIndexTotalDataVO = {
  /**
   * 平均交易金额
   * @value
   */
  avgTranMoney: string

  /**
   * 日期,yyyy-MM-dd
   * @value
   */
  day: string

  /**
   * 交易总笔数
   * @value
   */
  totalCount: number

  /**
   *  费率总金额
   * @value
   */
  totalFeeMoney: string

  /**
   * 支付总金额
   * @value
   */
  totalRealMoney: string

  /**
   * 红包总金额
   * @value
   */
  totalRedbagMoney: string

  /**
   * 退款笔数
   * @value
   */
  totalRefundCount: number

  /**
   * 退款金额
   * @value
   */
  totalRefundMoney: string

  /**
   * 交易总金额
   * @value
   */
  totalTranMoney: string
}

/**
 * --
 */
export type CenterJiaofeiAddedValueVO = {
  /**
   * 编码
   * @value
   */
  code: string

  /**
   * 名称
   * @value
   */
  name: string
}

/**
 * --
 */
export type CenterJiaofeiBatchRefundFormVO = {
  /**
   * 批量退款详情
   * @value
   */
  batchInfo: string

  /**
   * 退款名称
   * @value
   */
  batchName: string

  /**
   * 处理状态
   * @value
   */
  batchStatus: number

  /**
   * 处理状态
   * @value
   */
  batchStatusStr: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 退款总金额
   * @value
   */
  totalAmount: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiBatchRefundVO = {
  /**
   * 批量退款单id
   * @value
   */
  batchFormId: number

  /**
   * 批量退款单名称
   * @value
   */
  batchFormName: string

  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 生成退款单 0否 1是
   * @value
   */
  billStatus: number

  /**
   *
   * @value
   */
  billStatusName: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建人名称
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门编码
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  idCard: string

  /**
   * 名单id
   * @value
   */
  listId: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 项目编号
   * @value
   */
  projectId: number

  /**
   * 缴费项目
   * @value
   */
  projectName: string

  /**
   * 退款金额
   * @value
   */
  refundAmount: number

  /**
   * 退款方式
   * @value
   */
  refundMethod: string

  /**
   * 退款方式
   * @value
   */
  refundMethodStr: string

  /**
   * 退款时间
   * @value #datetime()
   */
  refundTime: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 退款状态0待处理 1退款失败 2退款成功
   * @value
   */
  status: number

  /**
   * 退款状态
   * @value
   */
  statusName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string
}

/**
 * --
 */
export type CenterJiaofeiBillCustomVO = {
  /**
   * 项目批次
   * @value
   */
  batchNum: string

  /**
   * 票据样式:common、通用样式 xiaolongren、小龙人
   * @value
   */
  billStyle: string

  /**
   * 票据样式
   * @value
   */
  billStyleName: string

  /**
   * 自定义票据编码
   * @value
   */
  billTemplateCode: string

  /**
   * 自定义票据模板id
   * @value
   */
  billTemplateId: number

  /**
   * 开票时间
   * @value #datetime()
   */
  billingDate: string

  /**
   * 缴费时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 金额
   * @value
   */
  payAmount: number

  /**
   * 缴费金额(大写)
   * @value
   */
  payAmountZW: string

  /**
   * 支付方式
   * @value
   */
  payMethodStr: string

  /**
   * 缴费项目名称
   * @value
   */
  proName: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * 身份证
   * @value
   */
  userIdCard: string

  /**
   * 交款人姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string
}

/**
 * --
 */
export type CenterJiaofeiBillItemVO = {
  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 票据id
   * @value
   */
  billId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  idCard: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  orderId: number

  /**
   * 金额
   * @value
   */
  paymentAmount: number

  /**
   *
   * @value
   */
  paymentAmountZn: string

  /**
   * 项目id
   * @value
   */
  proId: string

  /**
   *
   * @value
   */
  proName: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type CenterJiaofeiBillTemplateVO = {
  /**
   * 票据内容
   * @value
   */
  content: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 高度:cm
   * @value
   */
  height: number

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 比例
   * @value
   */
  scale: number

  /**
   * 状态：0、未启用 1、已启用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 模板名称
   * @value
   */
  templateName: string

  /**
   * 宽度:cm
   * @value
   */
  width: number
}

/**
 * --
 */
export type CenterJiaofeiBillVO = {
  /**
   * 会计
   * @value
   */
  accountant: string

  /**
   * 票据编号
   * @value
   */
  billNo: string

  /**
   * 票据样式:common、通用样式 xiaolongren、小龙人
   * @value
   */
  billStyle: string

  /**
   * 票据样式
   * @value
   */
  billStyleName: string

  /**
   * 自定义票据编码
   * @value
   */
  billTemplateCode: string

  /**
   * 自定义票据模板id
   * @value
   */
  billTemplateId: number

  /**
   * 自定义票据模板名称
   * @value
   */
  billTemplateName: string

  /**
   * 开票时间
   * @value #datetime()
   */
  billingDate: string

  /**
   * 出纳
   * @value
   */
  cashier: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份号
   * @value
   */
  idCard: string

  /**
   * 项目列表
   * @rule 2
   */
  items: CenterJiaofeiBillItemVO[]

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 金额
   * @value
   */
  paymentAmount: number

  /**
   * 金额中文
   * @value
   */
  paymentAmountZn: string

  /**
   * 交款人
   * @value
   */
  paymentUnit: string

  /**
   * 项目名称
   * @value
   */
  proName: string

  /**
   * 经办人
   * @value
   */
  receivingPerson: string

  /**
   * 收款单位
   * @value
   */
  receivingUnit: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 班级
   * @value
   */
  userClass: string
}

/**
 * --
 */
export type CenterJiaofeiConfigVO = {
  /**
   * 支付商户编码
   * @value
   */
  cpCode: string

  /**
   * 支付商户密钥
   * @value
   */
  cpKey: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门id
   * @value
   */
  deptId: number

  /**
   *
   * @value
   */
  deptName: string

  /**
   * 收费项目id
   * @value
   */
  feeItemId: string

  /**
   * 查找项值
   * @value
   */
  findKey: string

  /**
   * 缴费配置ID
   * @value
   */
  id: number

  /**
   * 是否合并缴费
   * @value
   */
  isMergePay: number

  /**
   * 易达 多accid 0否 1是
   * @value
   */
  isMultiAccid: number

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 缴费类型
   * @value
   */
  paymentType: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 商户编码
   * @value
   */
  thirdCode: string

  /**
   * ID
   * @value
   */
  thirdId: string

  /**
   * 密钥
   * @value
   */
  thirdKey: string

  /**
   * 商户名称
   * @value
   */
  thirdName: string

  /**
   * 端口
   * @value
   */
  thirdPort: string

  /**
   * 密码
   * @value
   */
  thirdPwd: string

  /**
   * 接口地址
   * @value
   */
  thirdUrl: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiDeptLinkProjectVO = {
  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 有权限
   * @value
   */
  hasRight: boolean

  /**
   * 部门id
   * @value
   */
  id: number

  /**
   * 项目集合
   * @rule 2
   */
  projectList: CenterJiaofeiLinkProjectVO[]
}

/**
 * --
 */
export type CenterJiaofeiDeptVO = {
  /**
   * 商户编号
   * @value
   */
  cpCode: string

  /**
   * 商户密钥
   * @value
   */
  cpKey: string

  /**
   * 商户名称
   * @value
   */
  cpName: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门负责人姓名
   * @value
   */
  deptHeads: string

  /**
   * 部门负责人手机号
   * @value
   */
  deptHeadsTel: string

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 部门名称英文
   * @value
   */
  deptNameEn: string

  /**
   * 部门ID
   * @value
   */
  id: number

  /**
   * 模式：1、迎新
   * @value
   */
  mode: number

  /**
   * 模式
   * @value
   */
  modeStr: string

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 部门状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiDictionarySonVO = {
  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 英文名称
   * @value
   */
  dicNameEn: string

  /**
   * id
   * @value
   */
  id: number
}

/**
 * --
 */
export type CenterJiaofeiDictionaryVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 副选项数量
   * @value
   */
  dicCount: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 二级分类英文名称
   * @value
   */
  dicNameEn: string

  /**
   * 二级分类ID
   * @value
   */
  id: number

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   * 二级分类父ID
   * @value
   */
  parentId: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   *
   * @rule 2
   */
  sonDictionaryDo: CenterJiaofeiDictionarySonVO[]

  /**
   * 二级分类状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiInvoiceCodeVO = {
  /**
   * 增值税特殊管理
   * @value
   */
  addedValueTax: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 含税标识 0不含税 1含税
   * @value
   */
  hasTax: number

  /**
   * 含税标识
   * @value
   */
  hasTaxName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 开票信息id
   * @value
   */
  invoiceInfoId: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 优惠政策 0不使用 1使用
   * @value
   */
  policyFlag: number

  /**
   * 优惠政策
   * @value
   */
  policyFlagName: string

  /**
   * 项目编号
   * @value
   */
  proId: string

  /**
   * 商品名称
   * @value
   */
  proName: string

  /**
   * 项目来源
   * @value
   */
  proSource: string

  /**
   * 项目来源
   * @value
   */
  proSourceName: string

  /**
   * 商品税务编码
   * @value
   */
  proTaxCode: string

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 税率
   * @value
   */
  taxRate: number

  /**
   * 开票类别编码
   * @value
   */
  taxTypeCode: string

  /**
   * 开票类别名称
   * @value
   */
  taxTypeName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiInvoiceConfigVO = {
  /**
   * appid
   * @value
   */
  appId: string

  /**
   * 秘钥
   * @value
   */
  appKey: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 开票期间（天）
   * @value
   */
  invoiceDay: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 开票系统 0航天 1百旺 3 博思
   * @value
   */
  thirdType: number

  /**
   * 开票系统名称
   * @value
   */
  thirdTypeName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 请求地址
   * @value
   */
  url: string
}

/**
 * --
 */
export type CenterJiaofeiInvoiceInfoDO = {
  /**
   * 地址
   * @value
   */
  address: string

  /**
   * 开户行
   * @value
   */
  bank: string

  /**
   * 银行账号
   * @value
   */
  bankAccount: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 删除标识 0正常 1删除
   * @value
   */
  deleteFlag: number

  /**
   * 开票人
   * @value
   */
  drawer: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 开票限额
   * @value
   */
  invoiceLimit: number

  /**
   * 收款人
   * @value
   */
  payee: string

  /**
   * 电话
   * @value
   */
  phone: string

  /**
   * 复核人
   * @value
   */
  reviewer: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 纳税人识别号
   * @value
   */
  taxpayerId: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiInvoiceInfoVO = {
  /**
   * 地址
   * @value
   */
  address: string

  /**
   * 开户行
   * @value
   */
  bank: string

  /**
   * 银行账号
   * @value
   */
  bankAccount: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 开票人
   * @value
   */
  drawer: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 开票限额
   * @value
   */
  invoiceLimit: number

  /**
   * 开票限额
   * @value
   */
  invoiceLimitName: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 收款人
   * @value
   */
  payee: string

  /**
   * 电话
   * @value
   */
  phone: string

  /**
   * 复核人
   * @value
   */
  reviewer: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 纳税人识别号
   * @value
   */
  taxpayerId: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiInvoiceItemVO = {
  /**
   * 增值税特殊管理
   * @value
   */
  addedValueTax: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 扣除额
   * @value
   */
  deduction: string

  /**
   * 含税标志
   * @value
   */
  hasTax: number

  /**
   * 含税标志
   * @value
   */
  hasTaxName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 发票id
   * @value
   */
  invoiceId: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   *  订单id
   * @value
   */
  orderId: number

  /**
   * 优惠政策标识
   * @value
   */
  policyFlag: number

  /**
   * 优惠政策标识
   * @value
   */
  policyFlagName: string

  /**
   * 商品金额
   * @value
   */
  proAmount: number

  /**
   * 商品价税金额
   * @value
   */
  proAmountTax: number

  /**
   * 商品编码
   * @value
   */
  proCode: string

  /**
   * 商品折扣行编号
   * @value
   */
  proDiscountCode: string

  /**
   * 商品名称
   * @value
   */
  proName: string

  /**
   * 商品行性质
   * @value
   */
  proNature: string

  /**
   * 商品行性质
   * @value
   */
  proNatureName: string

  /**
   * 商品数量
   * @value
   */
  proNum: number

  /**
   * 商品单价
   * @value
   */
  proPrice: number

  /**
   * 商品税率
   * @value
   */
  proRate: number

  /**
   * 商品简码
   * @value
   */
  proSimpleCode: string

  /**
   * 商品规格型号
   * @value
   */
  proSpecification: string

  /**
   * 商品税额
   * @value
   */
  proTax: number

  /**
   * 商品计量单位
   * @value
   */
  proUnit: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 零税率标识
   * @value
   */
  zeroRateFlag: number
}

/**
 * --
 */
export type CenterJiaofeiInvoiceOrderVO = {
  /**
   * 购买方
   * @value
   */
  buyer: string

  /**
   * 购买方地址
   * @value
   */
  buyerAddress: string

  /**
   * 购买方开户行
   * @value
   */
  buyerBank: string

  /**
   * 购买方银行账号
   * @value
   */
  buyerBankAccount: string

  /**
   * 购买方识别号
   * @value
   */
  buyerDuty: string

  /**
   * 购买方电话
   * @value
   */
  buyerPhone: string

  /**
   * 购买方类型
   * @value
   */
  buyerType: number

  /**
   * 购买方类型
   * @value
   */
  buyerTypeName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 开票人
   * @value
   */
  drawer: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 校验码
   * @value
   */
  invoiceCheckCode: string

  /**
   * 发票代码
   * @value
   */
  invoiceCode: string

  /**
   * 发票类型
   * @value
   */
  invoiceFlag: number

  /**
   * 发票类型
   * @value
   */
  invoiceFlagName: string

  /**
   * 发票号码
   * @value
   */
  invoiceNo: string

  /**
   * 发票密文
   * @value
   */
  invoiceSign: string

  /**
   * 签章日期
   * @value #datetime()
   */
  invoiceSignTime: string

  /**
   * 开票时间
   * @value #datetime()
   */
  invoiceTime: string

  /**
   * 下载地址
   * @value
   */
  invoiceUrl: string

  /**
   * 发票过期 0否 1是
   * @value
   */
  isOverTime: number

  /**
   * 明细数量
   * @value
   */
  itemCount: number

  /**
   * 明细
   * @rule 2
   */
  itemList: CenterJiaofeiInvoiceItemVO[]

  /**
   * 明细名称
   * @value
   */
  itemName: string

  /**
   * 机器编码
   * @value
   */
  machineCode: string

  /**
   * openid
   * @value
   */
  openId: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 收款人
   * @value
   */
  payee: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 复核人
   * @value
   */
  reviewer: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 销售方
   * @value
   */
  seller: string

  /**
   * 销售人地址
   * @value
   */
  sellerAddress: string

  /**
   * 销售方开户行
   * @value
   */
  sellerBank: string

  /**
   * 销售方银行账号
   * @value
   */
  sellerBankAccount: string

  /**
   * 纳税人识别号
   * @value
   */
  sellerDuty: string

  /**
   * 销售方电话
   * @value
   */
  sellerPhone: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 开票系统
   * @value
   */
  thirdType: number

  /**
   * 开票系统
   * @value
   */
  thirdTypeName: string

  /**
   * 总金额
   * @value
   */
  totalAmount: number

  /**
   * 价税合计
   * @value
   */
  totalAmountTax: number

  /**
   * 价税合计中文
   * @value
   */
  totalAmountTaxZn: string

  /**
   * 总税额
   * @value
   */
  totalTax: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 用户id
   * @value
   */
  userId: number
}

/**
 * --
 */
export type CenterJiaofeiInvoiceSourceVO = {
  /**
   * 编码
   * @value
   */
  code: string

  /**
   * 名称
   * @value
   */
  name: string
}

/**
 * --
 */
export type CenterJiaofeiInvoiceTotalVO = {
  /**
   * 总金额
   * @value
   */
  totalAmount: number

  /**
   * 总税额
   * @value
   */
  totalTax: number
}

/**
 * --
 */
export type CenterJiaofeiInvoiceTypeVO = {
  /**
   * 地址
   * @value
   */
  address: string

  /**
   * 开户行
   * @value
   */
  bank: string

  /**
   * 银行账号
   * @value
   */
  bankAccount: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 税号
   * @value
   */
  dutyNum: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 发票类型
   * @value
   */
  invoiceFlag: number

  /**
   * 发票类型
   * @value
   */
  invoiceFlagName: string

  /**
   * 是否默认
   * @value
   */
  isDefault: number

  /**
   * 是否默认
   * @value
   */
  isDefaultName: string

  /**
   * openid
   * @value
   */
  openId: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 电话
   * @value
   */
  phone: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 发票抬头
   * @value
   */
  userName: string

  /**
   * 抬头类型
   * @value
   */
  userType: number

  /**
   * 抬头类型
   * @value
   */
  userTypeName: string
}

/**
 * --
 */
export type CenterJiaofeiLinkProjectVO = {
  /**
   * 有权限
   * @value
   */
  hasRight: boolean

  /**
   * 缴费项目ID
   * @value
   */
  id: number

  /**
   * 项目名称
   * @value
   */
  projectName: string
}

/**
 * --
 */
export type CenterJiaofeiListCountVO = {
  /**
   * 已支付
   * @value
   */
  payed: number

  /**
   * 支付中
   * @value
   */
  paying: number

  /**
   * 总数
   * @value
   */
  total: number

  /**
   * 未支付
   * @value
   */
  unPay: number
}

/**
 * --
 */
export type CenterJiaofeiListReductionVO = {
  /**
   * 数量
   * @value
   */
  count: number

  /**
   * 金额
   * @value
   */
  payAmount: number

  /**
   * 优惠类型 0无优惠 1减免 2助学贷款
   * @value
   */
  reductionType: number
}

/**
 * --
 */
export type CenterJiaofeiListVO = {
  /**
   * 未缴金额
   * @value
   */
  arrearageAmount: number

  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 是否删除 0否 1是
   * @value
   */
  deleteFlag: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 学历
   * @value
   */
  education: string

  /**
   * 缴费名单ID
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  idCard: string

  /**
   * 导入状态0异常 1正常 2重复
   * @value
   */
  importStatus: number

  /**
   *
   * @value
   */
  listSource: number

  /**
   * 贷款金额
   * @value
   */
  loanAmount: number

  /**
   * 邮箱
   * @value
   */
  mail: string

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 权限操作
   * @value
   */
  operation: string

  /**
   * 原金额
   * @value
   */
  originalAmount: number

  /**
   * 已缴金额
   * @value
   */
  paidAmount: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 支付方式
   * @value
   */
  payMethodStr: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 项目编码
   * @value
   */
  projectId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 减免金额
   * @value
   */
  reductionAmount: number

  /**
   * 优惠类型 0无优惠 1减免 2助学贷款
   * @value
   */
  reductionType: number

  /**
   * 优惠类型
   * @value
   */
  reductionTypeStr: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别
   * @value
   */
  sex: string

  /**
   * 状态0未缴纳 2缴纳中 1已缴纳
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   *
   * @value
   */
  studentId: number

  /**
   * 学制
   * @value
   */
  studyCount: number

  /**
   * 入学年份
   * @value
   */
  studyYear: string

  /**
   * 学期
   * @value
   */
  term: number

  /**
   * 学期
   * @value
   */
  termStr: string

  /**
   * 证件号码
   * @value
   */
  uniqueId: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * 基础权限-班级ID
   * @value
   */
  userClassId: string

  /**
   * 年级
   * @value
   */
  userGrade: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string

  /**
   * 院系
   * @value
   */
  userXi: string

  /**
   * 专业
   * @value
   */
  userZhuan: string

  /**
   *
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type CenterJiaofeiOrderVO = {
  /**
   * 账户id
   * @value
   */
  accId: string

  /**
   *
   * @value
   */
  apiId: number

  /**
   * 未交金额
   * @value
   */
  arrearageAmount: number

  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 票据编号
   * @value
   */
  billNo: string

  /**
   * 创建人名称
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门ID
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 二级分类ID
   * @value
   */
  dicId: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 二级分类副选项ID
   * @value
   */
  dicSonId: number

  /**
   * 二级分类副选项名称
   * @value
   */
  dicSonName: string

  /**
   * 二级分类副选项英文名称
   * @value
   */
  dicSonNameEn: string

  /**
   * 缴费期间编码
   * @value
   */
  durationCode: string

  /**
   * 缴费期间名称
   * @value
   */
  durationName: string

  /**
   * 支付结束时间
   * @value #datetime()
   */
  endTime: string

  /**
   * 支付订单号
   * @value
   */
  foreighCode: string

  /**
   * 开票信息id
   * @value
   */
  invoiceInfoId: number

  /**
   * 开票信息名称
   * @value
   */
  invoiceInfoName: string

  /**
   * 开票限额
   * @value
   */
  invoiceLimitAmount: number

  /**
   * 是否开票 0开票中 1开票成功 2开票失败
   * @value
   */
  invoiceStatus: number

  /**
   *
   * @value
   */
  isMergePay: number

  /**
   * 是否消息通知 0否1是
   * @value
   */
  isMessageNotify: number

  /**
   * 是否可多次提交 0否 1是
   * @value
   */
  isMorePay: number

  /**
   * 是否回调 0否 1是
   * @value
   */
  isNoticed: number

  /**
   * 是否退款 0否 1是
   * @value
   */
  isRefund: number

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 缴费方式0自定义 1导入 2接口
   * @value
   */
  jiaofeiMethod: number

  /**
   * 缴费名单id
   * @value
   */
  listId: number

  /**
   * 名单来源：0excel导入 1迎新系统 2外部系统
   * @value
   */
  listSource: number

  /**
   * 贷款金额
   * @value
   */
  loanAmount: number

  /**
   * 回调时间
   * @value #datetime()
   */
  noticeTime: string

  /**
   * openId
   * @value
   */
  openId: string

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   * 订单号
   * @value
   */
  orderId: number

  /**
   * 支付状态  0等待支付、2支付成功、3支付失败、-1订单关闭
   * @value
   */
  orderStatus: number

  /**
   * 支付状态
   * @value
   */
  orderStatusStr: string

  /**
   * 原金额
   * @value
   */
  originalAmount: number

  /**
   * 父级订单号
   * @value
   */
  parentOrder: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 支付方式
   * @value
   */
  payMethodStr: string

  /**
   * 缴费项目ID
   * @value
   */
  proId: string

  /**
   * 缴费项目名称
   * @value
   */
  proName: string

  /**
   * 缴费项目图标
   * @value
   */
  projectIcon: string

  /**
   * 项目英文名称
   * @value
   */
  projectNameEn: string

  /**
   * 应收金额
   * @value
   */
  receivableAmount: number

  /**
   * 减免金额
   * @value
   */
  reductionAmount: number

  /**
   * 优惠类型 0无优惠 1减免 2助学贷款 3减免+贷款
   * @value
   */
  reductionType: number

  /**
   * 优惠类型
   * @value
   */
  reductionTypeStr: string

  /**
   * 退款金额
   * @value
   */
  refundAmount: number

  /**
   * 退款
   * @value
   */
  refundFlag: string

  /**
   * 退款英文
   * @value
   */
  refundFlagEn: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 来源 WX公众号 APP
   * @value
   */
  source: string

  /**
   * 第三方订单编号
   * @value
   */
  thirdOrderCode: string

  /**
   *
   * @value
   */
  thirdPayNo: string

  /**
   *
   * @value
   */
  thirdPayable: string

  /**
   *
   * @value
   */
  thirdPreorder: string

  /**
   * 第三方待缴订单编号
   * @value
   */
  thirdSeqNo: string

  /**
   * 0:未充值、1:充值中、2:充值成功、3:充值失败、4:充值关闭
   * @value
   */
  thirdTradeStatus: number

  /**
   * 三方0贵阳易达恒志 1兰大
   * @value
   */
  thirdType: number

  /**
   * 年
   * @value
   */
  thirdYear: string

  /**
   * 分类ID
   * @value
   */
  typeId: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 支付金额
   * @value
   */
  unifiedPayAmount: number

  /**
   * 红包金额
   * @value
   */
  unifiedRedbagAmount: number

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * app.user_id
   * @value
   */
  userId: string

  /**
   * 身份证号
   * @value
   */
  userIdCard: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string
}

/**
 * --
 */
export type CenterJiaofeiOrderVO_1 = {
  /**
   *
   * @value
   */
  apiId: number

  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 部门ID
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 缴费期间编码
   * @value
   */
  durationCode: string

  /**
   * 缴费期间名称
   * @value
   */
  durationName: string

  /**
   * 缴费方式0自定义 1导入 2接口
   * @value
   */
  jiaofeiMethod: number

  /**
   * 贷款金额
   * @value
   */
  loanAmount: number

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  paidNum: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 项目创建时间
   * @value #datetime()
   */
  proCreateTime: string

  /**
   * 缴费项目ID
   * @value
   */
  proId: string

  /**
   * 缴费项目名称
   * @value
   */
  proName: string

  /**
   * 减免金额
   * @value
   */
  reductionAmount: number

  /**
   * 退款金额
   * @value
   */
  refundAmount: number

  /**
   * 退款数量
   * @value
   */
  refundCount: number

  /**
   * 缴费金额
   * @value
   */
  reportAmountCount: number

  /**
   * 缴费笔数
   * @value
   */
  reportCount: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 三方厂家
   * @value
   */
  thirdType: number

  /**
   *
   * @value
   */
  totalNum: number

  /**
   *
   * @value
   */
  unpaidNum: number
}

/**
 * --
 */
export type CenterJiaofeiPaymentVO = {
  /**
   * 缴费名单ID
   * @value
   */
  id: number

  /**
   * 已缴金额
   * @value
   */
  paidAmount: number

  /**
   * 应缴金额
   * @value
   */
  payAmount: number

  /**
   * 缴费时间
   * @value
   */
  payTime: string

  /**
   * 项目id
   * @value
   */
  projectId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string
}

/**
 * --
 */
export type CenterJiaofeiPermissionsVO = {
  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 手机号
   * @value
   */
  phone: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CenterJiaofeiProBatchVO = {
  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 删除标识 0正常 1删除
   * @value
   */
  deleteFlag: number

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 项目id
   * @value
   */
  projectId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiProDicVO = {
  /**
   * 二级分类Id
   * @value
   */
  dicId: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 二级分类英文名称
   * @value
   */
  dicNameEn: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 项目Id
   * @value
   */
  proId: number

  /**
   * 项目名称
   * @value
   */
  proName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type CenterJiaofeiProjectTypeVO = {
  /**
   * 缴费项目信息
   * @rule 2
   */
  centerJiaofeiProjectVo: CenterSchoolJiaofeiProjectVO[]

  /**
   * 分类ID
   * @value
   */
  typeId: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 分类英文名称
   * @value
   */
  typeNameEn: string
}

/**
 * --
 */
export type CenterJiaofeiProjectVO = {
  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 缴费开始时间
   * @value #datetime()
   */
  beginDate: string

  /**
   * 审核备注
   * @value
   */
  checkRemark: string

  /**
   * 审批状态
   * @value
   */
  checkStatus: number

  /**
   * 审批状态
   * @value
   */
  checkStatusStr: string

  /**
   * 审核时间
   * @value #datetime()
   */
  checkTime: string

  /**
   * 审核人id
   * @value
   */
  checkUserId: number

  /**
   * 审核人
   * @value
   */
  checkUserName: string

  /**
   * 点击数
   * @value
   */
  clickCount: number

  /**
   * 关闭原因
   * @value
   */
  closeTips: string

  /**
   * 创建人
   * @value
   */
  createId: number

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 是否删除 0未删除 1删除
   * @value
   */
  deleteFlag: number

  /**
   * 部门ID
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 二级分类ID
   * @value
   */
  dicId: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 缴费结束时间
   * @value #datetime()
   */
  endDate: string

  /**
   * 顶部图片跳转链接
   * @value
   */
  headPicLink: string

  /**
   * 顶部图片
   * @value
   */
  headPicUrl: string

  /**
   * 图标链接
   * @value
   */
  iconLink: string

  /**
   * 缴费项目ID
   * @value
   */
  id: number

  /**
   * 是否可多次提交 0否 1是
   * @value
   */
  isMorePay: number

  /**
   * 是否需要班级 0否 1是
   * @value
   */
  isNeedClass: number

  /**
   * 是否需要身份证号 0否 1是
   * @value
   */
  isNeedIdcard: number

  /**
   * 是否需要姓名 0否 1是
   * @value
   */
  isNeedName: number

  /**
   * 是否需要手机号 0否 1是
   * @value
   */
  isNeedPhone: number

  /**
   * 是否需要协议 0否 1是
   * @value
   */
  isNeedProtocol: number

  /**
   * 备注是否必填 0否 1是
   * @value
   */
  isNeedRemark: number

  /**
   * 是否需要学号 0否 1是
   * @value
   */
  isNeedUserno: number

  /**
   *
   * @value
   */
  isNoPay: number

  /**
   * 是否允许充值
   * @value
   */
  isOpen: number

  /**
   * 是否过期 0否 1是
   * @value
   */
  isOverTime: number

  /**
   * 是否推荐 0否 1是
   * @value
   */
  isRecommend: number

  /**
   * 是否显示 0否 1是
   * @value
   */
  isShow: number

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 缴费方式0自定义式 1导入式
   * @value
   */
  jiaofeiMethod: number

  /**
   *
   * @value
   */
  listSource: number

  /**
   * 最大金额
   * @value
   */
  maxAmount: number

  /**
   * 最小金额
   * @value
   */
  minAmount: number

  /**
   * 公告
   * @value
   */
  notice: string

  /**
   * 通知 0不通知 1短信 2信息
   * @value
   */
  noticeBack: number

  /**
   * 英文公告
   * @value
   */
  noticeEn: string

  /**
   * 当前时间
   * @value #datetime()
   */
  nowDate: string

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   * 外部链接
   * @value
   */
  outLink: string

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 排序
   * @value
   */
  proSort: number

  /**
   * 缴费项目图标
   * @value
   */
  projectIcon: string

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 项目英文名称
   * @value
   */
  projectNameEn: string

  /**
   * 协议内容
   * @value
   */
  protocolContent: string

  /**
   * 协议标题
   * @value
   */
  protocolTitle: string

  /**
   * 协议标题
   * @value
   */
  protocolTitleEn: string

  /**
   * 推荐排序
   * @value
   */
  recommendSort: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 备注提示语
   * @value
   */
  remarkMsg: string

  /**
   * 备注提示语
   * @value
   */
  remarkMsgEn: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 项目状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 温馨提示
   * @value
   */
  tips: string

  /**
   * 英文温馨提示
   * @value
   */
  tipsEn: string

  /**
   * 分类ID
   * @value
   */
  typeId: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiRefundVO = {
  /**
   * 批量退款id
   * @value
   */
  batchRefundId: number

  /**
   * 审核人
   * @value
   */
  checkId: number

  /**
   * 审核人
   * @value
   */
  checkName: string

  /**
   * 审核备注
   * @value
   */
  checkRemark: string

  /**
   * 审核时间
   * @value #datetime()
   */
  checkTime: string

  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门id
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 退款id
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 订单id
   * @value
   */
  orderId: number

  /**
   * 相关缴费订单
   * @rule 2
   */
  orderList: CenterJiaofeiOrderVO[]

  /**
   * 支付金额
   * @value
   */
  payAmount: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 支付方式
   * @value
   */
  payMethodStr: string

  /**
   * 支付订单
   * @value
   */
  payNo: number

  /**
   * 支付退款订单
   * @value
   */
  payRefundNo: number

  /**
   * 支付退款备注
   * @value
   */
  payRefundRemark: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 退款金额
   * @value
   */
  refundAmount: number

  /**
   * 退款原因
   * @value
   */
  refundRemark: string

  /**
   * 退款状态
   * @value
   */
  refundStatus: number

  /**
   * 退款状态
   * @value
   */
  refundStatusStr: string

  /**
   * 退款时间
   * @value #datetime()
   */
  refundTime: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 修改人
   * @value
   */
  updateId: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 身份证号
   * @value
   */
  userIdCard: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string
}

/**
 * --
 */
export type CenterJiaofeiReportExportVO = {
  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 批次跨列
   * @value
   */
  batchNumRowspan: number

  /**
   *
   * @value
   */
  deptName: string

  /**
   *
   * @value
   */
  deptNameRowspan: number

  /**
   *
   * @value
   */
  jiaofeiMethod: string

  /**
   * 贷款金额
   * @value
   */
  loanAmount: number

  /**
   *
   * @value
   */
  paidNum: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   *
   * @value
   */
  proCreateTime: string

  /**
   *
   * @value
   */
  proId: string

  /**
   *
   * @value
   */
  proName: string

  /**
   *
   * @value
   */
  proNameRowspan: number

  /**
   * 减免金额
   * @value
   */
  reductionAmount: number

  /**
   *
   * @value
   */
  refundAmountCount: string

  /**
   *
   * @value
   */
  refundCount: string

  /**
   *
   * @value
   */
  reportAmountCount: string

  /**
   *
   * @value
   */
  reportCount: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  totalNum: number

  /**
   *
   * @value
   */
  unpaidNum: number
}

/**
 * --
 */
export type CenterJiaofeiSchoolConfigVO = {
  /**
   * 缴费配置ID
   * @value
   */
  id: number

  /**
   * 状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 商户名称
   * @value
   */
  thirdName: string
}

/**
 * --
 */
export type CenterJiaofeiSchoolShowConfigVO = {
  /**
   * 接口配置
   * @rule 2
   */
  configList: CenterJiaofeiSchoolConfigVO[]

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份号显示名
   * @value
   */
  idCard: string

  /**
   * 英文身份号显示名
   * @value
   */
  idCardEn: string

  /**
   * 身份输入框英文显示
   * @value
   */
  idCardEnRemark: string

  /**
   * 身份输入框显示
   * @value
   */
  idCardRemark: string

  /**
   * 是否代人缴费 0否 1是
   * @value
   */
  isAgentPay: number

  /**
   * 是否通知提醒 0否 1是
   * @value
   */
  isNotice: number

  /**
   * 项目是否需要审批 0否 1是
   * @value
   */
  isProCheck: number

  /**
   * 通知人
   * @value
   */
  notifyList: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   * 温馨提示
   * @value
   */
  tips: string

  /**
   * 英文温馨提示
   * @value
   */
  tipsEn: string

  /**
   * 标题显示名
   * @value
   */
  titleName: string

  /**
   * 标题英文显示名
   * @value
   */
  titleNameEn: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 英文姓名
   * @value
   */
  userNameEn: string

  /**
   * web图标
   * @value
   */
  webIcon: string
}

/**
 * --
 */
export type CenterJiaofeiShowConfigVO = {
  /**
   * 是否校验一卡通信息 0否 1是
   * @value
   */
  checkCardInfo: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份号显示名
   * @value
   */
  idCard: string

  /**
   * 英文身份号显示名
   * @value
   */
  idCardEn: string

  /**
   * 身份输入框英文显示
   * @value
   */
  idCardEnRemark: string

  /**
   * 身份输入框显示
   * @value
   */
  idCardRemark: string

  /**
   * 证件号类型
   * @value
   */
  idCardType: number

  /**
   * 证件号值
   * @value
   */
  idCardValue: string

  /**
   * 身份证号
   * @value
   */
  idNumber: string

  /**
   * 开票期间（天）
   * @value
   */
  invoiceDay: number

  /**
   * 是否代人缴费
   * @value
   */
  isAgentPay: number

  /**
   * 是否代人缴费
   * @value
   */
  isAgentPayStr: string

  /**
   * 是否根据绑卡信息自动查询 0否 1是
   * @value
   */
  isAutoSearch: number

  /**
   * 是否自定义发票抬头 0否 1是
   * @value
   */
  isCustomInvoiceType: number

  /**
   * 是否开启发票功能
   * @value
   */
  isInvoice: number

  /**
   * 是否开启发票功能
   * @value
   */
  isInvoiceName: string

  /**
   * 是否通知提醒
   * @value
   */
  isNotice: number

  /**
   * 项目是否需要审批
   * @value
   */
  isProCheck: number

  /**
   * 是否同步建行 0否 1是
   * @value
   */
  isSyncCcb: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 父级学校编码
   * @value
   */
  parentSchoolCode: string

  /**
   * 父级学校名称
   * @value
   */
  parentSchoolName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   * 温馨提示
   * @value
   */
  tips: string

  /**
   * 英文温馨提示
   * @value
   */
  tipsEn: string

  /**
   * 标题显示名
   * @value
   */
  titleName: string

  /**
   * 标题英文显示名
   * @value
   */
  titleNameEn: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 英文姓名
   * @value
   */
  userNameEn: string

  /**
   * 姓名值
   * @value
   */
  userNameValue: string

  /**
   * web图标
   * @value
   */
  webIcon: string
}

/**
 * --
 */
export type CenterJiaofeiTypeVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 分类ID
   * @value
   */
  id: number

  /**
   * 是否显示 0否 1是
   * @value
   */
  isShow: number

  /**
   * 模式：1、迎新
   * @value
   */
  mode: number

  /**
   * 分类备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分类状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 分类英文名称
   * @value
   */
  typeNameEn: string

  /**
   * 分类排序
   * @value
   */
  typeSort: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterJiaofeiTypeVO_1 = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 分类ID
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isShow: number

  /**
   *
   * @value
   */
  isShowStr: string

  /**
   * 模式：1、迎新
   * @value
   */
  mode: number

  /**
   * 模式：迎新
   * @value
   */
  modeStr: string

  /**
   * 操作权限
   * @value
   */
  operates: string[]

  /**
   * 操作权限
   * @value
   */
  operation: string

  /**
   * 分类备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分类状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 分类英文名称
   * @value
   */
  typeNameEn: string

  /**
   * 分类排序
   * @value
   */
  typeSort: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterNetOperatorVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 支付商户编码
   * @value
   */
  payCpCode: string

  /**
   * 支付商户密钥
   * @value
   */
  payCpSecret: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区id
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type CenterNetPackageVO = {
  /**
   * 添加时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 运营商id
   * @value
   */
  operatorId: number

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 套餐id
   * @value
   */
  packageId: string

  /**
   * 套餐名称
   * @value
   */
  packageName: string

  /**
   * 套餐金额  金额为0 表示可以自己输入
   * @value
   */
  payAmount: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 1、启用 0、禁用
   * @value
   */
  status: number

  /**
   * 状态 1、启用 0、禁用
   * @value
   */
  statusStr: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type CenterNetZoneVO = {
  /**
   * 校区id
   * @value
   */
  id: number

  /**
   * 网费协议 0深澜 1城市热点
   * @value
   */
  protocol: number

  /**
   * 厂商协议
   * @value
   */
  protocolStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type CenterOrderNetVO = {
  /**
   * 充值账号
   * @value
   */
  account: string

  /**
   * 套餐配置id
   * @value
   */
  centerPackageId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 费率金额
   * @value
   */
  feeMoney: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 运营商id
   * @value
   */
  operatorId: number

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 外部充值状态
   * @value
   */
  outTradeStatus: number

  /**
   * 外部充值状态
   * @value
   */
  outTradeStatusStr: string

  /**
   * 套餐名称
   * @value
   */
  packageName: string

  /**
   * 支付金额
   * @value
   */
  payMoney: number

  /**
   * 支付单号
   * @value
   */
  payNo: string

  /**
   * 支付状态
   * @value
   */
  payStatus: number

  /**
   * 支付状态
   * @value
   */
  payStatusStr: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   *
   * @value
   */
  payType: string

  /**
   * 支付方式
   * @value
   */
  payTypeStr: string

  /**
   *
   * @value
   */
  rechargeInfo: string

  /**
   * 红包金额
   * @value
   */
  redbagMoney: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  source: string

  /**
   * 平台
   * @value
   */
  sourceStr: string

  /**
   * 订单状态 0处理中 1已完成
   * @value
   */
  status: number

  /**
   * 订单状态 0处理中 1已完成
   * @value
   */
  statusStr: string

  /**
   * 到账金额
   * @value
   */
  totalMoney: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 校区编码
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type CenterOrderSpecialVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 费率金额
   * @value
   */
  feeMoney: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 外部充值状态
   * @value
   */
  outTradeStatus: number

  /**
   * 外部充值状态
   * @value
   */
  outTradeStatusStr: string

  /**
   * 支付金额
   * @value
   */
  payMoney: string

  /**
   * 支付订单号
   * @value
   */
  payNo: string

  /**
   * 支付状态
   * @value
   */
  payStatus: number

  /**
   * 支付状态
   * @value
   */
  payStatusStr: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   * 支付方式
   * @value
   */
  payTypeStr: string

  /**
   *
   * @value
   */
  platform: string

  /**
   * 平台
   * @value
   */
  platformStr: string

  /**
   * 商品名
   * @value
   */
  prodName: string

  /**
   *
   * @value
   */
  protocol: number

  /**
   *
   * @value
   */
  protocolStr: string

  /**
   * 充值账号/卡号
   * @value
   */
  rechargeAccount: string

  /**
   * 充值名称
   * @value
   */
  rechargeName: string

  /**
   * 红包金额
   * @value
   */
  redbagMoney: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 订单状态 0处理中 1已完成
   * @value
   */
  status: number

  /**
   * 订单状态 0处理中 1已完成
   * @value
   */
  statusStr: string

  /**
   * 到账金额
   * @value
   */
  totalMoney: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CenterOrderStatsVO = {
  /**
   * 交易笔数
   * @value
   */
  count: string

  /**
   * 主商户名称
   * @value
   */
  cpMainName: string

  /**
   * 商户名称
   * @value
   */
  cpName: string

  /**
   * 支付渠道
   * @value
   */
  payTypeName: string

  /**
   * 退款总笔数
   * @value
   */
  refundCount: number

  /**
   * 退款总金额
   * @value
   */
  refundMoney: string

  /**
   * 交易金额
   * @value
   */
  tranMoney: string
}

/**
 * --
 */
export type CenterPincardConfigVO = {
  /**
   * 受理时间
   * @value #datetime()
   */
  acceptTimeEnd: string

  /**
   * 受理时间
   * @value #datetime()
   */
  acceptTimeStart: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isProtocol: number

  /**
   *
   * @value
   */
  needBindCard: number

  /**
   * 温馨提示
   * @value
   */
  notice: string

  /**
   * 易通webapi 一卡通webapi 一卡通35
   * @value
   */
  pincardVersion: string

  /**
   * 销卡等待天数
   * @value
   */
  pincardWaitingDay: number

  /**
   * 公告
   * @value
   */
  prompt: string

  /**
   *
   * @value
   */
  protocolContent: string

  /**
   *
   * @value
   */
  protocolTitle: string

  /**
   * 可办理的学生范围 0000格式(每位01) 毕业生办理  是 0 否 1
   * @value
   */
  studentRange: string

  /**
   * 转账(退款)款项json  押金,卡费,存款手续费,搭伙费
   * @value
   */
  transferSelect: string

  /**
   * 转账(退款)方式  0:人工转账 1:自动批量转账
   * @value
   */
  transferWay: number
}

/**
 * --
 */
export type CenterPincardSubsidyVO = {
  /**
   * 打款人数
   * @value
   */
  subsidyCount: number

  /**
   * 打款金额
   * @value
   */
  subsidyMoney: number

  /**
   *
   * @value
   */
  subsidyMoneyStr: string

  /**
   * 项目名称
   * @value
   */
  subsidyName: string
}

/**
 * --
 */
export type CenterPincardVO = {
  /**
   * 受理人姓名
   * @value
   */
  acceptName: string

  /**
   * 受理人手机号
   * @value
   */
  acceptPhone: string

  /**
   * 转账(退款)账户用户名
   * @value
   */
  accountName: string

  /**
   * 申请失败原因
   * @value
   */
  applyforFailedReason: string

  /**
   * 卡库余额
   * @value
   */
  cardMoney: string

  /**
   * 班级id
   * @value
   */
  classId: number

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 确认状态
   * @value
   */
  confirmStatus: number

  /**
   *
   * @value
   */
  confirmStatusName: string

  /**
   * 受理人姓名
   * @value
   */
  createName: string

  /**
   * 受理人手机号
   * @value
   */
  createPhone: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门名称
   * @value
   */
  department: string

  /**
   * 部门id
   * @value
   */
  departmentId: number

  /**
   *
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  identityId: string

  /**
   * 收款用户身份证号码
   * @value
   */
  incomeIdentityId: string

  /**
   * 收款用户姓名
   * @value
   */
  incomeUserName: string

  /**
   * 打款项目ID
   * @value
   */
  itemId: number

  /**
   * 打款项目名称
   * @value
   */
  itemName: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 支付渠道编码
   * @value
   */
  payCode: string

  /**
   *
   * @value
   */
  payCodeName: string

  /**
   * 支付渠道分类：1-资金代发，2-直接打款
   * @value
   */
  payType: number

  /**
   *
   * @value
   */
  payTypeName: string

  /**
   * 销户状态  0:待销户 1:已销户 2:销户失败
   * @value
   */
  pincardStatus: number

  /**
   *
   * @value
   */
  pincardStatusStr: string

  /**
   * 销户申请时间(预撤户)
   * @value #datetime()
   */
  preRecallTime: string

  /**
   * 拒绝或同意原因
   * @value
   */
  reason: string

  /**
   * 真实撤户时间
   * @value #datetime()
   */
  recallTime: string

  /**
   * 申请备注
   * @value
   */
  remark: string

  /**
   * 专业名称
   * @value
   */
  specialities: string

  /**
   * 专业id
   * @value
   */
  specialitiesId: number

  /**
   * 转账(退款)账号
   * @value
   */
  transferAccount: string

  /**
   * 申请转账(退款)原因
   * @value
   */
  transferApplyfor: string

  /**
   *
   * @value
   */
  transferApplyforStr: string

  /**
   * 转账(退款)渠道
   * @value
   */
  transferChannelStr: string

  /**
   * 可退金额
   * @value
   */
  transferMoney: string

  /**
   * 转账(退款)状态 0:待打款 1:已打款 2:打款失败
   * @value
   */
  transferStatus: number

  /**
   *
   * @value
   */
  transferStatusStr: string

  /**
   * 受理转账(退款)时间
   * @value #datetime()
   */
  transferTime: string

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改人手机号
   * @value
   */
  updatePhone: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 一卡通账号
   * @value
   */
  userIdcard: string

  /**
   * 学生姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CenterSchoolAreaVO = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 绑定房间数量
   * @value
   */
  bindRoomNum: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 校区id
   * @value
   */
  id: number

  /**
   * 是否充值后绑定 0、是 1、否
   * @value
   */
  isBindAfterRecharge: number

  /**
   * 是否正常使用过 0、是 1、否
   * @value
   */
  isUsed: number

  /**
   * 最低充值金额(元)
   * @value
   */
  minAmount: number

  /**
   * 电费价格（元/度）
   * @value
   */
  price: number

  /**
   * 厂商编号
   * @value
   */
  protocol: number

  /**
   * 厂商名称
   * @value
   */
  protocolStr: string

  /**
   * 温馨提示
   * @value
   */
  remind: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 排序
   * @value
   */
  sort: number

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态名
   * @value
   */
  statusStr: string

  /**
   * 类型：1、电费 2、水费 3、常工应用
   * @value
   */
  type: number

  /**
   * 类型名
   * @value
   */
  typeStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 版本：1、version-1 2、version-2
   * @value
   */
  version: number

  /**
   * 版本名
   * @value
   */
  versionStr: string
}

/**
 * --
 */
export type CenterSchoolBuildingVO = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区ID
   * @value
   */
  areaId: number

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 楼栋id
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 类型：1、电费 2、水费 3、常工应用
   * @value
   */
  type: number

  /**
   * 类型名
   * @value
   */
  typeStr: string

  /**
   * 创建时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSchoolFloorVO = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区id
   * @value
   */
  areaId: number

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 楼层id
   * @value
   */
  id: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 类型：1、电费 2、水费 3、常工应用
   * @value
   */
  type: number

  /**
   * 类型名
   * @value
   */
  typeStr: string

  /**
   * 创建时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiConfigVO = {
  /**
   * 支付商户编码
   * @value
   */
  cpCode: string

  /**
   * 支付商户密钥
   * @value
   */
  cpKey: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 缴费配置ID
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 商户编码
   * @value
   */
  thirdCode: string

  /**
   * ID
   * @value
   */
  thirdId: string

  /**
   * 密钥
   * @value
   */
  thirdKey: string

  /**
   * 商户名称
   * @value
   */
  thirdName: string

  /**
   * 端口
   * @value
   */
  thirdPort: string

  /**
   * 密码
   * @value
   */
  thirdPwd: string

  /**
   * 接口地址
   * @value
   */
  thirdUrl: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiDeptVO = {
  /**
   * 商户编号
   * @value
   */
  cpCode: string

  /**
   * 商户密钥
   * @value
   */
  cpKey: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门负责人姓名
   * @value
   */
  deptHeads: string

  /**
   * 部门负责人手机号
   * @value
   */
  deptHeadsTel: string

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 部门ID
   * @value
   */
  id: number

  /**
   * 模式：1、迎新
   * @value
   */
  mode: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 部门状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiDictionarySonVO = {
  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 二级分类英文名称
   * @value
   */
  dicNameEn: string

  /**
   * 二级分类ID
   * @value
   */
  id: number
}

/**
 * --
 */
export type CenterSchoolJiaofeiDictionaryVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 副选项数量
   * @value
   */
  dicCount: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 二级分类英文名称
   * @value
   */
  dicNameEn: string

  /**
   * 二级分类ID
   * @value
   */
  id: number

  /**
   * 二级分类父ID
   * @value
   */
  parentId: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 副选项信息
   * @rule 2
   */
  sonDictionaryVo: CenterSchoolJiaofeiDictionarySonVO[]

  /**
   * 二级分类状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiOrderVO = {
  /**
   * 账户id
   * @value
   */
  accId: string

  /**
   *
   * @value
   */
  apiId: number

  /**
   * 未交金额
   * @value
   */
  arrearageAmount: number

  /**
   * 批次
   * @value
   */
  batchNum: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门ID
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 二级分类ID
   * @value
   */
  dicId: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 二级分类副选项ID
   * @value
   */
  dicSonId: number

  /**
   * 二级分类副选项名称
   * @value
   */
  dicSonName: string

  /**
   * 缴费期间编码
   * @value
   */
  durationCode: string

  /**
   * 缴费期间名称
   * @value
   */
  durationName: string

  /**
   * 支付结束时间
   * @value #datetime()
   */
  endTime: string

  /**
   * 支付订单号
   * @value
   */
  foreighCode: string

  /**
   * 开票状态 0开票中 1开票成功 2开票失败
   * @value
   */
  invoiceStatus: number

  /**
   * 开票状态
   * @value
   */
  invoiceStatusName: string

  /**
   * 是否全额退款
   * @value
   */
  isFullRefund: boolean

  /**
   *
   * @value
   */
  isMergePay: number

  /**
   * 是否消息通知 0否1是
   * @value
   */
  isMessageNotify: number

  /**
   * 是否回调 0否 1是
   * @value
   */
  isNoticed: number

  /**
   *
   * @value
   */
  isRefund: number

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 缴费方式0自定义 1导入 2接口
   * @value
   */
  jiaofeiMethod: number

  /**
   * 缴费名单id
   * @value
   */
  listId: number

  /**
   * 贷款金额
   * @value
   */
  loanAmount: number

  /**
   * 合并支付金额
   * @value
   */
  mergePayAmount: number

  /**
   * 合并缴费项目名称
   * @value
   */
  mergeProNames: string

  /**
   * 回调时间
   * @value #datetime()
   */
  noticeTime: string

  /**
   * openId
   * @value
   */
  openId: string

  /**
   * 订单号
   * @value
   */
  orderId: number

  /**
   * 支付状态  0等待支付、2支付成功、3支付失败、-1订单关闭
   * @value
   */
  orderStatus: number

  /**
   * 支付状态
   * @value
   */
  orderStatusStr: string

  /**
   * 原金额
   * @value
   */
  originalAmount: number

  /**
   * 父级订单号
   * @value
   */
  parentOrder: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 支付方式
   * @value
   */
  payMethod: string

  /**
   * 支付方式
   * @value
   */
  payMethodStr: string

  /**
   * 缴费项目ID
   * @value
   */
  proId: string

  /**
   * 缴费项目名称
   * @value
   */
  proName: string

  /**
   * 应收金额
   * @value
   */
  receivableAmount: number

  /**
   * 减免金额
   * @value
   */
  reductionAmount: number

  /**
   *
   * @value
   */
  refundAmount: number

  /**
   * 退款订单
   * @rule 2
   */
  refundOrder: CenterJiaofeiRefundVO[]

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 合并支付订单
   * @rule 2
   */
  siblingsList: CenterJiaofeiOrderVO[]

  /**
   * 来源 WX公众号 APP
   * @value
   */
  source: string

  /**
   * 第三方订单编号
   * @value
   */
  thirdOrderCode: string

  /**
   * 0:未充值、1:充值中、2:充值成功、3:充值失败、4:充值关闭
   * @value
   */
  thirdTradeStatus: number

  /**
   * 三方0贵阳易达恒志 1兰大
   * @value
   */
  thirdType: number

  /**
   * 分类ID
   * @value
   */
  typeId: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   *
   * @value
   */
  unifiedPayAmount: number

  /**
   * 红包金额
   * @value
   */
  unifiedRedbagAmount: number

  /**
   * app.user_id
   * @value
   */
  userId: string

  /**
   * 身份证号
   * @value
   */
  userIdCard: string

  /**
   * 姓名
   * @value
   */
  userName: string

  /**
   * 学号
   * @value
   */
  userNo: string

  /**
   * 手机号
   * @value
   */
  userPhone: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiProDicVO = {
  /**
   * 二级分类Id
   * @value
   */
  dicId: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 项目Id
   * @value
   */
  proId: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiProjectAndAmountVO = {
  /**
   * 二级分类费用
   * @value
   */
  dicFullStr: string

  /**
   * 二级分类id
   * @value
   */
  dicId: number

  /**
   * 项目id
   * @value
   */
  id: number

  /**
   * 金额
   * @value
   */
  payAmount: number

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiProjectUrlVO = {
  /**
   * 缴费h5url
   * @value
   */
  pathH5Url: string

  /**
   * 缴费url
   * @value
   */
  pathUrl: string

  /**
   * 二维码缴费url
   * @value
   */
  qrcodeUrl: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiProjectVO = {
  /**
   * 缴费开始时间
   * @value #datetime()
   */
  beginDate: string

  /**
   * 审核备注
   * @value
   */
  checkRemark: string

  /**
   * 审批状态
   * @value
   */
  checkStatus: number

  /**
   * 审批状态
   * @value
   */
  checkStatusStr: string

  /**
   * 审核时间
   * @value #datetime()
   */
  checkTime: string

  /**
   * 审核人id
   * @value
   */
  checkUserId: number

  /**
   * 审核人
   * @value
   */
  checkUserName: string

  /**
   * 关闭原因
   * @value
   */
  closeTips: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门ID
   * @value
   */
  deptId: number

  /**
   * 部门名称
   * @value
   */
  deptName: string

  /**
   * 二级分类ID
   * @value
   */
  dicId: number

  /**
   * 二级分类名称
   * @value
   */
  dicName: string

  /**
   * 缴费结束时间
   * @value #datetime()
   */
  endDate: string

  /**
   * 顶部图片
   * @value
   */
  headPicUrl: string

  /**
   * 图标链接
   * @value
   */
  iconLink: string

  /**
   * 缴费项目ID
   * @value
   */
  id: number

  /**
   * 是否可多次提交 0否 1是
   * @value
   */
  isMorePay: number

  /**
   * 是否需要班级 0否 1是
   * @value
   */
  isNeedClass: number

  /**
   * 是否需要身份证号 0否 1是
   * @value
   */
  isNeedIdcard: number

  /**
   * 是否需要姓名 0否 1是
   * @value
   */
  isNeedName: number

  /**
   * 是否需要手机号 0否 1是
   * @value
   */
  isNeedPhone: number

  /**
   * 是否需要协议 0否 1是
   * @value
   */
  isNeedProtocol: number

  /**
   * 备注是否必填 0否 1是
   * @value
   */
  isNeedRemark: number

  /**
   * 是否需要学号 0否 1是
   * @value
   */
  isNeedUserno: number

  /**
   * 无需支付 0否 1是
   * @value
   */
  isNoPay: number

  /**
   * 是否允许充值0否1是
   * @value
   */
  isOpen: number

  /**
   * 是否推荐 0否 1是
   * @value
   */
  isRecommend: number

  /**
   * 是否显示 0否 1是
   * @value
   */
  isShow: number

  /**
   * 是否分批支付 0否 1是
   * @value
   */
  isSplitPay: number

  /**
   * 缴费方式0自定义式 1导入式
   * @value
   */
  jiaofeiMethod: number

  /**
   * 名单来源：0excel导入 1迎新系统 2外部系统
   * @value
   */
  listSource: number

  /**
   * 最大金额
   * @value
   */
  maxAmount: number

  /**
   * 最小金额
   * @value
   */
  minAmount: number

  /**
   * 公告
   * @value
   */
  notice: string

  /**
   * 英文公告
   * @value
   */
  noticeEn: string

  /**
   * 当前时间
   * @value #datetime()
   */
  nowDate: string

  /**
   * 外部链接
   * @value
   */
  outLink: string

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 排序
   * @value
   */
  proSort: number

  /**
   * 缴费项目图标
   * @value
   */
  projectIcon: string

  /**
   * 项目名称
   * @value
   */
  projectName: string

  /**
   * 项目英文名称
   * @value
   */
  projectNameEn: string

  /**
   * 协议内容
   * @value
   */
  protocolContent: string

  /**
   * 协议标题
   * @value
   */
  protocolTitle: string

  /**
   * 协议标题英文
   * @value
   */
  protocolTitleEn: string

  /**
   * 推荐排序
   * @value
   */
  recommendSort: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 备注提示语
   * @value
   */
  remarkMsg: string

  /**
   * 备注提示语英文
   * @value
   */
  remarkMsgEn: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 项目状态 0:禁用 1:启用
   * @value
   */
  status: number

  /**
   * 温馨提示
   * @value
   */
  tips: string

  /**
   * 英文温馨提示
   * @value
   */
  tipsEn: string

  /**
   * 分类ID
   * @value
   */
  typeId: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSchoolJiaofeiReportVO = {
  /**
   * 缴费总和
   * @value
   */
  amountCount: number

  /**
   * 当日缴费金额总和
   * @value
   */
  nowDateAmountCount: number

  /**
   * 当月缴费金额总和
   * @value
   */
  nowMonthAmountCount: number

  /**
   * 分页缴费统计数据
   * @rule
   */
  page: PageResultCenterJiaofeiOrderVO_1

  /**
   * 退款总和
   * @value
   */
  refundTotalAmount: number

  /**
   * 列表退款金额
   * @value
   */
  tableRefundAmount: number

  /**
   * 列表退款笔数
   * @value
   */
  tableRefundCount: number

  /**
   * 列表数据缴费金额总和
   * @value
   */
  tableReportAmountCount: number

  /**
   * 列表数据缴费笔数总和
   * @value
   */
  tableReportCount: number
}

/**
 * --
 */
export type CenterSchoolRoomUserVO = {
  /**
   * 校区ID
   * @value
   */
  areaId: number

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 楼栋编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 是否使用过
   * @value
   */
  isUsed: number

  /**
   * 是否使用过
   * @value
   */
  isUsedStr: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CenterSchoolRoomVO = {
  /**
   *
   * @value
   */
  amount: number

  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区id
   * @value
   */
  areaId: number

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 房间id
   * @value
   */
  id: number

  /**
   * 昵称
   * @value
   */
  nickName: string

  /**
   *
   * @value
   */
  origin: number

  /**
   *
   * @value
   */
  originStr: string

  /**
   *
   * @value #datetime()
   */
  recordTime: string

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  surplus: number

  /**
   * 类型：1、电费 2、水费 3、常工应用
   * @value
   */
  type: number

  /**
   * 类型
   * @value
   */
  typeStr: string

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSpecialConfigVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  firm: number

  /**
   * 厂商
   * @value
   */
  firmStr: string

  /**
   * 校区ID
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type CenterSysLoginQrCodeStatusVO = {
  /**
   * 二维码状态 0、生成 1、 扫码中  2、扫码成功  -1、已失效
   * @value
   */
  status: number
}

/**
 * --
 */
export type CenterSysMenuTree4LoginVO = {
  /**
   *
   * @rule 2
   */
  childMenus: CenterSysMenuTree4LoginVO[]

  /**
   *
   * @value
   */
  code: string

  /**
   * 企业别名
   * @value
   */
  enterpriseName: string

  /**
   *
   * @value
   */
  fatherId: number

  /**
   *
   * @value
   */
  flag: number

  /**
   *
   * @value
   */
  iconChecked: string

  /**
   *
   * @value
   */
  iconUnchecked: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isMenu: number

  /**
   *
   * @value
   */
  isMenuStr: string

  /**
   *
   * @value
   */
  menuLevel: number

  /**
   *
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   * 菜单前缀,一般为平台编码
   * @value
   */
  preCode: string

  /**
   *
   * @value
   */
  sort: number

  /**
   *
   * @value
   */
  url: string
}

/**
 * --
 */
export type CenterSysMenuTreeVO = {
  /**
   *
   * @rule 2
   */
  children: CenterSysMenuTreeVO[]

  /**
   *
   * @value
   */
  enterpriseName: string

  /**
   *
   * @value
   */
  isMenu: number

  /**
   *
   * @value
   */
  key: number

  /**
   *
   * @value
   */
  title: string
}

/**
 * --
 */
export type CenterSysMenuVO = {
  /**
   *
   * @value
   */
  checked: boolean

  /**
   *
   * @rule 2
   */
  childMenus: SysMenuVO[]

  /**
   *
   * @value
   */
  code: string

  /**
   *
   * @value
   */
  defaultSelect: number

  /**
   *
   * @value
   */
  deleteFlag: number

  /**
   *
   * @value
   */
  description: string

  /**
   *
   * @value
   */
  enterpriseName: string

  /**
   *
   * @value
   */
  fatherId: number

  /**
   *
   * @value
   */
  flag: number

  /**
   *
   * @value
   */
  iconChecked: string

  /**
   *
   * @value
   */
  iconComChecked: string

  /**
   *
   * @value
   */
  iconComUnchecked: string

  /**
   *
   * @value
   */
  iconUnchecked: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isMenu: number

  /**
   *
   * @value
   */
  isMenuStr: string

  /**
   *
   * @value
   */
  isRoute: number

  /**
   *
   * @value
   */
  isRouteStr: string

  /**
   *
   * @value
   */
  menuLevel: number

  /**
   *
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  preCode: string

  /**
   *
   * @value
   */
  preCodeStr: string

  /**
   *
   * @value
   */
  schoolClasses: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolNature: string

  /**
   *
   * @value
   */
  sort: number

  /**
   *
   * @value
   */
  url: string
}

/**
 * --
 */
export type CenterSysRoleDO = {
  /**
   *
   * @value
   */
  code: string

  /**
   *
   * @value
   */
  createId: number

  /**
   *
   * @value
   */
  createName: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  deleteFlag: number

  /**
   *
   * @value
   */
  description: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  image: string

  /**
   *
   * @value
   */
  isDefault: number

  /**
   *
   * @value
   */
  isSuperAdmin: number

  /**
   *
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  updateId: number

  /**
   *
   * @value
   */
  updateName: string

  /**
   *
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  userNum: number
}

/**
 * --
 */
export type CenterSysRoleListVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 角色图片
   * @value
   */
  image: string

  /**
   * 是否为默认角色 0：是  1：否
   * @value
   */
  isDefault: number

  /**
   * 角色名称
   * @value
   */
  name: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 角色用户人数
   * @value
   */
  userNum: number
}

/**
 * --
 */
export type CenterSysRoleVO = {
  /**
   *
   * @value
   */
  checkedMenuIds: number[]

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  image: string

  /**
   *
   * @value
   */
  isDefault: number

  /**
   *
   * @rule 2
   */
  menuList: CenterSysMenuVO[]

  /**
   *
   * @rule 2
   */
  menuTreeList: CenterSysMenuTreeVO[]

  /**
   *
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CenterSysScanLoginQrCodeVO = {
  /**
   * 二维码
   * @value
   */
  qrCode: string

  /**
   * 二维码标识
   * @value
   */
  qrticket: string
}

/**
 * --
 */
export type CenterSysSchoolManagerUserVO = {
  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  userId: number
}

/**
 * --
 */
export type CenterSysSchoolVO = {
  /**
   * 学校校徽
   * @value
   */
  schoolBadgeImg: string

  /**
   * 学校类别(1.学校 2.企业 3.医院 4.政府)
   * @value
   */
  schoolClasses: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 学校性质 1.学校-易校园 2.学校-K12 3.数智小二
   * @value
   */
  schoolNature: number
}

/**
 * 用户功能权限查看VO
 */
export type CenterSysUserMenuListVO = {
  /**
   * 已选中的菜单ids
   * @value
   */
  checkedMenuIds: number[]

  /**
   * 菜单列表
   * @rule 2
   */
  menuList: CenterSysMenuVO[]

  /**
   * 菜单树
   * @rule 2
   */
  menuTreeList: CenterSysMenuTreeVO[]
}

/**
 * --
 */
export type CenterSysUserSchoolListVO = {
  /**
   * id、学校编码
   * @value
   */
  id: string

  /**
   * 学校类别(1.学校 2.企业 3.医院 政府)
   * @value
   */
  schoolClasses: number

  /**
   * text、学校名称
   * @value
   */
  text: string
}

/**
 * --
 */
export type CenterSysUserVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否平台用户 0是 1否
   * @value
   */
  isPlatformUser: number

  /**
   *
   * @value
   */
  isPlatformUserStr: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 角色id列表
   * @value
   */
  roleIds: string[]

  /**
   * 角色名称[多个以、分割]
   * @value
   */
  roleName: string

  /**
   * 角色名称列表
   * @value
   */
  roleNames: string[]

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CenterTaskVO = {
  /**
   * 业务类型名称
   * @value
   */
  bizName: string

  /**
   * 业务类型
   * @value
   */
  bizType: string

  /**
   * 是否能下载 0是1否
   * @value
   */
  canDownload: number

  /**
   * 是否能发短信 0是1否
   * @value
   */
  canSendMsg: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 失效时间
   * @value #datetime()
   */
  expiresTime: string

  /**
   * 失败下载key
   * @value
   */
  failKey: string

  /**
   * 失败提示
   * @value
   */
  failMsg: string

  /**
   * 文件名
   * @value
   */
  fileName: string

  /**
   * 文件大小(Byte)
   * @value
   */
  fileSize: number

  /**
   * 文件大小
   * @value
   */
  fileSizeStr: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 任务状态 1执行中2执行成功3执行部分成功4执行失败5已失效
   * @value
   */
  status: number

  /**
   * 任务类型 1下载2上传
   * @value
   */
  type: number

  /**
   * 任务类型
   * @value
   */
  typeStr: string
}

/**
 * --
 */
export type CenterUserVO = {
  /**
   * 绑卡状态 1已经绑卡 0未绑卡
   * @value
   */
  bindCardStatus: number

  /**
   * 绑卡状态
   * @value
   */
  bindCardStatusStr: string

  /**
   * 绑卡时间
   * @value #datetime()
   */
  bindCardTime: string

  /**
   *
   * @value
   */
  extJson: string

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 默认身份身份证号
   * @value
   */
  identityCard: string

  /**
   * 默认身份id
   * @value
   */
  identityId: number

  /**
   * 默认身份手机号
   * @value
   */
  identityMobilePhone: string

  /**
   * 默认身份姓名
   * @value
   */
  identityName: string

  /**
   * 身份证号
   * @value
   */
  identityNo: string

  /**
   * 默认身份关系
   * @value
   */
  identityRelationship: string

  /**
   * 默认身份类型 1家长 2老师
   * @value
   */
  identityType: number

  /**
   * 学号
   * @value
   */
  jobNo: string

  /**
   * 最后登录时间
   * @value #datetime()
   */
  lastLogin: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 用户学校月绑卡次数
   * @value
   */
  monthBindCount: string

  /**
   * 可操作权限集合
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  payOpenid: string

  /**
   * 所属平台
   * @value
   */
  platform: string

  /**
   * 是否实名
   * @value
   */
  realNameStatus: string

  /**
   * 是否实名
   * @value
   */
  realNameStatusStr: string

  /**
   * 注册时间
   * @value #datetime()
   */
  regiserTime: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别 1男，2女，3空 没有值表示男
   * @value
   */
  sex: number

  /**
   * 性别
   * @value
   */
  sexStr: string

  /**
   * 状态中文
   * @value
   */
  statusStr: string

  /**
   * 是否测试账户
   * @value
   */
  testAccountStr: string

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * 一卡通号
   * @value
   */
  userIdcard: string

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 用户类型
   * @value
   */
  userType: string

  /**
   * 用户类型中文
   * @value
   */
  userTypeStr: string
}

/**
 * --
 */
export type CenterWaterConfigVO = {
  /**
   *
   * @value
   */
  businessCode: string

  /**
   *
   * @value
   */
  controllerTitle: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  entryCode: string

  /**
   *
   * @value
   */
  entryName: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isCardWithhold: number

  /**
   *
   * @value
   */
  mode: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  payMethod: string

  /**
   *
   * @value
   */
  protocol: string

  /**
   *
   * @value
   */
  protocolStr: string

  /**
   *
   * @value
   */
  remarks: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  serverAddress: string

  /**
   *
   * @value
   */
  status: number
}

/**
 * --
 */
export type CommResponse = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterJiaofeiInvoiceOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterJiaofeiInvoiceOrderVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterJiaofeiInvoiceTotalVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterJiaofeiInvoiceTotalVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterJiaofeiListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterJiaofeiListVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterPincardConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterPincardConfigVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterPincardSubsidyVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterPincardSubsidyVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterPincardVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterPincardVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseCenterWaterConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: CenterWaterConfigVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseDonateItemVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: DonateItemVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseDonateOrderTotalVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: DonateOrderTotalVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseDonateUserOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: DonateUserOrderVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseDonateUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: DonateUserVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseOperationLogVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: OperationLogVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseSubsidyItemListTotalMoneyVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: SubsidyItemListTotalMoneyVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseSubsidyItemListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: SubsidyItemListVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseSubsidyItemVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: SubsidyItemVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseSubsidyNoticeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: SubsidyNoticeVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnApplicationConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnApplicationConfigVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnBatchVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnBatchVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnBuildingVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnBuildingVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnDeviceCheckInfoVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnDeviceCheckInfoVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnFloorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnFloorVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnFormUserApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnFormUserApiVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnGenerateStudentNoVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnGenerateStudentNoVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnHallFormVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnHallFormVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnHallVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnHallVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnInStudentRoomVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnInStudentRoomVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnInStudentVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnInStudentVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnMajorStudentCountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnMajorStudentCountVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnPayConfigDetailVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnPayConfigDetailVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnProcessConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnProcessConfigVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnProductVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnProductVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnReceiveNumberTotalVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnReceiveNumberTotalVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnReceiveOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnReceiveOrderVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnRoomAccommodateCountShowVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnRoomAccommodateCountShowVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnRoomFeeConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnRoomFeeConfigVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnRoomVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnRoomVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnSchoolAllDashboardVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnSchoolAllDashboardVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnSelectPhoneOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnSelectPhoneOrderVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnSelectPhonePackageVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnSelectPhonePackageVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnSelectPhoneVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnSelectPhoneVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnStudentBaseApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnStudentBaseApiVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnStudentBaseVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnStudentBaseVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnStudentDashboardViewVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnStudentDashboardViewVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnStudentRegisterBaseApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnStudentRegisterBaseApiVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnStudentToClassVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnStudentToClassVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseWnUnitVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: WnUnitVO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseboolean = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @value
   */
  data: boolean

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponseobject = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponsestring = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @value
   */
  data: string

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponse文章返回参数 = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: 文章返回参数

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CommResponse获取预览信息返回VO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string

  /**
   *
   * @rule
   */
  data: 获取预览信息返回VO

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean
}

/**
 * --
 */
export type CompusArticleFaqVO = {
  /**
   * 内容
   * @value
   */
  articleText: string

  /**
   * 作者/来源
   * @value
   */
  author: string

  /**
   * 分类编码
   * @value
   */
  code: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 图片地址
   * @value
   */
  imageUrl: string

  /**
   * 是否热门问题
   * @value
   */
  isHot: number

  /**
   * 是否热门问题
   * @value
   */
  isHotStr: string

  /**
   * 开户行
   * @value
   */
  openBank: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 平台
   * @value
   */
  platform: string

  /**
   *
   * @value
   */
  platformStr: string

  /**
   * 排序
   * @value
   */
  sortNo: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  statusStr: string

  /**
   * 分类ID
   * @value
   */
  tagsId: number

  /**
   * 分类标题
   * @value
   */
  tagsName: string

  /**
   * 标题
   * @value
   */
  title: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CompusAssociationActivityDO = {
  /**
   *
   * @value
   */
  activityAddress: string

  /**
   *
   * @value #datetime()
   */
  activityEndTime: string

  /**
   *
   * @value
   */
  activityIntro: string

  /**
   *
   * @value
   */
  activityName: string

  /**
   *
   * @value
   */
  activityRule: string

  /**
   *
   * @value #datetime()
   */
  activityStartTime: string

  /**
   *
   * @value
   */
  activityStatus: number

  /**
   *
   * @value
   */
  associationCode: string

  /**
   *
   * @value
   */
  associationId: number

  /**
   *
   * @value
   */
  associationName: string

  /**
   *
   * @value
   */
  bgImage: string

  /**
   *
   * @value
   */
  createId: number

  /**
   *
   * @value
   */
  createName: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  deleteFlag: number

  /**
   *
   * @value #datetime()
   */
  enrollEndTime: string

  /**
   *
   * @value
   */
  enrollNum: number

  /**
   *
   * @value #datetime()
   */
  enrollStartTime: string

  /**
   *
   * @value
   */
  enrollStatus: number

  /**
   *
   * @value
   */
  hotSort: number

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isHot: number

  /**
   *
   * @value
   */
  managerId: number

  /**
   *
   * @value
   */
  picName: string

  /**
   *
   * @value
   */
  picPhone: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolId: number

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  typeId: number

  /**
   *
   * @value
   */
  updateId: number

  /**
   *
   * @value
   */
  updateName: string

  /**
   *
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type CompusAssociationActivityTypeVO = {
  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  statusStr: string

  /**
   *
   * @value
   */
  typeName: string

  /**
   *
   * @value
   */
  typeSort: number
}

/**
 * --
 */
export type CompusAssociationActivityUserVO = {
  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  headImg: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  jobNo: string

  /**
   *
   * @value
   */
  mobilePhone: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  userClass: string

  /**
   *
   * @value
   */
  userId: number

  /**
   *
   * @value
   */
  userName: string
}

/**
 * --
 */
export type CompusAssociationActivityVO = {
  /**
   *
   * @value
   */
  activityName: string

  /**
   *
   * @value
   */
  activityStatusStr: string

  /**
   *
   * @value
   */
  activity_end_time: string

  /**
   *
   * @value
   */
  activity_start_time: string

  /**
   *
   * @value
   */
  associationCode: string

  /**
   *
   * @value
   */
  associationName: string

  /**
   *
   * @value
   */
  enrollNum: number

  /**
   *
   * @value
   */
  enrollStatusStr: string

  /**
   *
   * @value
   */
  enroll_end_time: string

  /**
   *
   * @value
   */
  enroll_start_time: string

  /**
   *
   * @value
   */
  hotSort: number

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isHotStr: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  statusStr: string

  /**
   *
   * @value
   */
  typeName: string
}

/**
 * --
 */
export type CompusAssociationBannerVO = {
  /**
   *
   * @value
   */
  activityId: number

  /**
   *
   * @value
   */
  activityName: string

  /**
   *
   * @value
   */
  associationId: number

  /**
   *
   * @value
   */
  bannerImg: string

  /**
   *
   * @value #datetime()
   */
  endTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  outUrl: string

  /**
   *
   * @value
   */
  positionCode: string

  /**
   *
   * @value
   */
  positionStr: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  showSort: number

  /**
   *
   * @value
   */
  showStr: string

  /**
   *
   * @value #datetime()
   */
  startTime: string

  /**
   *
   * @value
   */
  statusStr: string

  /**
   *
   * @value
   */
  type: number

  /**
   *
   * @value
   */
  typeStr: string
}

/**
 * --
 */
export type CompusAssociationDO = {
  /**
   *
   * @value
   */
  activityNum: number

  /**
   *
   * @value
   */
  address: string

  /**
   *
   * @value
   */
  aim: string

  /**
   *
   * @value
   */
  associationCode: string

  /**
   *
   * @value
   */
  associationName: string

  /**
   *
   * @value
   */
  associationType: number

  /**
   *
   * @value
   */
  badgeImg: string

  /**
   *
   * @value
   */
  createId: number

  /**
   *
   * @value
   */
  createName: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  deleteFlag: number

  /**
   *
   * @value
   */
  hotSort: number

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isAllowIn: number

  /**
   *
   * @value
   */
  isHot: number

  /**
   *
   * @value
   */
  picId: number

  /**
   *
   * @value
   */
  propaganda: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolId: number

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  summary: string

  /**
   *
   * @value
   */
  updateId: number

  /**
   *
   * @value
   */
  updateName: string

  /**
   *
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  userNum: number
}

/**
 * --
 */
export type CompusAssociationUserVO = {
  /**
   *
   * @value
   */
  applyIntro: string

  /**
   *
   * @value
   */
  department: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  mobilePhone: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value #datetime()
   */
  passTime: string

  /**
   *
   * @value
   */
  selfIntro: string

  /**
   *
   * @value
   */
  specialities: string

  /**
   *
   * @value
   */
  userClass: string

  /**
   *
   * @value
   */
  userId: number

  /**
   *
   * @value
   */
  userName: string

  /**
   *
   * @value
   */
  userType: string

  /**
   *
   * @value
   */
  userTypeStr: string
}

/**
 * --
 */
export type CompusAssociationVO = {
  /**
   *
   * @value
   */
  activityNum: number

  /**
   *
   * @value
   */
  address: string

  /**
   *
   * @value
   */
  aim: string

  /**
   *
   * @value
   */
  associationCode: string

  /**
   *
   * @value
   */
  associationName: string

  /**
   *
   * @value
   */
  associationType: number

  /**
   *
   * @value
   */
  associationTypeStr: string

  /**
   *
   * @value
   */
  badgeImg: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  hotSort: number

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isAllowIn: number

  /**
   *
   * @value
   */
  isHot: number

  /**
   *
   * @value
   */
  isHotStr: string

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  picId: number

  /**
   *
   * @value
   */
  picName: string

  /**
   *
   * @value
   */
  picPhone: string

  /**
   *
   * @value
   */
  picUserType: string

  /**
   *
   * @value
   */
  propaganda: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   *
   * @value
   */
  summary: string

  /**
   *
   * @value
   */
  userNum: number
}

/**
 * --
 */
export type CompusPushResponse = {
  /**
   * 新闻公告标题
   * @value
   */
  articleTitle: string

  /**
   * 内容
   * @value
   */
  content: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 内部页面code
   * @value
   */
  innerPageCode: number

  /**
   * 内部页面名称
   * @value
   */
  innerPageName: string

  /**
   * 链接地址
   * @value
   */
  linkAddress: string

  /**
   * 链接类型  1内部，2外部
   * @value
   */
  linkType: number

  /**
   *
   * @value
   */
  linkTypeStr: string

  /**
   * 接收人
   * @value
   */
  receiver: string

  /**
   *
   * @value
   */
  remark: string

  /**
   * 定时发送时间
   * @value #datetime()
   */
  sendTime: string

  /**
   * 发送方式 1立即发送  2定时发送
   * @value
   */
  sendType: number

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 标题
   * @value
   */
  title: string

  /**
   *
   * @value
   */
  type: number

  /**
   *
   * @value
   */
  typeStr: string
}

/**
 * --
 */
export type CompusTagsResponse = {
  /**
   * 分类图标
   * @value
   */
  icon: string

  /**
   * tagsId
   * @value
   */
  id: number

  /**
   * 标签名称
   * @value
   */
  tagsTitle: string
}

/**
 * --
 */
export type CompusTagsVO = {
  /**
   * 编码
   * @value
   */
  code: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 分类名称
   * @value
   */
  icon: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 平台
   * @value
   */
  platform: string

  /**
   *
   * @value
   */
  platformStr: string

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  status: number

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  statusStr: string

  /**
   * 标签名称
   * @value
   */
  tagsTitle: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type DonateItemVO = {
  /**
   * 捐赠书模板
   * @value
   */
  certificateTemplate: string

  /**
   * 子商户号
   * @value
   */
  cpCode: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 结束时间
   * @value #datetime()
   */
  endTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 发票开具说明
   * @value
   */
  invoiceExplain: string

  /**
   * 项目主题颜色
   * @value
   */
  itemColor: string

  /**
   * 项目简介
   * @value
   */
  itemDetail: string

  /**
   * 项目封面
   * @value
   */
  itemFront: string

  /**
   * 项目logo
   * @value
   */
  itemLogo: string

  /**
   * 打款项名称
   * @value
   */
  itemName: string

  /**
   * 项目状态 0:未启用 1:进行中 2:暂停 3:已结束
   * @value
   */
  itemStatus: number

  /**
   *
   * @value
   */
  itemStatusStr: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 页面跳转链接
   * @value
   */
  pageUrl: string

  /**
   * 学校账户
   * @value
   */
  schoolAccount: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 开始时间
   * @value #datetime()
   */
  startTime: string

  /**
   * 累计捐款金额
   * @value
   */
  totalDonateMoney: number

  /**
   *
   * @value
   */
  totalDonateMoneyStr: string

  /**
   * 累计捐款人数
   * @value
   */
  totalDonateNum: number
}

/**
 * --
 */
export type DonateOrderClientVO = {
  /**
   * 证书编号
   * @value
   */
  certificateNo: string

  /**
   * 证书页地址
   * @value
   */
  certificateUrl: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 捐赠留言
   * @value
   */
  donateRemark: string

  /**
   * 头像
   * @value
   */
  headPhoto: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 是否匿名 0:是 1:否
   * @value
   */
  isAnonymous: number

  /**
   *
   * @value
   */
  isAnonymousStr: string

  /**
   * 名称
   * @value
   */
  name: string

  /**
   * 捐赠金额
   * @value
   */
  orderMoney: number

  /**
   *
   * @value
   */
  orderMoneyStr: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string
}

/**
 * --
 */
export type DonateOrderTotalVO = {
  /**
   * 项目id
   * @value
   */
  itemId: number

  /**
   * 累计捐款金额
   * @value
   */
  totalDonateMoney: number

  /**
   *
   * @value
   */
  totalDonateMoneyStr: string

  /**
   * 累计捐款人数
   * @value
   */
  totalDonateNum: number
}

/**
 * --
 */
export type DonateUserOrderVO = {
  /**
   * 校友会
   * @value
   */
  alumniName: string

  /**
   * 证书编号
   * @value
   */
  certificateNo: string

  /**
   * 班级
   * @value
   */
  className: string

  /**
   * 开票税号
   * @value
   */
  companyDuty: string

  /**
   * 公司名称
   * @value
   */
  companyName: string

  /**
   * 联系邮箱
   * @value
   */
  contactEmail: string

  /**
   * 联系电话
   * @value
   */
  contactPhone: string

  /**
   * 联系人
   * @value
   */
  contactUser: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门
   * @value
   */
  departName: string

  /**
   * 捐赠留言
   * @value
   */
  donateRemark: string

  /**
   * 入学年份
   * @value
   */
  entranceYear: string

  /**
   * 毕业年份
   * @value
   */
  graduateYear: string

  /**
   * 头像
   * @value
   */
  headPhoto: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 发票类型 0:企业单位 1:个人
   * @value
   */
  invoiceType: number

  /**
   *
   * @value
   */
  invoiceTypeStr: string

  /**
   * 是否匿名 0:是 1:否
   * @value
   */
  isAnonymous: number

  /**
   *
   * @value
   */
  isAnonymousStr: string

  /**
   * 是否指定用途 0:是 1:否
   * @value
   */
  isAppoint: number

  /**
   *
   * @value
   */
  isAppointStr: string

  /**
   * 是否开发票 0:是 1:否
   * @value
   */
  isInvoice: number

  /**
   *
   * @value
   */
  isInvoiceStr: string

  /**
   * 项目id
   * @value
   */
  itemId: number

  /**
   * 项目名称
   * @value
   */
  itemName: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业
   * @value
   */
  majorName: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 第三方昵称
   * @value
   */
  nickName: string

  /**
   * 捐赠金额
   * @value
   */
  orderMoney: number

  /**
   *
   * @value
   */
  orderMoneyStr: string

  /**
   * 订单号
   * @value
   */
  orderNo: string

  /**
   * 实付金额
   * @value
   */
  payMoney: number

  /**
   *
   * @value
   */
  payMoneyStr: string

  /**
   * 支付交易订单号
   * @value
   */
  payNo: string

  /**
   * 支付状态：1等待支付、2支付成功、3支付失败、4订单关闭
   * @value
   */
  payStatus: number

  /**
   *
   * @value
   */
  payStatusStr: string

  /**
   * 支付时间
   * @value
   */
  payTime: string

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   *
   * @value
   */
  payTypeStr: string

  /**
   * 手机号
   * @value
   */
  phone: string

  /**
   * 平台
   * @value
   */
  platform: string

  /**
   *
   * @value
   */
  platformStr: string

  /**
   * 捐赠用途
   * @value
   */
  purpose: number

  /**
   *
   * @value
   */
  purposeStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别 1:男 2:女
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexStr: string

  /**
   * 订单状态 0处理中 1已完成
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 第三方id
   * @value
   */
  thirdId: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 与学校的关系
   * @value
   */
  userType: number

  /**
   *
   * @value
   */
  userTypeStr: string

  /**
   * 工作单位
   * @value
   */
  workUnit: string
}

/**
 * --
 */
export type DonateUserVO = {
  /**
   * 校友会
   * @value
   */
  alumniName: string

  /**
   * 班级
   * @value
   */
  className: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 部门
   * @value
   */
  departName: string

  /**
   *
   * @value
   */
  donateAmount: number

  /**
   *
   * @value
   */
  donateAmountStr: string

  /**
   *
   * @value
   */
  donateNum: number

  /**
   * 入学年份
   * @value
   */
  entranceYear: string

  /**
   * 毕业年份
   * @value
   */
  graduateYear: string

  /**
   * 头像
   * @value
   */
  headPhoto: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 是否匿名 0:是 1:否
   * @value
   */
  isAnonymous: number

  /**
   *
   * @value
   */
  isAnonymousStr: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业
   * @value
   */
  majorName: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 第三方昵称
   * @value
   */
  nickName: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 手机号
   * @value
   */
  phone: string

  /**
   * 平台
   * @value
   */
  platform: string

  /**
   *
   * @value
   */
  platformStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别 1:男 2:女
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexStr: string

  /**
   * 第三方id
   * @value
   */
  thirdId: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 与学校的关系
   * @value
   */
  userType: number

  /**
   *
   * @value
   */
  userTypeStr: string

  /**
   * 工作单位
   * @value
   */
  workUnit: string
}

/**
 * --
 */
export type EncryptKeyVO = {
  /**
   * 私钥
   * @value
   */
  privateKey: string

  /**
   * 公钥
   * @value
   */
  publicKey: string
}

/**
 * --
 */
export type FrontSchoolBuildingVO = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区ID
   * @value
   */
  areaId: number

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string
}

/**
 * --
 */
export type FrontSchoolFloorVO = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区ID
   * @value
   */
  areaId: number

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼层编号
   * @value
   */
  floorCode: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string
}

/**
 * --
 */
export type FrontSchoolRoomVO = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区ID
   * @value
   */
  areaId: number

  /**
   * 楼栋编码
   * @value
   */
  buildingCode: string

  /**
   * 楼层编码
   * @value
   */
  floorCode: string

  /**
   * 房间编码
   * @value
   */
  roomCode: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string
}

/**
 * --
 */
export type KayRoadWaterOrderVO = {
  /**
   * 账户ID
   * @value
   */
  accID: string

  /**
   * 房间名称
   * @value
   */
  areaName: string

  /**
   * 消费前赠送金额
   * @value
   */
  befmoneygiven: string

  /**
   * 消费前现金余额
   * @value
   */
  befmoneyreal: string

  /**
   * 下发时间
   * @value
   */
  consumeDT: string

  /**
   * 设备名称
   * @value
   */
  devName: string

  /**
   * 备注，月卡消费!=0 其他消费=0
   * @value
   */
  monthConSumeTimes: string

  /**
   * 预扣金额
   * @value
   */
  perMoney: string

  /**
   * 区域
   * @value
   */
  quyu: string

  /**
   * 手机号
   * @value
   */
  telPhone: string

  /**
   * 上传时间
   * @value
   */
  upDT: string

  /**
   * 消费后余额
   * @value
   */
  upLeadMoney: string

  /**
   * 消费金额
   * @value
   */
  upMoney: string
}

/**
 * --
 */
export type KtClassTeacherVO = {
  /**
   * 班级ID
   * @value
   */
  classId: number

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否班主任 0是1否
   * @value
   */
  isSuper: number

  /**
   * 是否班主任
   * @value
   */
  isSuperName: string

  /**
   * 教职工工号
   * @value
   */
  jobNo: string

  /**
   * 任课科目
   * @value
   */
  subjects: string

  /**
   * 老师ID
   * @value
   */
  teacherId: number

  /**
   * 教职工身份证号
   * @value
   */
  teacherIdCard: string

  /**
   * 教职工名称
   * @value
   */
  teacherName: string

  /**
   * 教职工手机
   * @value
   */
  teacherPhone: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type KtClassVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 年级名称
   * @value
   */
  gradeName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 班级名称
   * @value
   */
  name: string

  /**
   * 学年
   * @value
   */
  schoolYear: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type KtGradeVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 年级类型
   * @value
   */
  gradeType: string

  /**
   * 年级类型
   * @value
   */
  gradeTypeName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 年级名称
   * @value
   */
  name: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type KtStudentVO = {
  /**
   * 班级Id
   * @value
   */
  classId: number

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 学籍号
   * @value
   */
  code: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 家长手机
   * @value
   */
  guardianPhone: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  identityCard: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别
   * @value
   */
  sex: string

  /**
   * 类型（0普通学生1借读生）
   * @value
   */
  type: number

  /**
   * 类型
   * @value
   */
  typeName: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type KtTeacherVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  identityCard: string

  /**
   * 工号
   * @value
   */
  jobNo: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 名称
   * @value
   */
  name: string

  /**
   * 性别
   * @value
   */
  sex: string

  /**
   * 修改人
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type KtUserIdentityVO = {
  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 学籍号
   * @value
   */
  code: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 是否已注册 0是1否
   * @value
   */
  hasJoin: number

  /**
   * 是否已注册
   * @value
   */
  hasJoinStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  identityCard: string

  /**
   * 身份id
   * @value
   */
  identityId: number

  /**
   * 身份姓名
   * @value
   */
  identityName: string

  /**
   * 是否家委会 0是1否
   * @value
   */
  inHomeCommittee: number

  /**
   * 是否家委会
   * @value
   */
  inHomeCommitteeStr: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 关系
   * @value
   */
  relationship: string

  /**
   * 关系
   * @value
   */
  relationshipStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type LsCheckerVO = {
  /**
   * 发证人名称
   * @value
   */
  checkerUserName: string

  /**
   * 发证人手机号
   * @value
   */
  checkerUserPhone: string

  /**
   *
   * @value
   */
  id: number
}

/**
 * --
 */
export type Mapstringstring = {}

/**
 * --
 */
export type MarketingDutyUserVO = {
  /**
   * 部门存储json
   * @value
   */
  departmentJson: string

  /**
   * 关键字(院系/专业/部门/班级)
   * @value
   */
  departmentName: string

  /**
   * 负责人部门类型 1院系2专业3班级4部门
   * @value
   */
  departmentType: string

  /**
   *
   * @value
   */
  departmentTypeStr: string

  /**
   * 职务ID
   * @value
   */
  dutyId: number

  /**
   * 职务名称
   * @value
   */
  dutyName: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type MarketingFormApplyVO = {
  /**
   *
   * @value
   */
  id: number

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 手机号
   * @value
   */
  phone: string
}

/**
 * --
 */
export type MarketingFormDetailVO = {
  /**
   * 结束时间
   * @value
   */
  endTime: string

  /**
   * 填写结束时间限制（HH:mm）
   * @value
   */
  enterTimeEndLimit: string

  /**
   * 填写开始时间限制（HH:mm）
   * @value
   */
  enterTimeStartLimit: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 表单名称
   * @value
   */
  name: string

  /**
   * 是否需要审批 0是1否
   * @value
   */
  needCheck: number

  /**
   * 是否需要结束时间 0是1否
   * @value
   */
  needEndTime: number

  /**
   * 是否需要限制填写时间 0是1否
   * @value
   */
  needEnterTimeLimit: number

  /**
   * 流程信息
   * @rule 2
   */
  nodeList: MarketingFormNodeVO[]

  /**
   * 预览地址
   * @value
   */
  previewUrl: string

  /**
   * 申请发布理由
   * @value
   */
  remark: string

  /**
   * 状态 1已审核2待审核4已拒绝
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 总填写份数限制 0为不限*
   * @value
   */
  totalCountLimit: number
}

/**
 * --
 */
export type MarketingFormNodeVO = {
  /**
   * 流程信息
   * @value
   */
  dutyList: string[]

  /**
   * 表单id
   * @value
   */
  formId: number

  /**
   * 节点名称
   * @value
   */
  nodeName: string

  /**
   * 节点类型 1学生流程节点2教职工流程节点
   * @value
   */
  nodeType: number
}

/**
 * --
 */
export type MarketingFormSchoolSettingVO = {
  /**
   * 申请发布人类型 0:指定人 1:所有人
   * @value
   */
  applyType: number

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string
}

/**
 * --
 */
export type MarketingFormVO = {
  /**
   * 申请发布理由
   * @value
   */
  applyRemark: string

  /**
   * 申请时间
   * @value #datetime()
   */
  applyTime: string

  /**
   * 申请手机号
   * @value
   */
  createAccount: string

  /**
   * 申请人姓名
   * @value
   */
  createName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 表单名称
   * @value
   */
  name: string

  /**
   * 是否需要审批 0是1否
   * @value
   */
  needCheck: number

  /**
   * 状态 1已审核2待审核4已拒绝
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 审核人
   * @value
   */
  updateName: string

  /**
   * 审核时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type MarketingSchoolUserNewVO = {
  /**
   * 目前居住地
   * @value
   */
  areaStr: string

  /**
   * 返还地
   * @value
   */
  backAreaStr: string

  /**
   * 返还地-市
   * @value
   */
  backCity: string

  /**
   *
   * @value
   */
  backCityCode: number

  /**
   * 返还地-区/县
   * @value
   */
  backDistrict: string

  /**
   *
   * @value
   */
  backDistrictCode: number

  /**
   * 返还地-省份
   * @value
   */
  backProvince: string

  /**
   *
   * @value
   */
  backProvinceCode: number

  /**
   * 返校备注：车次或航班号
   * @value
   */
  backRemark: string

  /**
   *
   * @value
   */
  backWay: number

  /**
   * 返校方式
   * @value
   */
  backWayStr: string

  /**
   * 楼栋
   * @value
   */
  building: string

  /**
   * 后台备注
   * @value
   */
  centerRemark: string

  /**
   * 后台备注操作人
   * @value
   */
  centerUpdateName: string

  /**
   * 市
   * @value
   */
  city: string

  /**
   * 市编码
   * @value
   */
  cityCode: number

  /**
   * 班级/部门编码
   * @value
   */
  classCode: string

  /**
   *
   * @value
   */
  classId: number

  /**
   * 班级
   * @value
   */
  className: string

  /**
   * 是否接触过高发地区 0是1否
   * @value
   */
  contactArea: number

  /**
   * 是否去过高发地区
   * @value
   */
  contactAreaStr: string

  /**
   * 接触日期
   * @value #datetime()
   */
  contactDate: string

  /**
   * 接触日期 yyyy-MM-dd
   * @value
   */
  contactDateStr: string

  /**
   * 是否接触过确诊者 0是1否
   * @value
   */
  contactPatient: number

  /**
   * 是否接触过确诊者
   * @value
   */
  contactPatientStr: string

  /**
   * 国家
   * @value
   */
  country: string

  /**
   * 查询日期 yyyy-MM-dd
   * @value
   */
  createDate: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 创建时间 yyyy-MM-dd HH:mm:ss
   * @value
   */
  createTimeStr: string

  /**
   * 院系/部门
   * @value
   */
  department: string

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 区/县
   * @value
   */
  district: string

  /**
   * 区/县编码
   * @value
   */
  districtCode: number

  /**
   * 招生年份（年级）
   * @value
   */
  entranceYear: number

  /**
   * 拓展字段
   * @value
   */
  extField: string

  /**
   * 房间号
   * @value
   */
  floor: string

  /**
   * 是否全日制 0是1否
   * @value
   */
  fullTimeFlag: number

  /**
   *
   * @value
   */
  hasTodayDetail: number

  /**
   *
   * @value
   */
  hasTodayDetailExportStr: string

  /**
   * 今日是否打卡 0是1否
   * @value
   */
  hasTodayDetailStr: string

  /**
   * 健康情况 1正常2发烧/咳嗽等症状3其它
   * @value
   */
  healthStatus: number

  /**
   * 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
   * @value
   */
  healthStatusNew: string

  /**
   * 健康情况new
   * @value
   */
  healthStatusNewStr: string

  /**
   * 健康情况
   * @value
   */
  healthStatusStr: string

  /**
   * 是否春节期间在校 0是1否
   * @value
   */
  holidayInSchool: number

  /**
   * 是否春节期间在校
   * @value
   */
  holidayInSchoolStr: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  identity: string

  /**
   * 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
   * @value
   */
  identitySecondType: string

  /**
   * 身份二级分类
   * @value
   */
  identitySecondTypeStr: string

  /**
   *
   * @value
   */
  identityType: number

  /**
   * 身份类型
   * @value
   */
  identityTypeStr: string

  /**
   * 是否政府定点集中隔离 0是1否
   * @value
   */
  inGovQuarantine: number

  /**
   *
   * @value
   */
  inGovQuarantineStr: string

  /**
   * 是否居家健康监测或隔离 0是1否
   * @value
   */
  inHomeQuarantine: number

  /**
   *
   * @value
   */
  inHomeQuarantineStr: string

  /**
   * 是否在校 0是1否
   * @value
   */
  inSchool: number

  /**
   * 是否校内集中隔离 0是1否
   * @value
   */
  inSchoolQuarantine: number

  /**
   *
   * @value
   */
  inSchoolQuarantineStr: string

  /**
   * 是否在校
   * @value
   */
  inSchoolStr: string

  /**
   * 居住区是否有确诊、无症状、疑似 0是 1否
   * @value
   */
  isCommunityPatient: number

  /**
   * 居住区是否有确诊、无症状、疑似
   * @value
   */
  isCommunityPatientStr: string

  /**
   * 家庭成员是否有确诊、疑似、感染者 0是 1否
   * @value
   */
  isFamiliyPatient: number

  /**
   * 家庭成员是否有确诊、疑似、感染者
   * @value
   */
  isFamiliyPatientStr: string

  /**
   *
   * @value
   */
  isInCompany: number

  /**
   * 今日是否在实习单位
   * @value
   */
  isInCompanyStr: string

  /**
   * 是否确诊、无症状 0是1否
   * @value
   */
  isPatient: number

  /**
   * 是否确诊、无症状
   * @value
   */
  isPatientStr: string

  /**
   * 是否为疑似病例 0是1否
   * @value
   */
  isSuspected: number

  /**
   * 是否为疑似病例
   * @value
   */
  isSuspectedStr: string

  /**
   *
   * @value
   */
  isTodayBack: number

  /**
   * 今日是否返校
   * @value
   */
  isTodayBackStr: string

  /**
   * 隔离地点
   * @value
   */
  isolatedPlace: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   *
   * @value #datetime()
   */
  lastDetailTime: string

  /**
   * 最后打卡时间
   * @value
   */
  lastDetailTimeStr: string

  /**
   * 最近一次核酸检测日期（yyyy-MM-dd）
   * @value
   */
  lastNucleicAcidDate: string

  /**
   * 现在联系方式
   * @value
   */
  linkPhone: string

  /**
   * 定位信息
   * @value
   */
  locationInfo: string

  /**
   * 经纬度
   * @value
   */
  longitudeAndLatitude: string

  /**
   * 登录手机号
   * @value
   */
  mobilePhone: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 未接种疫苗原因
   * @value
   */
  noVaccineReasonStr: string

  /**
   * 近七日是否有核酸检测 0是1否
   * @value
   */
  nucleicAcidFlag: number

  /**
   *
   * @value
   */
  nucleicAcidFlagStr: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 家长联系方式
   * @value
   */
  parentsPhone: string

  /**
   * 就诊医院
   * @value
   */
  patientHospital: string

  /**
   * 省
   * @value
   */
  province: string

  /**
   * 省编码
   * @value
   */
  provinceCode: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
   * @value
   */
  roommateHealthStatus: string

  /**
   * 共同居住人员健康情况
   * @value
   */
  roommateHealthStatusStr: string

  /**
   *
   * @value
   */
  rowId: number

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   * 专业
   * @value
   */
  specialities: string

  /**
   * 专业编码
   * @value
   */
  specialitiesCode: string

  /**
   *
   * @value
   */
  specialitiesId: number

  /**
   * 今日体温
   * @value
   */
  temperature: string

  /**
   * 今日下午体温
   * @value
   */
  temperatureAfter: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 更新时间 yyyy-MM-dd HH:mm:ss
   * @value
   */
  updateTimeStr: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineOneTime: string

  /**
   * 疫苗接种情况
   * @value
   */
  vaccineStatusStr: string

  /**
   * 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineThreeTime: string

  /**
   * 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineTwoTime: string
}

/**
 * --
 */
export type MarketingSchoolUserVO = {
  /**
   * 楼栋
   * @value
   */
  building: string

  /**
   *
   * @value
   */
  classId: number

  /**
   * 班级
   * @value
   */
  className: string

  /**
   * 查询日期 yyyy-MM-dd
   * @value
   */
  createDate: string

  /**
   * 院系/部门
   * @value
   */
  department: string

  /**
   *
   * @value
   */
  departmentId: number

  /**
   * 学历 1研究生2本科3大专4中专5高中6中学7小学8幼儿园
   * @value
   */
  eduBg: string

  /**
   * 学历
   * @value
   */
  eduBgStr: string

  /**
   * 招生年份（年级）
   * @value
   */
  entranceYear: number

  /**
   * 拓展字段
   * @value
   */
  extField: string

  /**
   * 房间号
   * @value
   */
  floor: string

  /**
   * 是否全日制 0是1否
   * @value
   */
  fullTimeFlag: number

  /**
   * 全日制类型
   * @value
   */
  fullTimeFlagStr: string

  /**
   *
   * @value
   */
  hasTodayDetail: number

  /**
   *
   * @value
   */
  hasTodayDetailExportStr: string

  /**
   * 今日是否打卡 0是1否
   * @value
   */
  hasTodayDetailStr: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  identityType: number

  /**
   * 身份类型
   * @value
   */
  identityTypeStr: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 最后打卡日期
   * @value #datetime()
   */
  lastDetailDate: string

  /**
   *
   * @value #datetime()
   */
  lastDetailTime: string

  /**
   * 最后打卡时间
   * @value
   */
  lastDetailTimeStr: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 未接种疫苗原因
   * @value
   */
  noVaccineReasonStr: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   *
   * @value
   */
  rowId: number

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   * 性别
   * @value
   */
  sexStr: string

  /**
   * 专业
   * @value
   */
  specialities: string

  /**
   *
   * @value
   */
  specialitiesId: number

  /**
   * 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineOneTime: string

  /**
   * 疫苗接种情况
   * @value
   */
  vaccineStatusStr: string

  /**
   * 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineThreeTime: string

  /**
   * 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineTwoTime: string
}

/**
 * --
 */
export type ModelAndView = {
  /**
   *
   * @value
   */
  empty: boolean
  model: {}
  modelMap: {}

  /**
   *
   * @value
   */
  reference: boolean

  /**
   *
   * @value [CONTINUE,SWITCHING_PROTOCOLS,PROCESSING,CHECKPOINT,OK,CREATED,ACCEPTED,NON_AUTHORITATIVE_INFORMATION,NO_CONTENT,RESET_CONTENT,PARTIAL_CONTENT,MULTI_STATUS,ALREADY_REPORTED,IM_USED,MULTIPLE_CHOICES,MOVED_PERMANENTLY,FOUND,MOVED_TEMPORARILY,SEE_OTHER,NOT_MODIFIED,USE_PROXY,TEMPORARY_REDIRECT,PERMANENT_REDIRECT,BAD_REQUEST,UNAUTHORIZED,PAYMENT_REQUIRED,FORBIDDEN,NOT_FOUND,METHOD_NOT_ALLOWED,NOT_ACCEPTABLE,PROXY_AUTHENTICATION_REQUIRED,REQUEST_TIMEOUT,CONFLICT,GONE,LENGTH_REQUIRED,PRECONDITION_FAILED,PAYLOAD_TOO_LARGE,REQUEST_ENTITY_TOO_LARGE,URI_TOO_LONG,REQUEST_URI_TOO_LONG,UNSUPPORTED_MEDIA_TYPE,REQUESTED_RANGE_NOT_SATISFIABLE,EXPECTATION_FAILED,I_AM_A_TEAPOT,INSUFFICIENT_SPACE_ON_RESOURCE,METHOD_FAILURE,DESTINATION_LOCKED,UNPROCESSABLE_ENTITY,LOCKED,FAILED_DEPENDENCY,TOO_EARLY,UPGRADE_REQUIRED,PRECONDITION_REQUIRED,TOO_MANY_REQUESTS,REQUEST_HEADER_FIELDS_TOO_LARGE,UNAVAILABLE_FOR_LEGAL_REASONS,INTERNAL_SERVER_ERROR,NOT_IMPLEMENTED,BAD_GATEWAY,SERVICE_UNAVAILABLE,GATEWAY_TIMEOUT,HTTP_VERSION_NOT_SUPPORTED,VARIANT_ALSO_NEGOTIATES,INSUFFICIENT_STORAGE,LOOP_DETECTED,BANDWIDTH_LIMIT_EXCEEDED,NOT_EXTENDED,NETWORK_AUTHENTICATION_REQUIRED]
   */
  status: string

  /**
   *
   * @rule
   */
  view: View

  /**
   *
   * @value
   */
  viewName: string
}

/**
 * --
 */
export type OperationLogVO = {
  /**
   * 时间
   * @value #datetime()
   */
  activeTime: string

  /**
   * 项目名称
   * @value
   */
  appName: string

  /**
   * 改变的数据
   * @value
   */
  dataChanges: string
  dataId: {}

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * ip
   * @value
   */
  ip: string

  /**
   * 操作类型
   * @value
   */
  operationType: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * sessionId
   * @value
   */
  sessionId: string

  /**
   * 表名
   * @value
   */
  tableName: string

  /**
   * url
   * @value
   */
  url: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 用户姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type PageResultApiElectricAreaVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: ApiElectricAreaVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultApiElectricBuildingVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: ApiElectricBuildingVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultApiElectricFloorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: ApiElectricFloorVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultApiElectricRoomVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: ApiElectricRoomVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultApiPayCenterListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: ApiPayCenterListVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultApiQueryOrderPageVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: ApiQueryOrderPageVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultAppJiaofeiListStatVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: AppJiaofeiListStatVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultAppJiaofeiPayListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: AppJiaofeiPayListVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultAppJiaofeiProjectStatVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: AppJiaofeiProjectStatVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultAuthOrgVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: AuthOrgVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultAuthWechatmsgPushApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: AuthWechatmsgPushApiVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultAuthWechatmsgSchoolApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: AuthWechatmsgSchoolApiVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultBaseDataDO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: BaseDataDO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultBillMonthReportInfoVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: BillMonthReportInfoVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultBillReportInfoVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: BillReportInfoVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultBillReportVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: BillReportVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterCpBillDetailVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterCpBillDetailVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterCpBillPayTypeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterCpBillPayTypeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterCustomConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterCustomConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterIndexTotalDataVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterIndexTotalDataVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiBatchRefundFormVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiBatchRefundFormVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiBatchRefundVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiBatchRefundVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiBillTemplateVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiBillTemplateVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiBillVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiBillVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiDeptVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiDeptVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiDictionaryVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiDictionaryVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiInvoiceCodeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiInvoiceCodeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiInvoiceInfoDO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiInvoiceInfoDO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiInvoiceInfoVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiInvoiceInfoVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiInvoiceOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiInvoiceOrderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiInvoiceTypeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiInvoiceTypeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiListVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiOrderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiOrderVO_1 = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiOrderVO_1[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiPermissionsVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiPermissionsVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiProBatchVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiProBatchVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiProjectTypeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiProjectTypeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiProjectVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiProjectVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiRefundVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiRefundVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiReportExportVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiReportExportVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterJiaofeiTypeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterJiaofeiTypeVO_1[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterNetOperatorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterNetOperatorVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterNetPackageVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterNetPackageVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterNetZoneVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterNetZoneVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterOrderNetVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterOrderNetVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterOrderSpecialVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterOrderSpecialVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterOrderStatsVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterOrderStatsVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterPincardVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterPincardVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSchoolAreaVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSchoolAreaVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSchoolBuildingVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSchoolBuildingVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSchoolFloorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSchoolFloorVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSchoolJiaofeiProjectVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSchoolJiaofeiProjectVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSchoolRoomUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSchoolRoomUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSchoolRoomVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSchoolRoomVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSpecialConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSpecialConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSysSchoolVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSysSchoolVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSysUserSchoolListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSysUserSchoolListVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterSysUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterSysUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterTaskVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterTaskVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCenterUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CenterUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusArticleFaqVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusArticleFaqVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusAssociationActivityTypeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusAssociationActivityTypeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusAssociationActivityUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusAssociationActivityUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusAssociationActivityVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusAssociationActivityVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusAssociationBannerVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusAssociationBannerVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusAssociationUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusAssociationUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusAssociationVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusAssociationVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusPushResponse = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusPushResponse[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusTagsResponse = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusTagsResponse[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultCompusTagsVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: CompusTagsVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultDonateItemVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: DonateItemVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultDonateOrderClientVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: DonateOrderClientVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultDonateUserOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: DonateUserOrderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultDonateUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: DonateUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultFrontSchoolBuildingVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: FrontSchoolBuildingVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultFrontSchoolFloorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: FrontSchoolFloorVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultFrontSchoolRoomVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: FrontSchoolRoomVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKayRoadWaterOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KayRoadWaterOrderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKtClassTeacherVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KtClassTeacherVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKtClassVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KtClassVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKtGradeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KtGradeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKtStudentVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KtStudentVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKtTeacherVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KtTeacherVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultKtUserIdentityVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: KtUserIdentityVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultLsCheckerVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: LsCheckerVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultMarketingDutyUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: MarketingDutyUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultMarketingFormApplyVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: MarketingFormApplyVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultMarketingFormVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: MarketingFormVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultMarketingSchoolUserNewVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: MarketingSchoolUserNewVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultMarketingSchoolUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: MarketingSchoolUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultOperationLogVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: OperationLogVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultPlatformEacctOpenApplyVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: PlatformEacctOpenApplyVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSchoolCenterImportRecordVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SchoolCenterImportRecordVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSelectResult = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SelectResult[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSelectResult_1 = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SelectResult_1[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSfCampusSceneryTypeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SfCampusSceneryTypeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSfCampusSceneryVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SfCampusSceneryVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSfUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SfUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSubsidyItemListVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SubsidyItemListVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSubsidyItemVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SubsidyItemVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSubsidyNoticeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SubsidyNoticeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSubsidyPushRecordVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SubsidyPushRecordVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultSubsidySubItemVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: SubsidySubItemVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpCpAccountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpCpAccountVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpCpMainVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpCpMainVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpCpVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpCpVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpRedbagAccountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpRedbagAccountVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpRedbagBalanceVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpRedbagBalanceVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpRedbagBillVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpRedbagBillVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpRedbagConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpRedbagConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpRedbagNodeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpRedbagNodeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpRedbagVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpRedbagVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultUpUserRedbagVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: UpUserRedbagVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnAcceptanceLetterVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnAcceptanceLetterVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnApplicationConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnApplicationConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnBaseConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnBaseConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnBatchVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnBatchVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnBuildingVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnBuildingVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnDeviceVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnDeviceVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnFloorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnFloorVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnFormTitleVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnFormTitleVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnFormUserVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnFormUserVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnGenerateStudentNoVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnGenerateStudentNoVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnHallApplicationConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnHallApplicationConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnHallProcessConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnHallProcessConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnInClassVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnInClassVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnInStudentVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnInStudentVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnOpenBankCardVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnOpenBankCardVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnPayConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnPayConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnProcessConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnProcessConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnProcessCountTableHeaderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnProcessCountTableHeaderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnProductAndPicVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnProductAndPicVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnReceiveOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnReceiveOrderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnRoomFeeConfigVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnRoomFeeConfigVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnRoomTreeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnRoomTreeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnRoomVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnRoomVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSchoolOrganizationTreeVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSchoolOrganizationTreeVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSchoolOrganizationVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSchoolOrganizationVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSchoolZoneVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSchoolZoneVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSelectPhoneOperatorVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSelectPhoneOperatorVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSelectPhoneOrderVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSelectPhoneOrderVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSelectPhonePackageVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSelectPhonePackageVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnSelectPhoneVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnSelectPhoneVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentBaseApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentBaseApiVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentImportVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentImportVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentInCountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentInCountVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentLatestRegisterVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentLatestRegisterVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentProcessDetailVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentProcessDetailVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentRegisterBaseApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentRegisterBaseApiVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentReportNumCountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentReportNumCountVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentReportSexCountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentReportSexCountVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentToClassOrganizationVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentToClassOrganizationVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentToClassVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentToClassVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnStudentTrafficCountVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnStudentTrafficCountVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnTeacherAppRoleVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnTeacherAppRoleVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnTeacherAppUserApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnTeacherAppUserApiVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnUnitVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnUnitVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultWnZoneRoomApiVO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: WnZoneRoomApiVO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultobject = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string
  rows: {}[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResultstring = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @value
   */
  rows: string[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult健康状况日报VO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 健康状况日报VO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult健康状况登记VO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 健康状况登记VO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult健康状况登记地区统计VOroute = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 健康状况登记地区统计VOroute[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult健康状况登记地区统计VO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 健康状况登记地区统计VO_1[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult手抄表账单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     *
     * @value
     */
    alertType: number

    /**
     *
     * @value
     */
    bizCode: string
    data: {}

    /**
     *
     * @value
     */
    message: string

    /**
     *
     * @rule 2
     */
    rows: 手抄表账单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息[]

    /**
     *
     * @value
     */
    statusCode: number

    /**
     *
     * @value
     */
    success: boolean

    /**
     *
     * @value
     */
    total: number
  }

/**
 * --
 */
export type PageResult支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     *
     * @value
     */
    alertType: number

    /**
     *
     * @value
     */
    bizCode: string
    data: {}

    /**
     *
     * @value
     */
    message: string

    /**
     *
     * @rule 2
     */
    rows: 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息[]

    /**
     *
     * @value
     */
    statusCode: number

    /**
     *
     * @value
     */
    success: boolean

    /**
     *
     * @value
     */
    total: number
  }

/**
 * --
 */
export type PageResult支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息_1 =
  {
    /**
     *
     * @value
     */
    alertType: number

    /**
     *
     * @value
     */
    bizCode: string
    data: {}

    /**
     *
     * @value
     */
    message: string

    /**
     *
     * @rule 2
     */
    rows: 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息_1[]

    /**
     *
     * @value
     */
    statusCode: number

    /**
     *
     * @value
     */
    success: boolean

    /**
     *
     * @value
     */
    total: number
  }

/**
 * --
 */
export type PageResult文章返回参数 = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 文章返回参数[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult校区查询 = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 校区查询[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult用户角色VO = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 用户角色VO[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult轮播图表返回数据参数 = {
  /**
   *
   * @value
   */
  alertType: number

  /**
   *
   * @value
   */
  bizCode: string
  data: {}

  /**
   *
   * @value
   */
  message: string

  /**
   *
   * @rule 2
   */
  rows: 轮播图表返回数据参数[]

  /**
   *
   * @value
   */
  statusCode: number

  /**
   *
   * @value
   */
  success: boolean

  /**
   *
   * @value
   */
  total: number
}

/**
 * --
 */
export type PageResult退款订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     *
     * @value
     */
    alertType: number

    /**
     *
     * @value
     */
    bizCode: string
    data: {}

    /**
     *
     * @value
     */
    message: string

    /**
     *
     * @rule 2
     */
    rows: 退款订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息[]

    /**
     *
     * @value
     */
    statusCode: number

    /**
     *
     * @value
     */
    success: boolean

    /**
     *
     * @value
     */
    total: number
  }

/**
 * --
 */
export type PlatformEacctOpenApplyVO = {
  /**
   *
   * @value
   */
  applyFrom: string

  /**
   * 用户id
   * @value
   */
  corpCisNo: string

  /**
   * 申请时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 户名
   * @value
   */
  custName: string

  /**
   * 性别,1男，2女
   * @value
   */
  gender: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 二类账号
   * @value
   */
  mediumId: string

  /**
   * 手机号码
   * @value
   */
  mobileNo: string

  /**
   *
   * @value
   */
  platform: string

  /**
   *
   * @value
   */
  platformName: string

  /**
   * 错误提示
   * @value
   */
  remark: string

  /**
   * 账户状态，1申请中，2受理成功,3开户（绑卡）成功，4开户（绑卡）失败
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string

  /**
   * 绑定时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type RedBagExtendVO = {
  /**
   * 红包金额，单位分
   * @value
   */
  activityRedbagAmount: number

  /**
   * 红包领取时间
   * @value
   */
  createTime: string

  /**
   * 是否是新领红包\n 0:是  1：否
   * @value
   */
  isNew: number

  /**
   * 红包金额，单位分
   * @value
   */
  redbagAmount: number

  /**
   * 使用红包的最低消费金额
   * @value
   */
  redbagMinPayment: number

  /**
   * 红包名称
   * @value
   */
  redbagName: string

  /**
   * 红包使用说明，注意说明中的换行使用的是\n，请根据实际情况替换
   * @value
   */
  redbagRemark: string

  /**
   * 领红包类型\n 1:开户红包
   * @value
   */
  type: number
}

/**
 * --
 */
export type SchoolCenterImportRecordVO = {
  /**
   *
   * @value
   */
  createMobilePhone: string

  /**
   *
   * @value
   */
  createName: string

  /**
   *
   * @value
   */
  createNickName: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  importNumber: number

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  type: number

  /**
   *
   * @value
   */
  typeStr: string
}

/**
 * --
 */
export type SelectResult = {
  /**
   * key
   * @value
   */
  id: string

  /**
   * value
   * @value
   */
  text: string

  /**
   * url
   * @value
   */
  url: string
}

/**
 * --
 */
export type SelectResult_1 = {
  /**
   * key
   * @value
   */
  id: string

  /**
   * value
   * @value
   */
  text: string
}

/**
 * --
 */
export type SfCampusSceneryTypeVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   * 排序
   * @value
   */
  typeSort: number

  /**
   *
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string
}

/**
 * --
 */
export type SfCampusSceneryVO = {
  /**
   *
   * @value
   */
  content: string

  /**
   *
   * @value
   */
  createId: number

  /**
   *
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 图片，逗号隔开
   * @value
   */
  images: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0禁用 1启用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 标题
   * @value
   */
  title: string

  /**
   * 分类id
   * @value
   */
  typeId: number

  /**
   * 分类名称
   * @value
   */
  typeName: string

  /**
   *
   * @value
   */
  updateId: number

  /**
   *
   * @value
   */
  updateName: string

  /**
   *
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string
}

/**
 * --
 */
export type SfUserVO = {
  /**
   * 地区详情
   * @value
   */
  address: string

  /**
   * 地区代码
   * @value
   */
  areaCode: string

  /**
   * 地区名称
   * @value
   */
  areaName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 院系
   * @value
   */
  department: string

  /**
   * 学历
   * @value
   */
  education: string

  /**
   * 入学年份
   * @value
   */
  enrollmentYear: number

  /**
   *
   * @value
   */
  id: number

  /**
   * 是否实名认证 0否 1是
   * @value
   */
  isRealNameAuth: number

  /**
   * 邮箱
   * @value
   */
  mail: string

  /**
   * 手机号
   * @value
   */
  mobile: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 校内身份类型 1学生 2教职工 4家长 8校友
   * @value
   */
  schoolIdentityType: number

  /**
   *
   * @value
   */
  schoolName: string

  /**
   * 专业
   * @value
   */
  specialities: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 学校编码
   * @value
   */
  userId: number

  /**
   * 学校名称
   * @value
   */
  userName: string
}

/**
 * --
 */
export type SubsidyItemListTotalMoneyVO = {
  /**
   * 项目名称
   * @value
   */
  itemName: string

  /**
   * 金额
   * @value
   */
  money: number

  /**
   *
   * @value
   */
  moneyStr: string

  /**
   * 总人数
   * @value
   */
  userCount: number
}

/**
 * --
 */
export type SubsidyItemListVO = {
  /**
   * 清分账户ID
   * @value
   */
  accountId: number

  /**
   * 绑定状态： 0-已绑定， 1-未绑定
   * @value
   */
  authStatus: number

  /**
   *
   * @value
   */
  authStatusName: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 院系部门
   * @value
   */
  departmentName: string

  /**
   * 提现状态
   * @value
   */
  extractStatusStr: string

  /**
   * 提现时间
   * @value
   */
  extractTime: string

  /**
   * 提现类型 1:手动提现 2:自动提现
   * @value
   */
  extractType: number

  /**
   *
   * @value
   */
  extractTypeStr: string

  /**
   * 失败原因
   * @value
   */
  failMsg: string

  /**
   * 发放类型
   * @value
   */
  grantType: number

  /**
   *
   * @value
   */
  grantTypeName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  identityId: string

  /**
   * 项目id
   * @value
   */
  itemId: number

  /**
   * 项目名称
   * @value
   */
  itemName: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业
   * @value
   */
  majorName: string

  /**
   * 金额
   * @value
   */
  money: number

  /**
   *
   * @value
   */
  moneyStr: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 付款通知书id
   * @value
   */
  noticeId: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 手机号
   * @value
   */
  phone: string

  /**
   * 打款流水号
   * @value
   */
  remitNo: string

  /**
   * 打款状态 0:未打款 1:待打款 2:打款中 3:打款成功 4:打款失败
   * @value
   */
  remitStatus: number

  /**
   *
   * @value
   */
  remitStatusStr: string

  /**
   * 打款时间
   * @value
   */
  remitTime: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 来源
   * @value
   */
  source: string

  /**
   *
   * @value
   */
  sourceStr: string

  /**
   * 状态，1启用，0禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 项目批次id
   * @value
   */
  subItemId: number

  /**
   * 订单号
   * @value
   */
  subOrderNo: string

  /**
   * 第三方id
   * @value
   */
  thirdId: string

  /**
   * 转账记录id
   * @value
   */
  transferId: string

  /**
   * 用户id
   * @value
   */
  userId: number
}

/**
 * --
 */
export type SubsidyItemVO = {
  /**
   * 学校账户id
   * @value
   */
  accountId: number

  /**
   * 支付宝账号
   * @value
   */
  alipayAccountNo: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 发放类型
   * @value
   */
  grantType: number

  /**
   *
   * @value
   */
  grantTypeName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 项目总人数
   * @value
   */
  itemDetailSum: number

  /**
   * 项目总金额
   * @value
   */
  itemMoney: number

  /**
   *
   * @value
   */
  itemMoneyStr: string

  /**
   * 打款项名称
   * @value
   */
  itemName: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 来源
   * @value
   */
  source: string

  /**
   *
   * @value
   */
  sourceStr: string

  /**
   * 状态，1启用，0禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   * 清分系统id
   * @value
   */
  stlId: string

  /**
   * 打款成功总金额
   * @value
   */
  successDetailAmount: number

  /**
   *
   * @value
   */
  successDetailAmountStr: string

  /**
   * 打款成功人数
   * @value
   */
  successDetailSum: number

  /**
   * 是否支持导入名单 0:是 1:否
   * @value
   */
  supportImport: number

  /**
   *
   * @value
   */
  supportImportStr: string
}

/**
 * --
 */
export type SubsidyNoticeVO = {
  /**
   * 账号
   * @value
   */
  account: string

  /**
   * 审核人
   * @value
   */
  auditor: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 用款部门
   * @value
   */
  department: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 通知书标题
   * @value
   */
  noticeTitle: string

  /**
   * 开户银行
   * @value
   */
  openBank: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 经办人
   * @value
   */
  operator: string

  /**
   * 单位名称
   * @value
   */
  orgName: string

  /**
   * 人数
   * @value
   */
  payCount: number

  /**
   * 付款金额
   * @value
   */
  payMoney: number

  /**
   * 金额大写
   * @value
   */
  payMoneyChinese: string

  /**
   *
   * @value
   */
  payMoneyStr: string

  /**
   * 款项用途
   * @value
   */
  payPurpose: string

  /**
   * 付款时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 付款方式 1:电汇 2:承诺 3:转支 4:现金
   * @value
   */
  payType: number

  /**
   *
   * @value
   */
  payTypeStr: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 打款状态 1:待打款 3:提交成功
   * @value
   */
  remitStatus: number

  /**
   *
   * @value
   */
  remitStatusStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态，1启用，0禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string
}

/**
 * --
 */
export type SubsidyPushRecordVO = {
  /**
   * 内容
   * @value
   */
  content: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 项目名称
   * @value
   */
  itemName: string

  /**
   * 打款状态 0:全部 1:未打款 2:打款中 3:已打款
   * @value
   */
  itemType: number

  /**
   * 打款状态 0:全部 1:未打款 2:打款中 3:已打款
   * @value
   */
  itemTypeStr: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 人数
   * @value
   */
  pushNum: number

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 标题
   * @value
   */
  title: string
}

/**
 * --
 */
export type SubsidySubItemVO = {
  /**
   * 外部批次号
   * @value
   */
  batchTransId: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 失效时间
   * @value #datetime()
   */
  expireTime: string

  /**
   *
   * @value
   */
  expireTimeStr: string

  /**
   *
   * @value
   */
  grantType: number

  /**
   * 打款方式
   * @value
   */
  grantTypeName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 所属项目
   * @value
   */
  itemName: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 支付链接
   * @value
   */
  payUrl: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 订单标题
   * @value
   */
  subName: string

  /**
   * 订单号
   * @value
   */
  subOrderNo: string

  /**
   * 成功总金额
   * @value
   */
  successAmount: number

  /**
   *
   * @value
   */
  successAmountStr: string

  /**
   * 成功人数
   * @value
   */
  successSum: number

  /**
   * 总金额
   * @value
   */
  totalAmount: number

  /**
   *
   * @value
   */
  totalAmountStr: string

  /**
   * 总人数
   * @value
   */
  totalSum: number
}

/**
 * --
 */
export type SysMenuVO = {
  /**
   *
   * @rule 2
   */
  childMenus: SysMenuVO[]

  /**
   *
   * @value
   */
  code: string

  /**
   *
   * @value
   */
  fatherId: number

  /**
   *
   * @value
   */
  flag: number

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  isMenu: number

  /**
   *
   * @value
   */
  isMenuStr: string

  /**
   *
   * @value
   */
  menuLevel: number

  /**
   *
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  platformCode: string

  /**
   *
   * @value
   */
  platformCodeStr: string

  /**
   *
   * @value
   */
  sort: number

  /**
   *
   * @value
   */
  url: string
}

/**
 * --
 */
export type Type = {
  /**
   *
   * @value
   */
  typeName: string
}

/**
 * --
 */
export type UpCpAccountVO = {
  /**
   * 账号名称
   * @value
   */
  accountName: string

  /**
   * 服务商code
   * @value
   */
  channelCode: string

  /**
   * 服务商
   * @value
   */
  channelName: string

  /**
   * 主商户id
   * @value
   */
  cpMainId: number

  /**
   * 主商户名称
   * @value
   */
  cpMainName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string
  payTypeList: {}[]

  /**
   * 付款方式
   * @value
   */
  payTypes: string

  /**
   * 结算费率
   * @value
   */
  settleFee: string

  /**
   * 状态 1启用，0禁用
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type UpCpMainVO = {
  /**
   * 一卡通密钥
   * @value
   */
  cardKey: string

  /**
   * 商户名称
   * @value
   */
  cpName: string

  /**
   * 商户类型
   * @value
   */
  cpTypeName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 联系地址
   * @value
   */
  linkAddress: string

  /**
   * 联系电话
   * @value
   */
  linkPhone: string

  /**
   * 联系人
   * @value
   */
  linkUser: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 状态 1启用，0禁用
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string
}

/**
 * --
 */
export type UpCpVO = {
  /**
   * 一卡通商户号
   * @value
   */
  cardPartner: string

  /**
   * 商户使用收款账号id
   * @value
   */
  cpAccountId: number

  /**
   * 商户使用收款账号名称
   * @value
   */
  cpAccountName: string

  /**
   * 商户编码
   * @value
   */
  cpCode: string

  /**
   * 主商户id
   * @value
   */
  cpMainId: number

  /**
   * 主商户名称
   * @value
   */
  cpMainName: string

  /**
   * 商户名称
   * @value
   */
  cpName: string

  /**
   * 状态，1启用，0禁用
   * @value
   */
  cpState: number

  /**
   * 状态名称
   * @value
   */
  cpStateName: string

  /**
   * 商户类型
   * @value
   */
  cpTypeName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 商户是否支持易校园钱包
   * @value
   */
  eacctEnable: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 联系地址
   * @value
   */
  linkAddress: string

  /**
   * 联系电话
   * @value
   */
  linkPhone: string

  /**
   * 联系人
   * @value
   */
  linkUser: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 商户是否支持红包
   * @value
   */
  redbagEnable: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 签名密钥
   * @value
   */
  signKey: string

  /**
   * 收款账户
   * @rule 2
   */
  upCpAccountVOList: UpCpAccountVO[]
}

/**
 * --
 */
export type UpRedbagAccountVO = {
  /**
   * 收款账号
   * @value
   */
  account: string

  /**
   * 收款账号名称
   * @value
   */
  accountName: string

  /**
   * 地区编码
   * @value
   */
  areaCode: string

  /**
   * 开户城市
   * @value
   */
  city: string

  /**
   * cpcode
   * @value
   */
  cpCode: string

  /**
   * 主商户
   * @value
   */
  cpMainName: string

  /**
   * 商户
   * @value
   */
  cpName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 收款账户短信通知手机
   * @value
   */
  mobileNo: string

  /**
   * 自定义序号
   * @value
   */
  num: number

  /**
   * 开户行
   * @value
   */
  openBank: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 开户省份
   * @value
   */
  province: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type UpRedbagBalanceVO = {
  /**
   * 红包余额
   * @value
   */
  balance: number

  /**
   * 红包余额
   * @value
   */
  balanceYuan: string

  /**
   * 主商户名称
   * @value
   */
  cpMainName: string

  /**
   * 首次领取时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 手机号码
   * @value
   */
  mobileNo: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type UpRedbagBillVO = {
  /**
   * 结算总金额
   * @value
   */
  amount: number

  /**
   * 结算总金额
   * @value
   */
  amountYuan: string

  /**
   * 日期
   * @value
   */
  billDate: string

  /**
   * 文件编码
   * @value
   */
  billNo: string

  /**
   * 商户名称
   * @value
   */
  cpMainName: string

  /**
   * 子商户名称
   * @value
   */
  cpName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 导出时间
   * @value #datetime()
   */
  exportTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 是否已导出
   * @value
   */
  isExportName: string

  /**
   *
   * @value
   */
  isRemitName: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  remark: string

  /**
   *
   * @value #datetime()
   */
  remitTime: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type UpRedbagConfigVO = {
  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 截止时间
   * @value #datetime()
   */
  finishTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 用户峰值
   * @value
   */
  maxMoney: number

  /**
   * 活动名称
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 支付方式名称
   * @value
   */
  payTypeName: string

  /**
   * 发放红包节点
   * @rule 2
   */
  redbagNodeVOList: UpRedbagNodeVO[]

  /**
   * 配置红包
   * @rule 2
   */
  redbagVOList: UpRedbagVO[]

  /**
   * 状态 0启用，1禁用，2已结束
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string

  /**
   * 总金额
   * @value
   */
  totalMoney: number

  /**
   * 总数量
   * @value
   */
  totalNum: number

  /**
   * 折扣方式 1:单个红包抵扣 2:复合红包抵扣
   * @value
   */
  type: number

  /**
   * 类别名称
   * @value
   */
  typeName: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type UpRedbagNodeVO = {
  /**
   *
   * @value
   */
  check: boolean

  /**
   * 编码
   * @value
   */
  code: string

  /**
   *
   * @value
   */
  cpInfoStr: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  disable: boolean

  /**
   *
   * @value
   */
  id: number

  /**
   * 名称
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 使用范围，1:全场通用红包，2:指定商户红包
   * @value
   */
  rangeType: number

  /**
   * 使用范围
   * @value
   */
  rangeTypeName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusName: string

  /**
   * 类别
   * @value
   */
  type: number

  /**
   * 类别
   * @value
   */
  typeName: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  userId: number
}

/**
 * --
 */
export type UpRedbagVO = {
  /**
   *
   * @value
   */
  alarmAmount: number

  /**
   *
   * @value
   */
  alarmMobile: string

  /**
   * 金额区间开始
   * @value
   */
  amountFrom: number

  /**
   * 金额区间开始
   * @value
   */
  amountFromStr: string

  /**
   * 金额区间结束
   * @value
   */
  amountTo: number

  /**
   * 金额区间结束
   * @value
   */
  amountToStr: string

  /**
   *
   * @value
   */
  code: string

  /**
   *
   * @value
   */
  configId: number

  /**
   *
   * @value
   */
  configName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 截止时间
   * @value #datetime()
   */
  finishTime: string

  /**
   * 规则id
   * @value
   */
  id: number

  /**
   * 每人限领取数量
   * @value
   */
  maxNum: number

  /**
   * 最低消费金额
   * @value
   */
  minPayment: number

  /**
   * 红包名称
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 红包使用范围名称
   * @value
   */
  rangeTypeName: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 红包活动状态，0禁用，1启用，2已结束
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 总金额
   * @value
   */
  totalAmount: number

  /**
   * 总发放数量
   * @value
   */
  totalNum: number

  /**
   * 红包类型
   * @value
   */
  type: number

  /**
   * 红包类型名称
   * @value
   */
  typeName: string

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 已发放金额
   * @value
   */
  useAmount: number

  /**
   * 已发放金额
   * @value
   */
  useAmountYuan: string

  /**
   * 已发放红包数量
   * @value
   */
  useNum: number

  /**
   * 有效时间天数
   * @value
   */
  validDays: number
}

/**
 * --
 */
export type UpUserRedbagVO = {
  /**
   * 红包金额
   * @value
   */
  amount: number

  /**
   * 红包金额
   * @value
   */
  amountYuan: string

  /**
   *
   * @value
   */
  cpMainName: string

  /**
   * 创建人
   * @value
   */
  createName: string

  /**
   * 领取时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 红包id
   * @value
   */
  id: number

  /**
   * 红包有效期截止
   * @value #datetime()
   */
  invalidTime: string

  /**
   * 用户手机
   * @value
   */
  mobileNo: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 红包发放渠道
   * @value
   */
  platform: string

  /**
   * 红包使用范围名称
   * @value
   */
  rangeTypeName: string

  /**
   * 发放节点
   * @value
   */
  redbagName: string

  /**
   * 说明
   * @value
   */
  remark: string

  /**
   * 红包状态，0未使用，1已使用，2已过期
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string

  /**
   *
   * @value
   */
  type: number

  /**
   * 更新人
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 使用商户名称
   * @value
   */
  useCpName: string

  /**
   * 使用时间
   * @value #datetime()
   */
  useTime: string

  /**
   * 使用的订单
   * @value
   */
  useTranNo: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type UserOrganizationDepartVO = {
  /**
   * 子集
   * @rule 2
   */
  childList: UserOrganizationDepartVO[]

  /**
   * 权限id
   * @value
   */
  departId: string

  /**
   * 权限名称
   * @value
   */
  departName: string

  /**
   * 部门类型 1学生2教职工
   * @value
   */
  departType: string

  /**
   * 是否选中 0选中 1不选中
   * @value
   */
  isChecked: number
}

/**
 * --
 */
export type View = {
  /**
   *
   * @value
   */
  contentType: string
}

/**
 * --
 */
export type WNWitnessCheckParamNew = {
  /**
   *
   * @value
   */
  addTime: string

  /**
   *
   * @value
   */
  address: string

  /**
   *
   * @value
   */
  birth: string

  /**
   *
   * @value
   */
  department: string

  /**
   *
   * @value
   */
  deviceId: string

  /**
   *
   * @value
   */
  deviceMac: string

  /**
   *
   * @value
   */
  faceImageBase64: string

  /**
   *
   * @value
   */
  idCard: string

  /**
   *
   * @value
   */
  idCardType: string

  /**
   *
   * @value
   */
  idImgBase64: string

  /**
   *
   * @value
   */
  name: string

  /**
   *
   * @value
   */
  nation: string

  /**
   *
   * @value
   */
  score: string

  /**
   *
   * @value
   */
  sex: string

  /**
   *
   * @value
   */
  validEndDate: string

  /**
   *
   * @value
   */
  validStartDate: string

  /**
   *
   * @value
   */
  verifyResult: string

  /**
   *
   * @value
   */
  vernsionCode: string
}

/**
 * --
 */
export type WnAcceptanceLetterVO = {
  /**
   *
   * @value
   */
  address: string

  /**
   *
   * @value
   */
  addressee: string

  /**
   *
   * @value
   */
  courierNumber: string

  /**
   *
   * @value
   */
  expressCompany: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  identityId: string

  /**
   *
   * @value
   */
  noticeStatus: number

  /**
   *
   * @value
   */
  noticeStatusStr: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  phone: string

  /**
   *
   * @value
   */
  recruitYear: string

  /**
   *
   * @value
   */
  semester: number

  /**
   *
   * @value
   */
  semesterStr: string

  /**
   *
   * @value
   */
  studentName: string
}

/**
 * --
 */
export type WnApplicationConfigVO = {
  /**
   * 应用链接
   * @value
   */
  applicationUrl: string

  /**
   * 应用编码
   * @value
   */
  code: string

  /**
   * 创建姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 是否默认应用：0-是，1-否
   * @value
   */
  defaultFlag: number

  /**
   *
   * @value
   */
  defaultFlagName: string

  /**
   * 删除状态 0未删除 1删除
   * @value
   */
  deleteFlag: number

  /**
   * 应用显示名称
   * @value
   */
  displayName: string

  /**
   * 显示端口
   * @value
   */
  displayType: number

  /**
   *
   * @value
   */
  displayTypeName: string

  /**
   * 表单id
   * @value
   */
  formId: number

  /**
   * 图标
   * @value
   */
  iconUrl: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 应用名称
   * @value
   */
  name: string

  /**
   * 开启条件
   * @value
   */
  openCondition: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 排序
   * @value
   */
  sort: number

  /**
   * 类型：1-平台，2-学校
   * @value
   */
  source: number

  /**
   *
   * @value
   */
  sourceName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 类型;1自定义表单, 2链接类型
   * @value
   */
  type: number

  /**
   * 更新姓名
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type WnBaseConfigVO = {
  /**
   * 招生结束时间
   * @value
   */
  admissionsEnd: string

  /**
   * 招生开始时间
   * @value
   */
  admissionsStart: string

  /**
   * 地区编码
   * @value
   */
  areaCode: string

  /**
   * 地区展示类型 0:全国 1:省份
   * @value
   */
  areaViewType: number

  /**
   * 颜色
   * @value
   */
  color: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 经纬度
   * @value
   */
  location: string

  /**
   * 公告
   * @value
   */
  notice: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   * 图片
   * @value
   */
  picture: string

  /**
   * 提示
   * @value
   */
  prompt: string

  /**
   * 学校简称
   * @value
   */
  schoolAbbreviation: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 视图展示json
   * @value
   */
  viewEnableJson: string
}

/**
 * --
 */
export type WnBatchVO = {
  /**
   * 招生结束时间
   * @value #datetime()
   */
  admissionsEnd: string

  /**
   * 招生开始时间
   * @value #datetime()
   */
  admissionsStart: string

  /**
   * 当前状态 1未开始, 2进行中, 3已完成
   * @value
   */
  batchStatus: number

  /**
   *
   * @value
   */
  batchStatusStr: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 是否默认 0-是，1-否
   * @value
   */
  isDefault: number

  /**
   *
   * @value
   */
  isDefaultStr: string

  /**
   * 批次名称
   * @value
   */
  name: string

  /**
   * 纳新人数
   * @value
   */
  num: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 备注
   * @value
   */
  remarks: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type WnBuildingVO = {
  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 入住人数
   * @value
   */
  checkInNumber: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态名
   * @value
   */
  statusStr: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnDeviceCheckInfoVO = {
  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 院系名称
   * @value
   */
  departName: string

  /**
   * 民族
   * @value
   */
  ethnic: string

  /**
   * 身份证号
   * @value
   */
  idCard: string

  /**
   * 缴费状态(0-未缴费,1-部分缴费，2-全部缴费)
   * @value
   */
  jiaofeiStatus: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 性别 1男，2女
   * @value
   */
  sex: number

  /**
   * 登记状态(0-未登记,1-已登记)
   * @value
   */
  signStatus: number

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnDeviceVO = {
  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 设备id编码
   * @value
   */
  deviceCode: string

  /**
   * 设备型号
   * @value
   */
  deviceModel: string

  /**
   * 设备名称
   * @value
   */
  deviceName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 设备主管人员
   * @value
   */
  manageName: string

  /**
   * 设备主管人员电话
   * @value
   */
  managePhone: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string
}

/**
 * --
 */
export type WnFloorApiVO = {
  /**
   * 楼栋Id
   * @value
   */
  buildingId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 楼层ID
   * @value
   */
  id: number

  /**
   * 房间列表
   * @rule 2
   */
  roomList: 迎新房间[]
}

/**
 * --
 */
export type WnFloorVO = {
  /**
   * 楼栋Id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnFormTitleVO = {
  /**
   * 启用/禁用：true-禁用，false-启用
   * @value
   */
  disabled: boolean

  /**
   * 字段固定：left, right
   * @value
   */
  fixed: string

  /**
   * 列表头是否隐藏：true-隐藏，false-不隐藏
   * @value
   */
  hideInTable: boolean

  /**
   * 旧的唯一标识字段
   * @value
   */
  oldUniqueField: string

  /**
   * 旧的唯一标识字段标题
   * @value
   */
  oldUniqueFieldTitle: string

  /**
   * 选项内容
   * @value
   */
  options: string

  /**
   * 原字段
   * @value
   */
  originalField: string

  /**
   * 是否必填：0-必填，1-非必填
   * @value
   */
  required: number

  /**
   * 标准字段
   * @value
   */
  standardField: string

  /**
   * 列表标题
   * @value
   */
  title: string

  /**
   * 字段类型: 单选Radio，图片Picture，填空Input，多选Checkbox，下拉Picker，日期DatePicker
   * @value
   */
  type: string

  /**
   * 是否唯一标识：0-是，1-否
   * @value
   */
  uniqueFlag: number

  /**
   * 值展示字段
   * @value
   */
  valueField: string
}

/**
 * --
 */
export type WnFormUserApiVO = {
  /**
   * 详细地址
   * @value
   */
  address: string

  /**
   * 是否调剂：0-是，1-否
   * @value
   */
  adjustFlag: number

  /**
   *
   * @value
   */
  adjustFlagName: string

  /**
   * 准考生号
   * @value
   */
  admissionNo: string

  /**
   * 年龄
   * @value
   */
  age: number

  /**
   * 区编码
   * @value
   */
  areaCode: string

  /**
   * 区名称
   * @value
   */
  areaName: string

  /**
   * 生日
   * @value #datetime()
   */
  birthday: string

  /**
   *
   * @value
   */
  birthdayStr: string

  /**
   * 业务编码
   * @value
   */
  bizCode: string

  /**
   * 业务ID
   * @value
   */
  bizId: string

  /**
   * 证件类型
   * @value
   */
  certificateType: string

  /**
   *
   * @value
   */
  certificateTypeName: string

  /**
   * 市编码
   * @value
   */
  cityCode: string

  /**
   * 市名称
   * @value
   */
  cityName: string

  /**
   * 班级编码
   * @value
   */
  classCode: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建人姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 删除状态 0 :正常 1 :删除
   * @value
   */
  deleteFlag: number

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 学历
   * @value
   */
  diploma: string

  /**
   *
   * @value
   */
  diplomaName: string

  /**
   * 邮箱
   * @value
   */
  email: string

  /**
   * 考生号
   * @value
   */
  examNo: string

  /**
   * 考生类型
   * @value
   */
  examineesType: string

  /**
   *
   * @value
   */
  examineesTypeName: string

  /**
   * 字符串拓展字段1
   * @value
   */
  extChar1: string

  /**
   * 字符串拓展字段10
   * @value
   */
  extChar10: string

  /**
   * 字符串拓展字段11
   * @value
   */
  extChar11: string

  /**
   * 字符串拓展字段12
   * @value
   */
  extChar12: string

  /**
   * 字符串拓展字段13
   * @value
   */
  extChar13: string

  /**
   * 字符串拓展字段14
   * @value
   */
  extChar14: string

  /**
   * 字符串拓展字段15
   * @value
   */
  extChar15: string

  /**
   * 字符串拓展字段16
   * @value
   */
  extChar16: string

  /**
   * 字符串拓展字段17
   * @value
   */
  extChar17: string

  /**
   * 字符串拓展字段18
   * @value
   */
  extChar18: string

  /**
   * 字符串拓展字段19
   * @value
   */
  extChar19: string

  /**
   * 字符串拓展字段2
   * @value
   */
  extChar2: string

  /**
   * 字符串拓展字段20
   * @value
   */
  extChar20: string

  /**
   * 字符串拓展字段21
   * @value
   */
  extChar21: string

  /**
   * 字符串拓展字段22
   * @value
   */
  extChar22: string

  /**
   * 字符串拓展字段23
   * @value
   */
  extChar23: string

  /**
   * 字符串拓展字段24
   * @value
   */
  extChar24: string

  /**
   * 字符串拓展字段25
   * @value
   */
  extChar25: string

  /**
   * 字符串拓展字段26
   * @value
   */
  extChar26: string

  /**
   * 字符串拓展字段27
   * @value
   */
  extChar27: string

  /**
   * 字符串拓展字段28
   * @value
   */
  extChar28: string

  /**
   * 字符串拓展字段29
   * @value
   */
  extChar29: string

  /**
   * 字符串拓展字段3
   * @value
   */
  extChar3: string

  /**
   * 字符串拓展字段30
   * @value
   */
  extChar30: string

  /**
   * 字符串拓展字段31
   * @value
   */
  extChar31: string

  /**
   * 字符串拓展字段32
   * @value
   */
  extChar32: string

  /**
   * 字符串拓展字段33
   * @value
   */
  extChar33: string

  /**
   * 字符串拓展字段34
   * @value
   */
  extChar34: string

  /**
   * 字符串拓展字段35
   * @value
   */
  extChar35: string

  /**
   * 字符串拓展字段36
   * @value
   */
  extChar36: string

  /**
   * 字符串拓展字段37
   * @value
   */
  extChar37: string

  /**
   * 字符串拓展字段38
   * @value
   */
  extChar38: string

  /**
   * 字符串拓展字段39
   * @value
   */
  extChar39: string

  /**
   * 字符串拓展字段4
   * @value
   */
  extChar4: string

  /**
   * 字符串拓展字段40
   * @value
   */
  extChar40: string

  /**
   * 字符串拓展字段41
   * @value
   */
  extChar41: string

  /**
   * 字符串拓展字段42
   * @value
   */
  extChar42: string

  /**
   * 字符串拓展字段43
   * @value
   */
  extChar43: string

  /**
   * 字符串拓展字段44
   * @value
   */
  extChar44: string

  /**
   * 字符串拓展字段45
   * @value
   */
  extChar45: string

  /**
   * 字符串拓展字段46
   * @value
   */
  extChar46: string

  /**
   * 字符串拓展字段47
   * @value
   */
  extChar47: string

  /**
   * 字符串拓展字段48
   * @value
   */
  extChar48: string

  /**
   * 字符串拓展字段49
   * @value
   */
  extChar49: string

  /**
   * 字符串拓展字段5
   * @value
   */
  extChar5: string

  /**
   * 字符串拓展字段50
   * @value
   */
  extChar50: string

  /**
   * 字符串拓展字段51
   * @value
   */
  extChar51: string

  /**
   * 字符串拓展字段52
   * @value
   */
  extChar52: string

  /**
   * 字符串拓展字段53
   * @value
   */
  extChar53: string

  /**
   * 字符串拓展字段54
   * @value
   */
  extChar54: string

  /**
   * 字符串拓展字段55
   * @value
   */
  extChar55: string

  /**
   * 字符串拓展字段56
   * @value
   */
  extChar56: string

  /**
   * 字符串拓展字段57
   * @value
   */
  extChar57: string

  /**
   * 字符串拓展字段58
   * @value
   */
  extChar58: string

  /**
   * 字符串拓展字段59
   * @value
   */
  extChar59: string

  /**
   * 字符串拓展字段6
   * @value
   */
  extChar6: string

  /**
   * 字符串拓展字段60
   * @value
   */
  extChar60: string

  /**
   * 字符串拓展字段61
   * @value
   */
  extChar61: string

  /**
   * 字符串拓展字段62
   * @value
   */
  extChar62: string

  /**
   * 字符串拓展字段63
   * @value
   */
  extChar63: string

  /**
   * 字符串拓展字段64
   * @value
   */
  extChar64: string

  /**
   * 字符串拓展字段65
   * @value
   */
  extChar65: string

  /**
   * 字符串拓展字段66
   * @value
   */
  extChar66: string

  /**
   * 字符串拓展字段67
   * @value
   */
  extChar67: string

  /**
   * 字符串拓展字段68
   * @value
   */
  extChar68: string

  /**
   * 字符串拓展字段69
   * @value
   */
  extChar69: string

  /**
   * 字符串拓展字段7
   * @value
   */
  extChar7: string

  /**
   * 字符串拓展字段70
   * @value
   */
  extChar70: string

  /**
   * 字符串拓展字段71
   * @value
   */
  extChar71: string

  /**
   * 字符串拓展字段72
   * @value
   */
  extChar72: string

  /**
   * 字符串拓展字段73
   * @value
   */
  extChar73: string

  /**
   * 字符串拓展字段74
   * @value
   */
  extChar74: string

  /**
   * 字符串拓展字段75
   * @value
   */
  extChar75: string

  /**
   * 字符串拓展字段76
   * @value
   */
  extChar76: string

  /**
   * 字符串拓展字段77
   * @value
   */
  extChar77: string

  /**
   * 字符串拓展字段78
   * @value
   */
  extChar78: string

  /**
   * 字符串拓展字段79
   * @value
   */
  extChar79: string

  /**
   * 字符串拓展字段8
   * @value
   */
  extChar8: string

  /**
   * 字符串拓展字段80
   * @value
   */
  extChar80: string

  /**
   * 字符串拓展字段9
   * @value
   */
  extChar9: string

  /**
   * 日期拓展字段1
   * @value #datetime()
   */
  extDate1: string

  /**
   * 日期拓展字段10
   * @value #datetime()
   */
  extDate10: string

  /**
   * 日期拓展字段2
   * @value #datetime()
   */
  extDate2: string

  /**
   * 日期拓展字段3
   * @value #datetime()
   */
  extDate3: string

  /**
   * 日期拓展字段4
   * @value #datetime()
   */
  extDate4: string

  /**
   * 日期拓展字段5
   * @value #datetime()
   */
  extDate5: string

  /**
   * 日期拓展字段6
   * @value #datetime()
   */
  extDate6: string

  /**
   * 日期拓展字段7
   * @value #datetime()
   */
  extDate7: string

  /**
   * 日期拓展字段8
   * @value #datetime()
   */
  extDate8: string

  /**
   * 日期拓展字段9
   * @value #datetime()
   */
  extDate9: string

  /**
   * 家庭成员Json
   * @value
   */
  familyMember: string

  /**
   * 表单编码
   * @value
   */
  formCode: string

  /**
   * 表单ID
   * @value
   */
  formId: number

  /**
   * 毕业学校
   * @value
   */
  graduationSchool: string

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   * 身高（cm）
   * @value
   */
  height: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份号码
   * @value
   */
  identityNo: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 民族
   * @value
   */
  nation: string

  /**
   *
   * @value
   */
  nationName: string

  /**
   * 籍贯(省份)
   * @value
   */
  nativePlace: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 政治面貌
   * @value
   */
  politicalStatus: string

  /**
   *
   * @value
   */
  politicalStatusName: string

  /**
   * 邮政编码
   * @value
   */
  postalCode: string

  /**
   * 省份编码
   * @value
   */
  provinceCode: string

  /**
   * 省名称
   * @value
   */
  provinceName: string

  /**
   * QQ号
   * @value
   */
  qq: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 登记状态：0-已登记，1-未登记
   * @value
   */
  registerStatus: number

  /**
   * 登记时间
   * @value #datetime()
   */
  registerTime: string

  /**
   * 宗教信仰
   * @value
   */
  religion: string

  /**
   *
   * @value
   */
  religionName: string

  /**
   * 报道码
   * @value
   */
  reportCode: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分数
   * @value
   */
  score: number

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 学生ID
   * @value
   */
  studentId: number

  /**
   * 新生标题字段映射JSON
   * @value
   */
  titleFieldMapping: string

  /**
   * 修改人id
   * @value
   */
  updateId: number

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string

  /**
   * 用户ID
   * @value
   */
  userId: number

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 微信号
   * @value
   */
  wechat: string

  /**
   * 体重（kg）
   * @value
   */
  weight: string
}

/**
 * --
 */
export type WnFormUserVO = {
  /**
   * 详细地址
   * @value
   */
  address: string

  /**
   * 是否调剂：0-是，1-否
   * @value
   */
  adjustFlag: number

  /**
   *
   * @value
   */
  adjustFlagName: string

  /**
   * 准考生号
   * @value
   */
  admissionNo: string

  /**
   * 年龄
   * @value
   */
  age: number

  /**
   * 区编码
   * @value
   */
  areaCode: string

  /**
   * 区名称
   * @value
   */
  areaName: string

  /**
   * 生日
   * @value #datetime()
   */
  birthday: string

  /**
   *
   * @value
   */
  birthdayStr: string

  /**
   * 业务编码
   * @value
   */
  bizCode: string

  /**
   * 业务ID
   * @value
   */
  bizId: string

  /**
   * 证件类型
   * @value
   */
  certificateType: string

  /**
   *
   * @value
   */
  certificateTypeName: string

  /**
   * 市编码
   * @value
   */
  cityCode: string

  /**
   * 市名称
   * @value
   */
  cityName: string

  /**
   * 班级编码
   * @value
   */
  classCode: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建人姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 删除状态 0 :正常 1 :删除
   * @value
   */
  deleteFlag: number

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 学历
   * @value
   */
  diploma: string

  /**
   *
   * @value
   */
  diplomaName: string

  /**
   * 邮箱
   * @value
   */
  email: string

  /**
   * 考生号
   * @value
   */
  examNo: string

  /**
   * 考生类型
   * @value
   */
  examineesType: string

  /**
   *
   * @value
   */
  examineesTypeName: string

  /**
   * 字符串拓展字段1
   * @value
   */
  extChar1: string

  /**
   * 字符串拓展字段10
   * @value
   */
  extChar10: string

  /**
   * 字符串拓展字段11
   * @value
   */
  extChar11: string

  /**
   * 字符串拓展字段12
   * @value
   */
  extChar12: string

  /**
   * 字符串拓展字段13
   * @value
   */
  extChar13: string

  /**
   * 字符串拓展字段14
   * @value
   */
  extChar14: string

  /**
   * 字符串拓展字段15
   * @value
   */
  extChar15: string

  /**
   * 字符串拓展字段16
   * @value
   */
  extChar16: string

  /**
   * 字符串拓展字段17
   * @value
   */
  extChar17: string

  /**
   * 字符串拓展字段18
   * @value
   */
  extChar18: string

  /**
   * 字符串拓展字段19
   * @value
   */
  extChar19: string

  /**
   * 字符串拓展字段2
   * @value
   */
  extChar2: string

  /**
   * 字符串拓展字段20
   * @value
   */
  extChar20: string

  /**
   * 字符串拓展字段21
   * @value
   */
  extChar21: string

  /**
   * 字符串拓展字段22
   * @value
   */
  extChar22: string

  /**
   * 字符串拓展字段23
   * @value
   */
  extChar23: string

  /**
   * 字符串拓展字段24
   * @value
   */
  extChar24: string

  /**
   * 字符串拓展字段25
   * @value
   */
  extChar25: string

  /**
   * 字符串拓展字段26
   * @value
   */
  extChar26: string

  /**
   * 字符串拓展字段27
   * @value
   */
  extChar27: string

  /**
   * 字符串拓展字段28
   * @value
   */
  extChar28: string

  /**
   * 字符串拓展字段29
   * @value
   */
  extChar29: string

  /**
   * 字符串拓展字段3
   * @value
   */
  extChar3: string

  /**
   * 字符串拓展字段30
   * @value
   */
  extChar30: string

  /**
   * 字符串拓展字段31
   * @value
   */
  extChar31: string

  /**
   * 字符串拓展字段32
   * @value
   */
  extChar32: string

  /**
   * 字符串拓展字段33
   * @value
   */
  extChar33: string

  /**
   * 字符串拓展字段34
   * @value
   */
  extChar34: string

  /**
   * 字符串拓展字段35
   * @value
   */
  extChar35: string

  /**
   * 字符串拓展字段36
   * @value
   */
  extChar36: string

  /**
   * 字符串拓展字段37
   * @value
   */
  extChar37: string

  /**
   * 字符串拓展字段38
   * @value
   */
  extChar38: string

  /**
   * 字符串拓展字段39
   * @value
   */
  extChar39: string

  /**
   * 字符串拓展字段4
   * @value
   */
  extChar4: string

  /**
   * 字符串拓展字段40
   * @value
   */
  extChar40: string

  /**
   * 字符串拓展字段41
   * @value
   */
  extChar41: string

  /**
   * 字符串拓展字段42
   * @value
   */
  extChar42: string

  /**
   * 字符串拓展字段43
   * @value
   */
  extChar43: string

  /**
   * 字符串拓展字段44
   * @value
   */
  extChar44: string

  /**
   * 字符串拓展字段45
   * @value
   */
  extChar45: string

  /**
   * 字符串拓展字段46
   * @value
   */
  extChar46: string

  /**
   * 字符串拓展字段47
   * @value
   */
  extChar47: string

  /**
   * 字符串拓展字段48
   * @value
   */
  extChar48: string

  /**
   * 字符串拓展字段49
   * @value
   */
  extChar49: string

  /**
   * 字符串拓展字段5
   * @value
   */
  extChar5: string

  /**
   * 字符串拓展字段50
   * @value
   */
  extChar50: string

  /**
   * 字符串拓展字段51
   * @value
   */
  extChar51: string

  /**
   * 字符串拓展字段52
   * @value
   */
  extChar52: string

  /**
   * 字符串拓展字段53
   * @value
   */
  extChar53: string

  /**
   * 字符串拓展字段54
   * @value
   */
  extChar54: string

  /**
   * 字符串拓展字段55
   * @value
   */
  extChar55: string

  /**
   * 字符串拓展字段56
   * @value
   */
  extChar56: string

  /**
   * 字符串拓展字段57
   * @value
   */
  extChar57: string

  /**
   * 字符串拓展字段58
   * @value
   */
  extChar58: string

  /**
   * 字符串拓展字段59
   * @value
   */
  extChar59: string

  /**
   * 字符串拓展字段6
   * @value
   */
  extChar6: string

  /**
   * 字符串拓展字段60
   * @value
   */
  extChar60: string

  /**
   * 字符串拓展字段61
   * @value
   */
  extChar61: string

  /**
   * 字符串拓展字段62
   * @value
   */
  extChar62: string

  /**
   * 字符串拓展字段63
   * @value
   */
  extChar63: string

  /**
   * 字符串拓展字段64
   * @value
   */
  extChar64: string

  /**
   * 字符串拓展字段65
   * @value
   */
  extChar65: string

  /**
   * 字符串拓展字段66
   * @value
   */
  extChar66: string

  /**
   * 字符串拓展字段67
   * @value
   */
  extChar67: string

  /**
   * 字符串拓展字段68
   * @value
   */
  extChar68: string

  /**
   * 字符串拓展字段69
   * @value
   */
  extChar69: string

  /**
   * 字符串拓展字段7
   * @value
   */
  extChar7: string

  /**
   * 字符串拓展字段70
   * @value
   */
  extChar70: string

  /**
   * 字符串拓展字段71
   * @value
   */
  extChar71: string

  /**
   * 字符串拓展字段72
   * @value
   */
  extChar72: string

  /**
   * 字符串拓展字段73
   * @value
   */
  extChar73: string

  /**
   * 字符串拓展字段74
   * @value
   */
  extChar74: string

  /**
   * 字符串拓展字段75
   * @value
   */
  extChar75: string

  /**
   * 字符串拓展字段76
   * @value
   */
  extChar76: string

  /**
   * 字符串拓展字段77
   * @value
   */
  extChar77: string

  /**
   * 字符串拓展字段78
   * @value
   */
  extChar78: string

  /**
   * 字符串拓展字段79
   * @value
   */
  extChar79: string

  /**
   * 字符串拓展字段8
   * @value
   */
  extChar8: string

  /**
   * 字符串拓展字段80
   * @value
   */
  extChar80: string

  /**
   * 字符串拓展字段9
   * @value
   */
  extChar9: string

  /**
   * 日期拓展字段1
   * @value #datetime()
   */
  extDate1: string

  /**
   * 日期拓展字段10
   * @value #datetime()
   */
  extDate10: string

  /**
   * 日期拓展字段2
   * @value #datetime()
   */
  extDate2: string

  /**
   * 日期拓展字段3
   * @value #datetime()
   */
  extDate3: string

  /**
   * 日期拓展字段4
   * @value #datetime()
   */
  extDate4: string

  /**
   * 日期拓展字段5
   * @value #datetime()
   */
  extDate5: string

  /**
   * 日期拓展字段6
   * @value #datetime()
   */
  extDate6: string

  /**
   * 日期拓展字段7
   * @value #datetime()
   */
  extDate7: string

  /**
   * 日期拓展字段8
   * @value #datetime()
   */
  extDate8: string

  /**
   * 日期拓展字段9
   * @value #datetime()
   */
  extDate9: string

  /**
   * 家庭成员Json
   * @value
   */
  familyMember: string

  /**
   * 表单编码
   * @value
   */
  formCode: string

  /**
   * 表单ID
   * @value
   */
  formId: number

  /**
   * 毕业学校
   * @value
   */
  graduationSchool: string

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   * 身高（cm）
   * @value
   */
  height: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份号码
   * @value
   */
  identityNo: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 民族
   * @value
   */
  nation: string

  /**
   *
   * @value
   */
  nationName: string

  /**
   * 籍贯(省份)
   * @value
   */
  nativePlace: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 政治面貌
   * @value
   */
  politicalStatus: string

  /**
   *
   * @value
   */
  politicalStatusName: string

  /**
   * 邮政编码
   * @value
   */
  postalCode: string

  /**
   * 省份编码
   * @value
   */
  provinceCode: string

  /**
   * 省名称
   * @value
   */
  provinceName: string

  /**
   * QQ号
   * @value
   */
  qq: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 登记状态：0-已登记，1-未登记
   * @value
   */
  registerStatus: number

  /**
   * 登记时间
   * @value #datetime()
   */
  registerTime: string

  /**
   * 宗教信仰
   * @value
   */
  religion: string

  /**
   *
   * @value
   */
  religionName: string

  /**
   * 报道码
   * @value
   */
  reportCode: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分数
   * @value
   */
  score: number

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 学生ID
   * @value
   */
  studentId: number

  /**
   * 修改人id
   * @value
   */
  updateId: number

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string

  /**
   * 用户ID
   * @value
   */
  userId: number

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 微信号
   * @value
   */
  wechat: string

  /**
   * 体重（kg）
   * @value
   */
  weight: string
}

/**
 * --
 */
export type WnGenerateStudentNoVO = {
  /**
   * 班级
   * @value
   */
  classId: number

  /**
   *
   * @value
   */
  className: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 院系
   * @value
   */
  departmentId: number

  /**
   *
   * @value
   */
  departmentName: string

  /**
   * 生成规则
   * @value
   */
  generateRule: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 序号初始值
   * @value
   */
  initSerialNumber: string

  /**
   * 专业
   * @value
   */
  majorId: number

  /**
   *
   * @value
   */
  majorName: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 是否覆盖旧学号：0-是，1-否
   * @value
   */
  overwriteFlag: number

  /**
   * 固定代码
   * @value
   */
  partFixed: string

  /**
   * 组成年份
   * @value
   */
  partYear: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 成功人数
   * @value
   */
  successCount: number

  /**
   * 任务名称
   * @value
   */
  taskName: string

  /**
   * 任务状态
   * @value
   */
  taskStatus: number

  /**
   *
   * @value
   */
  taskStatusName: string

  /**
   * 任务总人数
   * @value
   */
  totalCount: number

  /**
   * 校区
   * @value
   */
  zoneId: number

  /**
   *
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnHallApplicationConfigVO = {
  /**
   * 应用链接
   * @value
   */
  applicationUrl: string

  /**
   * 应用编码
   * @value
   */
  code: string

  /**
   * 是否默认应用：0-是，1-否
   * @value
   */
  defaultFlag: number

  /**
   * 应用显示名称
   * @value
   */
  displayName: string

  /**
   * 显示端口: 1-学生，2-教师
   * @value
   */
  displayType: number

  /**
   * 表单id
   * @value
   */
  formId: number

  /**
   * 图标
   * @value
   */
  iconUrl: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 应用名称
   * @value
   */
  name: string

  /**
   * 开启条件
   * @value
   */
  openCondition: string

  /**
   * 是否关联流程: 0-是, 1-否
   * @value
   */
  processType: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 是否展示批次: 0-是, 1-否
   * @value
   */
  showBatch: number

  /**
   * 是否展示页面配置: 0-是, 1-否
   * @value
   */
  showForm: number

  /**
   * 排序
   * @value
   */
  sort: number

  /**
   * 状态
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 类型; 1表单类型, 2链接类型
   * @value
   */
  type: number
}

/**
 * --
 */
export type WnHallFormVO = {
  /**
   * 表单内容,
   * @value
   */
  formContent: string

  /**
   * 表单id
   * @value
   */
  formId: number

  /**
   * 表单名称
   * @value
   */
  formName: string

  /**
   * 表单id
   * @value
   */
  id: number

  /**
   * 是否导入新生信息, 0是, 1否
   * @value
   */
  isWnImport: number

  /**
   * 是否自动登记, 0是, 1否
   * @value
   */
  registerFlag: number

  /**
   * 学生ID
   * @value
   */
  studentId: number

  /**
   * 新生信息字段
   * @value
   */
  studentInfo: string

  /**
   * 是否有新生提交数据, 0是, 1否
   * @value
   */
  studentSubmitFlag: number
}

/**
 * --
 */
export type WnHallProcessConfigVO = {
  /**
   * 是否关联应用ID
   * @value
   */
  applicationId: number

  /**
   *
   * @value
   */
  applicationName: string

  /**
   * 流程编码
   * @value
   */
  code: string

  /**
   * 完成状态
   * @value
   */
  completeLabel: string

  /**
   * 显示名称
   * @value
   */
  displayName: string

  /**
   * 显示端口
   * @value
   */
  displayType: number

  /**
   *
   * @value
   */
  displayTypeName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 初始状态
   * @value
   */
  initLabel: string

  /**
   * 关联应用
   * @value
   */
  linkApplication: number

  /**
   * 流程名称
   * @value
   */
  name: string

  /**
   * 是否缴费
   * @value
   */
  needPay: number

  /**
   *
   * @value
   */
  needPayName: string

  /**
   * 是否前置流程, 0是, 1否
   * @value
   */
  openConditionFlag: number

  /**
   * 平台类型
   * @value
   */
  platform: number

  /**
   *
   * @value
   */
  platformName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 类型; 0平台流程, 1自定义流程(必须是应用)
   * @value
   */
  type: number
}

/**
 * --
 */
export type WnHallVO = {
  /**
   * 表单编码
   * @value
   */
  formCode: string

  /**
   * 表单内容
   * @value
   */
  formContent: string

  /**
   * 表单名称
   * @value
   */
  formName: string

  /**
   * 主键
   * @value
   */
  id: number
}

/**
 * --
 */
export type WnInClassInfoVO = {
  /**
   * 楼栋ID
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 床位信息
   * @rule 2
   */
  bunkList: BunkInfoVO[]

  /**
   * 已住人数
   * @value
   */
  checkNum: number

  /**
   * 空余人数
   * @value
   */
  emptyRoomNum: number

  /**
   * 楼层ID
   * @value
   */
  floorId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 房间混住状态 0:是 1:否
   * @value
   */
  isMixture: number

  /**
   * 入住房间 : 楼栋+楼层+房间名
   * @value
   */
  roomFullName: string

  /**
   * 房间id
   * @value
   */
  roomId: number

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 可住人数
   * @value
   */
  roomNum: number

  /**
   * 房间状态 0:空房, 2:半空房 3:满房
   * @value
   */
  roomStatus: number
}

/**
 * --
 */
export type WnInClassVO = {
  /**
   * 楼栋id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 已入住人数
   * @value
   */
  checkNum: number

  /**
   *
   * @value
   */
  classId: number

  /**
   * 班级
   * @value
   */
  className: string

  /**
   *
   * @value
   */
  floorId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 同住原则
   * @value
   */
  isMixtureStr: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 房间全名称
   * @value
   */
  roomFullName: string

  /**
   *
   * @value
   */
  roomId: number

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 几人间，即最大入住人数
   * @value
   */
  roomNum: number

  /**
   *
   * @value
   */
  roomSex: number

  /**
   * 房间性别
   * @value
   */
  roomSexStr: string

  /**
   *
   * @value
   */
  zoneId: number

  /**
   * 校区
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnInStudentRoomVO = {
  /**
   * 允许选择床位：0-是，1-否
   * @value
   */
  allowSelectBed: number

  /**
   * 楼栋id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 床位
   * @value
   */
  bunk: number

  /**
   * 入住状态：0-已确认，1-已分配，2-未分配
   * @value
   */
  checkInStatus: number

  /**
   *
   * @value
   */
  checkInStatusName: string

  /**
   * 班级id
   * @value
   */
  classId: number

  /**
   * 班级
   * @value
   */
  className: string

  /**
   * 院系id
   * @value
   */
  departmentId: number

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 楼层id
   * @value
   */
  floorId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 入住记录ID
   * @value
   */
  id: number

  /**
   * 身份证
   * @value
   */
  identityId: string

  /**
   * 专业id
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 籍贯
   * @value
   */
  natives: string

  /**
   * 入住房间 : 楼栋+楼层+房间名
   * @value
   */
  roomFullName: string

  /**
   * 房间ID
   * @value
   */
  roomId: number

  /**
   * 房间信息
   * @rule 2
   */
  roomList: WnInClassInfoVO[]

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 房间类型：几人间
   * @value
   */
  roomType: number

  /**
   * 学生性别
   * @value
   */
  sex: number

  /**
   * 学生id
   * @value
   */
  studentId: number

  /**
   * 学生姓名
   * @value
   */
  studentName: string

  /**
   * 唯一标识
   * @value
   */
  uniqueId: string

  /**
   * 是否根据班级分配房间 0:是, 1:否
   * @value
   */
  withClass: number

  /**
   * 校区id
   * @value
   */
  zoneId: number
}

/**
 * --
 */
export type WnInStudentVO = {
  /**
   * 批次
   * @value
   */
  batchId: number

  /**
   *
   * @value
   */
  batchName: string

  /**
   * 楼栋id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 床位
   * @value
   */
  bunk: number

  /**
   * 学生入住状态：0-已确认，1-已分配，2-未分配
   * @value
   */
  checkInStatus: number

  /**
   *
   * @value
   */
  checkInStatusStr: string

  /**
   * 班级ID
   * @value
   */
  classId: number

  /**
   * 班级
   * @value
   */
  className: string

  /**
   * 确认时间
   * @value #datetime()
   */
  confirmTime: string

  /**
   *
   * @value
   */
  confirmTimeStr: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 院系名称
   * @value
   */
  departName: string

  /**
   *
   * @value
   */
  departmentId: number

  /**
   * 楼层id
   * @value
   */
  floorId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 确认状态：0-已确认，1-未确认
   * @value
   */
  inStatus: number

  /**
   *
   * @value
   */
  inStatusStr: string

  /**
   *
   * @value
   */
  majorId: number

  /**
   * 专业
   * @value
   */
  majorName: string

  /**
   * 籍贯
   * @value
   */
  nativePlace: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 入住房间 : 楼栋+楼层+房间名
   * @value
   */
  roomFullName: string

  /**
   * 房间ID
   * @value
   */
  roomId: number

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexStr: string

  /**
   * 状态
   * @value
   */
  status: string

  /**
   * 学生记录ID
   * @value
   */
  studentId: number

  /**
   * 姓名
   * @value
   */
  studentName: string

  /**
   * 唯一标识
   * @value
   */
  uniqueId: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   *
   * @value
   */
  zoneId: number

  /**
   * 校区
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnMajorStudentCountVO = {
  /**
   * 已分班的人数
   * @value
   */
  assignedStudentNum: number

  /**
   * 未分班的学生人数
   * @value
   */
  notAssignStudentNum: number

  /**
   * 学生总人数
   * @value
   */
  totalStudentNum: number
}

/**
 * --
 */
export type WnOpenBankCardVO = {
  /**
   * 班级ID
   * @value
   */
  classId: number

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人ID
   * @value
   */
  createId: number

  /**
   * 创建人姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 学院ID
   * @value
   */
  departmentId: number

  /**
   * 学院名称
   * @value
   */
  departmentName: string

  /**
   * 失败原因
   * @value
   */
  failMsg: string

  /**
   * 上传资料
   * @value
   */
  filePath: string

  /**
   * 用户姓名-名
   * @value
   */
  firstName: string

  /**
   * 用户姓名-全称
   * @value
   */
  fullName: string

  /**
   * 处理状态：0-成功，1-上传中，2-失败
   * @value
   */
  handleStatus: number

  /**
   *
   * @value
   */
  handleStatusName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份证反面照片
   * @value
   */
  idCardBack: string

  /**
   * 身份证正面照片
   * @value
   */
  idCardFront: string

  /**
   * 证件号码
   * @value
   */
  identityNo: string

  /**
   * 用户姓名-姓
   * @value
   */
  lastName: string

  /**
   * 专业ID
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 更新人ID
   * @value
   */
  updateId: number

  /**
   * 更新人姓名
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string
}

/**
 * --
 */
export type WnPayConfigDetailVO = {
  /**
   * 院系id
   * @value
   */
  departmentId: number

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否生成缴费单 0否 1是
   * @value
   */
  isGenerateBill: number

  /**
   *
   * @value
   */
  isGenerateBillStr: string

  /**
   * 缴费项目数
   * @value
   */
  itemCount: number

  /**
   * 关联缴费项目
   * @rule 2
   */
  itemList: WnPayItemDetailVO[]

  /**
   * 专业id
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 状态 0未启用 1已启用
   * @value
   */
  status: number

  /**
   * 入学年份
   * @value
   */
  studyYear: number

  /**
   * 学期（0、上学期  1、下学期）
   * @value
   */
  term: number

  /**
   *
   * @value
   */
  termStr: string

  /**
   *
   * @value
   */
  zoneId: number
}

/**
 * --
 */
export type WnPayConfigVO = {
  /**
   *
   * @value
   */
  departmentId: number

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   *
   * @value
   */
  id: number

  /**
   * 是否生成缴费单 0否 1是 2处理中 3异常
   * @value
   */
  isGenerateBill: number

  /**
   *
   * @value
   */
  isGenerateBillStr: string

  /**
   * 缴费项目数
   * @value
   */
  itemCount: number

  /**
   *
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  remark: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   * 入学年份
   * @value
   */
  studyYear: number

  /**
   *
   * @value
   */
  zoneId: number
}

/**
 * --
 */
export type WnPayItemDetailVO = {
  /**
   * 二级分类费用
   * @value
   */
  dicFullStr: string

  /**
   * 二级分类id
   * @value
   */
  dicId: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 缴费金额
   * @value
   */
  payAmount: number

  /**
   * 缴费项目id
   * @value
   */
  projectId: number

  /**
   * 缴费项目
   * @value
   */
  projectName: string
}

/**
 * 迎新缴费统计
 */
export type WnPayStatVO = {
  /**
   * 项目id
   * @value
   */
  proId: number

  /**
   * 项目名称
   * @value
   */
  proName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 金额
   * @value
   */
  totalAmount: number

  /**
   * 笔数
   * @value
   */
  totalCount: number
}

/**
 * --
 */
export type WnProcessConfigVO = {
  /**
   * 关联应用编码
   * @value
   */
  applicationCode: string

  /**
   * 关联应用ID
   * @value
   */
  applicationId: number

  /**
   * 关联应用名称
   * @value
   */
  applicationName: string

  /**
   * 关联应用链接
   * @value
   */
  applicationUrl: string

  /**
   * 流程编码
   * @value
   */
  code: string

  /**
   * 完成状态
   * @value
   */
  completeLabel: string

  /**
   * 创建姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 默认流程
   * @value
   */
  defaultFlag: number

  /**
   *
   * @value
   */
  defaultFlagName: string

  /**
   * 显示名称
   * @value
   */
  displayName: string

  /**
   * 显示端口
   * @value
   */
  displayType: number

  /**
   *
   * @value
   */
  displayTypeName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 初始状态
   * @value
   */
  initLabel: string

  /**
   * 关联应用
   * @value
   */
  linkApplication: number

  /**
   * 流程名称
   * @value
   */
  name: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 排序
   * @value
   */
  sort: number

  /**
   * 类型：1-平台，2-学校
   * @value
   */
  source: number

  /**
   *
   * @value
   */
  sourceName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 更新姓名
   * @value
   */
  updateName: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type WnProcessCountTableHeaderVO = {
  /**
   * 索引列
   * @value
   */
  dataIndex: string

  /**
   * key值
   * @value
   */
  key: string

  /**
   * 流程id
   * @value
   */
  processId: number

  /**
   * 表头名称
   * @value
   */
  title: string
}

/**
 * --
 */
export type WnProductAndPicVO = {
  /**
   * 已申领数量（已经申请但未领取）
   * @value
   */
  applyNumber: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否需要支付： 0、是 1、否
   * @value
   */
  needPay: number

  /**
   * 商品图片
   * @value
   */
  picAddress: string

  /**
   * 商品名称
   * @value
   */
  productName: string

  /**
   * 规格标题（名称）
   * @value
   */
  productTitle: string

  /**
   * 商品类型
   * @value
   */
  productType: number

  /**
   * 商品类型
   * @value
   */
  productTypeStr: string

  /**
   * 已领取数量
   * @value
   */
  receivedNumber: number

  /**
   * 入学年份
   * @value
   */
  recruitYear: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 学期 0上学期  1下学期
   * @value
   */
  semester: number

  /**
   * 学期
   * @value
   */
  semesterStr: string

  /**
   * 商品明细
   * @value
   */
  specsName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 库存数量
   * @value
   */
  surplusNumber: number

  /**
   * 总数量
   * @value
   */
  totalNumber: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type WnProductPicVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 图片地址
   * @value
   */
  picAddress: string

  /**
   * 商品ID
   * @value
   */
  productId: number
}

/**
 * --
 */
export type WnProductSpecsVO = {
  /**
   * 已申请领取数量（已经申请但未领取）
   * @value
   */
  applyNumber: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 商品ID
   * @value
   */
  productId: number

  /**
   * 已领取数量
   * @value
   */
  receivedNumber: number

  /**
   * 规格名称
   * @value
   */
  specName: string

  /**
   * 规格价格
   * @value
   */
  specPrice: number

  /**
   * 剩余数量
   * @value
   */
  surplusNumber: number

  /**
   * 总数量
   * @value
   */
  totalNumber: number
}

/**
 * --
 */
export type WnProductVO = {
  /**
   * 封面图地址
   * @value
   */
  coverUrl: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 限领数量
   * @value
   */
  limitReceiveNum: number

  /**
   * 是否需要支付： 0、是 1、否
   * @value
   */
  needPay: number

  /**
   * 是否需要收货 0、是  1、否
   * @value
   */
  needReceive: number

  /**
   * 支付商户编码
   * @value
   */
  payCpCode: string

  /**
   * 支付商户密钥
   * @value
   */
  payCpSecret: string

  /**
   * 商品描述
   * @value
   */
  productDes: string

  /**
   * 商品名称
   * @value
   */
  productName: string

  /**
   * 规格标题（名称）
   * @value
   */
  productTitle: string

  /**
   * 商品类型
   * @value
   */
  productType: number

  /**
   * 商品类型
   * @value
   */
  productTypeStr: string

  /**
   * 已领物品订单列表
   * @rule 2
   */
  receiveOrderVOList: WnReceiveOrderVO[]

  /**
   * 领取状态：0、未领取 1、已申领  2、已领取 -1、领取结束
   * @value
   */
  receiveStatus: number

  /**
   * 领取状态名
   * @value
   */
  receiveStatusStr: string

  /**
   * 入学年份
   * @value
   */
  recruitYear: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 学期 0上学期  1下学期
   * @value
   */
  semester: number

  /**
   * 学期
   * @value
   */
  semesterStr: string

  /**
   * 商品明细
   * @value
   */
  specsName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 仅查看： 0-是，1-否
   * @value
   */
  viewOnly: number

  /**
   * 图片地址列表
   * @rule 2
   */
  wnProductPicVOList: WnProductPicVO[]

  /**
   * 迎新商品规格列表
   * @rule 2
   */
  wnProductSpecsVOList: WnProductSpecsVO[]
}

/**
 * --
 */
export type WnReceiveNumberTotalVO = {
  /**
   * 条数
   * @value
   */
  count: number

  /**
   * 领取总数量
   * @value
   */
  receiveNumberTotal: number
}

/**
 * --
 */
export type WnReceiveOrderVO = {
  /**
   * 收货地址
   * @value
   */
  address: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 收货人
   * @value
   */
  consignee: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 发货状态 0、未发货  1、已发货
   * @value
   */
  deliveryStatus: number

  /**
   * 发货状态 0、未发货  1、已发货
   * @value
   */
  deliveryStatusStr: string

  /**
   * 发货时间
   * @value #datetime()
   */
  deliveryTime: string

  /**
   * 院系名称
   * @value
   */
  departName: string

  /**
   * 费率金额
   * @value
   */
  feeMoney: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 是否需要支付 0：是  1：否
   * @value
   */
  needPay: number

  /**
   * 支付金额
   * @value
   */
  payMoney: number

  /**
   * 支付订单号
   * @value
   */
  payNo: string

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   * 商品ID
   * @value
   */
  productId: number

  /**
   * 商品名称
   * @value
   */
  productName: string

  /**
   * 商品规格id
   * @value
   */
  productSpecsId: number

  /**
   * 规格名称
   * @value
   */
  productSpecsName: string

  /**
   * 商品类型: 1、军训用品  2、生活用品  3、床上用品
   * @value
   */
  productType: number

  /**
   * 商品类型名
   * @value
   */
  productTypeStr: string

  /**
   * 领取数量
   * @value
   */
  receiveNumber: number

  /**
   * 领取时间
   * @value #datetime()
   */
  receiveTime: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 红包金额
   * @value
   */
  redMoney: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态：0、未领取  1、已领取
   * @value
   */
  status: number

  /**
   * 状态名
   * @value
   */
  statusStr: string

  /**
   * 学生姓名
   * @value
   */
  studentId: number

  /**
   * 学生姓名
   * @value
   */
  studentName: string

  /**
   * 到账金额
   * @value
   */
  totalMoney: number

  /**
   * 证件号码
   * @value
   */
  uniqueId: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type WnRoomAccommodateCountShowVO = {
  /**
   * 男生已分配人数
   * @value
   */
  boysAllocatedCount: number

  /**
   * 男生已入住人数
   * @value
   */
  boysCheckedInCount: number

  /**
   * 男生新生人数
   * @value
   */
  boysCount: number

  /**
   * 男生房间可入住人数
   * @value
   */
  boysMoveIntoCount: number

  /**
   * 女生已分配人数
   * @value
   */
  girlsAllocatedCount: number

  /**
   * 女生已入住人数
   * @value
   */
  girlsCheckedInCount: number

  /**
   * 女生新生人数
   * @value
   */
  girlsCount: number

  /**
   * 女生房间可入住人数
   * @value
   */
  girlsMoveIntoCount: number

  /**
   * 已分配总人数
   * @value
   */
  totalAllocatedCount: number

  /**
   * 已入住总人数
   * @value
   */
  totalCheckedInCount: number

  /**
   * 房间可入住总人数
   * @value
   */
  totalMoveIntoCount: number

  /**
   * 新生总人数
   * @value
   */
  totalStudentsCount: number
}

/**
 * --
 */
export type WnRoomFeeConfigVO = {
  /**
   * 费用名称
   * @value
   */
  feeName: string

  /**
   * 费用价格
   * @value
   */
  feePrice: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string
}

/**
 * --
 */
export type WnRoomTreeVO = {
  /**
   * 楼栋id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 楼层Id
   * @value
   */
  floorId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * 房间
   * @rule 2
   */
  roomVOList: WnRoomVO[]

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnRoomVO = {
  /**
   * 楼栋ID
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 楼层Id
   * @value
   */
  floorId: number

  /**
   * 楼层名称
   * @value
   */
  floorName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 房间全名称
   * @value
   */
  roomFullName: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 房间标识：  -1、禁止入住  0、全空房  1、预分配（已分配）  2、半空房 3、已住满
   * @value
   */
  roomTab: number

  /**
   * 房间标识
   * @value
   */
  roomTabStr: string

  /**
   * 房间类型（几人间）
   * @value
   */
  roomType: number

  /**
   * 房间是否已使用：0-是，1-否
   * @value
   */
  roomUsed: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 性别：0、女  1、男
   * @value
   */
  sex: number

  /**
   * 性别
   * @value
   */
  sexStr: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnSchoolAllDashboardVO = {
  /**
   * 入住统计
   * @value
   */
  checkInReportStr: string

  /**
   * 市区报到
   * @value
   */
  cityReportStr: string

  /**
   * 市地区展示类型 0:全国 1:省份
   * @value
   */
  cityViewType: number

  /**
   * 班级报到率Top5
   * @value
   */
  classReportStr: string

  /**
   * 班级报到视图是否展示 0:展示 1:不展示
   * @value
   */
  classViewEnable: number

  /**
   * 环节办理统计视图是否展示 0:展示 1:不展示
   * @value
   */
  dealViewEnable: number

  /**
   * 学院女生比率Top5
   * @value
   */
  departmentFemaleStr: string

  /**
   * 各学院报到率排行
   * @value
   */
  departmentReportStr: string

  /**
   * 学院报到视图是否展示 0:展示 1:不展示
   * @value
   */
  departmentViewEnable: number

  /**
   * 学院女生视图是否展示 0:展示 1:不展示
   * @value
   */
  femaleViewEnable: number

  /**
   * 缴费情况
   * @value
   */
  jiaofeiReportStr: string

  /**
   * 缴费视图是否展示 0:展示 1:不展示
   * @value
   */
  jiaofeiViewEnable: number

  /**
   * 最新学生报到视图是否展示 0:展示 1:不展示
   * @value
   */
  latestViewEnable: number

  /**
   * 各学院报到率排行
   * @value
   */
  majorReportStr: string

  /**
   * 专业报到率Top5
   * @value
   */
  majorTop5ReportStr: string

  /**
   * 专业Top5报到视图是否展示 0:展示 1:不展示
   * @value
   */
  majorTop5ViewEnable: number

  /**
   * 专业报到视图是否展示 0:展示 1:不展示
   * @value
   */
  majorViewEnable: number

  /**
   * 男女人数比例
   * @value
   */
  maleAndFemaleStr: string

  /**
   * 学校所在的省份
   * @value
   */
  province: string

  /**
   * 省份报到
   * @value
   */
  provinceReportStr: string

  /**
   * 地区展示类型 0:全国 1:省份
   * @value
   */
  provinceViewType: number

  /**
   * (已报到人数,今日报到, 占比)
   * @value
   */
  schoolReportStr: string

  /**
   * 时段报到率视图是否展示 0:展示 1:不展示
   * @value
   */
  timeFrameRatioViewEnable: number

  /**
   * 时段报到率
   * @value
   */
  timeFrameReportRatioStr: string

  /**
   * 时段报到人数
   * @value
   */
  timeFrameReportStr: string

  /**
   * 时段报到视图是否展示 0:展示 1:不展示
   * @value
   */
  timeViewEnable: number

  /**
   * 环节办理统计
   * @value
   */
  toDealWithStr: string
}

/**
 * --
 */
export type WnSchoolOrganizationTreeVO = {
  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 编码
   * @value
   */
  key: string

  /**
   * 级别 1高校学院 2高校专业 3高校班级
   * @value
   */
  level: number

  /**
   * 人数
   * @value
   */
  num: number

  /**
   * 部门名称
   * @value
   */
  title: string
}

/**
 * --
 */
export type WnSchoolOrganizationVO = {
  /**
   * 学制
   * @value
   */
  academicSystem: string

  /**
   * 别名, 简称
   * @value
   */
  aliasName: string

  /**
   * 渠道0基础
   * @value
   */
  channel: number

  /**
   * 学历
   * @value
   */
  degree: number

  /**
   * 删除标记: 0-正常，1-删除
   * @value
   */
  deleteFlag: number

  /**
   * 招生年份
   * @value
   */
  entranceYear: number

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 级别 1高校学院 2高校专业 3高校班级 4K12年级 5K12班级
   * @value
   */
  level: number

  /**
   * 部门名称
   * @value
   */
  name: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 代码
   * @value
   */
  organizationCode: string

  /**
   * 父级ID
   * @value
   */
  parentId: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  status: number

  /**
   * 用户人数
   * @value
   */
  userNum: number

  /**
   * 关联校区
   * @value
   */
  zoneId: number
}

/**
 * --
 */
export type WnSchoolZoneVO = {
  /**
   * 校区地址
   * @value
   */
  address: string

  /**
   * 地区编码
   * @value
   */
  areaCode: string

  /**
   * 所属于地区中文
   * @value
   */
  areaCodeStr: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 纬度
   * @value
   */
  latitude: number

  /**
   * 经度
   * @value
   */
  longitude: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0未启用 1已启用
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnSelectPhoneOperatorVO = {
  /**
   * 确认提示
   * @value
   */
  confirmTips: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 是否需要预充值 0、是  1、否
   * @value
   */
  needRecharge: number

  /**
   * 是否需要预充值
   * @value
   */
  needRechargeStr: string

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 排序
   * @value
   */
  sort: number

  /**
   * 状态 0、未启用 1、已启用
   * @value
   */
  status: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区id
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnSelectPhoneOrderVO = {
  /**
   * 详细地址
   * @value
   */
  address: string

  /**
   * 区
   * @value
   */
  area: string

  /**
   * 返充金额
   * @value
   */
  backAmount: number

  /**
   * 市
   * @value
   */
  city: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 合约期（月）
   * @value
   */
  contractPeriod: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 创建时间
   * @value
   */
  createTimeStr: string

  /**
   * 院系名称
   * @value
   */
  departName: string

  /**
   * 费率金额
   * @value
   */
  feeMoney: number

  /**
   * 订单编号
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  identityId: string

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 已选手机号
   * @value
   */
  mobilePhone: string

  /**
   * 月租（元）
   * @value
   */
  monthlyRent: number

  /**
   * 运营商id
   * @value
   */
  operatorId: number

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 套餐ID（套餐新增输入）
   * @value
   */
  packageCode: string

  /**
   * 套餐id（自增）
   * @value
   */
  packageId: number

  /**
   * 套餐名称
   * @value
   */
  packageName: string

  /**
   * 套餐副标题
   * @value
   */
  packageSubName: string

  /**
   * 支付金额
   * @value
   */
  payMoney: number

  /**
   * 支付订单号
   * @value
   */
  payNo: string

  /**
   * 支付状态
   * @value
   */
  payStatus: number

  /**
   *
   * @value
   */
  payStatusStr: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 支付时间
   * @value
   */
  payTimeStr: string

  /**
   * 支付方式
   * @value
   */
  payType: string

  /**
   * 支付方式
   * @value
   */
  payTypeStr: string

  /**
   * 联系电话
   * @value
   */
  phone: string

  /**
   * 预充金额
   * @value
   */
  prechargeAmount: number

  /**
   * 省
   * @value
   */
  province: string

  /**
   * 充值详情
   * @value
   */
  rechargeInfo: string

  /**
   * 红包金额
   * @value
   */
  redbagMoney: number

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 学生姓名
   * @value
   */
  studentName: string

  /**
   * 到账金额
   * @value
   */
  totalMoney: number

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnSelectPhonePackageVO = {
  /**
   * 返充金额
   * @value
   */
  backAmount: string

  /**
   * 合约期（月）
   * @value
   */
  contractPeriod: number

  /**
   * 封面
   * @value
   */
  cover: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 月租（元）
   * @value
   */
  monthlyRent: string

  /**
   * 是否需要预充值 0、是  1、否
   * @value
   */
  needRecharge: number

  /**
   * 是否需要预充值 0、是  1、否
   * @value
   */
  needRechargeStr: string

  /**
   * 运营商id
   * @value
   */
  operatorId: number

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 套餐内容
   * @value
   */
  packageContent: string

  /**
   * 套餐id
   * @value
   */
  packageId: string

  /**
   * 套餐名称
   * @value
   */
  packageName: string

  /**
   * 套餐副名称
   * @value
   */
  packageSubName: string

  /**
   * 预充金额
   * @value
   */
  prechargeAmount: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 排序
   * @value
   */
  sort: number

  /**
   * 状态 0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态名
   * @value
   */
  statusStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区id
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnSelectPhoneVO = {
  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 是否靓号 0、是  1、否
   * @value
   */
  isPretty: number

  /**
   * 是否靓号
   * @value
   */
  isPrettyStr: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 是否需要预充值 0、是  1、否
   * @value
   */
  needRecharge: number

  /**
   * 是否需要预充值 0、是  1、否
   * @value
   */
  needRechargeStr: string

  /**
   * 开卡状态 0、未申领  1、申领中  2、已申领
   * @value
   */
  openStatus: number

  /**
   * 开卡状态
   * @value
   */
  openStatusStr: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 运营商ID
   * @value
   */
  operatorId: number

  /**
   * 运营商名称
   * @value
   */
  operatorName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0、未启用 1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnStudentBaseApiVO = {
  /**
   * 详细地址
   * @value
   */
  address: string

  /**
   * 是否调剂：0-是，1-否
   * @value
   */
  adjustFlag: number

  /**
   * 是否调剂名称
   * @value
   */
  adjustFlagName: string

  /**
   * 准考生号
   * @value
   */
  admissionNo: string

  /**
   * 年龄
   * @value
   */
  age: number

  /**
   * 区编码
   * @value
   */
  areaCode: string

  /**
   * 区名称
   * @value
   */
  areaName: string

  /**
   * 分配状态：0-已分配，1-未分配
   * @value
   */
  assignStatus: number

  /**
   *
   * @value
   */
  assignStatusName: string

  /**
   * 分配时间
   * @value #datetime()
   */
  assignTime: string

  /**
   *
   * @value
   */
  assignTimeStr: string

  /**
   * 批次ID
   * @value
   */
  batchId: number

  /**
   *
   * @value
   */
  batchName: string

  /**
   * 生日
   * @value #datetime()
   */
  birthday: string

  /**
   * 生日(格式化)
   * @value
   */
  birthdayStr: string

  /**
   * 证件类型
   * @value
   */
  certificateType: string

  /**
   * 证件类型名称
   * @value
   */
  certificateTypeName: string

  /**
   * 入住确认状态：0-确认入住，1-未确认注入
   * @value
   */
  checkInStatus: number

  /**
   * 市编码
   * @value
   */
  cityCode: string

  /**
   * 市名称
   * @value
   */
  cityName: string

  /**
   * 班级编码
   * @value
   */
  classCode: string

  /**
   *
   * @value
   */
  classId: number

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建人姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 删除状态 0 :正常 1 :删除
   * @value
   */
  deleteFlag: number

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   *
   * @value
   */
  departmentId: number

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 学历
   * @value
   */
  diploma: string

  /**
   * 学历名称
   * @value
   */
  diplomaName: string

  /**
   * 邮箱
   * @value
   */
  email: string

  /**
   * 考生号
   * @value
   */
  examNo: string

  /**
   * 考生类型
   * @value
   */
  examineesType: string

  /**
   * 考生类型名称
   * @value
   */
  examineesTypeName: string

  /**
   * 字符串拓展字段1
   * @value
   */
  extChar1: string

  /**
   * 字符串拓展字段10
   * @value
   */
  extChar10: string

  /**
   * 字符串拓展字段11
   * @value
   */
  extChar11: string

  /**
   * 字符串拓展字段12
   * @value
   */
  extChar12: string

  /**
   * 字符串拓展字段13
   * @value
   */
  extChar13: string

  /**
   * 字符串拓展字段14
   * @value
   */
  extChar14: string

  /**
   * 字符串拓展字段15
   * @value
   */
  extChar15: string

  /**
   * 字符串拓展字段16
   * @value
   */
  extChar16: string

  /**
   * 字符串拓展字段17
   * @value
   */
  extChar17: string

  /**
   * 字符串拓展字段18
   * @value
   */
  extChar18: string

  /**
   * 字符串拓展字段19
   * @value
   */
  extChar19: string

  /**
   * 字符串拓展字段2
   * @value
   */
  extChar2: string

  /**
   * 字符串拓展字段20
   * @value
   */
  extChar20: string

  /**
   * 字符串拓展字段3
   * @value
   */
  extChar3: string

  /**
   * 字符串拓展字段4
   * @value
   */
  extChar4: string

  /**
   * 字符串拓展字段5
   * @value
   */
  extChar5: string

  /**
   * 字符串拓展字段6
   * @value
   */
  extChar6: string

  /**
   * 字符串拓展字段7
   * @value
   */
  extChar7: string

  /**
   * 字符串拓展字段8
   * @value
   */
  extChar8: string

  /**
   * 字符串拓展字段9
   * @value
   */
  extChar9: string

  /**
   * 家庭成员JSON
   * @value
   */
  familyMember: string

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   * 身高（cm）
   * @value
   */
  height: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份号码
   * @value
   */
  identityNo: string

  /**
   * 导入记录ID
   * @value
   */
  importId: number

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   *
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 民族
   * @value
   */
  nation: string

  /**
   * 民族名称
   * @value
   */
  nationName: string

  /**
   * 籍贯(省份)
   * @value
   */
  nativePlace: string

  /**
   * 政治面貌
   * @value
   */
  politicalStatus: string

  /**
   * 政治面貌名称
   * @value
   */
  politicalStatusName: string

  /**
   * 邮政编码
   * @value
   */
  postalCode: string

  /**
   * 省份编码
   * @value
   */
  provinceCode: string

  /**
   * 省份名称
   * @value
   */
  provinceName: string

  /**
   * QQ号
   * @value
   */
  qq: string

  /**
   * 学年
   * @value
   */
  recruitYear: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  registerStatus: number

  /**
   * 登记状态名称
   * @value
   */
  registerStatusName: string

  /**
   * 登记时间
   * @value #datetime()
   */
  registerTime: string

  /**
   *
   * @value
   */
  registerTimeStr: string

  /**
   * 宗教信仰
   * @value
   */
  religion: string

  /**
   * 宗教信仰名称
   * @value
   */
  religionName: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 报道码
   * @value
   */
  reportCode: string

  /**
   * 报道状态：0-已报到，1-未报道
   * @value
   */
  reportStatus: number

  /**
   *
   * @value
   */
  reportStatusName: string

  /**
   * 报道时间
   * @value #datetime()
   */
  reportTime: string

  /**
   *
   * @value
   */
  reportTimeStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分数
   * @value
   */
  score: number

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   * 性别名称
   * @value
   */
  sexName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string

  /**
   * 同步认证状态：0-已同步，1-未同步
   * @value
   */
  syncAuthStatus: number

  /**
   *
   * @value
   */
  syncAuthStatusName: string

  /**
   * 新生标题字段映射JSON
   * @value
   */
  titleFieldMapping: string

  /**
   * 唯一标识
   * @value
   */
  uniqueId: string

  /**
   * 修改人id
   * @value
   */
  updateId: number

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string

  /**
   * 用户ID
   * @value
   */
  userId: number

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 微信号
   * @value
   */
  wechat: string

  /**
   * 体重（kg）
   * @value
   */
  weight: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnStudentBaseVO = {
  /**
   * 详细地址
   * @value
   */
  address: string

  /**
   * 是否调剂：0-是，1-否
   * @value
   */
  adjustFlag: number

  /**
   * 是否调剂名称
   * @value
   */
  adjustFlagName: string

  /**
   * 准考证号
   * @value
   */
  admissionNo: string

  /**
   * 年龄
   * @value
   */
  age: number

  /**
   * 区编码
   * @value
   */
  areaCode: string

  /**
   * 区名称
   * @value
   */
  areaName: string

  /**
   * 分配状态：0-已分配，1-未分配
   * @value
   */
  assignStatus: number

  /**
   *
   * @value
   */
  assignStatusName: string

  /**
   * 分配时间
   * @value #datetime()
   */
  assignTime: string

  /**
   *
   * @value
   */
  assignTimeStr: string

  /**
   * 批次ID
   * @value
   */
  batchId: number

  /**
   *
   * @value
   */
  batchName: string

  /**
   * 生日
   * @value #datetime()
   */
  birthday: string

  /**
   * 生日(格式化)
   * @value
   */
  birthdayStr: string

  /**
   * 证件类型
   * @value
   */
  certificateType: string

  /**
   * 证件类型名称
   * @value
   */
  certificateTypeName: string

  /**
   * 入住确认状态：0-确认入住，1-未确认注入
   * @value
   */
  checkInStatus: number

  /**
   *
   * @value
   */
  checkInStatusName: string

  /**
   * 报道时间
   * @value #datetime()
   */
  checkInTime: string

  /**
   *
   * @value
   */
  checkInTimeStr: string

  /**
   * 市编码
   * @value
   */
  cityCode: string

  /**
   * 市名称
   * @value
   */
  cityName: string

  /**
   * 班级编码
   * @value
   */
  classCode: string

  /**
   * 班级ID
   * @value
   */
  classId: number

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建人姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 删除状态 0 :正常 1 :删除
   * @value
   */
  deleteFlag: number

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 院系ID
   * @value
   */
  departmentId: number

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 学历
   * @value
   */
  diploma: string

  /**
   * 学历名称
   * @value
   */
  diplomaName: string

  /**
   * 邮箱
   * @value
   */
  email: string

  /**
   * 考生号
   * @value
   */
  examNo: string

  /**
   * 考生类型
   * @value
   */
  examineesType: string

  /**
   * 考生类型名称
   * @value
   */
  examineesTypeName: string

  /**
   * 字符串拓展字段1
   * @value
   */
  extChar1: string

  /**
   * 字符串拓展字段10
   * @value
   */
  extChar10: string

  /**
   * 字符串拓展字段11
   * @value
   */
  extChar11: string

  /**
   * 字符串拓展字段12
   * @value
   */
  extChar12: string

  /**
   * 字符串拓展字段13
   * @value
   */
  extChar13: string

  /**
   * 字符串拓展字段14
   * @value
   */
  extChar14: string

  /**
   * 字符串拓展字段15
   * @value
   */
  extChar15: string

  /**
   * 字符串拓展字段16
   * @value
   */
  extChar16: string

  /**
   * 字符串拓展字段17
   * @value
   */
  extChar17: string

  /**
   * 字符串拓展字段18
   * @value
   */
  extChar18: string

  /**
   * 字符串拓展字段19
   * @value
   */
  extChar19: string

  /**
   * 字符串拓展字段2
   * @value
   */
  extChar2: string

  /**
   * 字符串拓展字段20
   * @value
   */
  extChar20: string

  /**
   * 字符串拓展字段3
   * @value
   */
  extChar3: string

  /**
   * 字符串拓展字段4
   * @value
   */
  extChar4: string

  /**
   * 字符串拓展字段5
   * @value
   */
  extChar5: string

  /**
   * 字符串拓展字段6
   * @value
   */
  extChar6: string

  /**
   * 字符串拓展字段7
   * @value
   */
  extChar7: string

  /**
   * 字符串拓展字段8
   * @value
   */
  extChar8: string

  /**
   * 字符串拓展字段9
   * @value
   */
  extChar9: string

  /**
   * 家庭成员JSON
   * @value
   */
  familyMember: string

  /**
   * 姓名首字母
   * @value
   */
  firstChar: string

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   * 身高（cm）
   * @value
   */
  height: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份号码
   * @value
   */
  identityNo: string

  /**
   * 导入记录ID
   * @value
   */
  importId: number

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   * 专业ID
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 姓名拼音
   * @value
   */
  namePinYin: string

  /**
   * 民族
   * @value
   */
  nation: string

  /**
   * 民族名称
   * @value
   */
  nationName: string

  /**
   * 籍贯(省份)
   * @value
   */
  nativePlace: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 政治面貌
   * @value
   */
  politicalStatus: string

  /**
   * 政治面貌名称
   * @value
   */
  politicalStatusName: string

  /**
   * 邮政编码
   * @value
   */
  postalCode: string

  /**
   * 省份编码
   * @value
   */
  provinceCode: string

  /**
   * 省份名称
   * @value
   */
  provinceName: string

  /**
   * QQ号
   * @value
   */
  qq: string

  /**
   * 学年
   * @value
   */
  recruitYear: string

  /**
   * 登记状态
   * @value
   */
  registerStatus: number

  /**
   * 登记状态名称
   * @value
   */
  registerStatusName: string

  /**
   * 登记时间
   * @value #datetime()
   */
  registerTime: string

  /**
   *
   * @value
   */
  registerTimeStr: string

  /**
   * 宗教信仰
   * @value
   */
  religion: string

  /**
   * 宗教信仰名称
   * @value
   */
  religionName: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 报道码
   * @value
   */
  reportCode: string

  /**
   * 报道状态：0-已报到，1-未报道
   * @value
   */
  reportStatus: number

  /**
   *
   * @value
   */
  reportStatusName: string

  /**
   * 报道时间
   * @value #datetime()
   */
  reportTime: string

  /**
   *
   * @value
   */
  reportTimeStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分数
   * @value
   */
  score: number

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   * 性别名称
   * @value
   */
  sexName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   * 状态名称
   * @value
   */
  statusName: string

  /**
   * 同步认证状态：0-已同步，1-未同步
   * @value
   */
  syncAuthStatus: number

  /**
   *
   * @value
   */
  syncAuthStatusName: string

  /**
   * 第三方系统同步时间
   * @value #datetime()
   */
  thirdUpdateTime: string

  /**
   * 唯一标识
   * @value
   */
  uniqueId: string

  /**
   * 修改人id
   * @value
   */
  updateId: number

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string

  /**
   * 用户ID
   * @value
   */
  userId: number

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 微信号
   * @value
   */
  wechat: string

  /**
   * 体重（kg）
   * @value
   */
  weight: string

  /**
   * 校区编码
   * @value
   */
  zoneCode: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnStudentDashboardViewVO = {
  /**
   * 地区编码
   * @value
   */
  areaCode: string

  /**
   * 地区名称
   * @value
   */
  areaName: string

  /**
   * 地区展示类型 0:全国 1:省份
   * @value
   */
  areaViewType: number

  /**
   * id
   * @value
   */
  id: number

  /**
   * 经纬度
   * @value
   */
  location: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 视图是否展示
   * @value
   */
  viewEnableJson: string
}

/**
 * --
 */
export type WnStudentImportVO = {
  /**
   * 导入时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 导入结果 0 :成功 1 :失败
   * @value
   */
  importStatus: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   * 招生学年
   * @value
   */
  recruitYear: string

  /**
   * 导入结果解析
   * @value
   */
  resultExplain: string

  /**
   * 招生学期 0上学期  1下学期
   * @value
   */
  semester: number

  /**
   * 数据来源
   * @value
   */
  sourceCode: string

  /**
   * 学生人数
   * @value
   */
  stuNum: number
}

/**
 * --
 */
export type WnStudentInCountVO = {
  /**
   * 批次
   * @value
   */
  batchId: number

  /**
   *
   * @value
   */
  batchName: string

  /**
   * 楼栋id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 已确认人数
   * @value
   */
  confirmNum: number

  /**
   * 确认比例
   * @value
   */
  confirmScale: number

  /**
   *
   * @value
   */
  confirmScaleStr: string

  /**
   * 确认状态： 0-已确认,1-未确认
   * @value
   */
  confirmStatus: number

  /**
   * 未确认人数
   * @value
   */
  notConfirmNum: number

  /**
   * 入学年份
   * @value
   */
  recruitYear: number

  /**
   * 学期 ,0-上学期  1-下学期
   * @value
   */
  semester: number

  /**
   *
   * @value
   */
  semesterStr: string

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexStr: string

  /**
   * 总人数
   * @value
   */
  totalNum: number
}

/**
 * --
 */
export type WnStudentLatestRegisterVO = {
  /**
   * 院系名称
   * @value
   */
  departName: string

  /**
   * 登记时间
   * @value
   */
  registerTime: string

  /**
   * 姓名
   * @value
   */
  studentName: string
}

/**
 * --
 */
export type WnStudentProcessCountVO = {
  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 部门名称
   * @value
   */
  departmentName: string

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string
}

/**
 * --
 */
export type WnStudentProcessDetailVO = {
  /**
   *
   * @value
   */
  classCode: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   *
   * @value
   */
  departmentCode: string

  /**
   * 部门名称
   * @value
   */
  departmentName: string

  /**
   *
   * @value
   */
  majorCode: string

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 流程编码
   * @value
   */
  processCode: string

  /**
   * 流程名称
   * @value
   */
  processName: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 学生记录ID
   * @value
   */
  studentId: number

  /**
   * 姓名
   * @value
   */
  studentName: string

  /**
   * 身份唯一标识
   * @value
   */
  uniqueId: string
}

/**
 * --
 */
export type WnStudentRegisterBaseApiVO = {
  /**
   * 详细地址
   * @value
   */
  address: string

  /**
   * 是否调剂：0-是，1-否
   * @value
   */
  adjustFlag: number

  /**
   *
   * @value
   */
  adjustFlagName: string

  /**
   * 准考生号
   * @value
   */
  admissionNo: string

  /**
   * 年龄
   * @value
   */
  age: number

  /**
   * 区编码
   * @value
   */
  areaCode: string

  /**
   * 区名称
   * @value
   */
  areaName: string

  /**
   * 到达时间
   * @value #datetime()
   */
  arriveTime: string

  /**
   *
   * @value
   */
  arriveTimeStr: string

  /**
   * 批次ID
   * @value
   */
  batchId: number

  /**
   *
   * @value
   */
  batchName: string

  /**
   * 生日
   * @value #datetime()
   */
  birthday: string

  /**
   *
   * @value
   */
  birthdayStr: string

  /**
   * 证件类型
   * @value
   */
  certificateType: string

  /**
   *
   * @value
   */
  certificateTypeName: string

  /**
   * 市编码
   * @value
   */
  cityCode: string

  /**
   * 市名称
   * @value
   */
  cityName: string

  /**
   * 班级编码
   * @value
   */
  classCode: string

  /**
   *
   * @value
   */
  className: string

  /**
   * 确认状态：0-已确认，1-未确认
   * @value
   */
  confirmStatus: number

  /**
   *
   * @value
   */
  confirmStatusName: string

  /**
   * 确认时间
   * @value #datetime()
   */
  confirmTime: string

  /**
   *
   * @value
   */
  confirmTimeStr: string

  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建人姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   *
   * @value
   */
  createTimeStr: string

  /**
   * 删除状态 0 :正常 1 :删除
   * @value
   */
  deleteFlag: number

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   *
   * @value
   */
  departmentName: string

  /**
   * 学历
   * @value
   */
  diploma: string

  /**
   *
   * @value
   */
  diplomaName: string

  /**
   * 邮箱
   * @value
   */
  email: string

  /**
   * 考生号
   * @value
   */
  examNo: string

  /**
   * 考生类型
   * @value
   */
  examineesType: string

  /**
   *
   * @value
   */
  examineesTypeName: string

  /**
   * 字符串拓展字段1
   * @value
   */
  extChar1: string

  /**
   * 字符串拓展字段10
   * @value
   */
  extChar10: string

  /**
   * 字符串拓展字段11
   * @value
   */
  extChar11: string

  /**
   * 字符串拓展字段12
   * @value
   */
  extChar12: string

  /**
   * 字符串拓展字段13
   * @value
   */
  extChar13: string

  /**
   * 字符串拓展字段14
   * @value
   */
  extChar14: string

  /**
   * 字符串拓展字段15
   * @value
   */
  extChar15: string

  /**
   * 字符串拓展字段2
   * @value
   */
  extChar2: string

  /**
   * 字符串拓展字段3
   * @value
   */
  extChar3: string

  /**
   * 字符串拓展字段4
   * @value
   */
  extChar4: string

  /**
   * 字符串拓展字段5
   * @value
   */
  extChar5: string

  /**
   * 字符串拓展字段6
   * @value
   */
  extChar6: string

  /**
   * 字符串拓展字段7
   * @value
   */
  extChar7: string

  /**
   * 字符串拓展字段8
   * @value
   */
  extChar8: string

  /**
   * 字符串拓展字段9
   * @value
   */
  extChar9: string

  /**
   * 日期拓展字段1
   * @value #datetime()
   */
  extDate1: string

  /**
   * 日期拓展字段10
   * @value #datetime()
   */
  extDate10: string

  /**
   * 日期拓展字段2
   * @value #datetime()
   */
  extDate2: string

  /**
   * 日期拓展字段3
   * @value #datetime()
   */
  extDate3: string

  /**
   * 日期拓展字段4
   * @value #datetime()
   */
  extDate4: string

  /**
   * 日期拓展字段5
   * @value #datetime()
   */
  extDate5: string

  /**
   * 日期拓展字段6
   * @value #datetime()
   */
  extDate6: string

  /**
   * 日期拓展字段7
   * @value #datetime()
   */
  extDate7: string

  /**
   * 日期拓展字段8
   * @value #datetime()
   */
  extDate8: string

  /**
   * 日期拓展字段9
   * @value #datetime()
   */
  extDate9: string

  /**
   * 家庭成员Json
   * @value
   */
  familyMember: string

  /**
   * 表单ID
   * @value
   */
  formId: number

  /**
   * 毕业学校
   * @value
   */
  graduationSchool: string

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   *
   * @value
   */
  headImgName: string

  /**
   * 身高（cm）
   * @value
   */
  height: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 身份号码
   * @value
   */
  identityNo: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   *
   * @value
   */
  majorName: string

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 民族
   * @value
   */
  nation: string

  /**
   *
   * @value
   */
  nationName: string

  /**
   * 籍贯(省份)
   * @value
   */
  nativePlace: string

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 政治面貌
   * @value
   */
  politicalStatus: string

  /**
   *
   * @value
   */
  politicalStatusName: string

  /**
   * 邮政编码
   * @value
   */
  postalCode: string

  /**
   * 省份编码
   * @value
   */
  provinceCode: string

  /**
   * 省名称
   * @value
   */
  provinceName: string

  /**
   * QQ号
   * @value
   */
  qq: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: string

  /**
   * 宗教信仰
   * @value
   */
  religion: string

  /**
   *
   * @value
   */
  religionName: string

  /**
   * 备注
   * @value
   */
  remark: string

  /**
   * 报道码
   * @value
   */
  reportCode: string

  /**
   * 现场确认方式
   * @value
   */
  reportConfirmType: number

  /**
   *
   * @value
   */
  reportConfirmTypeName: string

  /**
   * 随性人员数量
   * @value
   */
  retinueNum: number

  /**
   * 行程登记状态：0-已登记，1-未登记
   * @value
   */
  routeStatus: number

  /**
   *
   * @value
   */
  routeStatusName: string

  /**
   * 行程登记时间
   * @value #datetime()
   */
  routeTime: string

  /**
   *
   * @value
   */
  routeTimeStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 分数
   * @value
   */
  score: number

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexName: string

  /**
   * 到达站点
   * @value
   */
  station: string

  /**
   *
   * @value
   */
  stationName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 新生记录ID
   * @value
   */
  studentId: number

  /**
   * 学生在校状态
   * @value
   */
  studentSchoolStatus: number

  /**
   *
   * @value
   */
  studentSchoolStatusName: string

  /**
   * 新生标题字段映射JSON
   * @value
   */
  titleFieldMapping: string

  /**
   * 交通方式
   * @value
   */
  trafficType: string

  /**
   *
   * @value
   */
  trafficTypeName: string

  /**
   * 车次/航班次/车牌号
   * @value
   */
  trainNumber: string

  /**
   * 唯一标识
   * @value
   */
  uniqueId: string

  /**
   * 修改人id
   * @value
   */
  updateId: number

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   *
   * @value
   */
  updateTimeStr: string

  /**
   * 用户ID
   * @value
   */
  userId: number

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 经停站点
   * @value
   */
  wayPoint: string

  /**
   * 微信号
   * @value
   */
  wechat: string

  /**
   * 体重（kg）
   * @value
   */
  weight: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   *
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnStudentReportCountExportVO = {
  /**
   * 批次ID
   * @value
   */
  batchId: number

  /**
   * 批次
   * @value
   */
  batchName: string

  /**
   * 班级编码
   * @value
   */
  classCode: string

  /**
   * 班级名称
   * @value
   */
  className: string

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 院系名称
   * @value
   */
  departmentName: string

  /**
   * 学历
   * @value
   */
  diploma: string

  /**
   * 学历名称
   * @value
   */
  diplomaName: string

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 民族
   * @value
   */
  nation: string

  /**
   *
   * @value
   */
  nationName: string

  /**
   * 未报到人数
   * @value
   */
  notReportedNum: number

  /**
   *
   * @value
   */
  provinceCode: string

  /**
   * 省名称
   * @value
   */
  provinceName: string

  /**
   * 入学年份
   * @value
   */
  recruitYear: number

  /**
   * 已报到人数
   * @value
   */
  reportedNum: number

  /**
   * 报到率(保留小数点后两位)
   * @value
   */
  reportedRate: string

  /**
   * 性别
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  sexName: string

  /**
   * 总人数
   * @value
   */
  totalStudentNum: number

  /**
   * 校区id
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnStudentReportNumCountVO = {
  /**
   * 校区/院系/专业/班级/民族编码
   * @value
   */
  commonCode: string

  /**
   * 校区/院系/专业/班级/民族名称
   * @value
   */
  commonName: string

  /**
   * 未报到人数
   * @value
   */
  notReportedNum: number

  /**
   * 未报到人数比例
   * @value
   */
  notReportedNumPercent: string

  /**
   * 省份
   * @value
   */
  provinceName: string

  /**
   * 已报到人数
   * @value
   */
  reportedNum: number

  /**
   * 已报到人数比例
   * @value
   */
  reportedNumPercent: string

  /**
   * 总人数
   * @value
   */
  totalStudentNum: number
}

/**
 * --
 */
export type WnStudentReportSexCountVO = {
  /**
   * 校区/院系/专业/班级/民族编码
   * @value
   */
  commonCode: string

  /**
   * 校区/院系/专业/班级/民族名称
   * @value
   */
  commonName: string

  /**
   * 女生人数
   * @value
   */
  femaleNum: number

  /**
   * 女生人数比例
   * @value
   */
  femalePercent: string

  /**
   * 男生人数
   * @value
   */
  maleNum: number

  /**
   * 男生人数比例
   * @value
   */
  malePercent: string

  /**
   * 省份
   * @value
   */
  provinceName: string

  /**
   * 总人数
   * @value
   */
  totalStudentNum: number
}

/**
 * --
 */
export type WnStudentToClassOrganizationVO = {
  /**
   * 学制
   * @value
   */
  academicSystem: string

  /**
   * 别名, 简称
   * @value
   */
  aliasName: string

  /**
   * 学历
   * @value
   */
  degree: number

  /**
   * 招生年份
   * @value
   */
  entranceYear: number

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 级别 1高校学院 2高校专业 3高校班级 4K12年级 5K12班级
   * @value
   */
  level: number

  /**
   * 部门名称
   * @value
   */
  name: string

  /**
   * 代码
   * @value
   */
  organizationCode: string

  /**
   * 父级ID
   * @value
   */
  parentId: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  status: number

  /**
   * 已有人数
   * @value
   */
  studentNum: number

  /**
   * 计划招生人数
   * @value
   */
  userNum: number

  /**
   * 关联校区
   * @value
   */
  zoneId: number
}

/**
 * --
 */
export type WnStudentToClassVO = {
  /**
   * 当前任务执行的已分班的学生数
   * @value
   */
  assignedStudentNum: number

  /**
   * 分班规则类型,默认值=0,参考WnStudentClassRuleTypeEnum枚举
   * @value
   */
  classRuleType: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 院系编码
   * @value
   */
  departCode: string

  /**
   * 院系id
   * @value
   */
  departId: number

  /**
   * 院系名称
   * @value
   */
  departName: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 序号初始值
   * @value
   */
  initSerialNumber: string

  /**
   * 是否创建学号,0-是 1-否
   * @value
   */
  isCreateUserNo: number

  /**
   * 分班是否限制条件；0-是，1-否
   * @value
   */
  isLimitCondition: number

  /**
   * 分班限制条件列表,json字符串
   * @value
   */
  limitConditionJson: string

  /**
   * 专业下的未分班男生人数
   * @value
   */
  majorBoysStudentNum: number

  /**
   * 专业编码
   * @value
   */
  majorCode: string

  /**
   * 专业下的未分班女生人数
   * @value
   */
  majorGirlsStudentNum: number

  /**
   * 专业id
   * @value
   */
  majorId: number

  /**
   * 专业名称
   * @value
   */
  majorName: string

  /**
   * 专业下的未分班总人数
   * @value
   */
  majorTotalStudentNum: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 操作
   * @value
   */
  operation: string

  /**
   * 是否覆盖已有学号：0-是，1-否
   * @value
   */
  overwriteUserNo: number

  /**
   * 组成年份
   * @value
   */
  partYear: string

  /**
   * 招生年份
   * @value
   */
  recruitYear: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 分配班级列表,json字符串
   * @value
   */
  studentClassJson: string

  /**
   * 分班学生信息列表,json字符串
   * @value
   */
  studentListJson: string

  /**
   * 任务名称
   * @value
   */
  taskName: string

  /**
   * 任务状态,0-未执行,1-执行中,2-执行成功,9-执行失败
   * @value
   */
  taskStatus: number

  /**
   * 专业下的可分配班级个数
   * @value
   */
  taskTotalClassNum: number

  /**
   * 该任务下的已分班总人数
   * @value
   */
  taskTotalStudentNum: number

  /**
   * 创建学号规则,创建学号规则, 固定数字, 五位以内
   * @value
   */
  userNoNumber: number

  /**
   * 校区id
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnStudentTrafficCountVO = {
  /**
   * 日期,格式=yyyy-MM-dd
   * @value
   */
  date: string

  /**
   * 时间段到站人数,与timeList顺序对应
   * @value
   */
  numList: number[]

  /**
   * 时间段列表 1:(00:00-01:00),2:(01:00-02:00),3:(02:00-03:00)...
   * @value
   */
  timeList: string[]
}

/**
 * --
 */
export type WnTeacherAppRoleVO = {
  /**
   * 创建人ID
   * @value
   */
  createId: number

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 关联的应用组
   * @value
   */
  groupIdList: string

  /**
   *
   * @value
   */
  groupNameList: string

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 关联的员工数量
   * @value
   */
  linkUserCount: number

  /**
   * 操作
   * @value
   */
  operates: string[]

  /**
   * 角色名称
   * @value
   */
  roleName: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusName: string

  /**
   * 更新人ID
   * @value
   */
  updateId: number

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type WnTeacherAppUserApiVO = {
  /**
   * 创建人id
   * @value
   */
  createId: number

  /**
   * 创建姓名
   * @value
   */
  createName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 删除状态 0未删除 1删除
   * @value
   */
  deleteFlag: number

  /**
   * 主键
   * @value
   */
  id: number

  /**
   * 手机号
   * @value
   */
  mobileNo: string

  /**
   * 角色名称
   * @value
   */
  roleId: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态：1-启用，0-禁用
   * @value
   */
  status: number

  /**
   * 修改人id
   * @value
   */
  updateId: number

  /**
   * 修改人姓名
   * @value
   */
  updateName: string

  /**
   * 修改时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 基础用户ID
   * @value
   */
  userBaseId: string

  /**
   * 用户姓名
   * @value
   */
  userName: string

  /**
   * 用户类型：1-学生，2-教职工
   * @value
   */
  userType: number

  /**
   *
   * @value
   */
  userTypeName: string
}

/**
 * --
 */
export type WnTitleFormVO = {
  /**
   * 导出字段相关信息{filed1:label1,filed2:label2}
   * @value
   */
  exportInfo: string

  /**
   * 查询列表字段相关信息{filed1:label1,filed2:label2}
   * @value
   */
  queryInfo: string
}

/**
 * --
 */
export type WnUnitVO = {
  /**
   * 楼栋Id
   * @value
   */
  buildingId: number

  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 状态:0、未启用  1、已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 单元名称
   * @value
   */
  unitName: string

  /**
   * 校区ID
   * @value
   */
  zoneId: number

  /**
   * 校区名称
   * @value
   */
  zoneName: string
}

/**
 * --
 */
export type WnZoneRoomApiVO = {
  /**
   * 楼栋名称
   * @value
   */
  buildingName: string

  /**
   * 楼层列表
   * @rule 2
   */
  floorList: WnFloorApiVO[]

  /**
   * 楼栋ID
   * @value
   */
  id: number

  /**
   * 楼栋性别
   * @value
   */
  sex: number
}

/**
 * --
 */
export type 健康状况日报VO = {
  /**
   * 目前居住地
   * @value
   */
  areaStr: string

  /**
   * 返还地
   * @value
   */
  backAreaStr: string

  /**
   * 返还地-市
   * @value
   */
  backCity: string

  /**
   *
   * @value
   */
  backCityCode: number

  /**
   * 返还地-区/县
   * @value
   */
  backDistrict: string

  /**
   *
   * @value
   */
  backDistrictCode: number

  /**
   * 返还地-省份
   * @value
   */
  backProvince: string

  /**
   *
   * @value
   */
  backProvinceCode: number

  /**
   * 返校备注：车次或航班号
   * @value
   */
  backRemark: string

  /**
   *
   * @value
   */
  backWay: number

  /**
   * 返校方式
   * @value
   */
  backWayStr: string

  /**
   * 楼栋
   * @value
   */
  building: string

  /**
   * 后台备注
   * @value
   */
  centerRemark: string

  /**
   * 备注人姓名
   * @value
   */
  centerRemarkUpdateName: string

  /**
   * 市
   * @value
   */
  city: string

  /**
   * 市编码
   * @value
   */
  cityCode: number

  /**
   * 班级/部门编码
   * @value
   */
  classCode: string

  /**
   * 班级/部门
   * @value
   */
  className: string

  /**
   * 是否接触过高发地区 0是1否
   * @value
   */
  contactArea: number

  /**
   * 是否去过高发地区
   * @value
   */
  contactAreaStr: string

  /**
   * 接触日期
   * @value #datetime()
   */
  contactDate: string

  /**
   * 接触日期 yyyy-MM-dd
   * @value
   */
  contactDateStr: string

  /**
   * 是否接触过确诊者 0是1否
   * @value
   */
  contactPatient: number

  /**
   * 是否接触过确诊者
   * @value
   */
  contactPatientStr: string

  /**
   * 国家
   * @value
   */
  country: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 创建时间 yyyy-MM-dd HH:mm:ss
   * @value
   */
  createTimeStr: string

  /**
   * 院系
   * @value
   */
  department: string

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 设备id
   * @value
   */
  deviceId: string

  /**
   * 区/县
   * @value
   */
  district: string

  /**
   * 区/县编码
   * @value
   */
  districtCode: number

  /**
   * 招生年份（年级）
   * @value
   */
  entranceYear: number

  /**
   * 拓展字段
   * @value
   */
  extField: string

  /**
   * 楼层
   * @value
   */
  floor: string

  /**
   * 是否全日制 0是1否
   * @value
   */
  fullTimeFlag: number

  /**
   * 全日制类型
   * @value
   */
  fullTimeFlagStr: string

  /**
   * 健康情况 1正常2发烧/咳嗽等症状3其它
   * @value
   */
  healthStatus: number

  /**
   * 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
   * @value
   */
  healthStatusNew: string

  /**
   * 健康情况new
   * @value
   */
  healthStatusNewStr: string

  /**
   * 健康情况
   * @value
   */
  healthStatusStr: string

  /**
   * 是否春节期间在校 0是1否
   * @value
   */
  holidayInSchool: number

  /**
   * 是否春节期间在校
   * @value
   */
  holidayInSchoolStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  identity: string

  /**
   * 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
   * @value
   */
  identitySecondType: string

  /**
   * 身份二级分类
   * @value
   */
  identitySecondTypeStr: string

  /**
   * 身份类型 1学生2教职工
   * @value
   */
  identityType: number

  /**
   * 身份类型
   * @value
   */
  identityTypeStr: string

  /**
   * 是否政府定点集中隔离 0是1否
   * @value
   */
  inGovQuarantine: number

  /**
   *
   * @value
   */
  inGovQuarantineStr: string

  /**
   * 是否居家健康监测或隔离 0是1否
   * @value
   */
  inHomeQuarantine: number

  /**
   *
   * @value
   */
  inHomeQuarantineStr: string

  /**
   * 是否在校 0是1否
   * @value
   */
  inSchool: number

  /**
   * 是否校内集中隔离 0是1否
   * @value
   */
  inSchoolQuarantine: number

  /**
   *
   * @value
   */
  inSchoolQuarantineStr: string

  /**
   * 是否在校
   * @value
   */
  inSchoolStr: string

  /**
   * 居住区是否有确诊、无症状、疑似 0是 1否
   * @value
   */
  isCommunityPatient: number

  /**
   * 居住区是否有确诊、无症状、疑似
   * @value
   */
  isCommunityPatientStr: string

  /**
   * 家庭成员是否有确诊、疑似、感染者 0是 1否
   * @value
   */
  isFamiliyPatient: number

  /**
   * 家庭成员是否有确诊、疑似、感染者
   * @value
   */
  isFamiliyPatientStr: string

  /**
   *
   * @value
   */
  isInCompany: number

  /**
   * 今日是否在实习单位
   * @value
   */
  isInCompanyStr: string

  /**
   * 是否确诊、无症状 0是1否
   * @value
   */
  isPatient: number

  /**
   * 是否确诊、无症状
   * @value
   */
  isPatientStr: string

  /**
   * 是否为疑似病例 0是1否
   * @value
   */
  isSuspected: number

  /**
   * 是否为疑似病例
   * @value
   */
  isSuspectedStr: string

  /**
   *
   * @value
   */
  isTodayBack: number

  /**
   * 今日是否返校
   * @value
   */
  isTodayBackStr: string

  /**
   * 隔离地点
   * @value
   */
  isolatedPlace: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 最近一次核酸检测日期（yyyy-MM-dd）
   * @value
   */
  lastNucleicAcidDate: string

  /**
   * 现在联系方式
   * @value
   */
  linkPhone: string

  /**
   * 定位信息
   * @value
   */
  locationInfo: string

  /**
   * 经纬度
   * @value
   */
  longitudeAndLatitude: string

  /**
   * 登录手机号
   * @value
   */
  mobilePhone: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 未接种疫苗原因
   * @value
   */
  noVaccineReasonStr: string

  /**
   * 近七日是否有核酸检测 0是1否
   * @value
   */
  nucleicAcidFlag: number

  /**
   *
   * @value
   */
  nucleicAcidFlagStr: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 家长联系方式
   * @value
   */
  parentsPhone: string

  /**
   * 就诊医院
   * @value
   */
  patientHospital: string

  /**
   * 省
   * @value
   */
  province: string

  /**
   * 省编码
   * @value
   */
  provinceCode: number

  /**
   * 其它情况说明
   * @value
   */
  remark: string

  /**
   * 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
   * @value
   */
  roommateHealthStatus: string

  /**
   * 共同居住人员健康情况
   * @value
   */
  roommateHealthStatusStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 专业
   * @value
   */
  specialities: string

  /**
   * 专业编码
   * @value
   */
  specialitiesCode: string

  /**
   * 今日体温
   * @value
   */
  temperature: string

  /**
   * 今日下午体温
   * @value
   */
  temperatureAfter: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 更新时间 yyyy-MM-dd HH:mm:ss
   * @value
   */
  updateTimeStr: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineOneTime: string

  /**
   * 疫苗接种情况
   * @value
   */
  vaccineStatusStr: string

  /**
   * 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineThreeTime: string

  /**
   * 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineTwoTime: string
}

/**
 * --
 */
export type 健康状况登记VO = {
  /**
   * 目前居住地
   * @value
   */
  areaStr: string

  /**
   * 返还地
   * @value
   */
  backAreaStr: string

  /**
   * 返还地-市
   * @value
   */
  backCity: string

  /**
   *
   * @value
   */
  backCityCode: number

  /**
   * 返还地-区/县
   * @value
   */
  backDistrict: string

  /**
   *
   * @value
   */
  backDistrictCode: number

  /**
   * 返还地-省份
   * @value
   */
  backProvince: string

  /**
   *
   * @value
   */
  backProvinceCode: number

  /**
   * 返校备注：车次或航班号
   * @value
   */
  backRemark: string

  /**
   *
   * @value
   */
  backWay: number

  /**
   * 返校方式
   * @value
   */
  backWayStr: string

  /**
   * 楼栋
   * @value
   */
  building: string

  /**
   * 市
   * @value
   */
  city: string

  /**
   * 市编码
   * @value
   */
  cityCode: number

  /**
   * 班级/部门编码
   * @value
   */
  classCode: string

  /**
   * 班级/部门
   * @value
   */
  className: string

  /**
   * 是否接触中高风险地区 0是1否
   * @value
   */
  contactArea: number

  /**
   * 是否接触中高风险地区
   * @value
   */
  contactAreaStr: string

  /**
   * 接触日期
   * @value #datetime()
   */
  contactDate: string

  /**
   * 接触日期 yyyy-MM-dd
   * @value
   */
  contactDateStr: string

  /**
   * 是否接触确诊、无症状、疑似 0是1否
   * @value
   */
  contactPatient: number

  /**
   * 是否接触确诊、无症状、疑似
   * @value
   */
  contactPatientStr: string

  /**
   * 国家
   * @value
   */
  country: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 创建时间 yyyy-MM-dd HH:mm:ss
   * @value
   */
  createTimeStr: string

  /**
   * 院系
   * @value
   */
  department: string

  /**
   * 院系编码
   * @value
   */
  departmentCode: string

  /**
   * 区/县
   * @value
   */
  district: string

  /**
   * 区/县编码
   * @value
   */
  districtCode: number

  /**
   * 招生年份（年级）
   * @value
   */
  entranceYear: number

  /**
   * 拓展字段
   * @value
   */
  extField: string

  /**
   * 楼层
   * @value
   */
  floor: string

  /**
   * 是否全日制 0是1否
   * @value
   */
  fullTimeFlag: number

  /**
   * 健康情况 1正常2发烧/咳嗽等症状3其它
   * @value
   */
  healthStatus: number

  /**
   * 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
   * @value
   */
  healthStatusNew: string

  /**
   * 健康情况
   * @value
   */
  healthStatusNewStr: string

  /**
   * 健康情况
   * @value
   */
  healthStatusStr: string

  /**
   * 是否春节期间在校 0是1否
   * @value
   */
  holidayInSchool: number

  /**
   * 是否春节期间在校
   * @value
   */
  holidayInSchoolStr: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  identity: string

  /**
   * 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
   * @value
   */
  identitySecondType: string

  /**
   * 身份二级分类
   * @value
   */
  identitySecondTypeStr: string

  /**
   * 身份类型 1学生2教职工
   * @value
   */
  identityType: number

  /**
   * 身份类型
   * @value
   */
  identityTypeStr: string

  /**
   * 是否政府定点集中隔离 0是1否
   * @value
   */
  inGovQuarantine: number

  /**
   *
   * @value
   */
  inGovQuarantineStr: string

  /**
   * 是否居家健康监测或隔离 0是1否
   * @value
   */
  inHomeQuarantine: number

  /**
   *
   * @value
   */
  inHomeQuarantineStr: string

  /**
   * 是否在校 0是1否
   * @value
   */
  inSchool: number

  /**
   * 是否校内集中隔离 0是1否
   * @value
   */
  inSchoolQuarantine: number

  /**
   *
   * @value
   */
  inSchoolQuarantineStr: string

  /**
   * 是否在校
   * @value
   */
  inSchoolStr: string

  /**
   * 居住区是否有确诊、无症状、疑似 0是 1否
   * @value
   */
  isCommunityPatient: number

  /**
   * 居住区是否有确诊、无症状、疑似
   * @value
   */
  isCommunityPatientStr: string

  /**
   * 家庭成员是否有确诊、疑似、感染者 0是 1否
   * @value
   */
  isFamiliyPatient: number

  /**
   * 家庭成员是否有确诊、疑似、感染者
   * @value
   */
  isFamiliyPatientStr: string

  /**
   *
   * @value
   */
  isInCompany: number

  /**
   * 今日是否在实习单位
   * @value
   */
  isInCompanyStr: string

  /**
   * 是否确诊、无症状 0是1否
   * @value
   */
  isPatient: number

  /**
   * 是否确诊、无症状
   * @value
   */
  isPatientStr: string

  /**
   * 是否为疑似病例 0是1否
   * @value
   */
  isSuspected: number

  /**
   * 是否为疑似病例
   * @value
   */
  isSuspectedStr: string

  /**
   *
   * @value
   */
  isTodayBack: number

  /**
   * 今日是否返校
   * @value
   */
  isTodayBackStr: string

  /**
   * 隔离地点
   * @value
   */
  isolatedPlace: string

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 最近一次核酸检测日期（yyyy-MM-dd）
   * @value
   */
  lastNucleicAcidDate: string

  /**
   * 现在联系方式
   * @value
   */
  linkPhone: string

  /**
   * 定位信息
   * @value
   */
  locationInfo: string

  /**
   * 经纬度
   * @value
   */
  longitudeAndLatitude: string

  /**
   * 登录手机号
   * @value
   */
  mobilePhone: string

  /**
   * 姓名
   * @value
   */
  name: string

  /**
   * 未接种疫苗原因
   * @value
   */
  noVaccineReasonStr: string

  /**
   * 近七日是否有核酸检测 0是1否
   * @value
   */
  nucleicAcidFlag: number

  /**
   *
   * @value
   */
  nucleicAcidFlagStr: string

  /**
   *
   * @value
   */
  operates: string[]

  /**
   *
   * @value
   */
  operation: string

  /**
   * 家长联系方式
   * @value
   */
  parentsPhone: string

  /**
   * 就诊医院
   * @value
   */
  patientHospital: string

  /**
   * 省
   * @value
   */
  province: string

  /**
   * 省编码
   * @value
   */
  provinceCode: number

  /**
   * 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
   * @value
   */
  roommateHealthStatus: string

  /**
   * 共同居住人员健康情况
   * @value
   */
  roommateHealthStatusStr: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称
   * @value
   */
  schoolName: string

  /**
   * 专业
   * @value
   */
  specialities: string

  /**
   * 专业编码
   * @value
   */
  specialitiesCode: string

  /**
   * 今日体温
   * @value
   */
  temperature: string

  /**
   * 今日下午体温
   * @value
   */
  temperatureAfter: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string

  /**
   * 更新时间 yyyy-MM-dd HH:mm:ss
   * @value
   */
  updateTimeStr: string

  /**
   * 用户id
   * @value
   */
  userId: number

  /**
   * 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineOneTime: string

  /**
   * 疫苗接种情况
   * @value
   */
  vaccineStatusStr: string

  /**
   * 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineThreeTime: string

  /**
   * 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   * @value
   */
  vaccineTwoTime: string
}

/**
 * --
 */
export type 健康状况登记地区统计VO = {
  /**
   * 地区编码
   * @value
   */
  areaCode: number

  /**
   * 地区名称
   * @value
   */
  areaName: string

  /**
   * 总登记数
   * @value
   */
  checkNum: number

  /**
   * 总确诊数
   * @value
   */
  patientNum: number
}

/**
 * --
 */
export type 健康状况登记地区统计VOroute = {
  /**
   * 签到总人数
   * @value
   */
  checkIn: number

  /**
   * 打卡率
   * @value
   */
  checkInRadio: string

  /**
   * 部门
   * @value
   */
  department: string

  /**
   * 部门编码
   * @value
   */
  departmentCode: string

  /**
   * 部门人数
   * @value
   */
  departmentNum: number

  /**
   * 未签到总人数
   * @value
   */
  notCheckIn: number
}

/**
 * --
 */
export type 健康状况登记地区统计VO_1 = {
  /**
   * 签到总人数
   * @value
   */
  checkIn: number

  /**
   * 签到人数-内地生
   * @value
   */
  checkIn11: number

  /**
   * 签到人数-港澳台学生
   * @value
   */
  checkIn12: number

  /**
   * 签到人数-留学生
   * @value
   */
  checkIn13: number

  /**
   * 签到人数-实习生
   * @value
   */
  checkIn14: number

  /**
   * 签到人数-应征入伍
   * @value
   */
  checkIn15: number

  /**
   * 签到人数-延期毕业
   * @value
   */
  checkIn16: number

  /**
   * 打卡率
   * @value
   */
  checkInRadio: string

  /**
   * 当日中高风险地区有较密集接触-总人数
   * @value
   */
  contactArea: number

  /**
   * 当日中高风险地区有较密集接触-内地生
   * @value
   */
  contactArea11: number

  /**
   * 当日中高风险地区有较密集接触-港澳台学生
   * @value
   */
  contactArea12: number

  /**
   * 当日中高风险地区有较密集接触-留学生
   * @value
   */
  contactArea13: number

  /**
   * 当日中高风险地区有较密集接触-实习生
   * @value
   */
  contactArea14: number

  /**
   * 当日中高风险地区有较密集接触-应征入伍
   * @value
   */
  contactArea15: number

  /**
   * 当日中高风险地区有较密集接触-延期毕业
   * @value
   */
  contactArea16: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-总人数
   * @value
   */
  contactPatient: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-内地生
   * @value
   */
  contactPatient11: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-港澳台学生
   * @value
   */
  contactPatient12: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-留学生
   * @value
   */
  contactPatient13: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-实习生
   * @value
   */
  contactPatient14: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-应征入伍
   * @value
   */
  contactPatient15: number

  /**
   * 当日与确诊病例、无症状感染者或疑似病例有密切接触-延期毕业
   * @value
   */
  contactPatient16: number

  /**
   * 部门
   * @value
   */
  department: string

  /**
   * 部门编码
   * @value
   */
  departmentCode: string

  /**
   * 部门人数
   * @value
   */
  departmentNum: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-总人数
   * @value
   */
  healthStatusNew: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-内地生
   * @value
   */
  healthStatusNew11: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-港澳台学生
   * @value
   */
  healthStatusNew12: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-留学生
   * @value
   */
  healthStatusNew13: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-实习生
   * @value
   */
  healthStatusNew14: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-应征入伍
   * @value
   */
  healthStatusNew15: number

  /**
   * 当日发热、咳嗽、呼吸困难等可疑症状-延期毕业
   * @value
   */
  healthStatusNew16: number

  /**
   * 春节期间在校总数
   * @value
   */
  holidayInSchool: number

  /**
   * 春节期间在校-内地生
   * @value
   */
  holidayInSchool11: number

  /**
   * 春节期间在校-港澳台学生
   * @value
   */
  holidayInSchool12: number

  /**
   * 春节期间在校-留学生
   * @value
   */
  holidayInSchool13: number

  /**
   * 春节期间在校-实习生
   * @value
   */
  holidayInSchool14: number

  /**
   * 春节期间在校-应征入伍
   * @value
   */
  holidayInSchool15: number

  /**
   * 春节期间在校-延期毕业
   * @value
   */
  holidayInSchool16: number

  /**
   * 今日政府定点集中隔离人数-总人数
   * @value
   */
  inGovQuarantine: number

  /**
   * 今日政府定点集中隔离人数-内地生
   * @value
   */
  inGovQuarantine11: number

  /**
   * 今日政府定点集中隔离人数-港澳台学生
   * @value
   */
  inGovQuarantine12: number

  /**
   * 今日政府定点集中隔离人数-留学生
   * @value
   */
  inGovQuarantine13: number

  /**
   * 今日政府定点集中隔离人数-实习生
   * @value
   */
  inGovQuarantine14: number

  /**
   * 今日政府定点集中隔离人数-应征入伍
   * @value
   */
  inGovQuarantine15: number

  /**
   * 今日政府定点集中隔离人数-延期毕业
   * @value
   */
  inGovQuarantine16: number

  /**
   * 今日居家健康监测或隔离人数-总人数
   * @value
   */
  inHomeQuarantine: number

  /**
   * 今日居家健康监测或隔离人数-内地生
   * @value
   */
  inHomeQuarantine11: number

  /**
   * 今日居家健康监测或隔离人数-港澳台学生
   * @value
   */
  inHomeQuarantine12: number

  /**
   * 今日居家健康监测或隔离人数-留学生
   * @value
   */
  inHomeQuarantine13: number

  /**
   * 今日居家健康监测或隔离人数-实习生
   * @value
   */
  inHomeQuarantine14: number

  /**
   * 今日居家健康监测或隔离人数-应征入伍
   * @value
   */
  inHomeQuarantine15: number

  /**
   * 今日居家健康监测或隔离人数-延期毕业
   * @value
   */
  inHomeQuarantine16: number

  /**
   * 当日在校-内地生
   * @value
   */
  inSchool11: number

  /**
   * 当日在校-港澳台学生
   * @value
   */
  inSchool12: number

  /**
   * 当日在校-留学生
   * @value
   */
  inSchool13: number

  /**
   * 当日当日在校-实习生
   * @value
   */
  inSchool14: number

  /**
   * 当日在校-应征入伍
   * @value
   */
  inSchool15: number

  /**
   * 当日当日在校-延期毕业
   * @value
   */
  inSchool16: number

  /**
   * 今日校内集中隔离人数-总人数
   * @value
   */
  inSchoolQuarantine: number

  /**
   * 今日校内集中隔离人数-内地生
   * @value
   */
  inSchoolQuarantine11: number

  /**
   * 今日校内集中隔离人数-港澳台学生
   * @value
   */
  inSchoolQuarantine12: number

  /**
   * 今日校内集中隔离人数-留学生
   * @value
   */
  inSchoolQuarantine13: number

  /**
   * 今日校内集中隔离人数-实习生
   * @value
   */
  inSchoolQuarantine14: number

  /**
   * 今日校内集中隔离人数-应征入伍
   * @value
   */
  inSchoolQuarantine15: number

  /**
   * 今日校内集中隔离人数-延期毕业
   * @value
   */
  inSchoolQuarantine16: number

  /**
   * 当日确诊病例或无症状感染者-总人数
   * @value
   */
  isDayPatient: number

  /**
   * 确诊或无症状感染总人数
   * @value
   */
  isPatient: number

  /**
   * 当日确诊病例或无症状感染者-内地生
   * @value
   */
  isPatient11: number

  /**
   * 当日确诊病例或无症状感染者-港澳台学生
   * @value
   */
  isPatient12: number

  /**
   * 当日确诊病例或无症状感染者-留学生
   * @value
   */
  isPatient13: number

  /**
   * 当日确诊病例或无症状感染者-实习生
   * @value
   */
  isPatient14: number

  /**
   * 当日确诊病例或无症状感染者-应征入伍
   * @value
   */
  isPatient15: number

  /**
   * 当日确诊病例或无症状感染者-延期毕业
   * @value
   */
  isPatient16: number

  /**
   * 当日疑似病例-总人数
   * @value
   */
  isSuspected: number

  /**
   * 当日疑似病例-内地生
   * @value
   */
  isSuspected11: number

  /**
   * 当日疑似病例-港澳台学生
   * @value
   */
  isSuspected12: number

  /**
   * 当日疑似病例-留学生
   * @value
   */
  isSuspected13: number

  /**
   * 当日疑似病例-实习生
   * @value
   */
  isSuspected14: number

  /**
   * 当日疑似病例-应征入伍
   * @value
   */
  isSuspected15: number

  /**
   * 当日疑似病例-延期毕业
   * @value
   */
  isSuspected16: number

  /**
   * 今日从外地返校-总人数
   * @value
   */
  isTodayBack: number

  /**
   * 今日从外地返校-内地生
   * @value
   */
  isTodayBack11: number

  /**
   * 今日从外地返校-港澳台学生
   * @value
   */
  isTodayBack12: number

  /**
   * 今日从外地返校-留学生
   * @value
   */
  isTodayBack13: number

  /**
   * 今日从外地返校-实习生
   * @value
   */
  isTodayBack14: number

  /**
   * 今日从外地返校-应征入伍
   * @value
   */
  isTodayBack15: number

  /**
   * 今日从外地返校-延期毕业
   * @value
   */
  isTodayBack16: number

  /**
   * 未接种新冠疫苗人数-总人数
   * @value
   */
  noVaccine: number

  /**
   * 未接种新冠疫苗人数-内地生
   * @value
   */
  noVaccine11: number

  /**
   * 未接种新冠疫苗人数-港澳台学生
   * @value
   */
  noVaccine12: number

  /**
   * 未接种新冠疫苗人数-留学生
   * @value
   */
  noVaccine13: number

  /**
   * 未接种新冠疫苗人数-实习生
   * @value
   */
  noVaccine14: number

  /**
   * 未接种新冠疫苗人数-应征入伍
   * @value
   */
  noVaccine15: number

  /**
   * 未接种新冠疫苗人数-延期毕业
   * @value
   */
  noVaccine16: number

  /**
   * 当日不在校人数
   * @value
   */
  notInSchool: number

  /**
   * 近七日核酸检测人数-总人数
   * @value
   */
  nucleicAcidFlag: number

  /**
   * 近七日核酸检测人数-内地生
   * @value
   */
  nucleicAcidFlag11: number

  /**
   * 近七日核酸检测人数-港澳台学生
   * @value
   */
  nucleicAcidFlag12: number

  /**
   * 近七日核酸检测人数-留学生
   * @value
   */
  nucleicAcidFlag13: number

  /**
   * 近七日核酸检测人数-实习生
   * @value
   */
  nucleicAcidFlag14: number

  /**
   * 近七日核酸检测人数-应征入伍
   * @value
   */
  nucleicAcidFlag15: number

  /**
   * 近七日核酸检测人数-延期毕业
   * @value
   */
  nucleicAcidFlag16: number

  /**
   * 已接种一针新冠疫苗人数-总人数
   * @value
   */
  vaccineOne: number

  /**
   * 已接种一针新冠疫苗人数-内地生
   * @value
   */
  vaccineOne11: number

  /**
   * 已接种一针新冠疫苗人数-港澳台学生
   * @value
   */
  vaccineOne12: number

  /**
   * 已接种一针新冠疫苗人数-留学生
   * @value
   */
  vaccineOne13: number

  /**
   * 已接种一针新冠疫苗人数-实习生
   * @value
   */
  vaccineOne14: number

  /**
   * 已接种一针新冠疫苗人数-应征入伍
   * @value
   */
  vaccineOne15: number

  /**
   * 已接种一针新冠疫苗人数-延期毕业
   * @value
   */
  vaccineOne16: number

  /**
   * 已接种三针新冠疫苗人数-总人数
   * @value
   */
  vaccineThree: number

  /**
   * 已接种三针新冠疫苗人数-内地生
   * @value
   */
  vaccineThree11: number

  /**
   * 已接种三针新冠疫苗人数-港澳台学生
   * @value
   */
  vaccineThree12: number

  /**
   * 已接种三针新冠疫苗人数-留学生
   * @value
   */
  vaccineThree13: number

  /**
   * 已接种三针新冠疫苗人数-实习生
   * @value
   */
  vaccineThree14: number

  /**
   * 已接种三针新冠疫苗人数-应征入伍
   * @value
   */
  vaccineThree15: number

  /**
   * 已接种三针新冠疫苗人数-延期毕业
   * @value
   */
  vaccineThree16: number

  /**
   * 已接种两针新冠疫苗人数-总人数
   * @value
   */
  vaccineTwo: number

  /**
   * 已接种两针新冠疫苗人数-内地生
   * @value
   */
  vaccineTwo11: number

  /**
   * 已接种两针新冠疫苗人数-港澳台学生
   * @value
   */
  vaccineTwo12: number

  /**
   * 已接种两针新冠疫苗人数-留学生
   * @value
   */
  vaccineTwo13: number

  /**
   * 已接种两针新冠疫苗人数-实习生
   * @value
   */
  vaccineTwo14: number

  /**
   * 已接种两针新冠疫苗人数-应征入伍
   * @value
   */
  vaccineTwo15: number

  /**
   * 已接种两针新冠疫苗人数-延期毕业
   * @value
   */
  vaccineTwo16: number
}

/**
 * --
 */
export type 健康状况登记统计VO = {
  /**
   * 总登记数
   * @value
   */
  checkNum: number

  /**
   * 总去过疫区人数
   * @value
   */
  contactAreaNum: number

  /**
   * 总接触过确诊者人数
   * @value
   */
  contactPatientNum: number

  /**
   * 咳嗽人数
   * @value
   */
  healthCoughNum: number

  /**
   * 腹泻人数
   * @value
   */
  healthDiarrhoeaNum: number

  /**
   * 发热人数
   * @value
   */
  healthFeverNum: number

  /**
   * 头晕头痛人数
   * @value
   */
  healthHeadacheNum: number

  /**
   * 正常人数
   * @value
   */
  healthNormalNum: number

  /**
   * 乏力人数
   * @value
   */
  healthWeakNum: number

  /**
   * 在校师生
   * @value
   */
  inSchoolNum: number

  /**
   * 居住社区村有确诊病例人数
   * @value
   */
  isCommunityPatientNum: number

  /**
   * 家庭成员有确诊或疑似病例人数
   * @value
   */
  isFamiliyPatientNum: number

  /**
   * 离校师生
   * @value
   */
  outSchoolNum: number

  /**
   * 总确诊数
   * @value
   */
  patientNum: number

  /**
   * 按省统计列表
   * @rule 2
   */
  provinceStatsList: 健康状况登记地区统计VO[]

  /**
   * 今日总登记数
   * @value
   */
  todayCheckNum: number

  /**
   * 今日去过疫区人数
   * @value
   */
  todayContactAreaNum: number

  /**
   * 今日接触过确诊者人数
   * @value
   */
  todayContactPatientNum: number

  /**
   * 今日总签到数
   * @value
   */
  todayDetailNum: number

  /**
   * 今日总确诊数
   * @value
   */
  todayPatientNum: number
}

/**
 * --
 */
export type 安全风控类 = {
  /**
   * 图形验证码内容
   * @value
   */
  imageCaptchaValue: string

  /**
   * 安全级别 0:普通，1：风险级别低  2：风险级别高
   * @value
   */
  level: number

  /**
   * 安全表示
   * @value
   */
  securityToken: string

  /**
   * 会话id
   * @value
   */
  sessionId: string
}

/**
 * --
 */
export type 手抄表账单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     * 应缴金额
     * @value
     */
    amountPayable: string

    /**
     * 校区名称
     * @value
     */
    areaName: string

    /**
     * 楼栋名称
     * @value
     */
    buildingName: string

    /**
     * 缴费完成时间
     * @value #datetime()
     */
    completeTime: string

    /**
     * 楼层名称
     * @value
     */
    floorName: string

    /**
     * id
     * @value
     */
    id: number

    /**
     * 上次抄表时间
     * @value
     */
    lastSettlingTime: string

    /**
     * 缴费状态： 0、未缴费  1、已缴费
     * @value
     */
    payStatus: number

    /**
     * 缴费状态名
     * @value
     */
    payStatusStr: string

    /**
     * 房间名称
     * @value
     */
    roomName: string

    /**
     * 学校名称
     * @value
     */
    schoolName: string

    /**
     * 本次抄表时间
     * @value
     */
    thisSettlingTime: string

    /**
     * 类型： 1、电费 2、水费
     * @value
     */
    type: number

    /**
     * 类型名称
     * @value
     */
    typeStr: string

    /**
     * 用电度数
     * @value
     */
    usageQuantity: string
  }

/**
 * --
 */
export type 支付订单列表下方的汇总数据 = {
  /**
   * 月份：yyyy-dd
   * @value
   */
  months: string

  /**
   * 交易总笔数
   * @value
   */
  totalCount: number

  /**
   * 支付总金额
   * @value
   */
  totalRealMoney: string

  /**
   * 退款总笔数
   * @value
   */
  totalRefundCount: string

  /**
   * 退款总金额
   * @value
   */
  totalRefundMoney: string

  /**
   * 交易总金额
   * @value
   */
  totalTranMoney: string
}

/**
 * --
 */
export type 支付订单详情 = {
  /**
   * 优惠券抵扣金额
   * @value
   */
  couponMoney: string

  /**
   * 商户编号
   * @value
   */
  cpCode: string

  /**
   * 商户名称
   * @value
   */
  cpName: string

  /**
   * 商户订单号
   * @value
   */
  cpTranNo: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 费率金额
   * @value
   */
  feeMoney: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 学工号
   * @value
   */
  jobNo: string

  /**
   * 通知状态
   * @value
   */
  notifyState: number

  /**
   * 通知状态
   * @value
   */
  notifyStateName: string

  /**
   * 支付渠道
   * @value
   */
  payName: string

  /**
   * 支付时间
   * @value #datetime()
   */
  payTime: string

  /**
   * 产品名称
   * @value
   */
  prodName: string

  /**
   * 实际支付金额
   * @value
   */
  realMoney: string

  /**
   * 红包抵扣金额
   * @value
   */
  redbagMoney: string

  /**
   * 退款金额
   * @value
   */
  refundMoney: string

  /**
   * 退款状态，0 退款提交 1 退款处理中 2 退款成功 3退款失败
   * @value
   */
  refundState: number

  /**
   * 退款状态
   * @value
   */
  refundStateName: string

  /**
   * 支付费率类别，1支付费率，2扣除费率
   * @value
   */
  settlefeeType: number

  /**
   * 官方订单号
   * @value
   */
  topTranNo: string

  /**
   * 订单金额
   * @value
   */
  tranMoney: string

  /**
   * 支付订单号
   * @value
   */
  tranNo: string

  /**
   * 交易状态,1等待支付、2支付成功、3支付失败、4订单关闭
   * @value
   */
  tranState: number

  /**
   * 交易状态（文字）
   * @value
   */
  tranStateName: string

  /**
   * 付款人姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     * 水电费校区编码
     * @value
     */
    areaCode: string

    /**
     * 水电费校区名称
     * @value
     */
    areaName: string

    /**
     * 水电费楼栋编码
     * @value
     */
    buildingCode: string

    /**
     * 水电费楼栋名称
     * @value
     */
    buildingName: string

    /**
     * 创建时间
     * @value #datetime()
     */
    createTime: string

    /**
     * 费率金额
     * @value
     */
    feeMoney: number

    /**
     * 水电费楼层编码
     * @value
     */
    floorCode: string

    /**
     * 水电费楼层名称
     * @value
     */
    floorName: string

    /**
     * id
     * @value
     */
    id: number

    /**
     * 学号
     * @value
     */
    jobNo: string

    /**
     * 手机号
     * @value
     */
    mobilePhone: string

    /**
     * 订单编号
     * @value
     */
    orderNo: string

    /**
     * 外部订单号
     * @value
     */
    outTradeNo: string

    /**
     * 外部充值状态 0未充值 1充值中 2充值完成 3充值失败 4充值关闭
     * @value
     */
    outTradeStatus: number

    /**
     * 外部充值状态 0未充值 1充值中 2充值完成 3充值失败 4充值关闭
     * @value
     */
    outTradeStatusStr: string

    /**
     * 缴费模式：1、智能电表  2、老电表
     * @value
     */
    pattern: number

    /**
     * 缴费模式：1、智能电表  2、老电表
     * @value
     */
    patternStr: string

    /**
     * 支付金额
     * @value
     */
    payMoney: number

    /**
     * 支付单号
     * @value
     */
    payNo: string

    /**
     * 支付状态：1等待支付、2支付成功、3支付失败、4订单关闭
     * @value
     */
    payStatus: number

    /**
     * 支付状态：1等待支付、2支付成功、3支付失败、4订单关闭
     * @value
     */
    payStatusStr: string

    /**
     * 支付时间
     * @value #datetime()
     */
    payTime: string

    /**
     * 支付方式 ：ALIPAY:支付宝支付 WXPAY:微信支付 UNIONPAY:银联支付 LONGPAY:建行龙支付  CARDPAY:一卡通支付
     * @value
     */
    payType: string

    /**
     * 商品名
     * @value
     */
    prodName: string

    /**
     * 红包金额
     * @value
     */
    redbagMoney: number

    /**
     * 订单备注
     * @value
     */
    remark: string

    /**
     * 水电费房间编码
     * @value
     */
    roomCode: string

    /**
     * 水电费房间名称
     * @value
     */
    roomName: string

    /**
     * 学校名称
     * @value
     */
    schoolName: string

    /**
     * 来源：app：易校园APP  wechat：微信  yxapp：越秀APP  wxapp:微信小程序
     * @value
     */
    source: string

    /**
     * 来源名称
     * @value
     */
    sourceStr: string

    /**
     * 订单状态：0处理中 1已完成
     * @value
     */
    status: string

    /**
     * 业务类型：电费、网费、水费
     * @value
     */
    subType: string

    /**
     * 到账金额
     * @value
     */
    totalMoney: number

    /**
     * 订单类型
     * @value
     */
    type: string

    /**
     * 修改时间
     * @value #datetime()
     */
    updateTime: string

    /**
     * 姓名
     * @value
     */
    userName: string
  }

/**
 * --
 */
export type 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息_1 =
  {
    /**
     * 商户号
     * @value
     */
    cpCode: string

    /**
     * 主商户名称
     * @value
     */
    cpMainName: string

    /**
     * 商户名称
     * @value
     */
    cpName: string

    /**
     * 商户订单号
     * @value
     */
    cpTranNo: string

    /**
     * 创建时间
     * @value
     */
    createTime: string

    /**
     * 费率金额
     * @value
     */
    feeMoney: string

    /**
     * id
     * @value
     */
    id: number

    /**
     * 学号
     * @value
     */
    jobNo: string

    /**
     * 支付渠道
     * @value
     */
    payName: string

    /**
     * 支付时间
     * @value #datetime()
     */
    payTime: string

    /**
     * 产品名称
     * @value
     */
    prodName: string

    /**
     * 支付金额
     * @value
     */
    realMoney: string

    /**
     * 红包金额
     * @value
     */
    redbagMoney: string

    /**
     * 退款金额
     * @value
     */
    refundMoney: string

    /**
     * 退款状态，0 退款提交 1 退款处理中 2 退款成功 3退款失败
     * @value
     */
    refundState: number

    /**
     * 退款状态
     * @value
     */
    refundStateName: string

    /**
     * 支付费率类别，1支付费率，2扣除费率
     * @value
     */
    settlefeeType: number

    /**
     * 官方单号
     * @value
     */
    topTranNo: string

    /**
     * 交易金额
     * @value
     */
    tranMoney: string

    /**
     * 支付单号
     * @value
     */
    tranNo: string

    /**
     * 交易状态,1等待支付、2支付成功、3支付失败、4订单关闭
     * @value
     */
    tranState: number

    /**
     * 交易状态
     * @value
     */
    tranStateName: string

    /**
     * 用户姓名
     * @value
     */
    userName: string
  }

/**
 * --
 */
export type 文章返回参数 = {
  /**
   *
   * @value
   */
  articleText: string

  /**
   * 附件,json对象列表格式,例：{'fileName':'文件名','fileUrl':'https://oss.aliyun.com'}
   * @value
   */
  attachment: string

  /**
   *
   * @value
   */
  author: string

  /**
   * 文章类型 1富文本 2链接
   * @value
   */
  contentType: number

  /**
   * 链接地址
   * @value
   */
  contentUrl: string

  /**
   *
   * @value #datetime()
   */
  createTime: string

  /**
   * 文章截至日期
   * @value #datetime()
   */
  endTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  imageUrl: string

  /**
   * 是否热门问题(0是1否)
   * @value
   */
  isHot: number

  /**
   * 是否推送到app首页 0是  1否
   * @value
   */
  isTop: number

  /**
   *
   * @value
   */
  operation: string

  /**
   *
   * @value
   */
  platform: string

  /**
   *
   * @value
   */
  platformStr: string

  /**
   * 是否弹屏 0:是  1:否
   * @value
   */
  popupScreenFlag: number

  /**
   *
   * @value
   */
  schoolId: number

  /**
   *
   * @value
   */
  schoolName: string

  /**
   * 排序 ,小于5位
   * @value
   */
  sort: number

  /**
   *
   * @value
   */
  status: number

  /**
   *
   * @value
   */
  statusStr: string

  /**
   *
   * @value
   */
  tagsId: number

  /**
   *
   * @value
   */
  tagsName: string

  /**
   *
   * @value
   */
  title: string

  /**
   *
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type 校区查询 = {
  /**
   * 校区编码
   * @value
   */
  areaCode: string

  /**
   * 校区名称
   * @value
   */
  areaName: string

  /**
   * 绑定房间数量
   * @value
   */
  bindRoomNum: number

  /**
   * 校区编码
   * @value
   */
  id: number

  /**
   * 是否充值后绑定 0、是 1、否
   * @value
   */
  isBindAfterRecharge: number

  /**
   * 支付渠道(支付渠道暂时只支持app): 1, 云马聚合支付 2, 神州浩天支付
   * @value
   */
  paymentChannel: string

  /**
   * 学校编码
   * @value
   */
  schoolCode: string
}

/**
 * --
 */
export type 用户信息 = {
  /**
   * 登录账户
   * @value
   */
  account: string

  /**
   * 激活状态 0未激活 1激活
   * @value
   */
  activeStatus: number

  /**
   * 绑卡状态 1已经绑卡 0未绑卡
   * @value
   */
  bindCardStatus: number

  /**
   * 按钮列表
   * @value
   */
  buttonList: string[]

  /**
   * 子商户编码,用户可以查询的子商户数据
   * @value
   */
  childMerchantCode: string

  /**
   * 子商户名称
   * @value
   */
  childMerchantName: string
  currentOperatePermission: {}

  /**
   * 设备id
   * @value
   */
  deviceId: string

  /**
   * 扩展json
   * @value
   */
  extJson: string

  /**
   * 是否有密码（0有 1没有）
   * @value
   */
  hasPwd: number

  /**
   * 头像
   * @value
   */
  headImg: string

  /**
   * 用户id
   * @value
   */
  id: number

  /**
   * 身份证号
   * @value
   */
  identityNo: string

  /**
   * 是否平台用户 0是 1否,平台用户不受数据权限控制,同超级管理员一样
   * @value
   */
  isPlatformUser: number

  /**
   * 是否设置了安全密码：0、已设置 1、未设置
   * @value
   */
  isSetSecurePwd: number

  /**
   * 是否超级管理员  0是  1否
   * @value
   */
  isSuper: number

  /**
   * 是否需要强制修改密码 0是 1否
   * @value
   */
  isUpdatePwd: number

  /**
   * 工号/学号
   * @value
   */
  jobNo: string

  /**
   * 最后一次登录时间
   * @value #datetime()
   */
  lastLogin: string

  /**
   * 菜单列表
   * @rule 2
   */
  menuList: CenterSysMenuTree4LoginVO[]

  /**
   * 商户编码,所属商户只能查询自己商户的数据
   * @value
   */
  merchantCode: string

  /**
   * 商户名称
   * @value
   */
  merchantName: string

  /**
   * 手机号
   * @value
   */
  mobilePhone: string

  /**
   * 用户名/昵称
   * @value
   */
  nickName: string

  /**
   * openid
   * @value
   */
  openid: string

  /**
   * 支付openid
   * @value
   */
  payOpenid: string

  /**
   * 平台,不同平台查询的数据是不一样的,目前有两个平台 易校园,意法
   * @value
   */
  platform: string

  /**
   * app 身份证号
   * @value
   */
  realIdentityNo: string

  /**
   * 是否实名 0未实名 1已经实名
   * @value
   */
  realNameStatus: number

  /**
   * app真实姓名
   * @value
   */
  realUserName: string

  /**
   * 注册时间
   * @value #datetime()
   */
  regiserTime: string

  /**
   * 记录请求uri,方便排查问题
   * @value
   */
  requestUri: string

  /**
   * 登录成功，返回的页面地址
   * @value
   */
  returnUrl: string

  /**
   * 角色id
   * @value
   */
  roleId: string

  /**
   * 学校校徽
   * @value
   */
  schoolBadgeImg: string

  /**
   * 学校类别(1.学校 2.企业 3.医院 政府)
   * @value
   */
  schoolClasses: number

  /**
   * 学校编码
   * @value
   */
  schoolCode: string

  /**
   * 学校名称（中文全称）
   * @value
   */
  schoolName: string

  /**
   *
   * @value
   */
  schoolNature: number

  /**
   * sessionId
   * @value
   */
  sessionId: string

  /**
   * 性别 1男，2女，没有值表示男
   * @value
   */
  sex: number

  /**
   *
   * @value
   */
  shiroJid: string

  /**
   * 是否是测试账户  0是  1否
   * @value
   */
  testAccount: number

  /**
   * thirdOpenid
   * @value
   */
  thirdOpenid: string

  /**
   * token
   * @value
   */
  token: string

  /**
   * 距上次修改密码天数
   * @value
   */
  updatePwdDays: number

  /**
   * 班级
   * @value
   */
  userClass: string

  /**
   * 一卡通账号
   * @value
   */
  userIdcard: string

  /**
   * 用户真实姓名
   * @value
   */
  userName: string

  /**
   * 用户状态 0冻结 1正常
   * @value
   */
  userStatus: number

  /**
   * 用户类型,一卡通返回的身份,易校园平台身份请查看属性school_identity_type, 1 学生 2 老师(校长和其他) 3 校友 4 家长 5其他
   * @value
   */
  userType: string

  /**
   * 迎新身份证号
   * @value
   */
  wnIdentityNo: string
}

/**
 * --
 */
export type 用户角色VO = {
  /**
   * 子商户号,多个以逗号隔开
   * @value
   */
  childMerchantCode: string

  /**
   * 子商户名称
   * @value
   */
  childMerchantName: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * id
   * @value
   */
  id: number

  /**
   * 是否平台用户 0是 1否
   * @value
   */
  isPlatformUser: number

  /**
   *
   * @value
   */
  isPlatformUserStr: string

  /**
   * 商户号
   * @value
   */
  merchantCode: string

  /**
   * 商户名称
   * @value
   */
  merchantName: string

  /**
   * 手机
   * @value
   */
  mobilePhone: string

  /**
   * 角色id
   * @value
   */
  roleId: number

  /**
   * 角色名称
   * @value
   */
  roleName: string

  /**
   * 状态 0未启用,1已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 用户ID
   * @value
   */
  userId: number

  /**
   * 姓名
   * @value
   */
  userName: string
}

/**
 * --
 */
export type 获取学校信息返回VO = {
  /**
   * 校徽图片
   * @value
   */
  badgeImg: string

  /**
   * 校园卡温馨提示
   * @value
   */
  bindPwdRemind: string

  /**
   * 校园卡背景图
   * @value
   */
  panoramagramImg: string

  /**
   * 学校简介
   * @value
   */
  schoolSummary: string
}

/**
 * --
 */
export type 获取预览信息返回VO = {
  /**
   * 二维码图片
   * @value
   */
  qrCodeImage: string

  /**
   * 地址
   * @value
   */
  url: string
}

/**
 * --
 */
export type 轮播图表返回数据参数 = {
  /**
   * 文章id
   * @value
   */
  articleId: string

  /**
   * 图片
   * @value
   */
  bannerImg: string

  /**
   * 创建时间
   * @value #datetime()
   */
  createTime: string

  /**
   * 结束时间
   * @value #datetime()
   */
  endTime: string

  /**
   *
   * @value
   */
  id: number

  /**
   *
   * @value
   */
  operates: string[]

  /**
   * 链接地址
   * @value
   */
  outUrl: string

  /**
   * 展示地方
   * @value
   */
  position: string

  /**
   * 展示地方编码 1000:新闻公告 2000:学校介绍 3000:迎新公告 0000:外部链接
   * @value
   */
  positionCode: string

  /**
   *
   * @value
   */
  schoolCode: string

  /**
   *
   * @value
   */
  schoolName: string

  /**
   * 排序
   * @value
   */
  showSort: number

  /**
   * 开始时间
   * @value #datetime()
   */
  startTime: string

  /**
   * 状态  0:未启用 1:已启用
   * @value
   */
  status: number

  /**
   * 状态
   * @value
   */
  statusStr: string

  /**
   * 文章类型
   * @value
   */
  tagType: string

  /**
   * 标题
   * @value
   */
  title: string

  /**
   * 轮播类型 0:外部 1:内部
   * @value
   */
  type: number

  /**
   * 轮播类型 0:外部 1:内部
   * @value
   */
  typeStr: string

  /**
   * 更新时间
   * @value #datetime()
   */
  updateTime: string
}

/**
 * --
 */
export type 迎新房间 = {
  /**
   * 是否已经分配： 0-是，1-否
   * @value
   */
  assignStatus: number

  /**
   * 楼栋ID
   * @value
   */
  buildingId: number

  /**
   *
   * @value
   */
  buildingName: string

  /**
   * 床位
   * @rule 2
   */
  bunkList: BunkInfoVO[]

  /**
   * 楼层Id
   * @value
   */
  floorId: number

  /**
   *
   * @value
   */
  floorName: string

  /**
   * 房间ID
   * @value
   */
  id: number

  /**
   * 房间名称
   * @value
   */
  roomFullName: string

  /**
   * 房间名称
   * @value
   */
  roomName: string

  /**
   * 房间类型（几人间）
   * @value
   */
  roomType: number

  /**
   * 校区ID
   * @value
   */
  zoneId: number
}

/**
 * --
 */
export type 退款订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     * 渠道退款订单号
     * @value
     */
    channelRefundTranNo: string

    /**
     * 主商户名称
     * @value
     */
    cpMainName: string

    /**
     * 商户名称
     * @value
     */
    cpName: string

    /**
     * 商户退款单号
     * @value
     */
    cpRefundTranNo: string

    /**
     * 创建时间
     * @value #datetime()
     */
    createTime: string

    /**
     * id
     * @value
     */
    id: number

    /**
     * 通知状态
     * @value
     */
    notifyState: number

    /**
     * 通知状态名称
     * @value
     */
    notifyStateName: string

    /**
     * 支付方式
     * @value
     */
    payType: string

    /**
     * 支付方式名称
     * @value
     */
    payTypeName: string

    /**
     * 实际支付金额
     * @value
     */
    realMoney: string

    /**
     * 退款金额
     * @value
     */
    refundMoney: string

    /**
     * 退款原因
     * @value
     */
    refundReason: string

    /**
     * 退款状态
     * @value
     */
    refundStateName: string

    /**
     * 退款时间
     * @value
     */
    refundTime: string

    /**
     * 退款订单号
     * @value
     */
    refundTranNo: string

    /**
     * 退款总笔数
     * @value
     */
    totalRefundCount: string

    /**
     * 退款总金额
     * @value
     */
    totalRefundMoney: string

    /**
     * 交易金额
     * @value
     */
    tranMoney: string

    /**
     * 支付订单号
     * @value
     */
    tranNo: string
  }
