export type ApiElectricAreaVO = {
  /**
   * @description 校区编码
   */
  areaId: string
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type ApiElectricBuildingVO = {
  /**
   * @description 校区编码
   */
  areaId: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type ApiElectricFloorVO = {
  /**
   * @description 校区编码
   */
  areaId: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type ApiElectricOrderBackVO = {
  /**
   * @description 订单号状态  0、处理中 1、已完成
   */
  orderStatus: number
  /**
   * @description 订单号状态提示信息
   */
  orderStatusMsg: string
}
export type ApiElectricOrderVO = {
  /**
   * @description 校区ID
   */
  areaId: number
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 第三方支付单号
   */
  cpPayNo: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 电费订单号
   */
  orderCode: string
  /**
   * @description 订单状态 0、处理中  1、已完成
   */
  orderStatus: number
  /**
   * @description 充值金额
   */
  rechargeAmount: number
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type ApiElectricPreOrderVO = {
  /**
   * @description 电费订单号
   */
  orderCode: string
}
export type ApiElectricRoomRechargeTypeVO = {
  /**
   * @description 充值类型名称
   */
  rechargeName: string
  /**
   * @description 充值类型
   */
  rechargeType: string
}
export type ApiElectricRoomSurplusBaseVO = {
  /**
   * @description 校区编码
   */
  areaId: number
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @value 2
   * @description 充值类型列表
   */
  rechargeTypeList: ApiElectricRoomRechargeTypeVO[]
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value 2
   * @description 剩余量列表
   */
  surplusList: ApiElectricRoomSurplusVO[]
}
export type ApiElectricRoomSurplusVO = {
  /**
   * @description 剩余金额
   */
  amount: number
  /**
   * @description 剩余补助
   */
  subsidy: number
  /**
   * @description 剩余补助金额
   */
  subsidyAmount: number
  /**
   * @description 剩余量
   */
  surplus: number
  /**
   * @description 类型名称
   */
  typeName: string
}
export type ApiElectricRoomVO = {
  /**
   * @description 校区编码
   */
  areaId: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type ApiPayCenterListVO = {
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 名单id
   */
  listId: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 项目编码
   */
  proId: number
  /**
   * @description 项目名称
   */
  proName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 状态0未缴纳 2缴纳中 1已缴纳
   */
  status: number
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description 年级
   */
  userGrade: string
  /**
   * @description 身份证
   */
  userIdCard: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 院系
   */
  userXi: string
  /**
   * @description 专业
   */
  userZhuan: string
}
export type ApiQueryOrderByNoVO = {
  /**
   * @description 订单号
   */
  orderNo: string
  /**
   * @description 缴费状态 1等待支付 2支付成功 3支付失败 4订单关闭
   */
  orderStatus: string
  /**
   * @description 支付单号
   */
  payOrder: string
  /**
   * @description 支付时间
   */
  payTime: string
}
export type ApiQueryOrderPageVO = {
  /**
   * @description 账户id
   */
  accId: string
  /**
   * @description 缴费期间编码
   */
  durationCode: string
  /**
   * @description 缴费期间名称
   */
  durationName: string
  /**
   * @description 订单号
   */
  orderNo: string
  /**
   * @description 缴费状态 1等待支付 2支付成功 3支付失败 4订单关闭
   */
  orderStatus: string
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 支付单号
   */
  payOrder: string
  /**
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 缴费项目ID
   */
  proId: string
  /**
   * @description 缴费项目名称
   */
  proName: string
  /**
   * @description 第三方待缴订单编号
   */
  thirdSeqNo: string
  /**
   * @description 缴费年份
   */
  thirdYear: string
  /**
   * @description 身份证号
   */
  userIdCard: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
}
export type AppJiaofeiListStatVO = {
  /**
   * @description 类型[院系、专业、班级]名称
   */
  levelName: string
  /**
   * @description 已缴人数
   */
  paidPerson: number
  /**
   * @description 已缴完成率字符串
   */
  recordRateStr: string
  /**
   * @description 总人数
   */
  totalPerson: number
  /**
   * @description 未缴人数
   */
  unPayPerson: number
}
export type AppJiaofeiPayListVO = {
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 是否合并支付 0否 1是
   */
  isMergePay: number
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 名单id
   */
  listId: number
  /**
   * @description 订单号
   */
  orderId: number
  /**
   * @description 支付状态  0等待支付、2支付成功、3支付失败、-1订单关闭
   */
  orderStatus: number
  /**
   * @description 支付状态
   */
  orderStatusStr: string
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 缴费项目名称
   */
  proName: string
  /**
   * @description 身份证号
   */
  userIdCard: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
}
export type AppJiaofeiProjectStatVO = {
  /**
   * @description 全部人数
   */
  allPerson: number
  /**
   * @description 是否有数据权限 0否 1是
   */
  isOrganization: number
  /**
   * @description 已缴金额
   */
  paidAmount: number
  /**
   * @description 已缴人数
   */
  paidPerson: number
  /**
   * @description 项目id
   */
  projectId: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 未缴人数
   */
  unPayPerson: number
}
export type AuthJSAppParam = {
  /**
   * @description 应用id
   */
  appid: string
  /**
   * @description 用户id
   */
  id: number
  /**
   * @description 接口方法集合
   */
  jsApiList: string
  /**
   * @description 随机数
   */
  nonceStr: string
  /**
   * @description 内部鉴权token
   */
  routeToken: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 密钥
   */
  secret: string
  /**
   * @description shiroJID
   */
  shiroJID: string
  /**
   * @description appid 的签名
   */
  signature: string
  /**
   * @description 当前时间戳
   */
  timestamp: string
  /**
   * @description 页面url
   */
  url: string
}
export type AuthOrgVO = {
  createTime: string
  mobilePhone: string
  userId: number
  userName: string
}
export type AuthUserParam = {
  /**
   * @description 平台
   */
  platform: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 第三方id
   */
  thirdOpenid: string
  /**
   * @description 加密后的用户ID
   */
  uuToken: string
  /**
   * @description token
   */
  ymToken: string
  /**
   * @description 用户id
   */
  ymUserId: number
}
export type AuthWechatmsgPushApiVO = {
  /**
   * @description 内容
   */
  content: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @description 创建时间
   */
  createTimeStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 发送时间
   */
  sendTimeStr: string
  /**
   * @description 推送方式
   */
  sendTypeStr: string
  /**
   * @description 推送状态
   */
  statusStr: string
  /**
   * @description 标题
   */
  title: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @description 微信模板id
   */
  wechatTemplateId: string
}
export type AuthWechatmsgSchoolApiVO = {
  /**
   * @description 详细内容
   */
  content: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 行业
   */
  industry: string
  /**
   * @description 示例图片
   */
  logo: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 标题
   */
  title: string
  /**
   * @description 微信模板id
   */
  wechatTemplateId: string
}
export type BaseDataAppVO = {
  /**
   * @description 分类
   */
  classifyCode: string
  /**
   * @description 描述
   */
  description: string
  /**
   * @description id
   */
  id: number
  /**
   * @description key
   */
  optionCode: string
  /**
   * @description value
   */
  optionName: string
  /**
   * @description 排序
   */
  sort: number
}
export type BaseDataDO = {
  classifyCode: string
  createId: number
  createName: string
  /**
   * @value #datetime()
   */
  createTime: string
  deleteFlag: number
  description: string
  id: number
  isDefault: number
  optionCode: string
  optionName: string
  optionNameType: number
  sort: number
  updateId: number
  updateName: string
  /**
   * @value #datetime()
   */
  updateTime: string
}
/**
 * @description 月对账报表明细返回数据参数
 */
export type BillMonthReportInfoVO = {
  /**
   * @description 对账日期
   */
  billDate: number
  /**
   * @value #datetime()
   * @description 一卡通到帐时间
   */
  billTime: string
  /**
   * @description 一卡通订单号
   */
  cardNo: string
  id: number
  /**
   * @description 学号
   */
  jobNo: string
  /**
   * @description 操作员
   */
  optnum: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 支付方式
   */
  payType: string
  /**
   * @description 支付方式
   */
  payTypeName: string
  /**
   * @description 平台
   */
  platform: string
  /**
   * @description 平台
   */
  platformName: string
  /**
   * @description 对账结果描述
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校编码
   */
  schoolCodeName: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 微信等第三方订单号
   */
  topNo: string
  /**
   * @description 支付金额
   */
  tranMoney: number
  /**
   * @description 支付金额
   */
  tranMoneyStr: string
  /**
   * @description 支付订单号
   */
  tranNo: string
  /**
   * @description 一卡通账号
   */
  userIdcard: string
  /**
   * @description 用户姓名
   */
  userName: string
}
/**
 * @description 日月账单分析汇总信息VO
 */
export type BillReportDetailVO = {
  /**
   * @description 账单详情
   */
  billReport: BillReportVO
  /**
   * @description 账单分析结论
   */
  cardBillReportDetail: CardBillReportDetail
  /**
   * @value 2
   * @description 支付渠道汇总
   */
  payVOList: BillReportPayVO[]
  /**
   * @description 学校名称
   */
  schoolName: string
}
/**
 * @description 对账报表明细返回数据参数
 */
export type BillReportInfoVO = {
  /**
   * @description 对账日期
   */
  billDate: number
  /**
   * @value #datetime()
   * @description 一卡通到帐时间
   */
  billTime: string
  /**
   * @description 一卡通订单号
   */
  cardNo: string
  id: number
  /**
   * @description 学号
   */
  jobNo: string
  /**
   * @description 操作员
   */
  optnum: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 支付方式
   */
  payType: string
  /**
   * @description 支付方式
   */
  payTypeName: string
  /**
   * @description 平台
   */
  platform: string
  /**
   * @description 平台
   */
  platformName: string
  /**
   * @description 一卡通流水
   */
  recid: number
  /**
   * @description 对账结果描述
   */
  remark: string
  /**
   * @description 报表id
   */
  reportId: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolCodeName: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 微信等第三方订单号
   */
  topNo: string
  /**
   * @description 支付金额
   */
  tranMoney: number
  /**
   * @description 支付金额
   */
  tranMoneyStr: string
  /**
   * @description 支付订单号
   */
  tranNo: string
  /**
   * @description 一卡通账号
   */
  userIdcard: string
  /**
   * @description 用户姓名
   */
  userName: string
}
/**
 * @description 对账报表付款方式返回数据参数
 */
export type BillReportPayVO = {
  /**
   * @description 金额
   */
  amount: number
  /**
   * @description 金额
   */
  amountStr: string
  id: number
  /**
   * @description 数量
   */
  num: number
  /**
   * @description 支付方式
   */
  payType: string
  /**
   * @description 支付方式
   */
  payTypeName: string
}
/**
 * @description 对账报表返回数据参数
 */
export type BillReportVO = {
  /**
   * @description 支付宝交易额
   */
  alipay: number
  /**
   * @description 支付宝交易额
   */
  alipayStr: string
  /**
   * @description 交易总金额
   */
  amount: number
  /**
   * @description 交易总金额
   */
  amountStr: string
  /**
   * @description 日期
   */
  billDate: number
  /**
   * @description 账单状态
   */
  billStatusName: string
  /**
   * @description 一卡通入账金额
   */
  cardAmount: number
  /**
   * @description 一卡通入账金额
   */
  cardAmountStr: string
  /**
   * @description 一卡通订单数
   */
  cardNum: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 账单结束日期
   */
  endDate: number
  /**
   * @description 易校园钱包交易额
   */
  epay: number
  /**
   * @description 易校园钱包交易额
   */
  epayStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 差额
   */
  lessAmount: number
  /**
   * @description 差额
   */
  lessAmountStr: string
  /**
   * @description 交易订单数
   */
  num: number
  /**
   * @description 其他交易额
   */
  other: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 账单开始日期
   */
  startDate: number
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 账单生成状态
   */
  statusName: string
  /**
   * @description 微信交易额
   */
  weixin: number
  /**
   * @description 微信交易额
   */
  weixinStr: string
}
export type BunkInfoVO = {
  /**
   * @description 床位编号
   */
  bunkName: string
  /**
   * @description 是否已住人 0: 正常未住人  1:已住人
   */
  status: number
}
export type CCBElectricApiRoomSurplusVO = {
  /**
   * @description 校区编码
   */
  areaId: string
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 欠款金额
   */
  arrearsAmount: number
  /**
   * @description 欠款显示名
   */
  arrearsName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  msg: string
  /**
   * @value 2
   * @description 充值类型列表
   */
  rechargeTypeList: ApiElectricRoomRechargeTypeVO[]
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校名称
   */
  schoolName: string
  sign: string
  signType: string
  status: string
  /**
   * @value 2
   * @description 剩余量列表
   */
  surplusList: ApiElectricRoomSurplusVO[]
}
export type CCBElectricApiVO = {
  msg: string
  rows: {}[]
  sign: string
  signType: string
  status: string
  total: string
}
export type CCBElectricRechargeVOResponse = {
  cpPayNo: string
  msg: string
  orderCode: string
  orderStatus: string
  orderStatusMsg: string
  sign: string
  signType: string
  status: string
  tranNo: string
}
/**
 * @description 一卡通对账结果
 */
export type CardBillReportDetail = {
  /**
   * @description 重复充值金额
   */
  dupAmount: number
  /**
   * @description 重复充值金额
   */
  dupAmountStr: string
  /**
   * @description 重复充值数量
   */
  dupNum: number
  /**
   * @description 异常充值金额
   */
  errorAmount: number
  /**
   * @description 异常充值金额
   */
  errorAmountStr: string
  /**
   * @description 异常充值数量
   */
  errorNum: number
  /**
   * @description 未到帐金额
   */
  noAmount: number
  /**
   * @description 未到帐金额
   */
  noAmountStr: string
  /**
   * @description 未到帐数量
   */
  noNum: number
  /**
   * @description 正常金额
   */
  normalAmount: number
  /**
   * @description 正常金额
   */
  normalAmountStr: string
  /**
   * @description 正常数量
   */
  normalNum: number
  /**
   * @description 跨天账金额
   */
  spanAmount: number
  /**
   * @description 跨天账金额
   */
  spanAmountStr: string
  /**
   * @description 跨天账数量
   */
  spanNum: number
}
export type CardInfoVO = {
  /**
   * @description 是否允许消费：1允许 0不允许
   */
  allowPayment: string
  /**
   * @description 是否允许查询：1允许 0不允许
   */
  allowQuery: string
  /**
   * @description 是否允许充值：1允许 0不允许
   */
  allowRecharge: string
  /**
   * @description 账户余额
   */
  cardMoney: string
  /**
   * @description 卡状态1正常，2挂失，3冻结
   */
  cardState: string
  /**
   * @description 身份名称
   */
  clsName: string
  /**
   * @description 班级
   */
  grade: string
  /**
   * @description 身份证
   */
  idCard: string
  /**
   * @description 手机号
   */
  phone: string
  /**
   * @description 真实姓名
   */
  realName: string
  /**
   * @description 可充值金额,格式是XX.XX元
   */
  rechargeableAmount: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 返回状态
   */
  resultCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别
   */
  sex: string
  /**
   * @description 学号
   */
  studentNumber: string
  /**
   * @description 一卡通卡号
   */
  userCard: string
}
export type CenterAllDashboardVO = {
  /**
   * @description 今日打卡情况
   */
  clockInStr: string
  /**
   * @description 是否展示教职工模块 0:是 1:否
   */
  isShowStaffDepartment: number
  /**
   * @description 学生人数地区分布
   */
  schoolAreaStr: string
  /**
   * @description 今日健康状况
   */
  schoolHealthStr: string
  /**
   * @description 师生总数
   */
  schoolTotalNumStr: string
  /**
   * @description 本校疫情看盘
   */
  schoolYiqingStr: string
  /**
   * @description 学生部门打卡率
   */
  studentDepartClockRatioStr: string
  /**
   * @description 学生部门疫情
   */
  studentDepartYiqingStr: string
  /**
   * @description 职工部门打卡率
   */
  teacherDepartClockRatioStr: string
  /**
   * @description 职工部门疫情
   */
  teacherDepartYiqingStr: string
  /**
   * @description 每日打卡数据
   */
  totalClockInStr: string
  /**
   * @description 每日趋势图
   */
  totalYiqingStr: string
}
export type CenterAppJiaofeiAmountVO = {
  /**
   * @description 未缴金额
   */
  arrearageAmount: number
  /**
   * @description 已缴金额
   */
  payAmount: number
  /**
   * @description 应收金额
   */
  receivableAmount: number
}
export type CenterAppJiaofeiDetialVO = {
  /**
   * @value #datetime()
   * @description 缴费开始时间
   */
  beginDate: string
  /**
   * @value 2
   * @description 自定义缴费方式,二级分类不为空时，可能存在金额分配信息
   */
  centerJiaofeiProDicVo: CenterJiaofeiProDicVO[]
  /**
   * @description 关闭原因
   */
  closeTips: string
  /**
   * @description 部门ID
   */
  deptId: number
  /**
   * @description 二级分类ID
   */
  dicId: number
  /**
   * @value #datetime()
   * @description 缴费结束时间
   */
  endDate: string
  /**
   * @description 顶部图片链接
   */
  headPicLink: string
  /**
   * @description 顶部图片
   */
  headPicUrl: string
  /**
   * @description 导入名单用户证件号 0身份证 1学号
   */
  importUserType: number
  /**
   * @description 是否可多次提交 0否 1是
   */
  isMorePay: number
  /**
   * @description 是否需要班级 0否 1是
   */
  isNeedClass: number
  /**
   * @description 是否需要身份证号 0否 1是
   */
  isNeedIdcard: number
  /**
   * @description 是否需要姓名 0否 1是
   */
  isNeedName: number
  /**
   * @description 是否需要手机号 0否 1是
   */
  isNeedPhone: number
  /**
   * @description 是否需要协议 0否 1是
   */
  isNeedProtocol: number
  /**
   * @description 备注是否必填 0否 1是
   */
  isNeedRemark: number
  /**
   * @description 是否需要学号 0否 1是
   */
  isNeedUserno: number
  /**
   * @description 无需支付 0否 1是
   */
  isNoPay: number
  /**
   * @description 是否允许充值0否1是
   */
  isOpen: number
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 缴费方式 0自定义 1导入
   */
  jiaofeiMethod: number
  /**
   * @description 最大金额
   */
  maxAmount: number
  /**
   * @description 最小金额
   */
  minAmount: number
  /**
   * @description 公告
   */
  notice: string
  /**
   * @description 英文公告
   */
  noticeEn: string
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 项目ID
   */
  projectId: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 项目英文名称
   */
  projectNameEn: string
  /**
   * @description 协议内容
   */
  protocolContent: string
  /**
   * @description 协议标题
   */
  protocolTitle: string
  /**
   * @description 协议标题英文
   */
  protocolTitleEn: string
  /**
   * @description 备注提示语
   */
  remarkMsg: string
  /**
   * @description 备注提示语英文
   */
  remarkMsgEn: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 温馨提示
   */
  tips: string
  /**
   * @description 英文温馨提示
   */
  tipsEn: string
  /**
   * @description 分类ID
   */
  typeId: number
}
export type CenterAppJiaofeiListVO = {
  /**
   * @description 未缴金额
   */
  arrearageAmount: number
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 部门id
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 部门名称英文
   */
  deptNameEn: string
  /**
   * @value 2
   * @description 二级分类费用
   */
  dicList: CenterJiaofeiProDicVO[]
  /**
   * @description 学历
   */
  education: string
  /**
   * @description 缴费名单ID
   */
  id: number
  /**
   * @description 身份证)
   */
  idCard: string
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 是否过期 0否 1是
   */
  isTimeOut: number
  /**
   * @description 最大金额
   */
  maxAmount: number
  /**
   * @description 最小金额
   */
  minAmount: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 项目图标
   */
  projectIcon: string
  /**
   * @description 项目编码
   */
  projectId: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 项目英文名称
   */
  projectNameEn: string
  /**
   * @description 应收金额
   */
  receivableAmount: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 性别
   */
  sex: string
  /**
   * @description 状态0未缴纳 2缴纳中 1已缴纳
   */
  status: number
  /**
   * @description 学制
   */
  studyCount: number
  /**
   * @description 入学年份
   */
  studyYear: string
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description 年级
   */
  userGrade: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
  /**
   * @description 院系
   */
  userXi: string
  /**
   * @description 专业
   */
  userZhuan: string
}
export type CenterAppJiaofeiPayableVO = {
  /**
   * @value 2
   * @description 导入名单
   */
  importPayableList: CenterAppJiaofeiListVO[]
  /**
   * @value 2
   * @description 第三方应付款列表
   */
  thirdPayableList: CenterAppJiaofeiThirdPayableVO[]
}
export type CenterAppJiaofeiThirdPayableVO = {
  /**
   * @description 易达帐户ID
   */
  accId: string
  /**
   * @description 友财入账银行卡号
   */
  bankAccount: string
  /**
   * @description 收费期间代码
   */
  durationCode: string
  /**
   * @description 收费期间名称
   */
  durationName: string
  /**
   * @description 扩展字段
   */
  extJson: string
  /**
   * @description 友财费用Id
   */
  feeId: string
  /**
   * @description 友财费用类型 0:必收 1:选收 2:学分学费
   */
  feeType: number
  /**
   * @description 友财是否允许部分缴费
   */
  isAllowPartPay: boolean
  /**
   * @description 是否合并缴费
   */
  isMergePay: boolean
  /**
   * @description 友财是否必缴项目
   */
  isMustPay: boolean
  /**
   * @description 友财已缴金额
   */
  paid: number
  /**
   * @description 缴费金额
   */
  payAmount: string
  /**
   * @description 项目编码
   */
  proId: string
  /**
   * @description 项目名称
   */
  proName: string
  /**
   * @description 项目图标
   */
  projectIcon: string
  /**
   * @description 接口类型 0贵阳易达恒志 1兰大缴费 2工贸缴费 3天津学院友财缴费
   */
  thirdType: number
  /**
   * @description 统一接口id
   */
  unifiedApiId: number
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学生号
   */
  userNo: string
  verificationCode: string
  /**
   * @description 友财收费年度
   */
  year: string
}
export type CenterAppJiaofeiUnpayVO = {
  /**
   * @description 金额
   */
  amount: number
  /**
   * @description 笔数
   */
  count: number
}
export type CenterAppJiaofeiUserVO = {
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 证件号
   */
  userNo: string
}
export type CenterCpBillCheckResultVO = {
  /**
   * @description 差额
   */
  balance: string
  /**
   * @description 差额标志（大于0则账单总金额比实际总金额大，反之则反之）
   */
  balanceFlag: number
  /**
   * @description 平台交易金额
   */
  billAmount: string
  /**
   * @description 平台交易笔数
   */
  billCount: number
  /**
   * @description 对账总单ID
   */
  billId: number
  /**
   * @description 对账类型
   */
  checkBillTypeStr: string
  /**
   * @description 异常账单笔数
   */
  errorBillCount: number
  /**
   * @description 实际交易金额
   */
  realBillAmount: string
  /**
   * @description 实际交易笔数
   */
  realBillCount: number
}
export type CenterCpBillDetailImportVO = {
  /**
   * @description 上传失败条数
   */
  errorCount: number
  /**
   * @description 详细错误信息
   */
  errorMsg: string[]
  /**
   * @description 缓存key
   */
  key: string
  /**
   * @description 错误提示
   */
  message: string
  success: boolean
  /**
   * @description 总条数
   */
  totalCount: number
  /**
   * @description 实际交易金额
   */
  totalMoney: string
}
export type CenterCpBillDetailVO = {
  /**
   * @description 对账结果
   */
  checkResult: string
  /**
   * @description 商户名称
   */
  cpName: string
  /**
   * @description 错误类别，枚举
   */
  errorType: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 学号
   */
  jobNo: string
  /**
   * @description 实际交易金额
   */
  realTranMoney: string
  /**
   * @description 状态，0正常，1异常，2异常已处理
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 官方订单编号
   */
  topTranNo: string
  /**
   * @description 交易金额
   */
  tranMoney: string
  /**
   * @description 交易订单编号
   */
  tranNo: string
  /**
   * @description 学生姓名
   */
  userName: string
}
export type CenterCpBillPayTypeVO = {
  /**
   * @description 支付方式
   */
  id: string
  /**
   * @description 是否支持导入对账（0是1否）
   */
  spImport: number
  /**
   * @description 支付方式名称
   */
  text: string
}
export type CenterCustomConfigVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 类型1 、电费 2、水费 3、常工应用 4、网费 5、生活缴费
   */
  customType: number
  /**
   * @description 类型
   */
  customTypeStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否自定义金额  0、是 1、否
   */
  isCustomAmount: number
  /**
   * @description 是否自定义金额
   */
  isCustomAmountStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterCustomElectricConfigVO = {
  /**
   * @description 楼栋显示名
   */
  buildingShowName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 充值金额起始（元）
   */
  customAmountBegin: number
  /**
   * @description 充值金额结束（元）
   */
  customAmountEnd: number
  /**
   * @description 自定义类型1、电费   2、水费 3、常工应用 4、网费 5、应用缴费
   */
  customType: number
  /**
   * @description 自定义类型1、电费   2、水费 3、常工应用 4、网费 5、应用缴费
   */
  customTypeStr: string
  /**
   * @description 楼层显示名
   */
  floorShowName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否自定义金额 0、是 1、否
   */
  isCustomAmount: number
  /**
   * @description 是否自定义金额
   */
  isCustomAmountStr: string
  /**
   * @description 公告
   */
  notice: string
  /**
   * @description 充值金额10|100|200
   */
  rechargeAmount: string
  /**
   * @description 房间显示名
   */
  roomShowName: string
  /**
   * @description 状态： 0、未启用 2、已启用
   */
  status: number
  /**
   * @description 标题显示名称
   */
  titleShowName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区显示名
   */
  zoneShowName: string
}
export type CenterIndexTotalDataVO = {
  /**
   * @description 平均交易金额
   */
  avgTranMoney: string
  /**
   * @description 日期,yyyy-MM-dd
   */
  day: string
  /**
   * @description 交易总笔数
   */
  totalCount: number
  /**
   * @description  费率总金额
   */
  totalFeeMoney: string
  /**
   * @description 支付总金额
   */
  totalRealMoney: string
  /**
   * @description 红包总金额
   */
  totalRedbagMoney: string
  /**
   * @description 退款笔数
   */
  totalRefundCount: number
  /**
   * @description 退款金额
   */
  totalRefundMoney: string
  /**
   * @description 交易总金额
   */
  totalTranMoney: string
}
export type CenterJiaofeiAddedValueVO = {
  /**
   * @description 编码
   */
  code: string
  /**
   * @description 名称
   */
  name: string
}
export type CenterJiaofeiBatchRefundFormVO = {
  /**
   * @description 批量退款详情
   */
  batchInfo: string
  /**
   * @description 退款名称
   */
  batchName: string
  /**
   * @description 处理状态
   */
  batchStatus: number
  /**
   * @description 处理状态
   */
  batchStatusStr: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 退款总金额
   */
  totalAmount: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiBatchRefundVO = {
  /**
   * @description 批量退款单id
   */
  batchFormId: number
  /**
   * @description 批量退款单名称
   */
  batchFormName: string
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 生成退款单 0否 1是
   */
  billStatus: number
  billStatusName: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @description 创建人名称
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门编码
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份证号
   */
  idCard: string
  /**
   * @description 名单id
   */
  listId: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 项目编号
   */
  projectId: number
  /**
   * @description 缴费项目
   */
  projectName: string
  /**
   * @description 退款金额
   */
  refundAmount: number
  /**
   * @description 退款方式
   */
  refundMethod: string
  /**
   * @description 退款方式
   */
  refundMethodStr: string
  /**
   * @value #datetime()
   * @description 退款时间
   */
  refundTime: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 退款状态0待处理 1退款失败 2退款成功
   */
  status: number
  /**
   * @description 退款状态
   */
  statusName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
}
export type CenterJiaofeiBillCustomVO = {
  /**
   * @description 项目批次
   */
  batchNum: string
  /**
   * @description 票据样式:common、通用样式 xiaolongren、小龙人
   */
  billStyle: string
  /**
   * @description 票据样式
   */
  billStyleName: string
  /**
   * @description 自定义票据编码
   */
  billTemplateCode: string
  /**
   * @description 自定义票据模板id
   */
  billTemplateId: number
  /**
   * @value #datetime()
   * @description 开票时间
   */
  billingDate: string
  /**
   * @value #datetime()
   * @description 缴费时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 金额
   */
  payAmount: number
  /**
   * @description 缴费金额(大写)
   */
  payAmountZW: string
  /**
   * @description 支付方式
   */
  payMethodStr: string
  /**
   * @description 缴费项目名称
   */
  proName: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description 身份证
   */
  userIdCard: string
  /**
   * @description 交款人姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
}
export type CenterJiaofeiBillItemVO = {
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 票据id
   */
  billId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份证号
   */
  idCard: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  orderId: number
  /**
   * @description 金额
   */
  paymentAmount: number
  paymentAmountZn: string
  /**
   * @description 项目id
   */
  proId: string
  proName: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type CenterJiaofeiBillTemplateVO = {
  /**
   * @description 票据内容
   */
  content: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 高度:cm
   */
  height: number
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 比例
   */
  scale: number
  /**
   * @description 状态：0、未启用 1、已启用
   */
  status: number
  statusStr: string
  /**
   * @description 模板名称
   */
  templateName: string
  /**
   * @description 宽度:cm
   */
  width: number
}
export type CenterJiaofeiBillVO = {
  /**
   * @description 会计
   */
  accountant: string
  /**
   * @description 票据编号
   */
  billNo: string
  /**
   * @description 票据样式:common、通用样式 xiaolongren、小龙人
   */
  billStyle: string
  /**
   * @description 票据样式
   */
  billStyleName: string
  /**
   * @description 自定义票据编码
   */
  billTemplateCode: string
  /**
   * @description 自定义票据模板id
   */
  billTemplateId: number
  /**
   * @description 自定义票据模板名称
   */
  billTemplateName: string
  /**
   * @value #datetime()
   * @description 开票时间
   */
  billingDate: string
  /**
   * @description 出纳
   */
  cashier: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份号
   */
  idCard: string
  /**
   * @value 2
   * @description 项目列表
   */
  items: CenterJiaofeiBillItemVO[]
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 金额
   */
  paymentAmount: number
  /**
   * @description 金额中文
   */
  paymentAmountZn: string
  /**
   * @description 交款人
   */
  paymentUnit: string
  /**
   * @description 项目名称
   */
  proName: string
  /**
   * @description 经办人
   */
  receivingPerson: string
  /**
   * @description 收款单位
   */
  receivingUnit: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 班级
   */
  userClass: string
}
export type CenterJiaofeiConfigVO = {
  /**
   * @description 支付商户编码
   */
  cpCode: string
  /**
   * @description 支付商户密钥
   */
  cpKey: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门id
   */
  deptId: number
  deptName: string
  /**
   * @description 收费项目id
   */
  feeItemId: string
  /**
   * @description 查找项值
   */
  findKey: string
  /**
   * @description 缴费配置ID
   */
  id: number
  /**
   * @description 是否合并缴费
   */
  isMergePay: number
  /**
   * @description 易达 多accid 0否 1是
   */
  isMultiAccid: number
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 缴费类型
   */
  paymentType: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 商户编码
   */
  thirdCode: string
  /**
   * @description ID
   */
  thirdId: string
  /**
   * @description 密钥
   */
  thirdKey: string
  /**
   * @description 商户名称
   */
  thirdName: string
  /**
   * @description 端口
   */
  thirdPort: string
  /**
   * @description 密码
   */
  thirdPwd: string
  /**
   * @description 接口地址
   */
  thirdUrl: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiDeptLinkProjectVO = {
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 有权限
   */
  hasRight: boolean
  /**
   * @description 部门id
   */
  id: number
  /**
   * @value 2
   * @description 项目集合
   */
  projectList: CenterJiaofeiLinkProjectVO[]
}
export type CenterJiaofeiDeptVO = {
  /**
   * @description 商户编号
   */
  cpCode: string
  /**
   * @description 商户密钥
   */
  cpKey: string
  /**
   * @description 商户名称
   */
  cpName: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门负责人姓名
   */
  deptHeads: string
  /**
   * @description 部门负责人手机号
   */
  deptHeadsTel: string
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 部门名称英文
   */
  deptNameEn: string
  /**
   * @description 部门ID
   */
  id: number
  /**
   * @description 模式：1、迎新
   */
  mode: number
  /**
   * @description 模式
   */
  modeStr: string
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 部门状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiDictionarySonVO = {
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 英文名称
   */
  dicNameEn: string
  /**
   * @description id
   */
  id: number
}
export type CenterJiaofeiDictionaryVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 副选项数量
   */
  dicCount: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 二级分类英文名称
   */
  dicNameEn: string
  /**
   * @description 二级分类ID
   */
  id: number
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  /**
   * @description 二级分类父ID
   */
  parentId: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value 2
   */
  sonDictionaryDo: CenterJiaofeiDictionarySonVO[]
  /**
   * @description 二级分类状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiInvoiceCodeVO = {
  /**
   * @description 增值税特殊管理
   */
  addedValueTax: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 含税标识 0不含税 1含税
   */
  hasTax: number
  /**
   * @description 含税标识
   */
  hasTaxName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 开票信息id
   */
  invoiceInfoId: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 优惠政策 0不使用 1使用
   */
  policyFlag: number
  /**
   * @description 优惠政策
   */
  policyFlagName: string
  /**
   * @description 项目编号
   */
  proId: string
  /**
   * @description 商品名称
   */
  proName: string
  /**
   * @description 项目来源
   */
  proSource: string
  /**
   * @description 项目来源
   */
  proSourceName: string
  /**
   * @description 商品税务编码
   */
  proTaxCode: string
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 税率
   */
  taxRate: number
  /**
   * @description 开票类别编码
   */
  taxTypeCode: string
  /**
   * @description 开票类别名称
   */
  taxTypeName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiInvoiceConfigVO = {
  /**
   * @description appid
   */
  appId: string
  /**
   * @description 秘钥
   */
  appKey: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 开票期间（天）
   */
  invoiceDay: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 开票系统 0航天 1百旺 3 博思
   */
  thirdType: number
  /**
   * @description 开票系统名称
   */
  thirdTypeName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 请求地址
   */
  url: string
}
export type CenterJiaofeiInvoiceInfoDO = {
  /**
   * @description 地址
   */
  address: string
  /**
   * @description 开户行
   */
  bank: string
  /**
   * @description 银行账号
   */
  bankAccount: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 删除标识 0正常 1删除
   */
  deleteFlag: number
  /**
   * @description 开票人
   */
  drawer: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 开票限额
   */
  invoiceLimit: number
  /**
   * @description 收款人
   */
  payee: string
  /**
   * @description 电话
   */
  phone: string
  /**
   * @description 复核人
   */
  reviewer: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 纳税人识别号
   */
  taxpayerId: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiInvoiceInfoVO = {
  /**
   * @description 地址
   */
  address: string
  /**
   * @description 开户行
   */
  bank: string
  /**
   * @description 银行账号
   */
  bankAccount: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 开票人
   */
  drawer: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 开票限额
   */
  invoiceLimit: number
  /**
   * @description 开票限额
   */
  invoiceLimitName: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 收款人
   */
  payee: string
  /**
   * @description 电话
   */
  phone: string
  /**
   * @description 复核人
   */
  reviewer: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 纳税人识别号
   */
  taxpayerId: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiInvoiceItemVO = {
  /**
   * @description 增值税特殊管理
   */
  addedValueTax: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 扣除额
   */
  deduction: string
  /**
   * @description 含税标志
   */
  hasTax: number
  /**
   * @description 含税标志
   */
  hasTaxName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 发票id
   */
  invoiceId: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description  订单id
   */
  orderId: number
  /**
   * @description 优惠政策标识
   */
  policyFlag: number
  /**
   * @description 优惠政策标识
   */
  policyFlagName: string
  /**
   * @description 商品金额
   */
  proAmount: number
  /**
   * @description 商品价税金额
   */
  proAmountTax: number
  /**
   * @description 商品编码
   */
  proCode: string
  /**
   * @description 商品折扣行编号
   */
  proDiscountCode: string
  /**
   * @description 商品名称
   */
  proName: string
  /**
   * @description 商品行性质
   */
  proNature: string
  /**
   * @description 商品行性质
   */
  proNatureName: string
  /**
   * @description 商品数量
   */
  proNum: number
  /**
   * @description 商品单价
   */
  proPrice: number
  /**
   * @description 商品税率
   */
  proRate: number
  /**
   * @description 商品简码
   */
  proSimpleCode: string
  /**
   * @description 商品规格型号
   */
  proSpecification: string
  /**
   * @description 商品税额
   */
  proTax: number
  /**
   * @description 商品计量单位
   */
  proUnit: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 零税率标识
   */
  zeroRateFlag: number
}
export type CenterJiaofeiInvoiceOrderVO = {
  /**
   * @description 购买方
   */
  buyer: string
  /**
   * @description 购买方地址
   */
  buyerAddress: string
  /**
   * @description 购买方开户行
   */
  buyerBank: string
  /**
   * @description 购买方银行账号
   */
  buyerBankAccount: string
  /**
   * @description 购买方识别号
   */
  buyerDuty: string
  /**
   * @description 购买方电话
   */
  buyerPhone: string
  /**
   * @description 购买方类型
   */
  buyerType: number
  /**
   * @description 购买方类型
   */
  buyerTypeName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 开票人
   */
  drawer: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 校验码
   */
  invoiceCheckCode: string
  /**
   * @description 发票代码
   */
  invoiceCode: string
  /**
   * @description 发票类型
   */
  invoiceFlag: number
  /**
   * @description 发票类型
   */
  invoiceFlagName: string
  /**
   * @description 发票号码
   */
  invoiceNo: string
  /**
   * @description 发票密文
   */
  invoiceSign: string
  /**
   * @value #datetime()
   * @description 签章日期
   */
  invoiceSignTime: string
  /**
   * @value #datetime()
   * @description 开票时间
   */
  invoiceTime: string
  /**
   * @description 下载地址
   */
  invoiceUrl: string
  /**
   * @description 发票过期 0否 1是
   */
  isOverTime: number
  /**
   * @description 明细数量
   */
  itemCount: number
  /**
   * @value 2
   * @description 明细
   */
  itemList: CenterJiaofeiInvoiceItemVO[]
  /**
   * @description 明细名称
   */
  itemName: string
  /**
   * @description 机器编码
   */
  machineCode: string
  /**
   * @description openid
   */
  openId: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 收款人
   */
  payee: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 复核人
   */
  reviewer: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 销售方
   */
  seller: string
  /**
   * @description 销售人地址
   */
  sellerAddress: string
  /**
   * @description 销售方开户行
   */
  sellerBank: string
  /**
   * @description 销售方银行账号
   */
  sellerBankAccount: string
  /**
   * @description 纳税人识别号
   */
  sellerDuty: string
  /**
   * @description 销售方电话
   */
  sellerPhone: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 开票系统
   */
  thirdType: number
  /**
   * @description 开票系统
   */
  thirdTypeName: string
  /**
   * @description 总金额
   */
  totalAmount: number
  /**
   * @description 价税合计
   */
  totalAmountTax: number
  /**
   * @description 价税合计中文
   */
  totalAmountTaxZn: string
  /**
   * @description 总税额
   */
  totalTax: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 用户id
   */
  userId: number
}
export type CenterJiaofeiInvoiceSourceVO = {
  /**
   * @description 编码
   */
  code: string
  /**
   * @description 名称
   */
  name: string
}
export type CenterJiaofeiInvoiceTotalVO = {
  /**
   * @description 总金额
   */
  totalAmount: number
  /**
   * @description 总税额
   */
  totalTax: number
}
export type CenterJiaofeiInvoiceTypeVO = {
  /**
   * @description 地址
   */
  address: string
  /**
   * @description 开户行
   */
  bank: string
  /**
   * @description 银行账号
   */
  bankAccount: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 税号
   */
  dutyNum: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 发票类型
   */
  invoiceFlag: number
  /**
   * @description 发票类型
   */
  invoiceFlagName: string
  /**
   * @description 是否默认
   */
  isDefault: number
  /**
   * @description 是否默认
   */
  isDefaultName: string
  /**
   * @description openid
   */
  openId: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 电话
   */
  phone: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 发票抬头
   */
  userName: string
  /**
   * @description 抬头类型
   */
  userType: number
  /**
   * @description 抬头类型
   */
  userTypeName: string
}
export type CenterJiaofeiLinkProjectVO = {
  /**
   * @description 有权限
   */
  hasRight: boolean
  /**
   * @description 缴费项目ID
   */
  id: number
  /**
   * @description 项目名称
   */
  projectName: string
}
export type CenterJiaofeiListCountVO = {
  /**
   * @description 已支付
   */
  payed: number
  /**
   * @description 支付中
   */
  paying: number
  /**
   * @description 总数
   */
  total: number
  /**
   * @description 未支付
   */
  unPay: number
}
export type CenterJiaofeiListReductionVO = {
  /**
   * @description 数量
   */
  count: number
  /**
   * @description 金额
   */
  payAmount: number
  /**
   * @description 优惠类型 0无优惠 1减免 2助学贷款
   */
  reductionType: number
}
export type CenterJiaofeiListVO = {
  /**
   * @description 未缴金额
   */
  arrearageAmount: number
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 是否删除 0否 1是
   */
  deleteFlag: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 学历
   */
  education: string
  /**
   * @description 缴费名单ID
   */
  id: number
  /**
   * @description 身份证
   */
  idCard: string
  /**
   * @description 导入状态0异常 1正常 2重复
   */
  importStatus: number
  listSource: number
  /**
   * @description 贷款金额
   */
  loanAmount: number
  /**
   * @description 邮箱
   */
  mail: string
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 权限操作
   */
  operation: string
  /**
   * @description 原金额
   */
  originalAmount: number
  /**
   * @description 已缴金额
   */
  paidAmount: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 支付方式
   */
  payMethodStr: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 项目编码
   */
  projectId: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 减免金额
   */
  reductionAmount: number
  /**
   * @description 优惠类型 0无优惠 1减免 2助学贷款
   */
  reductionType: number
  /**
   * @description 优惠类型
   */
  reductionTypeStr: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别
   */
  sex: string
  /**
   * @description 状态0未缴纳 2缴纳中 1已缴纳
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  studentId: number
  /**
   * @description 学制
   */
  studyCount: number
  /**
   * @description 入学年份
   */
  studyYear: string
  /**
   * @description 学期
   */
  term: number
  /**
   * @description 学期
   */
  termStr: string
  /**
   * @description 证件号码
   */
  uniqueId: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description 基础权限-班级ID
   */
  userClassId: string
  /**
   * @description 年级
   */
  userGrade: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
  /**
   * @description 院系
   */
  userXi: string
  /**
   * @description 专业
   */
  userZhuan: string
  zoneName: string
}
export type CenterJiaofeiOrderVO = {
  /**
   * @description 账户id
   */
  accId: string
  apiId: number
  /**
   * @description 未交金额
   */
  arrearageAmount: number
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 票据编号
   */
  billNo: string
  /**
   * @description 创建人名称
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门ID
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 二级分类ID
   */
  dicId: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 二级分类副选项ID
   */
  dicSonId: number
  /**
   * @description 二级分类副选项名称
   */
  dicSonName: string
  /**
   * @description 二级分类副选项英文名称
   */
  dicSonNameEn: string
  /**
   * @description 缴费期间编码
   */
  durationCode: string
  /**
   * @description 缴费期间名称
   */
  durationName: string
  /**
   * @value #datetime()
   * @description 支付结束时间
   */
  endTime: string
  /**
   * @description 支付订单号
   */
  foreighCode: string
  /**
   * @description 开票信息id
   */
  invoiceInfoId: number
  /**
   * @description 开票信息名称
   */
  invoiceInfoName: string
  /**
   * @description 开票限额
   */
  invoiceLimitAmount: number
  /**
   * @description 是否开票 0开票中 1开票成功 2开票失败
   */
  invoiceStatus: number
  isMergePay: number
  /**
   * @description 是否消息通知 0否1是
   */
  isMessageNotify: number
  /**
   * @description 是否可多次提交 0否 1是
   */
  isMorePay: number
  /**
   * @description 是否回调 0否 1是
   */
  isNoticed: number
  /**
   * @description 是否退款 0否 1是
   */
  isRefund: number
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 缴费方式0自定义 1导入 2接口
   */
  jiaofeiMethod: number
  /**
   * @description 缴费名单id
   */
  listId: number
  /**
   * @description 名单来源：0excel导入 1迎新系统 2外部系统
   */
  listSource: number
  /**
   * @description 贷款金额
   */
  loanAmount: number
  /**
   * @value #datetime()
   * @description 回调时间
   */
  noticeTime: string
  /**
   * @description openId
   */
  openId: string
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  /**
   * @description 订单号
   */
  orderId: number
  /**
   * @description 支付状态  0等待支付、2支付成功、3支付失败、-1订单关闭
   */
  orderStatus: number
  /**
   * @description 支付状态
   */
  orderStatusStr: string
  /**
   * @description 原金额
   */
  originalAmount: number
  /**
   * @description 父级订单号
   */
  parentOrder: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 支付方式
   */
  payMethodStr: string
  /**
   * @description 缴费项目ID
   */
  proId: string
  /**
   * @description 缴费项目名称
   */
  proName: string
  /**
   * @description 缴费项目图标
   */
  projectIcon: string
  /**
   * @description 项目英文名称
   */
  projectNameEn: string
  /**
   * @description 应收金额
   */
  receivableAmount: number
  /**
   * @description 减免金额
   */
  reductionAmount: number
  /**
   * @description 优惠类型 0无优惠 1减免 2助学贷款 3减免+贷款
   */
  reductionType: number
  /**
   * @description 优惠类型
   */
  reductionTypeStr: string
  /**
   * @description 退款金额
   */
  refundAmount: number
  /**
   * @description 退款
   */
  refundFlag: string
  /**
   * @description 退款英文
   */
  refundFlagEn: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 来源 WX公众号 APP
   */
  source: string
  /**
   * @description 第三方订单编号
   */
  thirdOrderCode: string
  thirdPayNo: string
  thirdPayable: string
  thirdPreorder: string
  /**
   * @description 第三方待缴订单编号
   */
  thirdSeqNo: string
  /**
   * @description 0:未充值、1:充值中、2:充值成功、3:充值失败、4:充值关闭
   */
  thirdTradeStatus: number
  /**
   * @description 三方0贵阳易达恒志 1兰大
   */
  thirdType: number
  /**
   * @description 年
   */
  thirdYear: string
  /**
   * @description 分类ID
   */
  typeId: number
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 支付金额
   */
  unifiedPayAmount: number
  /**
   * @description 红包金额
   */
  unifiedRedbagAmount: number
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description app.user_id
   */
  userId: string
  /**
   * @description 身份证号
   */
  userIdCard: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
}
export type CenterJiaofeiOrderVO_1 = {
  apiId: number
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 部门ID
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 缴费期间编码
   */
  durationCode: string
  /**
   * @description 缴费期间名称
   */
  durationName: string
  /**
   * @description 缴费方式0自定义 1导入 2接口
   */
  jiaofeiMethod: number
  /**
   * @description 贷款金额
   */
  loanAmount: number
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  paidNum: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @value #datetime()
   * @description 项目创建时间
   */
  proCreateTime: string
  /**
   * @description 缴费项目ID
   */
  proId: string
  /**
   * @description 缴费项目名称
   */
  proName: string
  /**
   * @description 减免金额
   */
  reductionAmount: number
  /**
   * @description 退款金额
   */
  refundAmount: number
  /**
   * @description 退款数量
   */
  refundCount: number
  /**
   * @description 缴费金额
   */
  reportAmountCount: number
  /**
   * @description 缴费笔数
   */
  reportCount: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 三方厂家
   */
  thirdType: number
  totalNum: number
  unpaidNum: number
}
export type CenterJiaofeiPaymentVO = {
  /**
   * @description 缴费名单ID
   */
  id: number
  /**
   * @description 已缴金额
   */
  paidAmount: number
  /**
   * @description 应缴金额
   */
  payAmount: number
  /**
   * @description 缴费时间
   */
  payTime: string
  /**
   * @description 项目id
   */
  projectId: number
  /**
   * @description 项目名称
   */
  projectName: string
}
export type CenterJiaofeiPermissionsVO = {
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 手机号
   */
  phone: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 姓名
   */
  userName: string
}
export type CenterJiaofeiProBatchVO = {
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 删除标识 0正常 1删除
   */
  deleteFlag: number
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 项目id
   */
  projectId: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiProDicVO = {
  /**
   * @description 二级分类Id
   */
  dicId: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 二级分类英文名称
   */
  dicNameEn: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 项目Id
   */
  proId: number
  /**
   * @description 项目名称
   */
  proName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type CenterJiaofeiProjectTypeVO = {
  /**
   * @value 2
   * @description 缴费项目信息
   */
  centerJiaofeiProjectVo: CenterSchoolJiaofeiProjectVO[]
  /**
   * @description 分类ID
   */
  typeId: number
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 分类英文名称
   */
  typeNameEn: string
}
export type CenterJiaofeiProjectVO = {
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @value #datetime()
   * @description 缴费开始时间
   */
  beginDate: string
  /**
   * @description 审核备注
   */
  checkRemark: string
  /**
   * @description 审批状态
   */
  checkStatus: number
  /**
   * @description 审批状态
   */
  checkStatusStr: string
  /**
   * @value #datetime()
   * @description 审核时间
   */
  checkTime: string
  /**
   * @description 审核人id
   */
  checkUserId: number
  /**
   * @description 审核人
   */
  checkUserName: string
  /**
   * @description 点击数
   */
  clickCount: number
  /**
   * @description 关闭原因
   */
  closeTips: string
  /**
   * @description 创建人
   */
  createId: number
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 是否删除 0未删除 1删除
   */
  deleteFlag: number
  /**
   * @description 部门ID
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 二级分类ID
   */
  dicId: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @value #datetime()
   * @description 缴费结束时间
   */
  endDate: string
  /**
   * @description 顶部图片跳转链接
   */
  headPicLink: string
  /**
   * @description 顶部图片
   */
  headPicUrl: string
  /**
   * @description 图标链接
   */
  iconLink: string
  /**
   * @description 缴费项目ID
   */
  id: number
  /**
   * @description 是否可多次提交 0否 1是
   */
  isMorePay: number
  /**
   * @description 是否需要班级 0否 1是
   */
  isNeedClass: number
  /**
   * @description 是否需要身份证号 0否 1是
   */
  isNeedIdcard: number
  /**
   * @description 是否需要姓名 0否 1是
   */
  isNeedName: number
  /**
   * @description 是否需要手机号 0否 1是
   */
  isNeedPhone: number
  /**
   * @description 是否需要协议 0否 1是
   */
  isNeedProtocol: number
  /**
   * @description 备注是否必填 0否 1是
   */
  isNeedRemark: number
  /**
   * @description 是否需要学号 0否 1是
   */
  isNeedUserno: number
  isNoPay: number
  /**
   * @description 是否允许充值
   */
  isOpen: number
  /**
   * @description 是否过期 0否 1是
   */
  isOverTime: number
  /**
   * @description 是否推荐 0否 1是
   */
  isRecommend: number
  /**
   * @description 是否显示 0否 1是
   */
  isShow: number
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 缴费方式0自定义式 1导入式
   */
  jiaofeiMethod: number
  listSource: number
  /**
   * @description 最大金额
   */
  maxAmount: number
  /**
   * @description 最小金额
   */
  minAmount: number
  /**
   * @description 公告
   */
  notice: string
  /**
   * @description 通知 0不通知 1短信 2信息
   */
  noticeBack: number
  /**
   * @description 英文公告
   */
  noticeEn: string
  /**
   * @value #datetime()
   * @description 当前时间
   */
  nowDate: string
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  /**
   * @description 外部链接
   */
  outLink: string
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 排序
   */
  proSort: number
  /**
   * @description 缴费项目图标
   */
  projectIcon: string
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 项目英文名称
   */
  projectNameEn: string
  /**
   * @description 协议内容
   */
  protocolContent: string
  /**
   * @description 协议标题
   */
  protocolTitle: string
  /**
   * @description 协议标题
   */
  protocolTitleEn: string
  /**
   * @description 推荐排序
   */
  recommendSort: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 备注提示语
   */
  remarkMsg: string
  /**
   * @description 备注提示语
   */
  remarkMsgEn: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 项目状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 温馨提示
   */
  tips: string
  /**
   * @description 英文温馨提示
   */
  tipsEn: string
  /**
   * @description 分类ID
   */
  typeId: number
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiRefundVO = {
  /**
   * @description 批量退款id
   */
  batchRefundId: number
  /**
   * @description 审核人
   */
  checkId: number
  /**
   * @description 审核人
   */
  checkName: string
  /**
   * @description 审核备注
   */
  checkRemark: string
  /**
   * @value #datetime()
   * @description 审核时间
   */
  checkTime: string
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门id
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 退款id
   */
  id: number
  operates: string[]
  operation: string
  /**
   * @description 订单id
   */
  orderId: number
  /**
   * @value 2
   * @description 相关缴费订单
   */
  orderList: CenterJiaofeiOrderVO[]
  /**
   * @description 支付金额
   */
  payAmount: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 支付方式
   */
  payMethodStr: string
  /**
   * @description 支付订单
   */
  payNo: number
  /**
   * @description 支付退款订单
   */
  payRefundNo: number
  /**
   * @description 支付退款备注
   */
  payRefundRemark: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 退款金额
   */
  refundAmount: number
  /**
   * @description 退款原因
   */
  refundRemark: string
  /**
   * @description 退款状态
   */
  refundStatus: number
  /**
   * @description 退款状态
   */
  refundStatusStr: string
  /**
   * @value #datetime()
   * @description 退款时间
   */
  refundTime: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 修改人
   */
  updateId: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 身份证号
   */
  userIdCard: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
}
export type CenterJiaofeiReportExportVO = {
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 批次跨列
   */
  batchNumRowspan: number
  deptName: string
  deptNameRowspan: number
  jiaofeiMethod: string
  jiaofeiMethodNum: number
  /**
   * @description 贷款金额
   */
  loanAmount: number
  paidNum: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 支付方式
   */
  payMethodStr: string
  proCreateTime: string
  proId: string
  proName: string
  proNameRowspan: number
  /**
   * @description 减免金额
   */
  reductionAmount: number
  refundAmountCount: string
  refundCount: string
  reportAmountCount: string
  reportCount: string
  schoolName: string
  totalNum: number
  unpaidNum: number
}
export type CenterJiaofeiSchoolConfigVO = {
  /**
   * @description 缴费配置ID
   */
  id: number
  /**
   * @description 状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 商户名称
   */
  thirdName: string
}
export type CenterJiaofeiSchoolShowConfigVO = {
  /**
   * @value 2
   * @description 接口配置
   */
  configList: CenterJiaofeiSchoolConfigVO[]
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份号显示名
   */
  idCard: string
  /**
   * @description 英文身份号显示名
   */
  idCardEn: string
  /**
   * @description 身份输入框英文显示
   */
  idCardEnRemark: string
  /**
   * @description 身份输入框显示
   */
  idCardRemark: string
  /**
   * @description 是否代人缴费 0否 1是
   */
  isAgentPay: number
  /**
   * @description 是否通知提醒 0否 1是
   */
  isNotice: number
  /**
   * @description 项目是否需要审批 0否 1是
   */
  isProCheck: number
  /**
   * @description 通知人
   */
  notifyList: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  /**
   * @description 温馨提示
   */
  tips: string
  /**
   * @description 英文温馨提示
   */
  tipsEn: string
  /**
   * @description 标题显示名
   */
  titleName: string
  /**
   * @description 标题英文显示名
   */
  titleNameEn: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 英文姓名
   */
  userNameEn: string
  /**
   * @description web图标
   */
  webIcon: string
}
export type CenterJiaofeiShowConfigVO = {
  /**
   * @description 是否校验一卡通信息 0否 1是
   */
  checkCardInfo: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份号显示名
   */
  idCard: string
  /**
   * @description 英文身份号显示名
   */
  idCardEn: string
  /**
   * @description 身份输入框英文显示
   */
  idCardEnRemark: string
  /**
   * @description 身份输入框显示
   */
  idCardRemark: string
  /**
   * @description 证件号类型
   */
  idCardType: number
  /**
   * @description 证件号值
   */
  idCardValue: string
  /**
   * @description 身份证号
   */
  idNumber: string
  /**
   * @description 开票期间（天）
   */
  invoiceDay: number
  /**
   * @description 是否代人缴费
   */
  isAgentPay: number
  /**
   * @description 是否代人缴费
   */
  isAgentPayStr: string
  /**
   * @description 是否根据绑卡信息自动查询 0否 1是
   */
  isAutoSearch: number
  /**
   * @description 是否自定义发票抬头 0否 1是
   */
  isCustomInvoiceType: number
  /**
   * @description 是否开启发票功能
   */
  isInvoice: number
  /**
   * @description 是否开启发票功能
   */
  isInvoiceName: string
  /**
   * @description 是否通知提醒
   */
  isNotice: number
  /**
   * @description 项目是否需要审批
   */
  isProCheck: number
  /**
   * @description 是否同步建行 0否 1是
   */
  isSyncCcb: number
  operates: string[]
  operation: string
  /**
   * @description 父级学校编码
   */
  parentSchoolCode: string
  /**
   * @description 父级学校名称
   */
  parentSchoolName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  /**
   * @description 温馨提示
   */
  tips: string
  /**
   * @description 英文温馨提示
   */
  tipsEn: string
  /**
   * @description 标题显示名
   */
  titleName: string
  /**
   * @description 标题英文显示名
   */
  titleNameEn: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 英文姓名
   */
  userNameEn: string
  /**
   * @description 姓名值
   */
  userNameValue: string
  /**
   * @description web图标
   */
  webIcon: string
}
export type CenterJiaofeiTypeVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 分类ID
   */
  id: number
  /**
   * @description 是否显示 0否 1是
   */
  isShow: number
  /**
   * @description 模式：1、迎新
   */
  mode: number
  /**
   * @description 分类备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分类状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 分类英文名称
   */
  typeNameEn: string
  /**
   * @description 分类排序
   */
  typeSort: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterJiaofeiTypeVO_1 = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 分类ID
   */
  id: number
  isShow: number
  isShowStr: string
  /**
   * @description 模式：1、迎新
   */
  mode: number
  /**
   * @description 模式：迎新
   */
  modeStr: string
  /**
   * @description 操作权限
   */
  operates: string[]
  /**
   * @description 操作权限
   */
  operation: string
  /**
   * @description 分类备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分类状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 分类英文名称
   */
  typeNameEn: string
  /**
   * @description 分类排序
   */
  typeSort: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterNetOperatorVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 支付商户编码
   */
  payCpCode: string
  /**
   * @description 支付商户密钥
   */
  payCpSecret: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区id
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type CenterNetPackageVO = {
  /**
   * @value #datetime()
   * @description 添加时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 运营商id
   */
  operatorId: number
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 套餐id
   */
  packageId: string
  /**
   * @description 套餐名称
   */
  packageName: string
  /**
   * @description 套餐金额  金额为0 表示可以自己输入
   */
  payAmount: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 1、启用 0、禁用
   */
  status: number
  /**
   * @description 状态 1、启用 0、禁用
   */
  statusStr: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type CenterNetZoneVO = {
  /**
   * @description 校区id
   */
  id: number
  /**
   * @description 网费协议 0深澜 1城市热点
   */
  protocol: number
  /**
   * @description 厂商协议
   */
  protocolStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type CenterOrderNetVO = {
  /**
   * @description 充值账号
   */
  account: string
  /**
   * @description 套餐配置id
   */
  centerPackageId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 费率金额
   */
  feeMoney: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 运营商id
   */
  operatorId: number
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 外部充值状态
   */
  outTradeStatus: number
  /**
   * @description 外部充值状态
   */
  outTradeStatusStr: string
  /**
   * @description 套餐名称
   */
  packageName: string
  /**
   * @description 支付金额
   */
  payMoney: number
  /**
   * @description 支付单号
   */
  payNo: string
  /**
   * @description 支付状态
   */
  payStatus: number
  /**
   * @description 支付状态
   */
  payStatusStr: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  payType: string
  /**
   * @description 支付方式
   */
  payTypeStr: string
  rechargeInfo: string
  /**
   * @description 红包金额
   */
  redbagMoney: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  source: string
  /**
   * @description 平台
   */
  sourceStr: string
  /**
   * @description 订单状态 0处理中 1已完成
   */
  status: number
  /**
   * @description 订单状态 0处理中 1已完成
   */
  statusStr: string
  /**
   * @description 到账金额
   */
  totalMoney: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 校区编码
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type CenterOrderSpecialVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 费率金额
   */
  feeMoney: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 外部充值状态
   */
  outTradeStatus: number
  /**
   * @description 外部充值状态
   */
  outTradeStatusStr: string
  /**
   * @description 支付金额
   */
  payMoney: string
  /**
   * @description 支付订单号
   */
  payNo: string
  /**
   * @description 支付状态
   */
  payStatus: number
  /**
   * @description 支付状态
   */
  payStatusStr: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 支付方式
   */
  payType: string
  /**
   * @description 支付方式
   */
  payTypeStr: string
  platform: string
  /**
   * @description 平台
   */
  platformStr: string
  /**
   * @description 商品名
   */
  prodName: string
  protocol: number
  protocolStr: string
  /**
   * @description 充值账号/卡号
   */
  rechargeAccount: string
  /**
   * @description 充值名称
   */
  rechargeName: string
  /**
   * @description 红包金额
   */
  redbagMoney: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 订单状态 0处理中 1已完成
   */
  status: number
  /**
   * @description 订单状态 0处理中 1已完成
   */
  statusStr: string
  /**
   * @description 到账金额
   */
  totalMoney: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 姓名
   */
  userName: string
}
export type CenterOrderStatsVO = {
  /**
   * @description 交易笔数
   */
  count: string
  /**
   * @description 主商户名称
   */
  cpMainName: string
  /**
   * @description 商户名称
   */
  cpName: string
  /**
   * @description 支付渠道
   */
  payTypeName: string
  /**
   * @description 退款总笔数
   */
  refundCount: number
  /**
   * @description 退款总金额
   */
  refundMoney: string
  /**
   * @description 交易金额
   */
  tranMoney: string
}
export type CenterPincardConfigVO = {
  /**
   * @value #datetime()
   * @description 受理时间
   */
  acceptTimeEnd: string
  /**
   * @value #datetime()
   * @description 受理时间
   */
  acceptTimeStart: string
  id: number
  isProtocol: number
  needBindCard: number
  /**
   * @description 温馨提示
   */
  notice: string
  /**
   * @description 易通webapi 一卡通webapi 一卡通35
   */
  pincardVersion: string
  /**
   * @description 销卡等待天数
   */
  pincardWaitingDay: number
  /**
   * @description 公告
   */
  prompt: string
  protocolContent: string
  protocolTitle: string
  /**
   * @description 可办理的学生范围 0000格式(每位01) 毕业生办理  是 0 否 1
   */
  studentRange: string
  /**
   * @description 转账(退款)款项json  押金,卡费,存款手续费,搭伙费
   */
  transferSelect: string
  /**
   * @description 转账(退款)方式  0:人工转账 1:自动批量转账
   */
  transferWay: number
}
export type CenterPincardSubsidyVO = {
  /**
   * @description 打款人数
   */
  subsidyCount: number
  /**
   * @description 打款金额
   */
  subsidyMoney: number
  subsidyMoneyStr: string
  /**
   * @description 项目名称
   */
  subsidyName: string
}
export type CenterPincardVO = {
  /**
   * @description 受理人姓名
   */
  acceptName: string
  /**
   * @description 受理人手机号
   */
  acceptPhone: string
  /**
   * @description 转账(退款)账户用户名
   */
  accountName: string
  /**
   * @description 申请失败原因
   */
  applyforFailedReason: string
  /**
   * @description 卡库余额
   */
  cardMoney: string
  /**
   * @description 班级id
   */
  classId: number
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 确认状态
   */
  confirmStatus: number
  confirmStatusName: string
  /**
   * @description 受理人姓名
   */
  createName: string
  /**
   * @description 受理人手机号
   */
  createPhone: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门名称
   */
  department: string
  /**
   * @description 部门id
   */
  departmentId: number
  id: number
  /**
   * @description 身份证
   */
  identityId: string
  /**
   * @description 收款用户身份证号码
   */
  incomeIdentityId: string
  /**
   * @description 收款用户姓名
   */
  incomeUserName: string
  /**
   * @description 打款项目ID
   */
  itemId: number
  /**
   * @description 打款项目名称
   */
  itemName: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 支付渠道编码
   */
  payCode: string
  payCodeName: string
  /**
   * @description 支付渠道分类：1-资金代发，2-直接打款
   */
  payType: number
  payTypeName: string
  /**
   * @description 销户状态  0:待销户 1:已销户 2:销户失败
   */
  pincardStatus: number
  pincardStatusStr: string
  /**
   * @value #datetime()
   * @description 销户申请时间(预撤户)
   */
  preRecallTime: string
  /**
   * @description 拒绝或同意原因
   */
  reason: string
  /**
   * @value #datetime()
   * @description 真实撤户时间
   */
  recallTime: string
  /**
   * @description 申请备注
   */
  remark: string
  /**
   * @description 专业名称
   */
  specialities: string
  /**
   * @description 专业id
   */
  specialitiesId: number
  /**
   * @description 转账(退款)账号
   */
  transferAccount: string
  /**
   * @description 申请转账(退款)原因
   */
  transferApplyfor: string
  transferApplyforStr: string
  /**
   * @description 转账(退款)渠道
   */
  transferChannelStr: string
  /**
   * @description 可退金额
   */
  transferMoney: string
  /**
   * @description 转账(退款)状态 0:待打款 1:已打款 2:打款失败
   */
  transferStatus: number
  transferStatusStr: string
  /**
   * @value #datetime()
   * @description 受理转账(退款)时间
   */
  transferTime: string
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @description 修改人手机号
   */
  updatePhone: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 一卡通账号
   */
  userIdcard: string
  /**
   * @description 学生姓名
   */
  userName: string
}
export type CenterSchoolAreaVO = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 绑定房间数量
   */
  bindRoomNum: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 校区id
   */
  id: number
  /**
   * @description 是否充值后绑定 0、是 1、否
   */
  isBindAfterRecharge: number
  /**
   * @description 是否正常使用过 0、是 1、否
   */
  isUsed: number
  /**
   * @description 最低充值金额(元)
   */
  minAmount: number
  /**
   * @description 电费价格（元/度）
   */
  price: number
  /**
   * @description 厂商编号
   */
  protocol: number
  /**
   * @description 厂商名称
   */
  protocolStr: string
  /**
   * @description 温馨提示
   */
  remind: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 排序
   */
  sort: number
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态名
   */
  statusStr: string
  /**
   * @description 类型：1、电费 2、水费 3、常工应用
   */
  type: number
  /**
   * @description 类型名
   */
  typeStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 版本：1、version-1 2、version-2
   */
  version: number
  /**
   * @description 版本名
   */
  versionStr: string
}
export type CenterSchoolBuildingVO = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区ID
   */
  areaId: number
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 楼栋id
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 类型：1、电费 2、水费 3、常工应用
   */
  type: number
  /**
   * @description 类型名
   */
  typeStr: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  updateTime: string
}
export type CenterSchoolFloorVO = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区id
   */
  areaId: number
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 楼层id
   */
  id: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 类型：1、电费 2、水费 3、常工应用
   */
  type: number
  /**
   * @description 类型名
   */
  typeStr: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  updateTime: string
}
export type CenterSchoolJiaofeiConfigVO = {
  /**
   * @description 支付商户编码
   */
  cpCode: string
  /**
   * @description 支付商户密钥
   */
  cpKey: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 缴费配置ID
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 商户编码
   */
  thirdCode: string
  /**
   * @description ID
   */
  thirdId: string
  /**
   * @description 密钥
   */
  thirdKey: string
  /**
   * @description 商户名称
   */
  thirdName: string
  /**
   * @description 端口
   */
  thirdPort: string
  /**
   * @description 密码
   */
  thirdPwd: string
  /**
   * @description 接口地址
   */
  thirdUrl: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterSchoolJiaofeiDeptVO = {
  /**
   * @description 商户编号
   */
  cpCode: string
  /**
   * @description 商户密钥
   */
  cpKey: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门负责人姓名
   */
  deptHeads: string
  /**
   * @description 部门负责人手机号
   */
  deptHeadsTel: string
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 部门ID
   */
  id: number
  /**
   * @description 模式：1、迎新
   */
  mode: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 部门状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterSchoolJiaofeiDictionarySonVO = {
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 二级分类英文名称
   */
  dicNameEn: string
  /**
   * @description 二级分类ID
   */
  id: number
}
export type CenterSchoolJiaofeiDictionaryVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 副选项数量
   */
  dicCount: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 二级分类英文名称
   */
  dicNameEn: string
  /**
   * @description 二级分类ID
   */
  id: number
  /**
   * @description 二级分类父ID
   */
  parentId: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value 2
   * @description 副选项信息
   */
  sonDictionaryVo: CenterSchoolJiaofeiDictionarySonVO[]
  /**
   * @description 二级分类状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterSchoolJiaofeiOrderVO = {
  /**
   * @description 账户id
   */
  accId: string
  apiId: number
  /**
   * @description 未交金额
   */
  arrearageAmount: number
  /**
   * @description 批次
   */
  batchNum: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门ID
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 二级分类ID
   */
  dicId: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description 二级分类副选项ID
   */
  dicSonId: number
  /**
   * @description 二级分类副选项名称
   */
  dicSonName: string
  /**
   * @description 缴费期间编码
   */
  durationCode: string
  /**
   * @description 缴费期间名称
   */
  durationName: string
  /**
   * @value #datetime()
   * @description 支付结束时间
   */
  endTime: string
  /**
   * @description 支付订单号
   */
  foreighCode: string
  /**
   * @description 开票状态 0开票中 1开票成功 2开票失败
   */
  invoiceStatus: number
  /**
   * @description 开票状态
   */
  invoiceStatusName: string
  /**
   * @description 是否全额退款
   */
  isFullRefund: boolean
  isMergePay: number
  /**
   * @description 是否消息通知 0否1是
   */
  isMessageNotify: number
  /**
   * @description 是否回调 0否 1是
   */
  isNoticed: number
  isRefund: number
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 缴费方式0自定义 1导入 2接口
   */
  jiaofeiMethod: number
  /**
   * @description 缴费名单id
   */
  listId: number
  /**
   * @description 贷款金额
   */
  loanAmount: number
  /**
   * @description 合并支付金额
   */
  mergePayAmount: number
  /**
   * @description 合并缴费项目名称
   */
  mergeProNames: string
  /**
   * @value #datetime()
   * @description 回调时间
   */
  noticeTime: string
  /**
   * @description openId
   */
  openId: string
  /**
   * @description 订单号
   */
  orderId: number
  /**
   * @description 支付状态  0等待支付、2支付成功、3支付失败、-1订单关闭
   */
  orderStatus: number
  /**
   * @description 支付状态
   */
  orderStatusStr: string
  /**
   * @description 原金额
   */
  originalAmount: number
  /**
   * @description 父级订单号
   */
  parentOrder: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 支付方式
   */
  payMethod: string
  /**
   * @description 支付方式
   */
  payMethodStr: string
  /**
   * @description 缴费项目ID
   */
  proId: string
  /**
   * @description 缴费项目名称
   */
  proName: string
  /**
   * @description 应收金额
   */
  receivableAmount: number
  /**
   * @description 减免金额
   */
  reductionAmount: number
  refundAmount: number
  /**
   * @value 2
   * @description 退款订单
   */
  refundOrder: CenterJiaofeiRefundVO[]
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value 2
   * @description 合并支付订单
   */
  siblingsList: CenterJiaofeiOrderVO[]
  /**
   * @description 来源 WX公众号 APP
   */
  source: string
  /**
   * @description 第三方订单编号
   */
  thirdOrderCode: string
  /**
   * @description 0:未充值、1:充值中、2:充值成功、3:充值失败、4:充值关闭
   */
  thirdTradeStatus: number
  /**
   * @description 三方0贵阳易达恒志 1兰大
   */
  thirdType: number
  /**
   * @description 分类ID
   */
  typeId: number
  /**
   * @description 分类名称
   */
  typeName: string
  unifiedPayAmount: number
  /**
   * @description 红包金额
   */
  unifiedRedbagAmount: number
  /**
   * @description app.user_id
   */
  userId: string
  /**
   * @description 身份证号
   */
  userIdCard: string
  /**
   * @description 姓名
   */
  userName: string
  /**
   * @description 学号
   */
  userNo: string
  /**
   * @description 手机号
   */
  userPhone: string
}
export type CenterSchoolJiaofeiProDicVO = {
  /**
   * @description 二级分类Id
   */
  dicId: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 项目Id
   */
  proId: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type CenterSchoolJiaofeiProjectAndAmountVO = {
  /**
   * @description 二级分类费用
   */
  dicFullStr: string
  /**
   * @description 二级分类id
   */
  dicId: number
  /**
   * @description 项目id
   */
  id: number
  /**
   * @description 金额
   */
  payAmount: number
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
}
export type CenterSchoolJiaofeiProjectUrlVO = {
  /**
   * @description 缴费h5url
   */
  pathH5Url: string
  /**
   * @description 缴费url
   */
  pathUrl: string
  /**
   * @description 二维码缴费url
   */
  qrcodeUrl: string
}
export type CenterSchoolJiaofeiProjectVO = {
  /**
   * @value #datetime()
   * @description 缴费开始时间
   */
  beginDate: string
  /**
   * @description 审核备注
   */
  checkRemark: string
  /**
   * @description 审批状态
   */
  checkStatus: number
  /**
   * @description 审批状态
   */
  checkStatusStr: string
  /**
   * @value #datetime()
   * @description 审核时间
   */
  checkTime: string
  /**
   * @description 审核人id
   */
  checkUserId: number
  /**
   * @description 审核人
   */
  checkUserName: string
  /**
   * @description 关闭原因
   */
  closeTips: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门ID
   */
  deptId: number
  /**
   * @description 部门名称
   */
  deptName: string
  /**
   * @description 二级分类ID
   */
  dicId: number
  /**
   * @description 二级分类名称
   */
  dicName: string
  /**
   * @value #datetime()
   * @description 缴费结束时间
   */
  endDate: string
  /**
   * @description 顶部图片
   */
  headPicUrl: string
  /**
   * @description 图标链接
   */
  iconLink: string
  /**
   * @description 缴费项目ID
   */
  id: number
  /**
   * @description 是否可多次提交 0否 1是
   */
  isMorePay: number
  /**
   * @description 是否需要班级 0否 1是
   */
  isNeedClass: number
  /**
   * @description 是否需要身份证号 0否 1是
   */
  isNeedIdcard: number
  /**
   * @description 是否需要姓名 0否 1是
   */
  isNeedName: number
  /**
   * @description 是否需要手机号 0否 1是
   */
  isNeedPhone: number
  /**
   * @description 是否需要协议 0否 1是
   */
  isNeedProtocol: number
  /**
   * @description 备注是否必填 0否 1是
   */
  isNeedRemark: number
  /**
   * @description 是否需要学号 0否 1是
   */
  isNeedUserno: number
  /**
   * @description 无需支付 0否 1是
   */
  isNoPay: number
  /**
   * @description 是否允许充值0否1是
   */
  isOpen: number
  /**
   * @description 是否推荐 0否 1是
   */
  isRecommend: number
  /**
   * @description 是否显示 0否 1是
   */
  isShow: number
  /**
   * @description 是否分批支付 0否 1是
   */
  isSplitPay: number
  /**
   * @description 缴费方式0自定义式 1导入式
   */
  jiaofeiMethod: number
  /**
   * @description 名单来源：0excel导入 1迎新系统 2外部系统
   */
  listSource: number
  /**
   * @description 最大金额
   */
  maxAmount: number
  /**
   * @description 最小金额
   */
  minAmount: number
  /**
   * @description 公告
   */
  notice: string
  /**
   * @description 英文公告
   */
  noticeEn: string
  /**
   * @value #datetime()
   * @description 当前时间
   */
  nowDate: string
  /**
   * @description 外部链接
   */
  outLink: string
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 排序
   */
  proSort: number
  /**
   * @description 缴费项目图标
   */
  projectIcon: string
  /**
   * @description 项目名称
   */
  projectName: string
  /**
   * @description 项目英文名称
   */
  projectNameEn: string
  /**
   * @description 协议内容
   */
  protocolContent: string
  /**
   * @description 协议标题
   */
  protocolTitle: string
  /**
   * @description 协议标题英文
   */
  protocolTitleEn: string
  /**
   * @description 推荐排序
   */
  recommendSort: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 备注提示语
   */
  remarkMsg: string
  /**
   * @description 备注提示语英文
   */
  remarkMsgEn: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 项目状态 0:禁用 1:启用
   */
  status: number
  /**
   * @description 温馨提示
   */
  tips: string
  /**
   * @description 英文温馨提示
   */
  tipsEn: string
  /**
   * @description 分类ID
   */
  typeId: number
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type CenterSchoolJiaofeiReportVO = {
  /**
   * @description 缴费总和
   */
  amountCount: number
  /**
   * @description 当日缴费金额总和
   */
  nowDateAmountCount: number
  /**
   * @description 当月缴费金额总和
   */
  nowMonthAmountCount: number
  /**
   * @description 分页缴费统计数据
   */
  page: PageResultCenterJiaofeiOrderVO_1
  /**
   * @description 退款总和
   */
  refundTotalAmount: number
  /**
   * @description 列表退款金额
   */
  tableRefundAmount: number
  /**
   * @description 列表退款笔数
   */
  tableRefundCount: number
  /**
   * @description 列表数据缴费金额总和
   */
  tableReportAmountCount: number
  /**
   * @description 列表数据缴费笔数总和
   */
  tableReportCount: number
}
export type CenterSchoolRoomUserVO = {
  /**
   * @description 校区ID
   */
  areaId: number
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 楼栋编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 是否使用过
   */
  isUsed: number
  /**
   * @description 是否使用过
   */
  isUsedStr: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 姓名
   */
  userName: string
}
export type CenterSchoolRoomVO = {
  amount: number
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区id
   */
  areaId: number
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 房间id
   */
  id: number
  /**
   * @description 昵称
   */
  nickName: string
  origin: number
  originStr: string
  /**
   * @value #datetime()
   */
  recordTime: string
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校名称
   */
  schoolName: string
  surplus: number
  /**
   * @description 类型：1、电费 2、水费 3、常工应用
   */
  type: number
  /**
   * @description 类型
   */
  typeStr: string
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  updateTime: string
}
export type CenterSpecialConfigVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  firm: number
  /**
   * @description 厂商
   */
  firmStr: string
  /**
   * @description 校区ID
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type CenterSysLoginQrCodeStatusVO = {
  /**
   * @description 二维码状态 0、生成 1、 扫码中  2、扫码成功  -1、已失效
   */
  status: number
}
export type CenterSysMenuTree4LoginVO = {
  /**
   * @value 2
   */
  childMenus: CenterSysMenuTree4LoginVO[]
  code: string
  /**
   * @description 企业别名
   */
  enterpriseName: string
  fatherId: number
  flag: number
  iconChecked: string
  iconUnchecked: string
  id: number
  isMenu: number
  isMenuStr: string
  menuLevel: number
  name: string
  operates: string[]
  /**
   * @description 菜单前缀,一般为平台编码
   */
  preCode: string
  sort: number
  url: string
}
export type CenterSysMenuTreeVO = {
  /**
   * @value 2
   */
  children: CenterSysMenuTreeVO[]
  enterpriseName: string
  isMenu: number
  key: number
  title: string
}
export type CenterSysMenuVO = {
  checked: boolean
  /**
   * @value 2
   */
  childMenus: SysMenuVO[]
  code: string
  defaultSelect: number
  deleteFlag: number
  description: string
  enterpriseName: string
  fatherId: number
  flag: number
  iconChecked: string
  iconComChecked: string
  iconComUnchecked: string
  iconUnchecked: string
  id: number
  isMenu: number
  isMenuStr: string
  isRoute: number
  isRouteStr: string
  menuLevel: number
  name: string
  operates: string[]
  preCode: string
  preCodeStr: string
  schoolClasses: string
  schoolCode: string
  schoolNature: string
  sort: number
  url: string
}
export type CenterSysRoleDO = {
  code: string
  createId: number
  createName: string
  /**
   * @value #datetime()
   */
  createTime: string
  deleteFlag: number
  description: string
  id: number
  image: string
  isDefault: number
  isSuperAdmin: number
  name: string
  schoolCode: string
  status: number
  updateId: number
  updateName: string
  /**
   * @value #datetime()
   */
  updateTime: string
  userNum: number
}
export type CenterSysRoleListVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 角色图片
   */
  image: string
  /**
   * @description 是否为默认角色 0：是  1：否
   */
  isDefault: number
  /**
   * @description 角色名称
   */
  name: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态名称
   */
  statusStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 角色用户人数
   */
  userNum: number
}
export type CenterSysRoleVO = {
  checkedMenuIds: number[]
  /**
   * @value #datetime()
   */
  createTime: string
  id: number
  image: string
  isDefault: number
  /**
   * @value 2
   */
  menuList: CenterSysMenuVO[]
  /**
   * @value 2
   */
  menuTreeList: CenterSysMenuTreeVO[]
  name: string
  status: number
  /**
   * @value #datetime()
   */
  updateTime: string
}
export type CenterSysScanLoginQrCodeVO = {
  /**
   * @description 二维码
   */
  qrCode: string
  /**
   * @description 二维码标识
   */
  qrticket: string
}
export type CenterSysSchoolManagerUserVO = {
  schoolCode: string
  userId: number
}
export type CenterSysSchoolVO = {
  /**
   * @description 学校校徽
   */
  schoolBadgeImg: string
  /**
   * @description 学校类别(1.学校 2.企业 3.医院 4.政府)
   */
  schoolClasses: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 学校性质 1.学校-易校园 2.学校-K12 3.数智小二
   */
  schoolNature: number
}
/**
 * @description 用户功能权限查看VO
 */
export type CenterSysUserMenuListVO = {
  /**
   * @description 已选中的菜单ids
   */
  checkedMenuIds: number[]
  /**
   * @value 2
   * @description 菜单列表
   */
  menuList: CenterSysMenuVO[]
  /**
   * @value 2
   * @description 菜单树
   */
  menuTreeList: CenterSysMenuTreeVO[]
}
export type CenterSysUserSchoolListVO = {
  /**
   * @description id、学校编码
   */
  id: string
  /**
   * @description 学校类别(1.学校 2.企业 3.医院 政府)
   */
  schoolClasses: number
  /**
   * @description text、学校名称
   */
  text: string
}
export type CenterSysUserVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否平台用户 0是 1否
   */
  isPlatformUser: number
  isPlatformUserStr: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 角色id列表
   */
  roleIds: string[]
  /**
   * @description 角色名称[多个以、分割]
   */
  roleName: string
  /**
   * @description 角色名称列表
   */
  roleNames: string[]
  /**
   * @description 状态 0未启用,1已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 姓名
   */
  userName: string
}
export type CenterTaskVO = {
  /**
   * @description 业务类型名称
   */
  bizName: string
  /**
   * @description 业务类型
   */
  bizType: string
  /**
   * @description 是否能下载 0是1否
   */
  canDownload: number
  /**
   * @description 是否能发短信 0是1否
   */
  canSendMsg: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @value #datetime()
   * @description 失效时间
   */
  expiresTime: string
  /**
   * @description 失败下载key
   */
  failKey: string
  /**
   * @description 失败提示
   */
  failMsg: string
  /**
   * @description 文件名
   */
  fileName: string
  /**
   * @description 文件大小(Byte)
   */
  fileSize: number
  /**
   * @description 文件大小
   */
  fileSizeStr: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 任务状态 1执行中2执行成功3执行部分成功4执行失败5已失效
   */
  status: number
  /**
   * @description 任务类型 1下载2上传
   */
  type: number
  /**
   * @description 任务类型
   */
  typeStr: string
}
export type CenterUserVO = {
  /**
   * @description 绑卡状态 1已经绑卡 0未绑卡
   */
  bindCardStatus: number
  /**
   * @description 绑卡状态
   */
  bindCardStatusStr: string
  /**
   * @value #datetime()
   * @description 绑卡时间
   */
  bindCardTime: string
  extJson: string
  /**
   * @description 头像
   */
  headImg: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 默认身份身份证号
   */
  identityCard: string
  /**
   * @description 默认身份id
   */
  identityId: number
  /**
   * @description 默认身份手机号
   */
  identityMobilePhone: string
  /**
   * @description 默认身份姓名
   */
  identityName: string
  /**
   * @description 身份证号
   */
  identityNo: string
  /**
   * @description 默认身份关系
   */
  identityRelationship: string
  /**
   * @description 默认身份类型 1家长 2老师
   */
  identityType: number
  /**
   * @description 学号
   */
  jobNo: string
  /**
   * @value #datetime()
   * @description 最后登录时间
   */
  lastLogin: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 用户学校月绑卡次数
   */
  monthBindCount: string
  /**
   * @description 可操作权限集合
   */
  operates: string[]
  operation: string
  payOpenid: string
  /**
   * @description 所属平台
   */
  platform: string
  /**
   * @description 是否实名
   */
  realNameStatus: string
  /**
   * @description 是否实名
   */
  realNameStatusStr: string
  /**
   * @value #datetime()
   * @description 注册时间
   */
  regiserTime: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别 1男，2女，3空 没有值表示男
   */
  sex: number
  /**
   * @description 性别
   */
  sexStr: string
  /**
   * @description 状态中文
   */
  statusStr: string
  /**
   * @description 是否测试账户
   */
  testAccountStr: string
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description 一卡通号
   */
  userIdcard: string
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 用户类型
   */
  userType: string
  /**
   * @description 用户类型中文
   */
  userTypeStr: string
}
export type CenterWaterConfigVO = {
  businessCode: string
  controllerTitle: string
  /**
   * @value #datetime()
   */
  createTime: string
  entryCode: string
  entryName: string
  id: number
  isCardWithhold: number
  mode: string
  operates: string[]
  operation: string
  payMethod: string
  protocol: string
  protocolStr: string
  remarks: string
  schoolCode: string
  schoolName: string
  serverAddress: string
  status: number
}
export type CommResponse = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterJiaofeiInvoiceOrderVO = {
  alertType: number
  bizCode: string
  data: CenterJiaofeiInvoiceOrderVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterJiaofeiInvoiceTotalVO = {
  alertType: number
  bizCode: string
  data: CenterJiaofeiInvoiceTotalVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterJiaofeiListVO = {
  alertType: number
  bizCode: string
  data: CenterJiaofeiListVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterPincardConfigVO = {
  alertType: number
  bizCode: string
  data: CenterPincardConfigVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterPincardSubsidyVO = {
  alertType: number
  bizCode: string
  data: CenterPincardSubsidyVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterPincardVO = {
  alertType: number
  bizCode: string
  data: CenterPincardVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseCenterWaterConfigVO = {
  alertType: number
  bizCode: string
  data: CenterWaterConfigVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseDonateItemVO = {
  alertType: number
  bizCode: string
  data: DonateItemVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseDonateOrderTotalVO = {
  alertType: number
  bizCode: string
  data: DonateOrderTotalVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseDonateUserOrderVO = {
  alertType: number
  bizCode: string
  data: DonateUserOrderVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseDonateUserVO = {
  alertType: number
  bizCode: string
  data: DonateUserVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseOperationLogVO = {
  alertType: number
  bizCode: string
  data: OperationLogVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseSubsidyItemListTotalMoneyVO = {
  alertType: number
  bizCode: string
  data: SubsidyItemListTotalMoneyVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseSubsidyItemListVO = {
  alertType: number
  bizCode: string
  data: SubsidyItemListVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseSubsidyItemVO = {
  alertType: number
  bizCode: string
  data: SubsidyItemVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseSubsidyNoticeVO = {
  alertType: number
  bizCode: string
  data: SubsidyNoticeVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnApplicationConfigVO = {
  alertType: number
  bizCode: string
  data: WnApplicationConfigVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnBatchVO = {
  alertType: number
  bizCode: string
  data: WnBatchVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnBuildingVO = {
  alertType: number
  bizCode: string
  data: WnBuildingVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnDeviceCheckInfoVO = {
  alertType: number
  bizCode: string
  data: WnDeviceCheckInfoVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnFloorVO = {
  alertType: number
  bizCode: string
  data: WnFloorVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnFormUserApiVO = {
  alertType: number
  bizCode: string
  data: WnFormUserApiVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnGenerateStudentNoVO = {
  alertType: number
  bizCode: string
  data: WnGenerateStudentNoVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnHallFormVO = {
  alertType: number
  bizCode: string
  data: WnHallFormVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnHallVO = {
  alertType: number
  bizCode: string
  data: WnHallVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnInStudentRoomVO = {
  alertType: number
  bizCode: string
  data: WnInStudentRoomVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnInStudentVO = {
  alertType: number
  bizCode: string
  data: WnInStudentVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnMajorStudentCountVO = {
  alertType: number
  bizCode: string
  data: WnMajorStudentCountVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnPayConfigDetailVO = {
  alertType: number
  bizCode: string
  data: WnPayConfigDetailVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnProcessConfigVO = {
  alertType: number
  bizCode: string
  data: WnProcessConfigVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnProductVO = {
  alertType: number
  bizCode: string
  data: WnProductVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnReceiveNumberTotalVO = {
  alertType: number
  bizCode: string
  data: WnReceiveNumberTotalVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnReceiveOrderVO = {
  alertType: number
  bizCode: string
  data: WnReceiveOrderVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnRoomAccommodateCountShowVO = {
  alertType: number
  bizCode: string
  data: WnRoomAccommodateCountShowVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnRoomFeeConfigVO = {
  alertType: number
  bizCode: string
  data: WnRoomFeeConfigVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnRoomVO = {
  alertType: number
  bizCode: string
  data: WnRoomVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnSchoolAllDashboardVO = {
  alertType: number
  bizCode: string
  data: WnSchoolAllDashboardVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnSelectPhoneOrderVO = {
  alertType: number
  bizCode: string
  data: WnSelectPhoneOrderVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnSelectPhonePackageVO = {
  alertType: number
  bizCode: string
  data: WnSelectPhonePackageVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnSelectPhoneVO = {
  alertType: number
  bizCode: string
  data: WnSelectPhoneVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnStudentBaseApiVO = {
  alertType: number
  bizCode: string
  data: WnStudentBaseApiVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnStudentBaseVO = {
  alertType: number
  bizCode: string
  data: WnStudentBaseVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnStudentDashboardViewVO = {
  alertType: number
  bizCode: string
  data: WnStudentDashboardViewVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnStudentRegisterBaseApiVO = {
  alertType: number
  bizCode: string
  data: WnStudentRegisterBaseApiVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnStudentToClassVO = {
  alertType: number
  bizCode: string
  data: WnStudentToClassVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseWnUnitVO = {
  alertType: number
  bizCode: string
  data: WnUnitVO
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseboolean = {
  alertType: number
  bizCode: string
  data: boolean
  message: string
  statusCode: number
  success: boolean
}
export type CommResponseobject = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  statusCode: number
  success: boolean
}
export type CommResponsestring = {
  alertType: number
  bizCode: string
  data: string
  message: string
  statusCode: number
  success: boolean
}
export type CommResponse文章返回参数 = {
  alertType: number
  bizCode: string
  data: 文章返回参数
  message: string
  statusCode: number
  success: boolean
}
export type CommResponse获取预览信息返回VO = {
  alertType: number
  bizCode: string
  data: 获取预览信息返回VO
  message: string
  statusCode: number
  success: boolean
}
export type CompusArticleFaqVO = {
  /**
   * @description 内容
   */
  articleText: string
  /**
   * @description 作者/来源
   */
  author: string
  /**
   * @description 分类编码
   */
  code: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  id: number
  /**
   * @description 图片地址
   */
  imageUrl: string
  /**
   * @description 是否热门问题
   */
  isHot: number
  /**
   * @description 是否热门问题
   */
  isHotStr: string
  /**
   * @description 开户行
   */
  openBank: string
  operates: string[]
  operation: string
  /**
   * @description 平台
   */
  platform: string
  platformStr: string
  /**
   * @description 排序
   */
  sortNo: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态 0未启用,1已启用
   */
  statusStr: string
  /**
   * @description 分类ID
   */
  tagsId: number
  /**
   * @description 分类标题
   */
  tagsName: string
  /**
   * @description 标题
   */
  title: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type CompusAssociationActivityDO = {
  activityAddress: string
  /**
   * @value #datetime()
   */
  activityEndTime: string
  activityIntro: string
  activityName: string
  activityRule: string
  /**
   * @value #datetime()
   */
  activityStartTime: string
  activityStatus: number
  associationCode: string
  associationId: number
  associationName: string
  bgImage: string
  createId: number
  createName: string
  /**
   * @value #datetime()
   */
  createTime: string
  deleteFlag: number
  /**
   * @value #datetime()
   */
  enrollEndTime: string
  enrollNum: number
  /**
   * @value #datetime()
   */
  enrollStartTime: string
  enrollStatus: number
  hotSort: number
  id: number
  isHot: number
  managerId: number
  picName: string
  picPhone: string
  schoolCode: string
  schoolId: number
  schoolName: string
  status: number
  typeId: number
  updateId: number
  updateName: string
  /**
   * @value #datetime()
   */
  updateTime: string
}
export type CompusAssociationActivityTypeVO = {
  /**
   * @value #datetime()
   */
  createTime: string
  id: number
  operates: string[]
  operation: string
  schoolName: string
  statusStr: string
  typeName: string
  typeSort: number
}
export type CompusAssociationActivityUserVO = {
  /**
   * @value #datetime()
   */
  createTime: string
  headImg: string
  id: number
  jobNo: string
  mobilePhone: string
  operates: string[]
  userClass: string
  userId: number
  userName: string
}
export type CompusAssociationActivityVO = {
  activityName: string
  activityStatusStr: string
  activity_end_time: string
  activity_start_time: string
  associationCode: string
  associationName: string
  enrollNum: number
  enrollStatusStr: string
  enroll_end_time: string
  enroll_start_time: string
  hotSort: number
  id: number
  isHotStr: string
  operates: string[]
  operation: string
  schoolName: string
  statusStr: string
  typeName: string
}
export type CompusAssociationBannerVO = {
  activityId: number
  activityName: string
  associationId: number
  bannerImg: string
  /**
   * @value #datetime()
   */
  endTime: string
  id: number
  operates: string[]
  operation: string
  outUrl: string
  positionCode: string
  positionStr: string
  schoolName: string
  showSort: number
  showStr: string
  /**
   * @value #datetime()
   */
  startTime: string
  statusStr: string
  type: number
  typeStr: string
}
export type CompusAssociationDO = {
  activityNum: number
  address: string
  aim: string
  associationCode: string
  associationName: string
  associationType: number
  badgeImg: string
  createId: number
  createName: string
  /**
   * @value #datetime()
   */
  createTime: string
  deleteFlag: number
  hotSort: number
  id: number
  isAllowIn: number
  isHot: number
  picId: number
  propaganda: string
  schoolCode: string
  schoolId: number
  schoolName: string
  status: number
  summary: string
  updateId: number
  updateName: string
  /**
   * @value #datetime()
   */
  updateTime: string
  userNum: number
}
export type CompusAssociationUserVO = {
  applyIntro: string
  department: string
  id: number
  mobilePhone: string
  operates: string[]
  operation: string
  /**
   * @value #datetime()
   */
  passTime: string
  selfIntro: string
  specialities: string
  userClass: string
  userId: number
  userName: string
  userType: string
  userTypeStr: string
}
export type CompusAssociationVO = {
  activityNum: number
  address: string
  aim: string
  associationCode: string
  associationName: string
  associationType: number
  associationTypeStr: string
  badgeImg: string
  /**
   * @value #datetime()
   */
  createTime: string
  hotSort: number
  id: number
  isAllowIn: number
  isHot: number
  isHotStr: string
  operation: string
  picId: number
  picName: string
  picPhone: string
  picUserType: string
  propaganda: string
  schoolName: string
  status: number
  statusStr: string
  summary: string
  userNum: number
}
export type CompusPushResponse = {
  /**
   * @description 新闻公告标题
   */
  articleTitle: string
  /**
   * @description 内容
   */
  content: string
  /**
   * @value #datetime()
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 内部页面code
   */
  innerPageCode: number
  /**
   * @description 内部页面名称
   */
  innerPageName: string
  /**
   * @description 链接地址
   */
  linkAddress: string
  /**
   * @description 链接类型  1内部，2外部
   */
  linkType: number
  linkTypeStr: string
  /**
   * @description 接收人
   */
  receiver: string
  remark: string
  /**
   * @value #datetime()
   * @description 定时发送时间
   */
  sendTime: string
  /**
   * @description 发送方式 1立即发送  2定时发送
   */
  sendType: number
  status: number
  statusStr: string
  /**
   * @description 标题
   */
  title: string
  type: number
  typeStr: string
}
export type CompusTagsResponse = {
  /**
   * @description 分类图标
   */
  icon: string
  /**
   * @description tagsId
   */
  id: number
  /**
   * @description 标签名称
   */
  tagsTitle: string
}
export type CompusTagsVO = {
  /**
   * @description 编码
   */
  code: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 分类名称
   */
  icon: string
  id: number
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 平台
   */
  platform: string
  platformStr: string
  /**
   * @description 状态 0未启用,1已启用
   */
  status: number
  /**
   * @description 状态 0未启用,1已启用
   */
  statusStr: string
  /**
   * @description 标签名称
   */
  tagsTitle: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type DonateItemVO = {
  /**
   * @description 捐赠书模板
   */
  certificateTemplate: string
  /**
   * @description 子商户号
   */
  cpCode: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @value #datetime()
   * @description 结束时间
   */
  endTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 发票开具说明
   */
  invoiceExplain: string
  /**
   * @description 项目主题颜色
   */
  itemColor: string
  /**
   * @description 项目简介
   */
  itemDetail: string
  /**
   * @description 项目封面
   */
  itemFront: string
  /**
   * @description 项目logo
   */
  itemLogo: string
  /**
   * @description 打款项名称
   */
  itemName: string
  /**
   * @description 项目状态 0:未启用 1:进行中 2:暂停 3:已结束
   */
  itemStatus: number
  itemStatusStr: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 页面跳转链接
   */
  pageUrl: string
  /**
   * @description 学校账户
   */
  schoolAccount: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value #datetime()
   * @description 开始时间
   */
  startTime: string
  /**
   * @description 累计捐款金额
   */
  totalDonateMoney: number
  totalDonateMoneyStr: string
  /**
   * @description 累计捐款人数
   */
  totalDonateNum: number
}
export type DonateOrderClientVO = {
  /**
   * @description 证书编号
   */
  certificateNo: string
  /**
   * @description 证书页地址
   */
  certificateUrl: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 捐赠留言
   */
  donateRemark: string
  /**
   * @description 头像
   */
  headPhoto: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 是否匿名 0:是 1:否
   */
  isAnonymous: number
  isAnonymousStr: string
  /**
   * @description 名称
   */
  name: string
  /**
   * @description 捐赠金额
   */
  orderMoney: number
  orderMoneyStr: string
  /**
   * @description 学校名称
   */
  schoolName: string
}
export type DonateOrderTotalVO = {
  /**
   * @description 项目id
   */
  itemId: number
  /**
   * @description 累计捐款金额
   */
  totalDonateMoney: number
  totalDonateMoneyStr: string
  /**
   * @description 累计捐款人数
   */
  totalDonateNum: number
}
export type DonateUserOrderVO = {
  /**
   * @description 校友会
   */
  alumniName: string
  /**
   * @description 证书编号
   */
  certificateNo: string
  /**
   * @description 班级
   */
  className: string
  /**
   * @description 开票税号
   */
  companyDuty: string
  /**
   * @description 公司名称
   */
  companyName: string
  /**
   * @description 联系邮箱
   */
  contactEmail: string
  /**
   * @description 联系电话
   */
  contactPhone: string
  /**
   * @description 联系人
   */
  contactUser: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门
   */
  departName: string
  /**
   * @description 捐赠留言
   */
  donateRemark: string
  /**
   * @description 入学年份
   */
  entranceYear: string
  /**
   * @description 毕业年份
   */
  graduateYear: string
  /**
   * @description 头像
   */
  headPhoto: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 发票类型 0:企业单位 1:个人
   */
  invoiceType: number
  invoiceTypeStr: string
  /**
   * @description 是否匿名 0:是 1:否
   */
  isAnonymous: number
  isAnonymousStr: string
  /**
   * @description 是否指定用途 0:是 1:否
   */
  isAppoint: number
  isAppointStr: string
  /**
   * @description 是否开发票 0:是 1:否
   */
  isInvoice: number
  isInvoiceStr: string
  /**
   * @description 项目id
   */
  itemId: number
  /**
   * @description 项目名称
   */
  itemName: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业
   */
  majorName: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 第三方昵称
   */
  nickName: string
  /**
   * @description 捐赠金额
   */
  orderMoney: number
  orderMoneyStr: string
  /**
   * @description 订单号
   */
  orderNo: string
  /**
   * @description 实付金额
   */
  payMoney: number
  payMoneyStr: string
  /**
   * @description 支付交易订单号
   */
  payNo: string
  /**
   * @description 支付状态：1等待支付、2支付成功、3支付失败、4订单关闭
   */
  payStatus: number
  payStatusStr: string
  /**
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 支付方式
   */
  payType: string
  payTypeStr: string
  /**
   * @description 手机号
   */
  phone: string
  /**
   * @description 平台
   */
  platform: string
  platformStr: string
  /**
   * @description 捐赠用途
   */
  purpose: number
  purposeStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别 1:男 2:女
   */
  sex: number
  sexStr: string
  /**
   * @description 订单状态 0处理中 1已完成
   */
  status: number
  statusStr: string
  /**
   * @description 第三方id
   */
  thirdId: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 与学校的关系
   */
  userType: number
  userTypeStr: string
  /**
   * @description 工作单位
   */
  workUnit: string
}
export type DonateUserVO = {
  /**
   * @description 校友会
   */
  alumniName: string
  /**
   * @description 班级
   */
  className: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 部门
   */
  departName: string
  donateAmount: number
  donateAmountStr: string
  donateNum: number
  /**
   * @description 入学年份
   */
  entranceYear: string
  /**
   * @description 毕业年份
   */
  graduateYear: string
  /**
   * @description 头像
   */
  headPhoto: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 是否匿名 0:是 1:否
   */
  isAnonymous: number
  isAnonymousStr: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业
   */
  majorName: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 第三方昵称
   */
  nickName: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 手机号
   */
  phone: string
  /**
   * @description 平台
   */
  platform: string
  platformStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别 1:男 2:女
   */
  sex: number
  sexStr: string
  /**
   * @description 第三方id
   */
  thirdId: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 与学校的关系
   */
  userType: number
  userTypeStr: string
  /**
   * @description 工作单位
   */
  workUnit: string
}
export type EncryptKeyVO = {
  /**
   * @description 私钥
   */
  privateKey: string
  /**
   * @description 公钥
   */
  publicKey: string
}
export type FrontSchoolBuildingVO = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区ID
   */
  areaId: number
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
}
export type FrontSchoolFloorVO = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区ID
   */
  areaId: number
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼层编号
   */
  floorCode: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
}
export type FrontSchoolRoomVO = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区ID
   */
  areaId: number
  /**
   * @description 楼栋编码
   */
  buildingCode: string
  /**
   * @description 楼层编码
   */
  floorCode: string
  /**
   * @description 房间编码
   */
  roomCode: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
}
export type KayRoadWaterOrderVO = {
  /**
   * @description 账户ID
   */
  accID: string
  /**
   * @description 房间名称
   */
  areaName: string
  /**
   * @description 消费前赠送金额
   */
  befmoneygiven: string
  /**
   * @description 消费前现金余额
   */
  befmoneyreal: string
  /**
   * @description 下发时间
   */
  consumeDT: string
  /**
   * @description 设备名称
   */
  devName: string
  /**
   * @description 备注，月卡消费!=0 其他消费=0
   */
  monthConSumeTimes: string
  /**
   * @description 预扣金额
   */
  perMoney: string
  /**
   * @description 区域
   */
  quyu: string
  /**
   * @description 手机号
   */
  telPhone: string
  /**
   * @description 上传时间
   */
  upDT: string
  /**
   * @description 消费后余额
   */
  upLeadMoney: string
  /**
   * @description 消费金额
   */
  upMoney: string
}
export type KtClassTeacherVO = {
  /**
   * @description 班级ID
   */
  classId: number
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否班主任 0是1否
   */
  isSuper: number
  /**
   * @description 是否班主任
   */
  isSuperName: string
  /**
   * @description 教职工工号
   */
  jobNo: string
  /**
   * @description 任课科目
   */
  subjects: string
  /**
   * @description 老师ID
   */
  teacherId: number
  /**
   * @description 教职工身份证号
   */
  teacherIdCard: string
  /**
   * @description 教职工名称
   */
  teacherName: string
  /**
   * @description 教职工手机
   */
  teacherPhone: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type KtClassVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 年级名称
   */
  gradeName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 班级名称
   */
  name: string
  /**
   * @description 学年
   */
  schoolYear: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type KtGradeVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 年级类型
   */
  gradeType: string
  /**
   * @description 年级类型
   */
  gradeTypeName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 年级名称
   */
  name: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type KtStudentVO = {
  /**
   * @description 班级Id
   */
  classId: number
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 学籍号
   */
  code: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 家长手机
   */
  guardianPhone: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份证
   */
  identityCard: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别
   */
  sex: string
  /**
   * @description 类型（0普通学生1借读生）
   */
  type: number
  /**
   * @description 类型
   */
  typeName: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type KtTeacherVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份证
   */
  identityCard: string
  /**
   * @description 工号
   */
  jobNo: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 名称
   */
  name: string
  /**
   * @description 性别
   */
  sex: string
  /**
   * @description 修改人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type KtUserIdentityVO = {
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 学籍号
   */
  code: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 是否已注册 0是1否
   */
  hasJoin: number
  /**
   * @description 是否已注册
   */
  hasJoinStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份证
   */
  identityCard: string
  /**
   * @description 身份id
   */
  identityId: number
  /**
   * @description 身份姓名
   */
  identityName: string
  /**
   * @description 是否家委会 0是1否
   */
  inHomeCommittee: number
  /**
   * @description 是否家委会
   */
  inHomeCommitteeStr: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 关系
   */
  relationship: string
  /**
   * @description 关系
   */
  relationshipStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type LsCheckerVO = {
  /**
   * @description 发证人名称
   */
  checkerUserName: string
  /**
   * @description 发证人手机号
   */
  checkerUserPhone: string
  id: number
}
export type Mapstringstring = {}
export type MarketingDutyUserVO = {
  /**
   * @description 部门存储json
   */
  departmentJson: string
  /**
   * @description 关键字(院系/专业/部门/班级)
   */
  departmentName: string
  /**
   * @description 负责人部门类型 1院系2专业3班级4部门
   */
  departmentType: string
  departmentTypeStr: string
  /**
   * @description 职务ID
   */
  dutyId: number
  /**
   * @description 职务名称
   */
  dutyName: string
  id: number
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 姓名
   */
  userName: string
}
export type MarketingFormApplyVO = {
  id: number
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 手机号
   */
  phone: string
}
export type MarketingFormDetailVO = {
  /**
   * @description 结束时间
   */
  endTime: string
  /**
   * @description 填写结束时间限制（HH:mm）
   */
  enterTimeEndLimit: string
  /**
   * @description 填写开始时间限制（HH:mm）
   */
  enterTimeStartLimit: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 表单名称
   */
  name: string
  /**
   * @description 是否需要审批 0是1否
   */
  needCheck: number
  /**
   * @description 是否需要结束时间 0是1否
   */
  needEndTime: number
  /**
   * @description 是否需要限制填写时间 0是1否
   */
  needEnterTimeLimit: number
  /**
   * @value 2
   * @description 流程信息
   */
  nodeList: MarketingFormNodeVO[]
  /**
   * @description 预览地址
   */
  previewUrl: string
  /**
   * @description 申请发布理由
   */
  remark: string
  /**
   * @description 状态 1已审核2待审核4已拒绝
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 总填写份数限制 0为不限*
   */
  totalCountLimit: number
}
export type MarketingFormNodeVO = {
  /**
   * @description 流程信息
   */
  dutyList: string[]
  /**
   * @description 表单id
   */
  formId: number
  /**
   * @description 节点名称
   */
  nodeName: string
  /**
   * @description 节点类型 1学生流程节点2教职工流程节点
   */
  nodeType: number
}
export type MarketingFormSchoolSettingVO = {
  /**
   * @description 申请发布人类型 0:指定人 1:所有人
   */
  applyType: number
  id: number
  operates: string[]
  operation: string
}
export type MarketingFormVO = {
  /**
   * @description 申请发布理由
   */
  applyRemark: string
  /**
   * @value #datetime()
   * @description 申请时间
   */
  applyTime: string
  /**
   * @description 申请手机号
   */
  createAccount: string
  /**
   * @description 申请人姓名
   */
  createName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 表单名称
   */
  name: string
  /**
   * @description 是否需要审批 0是1否
   */
  needCheck: number
  /**
   * @description 状态 1已审核2待审核4已拒绝
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 审核人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 审核时间
   */
  updateTime: string
}
export type MarketingSchoolUserNewVO = {
  /**
   * @description 目前居住地
   */
  areaStr: string
  /**
   * @description 返还地
   */
  backAreaStr: string
  /**
   * @description 返还地-市
   */
  backCity: string
  backCityCode: number
  /**
   * @description 返还地-区/县
   */
  backDistrict: string
  backDistrictCode: number
  /**
   * @description 返还地-省份
   */
  backProvince: string
  backProvinceCode: number
  /**
   * @description 返校备注：车次或航班号
   */
  backRemark: string
  backWay: number
  /**
   * @description 返校方式
   */
  backWayStr: string
  /**
   * @description 楼栋
   */
  building: string
  /**
   * @description 后台备注
   */
  centerRemark: string
  /**
   * @description 后台备注操作人
   */
  centerUpdateName: string
  /**
   * @description 市
   */
  city: string
  /**
   * @description 市编码
   */
  cityCode: number
  /**
   * @description 班级/部门编码
   */
  classCode: string
  classId: number
  /**
   * @description 班级
   */
  className: string
  /**
   * @description 是否接触过高发地区 0是1否
   */
  contactArea: number
  /**
   * @description 是否去过高发地区
   */
  contactAreaStr: string
  /**
   * @value #datetime()
   * @description 接触日期
   */
  contactDate: string
  /**
   * @description 接触日期 yyyy-MM-dd
   */
  contactDateStr: string
  /**
   * @description 是否接触过确诊者 0是1否
   */
  contactPatient: number
  /**
   * @description 是否接触过确诊者
   */
  contactPatientStr: string
  /**
   * @description 国家
   */
  country: string
  /**
   * @description 查询日期 yyyy-MM-dd
   */
  createDate: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 创建时间 yyyy-MM-dd HH:mm:ss
   */
  createTimeStr: string
  /**
   * @description 院系/部门
   */
  department: string
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 区/县
   */
  district: string
  /**
   * @description 区/县编码
   */
  districtCode: number
  /**
   * @description 招生年份（年级）
   */
  entranceYear: number
  /**
   * @description 拓展字段
   */
  extField: string
  /**
   * @description 房间号
   */
  floor: string
  /**
   * @description 是否全日制 0是1否
   */
  fullTimeFlag: number
  hasTodayDetail: number
  hasTodayDetailExportStr: string
  /**
   * @description 今日是否打卡 0是1否
   */
  hasTodayDetailStr: string
  /**
   * @description 健康情况 1正常2发烧/咳嗽等症状3其它
   */
  healthStatus: number
  /**
   * @description 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
   */
  healthStatusNew: string
  /**
   * @description 健康情况new
   */
  healthStatusNewStr: string
  /**
   * @description 健康情况
   */
  healthStatusStr: string
  /**
   * @description 是否春节期间在校 0是1否
   */
  holidayInSchool: number
  /**
   * @description 是否春节期间在校
   */
  holidayInSchoolStr: string
  id: number
  /**
   * @description 身份证号
   */
  identity: string
  /**
   * @description 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
   */
  identitySecondType: string
  /**
   * @description 身份二级分类
   */
  identitySecondTypeStr: string
  identityType: number
  /**
   * @description 身份类型
   */
  identityTypeStr: string
  /**
   * @description 是否政府定点集中隔离 0是1否
   */
  inGovQuarantine: number
  inGovQuarantineStr: string
  /**
   * @description 是否居家健康监测或隔离 0是1否
   */
  inHomeQuarantine: number
  inHomeQuarantineStr: string
  /**
   * @description 是否在校 0是1否
   */
  inSchool: number
  /**
   * @description 是否校内集中隔离 0是1否
   */
  inSchoolQuarantine: number
  inSchoolQuarantineStr: string
  /**
   * @description 是否在校
   */
  inSchoolStr: string
  /**
   * @description 居住区是否有确诊、无症状、疑似 0是 1否
   */
  isCommunityPatient: number
  /**
   * @description 居住区是否有确诊、无症状、疑似
   */
  isCommunityPatientStr: string
  /**
   * @description 家庭成员是否有确诊、疑似、感染者 0是 1否
   */
  isFamiliyPatient: number
  /**
   * @description 家庭成员是否有确诊、疑似、感染者
   */
  isFamiliyPatientStr: string
  isInCompany: number
  /**
   * @description 今日是否在实习单位
   */
  isInCompanyStr: string
  /**
   * @description 是否确诊、无症状 0是1否
   */
  isPatient: number
  /**
   * @description 是否确诊、无症状
   */
  isPatientStr: string
  /**
   * @description 是否为疑似病例 0是1否
   */
  isSuspected: number
  /**
   * @description 是否为疑似病例
   */
  isSuspectedStr: string
  isTodayBack: number
  /**
   * @description 今日是否返校
   */
  isTodayBackStr: string
  /**
   * @description 隔离地点
   */
  isolatedPlace: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @value #datetime()
   */
  lastDetailTime: string
  /**
   * @description 最后打卡时间
   */
  lastDetailTimeStr: string
  /**
   * @description 最近一次核酸检测日期（yyyy-MM-dd）
   */
  lastNucleicAcidDate: string
  /**
   * @description 现在联系方式
   */
  linkPhone: string
  /**
   * @description 定位信息
   */
  locationInfo: string
  /**
   * @description 经纬度
   */
  longitudeAndLatitude: string
  /**
   * @description 登录手机号
   */
  mobilePhone: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 未接种疫苗原因
   */
  noVaccineReasonStr: string
  /**
   * @description 近七日是否有核酸检测 0是1否
   */
  nucleicAcidFlag: number
  nucleicAcidFlagStr: string
  operates: string[]
  operation: string
  /**
   * @description 家长联系方式
   */
  parentsPhone: string
  /**
   * @description 就诊医院
   */
  patientHospital: string
  /**
   * @description 省
   */
  province: string
  /**
   * @description 省编码
   */
  provinceCode: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
   */
  roommateHealthStatus: string
  /**
   * @description 共同居住人员健康情况
   */
  roommateHealthStatusStr: string
  rowId: number
  schoolCode: string
  schoolName: string
  /**
   * @description 专业
   */
  specialities: string
  /**
   * @description 专业编码
   */
  specialitiesCode: string
  specialitiesId: number
  /**
   * @description 今日体温
   */
  temperature: string
  /**
   * @description 今日下午体温
   */
  temperatureAfter: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  /**
   * @description 更新时间 yyyy-MM-dd HH:mm:ss
   */
  updateTimeStr: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineOneTime: string
  /**
   * @description 疫苗接种情况
   */
  vaccineStatusStr: string
  /**
   * @description 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineThreeTime: string
  /**
   * @description 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineTwoTime: string
}
export type MarketingSchoolUserVO = {
  /**
   * @description 楼栋
   */
  building: string
  classId: number
  /**
   * @description 班级
   */
  className: string
  /**
   * @description 查询日期 yyyy-MM-dd
   */
  createDate: string
  /**
   * @description 院系/部门
   */
  department: string
  departmentId: number
  /**
   * @description 学历 1研究生2本科3大专4中专5高中6中学7小学8幼儿园
   */
  eduBg: string
  /**
   * @description 学历
   */
  eduBgStr: string
  /**
   * @description 招生年份（年级）
   */
  entranceYear: number
  /**
   * @description 拓展字段
   */
  extField: string
  /**
   * @description 房间号
   */
  floor: string
  /**
   * @description 是否全日制 0是1否
   */
  fullTimeFlag: number
  /**
   * @description 全日制类型
   */
  fullTimeFlagStr: string
  hasTodayDetail: number
  hasTodayDetailExportStr: string
  /**
   * @description 今日是否打卡 0是1否
   */
  hasTodayDetailStr: string
  id: number
  identityType: number
  /**
   * @description 身份类型
   */
  identityTypeStr: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @value #datetime()
   * @description 最后打卡日期
   */
  lastDetailDate: string
  /**
   * @value #datetime()
   */
  lastDetailTime: string
  /**
   * @description 最后打卡时间
   */
  lastDetailTimeStr: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 未接种疫苗原因
   */
  noVaccineReasonStr: string
  operates: string[]
  operation: string
  /**
   * @description 备注
   */
  remark: string
  rowId: number
  schoolCode: string
  schoolName: string
  /**
   * @description 性别
   */
  sexStr: string
  /**
   * @description 专业
   */
  specialities: string
  specialitiesId: number
  /**
   * @description 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineOneTime: string
  /**
   * @description 疫苗接种情况
   */
  vaccineStatusStr: string
  /**
   * @description 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineThreeTime: string
  /**
   * @description 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineTwoTime: string
}
export type ModelAndView = {
  empty: boolean
  model: {}
  modelMap: {}
  reference: boolean
  /**
   * @value ["CONTINUE","SWITCHING_PROTOCOLS","PROCESSING","CHECKPOINT","OK","CREATED","ACCEPTED","NON_AUTHORITATIVE_INFORMATION","NO_CONTENT","RESET_CONTENT","PARTIAL_CONTENT","MULTI_STATUS","ALREADY_REPORTED","IM_USED","MULTIPLE_CHOICES","MOVED_PERMANENTLY","FOUND","MOVED_TEMPORARILY","SEE_OTHER","NOT_MODIFIED","USE_PROXY","TEMPORARY_REDIRECT","PERMANENT_REDIRECT","BAD_REQUEST","UNAUTHORIZED","PAYMENT_REQUIRED","FORBIDDEN","NOT_FOUND","METHOD_NOT_ALLOWED","NOT_ACCEPTABLE","PROXY_AUTHENTICATION_REQUIRED","REQUEST_TIMEOUT","CONFLICT","GONE","LENGTH_REQUIRED","PRECONDITION_FAILED","PAYLOAD_TOO_LARGE","REQUEST_ENTITY_TOO_LARGE","URI_TOO_LONG","REQUEST_URI_TOO_LONG","UNSUPPORTED_MEDIA_TYPE","REQUESTED_RANGE_NOT_SATISFIABLE","EXPECTATION_FAILED","I_AM_A_TEAPOT","INSUFFICIENT_SPACE_ON_RESOURCE","METHOD_FAILURE","DESTINATION_LOCKED","UNPROCESSABLE_ENTITY","LOCKED","FAILED_DEPENDENCY","TOO_EARLY","UPGRADE_REQUIRED","PRECONDITION_REQUIRED","TOO_MANY_REQUESTS","REQUEST_HEADER_FIELDS_TOO_LARGE","UNAVAILABLE_FOR_LEGAL_REASONS","INTERNAL_SERVER_ERROR","NOT_IMPLEMENTED","BAD_GATEWAY","SERVICE_UNAVAILABLE","GATEWAY_TIMEOUT","HTTP_VERSION_NOT_SUPPORTED","VARIANT_ALSO_NEGOTIATES","INSUFFICIENT_STORAGE","LOOP_DETECTED","BANDWIDTH_LIMIT_EXCEEDED","NOT_EXTENDED","NETWORK_AUTHENTICATION_REQUIRED"]
   */
  status: string
  view: View
  viewName: string
}
export type OperationLogVO = {
  /**
   * @value #datetime()
   * @description 时间
   */
  activeTime: string
  /**
   * @description 项目名称
   */
  appName: string
  /**
   * @description 改变的数据
   */
  dataChanges: string
  dataId: {}
  /**
   * @description 主键
   */
  id: number
  /**
   * @description ip
   */
  ip: string
  /**
   * @description 操作类型
   */
  operationType: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description sessionId
   */
  sessionId: string
  /**
   * @description 表名
   */
  tableName: string
  /**
   * @description url
   */
  url: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 用户姓名
   */
  userName: string
}
export type PageResultApiElectricAreaVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: ApiElectricAreaVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultApiElectricBuildingVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: ApiElectricBuildingVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultApiElectricFloorVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: ApiElectricFloorVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultApiElectricRoomVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: ApiElectricRoomVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultApiPayCenterListVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: ApiPayCenterListVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultApiQueryOrderPageVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: ApiQueryOrderPageVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultAppJiaofeiListStatVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: AppJiaofeiListStatVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultAppJiaofeiPayListVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: AppJiaofeiPayListVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultAppJiaofeiProjectStatVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: AppJiaofeiProjectStatVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultAuthOrgVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: AuthOrgVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultAuthWechatmsgPushApiVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: AuthWechatmsgPushApiVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultAuthWechatmsgSchoolApiVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: AuthWechatmsgSchoolApiVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultBaseDataDO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: BaseDataDO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultBillMonthReportInfoVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: BillMonthReportInfoVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultBillReportInfoVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: BillReportInfoVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultBillReportVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: BillReportVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterCpBillDetailVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterCpBillDetailVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterCpBillPayTypeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterCpBillPayTypeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterCustomConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterCustomConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterIndexTotalDataVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterIndexTotalDataVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiBatchRefundFormVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiBatchRefundFormVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiBatchRefundVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiBatchRefundVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiBillTemplateVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiBillTemplateVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiBillVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiBillVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiDeptVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiDeptVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiDictionaryVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiDictionaryVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiInvoiceCodeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiInvoiceCodeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiInvoiceInfoDO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiInvoiceInfoDO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiInvoiceInfoVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiInvoiceInfoVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiInvoiceOrderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiInvoiceOrderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiInvoiceTypeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiInvoiceTypeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiListVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiListVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiOrderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiOrderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiOrderVO_1 = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiOrderVO_1[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiPermissionsVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiPermissionsVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiProBatchVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiProBatchVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiProjectTypeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiProjectTypeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiProjectVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiProjectVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiRefundVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiRefundVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiReportExportVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiReportExportVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterJiaofeiTypeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterJiaofeiTypeVO_1[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterNetOperatorVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterNetOperatorVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterNetPackageVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterNetPackageVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterNetZoneVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterNetZoneVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterOrderNetVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterOrderNetVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterOrderSpecialVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterOrderSpecialVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterOrderStatsVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterOrderStatsVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterPincardVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterPincardVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSchoolAreaVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSchoolAreaVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSchoolBuildingVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSchoolBuildingVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSchoolFloorVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSchoolFloorVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSchoolJiaofeiProjectVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSchoolJiaofeiProjectVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSchoolRoomUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSchoolRoomUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSchoolRoomVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSchoolRoomVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSpecialConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSpecialConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSysSchoolVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSysSchoolVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSysUserSchoolListVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSysUserSchoolListVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterSysUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterSysUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterTaskVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterTaskVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCenterUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CenterUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusArticleFaqVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusArticleFaqVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusAssociationActivityTypeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusAssociationActivityTypeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusAssociationActivityUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusAssociationActivityUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusAssociationActivityVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusAssociationActivityVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusAssociationBannerVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusAssociationBannerVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusAssociationUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusAssociationUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusAssociationVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusAssociationVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusPushResponse = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusPushResponse[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusTagsResponse = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusTagsResponse[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultCompusTagsVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: CompusTagsVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultDonateItemVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: DonateItemVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultDonateOrderClientVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: DonateOrderClientVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultDonateUserOrderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: DonateUserOrderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultDonateUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: DonateUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultFrontSchoolBuildingVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: FrontSchoolBuildingVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultFrontSchoolFloorVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: FrontSchoolFloorVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultFrontSchoolRoomVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: FrontSchoolRoomVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKayRoadWaterOrderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KayRoadWaterOrderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKtClassTeacherVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KtClassTeacherVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKtClassVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KtClassVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKtGradeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KtGradeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKtStudentVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KtStudentVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKtTeacherVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KtTeacherVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultKtUserIdentityVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: KtUserIdentityVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultLsCheckerVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: LsCheckerVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultMarketingDutyUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: MarketingDutyUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultMarketingFormApplyVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: MarketingFormApplyVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultMarketingFormVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: MarketingFormVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultMarketingSchoolUserNewVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: MarketingSchoolUserNewVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultMarketingSchoolUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: MarketingSchoolUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultOperationLogVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: OperationLogVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultPlatformEacctOpenApplyVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: PlatformEacctOpenApplyVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSchoolCenterImportRecordVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SchoolCenterImportRecordVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSelectResult = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SelectResult[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSelectResult_1 = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SelectResult_1[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSfCampusSceneryTypeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SfCampusSceneryTypeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSfCampusSceneryVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SfCampusSceneryVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSfUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SfUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSubsidyItemListVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SubsidyItemListVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSubsidyItemVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SubsidyItemVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSubsidyNoticeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SubsidyNoticeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSubsidyPushRecordVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SubsidyPushRecordVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultSubsidySubItemVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: SubsidySubItemVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpCpAccountVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpCpAccountVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpCpMainVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpCpMainVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpCpVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpCpVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpRedbagAccountVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpRedbagAccountVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpRedbagBalanceVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpRedbagBalanceVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpRedbagBillVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpRedbagBillVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpRedbagConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpRedbagConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpRedbagNodeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpRedbagNodeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpRedbagVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpRedbagVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultUpUserRedbagVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: UpUserRedbagVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnAcceptanceLetterVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnAcceptanceLetterVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnApplicationConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnApplicationConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnBaseConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnBaseConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnBatchVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnBatchVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnBuildingVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnBuildingVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnDeviceVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnDeviceVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnFloorVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnFloorVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnFormTitleVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnFormTitleVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnFormUserVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnFormUserVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnGenerateStudentNoVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnGenerateStudentNoVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnHallApplicationConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnHallApplicationConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnHallProcessConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnHallProcessConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnInClassVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnInClassVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnInStudentVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnInStudentVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnOpenBankCardVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnOpenBankCardVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnPayConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnPayConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnProcessConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnProcessConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnProcessCountTableHeaderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnProcessCountTableHeaderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnProductAndPicVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnProductAndPicVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnReceiveOrderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnReceiveOrderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnRoomFeeConfigVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnRoomFeeConfigVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnRoomTreeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnRoomTreeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnRoomVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnRoomVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSchoolOrganizationTreeVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSchoolOrganizationTreeVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSchoolOrganizationVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSchoolOrganizationVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSchoolZoneVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSchoolZoneVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSelectPhoneOperatorVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSelectPhoneOperatorVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSelectPhoneOrderVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSelectPhoneOrderVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSelectPhonePackageVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSelectPhonePackageVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnSelectPhoneVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnSelectPhoneVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentBaseApiVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentBaseApiVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentImportVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentImportVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentInCountVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentInCountVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentLatestRegisterVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentLatestRegisterVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentProcessDetailVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentProcessDetailVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentRegisterBaseApiVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentRegisterBaseApiVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentReportNumCountVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentReportNumCountVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentReportSexCountVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentReportSexCountVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentToClassOrganizationVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentToClassOrganizationVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentToClassVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentToClassVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnStudentTrafficCountVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnStudentTrafficCountVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnTeacherAppRoleVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnTeacherAppRoleVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnTeacherAppUserApiVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnTeacherAppUserApiVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnUnitVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnUnitVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultWnZoneRoomApiVO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: WnZoneRoomApiVO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultobject = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  rows: {}[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResultstring = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  rows: string[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult健康状况日报VO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 健康状况日报VO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult健康状况登记VO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 健康状况登记VO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult健康状况登记地区统计VOroute = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 健康状况登记地区统计VOroute[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult健康状况登记地区统计VO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 健康状况登记地区统计VO_1[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult手抄表账单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    alertType: number
    bizCode: string
    data: {}
    message: string
    /**
     * @value 2
     */
    rows: 手抄表账单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息[]
    statusCode: number
    success: boolean
    total: number
  }
export type PageResult支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    alertType: number
    bizCode: string
    data: {}
    message: string
    /**
     * @value 2
     */
    rows: 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息[]
    statusCode: number
    success: boolean
    total: number
  }
export type PageResult支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息_1 =
  {
    alertType: number
    bizCode: string
    data: {}
    message: string
    /**
     * @value 2
     */
    rows: 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息_1[]
    statusCode: number
    success: boolean
    total: number
  }
export type PageResult文章返回参数 = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 文章返回参数[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult校区查询 = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 校区查询[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult用户角色VO = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 用户角色VO[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult轮播图表返回数据参数 = {
  alertType: number
  bizCode: string
  data: {}
  message: string
  /**
   * @value 2
   */
  rows: 轮播图表返回数据参数[]
  statusCode: number
  success: boolean
  total: number
}
export type PageResult退款订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    alertType: number
    bizCode: string
    data: {}
    message: string
    /**
     * @value 2
     */
    rows: 退款订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息[]
    statusCode: number
    success: boolean
    total: number
  }
export type PlatformEacctOpenApplyVO = {
  applyFrom: string
  /**
   * @description 用户id
   */
  corpCisNo: string
  /**
   * @value #datetime()
   * @description 申请时间
   */
  createTime: string
  /**
   * @description 户名
   */
  custName: string
  /**
   * @description 性别,1男，2女
   */
  gender: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 二类账号
   */
  mediumId: string
  /**
   * @description 手机号码
   */
  mobileNo: string
  platform: string
  platformName: string
  /**
   * @description 错误提示
   */
  remark: string
  /**
   * @description 账户状态，1申请中，2受理成功,3开户（绑卡）成功，4开户（绑卡）失败
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
  /**
   * @value #datetime()
   * @description 绑定时间
   */
  updateTime: string
}
export type RedBagExtendVO = {
  /**
   * @description 红包金额，单位分
   */
  activityRedbagAmount: number
  /**
   * @description 红包领取时间
   */
  createTime: string
  /**
   * @description 是否是新领红包\n 0:是  1：否
   */
  isNew: number
  /**
   * @description 红包金额，单位分
   */
  redbagAmount: number
  /**
   * @description 使用红包的最低消费金额
   */
  redbagMinPayment: number
  /**
   * @description 红包名称
   */
  redbagName: string
  /**
   * @description 红包使用说明，注意说明中的换行使用的是\n，请根据实际情况替换
   */
  redbagRemark: string
  /**
   * @description 领红包类型\n 1:开户红包
   */
  type: number
}
export type SchoolCenterImportRecordVO = {
  createMobilePhone: string
  createName: string
  createNickName: string
  /**
   * @value #datetime()
   */
  createTime: string
  id: number
  importNumber: number
  schoolCode: string
  schoolName: string
  type: number
  typeStr: string
}
export type SelectResult = {
  /**
   * @description key
   */
  id: string
  /**
   * @description value
   */
  text: string
  /**
   * @description url
   */
  url: string
}
export type SelectResult_1 = {
  /**
   * @description key
   */
  id: string
  /**
   * @description value
   */
  text: string
}
export type SfCampusSceneryTypeVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  id: number
  operates: string[]
  operation: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  statusStr: string
  /**
   * @description 分类名称
   */
  typeName: string
  /**
   * @description 排序
   */
  typeSort: number
  /**
   * @value #datetime()
   */
  updateTime: string
  updateTimeStr: string
}
export type SfCampusSceneryVO = {
  content: string
  createId: number
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 图片，逗号隔开
   */
  images: string
  operates: string[]
  operation: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0禁用 1启用
   */
  status: number
  statusStr: string
  /**
   * @description 标题
   */
  title: string
  /**
   * @description 分类id
   */
  typeId: number
  /**
   * @description 分类名称
   */
  typeName: string
  updateId: number
  updateName: string
  /**
   * @value #datetime()
   */
  updateTime: string
  updateTimeStr: string
}
export type SfUserVO = {
  /**
   * @description 地区详情
   */
  address: string
  /**
   * @description 地区代码
   */
  areaCode: string
  /**
   * @description 地区名称
   */
  areaName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 院系
   */
  department: string
  /**
   * @description 学历
   */
  education: string
  /**
   * @description 入学年份
   */
  enrollmentYear: number
  id: number
  /**
   * @description 是否实名认证 0否 1是
   */
  isRealNameAuth: number
  /**
   * @description 邮箱
   */
  mail: string
  /**
   * @description 手机号
   */
  mobile: string
  operates: string[]
  operation: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 校内身份类型 1学生 2教职工 4家长 8校友
   */
  schoolIdentityType: number
  schoolName: string
  /**
   * @description 专业
   */
  specialities: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  /**
   * @description 学校编码
   */
  userId: number
  /**
   * @description 学校名称
   */
  userName: string
}
export type SubsidyItemListTotalMoneyVO = {
  /**
   * @description 项目名称
   */
  itemName: string
  /**
   * @description 金额
   */
  money: number
  moneyStr: string
  /**
   * @description 总人数
   */
  userCount: number
}
export type SubsidyItemListVO = {
  /**
   * @description 清分账户ID
   */
  accountId: number
  /**
   * @description 绑定状态： 0-已绑定， 1-未绑定
   */
  authStatus: number
  authStatusName: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 院系部门
   */
  departmentName: string
  /**
   * @description 提现状态
   */
  extractStatusStr: string
  /**
   * @description 提现时间
   */
  extractTime: string
  /**
   * @description 提现类型 1:手动提现 2:自动提现
   */
  extractType: number
  extractTypeStr: string
  /**
   * @description 失败原因
   */
  failMsg: string
  /**
   * @description 发放类型
   */
  grantType: number
  grantTypeName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份证
   */
  identityId: string
  /**
   * @description 项目id
   */
  itemId: number
  /**
   * @description 项目名称
   */
  itemName: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业
   */
  majorName: string
  /**
   * @description 金额
   */
  money: number
  moneyStr: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 付款通知书id
   */
  noticeId: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 手机号
   */
  phone: string
  /**
   * @description 打款流水号
   */
  remitNo: string
  /**
   * @description 打款状态 0:未打款 1:待打款 2:打款中 3:打款成功 4:打款失败
   */
  remitStatus: number
  remitStatusStr: string
  /**
   * @description 打款时间
   */
  remitTime: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 来源
   */
  source: string
  sourceStr: string
  /**
   * @description 状态，1启用，0禁用
   */
  status: number
  statusStr: string
  /**
   * @description 项目批次id
   */
  subItemId: number
  /**
   * @description 订单号
   */
  subOrderNo: string
  /**
   * @description 第三方id
   */
  thirdId: string
  /**
   * @description 转账记录id
   */
  transferId: string
  /**
   * @description 用户id
   */
  userId: number
}
export type SubsidyItemVO = {
  /**
   * @description 学校账户id
   */
  accountId: number
  /**
   * @description 支付宝账号
   */
  alipayAccountNo: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 发放类型
   */
  grantType: number
  grantTypeName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 项目总人数
   */
  itemDetailSum: number
  /**
   * @description 项目总金额
   */
  itemMoney: number
  itemMoneyStr: string
  /**
   * @description 打款项名称
   */
  itemName: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 来源
   */
  source: string
  sourceStr: string
  /**
   * @description 状态，1启用，0禁用
   */
  status: number
  statusStr: string
  /**
   * @description 清分系统id
   */
  stlId: string
  /**
   * @description 打款成功总金额
   */
  successDetailAmount: number
  successDetailAmountStr: string
  /**
   * @description 打款成功人数
   */
  successDetailSum: number
  /**
   * @description 是否支持导入名单 0:是 1:否
   */
  supportImport: number
  supportImportStr: string
}
export type SubsidyNoticeVO = {
  /**
   * @description 账号
   */
  account: string
  /**
   * @description 审核人
   */
  auditor: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 用款部门
   */
  department: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 通知书标题
   */
  noticeTitle: string
  /**
   * @description 开户银行
   */
  openBank: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 经办人
   */
  operator: string
  /**
   * @description 单位名称
   */
  orgName: string
  /**
   * @description 人数
   */
  payCount: number
  /**
   * @description 付款金额
   */
  payMoney: number
  /**
   * @description 金额大写
   */
  payMoneyChinese: string
  payMoneyStr: string
  /**
   * @description 款项用途
   */
  payPurpose: string
  /**
   * @value #datetime()
   * @description 付款时间
   */
  payTime: string
  /**
   * @description 付款方式 1:电汇 2:承诺 3:转支 4:现金
   */
  payType: number
  payTypeStr: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 打款状态 1:待打款 3:提交成功
   */
  remitStatus: number
  remitStatusStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态，1启用，0禁用
   */
  status: number
  statusStr: string
}
export type SubsidyPushRecordVO = {
  /**
   * @description 内容
   */
  content: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 项目名称
   */
  itemName: string
  /**
   * @description 打款状态 0:全部 1:未打款 2:打款中 3:已打款
   */
  itemType: number
  /**
   * @description 打款状态 0:全部 1:未打款 2:打款中 3:已打款
   */
  itemTypeStr: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 人数
   */
  pushNum: number
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 标题
   */
  title: string
}
export type SubsidySubItemVO = {
  /**
   * @description 外部批次号
   */
  batchTransId: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @value #datetime()
   * @description 失效时间
   */
  expireTime: string
  expireTimeStr: string
  grantType: number
  /**
   * @description 打款方式
   */
  grantTypeName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 所属项目
   */
  itemName: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 支付链接
   */
  payUrl: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态
   */
  status: number
  statusName: string
  /**
   * @description 订单标题
   */
  subName: string
  /**
   * @description 订单号
   */
  subOrderNo: string
  /**
   * @description 成功总金额
   */
  successAmount: number
  successAmountStr: string
  /**
   * @description 成功人数
   */
  successSum: number
  /**
   * @description 总金额
   */
  totalAmount: number
  totalAmountStr: string
  /**
   * @description 总人数
   */
  totalSum: number
}
export type SysMenuVO = {
  /**
   * @value 2
   */
  childMenus: SysMenuVO[]
  code: string
  fatherId: number
  flag: number
  id: number
  isMenu: number
  isMenuStr: string
  menuLevel: number
  name: string
  operates: string[]
  platformCode: string
  platformCodeStr: string
  sort: number
  url: string
}
export type Type = {
  typeName: string
}
export type UpCpAccountVO = {
  /**
   * @description 账号名称
   */
  accountName: string
  /**
   * @description 服务商code
   */
  channelCode: string
  /**
   * @description 服务商
   */
  channelName: string
  /**
   * @description 主商户id
   */
  cpMainId: number
  /**
   * @description 主商户名称
   */
  cpMainName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  id: number
  operates: string[]
  operation: string
  payTypeList: {}[]
  /**
   * @description 付款方式
   */
  payTypes: string
  /**
   * @description 结算费率
   */
  settleFee: string
  /**
   * @description 状态 1启用，0禁用
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type UpCpMainVO = {
  /**
   * @description 一卡通密钥
   */
  cardKey: string
  /**
   * @description 商户名称
   */
  cpName: string
  /**
   * @description 商户类型
   */
  cpTypeName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  id: number
  /**
   * @description 联系地址
   */
  linkAddress: string
  /**
   * @description 联系电话
   */
  linkPhone: string
  /**
   * @description 联系人
   */
  linkUser: string
  operates: string[]
  operation: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 状态 1启用，0禁用
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
}
export type UpCpVO = {
  /**
   * @description 一卡通商户号
   */
  cardPartner: string
  /**
   * @description 商户使用收款账号id
   */
  cpAccountId: number
  /**
   * @description 商户使用收款账号名称
   */
  cpAccountName: string
  /**
   * @description 商户编码
   */
  cpCode: string
  /**
   * @description 主商户id
   */
  cpMainId: number
  /**
   * @description 主商户名称
   */
  cpMainName: string
  /**
   * @description 商户名称
   */
  cpName: string
  /**
   * @description 状态，1启用，0禁用
   */
  cpState: number
  /**
   * @description 状态名称
   */
  cpStateName: string
  /**
   * @description 商户类型
   */
  cpTypeName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 商户是否支持易校园钱包
   */
  eacctEnable: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 联系地址
   */
  linkAddress: string
  /**
   * @description 联系电话
   */
  linkPhone: string
  /**
   * @description 联系人
   */
  linkUser: string
  operates: string[]
  operation: string
  /**
   * @description 商户是否支持红包
   */
  redbagEnable: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 签名密钥
   */
  signKey: string
  /**
   * @value 2
   * @description 收款账户
   */
  upCpAccountVOList: UpCpAccountVO[]
}
export type UpRedbagAccountVO = {
  /**
   * @description 收款账号
   */
  account: string
  /**
   * @description 收款账号名称
   */
  accountName: string
  /**
   * @description 地区编码
   */
  areaCode: string
  /**
   * @description 开户城市
   */
  city: string
  /**
   * @description cpcode
   */
  cpCode: string
  /**
   * @description 主商户
   */
  cpMainName: string
  /**
   * @description 商户
   */
  cpName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  id: number
  /**
   * @description 收款账户短信通知手机
   */
  mobileNo: string
  /**
   * @description 自定义序号
   */
  num: number
  /**
   * @description 开户行
   */
  openBank: string
  operates: string[]
  operation: string
  /**
   * @description 开户省份
   */
  province: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type UpRedbagBalanceVO = {
  /**
   * @description 红包余额
   */
  balance: number
  /**
   * @description 红包余额
   */
  balanceYuan: string
  /**
   * @description 主商户名称
   */
  cpMainName: string
  /**
   * @value #datetime()
   * @description 首次领取时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 手机号码
   */
  mobileNo: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 姓名
   */
  userName: string
}
export type UpRedbagBillVO = {
  /**
   * @description 结算总金额
   */
  amount: number
  /**
   * @description 结算总金额
   */
  amountYuan: string
  /**
   * @description 日期
   */
  billDate: string
  /**
   * @description 文件编码
   */
  billNo: string
  /**
   * @description 商户名称
   */
  cpMainName: string
  /**
   * @description 子商户名称
   */
  cpName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 导出时间
   */
  exportTime: string
  id: number
  /**
   * @description 是否已导出
   */
  isExportName: string
  isRemitName: string
  operates: string[]
  operation: string
  remark: string
  /**
   * @value #datetime()
   */
  remitTime: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type UpRedbagConfigVO = {
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @value #datetime()
   * @description 截止时间
   */
  finishTime: string
  id: number
  /**
   * @description 用户峰值
   */
  maxMoney: number
  /**
   * @description 活动名称
   */
  name: string
  operates: string[]
  operation: string
  /**
   * @description 支付方式名称
   */
  payTypeName: string
  /**
   * @value 2
   * @description 发放红包节点
   */
  redbagNodeVOList: UpRedbagNodeVO[]
  /**
   * @value 2
   * @description 配置红包
   */
  redbagVOList: UpRedbagVO[]
  /**
   * @description 状态 0启用，1禁用，2已结束
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
  /**
   * @description 总金额
   */
  totalMoney: number
  /**
   * @description 总数量
   */
  totalNum: number
  /**
   * @description 折扣方式 1:单个红包抵扣 2:复合红包抵扣
   */
  type: number
  /**
   * @description 类别名称
   */
  typeName: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type UpRedbagNodeVO = {
  check: boolean
  /**
   * @description 编码
   */
  code: string
  cpInfoStr: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  disable: boolean
  id: number
  /**
   * @description 名称
   */
  name: string
  operates: string[]
  operation: string
  /**
   * @description 使用范围，1:全场通用红包，2:指定商户红包
   */
  rangeType: number
  /**
   * @description 使用范围
   */
  rangeTypeName: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusName: string
  /**
   * @description 类别
   */
  type: number
  /**
   * @description 类别
   */
  typeName: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  userId: number
}
export type UpRedbagVO = {
  alarmAmount: number
  alarmMobile: string
  /**
   * @description 金额区间开始
   */
  amountFrom: number
  /**
   * @description 金额区间开始
   */
  amountFromStr: string
  /**
   * @description 金额区间结束
   */
  amountTo: number
  /**
   * @description 金额区间结束
   */
  amountToStr: string
  code: string
  configId: number
  configName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @value #datetime()
   * @description 截止时间
   */
  finishTime: string
  /**
   * @description 规则id
   */
  id: number
  /**
   * @description 每人限领取数量
   */
  maxNum: number
  /**
   * @description 最低消费金额
   */
  minPayment: number
  /**
   * @description 红包名称
   */
  name: string
  operates: string[]
  operation: string
  /**
   * @description 红包使用范围名称
   */
  rangeTypeName: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 红包活动状态，0禁用，1启用，2已结束
   */
  status: number
  statusName: string
  /**
   * @description 总金额
   */
  totalAmount: number
  /**
   * @description 总发放数量
   */
  totalNum: number
  /**
   * @description 红包类型
   */
  type: number
  /**
   * @description 红包类型名称
   */
  typeName: string
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  /**
   * @description 已发放金额
   */
  useAmount: number
  /**
   * @description 已发放金额
   */
  useAmountYuan: string
  /**
   * @description 已发放红包数量
   */
  useNum: number
  /**
   * @description 有效时间天数
   */
  validDays: number
}
export type UpUserRedbagVO = {
  /**
   * @description 红包金额
   */
  amount: number
  /**
   * @description 红包金额
   */
  amountYuan: string
  cpMainName: string
  /**
   * @description 创建人
   */
  createName: string
  /**
   * @value #datetime()
   * @description 领取时间
   */
  createTime: string
  /**
   * @description 红包id
   */
  id: number
  /**
   * @value #datetime()
   * @description 红包有效期截止
   */
  invalidTime: string
  /**
   * @description 用户手机
   */
  mobileNo: string
  operates: string[]
  operation: string
  /**
   * @description 红包发放渠道
   */
  platform: string
  /**
   * @description 红包使用范围名称
   */
  rangeTypeName: string
  /**
   * @description 发放节点
   */
  redbagName: string
  /**
   * @description 说明
   */
  remark: string
  /**
   * @description 红包状态，0未使用，1已使用，2已过期
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
  type: number
  /**
   * @description 更新人
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  /**
   * @description 使用商户名称
   */
  useCpName: string
  /**
   * @value #datetime()
   * @description 使用时间
   */
  useTime: string
  /**
   * @description 使用的订单
   */
  useTranNo: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 姓名
   */
  userName: string
}
export type UserOrganizationDepartVO = {
  /**
   * @value 2
   * @description 子集
   */
  childList: UserOrganizationDepartVO[]
  /**
   * @description 权限id
   */
  departId: string
  /**
   * @description 权限名称
   */
  departName: string
  /**
   * @description 部门类型 1学生2教职工
   */
  departType: string
  /**
   * @description 是否选中 0选中 1不选中
   */
  isChecked: number
}
export type View = {
  contentType: string
}
export type WNWitnessCheckParamNew = {
  addTime: string
  address: string
  birth: string
  department: string
  deviceId: string
  deviceMac: string
  faceImageBase64: string
  idCard: string
  idCardType: string
  idImgBase64: string
  name: string
  nation: string
  score: string
  sex: string
  validEndDate: string
  validStartDate: string
  verifyResult: string
  vernsionCode: string
}
export type WnAcceptanceLetterVO = {
  address: string
  addressee: string
  courierNumber: string
  expressCompany: string
  id: number
  identityId: string
  noticeStatus: number
  noticeStatusStr: string
  operates: string[]
  phone: string
  recruitYear: string
  semester: number
  semesterStr: string
  studentName: string
}
export type WnApplicationConfigVO = {
  /**
   * @description 应用链接
   */
  applicationUrl: string
  /**
   * @description 应用编码
   */
  code: string
  /**
   * @description 创建姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 是否默认应用：0-是，1-否
   */
  defaultFlag: number
  defaultFlagName: string
  /**
   * @description 删除状态 0未删除 1删除
   */
  deleteFlag: number
  /**
   * @description 应用显示名称
   */
  displayName: string
  /**
   * @description 显示端口
   */
  displayType: number
  displayTypeName: string
  /**
   * @description 表单id
   */
  formId: number
  /**
   * @description 图标
   */
  iconUrl: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 应用名称
   */
  name: string
  /**
   * @description 开启条件
   */
  openCondition: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 排序
   */
  sort: number
  /**
   * @description 类型：1-平台，2-学校
   */
  source: number
  sourceName: string
  /**
   * @description 状态
   */
  status: number
  statusName: string
  /**
   * @description 类型;1自定义表单, 2链接类型
   */
  type: number
  /**
   * @description 更新姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type WnBaseConfigVO = {
  /**
   * @description 招生结束时间
   */
  admissionsEnd: string
  /**
   * @description 招生开始时间
   */
  admissionsStart: string
  /**
   * @description 地区编码
   */
  areaCode: string
  /**
   * @description 地区展示类型 0:全国 1:省份
   */
  areaViewType: number
  /**
   * @description 颜色
   */
  color: string
  id: number
  /**
   * @description 经纬度
   */
  location: string
  /**
   * @description 公告
   */
  notice: string
  operates: string[]
  /**
   * @description 图片
   */
  picture: string
  /**
   * @description 提示
   */
  prompt: string
  /**
   * @description 学校简称
   */
  schoolAbbreviation: string
  schoolCode: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 视图展示json
   */
  viewEnableJson: string
}
export type WnBatchVO = {
  /**
   * @value #datetime()
   * @description 招生结束时间
   */
  admissionsEnd: string
  /**
   * @value #datetime()
   * @description 招生开始时间
   */
  admissionsStart: string
  /**
   * @description 当前状态 1未开始, 2进行中, 3已完成
   */
  batchStatus: number
  batchStatusStr: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 是否默认 0-是，1-否
   */
  isDefault: number
  isDefaultStr: string
  /**
   * @description 批次名称
   */
  name: string
  /**
   * @description 纳新人数
   */
  num: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 备注
   */
  remarks: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type WnBuildingVO = {
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 入住人数
   */
  checkInNumber: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态名
   */
  statusStr: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnDeviceCheckInfoVO = {
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 院系名称
   */
  departName: string
  /**
   * @description 民族
   */
  ethnic: string
  /**
   * @description 身份证号
   */
  idCard: string
  /**
   * @description 缴费状态(0-未缴费,1-部分缴费，2-全部缴费)
   */
  jiaofeiStatus: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 性别 1男，2女
   */
  sex: number
  /**
   * @description 登记状态(0-未登记,1-已登记)
   */
  signStatus: number
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnDeviceVO = {
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 设备id编码
   */
  deviceCode: string
  /**
   * @description 设备型号
   */
  deviceModel: string
  /**
   * @description 设备名称
   */
  deviceName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 设备主管人员
   */
  manageName: string
  /**
   * @description 设备主管人员电话
   */
  managePhone: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
}
export type WnFloorApiVO = {
  /**
   * @description 楼栋Id
   */
  buildingId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 楼层ID
   */
  id: number
  /**
   * @value 2
   * @description 房间列表
   */
  roomList: 迎新房间[]
}
export type WnFloorVO = {
  /**
   * @description 楼栋Id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnFormTitleVO = {
  /**
   * @description 启用/禁用：true-禁用，false-启用
   */
  disabled: boolean
  /**
   * @description 字段固定：left, right
   */
  fixed: string
  /**
   * @description 列表头是否隐藏：true-隐藏，false-不隐藏
   */
  hideInTable: boolean
  /**
   * @description 旧的唯一标识字段
   */
  oldUniqueField: string
  /**
   * @description 旧的唯一标识字段标题
   */
  oldUniqueFieldTitle: string
  /**
   * @description 选项内容
   */
  options: string
  /**
   * @description 原字段
   */
  originalField: string
  /**
   * @description 是否必填：0-必填，1-非必填
   */
  required: number
  /**
   * @description 标准字段
   */
  standardField: string
  /**
   * @description 列表标题
   */
  title: string
  /**
   * @description 字段类型: 单选Radio，图片Picture，填空Input，多选Checkbox，下拉Picker，日期DatePicker
   */
  type: string
  /**
   * @description 是否唯一标识：0-是，1-否
   */
  uniqueFlag: number
  /**
   * @description 值展示字段
   */
  valueField: string
}
export type WnFormUserApiVO = {
  /**
   * @description 详细地址
   */
  address: string
  /**
   * @description 是否调剂：0-是，1-否
   */
  adjustFlag: number
  adjustFlagName: string
  /**
   * @description 准考生号
   */
  admissionNo: string
  /**
   * @description 年龄
   */
  age: number
  /**
   * @description 区编码
   */
  areaCode: string
  /**
   * @description 区名称
   */
  areaName: string
  /**
   * @value #datetime()
   * @description 生日
   */
  birthday: string
  birthdayStr: string
  /**
   * @description 业务编码
   */
  bizCode: string
  /**
   * @description 业务ID
   */
  bizId: string
  /**
   * @description 证件类型
   */
  certificateType: string
  certificateTypeName: string
  /**
   * @description 市编码
   */
  cityCode: string
  /**
   * @description 市名称
   */
  cityName: string
  /**
   * @description 班级编码
   */
  classCode: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建人姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 删除状态 0 :正常 1 :删除
   */
  deleteFlag: number
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 学历
   */
  diploma: string
  diplomaName: string
  /**
   * @description 邮箱
   */
  email: string
  /**
   * @description 考生号
   */
  examNo: string
  /**
   * @description 考生类型
   */
  examineesType: string
  examineesTypeName: string
  /**
   * @description 字符串拓展字段1
   */
  extChar1: string
  /**
   * @description 字符串拓展字段10
   */
  extChar10: string
  /**
   * @description 字符串拓展字段11
   */
  extChar11: string
  /**
   * @description 字符串拓展字段12
   */
  extChar12: string
  /**
   * @description 字符串拓展字段13
   */
  extChar13: string
  /**
   * @description 字符串拓展字段14
   */
  extChar14: string
  /**
   * @description 字符串拓展字段15
   */
  extChar15: string
  /**
   * @description 字符串拓展字段16
   */
  extChar16: string
  /**
   * @description 字符串拓展字段17
   */
  extChar17: string
  /**
   * @description 字符串拓展字段18
   */
  extChar18: string
  /**
   * @description 字符串拓展字段19
   */
  extChar19: string
  /**
   * @description 字符串拓展字段2
   */
  extChar2: string
  /**
   * @description 字符串拓展字段20
   */
  extChar20: string
  /**
   * @description 字符串拓展字段21
   */
  extChar21: string
  /**
   * @description 字符串拓展字段22
   */
  extChar22: string
  /**
   * @description 字符串拓展字段23
   */
  extChar23: string
  /**
   * @description 字符串拓展字段24
   */
  extChar24: string
  /**
   * @description 字符串拓展字段25
   */
  extChar25: string
  /**
   * @description 字符串拓展字段26
   */
  extChar26: string
  /**
   * @description 字符串拓展字段27
   */
  extChar27: string
  /**
   * @description 字符串拓展字段28
   */
  extChar28: string
  /**
   * @description 字符串拓展字段29
   */
  extChar29: string
  /**
   * @description 字符串拓展字段3
   */
  extChar3: string
  /**
   * @description 字符串拓展字段30
   */
  extChar30: string
  /**
   * @description 字符串拓展字段31
   */
  extChar31: string
  /**
   * @description 字符串拓展字段32
   */
  extChar32: string
  /**
   * @description 字符串拓展字段33
   */
  extChar33: string
  /**
   * @description 字符串拓展字段34
   */
  extChar34: string
  /**
   * @description 字符串拓展字段35
   */
  extChar35: string
  /**
   * @description 字符串拓展字段36
   */
  extChar36: string
  /**
   * @description 字符串拓展字段37
   */
  extChar37: string
  /**
   * @description 字符串拓展字段38
   */
  extChar38: string
  /**
   * @description 字符串拓展字段39
   */
  extChar39: string
  /**
   * @description 字符串拓展字段4
   */
  extChar4: string
  /**
   * @description 字符串拓展字段40
   */
  extChar40: string
  /**
   * @description 字符串拓展字段41
   */
  extChar41: string
  /**
   * @description 字符串拓展字段42
   */
  extChar42: string
  /**
   * @description 字符串拓展字段43
   */
  extChar43: string
  /**
   * @description 字符串拓展字段44
   */
  extChar44: string
  /**
   * @description 字符串拓展字段45
   */
  extChar45: string
  /**
   * @description 字符串拓展字段46
   */
  extChar46: string
  /**
   * @description 字符串拓展字段47
   */
  extChar47: string
  /**
   * @description 字符串拓展字段48
   */
  extChar48: string
  /**
   * @description 字符串拓展字段49
   */
  extChar49: string
  /**
   * @description 字符串拓展字段5
   */
  extChar5: string
  /**
   * @description 字符串拓展字段50
   */
  extChar50: string
  /**
   * @description 字符串拓展字段51
   */
  extChar51: string
  /**
   * @description 字符串拓展字段52
   */
  extChar52: string
  /**
   * @description 字符串拓展字段53
   */
  extChar53: string
  /**
   * @description 字符串拓展字段54
   */
  extChar54: string
  /**
   * @description 字符串拓展字段55
   */
  extChar55: string
  /**
   * @description 字符串拓展字段56
   */
  extChar56: string
  /**
   * @description 字符串拓展字段57
   */
  extChar57: string
  /**
   * @description 字符串拓展字段58
   */
  extChar58: string
  /**
   * @description 字符串拓展字段59
   */
  extChar59: string
  /**
   * @description 字符串拓展字段6
   */
  extChar6: string
  /**
   * @description 字符串拓展字段60
   */
  extChar60: string
  /**
   * @description 字符串拓展字段61
   */
  extChar61: string
  /**
   * @description 字符串拓展字段62
   */
  extChar62: string
  /**
   * @description 字符串拓展字段63
   */
  extChar63: string
  /**
   * @description 字符串拓展字段64
   */
  extChar64: string
  /**
   * @description 字符串拓展字段65
   */
  extChar65: string
  /**
   * @description 字符串拓展字段66
   */
  extChar66: string
  /**
   * @description 字符串拓展字段67
   */
  extChar67: string
  /**
   * @description 字符串拓展字段68
   */
  extChar68: string
  /**
   * @description 字符串拓展字段69
   */
  extChar69: string
  /**
   * @description 字符串拓展字段7
   */
  extChar7: string
  /**
   * @description 字符串拓展字段70
   */
  extChar70: string
  /**
   * @description 字符串拓展字段71
   */
  extChar71: string
  /**
   * @description 字符串拓展字段72
   */
  extChar72: string
  /**
   * @description 字符串拓展字段73
   */
  extChar73: string
  /**
   * @description 字符串拓展字段74
   */
  extChar74: string
  /**
   * @description 字符串拓展字段75
   */
  extChar75: string
  /**
   * @description 字符串拓展字段76
   */
  extChar76: string
  /**
   * @description 字符串拓展字段77
   */
  extChar77: string
  /**
   * @description 字符串拓展字段78
   */
  extChar78: string
  /**
   * @description 字符串拓展字段79
   */
  extChar79: string
  /**
   * @description 字符串拓展字段8
   */
  extChar8: string
  /**
   * @description 字符串拓展字段80
   */
  extChar80: string
  /**
   * @description 字符串拓展字段9
   */
  extChar9: string
  /**
   * @value #datetime()
   * @description 日期拓展字段1
   */
  extDate1: string
  /**
   * @value #datetime()
   * @description 日期拓展字段10
   */
  extDate10: string
  /**
   * @value #datetime()
   * @description 日期拓展字段2
   */
  extDate2: string
  /**
   * @value #datetime()
   * @description 日期拓展字段3
   */
  extDate3: string
  /**
   * @value #datetime()
   * @description 日期拓展字段4
   */
  extDate4: string
  /**
   * @value #datetime()
   * @description 日期拓展字段5
   */
  extDate5: string
  /**
   * @value #datetime()
   * @description 日期拓展字段6
   */
  extDate6: string
  /**
   * @value #datetime()
   * @description 日期拓展字段7
   */
  extDate7: string
  /**
   * @value #datetime()
   * @description 日期拓展字段8
   */
  extDate8: string
  /**
   * @value #datetime()
   * @description 日期拓展字段9
   */
  extDate9: string
  /**
   * @description 家庭成员Json
   */
  familyMember: string
  /**
   * @description 表单编码
   */
  formCode: string
  /**
   * @description 表单ID
   */
  formId: number
  /**
   * @description 毕业学校
   */
  graduationSchool: string
  /**
   * @description 头像
   */
  headImg: string
  /**
   * @description 身高（cm）
   */
  height: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份号码
   */
  identityNo: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业编码
   */
  majorCode: string
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 民族
   */
  nation: string
  nationName: string
  /**
   * @description 籍贯(省份)
   */
  nativePlace: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 政治面貌
   */
  politicalStatus: string
  politicalStatusName: string
  /**
   * @description 邮政编码
   */
  postalCode: string
  /**
   * @description 省份编码
   */
  provinceCode: string
  /**
   * @description 省名称
   */
  provinceName: string
  /**
   * @description QQ号
   */
  qq: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 登记状态：0-已登记，1-未登记
   */
  registerStatus: number
  /**
   * @value #datetime()
   * @description 登记时间
   */
  registerTime: string
  /**
   * @description 宗教信仰
   */
  religion: string
  religionName: string
  /**
   * @description 报道码
   */
  reportCode: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分数
   */
  score: number
  /**
   * @description 性别
   */
  sex: number
  sexName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  statusName: string
  /**
   * @description 学生ID
   */
  studentId: number
  /**
   * @description 新生标题字段映射JSON
   */
  titleFieldMapping: string
  /**
   * @description 修改人id
   */
  updateId: number
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  updateTimeStr: string
  /**
   * @description 用户ID
   */
  userId: number
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 微信号
   */
  wechat: string
  /**
   * @description 体重（kg）
   */
  weight: string
}
export type WnFormUserVO = {
  /**
   * @description 详细地址
   */
  address: string
  /**
   * @description 是否调剂：0-是，1-否
   */
  adjustFlag: number
  adjustFlagName: string
  /**
   * @description 准考生号
   */
  admissionNo: string
  /**
   * @description 年龄
   */
  age: number
  /**
   * @description 区编码
   */
  areaCode: string
  /**
   * @description 区名称
   */
  areaName: string
  /**
   * @value #datetime()
   * @description 生日
   */
  birthday: string
  birthdayStr: string
  /**
   * @description 业务编码
   */
  bizCode: string
  /**
   * @description 业务ID
   */
  bizId: string
  /**
   * @description 证件类型
   */
  certificateType: string
  certificateTypeName: string
  /**
   * @description 市编码
   */
  cityCode: string
  /**
   * @description 市名称
   */
  cityName: string
  /**
   * @description 班级编码
   */
  classCode: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建人姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 删除状态 0 :正常 1 :删除
   */
  deleteFlag: number
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 学历
   */
  diploma: string
  diplomaName: string
  /**
   * @description 邮箱
   */
  email: string
  /**
   * @description 考生号
   */
  examNo: string
  /**
   * @description 考生类型
   */
  examineesType: string
  examineesTypeName: string
  /**
   * @description 字符串拓展字段1
   */
  extChar1: string
  /**
   * @description 字符串拓展字段10
   */
  extChar10: string
  /**
   * @description 字符串拓展字段11
   */
  extChar11: string
  /**
   * @description 字符串拓展字段12
   */
  extChar12: string
  /**
   * @description 字符串拓展字段13
   */
  extChar13: string
  /**
   * @description 字符串拓展字段14
   */
  extChar14: string
  /**
   * @description 字符串拓展字段15
   */
  extChar15: string
  /**
   * @description 字符串拓展字段16
   */
  extChar16: string
  /**
   * @description 字符串拓展字段17
   */
  extChar17: string
  /**
   * @description 字符串拓展字段18
   */
  extChar18: string
  /**
   * @description 字符串拓展字段19
   */
  extChar19: string
  /**
   * @description 字符串拓展字段2
   */
  extChar2: string
  /**
   * @description 字符串拓展字段20
   */
  extChar20: string
  /**
   * @description 字符串拓展字段21
   */
  extChar21: string
  /**
   * @description 字符串拓展字段22
   */
  extChar22: string
  /**
   * @description 字符串拓展字段23
   */
  extChar23: string
  /**
   * @description 字符串拓展字段24
   */
  extChar24: string
  /**
   * @description 字符串拓展字段25
   */
  extChar25: string
  /**
   * @description 字符串拓展字段26
   */
  extChar26: string
  /**
   * @description 字符串拓展字段27
   */
  extChar27: string
  /**
   * @description 字符串拓展字段28
   */
  extChar28: string
  /**
   * @description 字符串拓展字段29
   */
  extChar29: string
  /**
   * @description 字符串拓展字段3
   */
  extChar3: string
  /**
   * @description 字符串拓展字段30
   */
  extChar30: string
  /**
   * @description 字符串拓展字段31
   */
  extChar31: string
  /**
   * @description 字符串拓展字段32
   */
  extChar32: string
  /**
   * @description 字符串拓展字段33
   */
  extChar33: string
  /**
   * @description 字符串拓展字段34
   */
  extChar34: string
  /**
   * @description 字符串拓展字段35
   */
  extChar35: string
  /**
   * @description 字符串拓展字段36
   */
  extChar36: string
  /**
   * @description 字符串拓展字段37
   */
  extChar37: string
  /**
   * @description 字符串拓展字段38
   */
  extChar38: string
  /**
   * @description 字符串拓展字段39
   */
  extChar39: string
  /**
   * @description 字符串拓展字段4
   */
  extChar4: string
  /**
   * @description 字符串拓展字段40
   */
  extChar40: string
  /**
   * @description 字符串拓展字段41
   */
  extChar41: string
  /**
   * @description 字符串拓展字段42
   */
  extChar42: string
  /**
   * @description 字符串拓展字段43
   */
  extChar43: string
  /**
   * @description 字符串拓展字段44
   */
  extChar44: string
  /**
   * @description 字符串拓展字段45
   */
  extChar45: string
  /**
   * @description 字符串拓展字段46
   */
  extChar46: string
  /**
   * @description 字符串拓展字段47
   */
  extChar47: string
  /**
   * @description 字符串拓展字段48
   */
  extChar48: string
  /**
   * @description 字符串拓展字段49
   */
  extChar49: string
  /**
   * @description 字符串拓展字段5
   */
  extChar5: string
  /**
   * @description 字符串拓展字段50
   */
  extChar50: string
  /**
   * @description 字符串拓展字段51
   */
  extChar51: string
  /**
   * @description 字符串拓展字段52
   */
  extChar52: string
  /**
   * @description 字符串拓展字段53
   */
  extChar53: string
  /**
   * @description 字符串拓展字段54
   */
  extChar54: string
  /**
   * @description 字符串拓展字段55
   */
  extChar55: string
  /**
   * @description 字符串拓展字段56
   */
  extChar56: string
  /**
   * @description 字符串拓展字段57
   */
  extChar57: string
  /**
   * @description 字符串拓展字段58
   */
  extChar58: string
  /**
   * @description 字符串拓展字段59
   */
  extChar59: string
  /**
   * @description 字符串拓展字段6
   */
  extChar6: string
  /**
   * @description 字符串拓展字段60
   */
  extChar60: string
  /**
   * @description 字符串拓展字段61
   */
  extChar61: string
  /**
   * @description 字符串拓展字段62
   */
  extChar62: string
  /**
   * @description 字符串拓展字段63
   */
  extChar63: string
  /**
   * @description 字符串拓展字段64
   */
  extChar64: string
  /**
   * @description 字符串拓展字段65
   */
  extChar65: string
  /**
   * @description 字符串拓展字段66
   */
  extChar66: string
  /**
   * @description 字符串拓展字段67
   */
  extChar67: string
  /**
   * @description 字符串拓展字段68
   */
  extChar68: string
  /**
   * @description 字符串拓展字段69
   */
  extChar69: string
  /**
   * @description 字符串拓展字段7
   */
  extChar7: string
  /**
   * @description 字符串拓展字段70
   */
  extChar70: string
  /**
   * @description 字符串拓展字段71
   */
  extChar71: string
  /**
   * @description 字符串拓展字段72
   */
  extChar72: string
  /**
   * @description 字符串拓展字段73
   */
  extChar73: string
  /**
   * @description 字符串拓展字段74
   */
  extChar74: string
  /**
   * @description 字符串拓展字段75
   */
  extChar75: string
  /**
   * @description 字符串拓展字段76
   */
  extChar76: string
  /**
   * @description 字符串拓展字段77
   */
  extChar77: string
  /**
   * @description 字符串拓展字段78
   */
  extChar78: string
  /**
   * @description 字符串拓展字段79
   */
  extChar79: string
  /**
   * @description 字符串拓展字段8
   */
  extChar8: string
  /**
   * @description 字符串拓展字段80
   */
  extChar80: string
  /**
   * @description 字符串拓展字段9
   */
  extChar9: string
  /**
   * @value #datetime()
   * @description 日期拓展字段1
   */
  extDate1: string
  /**
   * @value #datetime()
   * @description 日期拓展字段10
   */
  extDate10: string
  /**
   * @value #datetime()
   * @description 日期拓展字段2
   */
  extDate2: string
  /**
   * @value #datetime()
   * @description 日期拓展字段3
   */
  extDate3: string
  /**
   * @value #datetime()
   * @description 日期拓展字段4
   */
  extDate4: string
  /**
   * @value #datetime()
   * @description 日期拓展字段5
   */
  extDate5: string
  /**
   * @value #datetime()
   * @description 日期拓展字段6
   */
  extDate6: string
  /**
   * @value #datetime()
   * @description 日期拓展字段7
   */
  extDate7: string
  /**
   * @value #datetime()
   * @description 日期拓展字段8
   */
  extDate8: string
  /**
   * @value #datetime()
   * @description 日期拓展字段9
   */
  extDate9: string
  /**
   * @description 家庭成员Json
   */
  familyMember: string
  /**
   * @description 表单编码
   */
  formCode: string
  /**
   * @description 表单ID
   */
  formId: number
  /**
   * @description 毕业学校
   */
  graduationSchool: string
  /**
   * @description 头像
   */
  headImg: string
  /**
   * @description 身高（cm）
   */
  height: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份号码
   */
  identityNo: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业编码
   */
  majorCode: string
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 民族
   */
  nation: string
  nationName: string
  /**
   * @description 籍贯(省份)
   */
  nativePlace: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 政治面貌
   */
  politicalStatus: string
  politicalStatusName: string
  /**
   * @description 邮政编码
   */
  postalCode: string
  /**
   * @description 省份编码
   */
  provinceCode: string
  /**
   * @description 省名称
   */
  provinceName: string
  /**
   * @description QQ号
   */
  qq: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 登记状态：0-已登记，1-未登记
   */
  registerStatus: number
  /**
   * @value #datetime()
   * @description 登记时间
   */
  registerTime: string
  /**
   * @description 宗教信仰
   */
  religion: string
  religionName: string
  /**
   * @description 报道码
   */
  reportCode: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分数
   */
  score: number
  /**
   * @description 性别
   */
  sex: number
  sexName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  statusName: string
  /**
   * @description 学生ID
   */
  studentId: number
  /**
   * @description 修改人id
   */
  updateId: number
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  updateTimeStr: string
  /**
   * @description 用户ID
   */
  userId: number
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 微信号
   */
  wechat: string
  /**
   * @description 体重（kg）
   */
  weight: string
}
export type WnGenerateStudentNoVO = {
  /**
   * @description 班级
   */
  classId: number
  className: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 院系
   */
  departmentId: number
  departmentName: string
  /**
   * @description 生成规则
   */
  generateRule: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 序号初始值
   */
  initSerialNumber: string
  /**
   * @description 专业
   */
  majorId: number
  majorName: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 是否覆盖旧学号：0-是，1-否
   */
  overwriteFlag: number
  /**
   * @description 固定代码
   */
  partFixed: string
  /**
   * @description 组成年份
   */
  partYear: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 成功人数
   */
  successCount: number
  /**
   * @description 任务名称
   */
  taskName: string
  /**
   * @description 任务状态
   */
  taskStatus: number
  taskStatusName: string
  /**
   * @description 任务总人数
   */
  totalCount: number
  /**
   * @description 校区
   */
  zoneId: number
  zoneName: string
}
export type WnHallApplicationConfigVO = {
  /**
   * @description 应用链接
   */
  applicationUrl: string
  /**
   * @description 应用编码
   */
  code: string
  /**
   * @description 是否默认应用：0-是，1-否
   */
  defaultFlag: number
  /**
   * @description 应用显示名称
   */
  displayName: string
  /**
   * @description 显示端口: 1-学生，2-教师
   */
  displayType: number
  /**
   * @description 表单id
   */
  formId: number
  /**
   * @description 图标
   */
  iconUrl: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 应用名称
   */
  name: string
  /**
   * @description 开启条件
   */
  openCondition: string
  /**
   * @description 是否关联流程: 0-是, 1-否
   */
  processType: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 是否展示批次: 0-是, 1-否
   */
  showBatch: number
  /**
   * @description 是否展示页面配置: 0-是, 1-否
   */
  showForm: number
  /**
   * @description 排序
   */
  sort: number
  /**
   * @description 状态
   */
  status: number
  statusName: string
  /**
   * @description 类型; 1表单类型, 2链接类型
   */
  type: number
}
export type WnHallFormVO = {
  /**
   * @description 表单内容,
   */
  formContent: string
  /**
   * @description 表单id
   */
  formId: number
  /**
   * @description 表单名称
   */
  formName: string
  /**
   * @description 表单id
   */
  id: number
  /**
   * @description 是否导入新生信息, 0是, 1否
   */
  isWnImport: number
  /**
   * @description 是否自动登记, 0是, 1否
   */
  registerFlag: number
  /**
   * @description 学生ID
   */
  studentId: number
  /**
   * @description 新生信息字段
   */
  studentInfo: string
  /**
   * @description 是否有新生提交数据, 0是, 1否
   */
  studentSubmitFlag: number
}
export type WnHallProcessConfigVO = {
  /**
   * @description 是否关联应用ID
   */
  applicationId: number
  applicationName: string
  /**
   * @description 流程编码
   */
  code: string
  /**
   * @description 完成状态
   */
  completeLabel: string
  /**
   * @description 显示名称
   */
  displayName: string
  /**
   * @description 显示端口
   */
  displayType: number
  displayTypeName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 初始状态
   */
  initLabel: string
  /**
   * @description 关联应用
   */
  linkApplication: number
  /**
   * @description 流程名称
   */
  name: string
  /**
   * @description 是否缴费
   */
  needPay: number
  needPayName: string
  /**
   * @description 是否前置流程, 0是, 1否
   */
  openConditionFlag: number
  /**
   * @description 平台类型
   */
  platform: number
  platformName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态
   */
  status: number
  statusName: string
  /**
   * @description 类型; 0平台流程, 1自定义流程(必须是应用)
   */
  type: number
}
export type WnHallVO = {
  /**
   * @description 表单编码
   */
  formCode: string
  /**
   * @description 表单内容
   */
  formContent: string
  /**
   * @description 表单名称
   */
  formName: string
  /**
   * @description 主键
   */
  id: number
}
export type WnInClassInfoVO = {
  /**
   * @description 楼栋ID
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value 2
   * @description 床位信息
   */
  bunkList: BunkInfoVO[]
  /**
   * @description 已住人数
   */
  checkNum: number
  /**
   * @description 空余人数
   */
  emptyRoomNum: number
  /**
   * @description 楼层ID
   */
  floorId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 房间混住状态 0:是 1:否
   */
  isMixture: number
  /**
   * @description 入住房间 : 楼栋+楼层+房间名
   */
  roomFullName: string
  /**
   * @description 房间id
   */
  roomId: number
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 可住人数
   */
  roomNum: number
  /**
   * @description 房间状态 0:空房, 2:半空房 3:满房
   */
  roomStatus: number
}
export type WnInClassVO = {
  /**
   * @description 楼栋id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 已入住人数
   */
  checkNum: number
  classId: number
  /**
   * @description 班级
   */
  className: string
  floorId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  id: number
  /**
   * @description 同住原则
   */
  isMixtureStr: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 房间全名称
   */
  roomFullName: string
  roomId: number
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 几人间，即最大入住人数
   */
  roomNum: number
  roomSex: number
  /**
   * @description 房间性别
   */
  roomSexStr: string
  zoneId: number
  /**
   * @description 校区
   */
  zoneName: string
}
export type WnInStudentRoomVO = {
  /**
   * @description 允许选择床位：0-是，1-否
   */
  allowSelectBed: number
  /**
   * @description 楼栋id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 床位
   */
  bunk: number
  /**
   * @description 入住状态：0-已确认，1-已分配，2-未分配
   */
  checkInStatus: number
  checkInStatusName: string
  /**
   * @description 班级id
   */
  classId: number
  /**
   * @description 班级
   */
  className: string
  /**
   * @description 院系id
   */
  departmentId: number
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 楼层id
   */
  floorId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description 入住记录ID
   */
  id: number
  /**
   * @description 身份证
   */
  identityId: string
  /**
   * @description 专业id
   */
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 籍贯
   */
  natives: string
  /**
   * @description 入住房间 : 楼栋+楼层+房间名
   */
  roomFullName: string
  /**
   * @description 房间ID
   */
  roomId: number
  /**
   * @value 2
   * @description 房间信息
   */
  roomList: WnInClassInfoVO[]
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 房间类型：几人间
   */
  roomType: number
  /**
   * @description 学生性别
   */
  sex: number
  /**
   * @description 学生id
   */
  studentId: number
  /**
   * @description 学生姓名
   */
  studentName: string
  /**
   * @description 唯一标识
   */
  uniqueId: string
  /**
   * @description 是否根据班级分配房间 0:是, 1:否
   */
  withClass: number
  /**
   * @description 校区id
   */
  zoneId: number
}
export type WnInStudentVO = {
  /**
   * @description 批次
   */
  batchId: number
  batchName: string
  /**
   * @description 楼栋id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 床位
   */
  bunk: number
  /**
   * @description 学生入住状态：0-已确认，1-已分配，2-未分配
   */
  checkInStatus: number
  checkInStatusStr: string
  /**
   * @description 班级ID
   */
  classId: number
  /**
   * @description 班级
   */
  className: string
  /**
   * @value #datetime()
   * @description 确认时间
   */
  confirmTime: string
  confirmTimeStr: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 院系名称
   */
  departName: string
  departmentId: number
  /**
   * @description 楼层id
   */
  floorId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  id: number
  /**
   * @description 确认状态：0-已确认，1-未确认
   */
  inStatus: number
  inStatusStr: string
  majorId: number
  /**
   * @description 专业
   */
  majorName: string
  /**
   * @description 籍贯
   */
  nativePlace: string
  operates: string[]
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 入住房间 : 楼栋+楼层+房间名
   */
  roomFullName: string
  /**
   * @description 房间ID
   */
  roomId: number
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 性别
   */
  sex: number
  sexStr: string
  /**
   * @description 状态
   */
  status: string
  /**
   * @description 学生记录ID
   */
  studentId: number
  /**
   * @description 姓名
   */
  studentName: string
  /**
   * @description 唯一标识
   */
  uniqueId: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  updateTimeStr: string
  /**
   * @description 用户id
   */
  userId: number
  zoneId: number
  /**
   * @description 校区
   */
  zoneName: string
}
export type WnMajorStudentCountVO = {
  /**
   * @description 已分班的人数
   */
  assignedStudentNum: number
  /**
   * @description 未分班的学生人数
   */
  notAssignStudentNum: number
  /**
   * @description 学生总人数
   */
  totalStudentNum: number
}
export type WnOpenBankCardVO = {
  /**
   * @description 班级ID
   */
  classId: number
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人ID
   */
  createId: number
  /**
   * @description 创建人姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 学院ID
   */
  departmentId: number
  /**
   * @description 学院名称
   */
  departmentName: string
  /**
   * @description 失败原因
   */
  failMsg: string
  /**
   * @description 上传资料
   */
  filePath: string
  /**
   * @description 用户姓名-名
   */
  firstName: string
  /**
   * @description 用户姓名-全称
   */
  fullName: string
  /**
   * @description 处理状态：0-成功，1-上传中，2-失败
   */
  handleStatus: number
  handleStatusName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份证反面照片
   */
  idCardBack: string
  /**
   * @description 身份证正面照片
   */
  idCardFront: string
  /**
   * @description 证件号码
   */
  identityNo: string
  /**
   * @description 用户姓名-姓
   */
  lastName: string
  /**
   * @description 专业ID
   */
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 更新人ID
   */
  updateId: number
  /**
   * @description 更新人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  updateTimeStr: string
}
export type WnPayConfigDetailVO = {
  /**
   * @description 院系id
   */
  departmentId: number
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否生成缴费单 0否 1是
   */
  isGenerateBill: number
  isGenerateBillStr: string
  /**
   * @description 缴费项目数
   */
  itemCount: number
  /**
   * @value 2
   * @description 关联缴费项目
   */
  itemList: WnPayItemDetailVO[]
  /**
   * @description 专业id
   */
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 状态 0未启用 1已启用
   */
  status: number
  /**
   * @description 入学年份
   */
  studyYear: number
  /**
   * @description 学期（0、上学期  1、下学期）
   */
  term: number
  termStr: string
  zoneId: number
}
export type WnPayConfigVO = {
  departmentId: number
  /**
   * @description 院系名称
   */
  departmentName: string
  id: number
  /**
   * @description 是否生成缴费单 0否 1是 2处理中 3异常
   */
  isGenerateBill: number
  isGenerateBillStr: string
  /**
   * @description 缴费项目数
   */
  itemCount: number
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  operates: string[]
  operation: string
  remark: string
  schoolCode: string
  /**
   * @description 入学年份
   */
  studyYear: number
  zoneId: number
}
export type WnPayItemDetailVO = {
  /**
   * @description 二级分类费用
   */
  dicFullStr: string
  /**
   * @description 二级分类id
   */
  dicId: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 缴费金额
   */
  payAmount: number
  /**
   * @description 缴费项目id
   */
  projectId: number
  /**
   * @description 缴费项目
   */
  projectName: string
}
/**
 * @description 迎新缴费统计
 */
export type WnPayStatVO = {
  /**
   * @description 项目id
   */
  proId: number
  /**
   * @description 项目名称
   */
  proName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 金额
   */
  totalAmount: number
  /**
   * @description 笔数
   */
  totalCount: number
}
export type WnProcessConfigVO = {
  /**
   * @description 关联应用编码
   */
  applicationCode: string
  /**
   * @description 关联应用ID
   */
  applicationId: number
  /**
   * @description 关联应用名称
   */
  applicationName: string
  /**
   * @description 关联应用链接
   */
  applicationUrl: string
  /**
   * @description 流程编码
   */
  code: string
  /**
   * @description 完成状态
   */
  completeLabel: string
  /**
   * @description 创建姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 默认流程
   */
  defaultFlag: number
  defaultFlagName: string
  /**
   * @description 显示名称
   */
  displayName: string
  /**
   * @description 显示端口
   */
  displayType: number
  displayTypeName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 初始状态
   */
  initLabel: string
  /**
   * @description 关联应用
   */
  linkApplication: number
  /**
   * @description 流程名称
   */
  name: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 排序
   */
  sort: number
  /**
   * @description 类型：1-平台，2-学校
   */
  source: number
  sourceName: string
  /**
   * @description 状态
   */
  status: number
  statusName: string
  /**
   * @description 更新姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type WnProcessCountTableHeaderVO = {
  /**
   * @description 索引列
   */
  dataIndex: string
  /**
   * @description key值
   */
  key: string
  /**
   * @description 流程id
   */
  processId: number
  /**
   * @description 表头名称
   */
  title: string
}
export type WnProductAndPicVO = {
  /**
   * @description 已申领数量（已经申请但未领取）
   */
  applyNumber: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否需要支付： 0、是 1、否
   */
  needPay: number
  /**
   * @description 商品图片
   */
  picAddress: string
  /**
   * @description 商品名称
   */
  productName: string
  /**
   * @description 规格标题（名称）
   */
  productTitle: string
  /**
   * @description 商品类型
   */
  productType: number
  /**
   * @description 商品类型
   */
  productTypeStr: string
  /**
   * @description 已领取数量
   */
  receivedNumber: number
  /**
   * @description 入学年份
   */
  recruitYear: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 学期 0上学期  1下学期
   */
  semester: number
  /**
   * @description 学期
   */
  semesterStr: string
  /**
   * @description 商品明细
   */
  specsName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 库存数量
   */
  surplusNumber: number
  /**
   * @description 总数量
   */
  totalNumber: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type WnProductPicVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 图片地址
   */
  picAddress: string
  /**
   * @description 商品ID
   */
  productId: number
}
export type WnProductSpecsVO = {
  /**
   * @description 已申请领取数量（已经申请但未领取）
   */
  applyNumber: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 商品ID
   */
  productId: number
  /**
   * @description 已领取数量
   */
  receivedNumber: number
  /**
   * @description 规格名称
   */
  specName: string
  /**
   * @description 规格价格
   */
  specPrice: number
  /**
   * @description 剩余数量
   */
  surplusNumber: number
  /**
   * @description 总数量
   */
  totalNumber: number
}
export type WnProductVO = {
  /**
   * @description 封面图地址
   */
  coverUrl: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 限领数量
   */
  limitReceiveNum: number
  /**
   * @description 是否需要支付： 0、是 1、否
   */
  needPay: number
  /**
   * @description 是否需要收货 0、是  1、否
   */
  needReceive: number
  /**
   * @description 支付商户编码
   */
  payCpCode: string
  /**
   * @description 支付商户密钥
   */
  payCpSecret: string
  /**
   * @description 商品描述
   */
  productDes: string
  /**
   * @description 商品名称
   */
  productName: string
  /**
   * @description 规格标题（名称）
   */
  productTitle: string
  /**
   * @description 商品类型
   */
  productType: number
  /**
   * @description 商品类型
   */
  productTypeStr: string
  /**
   * @value 2
   * @description 已领物品订单列表
   */
  receiveOrderVOList: WnReceiveOrderVO[]
  /**
   * @description 领取状态：0、未领取 1、已申领  2、已领取 -1、领取结束
   */
  receiveStatus: number
  /**
   * @description 领取状态名
   */
  receiveStatusStr: string
  /**
   * @description 入学年份
   */
  recruitYear: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 学期 0上学期  1下学期
   */
  semester: number
  /**
   * @description 学期
   */
  semesterStr: string
  /**
   * @description 商品明细
   */
  specsName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 仅查看： 0-是，1-否
   */
  viewOnly: number
  /**
   * @value 2
   * @description 图片地址列表
   */
  wnProductPicVOList: WnProductPicVO[]
  /**
   * @value 2
   * @description 迎新商品规格列表
   */
  wnProductSpecsVOList: WnProductSpecsVO[]
}
export type WnReceiveNumberTotalVO = {
  /**
   * @description 条数
   */
  count: number
  /**
   * @description 领取总数量
   */
  receiveNumberTotal: number
}
export type WnReceiveOrderVO = {
  /**
   * @description 收货地址
   */
  address: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 收货人
   */
  consignee: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 发货状态 0、未发货  1、已发货
   */
  deliveryStatus: number
  /**
   * @description 发货状态 0、未发货  1、已发货
   */
  deliveryStatusStr: string
  /**
   * @value #datetime()
   * @description 发货时间
   */
  deliveryTime: string
  /**
   * @description 院系名称
   */
  departName: string
  /**
   * @description 费率金额
   */
  feeMoney: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 是否需要支付 0：是  1：否
   */
  needPay: number
  /**
   * @description 支付金额
   */
  payMoney: number
  /**
   * @description 支付订单号
   */
  payNo: string
  /**
   * @description 支付方式
   */
  payType: string
  /**
   * @description 商品ID
   */
  productId: number
  /**
   * @description 商品名称
   */
  productName: string
  /**
   * @description 商品规格id
   */
  productSpecsId: number
  /**
   * @description 规格名称
   */
  productSpecsName: string
  /**
   * @description 商品类型: 1、军训用品  2、生活用品  3、床上用品
   */
  productType: number
  /**
   * @description 商品类型名
   */
  productTypeStr: string
  /**
   * @description 领取数量
   */
  receiveNumber: number
  /**
   * @value #datetime()
   * @description 领取时间
   */
  receiveTime: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 红包金额
   */
  redMoney: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态：0、未领取  1、已领取
   */
  status: number
  /**
   * @description 状态名
   */
  statusStr: string
  /**
   * @description 学生姓名
   */
  studentId: number
  /**
   * @description 学生姓名
   */
  studentName: string
  /**
   * @description 到账金额
   */
  totalMoney: number
  /**
   * @description 证件号码
   */
  uniqueId: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
}
export type WnRoomAccommodateCountShowVO = {
  /**
   * @description 男生已分配人数
   */
  boysAllocatedCount: number
  /**
   * @description 男生已入住人数
   */
  boysCheckedInCount: number
  /**
   * @description 男生新生人数
   */
  boysCount: number
  /**
   * @description 男生房间可入住人数
   */
  boysMoveIntoCount: number
  /**
   * @description 女生已分配人数
   */
  girlsAllocatedCount: number
  /**
   * @description 女生已入住人数
   */
  girlsCheckedInCount: number
  /**
   * @description 女生新生人数
   */
  girlsCount: number
  /**
   * @description 女生房间可入住人数
   */
  girlsMoveIntoCount: number
  /**
   * @description 已分配总人数
   */
  totalAllocatedCount: number
  /**
   * @description 已入住总人数
   */
  totalCheckedInCount: number
  /**
   * @description 房间可入住总人数
   */
  totalMoveIntoCount: number
  /**
   * @description 新生总人数
   */
  totalStudentsCount: number
}
export type WnRoomFeeConfigVO = {
  /**
   * @description 费用名称
   */
  feeName: string
  /**
   * @description 费用价格
   */
  feePrice: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
}
export type WnRoomTreeVO = {
  /**
   * @description 楼栋id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 楼层Id
   */
  floorId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @value 2
   * @description 房间
   */
  roomVOList: WnRoomVO[]
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnRoomVO = {
  /**
   * @description 楼栋ID
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 楼层Id
   */
  floorId: number
  /**
   * @description 楼层名称
   */
  floorName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 房间全名称
   */
  roomFullName: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 房间标识：  -1、禁止入住  0、全空房  1、预分配（已分配）  2、半空房 3、已住满
   */
  roomTab: number
  /**
   * @description 房间标识
   */
  roomTabStr: string
  /**
   * @description 房间类型（几人间）
   */
  roomType: number
  /**
   * @description 房间是否已使用：0-是，1-否
   */
  roomUsed: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 性别：0、女  1、男
   */
  sex: number
  /**
   * @description 性别
   */
  sexStr: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnSchoolAllDashboardVO = {
  /**
   * @description 入住统计
   */
  checkInReportStr: string
  /**
   * @description 市区报到
   */
  cityReportStr: string
  /**
   * @description 市地区展示类型 0:全国 1:省份
   */
  cityViewType: number
  /**
   * @description 班级报到率Top5
   */
  classReportStr: string
  /**
   * @description 班级报到视图是否展示 0:展示 1:不展示
   */
  classViewEnable: number
  /**
   * @description 环节办理统计视图是否展示 0:展示 1:不展示
   */
  dealViewEnable: number
  /**
   * @description 学院女生比率Top5
   */
  departmentFemaleStr: string
  /**
   * @description 各学院报到率排行
   */
  departmentReportStr: string
  /**
   * @description 学院报到视图是否展示 0:展示 1:不展示
   */
  departmentViewEnable: number
  /**
   * @description 学院女生视图是否展示 0:展示 1:不展示
   */
  femaleViewEnable: number
  /**
   * @description 缴费情况
   */
  jiaofeiReportStr: string
  /**
   * @description 缴费视图是否展示 0:展示 1:不展示
   */
  jiaofeiViewEnable: number
  /**
   * @description 最新学生报到视图是否展示 0:展示 1:不展示
   */
  latestViewEnable: number
  /**
   * @description 各学院报到率排行
   */
  majorReportStr: string
  /**
   * @description 专业报到率Top5
   */
  majorTop5ReportStr: string
  /**
   * @description 专业Top5报到视图是否展示 0:展示 1:不展示
   */
  majorTop5ViewEnable: number
  /**
   * @description 专业报到视图是否展示 0:展示 1:不展示
   */
  majorViewEnable: number
  /**
   * @description 男女人数比例
   */
  maleAndFemaleStr: string
  /**
   * @description 学校所在的省份
   */
  province: string
  /**
   * @description 省份报到
   */
  provinceReportStr: string
  /**
   * @description 地区展示类型 0:全国 1:省份
   */
  provinceViewType: number
  /**
   * @description (已报到人数,今日报到, 占比)
   */
  schoolReportStr: string
  /**
   * @description 时段报到率视图是否展示 0:展示 1:不展示
   */
  timeFrameRatioViewEnable: number
  /**
   * @description 时段报到率
   */
  timeFrameReportRatioStr: string
  /**
   * @description 时段报到人数
   */
  timeFrameReportStr: string
  /**
   * @description 时段报到视图是否展示 0:展示 1:不展示
   */
  timeViewEnable: number
  /**
   * @description 环节办理统计
   */
  toDealWithStr: string
}
export type WnSchoolOrganizationTreeVO = {
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 编码
   */
  key: string
  /**
   * @description 级别 1高校学院 2高校专业 3高校班级
   */
  level: number
  /**
   * @description 人数
   */
  num: number
  /**
   * @description 部门名称
   */
  title: string
}
export type WnSchoolOrganizationVO = {
  /**
   * @description 学制
   */
  academicSystem: string
  /**
   * @description 别名, 简称
   */
  aliasName: string
  /**
   * @description 渠道0基础
   */
  channel: number
  /**
   * @description 学历
   */
  degree: number
  /**
   * @description 删除标记: 0-正常，1-删除
   */
  deleteFlag: number
  /**
   * @description 招生年份
   */
  entranceYear: number
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 级别 1高校学院 2高校专业 3高校班级 4K12年级 5K12班级
   */
  level: number
  /**
   * @description 部门名称
   */
  name: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 代码
   */
  organizationCode: string
  /**
   * @description 父级ID
   */
  parentId: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0未启用,1已启用
   */
  status: number
  /**
   * @description 用户人数
   */
  userNum: number
  /**
   * @description 关联校区
   */
  zoneId: number
}
export type WnSchoolZoneVO = {
  /**
   * @description 校区地址
   */
  address: string
  /**
   * @description 地区编码
   */
  areaCode: string
  /**
   * @description 所属于地区中文
   */
  areaCodeStr: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 纬度
   */
  latitude: number
  /**
   * @description 经度
   */
  longitude: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0未启用 1已启用
   */
  status: number
  /**
   * @description 状态名称
   */
  statusStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnSelectPhoneOperatorVO = {
  /**
   * @description 确认提示
   */
  confirmTips: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 是否需要预充值 0、是  1、否
   */
  needRecharge: number
  /**
   * @description 是否需要预充值
   */
  needRechargeStr: string
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 排序
   */
  sort: number
  /**
   * @description 状态 0、未启用 1、已启用
   */
  status: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区id
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnSelectPhoneOrderVO = {
  /**
   * @description 详细地址
   */
  address: string
  /**
   * @description 区
   */
  area: string
  /**
   * @description 返充金额
   */
  backAmount: number
  /**
   * @description 市
   */
  city: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 合约期（月）
   */
  contractPeriod: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 创建时间
   */
  createTimeStr: string
  /**
   * @description 院系名称
   */
  departName: string
  /**
   * @description 费率金额
   */
  feeMoney: number
  /**
   * @description 订单编号
   */
  id: number
  /**
   * @description 身份证号
   */
  identityId: string
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 已选手机号
   */
  mobilePhone: string
  /**
   * @description 月租（元）
   */
  monthlyRent: number
  /**
   * @description 运营商id
   */
  operatorId: number
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 套餐ID（套餐新增输入）
   */
  packageCode: string
  /**
   * @description 套餐id（自增）
   */
  packageId: number
  /**
   * @description 套餐名称
   */
  packageName: string
  /**
   * @description 套餐副标题
   */
  packageSubName: string
  /**
   * @description 支付金额
   */
  payMoney: number
  /**
   * @description 支付订单号
   */
  payNo: string
  /**
   * @description 支付状态
   */
  payStatus: number
  payStatusStr: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 支付时间
   */
  payTimeStr: string
  /**
   * @description 支付方式
   */
  payType: string
  /**
   * @description 支付方式
   */
  payTypeStr: string
  /**
   * @description 联系电话
   */
  phone: string
  /**
   * @description 预充金额
   */
  prechargeAmount: number
  /**
   * @description 省
   */
  province: string
  /**
   * @description 充值详情
   */
  rechargeInfo: string
  /**
   * @description 红包金额
   */
  redbagMoney: number
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 学生姓名
   */
  studentName: string
  /**
   * @description 到账金额
   */
  totalMoney: number
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnSelectPhonePackageVO = {
  /**
   * @description 返充金额
   */
  backAmount: string
  /**
   * @description 合约期（月）
   */
  contractPeriod: number
  /**
   * @description 封面
   */
  cover: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 月租（元）
   */
  monthlyRent: string
  /**
   * @description 是否需要预充值 0、是  1、否
   */
  needRecharge: number
  /**
   * @description 是否需要预充值 0、是  1、否
   */
  needRechargeStr: string
  /**
   * @description 运营商id
   */
  operatorId: number
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 套餐内容
   */
  packageContent: string
  /**
   * @description 套餐id
   */
  packageId: string
  /**
   * @description 套餐名称
   */
  packageName: string
  /**
   * @description 套餐副名称
   */
  packageSubName: string
  /**
   * @description 预充金额
   */
  prechargeAmount: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 排序
   */
  sort: number
  /**
   * @description 状态 0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态名
   */
  statusStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区id
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnSelectPhoneVO = {
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 是否靓号 0、是  1、否
   */
  isPretty: number
  /**
   * @description 是否靓号
   */
  isPrettyStr: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 是否需要预充值 0、是  1、否
   */
  needRecharge: number
  /**
   * @description 是否需要预充值 0、是  1、否
   */
  needRechargeStr: string
  /**
   * @description 开卡状态 0、未申领  1、申领中  2、已申领
   */
  openStatus: number
  /**
   * @description 开卡状态
   */
  openStatusStr: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 运营商ID
   */
  operatorId: number
  /**
   * @description 运营商名称
   */
  operatorName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0、未启用 1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnStudentBaseApiVO = {
  /**
   * @description 详细地址
   */
  address: string
  /**
   * @description 是否调剂：0-是，1-否
   */
  adjustFlag: number
  /**
   * @description 是否调剂名称
   */
  adjustFlagName: string
  /**
   * @description 准考生号
   */
  admissionNo: string
  /**
   * @description 年龄
   */
  age: number
  /**
   * @description 区编码
   */
  areaCode: string
  /**
   * @description 区名称
   */
  areaName: string
  /**
   * @description 分配状态：0-已分配，1-未分配
   */
  assignStatus: number
  assignStatusName: string
  /**
   * @value #datetime()
   * @description 分配时间
   */
  assignTime: string
  assignTimeStr: string
  /**
   * @description 批次ID
   */
  batchId: number
  batchName: string
  /**
   * @value #datetime()
   * @description 生日
   */
  birthday: string
  /**
   * @description 生日(格式化)
   */
  birthdayStr: string
  /**
   * @description 证件类型
   */
  certificateType: string
  /**
   * @description 证件类型名称
   */
  certificateTypeName: string
  /**
   * @description 入住确认状态：0-确认入住，1-未确认注入
   */
  checkInStatus: number
  /**
   * @description 市编码
   */
  cityCode: string
  /**
   * @description 市名称
   */
  cityName: string
  /**
   * @description 班级编码
   */
  classCode: string
  classId: number
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建人姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 删除状态 0 :正常 1 :删除
   */
  deleteFlag: number
  /**
   * @description 院系编码
   */
  departmentCode: string
  departmentId: number
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 学历
   */
  diploma: string
  /**
   * @description 学历名称
   */
  diplomaName: string
  /**
   * @description 邮箱
   */
  email: string
  /**
   * @description 考生号
   */
  examNo: string
  /**
   * @description 考生类型
   */
  examineesType: string
  /**
   * @description 考生类型名称
   */
  examineesTypeName: string
  /**
   * @description 字符串拓展字段1
   */
  extChar1: string
  /**
   * @description 字符串拓展字段10
   */
  extChar10: string
  /**
   * @description 字符串拓展字段11
   */
  extChar11: string
  /**
   * @description 字符串拓展字段12
   */
  extChar12: string
  /**
   * @description 字符串拓展字段13
   */
  extChar13: string
  /**
   * @description 字符串拓展字段14
   */
  extChar14: string
  /**
   * @description 字符串拓展字段15
   */
  extChar15: string
  /**
   * @description 字符串拓展字段16
   */
  extChar16: string
  /**
   * @description 字符串拓展字段17
   */
  extChar17: string
  /**
   * @description 字符串拓展字段18
   */
  extChar18: string
  /**
   * @description 字符串拓展字段19
   */
  extChar19: string
  /**
   * @description 字符串拓展字段2
   */
  extChar2: string
  /**
   * @description 字符串拓展字段20
   */
  extChar20: string
  /**
   * @description 字符串拓展字段3
   */
  extChar3: string
  /**
   * @description 字符串拓展字段4
   */
  extChar4: string
  /**
   * @description 字符串拓展字段5
   */
  extChar5: string
  /**
   * @description 字符串拓展字段6
   */
  extChar6: string
  /**
   * @description 字符串拓展字段7
   */
  extChar7: string
  /**
   * @description 字符串拓展字段8
   */
  extChar8: string
  /**
   * @description 字符串拓展字段9
   */
  extChar9: string
  /**
   * @description 家庭成员JSON
   */
  familyMember: string
  /**
   * @description 头像
   */
  headImg: string
  /**
   * @description 身高（cm）
   */
  height: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份号码
   */
  identityNo: string
  /**
   * @description 导入记录ID
   */
  importId: number
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业编码
   */
  majorCode: string
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 民族
   */
  nation: string
  /**
   * @description 民族名称
   */
  nationName: string
  /**
   * @description 籍贯(省份)
   */
  nativePlace: string
  /**
   * @description 政治面貌
   */
  politicalStatus: string
  /**
   * @description 政治面貌名称
   */
  politicalStatusName: string
  /**
   * @description 邮政编码
   */
  postalCode: string
  /**
   * @description 省份编码
   */
  provinceCode: string
  /**
   * @description 省份名称
   */
  provinceName: string
  /**
   * @description QQ号
   */
  qq: string
  /**
   * @description 学年
   */
  recruitYear: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  registerStatus: number
  /**
   * @description 登记状态名称
   */
  registerStatusName: string
  /**
   * @value #datetime()
   * @description 登记时间
   */
  registerTime: string
  registerTimeStr: string
  /**
   * @description 宗教信仰
   */
  religion: string
  /**
   * @description 宗教信仰名称
   */
  religionName: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 报道码
   */
  reportCode: string
  /**
   * @description 报道状态：0-已报到，1-未报道
   */
  reportStatus: number
  reportStatusName: string
  /**
   * @value #datetime()
   * @description 报道时间
   */
  reportTime: string
  reportTimeStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分数
   */
  score: number
  /**
   * @description 性别
   */
  sex: number
  /**
   * @description 性别名称
   */
  sexName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
  /**
   * @description 同步认证状态：0-已同步，1-未同步
   */
  syncAuthStatus: number
  syncAuthStatusName: string
  /**
   * @description 新生标题字段映射JSON
   */
  titleFieldMapping: string
  /**
   * @description 唯一标识
   */
  uniqueId: string
  /**
   * @description 修改人id
   */
  updateId: number
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  updateTimeStr: string
  /**
   * @description 用户ID
   */
  userId: number
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 微信号
   */
  wechat: string
  /**
   * @description 体重（kg）
   */
  weight: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnStudentBaseVO = {
  /**
   * @description 详细地址
   */
  address: string
  /**
   * @description 是否调剂：0-是，1-否
   */
  adjustFlag: number
  /**
   * @description 是否调剂名称
   */
  adjustFlagName: string
  /**
   * @description 准考证号
   */
  admissionNo: string
  /**
   * @description 年龄
   */
  age: number
  /**
   * @description 区编码
   */
  areaCode: string
  /**
   * @description 区名称
   */
  areaName: string
  /**
   * @description 分配状态：0-已分配，1-未分配
   */
  assignStatus: number
  assignStatusName: string
  /**
   * @value #datetime()
   * @description 分配时间
   */
  assignTime: string
  assignTimeStr: string
  /**
   * @description 批次ID
   */
  batchId: number
  batchName: string
  /**
   * @value #datetime()
   * @description 生日
   */
  birthday: string
  /**
   * @description 生日(格式化)
   */
  birthdayStr: string
  /**
   * @description 证件类型
   */
  certificateType: string
  /**
   * @description 证件类型名称
   */
  certificateTypeName: string
  /**
   * @description 入住确认状态：0-确认入住，1-未确认注入
   */
  checkInStatus: number
  checkInStatusName: string
  /**
   * @value #datetime()
   * @description 报道时间
   */
  checkInTime: string
  checkInTimeStr: string
  /**
   * @description 市编码
   */
  cityCode: string
  /**
   * @description 市名称
   */
  cityName: string
  /**
   * @description 班级编码
   */
  classCode: string
  /**
   * @description 班级ID
   */
  classId: number
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建人姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 删除状态 0 :正常 1 :删除
   */
  deleteFlag: number
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 院系ID
   */
  departmentId: number
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 学历
   */
  diploma: string
  /**
   * @description 学历名称
   */
  diplomaName: string
  /**
   * @description 邮箱
   */
  email: string
  /**
   * @description 考生号
   */
  examNo: string
  /**
   * @description 考生类型
   */
  examineesType: string
  /**
   * @description 考生类型名称
   */
  examineesTypeName: string
  /**
   * @description 字符串拓展字段1
   */
  extChar1: string
  /**
   * @description 字符串拓展字段10
   */
  extChar10: string
  /**
   * @description 字符串拓展字段11
   */
  extChar11: string
  /**
   * @description 字符串拓展字段12
   */
  extChar12: string
  /**
   * @description 字符串拓展字段13
   */
  extChar13: string
  /**
   * @description 字符串拓展字段14
   */
  extChar14: string
  /**
   * @description 字符串拓展字段15
   */
  extChar15: string
  /**
   * @description 字符串拓展字段16
   */
  extChar16: string
  /**
   * @description 字符串拓展字段17
   */
  extChar17: string
  /**
   * @description 字符串拓展字段18
   */
  extChar18: string
  /**
   * @description 字符串拓展字段19
   */
  extChar19: string
  /**
   * @description 字符串拓展字段2
   */
  extChar2: string
  /**
   * @description 字符串拓展字段20
   */
  extChar20: string
  /**
   * @description 字符串拓展字段3
   */
  extChar3: string
  /**
   * @description 字符串拓展字段4
   */
  extChar4: string
  /**
   * @description 字符串拓展字段5
   */
  extChar5: string
  /**
   * @description 字符串拓展字段6
   */
  extChar6: string
  /**
   * @description 字符串拓展字段7
   */
  extChar7: string
  /**
   * @description 字符串拓展字段8
   */
  extChar8: string
  /**
   * @description 字符串拓展字段9
   */
  extChar9: string
  /**
   * @description 家庭成员JSON
   */
  familyMember: string
  /**
   * @description 姓名首字母
   */
  firstChar: string
  /**
   * @description 头像
   */
  headImg: string
  /**
   * @description 身高（cm）
   */
  height: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份号码
   */
  identityNo: string
  /**
   * @description 导入记录ID
   */
  importId: number
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业编码
   */
  majorCode: string
  /**
   * @description 专业ID
   */
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 姓名拼音
   */
  namePinYin: string
  /**
   * @description 民族
   */
  nation: string
  /**
   * @description 民族名称
   */
  nationName: string
  /**
   * @description 籍贯(省份)
   */
  nativePlace: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 政治面貌
   */
  politicalStatus: string
  /**
   * @description 政治面貌名称
   */
  politicalStatusName: string
  /**
   * @description 邮政编码
   */
  postalCode: string
  /**
   * @description 省份编码
   */
  provinceCode: string
  /**
   * @description 省份名称
   */
  provinceName: string
  /**
   * @description QQ号
   */
  qq: string
  /**
   * @description 学年
   */
  recruitYear: string
  /**
   * @description 登记状态
   */
  registerStatus: number
  /**
   * @description 登记状态名称
   */
  registerStatusName: string
  /**
   * @value #datetime()
   * @description 登记时间
   */
  registerTime: string
  registerTimeStr: string
  /**
   * @description 宗教信仰
   */
  religion: string
  /**
   * @description 宗教信仰名称
   */
  religionName: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 报道码
   */
  reportCode: string
  /**
   * @description 报道状态：0-已报到，1-未报道
   */
  reportStatus: number
  reportStatusName: string
  /**
   * @value #datetime()
   * @description 报道时间
   */
  reportTime: string
  reportTimeStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分数
   */
  score: number
  /**
   * @description 性别
   */
  sex: number
  /**
   * @description 性别名称
   */
  sexName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  /**
   * @description 状态名称
   */
  statusName: string
  /**
   * @description 同步认证状态：0-已同步，1-未同步
   */
  syncAuthStatus: number
  syncAuthStatusName: string
  /**
   * @value #datetime()
   * @description 第三方系统同步时间
   */
  thirdUpdateTime: string
  /**
   * @description 唯一标识
   */
  uniqueId: string
  /**
   * @description 修改人id
   */
  updateId: number
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  updateTimeStr: string
  /**
   * @description 用户ID
   */
  userId: number
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 微信号
   */
  wechat: string
  /**
   * @description 体重（kg）
   */
  weight: string
  /**
   * @description 校区编码
   */
  zoneCode: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnStudentDashboardViewVO = {
  /**
   * @description 地区编码
   */
  areaCode: string
  /**
   * @description 地区名称
   */
  areaName: string
  /**
   * @description 地区展示类型 0:全国 1:省份
   */
  areaViewType: number
  /**
   * @description id
   */
  id: number
  /**
   * @description 经纬度
   */
  location: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 视图是否展示
   */
  viewEnableJson: string
}
export type WnStudentImportVO = {
  /**
   * @value #datetime()
   * @description 导入时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 导入结果 0 :成功 1 :失败
   */
  importStatus: number
  operates: string[]
  /**
   * @description 招生学年
   */
  recruitYear: string
  /**
   * @description 导入结果解析
   */
  resultExplain: string
  /**
   * @description 招生学期 0上学期  1下学期
   */
  semester: number
  /**
   * @description 数据来源
   */
  sourceCode: string
  /**
   * @description 学生人数
   */
  stuNum: number
}
export type WnStudentInCountVO = {
  /**
   * @description 批次
   */
  batchId: number
  batchName: string
  /**
   * @description 楼栋id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description 已确认人数
   */
  confirmNum: number
  /**
   * @description 确认比例
   */
  confirmScale: number
  confirmScaleStr: string
  /**
   * @description 确认状态： 0-已确认,1-未确认
   */
  confirmStatus: number
  /**
   * @description 未确认人数
   */
  notConfirmNum: number
  /**
   * @description 入学年份
   */
  recruitYear: number
  /**
   * @description 学期 ,0-上学期  1-下学期
   */
  semester: number
  semesterStr: string
  /**
   * @description 性别
   */
  sex: number
  sexStr: string
  /**
   * @description 总人数
   */
  totalNum: number
}
export type WnStudentLatestRegisterVO = {
  /**
   * @description 院系名称
   */
  departName: string
  /**
   * @description 登记时间
   */
  registerTime: string
  /**
   * @description 姓名
   */
  studentName: string
}
export type WnStudentProcessCountVO = {
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 部门名称
   */
  departmentName: string
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 招生年份
   */
  recruitYear: string
}
export type WnStudentProcessDetailVO = {
  classCode: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @value #datetime()
   * @description 时间
   */
  createTime: string
  createTimeStr: string
  departmentCode: string
  /**
   * @description 部门名称
   */
  departmentName: string
  majorCode: string
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 流程编码
   */
  processCode: string
  /**
   * @description 流程名称
   */
  processName: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 学生记录ID
   */
  studentId: number
  /**
   * @description 姓名
   */
  studentName: string
  /**
   * @description 身份唯一标识
   */
  uniqueId: string
}
export type WnStudentRegisterBaseApiVO = {
  /**
   * @description 详细地址
   */
  address: string
  /**
   * @description 是否调剂：0-是，1-否
   */
  adjustFlag: number
  adjustFlagName: string
  /**
   * @description 准考生号
   */
  admissionNo: string
  /**
   * @description 年龄
   */
  age: number
  /**
   * @description 区编码
   */
  areaCode: string
  /**
   * @description 区名称
   */
  areaName: string
  /**
   * @value #datetime()
   * @description 到达时间
   */
  arriveTime: string
  arriveTimeStr: string
  /**
   * @description 批次ID
   */
  batchId: number
  batchName: string
  /**
   * @value #datetime()
   * @description 生日
   */
  birthday: string
  birthdayStr: string
  /**
   * @description 证件类型
   */
  certificateType: string
  certificateTypeName: string
  /**
   * @description 市编码
   */
  cityCode: string
  /**
   * @description 市名称
   */
  cityName: string
  /**
   * @description 班级编码
   */
  classCode: string
  className: string
  /**
   * @description 确认状态：0-已确认，1-未确认
   */
  confirmStatus: number
  confirmStatusName: string
  /**
   * @value #datetime()
   * @description 确认时间
   */
  confirmTime: string
  confirmTimeStr: string
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建人姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  createTimeStr: string
  /**
   * @description 删除状态 0 :正常 1 :删除
   */
  deleteFlag: number
  /**
   * @description 院系编码
   */
  departmentCode: string
  departmentName: string
  /**
   * @description 学历
   */
  diploma: string
  diplomaName: string
  /**
   * @description 邮箱
   */
  email: string
  /**
   * @description 考生号
   */
  examNo: string
  /**
   * @description 考生类型
   */
  examineesType: string
  examineesTypeName: string
  /**
   * @description 字符串拓展字段1
   */
  extChar1: string
  /**
   * @description 字符串拓展字段10
   */
  extChar10: string
  /**
   * @description 字符串拓展字段11
   */
  extChar11: string
  /**
   * @description 字符串拓展字段12
   */
  extChar12: string
  /**
   * @description 字符串拓展字段13
   */
  extChar13: string
  /**
   * @description 字符串拓展字段14
   */
  extChar14: string
  /**
   * @description 字符串拓展字段15
   */
  extChar15: string
  /**
   * @description 字符串拓展字段2
   */
  extChar2: string
  /**
   * @description 字符串拓展字段3
   */
  extChar3: string
  /**
   * @description 字符串拓展字段4
   */
  extChar4: string
  /**
   * @description 字符串拓展字段5
   */
  extChar5: string
  /**
   * @description 字符串拓展字段6
   */
  extChar6: string
  /**
   * @description 字符串拓展字段7
   */
  extChar7: string
  /**
   * @description 字符串拓展字段8
   */
  extChar8: string
  /**
   * @description 字符串拓展字段9
   */
  extChar9: string
  /**
   * @value #datetime()
   * @description 日期拓展字段1
   */
  extDate1: string
  /**
   * @value #datetime()
   * @description 日期拓展字段10
   */
  extDate10: string
  /**
   * @value #datetime()
   * @description 日期拓展字段2
   */
  extDate2: string
  /**
   * @value #datetime()
   * @description 日期拓展字段3
   */
  extDate3: string
  /**
   * @value #datetime()
   * @description 日期拓展字段4
   */
  extDate4: string
  /**
   * @value #datetime()
   * @description 日期拓展字段5
   */
  extDate5: string
  /**
   * @value #datetime()
   * @description 日期拓展字段6
   */
  extDate6: string
  /**
   * @value #datetime()
   * @description 日期拓展字段7
   */
  extDate7: string
  /**
   * @value #datetime()
   * @description 日期拓展字段8
   */
  extDate8: string
  /**
   * @value #datetime()
   * @description 日期拓展字段9
   */
  extDate9: string
  /**
   * @description 家庭成员Json
   */
  familyMember: string
  /**
   * @description 表单ID
   */
  formId: number
  /**
   * @description 毕业学校
   */
  graduationSchool: string
  /**
   * @description 头像
   */
  headImg: string
  headImgName: string
  /**
   * @description 身高（cm）
   */
  height: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 身份号码
   */
  identityNo: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 专业编码
   */
  majorCode: string
  majorName: string
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 民族
   */
  nation: string
  nationName: string
  /**
   * @description 籍贯(省份)
   */
  nativePlace: string
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 政治面貌
   */
  politicalStatus: string
  politicalStatusName: string
  /**
   * @description 邮政编码
   */
  postalCode: string
  /**
   * @description 省份编码
   */
  provinceCode: string
  /**
   * @description 省名称
   */
  provinceName: string
  /**
   * @description QQ号
   */
  qq: string
  /**
   * @description 招生年份
   */
  recruitYear: string
  /**
   * @description 宗教信仰
   */
  religion: string
  religionName: string
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 报道码
   */
  reportCode: string
  /**
   * @description 现场确认方式
   */
  reportConfirmType: number
  reportConfirmTypeName: string
  /**
   * @description 随性人员数量
   */
  retinueNum: number
  /**
   * @description 行程登记状态：0-已登记，1-未登记
   */
  routeStatus: number
  routeStatusName: string
  /**
   * @value #datetime()
   * @description 行程登记时间
   */
  routeTime: string
  routeTimeStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 分数
   */
  score: number
  /**
   * @description 性别
   */
  sex: number
  sexName: string
  /**
   * @description 到达站点
   */
  station: string
  stationName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  statusName: string
  /**
   * @description 新生记录ID
   */
  studentId: number
  /**
   * @description 学生在校状态
   */
  studentSchoolStatus: number
  studentSchoolStatusName: string
  /**
   * @description 新生标题字段映射JSON
   */
  titleFieldMapping: string
  /**
   * @description 交通方式
   */
  trafficType: string
  trafficTypeName: string
  /**
   * @description 车次/航班次/车牌号
   */
  trainNumber: string
  /**
   * @description 唯一标识
   */
  uniqueId: string
  /**
   * @description 修改人id
   */
  updateId: number
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  updateTimeStr: string
  /**
   * @description 用户ID
   */
  userId: number
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 经停站点
   */
  wayPoint: string
  /**
   * @description 微信号
   */
  wechat: string
  /**
   * @description 体重（kg）
   */
  weight: string
  /**
   * @description 校区ID
   */
  zoneId: number
  zoneName: string
}
export type WnStudentReportCountExportVO = {
  /**
   * @description 批次ID
   */
  batchId: number
  /**
   * @description 批次
   */
  batchName: string
  /**
   * @description 班级编码
   */
  classCode: string
  /**
   * @description 班级名称
   */
  className: string
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 院系名称
   */
  departmentName: string
  /**
   * @description 学历
   */
  diploma: string
  /**
   * @description 学历名称
   */
  diplomaName: string
  /**
   * @description 专业编码
   */
  majorCode: string
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 民族
   */
  nation: string
  nationName: string
  /**
   * @description 未报到人数
   */
  notReportedNum: number
  provinceCode: string
  /**
   * @description 省名称
   */
  provinceName: string
  /**
   * @description 入学年份
   */
  recruitYear: number
  /**
   * @description 已报到人数
   */
  reportedNum: number
  /**
   * @description 报到率(保留小数点后两位)
   */
  reportedRate: string
  /**
   * @description 性别
   */
  sex: number
  sexName: string
  /**
   * @description 总人数
   */
  totalStudentNum: number
  /**
   * @description 校区id
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnStudentReportNumCountVO = {
  /**
   * @description 校区/院系/专业/班级/民族编码
   */
  commonCode: string
  /**
   * @description 校区/院系/专业/班级/民族名称
   */
  commonName: string
  /**
   * @description 未报到人数
   */
  notReportedNum: number
  /**
   * @description 未报到人数比例
   */
  notReportedNumPercent: string
  /**
   * @description 省份
   */
  provinceName: string
  /**
   * @description 已报到人数
   */
  reportedNum: number
  /**
   * @description 已报到人数比例
   */
  reportedNumPercent: string
  /**
   * @description 总人数
   */
  totalStudentNum: number
}
export type WnStudentReportSexCountVO = {
  /**
   * @description 校区/院系/专业/班级/民族编码
   */
  commonCode: string
  /**
   * @description 校区/院系/专业/班级/民族名称
   */
  commonName: string
  /**
   * @description 女生人数
   */
  femaleNum: number
  /**
   * @description 女生人数比例
   */
  femalePercent: string
  /**
   * @description 男生人数
   */
  maleNum: number
  /**
   * @description 男生人数比例
   */
  malePercent: string
  /**
   * @description 省份
   */
  provinceName: string
  /**
   * @description 总人数
   */
  totalStudentNum: number
}
export type WnStudentToClassOrganizationVO = {
  /**
   * @description 学制
   */
  academicSystem: string
  /**
   * @description 别名, 简称
   */
  aliasName: string
  /**
   * @description 学历
   */
  degree: number
  /**
   * @description 招生年份
   */
  entranceYear: number
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 级别 1高校学院 2高校专业 3高校班级 4K12年级 5K12班级
   */
  level: number
  /**
   * @description 部门名称
   */
  name: string
  /**
   * @description 代码
   */
  organizationCode: string
  /**
   * @description 父级ID
   */
  parentId: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态 0未启用,1已启用
   */
  status: number
  /**
   * @description 已有人数
   */
  studentNum: number
  /**
   * @description 计划招生人数
   */
  userNum: number
  /**
   * @description 关联校区
   */
  zoneId: number
}
export type WnStudentToClassVO = {
  /**
   * @description 当前任务执行的已分班的学生数
   */
  assignedStudentNum: number
  /**
   * @description 分班规则类型,默认值=0,参考WnStudentClassRuleTypeEnum枚举
   */
  classRuleType: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 院系编码
   */
  departCode: string
  /**
   * @description 院系id
   */
  departId: number
  /**
   * @description 院系名称
   */
  departName: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 序号初始值
   */
  initSerialNumber: string
  /**
   * @description 是否创建学号,0-是 1-否
   */
  isCreateUserNo: number
  /**
   * @description 分班是否限制条件；0-是，1-否
   */
  isLimitCondition: number
  /**
   * @description 分班限制条件列表,json字符串
   */
  limitConditionJson: string
  /**
   * @description 专业下的未分班男生人数
   */
  majorBoysStudentNum: number
  /**
   * @description 专业编码
   */
  majorCode: string
  /**
   * @description 专业下的未分班女生人数
   */
  majorGirlsStudentNum: number
  /**
   * @description 专业id
   */
  majorId: number
  /**
   * @description 专业名称
   */
  majorName: string
  /**
   * @description 专业下的未分班总人数
   */
  majorTotalStudentNum: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 操作
   */
  operation: string
  /**
   * @description 是否覆盖已有学号：0-是，1-否
   */
  overwriteUserNo: number
  /**
   * @description 组成年份
   */
  partYear: string
  /**
   * @description 招生年份
   */
  recruitYear: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 分配班级列表,json字符串
   */
  studentClassJson: string
  /**
   * @description 分班学生信息列表,json字符串
   */
  studentListJson: string
  /**
   * @description 任务名称
   */
  taskName: string
  /**
   * @description 任务状态,0-未执行,1-执行中,2-执行成功,9-执行失败
   */
  taskStatus: number
  /**
   * @description 专业下的可分配班级个数
   */
  taskTotalClassNum: number
  /**
   * @description 该任务下的已分班总人数
   */
  taskTotalStudentNum: number
  /**
   * @description 创建学号规则,创建学号规则, 固定数字, 五位以内
   */
  userNoNumber: number
  /**
   * @description 校区id
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnStudentTrafficCountVO = {
  /**
   * @description 日期,格式=yyyy-MM-dd
   */
  date: string
  /**
   * @description 时间段到站人数,与timeList顺序对应
   */
  numList: number[]
  /**
   * @description 时间段列表 1:(00:00-01:00),2:(01:00-02:00),3:(02:00-03:00)...
   */
  timeList: string[]
}
export type WnTeacherAppRoleVO = {
  /**
   * @description 创建人ID
   */
  createId: number
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 关联的应用组
   */
  groupIdList: string
  groupNameList: string
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 关联的员工数量
   */
  linkUserCount: number
  /**
   * @description 操作
   */
  operates: string[]
  /**
   * @description 角色名称
   */
  roleName: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  statusName: string
  /**
   * @description 更新人ID
   */
  updateId: number
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type WnTeacherAppUserApiVO = {
  /**
   * @description 创建人id
   */
  createId: number
  /**
   * @description 创建姓名
   */
  createName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 删除状态 0未删除 1删除
   */
  deleteFlag: number
  /**
   * @description 主键
   */
  id: number
  /**
   * @description 手机号
   */
  mobileNo: string
  /**
   * @description 角色名称
   */
  roleId: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态：1-启用，0-禁用
   */
  status: number
  /**
   * @description 修改人id
   */
  updateId: number
  /**
   * @description 修改人姓名
   */
  updateName: string
  /**
   * @value #datetime()
   * @description 修改时间
   */
  updateTime: string
  /**
   * @description 基础用户ID
   */
  userBaseId: string
  /**
   * @description 用户姓名
   */
  userName: string
  /**
   * @description 用户类型：1-学生，2-教职工
   */
  userType: number
  userTypeName: string
}
export type WnTitleFormVO = {
  /**
   * @description 导出字段相关信息{filed1:label1,filed2:label2}
   */
  exportInfo: string
  /**
   * @description 查询列表字段相关信息{filed1:label1,filed2:label2}
   */
  queryInfo: string
}
export type WnUnitVO = {
  /**
   * @description 楼栋Id
   */
  buildingId: number
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 状态:0、未启用  1、已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 单元名称
   */
  unitName: string
  /**
   * @description 校区ID
   */
  zoneId: number
  /**
   * @description 校区名称
   */
  zoneName: string
}
export type WnZoneRoomApiVO = {
  /**
   * @description 楼栋名称
   */
  buildingName: string
  /**
   * @value 2
   * @description 楼层列表
   */
  floorList: WnFloorApiVO[]
  /**
   * @description 楼栋ID
   */
  id: number
  /**
   * @description 楼栋性别
   */
  sex: number
}
export type 健康状况日报VO = {
  /**
   * @description 目前居住地
   */
  areaStr: string
  /**
   * @description 返还地
   */
  backAreaStr: string
  /**
   * @description 返还地-市
   */
  backCity: string
  backCityCode: number
  /**
   * @description 返还地-区/县
   */
  backDistrict: string
  backDistrictCode: number
  /**
   * @description 返还地-省份
   */
  backProvince: string
  backProvinceCode: number
  /**
   * @description 返校备注：车次或航班号
   */
  backRemark: string
  backWay: number
  /**
   * @description 返校方式
   */
  backWayStr: string
  /**
   * @description 楼栋
   */
  building: string
  /**
   * @description 后台备注
   */
  centerRemark: string
  /**
   * @description 备注人姓名
   */
  centerRemarkUpdateName: string
  /**
   * @description 市
   */
  city: string
  /**
   * @description 市编码
   */
  cityCode: number
  /**
   * @description 班级/部门编码
   */
  classCode: string
  /**
   * @description 班级/部门
   */
  className: string
  /**
   * @description 是否接触过高发地区 0是1否
   */
  contactArea: number
  /**
   * @description 是否去过高发地区
   */
  contactAreaStr: string
  /**
   * @value #datetime()
   * @description 接触日期
   */
  contactDate: string
  /**
   * @description 接触日期 yyyy-MM-dd
   */
  contactDateStr: string
  /**
   * @description 是否接触过确诊者 0是1否
   */
  contactPatient: number
  /**
   * @description 是否接触过确诊者
   */
  contactPatientStr: string
  /**
   * @description 国家
   */
  country: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 创建时间 yyyy-MM-dd HH:mm:ss
   */
  createTimeStr: string
  /**
   * @description 院系
   */
  department: string
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 设备id
   */
  deviceId: string
  /**
   * @description 区/县
   */
  district: string
  /**
   * @description 区/县编码
   */
  districtCode: number
  /**
   * @description 招生年份（年级）
   */
  entranceYear: number
  /**
   * @description 拓展字段
   */
  extField: string
  /**
   * @description 楼层
   */
  floor: string
  /**
   * @description 是否全日制 0是1否
   */
  fullTimeFlag: number
  /**
   * @description 全日制类型
   */
  fullTimeFlagStr: string
  /**
   * @description 健康情况 1正常2发烧/咳嗽等症状3其它
   */
  healthStatus: number
  /**
   * @description 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
   */
  healthStatusNew: string
  /**
   * @description 健康情况new
   */
  healthStatusNewStr: string
  /**
   * @description 健康情况
   */
  healthStatusStr: string
  /**
   * @description 是否春节期间在校 0是1否
   */
  holidayInSchool: number
  /**
   * @description 是否春节期间在校
   */
  holidayInSchoolStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份证号
   */
  identity: string
  /**
   * @description 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
   */
  identitySecondType: string
  /**
   * @description 身份二级分类
   */
  identitySecondTypeStr: string
  /**
   * @description 身份类型 1学生2教职工
   */
  identityType: number
  /**
   * @description 身份类型
   */
  identityTypeStr: string
  /**
   * @description 是否政府定点集中隔离 0是1否
   */
  inGovQuarantine: number
  inGovQuarantineStr: string
  /**
   * @description 是否居家健康监测或隔离 0是1否
   */
  inHomeQuarantine: number
  inHomeQuarantineStr: string
  /**
   * @description 是否在校 0是1否
   */
  inSchool: number
  /**
   * @description 是否校内集中隔离 0是1否
   */
  inSchoolQuarantine: number
  inSchoolQuarantineStr: string
  /**
   * @description 是否在校
   */
  inSchoolStr: string
  /**
   * @description 居住区是否有确诊、无症状、疑似 0是 1否
   */
  isCommunityPatient: number
  /**
   * @description 居住区是否有确诊、无症状、疑似
   */
  isCommunityPatientStr: string
  /**
   * @description 家庭成员是否有确诊、疑似、感染者 0是 1否
   */
  isFamiliyPatient: number
  /**
   * @description 家庭成员是否有确诊、疑似、感染者
   */
  isFamiliyPatientStr: string
  isInCompany: number
  /**
   * @description 今日是否在实习单位
   */
  isInCompanyStr: string
  /**
   * @description 是否确诊、无症状 0是1否
   */
  isPatient: number
  /**
   * @description 是否确诊、无症状
   */
  isPatientStr: string
  /**
   * @description 是否为疑似病例 0是1否
   */
  isSuspected: number
  /**
   * @description 是否为疑似病例
   */
  isSuspectedStr: string
  isTodayBack: number
  /**
   * @description 今日是否返校
   */
  isTodayBackStr: string
  /**
   * @description 隔离地点
   */
  isolatedPlace: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 最近一次核酸检测日期（yyyy-MM-dd）
   */
  lastNucleicAcidDate: string
  /**
   * @description 现在联系方式
   */
  linkPhone: string
  /**
   * @description 定位信息
   */
  locationInfo: string
  /**
   * @description 经纬度
   */
  longitudeAndLatitude: string
  /**
   * @description 登录手机号
   */
  mobilePhone: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 未接种疫苗原因
   */
  noVaccineReasonStr: string
  /**
   * @description 近七日是否有核酸检测 0是1否
   */
  nucleicAcidFlag: number
  nucleicAcidFlagStr: string
  operates: string[]
  operation: string
  /**
   * @description 家长联系方式
   */
  parentsPhone: string
  /**
   * @description 就诊医院
   */
  patientHospital: string
  /**
   * @description 省
   */
  province: string
  /**
   * @description 省编码
   */
  provinceCode: number
  /**
   * @description 其它情况说明
   */
  remark: string
  /**
   * @description 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
   */
  roommateHealthStatus: string
  /**
   * @description 共同居住人员健康情况
   */
  roommateHealthStatusStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 专业
   */
  specialities: string
  /**
   * @description 专业编码
   */
  specialitiesCode: string
  /**
   * @description 今日体温
   */
  temperature: string
  /**
   * @description 今日下午体温
   */
  temperatureAfter: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  /**
   * @description 更新时间 yyyy-MM-dd HH:mm:ss
   */
  updateTimeStr: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineOneTime: string
  /**
   * @description 疫苗接种情况
   */
  vaccineStatusStr: string
  /**
   * @description 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineThreeTime: string
  /**
   * @description 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineTwoTime: string
}
export type 健康状况登记VO = {
  /**
   * @description 目前居住地
   */
  areaStr: string
  /**
   * @description 返还地
   */
  backAreaStr: string
  /**
   * @description 返还地-市
   */
  backCity: string
  backCityCode: number
  /**
   * @description 返还地-区/县
   */
  backDistrict: string
  backDistrictCode: number
  /**
   * @description 返还地-省份
   */
  backProvince: string
  backProvinceCode: number
  /**
   * @description 返校备注：车次或航班号
   */
  backRemark: string
  backWay: number
  /**
   * @description 返校方式
   */
  backWayStr: string
  /**
   * @description 楼栋
   */
  building: string
  /**
   * @description 市
   */
  city: string
  /**
   * @description 市编码
   */
  cityCode: number
  /**
   * @description 班级/部门编码
   */
  classCode: string
  /**
   * @description 班级/部门
   */
  className: string
  /**
   * @description 是否接触中高风险地区 0是1否
   */
  contactArea: number
  /**
   * @description 是否接触中高风险地区
   */
  contactAreaStr: string
  /**
   * @value #datetime()
   * @description 接触日期
   */
  contactDate: string
  /**
   * @description 接触日期 yyyy-MM-dd
   */
  contactDateStr: string
  /**
   * @description 是否接触确诊、无症状、疑似 0是1否
   */
  contactPatient: number
  /**
   * @description 是否接触确诊、无症状、疑似
   */
  contactPatientStr: string
  /**
   * @description 国家
   */
  country: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 创建时间 yyyy-MM-dd HH:mm:ss
   */
  createTimeStr: string
  /**
   * @description 院系
   */
  department: string
  /**
   * @description 院系编码
   */
  departmentCode: string
  /**
   * @description 区/县
   */
  district: string
  /**
   * @description 区/县编码
   */
  districtCode: number
  /**
   * @description 招生年份（年级）
   */
  entranceYear: number
  /**
   * @description 拓展字段
   */
  extField: string
  /**
   * @description 楼层
   */
  floor: string
  /**
   * @description 是否全日制 0是1否
   */
  fullTimeFlag: number
  /**
   * @description 健康情况 1正常2发烧/咳嗽等症状3其它
   */
  healthStatus: number
  /**
   * @description 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
   */
  healthStatusNew: string
  /**
   * @description 健康情况
   */
  healthStatusNewStr: string
  /**
   * @description 健康情况
   */
  healthStatusStr: string
  /**
   * @description 是否春节期间在校 0是1否
   */
  holidayInSchool: number
  /**
   * @description 是否春节期间在校
   */
  holidayInSchoolStr: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 身份证号
   */
  identity: string
  /**
   * @description 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
   */
  identitySecondType: string
  /**
   * @description 身份二级分类
   */
  identitySecondTypeStr: string
  /**
   * @description 身份类型 1学生2教职工
   */
  identityType: number
  /**
   * @description 身份类型
   */
  identityTypeStr: string
  /**
   * @description 是否政府定点集中隔离 0是1否
   */
  inGovQuarantine: number
  inGovQuarantineStr: string
  /**
   * @description 是否居家健康监测或隔离 0是1否
   */
  inHomeQuarantine: number
  inHomeQuarantineStr: string
  /**
   * @description 是否在校 0是1否
   */
  inSchool: number
  /**
   * @description 是否校内集中隔离 0是1否
   */
  inSchoolQuarantine: number
  inSchoolQuarantineStr: string
  /**
   * @description 是否在校
   */
  inSchoolStr: string
  /**
   * @description 居住区是否有确诊、无症状、疑似 0是 1否
   */
  isCommunityPatient: number
  /**
   * @description 居住区是否有确诊、无症状、疑似
   */
  isCommunityPatientStr: string
  /**
   * @description 家庭成员是否有确诊、疑似、感染者 0是 1否
   */
  isFamiliyPatient: number
  /**
   * @description 家庭成员是否有确诊、疑似、感染者
   */
  isFamiliyPatientStr: string
  isInCompany: number
  /**
   * @description 今日是否在实习单位
   */
  isInCompanyStr: string
  /**
   * @description 是否确诊、无症状 0是1否
   */
  isPatient: number
  /**
   * @description 是否确诊、无症状
   */
  isPatientStr: string
  /**
   * @description 是否为疑似病例 0是1否
   */
  isSuspected: number
  /**
   * @description 是否为疑似病例
   */
  isSuspectedStr: string
  isTodayBack: number
  /**
   * @description 今日是否返校
   */
  isTodayBackStr: string
  /**
   * @description 隔离地点
   */
  isolatedPlace: string
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 最近一次核酸检测日期（yyyy-MM-dd）
   */
  lastNucleicAcidDate: string
  /**
   * @description 现在联系方式
   */
  linkPhone: string
  /**
   * @description 定位信息
   */
  locationInfo: string
  /**
   * @description 经纬度
   */
  longitudeAndLatitude: string
  /**
   * @description 登录手机号
   */
  mobilePhone: string
  /**
   * @description 姓名
   */
  name: string
  /**
   * @description 未接种疫苗原因
   */
  noVaccineReasonStr: string
  /**
   * @description 近七日是否有核酸检测 0是1否
   */
  nucleicAcidFlag: number
  nucleicAcidFlagStr: string
  operates: string[]
  operation: string
  /**
   * @description 家长联系方式
   */
  parentsPhone: string
  /**
   * @description 就诊医院
   */
  patientHospital: string
  /**
   * @description 省
   */
  province: string
  /**
   * @description 省编码
   */
  provinceCode: number
  /**
   * @description 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
   */
  roommateHealthStatus: string
  /**
   * @description 共同居住人员健康情况
   */
  roommateHealthStatusStr: string
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称
   */
  schoolName: string
  /**
   * @description 专业
   */
  specialities: string
  /**
   * @description 专业编码
   */
  specialitiesCode: string
  /**
   * @description 今日体温
   */
  temperature: string
  /**
   * @description 今日下午体温
   */
  temperatureAfter: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
  /**
   * @description 更新时间 yyyy-MM-dd HH:mm:ss
   */
  updateTimeStr: string
  /**
   * @description 用户id
   */
  userId: number
  /**
   * @description 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineOneTime: string
  /**
   * @description 疫苗接种情况
   */
  vaccineStatusStr: string
  /**
   * @description 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineThreeTime: string
  /**
   * @description 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
   */
  vaccineTwoTime: string
}
export type 健康状况登记地区统计VO = {
  /**
   * @description 地区编码
   */
  areaCode: number
  /**
   * @description 地区名称
   */
  areaName: string
  /**
   * @description 总登记数
   */
  checkNum: number
  /**
   * @description 总确诊数
   */
  patientNum: number
}
export type 健康状况登记地区统计VOroute = {
  /**
   * @description 签到总人数
   */
  checkIn: number
  /**
   * @description 打卡率
   */
  checkInRadio: string
  /**
   * @description 部门
   */
  department: string
  /**
   * @description 部门编码
   */
  departmentCode: string
  /**
   * @description 部门人数
   */
  departmentNum: number
  /**
   * @description 未签到总人数
   */
  notCheckIn: number
}
export type 健康状况登记地区统计VO_1 = {
  /**
   * @description 签到总人数
   */
  checkIn: number
  /**
   * @description 签到人数-内地生
   */
  checkIn11: number
  /**
   * @description 签到人数-港澳台学生
   */
  checkIn12: number
  /**
   * @description 签到人数-留学生
   */
  checkIn13: number
  /**
   * @description 签到人数-实习生
   */
  checkIn14: number
  /**
   * @description 签到人数-应征入伍
   */
  checkIn15: number
  /**
   * @description 签到人数-延期毕业
   */
  checkIn16: number
  /**
   * @description 打卡率
   */
  checkInRadio: string
  /**
   * @description 当日中高风险地区有较密集接触-总人数
   */
  contactArea: number
  /**
   * @description 当日中高风险地区有较密集接触-内地生
   */
  contactArea11: number
  /**
   * @description 当日中高风险地区有较密集接触-港澳台学生
   */
  contactArea12: number
  /**
   * @description 当日中高风险地区有较密集接触-留学生
   */
  contactArea13: number
  /**
   * @description 当日中高风险地区有较密集接触-实习生
   */
  contactArea14: number
  /**
   * @description 当日中高风险地区有较密集接触-应征入伍
   */
  contactArea15: number
  /**
   * @description 当日中高风险地区有较密集接触-延期毕业
   */
  contactArea16: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-总人数
   */
  contactPatient: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-内地生
   */
  contactPatient11: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-港澳台学生
   */
  contactPatient12: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-留学生
   */
  contactPatient13: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-实习生
   */
  contactPatient14: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-应征入伍
   */
  contactPatient15: number
  /**
   * @description 当日与确诊病例、无症状感染者或疑似病例有密切接触-延期毕业
   */
  contactPatient16: number
  /**
   * @description 部门
   */
  department: string
  /**
   * @description 部门编码
   */
  departmentCode: string
  /**
   * @description 部门人数
   */
  departmentNum: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-总人数
   */
  healthStatusNew: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-内地生
   */
  healthStatusNew11: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-港澳台学生
   */
  healthStatusNew12: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-留学生
   */
  healthStatusNew13: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-实习生
   */
  healthStatusNew14: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-应征入伍
   */
  healthStatusNew15: number
  /**
   * @description 当日发热、咳嗽、呼吸困难等可疑症状-延期毕业
   */
  healthStatusNew16: number
  /**
   * @description 春节期间在校总数
   */
  holidayInSchool: number
  /**
   * @description 春节期间在校-内地生
   */
  holidayInSchool11: number
  /**
   * @description 春节期间在校-港澳台学生
   */
  holidayInSchool12: number
  /**
   * @description 春节期间在校-留学生
   */
  holidayInSchool13: number
  /**
   * @description 春节期间在校-实习生
   */
  holidayInSchool14: number
  /**
   * @description 春节期间在校-应征入伍
   */
  holidayInSchool15: number
  /**
   * @description 春节期间在校-延期毕业
   */
  holidayInSchool16: number
  /**
   * @description 今日政府定点集中隔离人数-总人数
   */
  inGovQuarantine: number
  /**
   * @description 今日政府定点集中隔离人数-内地生
   */
  inGovQuarantine11: number
  /**
   * @description 今日政府定点集中隔离人数-港澳台学生
   */
  inGovQuarantine12: number
  /**
   * @description 今日政府定点集中隔离人数-留学生
   */
  inGovQuarantine13: number
  /**
   * @description 今日政府定点集中隔离人数-实习生
   */
  inGovQuarantine14: number
  /**
   * @description 今日政府定点集中隔离人数-应征入伍
   */
  inGovQuarantine15: number
  /**
   * @description 今日政府定点集中隔离人数-延期毕业
   */
  inGovQuarantine16: number
  /**
   * @description 今日居家健康监测或隔离人数-总人数
   */
  inHomeQuarantine: number
  /**
   * @description 今日居家健康监测或隔离人数-内地生
   */
  inHomeQuarantine11: number
  /**
   * @description 今日居家健康监测或隔离人数-港澳台学生
   */
  inHomeQuarantine12: number
  /**
   * @description 今日居家健康监测或隔离人数-留学生
   */
  inHomeQuarantine13: number
  /**
   * @description 今日居家健康监测或隔离人数-实习生
   */
  inHomeQuarantine14: number
  /**
   * @description 今日居家健康监测或隔离人数-应征入伍
   */
  inHomeQuarantine15: number
  /**
   * @description 今日居家健康监测或隔离人数-延期毕业
   */
  inHomeQuarantine16: number
  /**
   * @description 当日在校-内地生
   */
  inSchool11: number
  /**
   * @description 当日在校-港澳台学生
   */
  inSchool12: number
  /**
   * @description 当日在校-留学生
   */
  inSchool13: number
  /**
   * @description 当日当日在校-实习生
   */
  inSchool14: number
  /**
   * @description 当日在校-应征入伍
   */
  inSchool15: number
  /**
   * @description 当日当日在校-延期毕业
   */
  inSchool16: number
  /**
   * @description 今日校内集中隔离人数-总人数
   */
  inSchoolQuarantine: number
  /**
   * @description 今日校内集中隔离人数-内地生
   */
  inSchoolQuarantine11: number
  /**
   * @description 今日校内集中隔离人数-港澳台学生
   */
  inSchoolQuarantine12: number
  /**
   * @description 今日校内集中隔离人数-留学生
   */
  inSchoolQuarantine13: number
  /**
   * @description 今日校内集中隔离人数-实习生
   */
  inSchoolQuarantine14: number
  /**
   * @description 今日校内集中隔离人数-应征入伍
   */
  inSchoolQuarantine15: number
  /**
   * @description 今日校内集中隔离人数-延期毕业
   */
  inSchoolQuarantine16: number
  /**
   * @description 当日确诊病例或无症状感染者-总人数
   */
  isDayPatient: number
  /**
   * @description 确诊或无症状感染总人数
   */
  isPatient: number
  /**
   * @description 当日确诊病例或无症状感染者-内地生
   */
  isPatient11: number
  /**
   * @description 当日确诊病例或无症状感染者-港澳台学生
   */
  isPatient12: number
  /**
   * @description 当日确诊病例或无症状感染者-留学生
   */
  isPatient13: number
  /**
   * @description 当日确诊病例或无症状感染者-实习生
   */
  isPatient14: number
  /**
   * @description 当日确诊病例或无症状感染者-应征入伍
   */
  isPatient15: number
  /**
   * @description 当日确诊病例或无症状感染者-延期毕业
   */
  isPatient16: number
  /**
   * @description 当日疑似病例-总人数
   */
  isSuspected: number
  /**
   * @description 当日疑似病例-内地生
   */
  isSuspected11: number
  /**
   * @description 当日疑似病例-港澳台学生
   */
  isSuspected12: number
  /**
   * @description 当日疑似病例-留学生
   */
  isSuspected13: number
  /**
   * @description 当日疑似病例-实习生
   */
  isSuspected14: number
  /**
   * @description 当日疑似病例-应征入伍
   */
  isSuspected15: number
  /**
   * @description 当日疑似病例-延期毕业
   */
  isSuspected16: number
  /**
   * @description 今日从外地返校-总人数
   */
  isTodayBack: number
  /**
   * @description 今日从外地返校-内地生
   */
  isTodayBack11: number
  /**
   * @description 今日从外地返校-港澳台学生
   */
  isTodayBack12: number
  /**
   * @description 今日从外地返校-留学生
   */
  isTodayBack13: number
  /**
   * @description 今日从外地返校-实习生
   */
  isTodayBack14: number
  /**
   * @description 今日从外地返校-应征入伍
   */
  isTodayBack15: number
  /**
   * @description 今日从外地返校-延期毕业
   */
  isTodayBack16: number
  /**
   * @description 未接种新冠疫苗人数-总人数
   */
  noVaccine: number
  /**
   * @description 未接种新冠疫苗人数-内地生
   */
  noVaccine11: number
  /**
   * @description 未接种新冠疫苗人数-港澳台学生
   */
  noVaccine12: number
  /**
   * @description 未接种新冠疫苗人数-留学生
   */
  noVaccine13: number
  /**
   * @description 未接种新冠疫苗人数-实习生
   */
  noVaccine14: number
  /**
   * @description 未接种新冠疫苗人数-应征入伍
   */
  noVaccine15: number
  /**
   * @description 未接种新冠疫苗人数-延期毕业
   */
  noVaccine16: number
  /**
   * @description 当日不在校人数
   */
  notInSchool: number
  /**
   * @description 近七日核酸检测人数-总人数
   */
  nucleicAcidFlag: number
  /**
   * @description 近七日核酸检测人数-内地生
   */
  nucleicAcidFlag11: number
  /**
   * @description 近七日核酸检测人数-港澳台学生
   */
  nucleicAcidFlag12: number
  /**
   * @description 近七日核酸检测人数-留学生
   */
  nucleicAcidFlag13: number
  /**
   * @description 近七日核酸检测人数-实习生
   */
  nucleicAcidFlag14: number
  /**
   * @description 近七日核酸检测人数-应征入伍
   */
  nucleicAcidFlag15: number
  /**
   * @description 近七日核酸检测人数-延期毕业
   */
  nucleicAcidFlag16: number
  /**
   * @description 已接种一针新冠疫苗人数-总人数
   */
  vaccineOne: number
  /**
   * @description 已接种一针新冠疫苗人数-内地生
   */
  vaccineOne11: number
  /**
   * @description 已接种一针新冠疫苗人数-港澳台学生
   */
  vaccineOne12: number
  /**
   * @description 已接种一针新冠疫苗人数-留学生
   */
  vaccineOne13: number
  /**
   * @description 已接种一针新冠疫苗人数-实习生
   */
  vaccineOne14: number
  /**
   * @description 已接种一针新冠疫苗人数-应征入伍
   */
  vaccineOne15: number
  /**
   * @description 已接种一针新冠疫苗人数-延期毕业
   */
  vaccineOne16: number
  /**
   * @description 已接种三针新冠疫苗人数-总人数
   */
  vaccineThree: number
  /**
   * @description 已接种三针新冠疫苗人数-内地生
   */
  vaccineThree11: number
  /**
   * @description 已接种三针新冠疫苗人数-港澳台学生
   */
  vaccineThree12: number
  /**
   * @description 已接种三针新冠疫苗人数-留学生
   */
  vaccineThree13: number
  /**
   * @description 已接种三针新冠疫苗人数-实习生
   */
  vaccineThree14: number
  /**
   * @description 已接种三针新冠疫苗人数-应征入伍
   */
  vaccineThree15: number
  /**
   * @description 已接种三针新冠疫苗人数-延期毕业
   */
  vaccineThree16: number
  /**
   * @description 已接种两针新冠疫苗人数-总人数
   */
  vaccineTwo: number
  /**
   * @description 已接种两针新冠疫苗人数-内地生
   */
  vaccineTwo11: number
  /**
   * @description 已接种两针新冠疫苗人数-港澳台学生
   */
  vaccineTwo12: number
  /**
   * @description 已接种两针新冠疫苗人数-留学生
   */
  vaccineTwo13: number
  /**
   * @description 已接种两针新冠疫苗人数-实习生
   */
  vaccineTwo14: number
  /**
   * @description 已接种两针新冠疫苗人数-应征入伍
   */
  vaccineTwo15: number
  /**
   * @description 已接种两针新冠疫苗人数-延期毕业
   */
  vaccineTwo16: number
}
export type 健康状况登记统计VO = {
  /**
   * @description 总登记数
   */
  checkNum: number
  /**
   * @description 总去过疫区人数
   */
  contactAreaNum: number
  /**
   * @description 总接触过确诊者人数
   */
  contactPatientNum: number
  /**
   * @description 咳嗽人数
   */
  healthCoughNum: number
  /**
   * @description 腹泻人数
   */
  healthDiarrhoeaNum: number
  /**
   * @description 发热人数
   */
  healthFeverNum: number
  /**
   * @description 头晕头痛人数
   */
  healthHeadacheNum: number
  /**
   * @description 正常人数
   */
  healthNormalNum: number
  /**
   * @description 乏力人数
   */
  healthWeakNum: number
  /**
   * @description 在校师生
   */
  inSchoolNum: number
  /**
   * @description 居住社区村有确诊病例人数
   */
  isCommunityPatientNum: number
  /**
   * @description 家庭成员有确诊或疑似病例人数
   */
  isFamiliyPatientNum: number
  /**
   * @description 离校师生
   */
  outSchoolNum: number
  /**
   * @description 总确诊数
   */
  patientNum: number
  /**
   * @value 2
   * @description 按省统计列表
   */
  provinceStatsList: 健康状况登记地区统计VO[]
  /**
   * @description 今日总登记数
   */
  todayCheckNum: number
  /**
   * @description 今日去过疫区人数
   */
  todayContactAreaNum: number
  /**
   * @description 今日接触过确诊者人数
   */
  todayContactPatientNum: number
  /**
   * @description 今日总签到数
   */
  todayDetailNum: number
  /**
   * @description 今日总确诊数
   */
  todayPatientNum: number
}
export type 安全风控类 = {
  /**
   * @description 图形验证码内容
   */
  imageCaptchaValue: string
  /**
   * @description 安全级别 0:普通，1：风险级别低  2：风险级别高
   */
  level: number
  /**
   * @description 安全表示
   */
  securityToken: string
  /**
   * @description 会话id
   */
  sessionId: string
}
export type 手抄表账单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     * @description 应缴金额
     */
    amountPayable: string
    /**
     * @description 校区名称
     */
    areaName: string
    /**
     * @description 楼栋名称
     */
    buildingName: string
    /**
     * @value #datetime()
     * @description 缴费完成时间
     */
    completeTime: string
    /**
     * @description 楼层名称
     */
    floorName: string
    /**
     * @description id
     */
    id: number
    /**
     * @description 上次抄表时间
     */
    lastSettlingTime: string
    /**
     * @description 缴费状态： 0、未缴费  1、已缴费
     */
    payStatus: number
    /**
     * @description 缴费状态名
     */
    payStatusStr: string
    /**
     * @description 房间名称
     */
    roomName: string
    /**
     * @description 学校名称
     */
    schoolName: string
    /**
     * @description 本次抄表时间
     */
    thisSettlingTime: string
    /**
     * @description 类型： 1、电费 2、水费
     */
    type: number
    /**
     * @description 类型名称
     */
    typeStr: string
    /**
     * @description 用电度数
     */
    usageQuantity: string
  }
export type 支付订单列表下方的汇总数据 = {
  /**
   * @description 月份：yyyy-dd
   */
  months: string
  /**
   * @description 交易总笔数
   */
  totalCount: number
  /**
   * @description 支付总金额
   */
  totalRealMoney: string
  /**
   * @description 退款总笔数
   */
  totalRefundCount: string
  /**
   * @description 退款总金额
   */
  totalRefundMoney: string
  /**
   * @description 交易总金额
   */
  totalTranMoney: string
}
export type 支付订单详情 = {
  /**
   * @description 优惠券抵扣金额
   */
  couponMoney: string
  /**
   * @description 商户编号
   */
  cpCode: string
  /**
   * @description 商户名称
   */
  cpName: string
  /**
   * @description 商户订单号
   */
  cpTranNo: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description 费率金额
   */
  feeMoney: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 学工号
   */
  jobNo: string
  /**
   * @description 通知状态
   */
  notifyState: number
  /**
   * @description 通知状态
   */
  notifyStateName: string
  /**
   * @description 支付渠道
   */
  payName: string
  /**
   * @value #datetime()
   * @description 支付时间
   */
  payTime: string
  /**
   * @description 产品名称
   */
  prodName: string
  /**
   * @description 实际支付金额
   */
  realMoney: string
  /**
   * @description 红包抵扣金额
   */
  redbagMoney: string
  /**
   * @description 退款金额
   */
  refundMoney: string
  /**
   * @description 退款状态，0 退款提交 1 退款处理中 2 退款成功 3退款失败
   */
  refundState: number
  /**
   * @description 退款状态
   */
  refundStateName: string
  /**
   * @description 支付费率类别，1支付费率，2扣除费率
   */
  settlefeeType: number
  /**
   * @description 官方订单号
   */
  topTranNo: string
  /**
   * @description 订单金额
   */
  tranMoney: string
  /**
   * @description 支付订单号
   */
  tranNo: string
  /**
   * @description 交易状态,1等待支付、2支付成功、3支付失败、4订单关闭
   */
  tranState: number
  /**
   * @description 交易状态（文字）
   */
  tranStateName: string
  /**
   * @description 付款人姓名
   */
  userName: string
}
export type 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     * @description 水电费校区编码
     */
    areaCode: string
    /**
     * @description 水电费校区名称
     */
    areaName: string
    /**
     * @description 水电费楼栋编码
     */
    buildingCode: string
    /**
     * @description 水电费楼栋名称
     */
    buildingName: string
    /**
     * @value #datetime()
     * @description 创建时间
     */
    createTime: string
    /**
     * @description 费率金额
     */
    feeMoney: number
    /**
     * @description 水电费楼层编码
     */
    floorCode: string
    /**
     * @description 水电费楼层名称
     */
    floorName: string
    /**
     * @description id
     */
    id: number
    /**
     * @description 学号
     */
    jobNo: string
    /**
     * @description 手机号
     */
    mobilePhone: string
    /**
     * @description 订单编号
     */
    orderNo: string
    /**
     * @description 外部订单号
     */
    outTradeNo: string
    /**
     * @description 外部充值状态 0未充值 1充值中 2充值完成 3充值失败 4充值关闭
     */
    outTradeStatus: number
    /**
     * @description 外部充值状态 0未充值 1充值中 2充值完成 3充值失败 4充值关闭
     */
    outTradeStatusStr: string
    /**
     * @description 缴费模式：1、智能电表  2、老电表
     */
    pattern: number
    /**
     * @description 缴费模式：1、智能电表  2、老电表
     */
    patternStr: string
    /**
     * @description 支付金额
     */
    payMoney: number
    /**
     * @description 支付单号
     */
    payNo: string
    /**
     * @description 支付状态：1等待支付、2支付成功、3支付失败、4订单关闭
     */
    payStatus: number
    /**
     * @description 支付状态：1等待支付、2支付成功、3支付失败、4订单关闭
     */
    payStatusStr: string
    /**
     * @value #datetime()
     * @description 支付时间
     */
    payTime: string
    /**
     * @description 支付方式 ：ALIPAY:支付宝支付 WXPAY:微信支付 UNIONPAY:银联支付 LONGPAY:建行龙支付  CARDPAY:一卡通支付
     */
    payType: string
    /**
     * @description 商品名
     */
    prodName: string
    /**
     * @description 红包金额
     */
    redbagMoney: number
    /**
     * @description 订单备注
     */
    remark: string
    /**
     * @description 水电费房间编码
     */
    roomCode: string
    /**
     * @description 水电费房间名称
     */
    roomName: string
    /**
     * @description 学校名称
     */
    schoolName: string
    /**
     * @description 来源：app：易校园APP  wechat：微信  yxapp：越秀APP  wxapp:微信小程序
     */
    source: string
    /**
     * @description 来源名称
     */
    sourceStr: string
    /**
     * @description 订单状态：0处理中 1已完成
     */
    status: string
    /**
     * @description 业务类型：电费、网费、水费
     */
    subType: string
    /**
     * @description 到账金额
     */
    totalMoney: number
    /**
     * @description 订单类型
     */
    type: string
    /**
     * @value #datetime()
     * @description 修改时间
     */
    updateTime: string
    /**
     * @description 姓名
     */
    userName: string
  }
export type 支付订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息_1 =
  {
    /**
     * @description 商户号
     */
    cpCode: string
    /**
     * @description 主商户名称
     */
    cpMainName: string
    /**
     * @description 商户名称
     */
    cpName: string
    /**
     * @description 商户订单号
     */
    cpTranNo: string
    /**
     * @description 创建时间
     */
    createTime: string
    /**
     * @description 费率金额
     */
    feeMoney: string
    /**
     * @description id
     */
    id: number
    /**
     * @description 学号
     */
    jobNo: string
    /**
     * @description 支付渠道
     */
    payName: string
    /**
     * @value #datetime()
     * @description 支付时间
     */
    payTime: string
    /**
     * @description 产品名称
     */
    prodName: string
    /**
     * @description 支付金额
     */
    realMoney: string
    /**
     * @description 红包金额
     */
    redbagMoney: string
    /**
     * @description 退款金额
     */
    refundMoney: string
    /**
     * @description 退款状态，0 退款提交 1 退款处理中 2 退款成功 3退款失败
     */
    refundState: number
    /**
     * @description 退款状态
     */
    refundStateName: string
    /**
     * @description 支付费率类别，1支付费率，2扣除费率
     */
    settlefeeType: number
    /**
     * @description 官方单号
     */
    topTranNo: string
    /**
     * @description 交易金额
     */
    tranMoney: string
    /**
     * @description 支付单号
     */
    tranNo: string
    /**
     * @description 交易状态,1等待支付、2支付成功、3支付失败、4订单关闭
     */
    tranState: number
    /**
     * @description 交易状态
     */
    tranStateName: string
    /**
     * @description 用户姓名
     */
    userName: string
  }
export type 文章返回参数 = {
  articleText: string
  /**
   * @description 附件,json对象列表格式,例：{'fileName':'文件名','fileUrl':'https://oss.aliyun.com'}
   */
  attachment: string
  author: string
  /**
   * @description 文章类型 1富文本 2链接
   */
  contentType: number
  /**
   * @description 链接地址
   */
  contentUrl: string
  /**
   * @value #datetime()
   */
  createTime: string
  /**
   * @value #datetime()
   * @description 文章截至日期
   */
  endTime: string
  id: number
  imageUrl: string
  /**
   * @description 是否热门问题(0是1否)
   */
  isHot: number
  /**
   * @description 是否推送到app首页 0是  1否
   */
  isTop: number
  operation: string
  platform: string
  platformStr: string
  /**
   * @description 是否弹屏 0:是  1:否
   */
  popupScreenFlag: number
  schoolId: number
  schoolName: string
  /**
   * @description 排序 ,小于5位
   */
  sort: number
  status: number
  statusStr: string
  tagsId: number
  tagsName: string
  title: string
  /**
   * @value #datetime()
   */
  updateTime: string
}
export type 校区查询 = {
  /**
   * @description 校区编码
   */
  areaCode: string
  /**
   * @description 校区名称
   */
  areaName: string
  /**
   * @description 绑定房间数量
   */
  bindRoomNum: number
  /**
   * @description 校区编码
   */
  id: number
  /**
   * @description 是否充值后绑定 0、是 1、否
   */
  isBindAfterRecharge: number
  /**
   * @description 支付渠道(支付渠道暂时只支持app): 1, 云马聚合支付 2, 神州浩天支付
   */
  paymentChannel: string
  /**
   * @description 学校编码
   */
  schoolCode: string
}
export type 用户信息 = {
  /**
   * @description 登录账户
   */
  account: string
  /**
   * @description 激活状态 0未激活 1激活
   */
  activeStatus: number
  /**
   * @description 绑卡状态 1已经绑卡 0未绑卡
   */
  bindCardStatus: number
  /**
   * @description 按钮列表
   */
  buttonList: string[]
  /**
   * @description 子商户编码,用户可以查询的子商户数据
   */
  childMerchantCode: string
  /**
   * @description 子商户名称
   */
  childMerchantName: string
  currentOperatePermission: {}
  /**
   * @description 设备id
   */
  deviceId: string
  /**
   * @description 扩展json
   */
  extJson: string
  /**
   * @description 是否有密码（0有 1没有）
   */
  hasPwd: number
  /**
   * @description 头像
   */
  headImg: string
  /**
   * @description 用户id
   */
  id: number
  /**
   * @description 身份证号
   */
  identityNo: string
  /**
   * @description 是否平台用户 0是 1否,平台用户不受数据权限控制,同超级管理员一样
   */
  isPlatformUser: number
  /**
   * @description 是否设置了安全密码：0、已设置 1、未设置
   */
  isSetSecurePwd: number
  /**
   * @description 是否超级管理员  0是  1否
   */
  isSuper: number
  /**
   * @description 是否需要强制修改密码 0是 1否
   */
  isUpdatePwd: number
  /**
   * @description 工号/学号
   */
  jobNo: string
  /**
   * @value #datetime()
   * @description 最后一次登录时间
   */
  lastLogin: string
  /**
   * @value 2
   * @description 菜单列表
   */
  menuList: CenterSysMenuTree4LoginVO[]
  /**
   * @description 商户编码,所属商户只能查询自己商户的数据
   */
  merchantCode: string
  /**
   * @description 商户名称
   */
  merchantName: string
  /**
   * @description 手机号
   */
  mobilePhone: string
  /**
   * @description 用户名/昵称
   */
  nickName: string
  /**
   * @description openid
   */
  openid: string
  /**
   * @description 支付openid
   */
  payOpenid: string
  /**
   * @description 平台,不同平台查询的数据是不一样的,目前有两个平台 易校园,意法
   */
  platform: string
  /**
   * @description app 身份证号
   */
  realIdentityNo: string
  /**
   * @description 是否实名 0未实名 1已经实名
   */
  realNameStatus: number
  /**
   * @description app真实姓名
   */
  realUserName: string
  /**
   * @value #datetime()
   * @description 注册时间
   */
  regiserTime: string
  /**
   * @description 记录请求uri,方便排查问题
   */
  requestUri: string
  /**
   * @description 登录成功，返回的页面地址
   */
  returnUrl: string
  /**
   * @description 角色id
   */
  roleId: string
  /**
   * @description 学校校徽
   */
  schoolBadgeImg: string
  /**
   * @description 学校类别(1.学校 2.企业 3.医院 政府)
   */
  schoolClasses: number
  /**
   * @description 学校编码
   */
  schoolCode: string
  /**
   * @description 学校名称（中文全称）
   */
  schoolName: string
  schoolNature: number
  /**
   * @description sessionId
   */
  sessionId: string
  /**
   * @description 性别 1男，2女，没有值表示男
   */
  sex: number
  shiroJid: string
  /**
   * @description 是否是测试账户  0是  1否
   */
  testAccount: number
  /**
   * @description thirdOpenid
   */
  thirdOpenid: string
  /**
   * @description token
   */
  token: string
  /**
   * @description 距上次修改密码天数
   */
  updatePwdDays: number
  /**
   * @description 班级
   */
  userClass: string
  /**
   * @description 一卡通账号
   */
  userIdcard: string
  /**
   * @description 用户真实姓名
   */
  userName: string
  /**
   * @description 用户状态 0冻结 1正常
   */
  userStatus: number
  /**
   * @description 用户类型,一卡通返回的身份,易校园平台身份请查看属性school_identity_type, 1 学生 2 老师(校长和其他) 3 校友 4 家长 5其他
   */
  userType: string
  /**
   * @description 迎新身份证号
   */
  wnIdentityNo: string
}
export type 用户角色VO = {
  /**
   * @description 子商户号,多个以逗号隔开
   */
  childMerchantCode: string
  /**
   * @description 子商户名称
   */
  childMerchantName: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @description id
   */
  id: number
  /**
   * @description 是否平台用户 0是 1否
   */
  isPlatformUser: number
  isPlatformUserStr: string
  /**
   * @description 商户号
   */
  merchantCode: string
  /**
   * @description 商户名称
   */
  merchantName: string
  /**
   * @description 手机
   */
  mobilePhone: string
  /**
   * @description 角色id
   */
  roleId: number
  /**
   * @description 角色名称
   */
  roleName: string
  /**
   * @description 状态 0未启用,1已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 用户ID
   */
  userId: number
  /**
   * @description 姓名
   */
  userName: string
}
export type 获取学校信息返回VO = {
  /**
   * @description 校徽图片
   */
  badgeImg: string
  /**
   * @description 校园卡温馨提示
   */
  bindPwdRemind: string
  /**
   * @description 校园卡背景图
   */
  panoramagramImg: string
  /**
   * @description 学校简介
   */
  schoolSummary: string
}
export type 获取预览信息返回VO = {
  /**
   * @description 二维码图片
   */
  qrCodeImage: string
  /**
   * @description 地址
   */
  url: string
}
export type 轮播图表返回数据参数 = {
  /**
   * @description 文章id
   */
  articleId: string
  /**
   * @description 图片
   */
  bannerImg: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  createTime: string
  /**
   * @value #datetime()
   * @description 结束时间
   */
  endTime: string
  id: number
  operates: string[]
  /**
   * @description 链接地址
   */
  outUrl: string
  /**
   * @description 展示地方
   */
  position: string
  /**
   * @description 展示地方编码 1000:新闻公告 2000:学校介绍 3000:迎新公告 0000:外部链接
   */
  positionCode: string
  schoolCode: string
  schoolName: string
  /**
   * @description 排序
   */
  showSort: number
  /**
   * @value #datetime()
   * @description 开始时间
   */
  startTime: string
  /**
   * @description 状态  0:未启用 1:已启用
   */
  status: number
  /**
   * @description 状态
   */
  statusStr: string
  /**
   * @description 文章类型
   */
  tagType: string
  /**
   * @description 标题
   */
  title: string
  /**
   * @description 轮播类型 0:外部 1:内部
   */
  type: number
  /**
   * @description 轮播类型 0:外部 1:内部
   */
  typeStr: string
  /**
   * @value #datetime()
   * @description 更新时间
   */
  updateTime: string
}
export type 迎新房间 = {
  /**
   * @description 是否已经分配： 0-是，1-否
   */
  assignStatus: number
  /**
   * @description 楼栋ID
   */
  buildingId: number
  buildingName: string
  /**
   * @value 2
   * @description 床位
   */
  bunkList: BunkInfoVO[]
  /**
   * @description 楼层Id
   */
  floorId: number
  floorName: string
  /**
   * @description 房间ID
   */
  id: number
  /**
   * @description 房间名称
   */
  roomFullName: string
  /**
   * @description 房间名称
   */
  roomName: string
  /**
   * @description 房间类型（几人间）
   */
  roomType: number
  /**
   * @description 校区ID
   */
  zoneId: number
}
export type 退款订单返回数据这是rows里的内容外面还有一层ret_code0表示成功ret_msg是错误消息 =
  {
    /**
     * @description 渠道退款订单号
     */
    channelRefundTranNo: string
    /**
     * @description 主商户名称
     */
    cpMainName: string
    /**
     * @description 商户名称
     */
    cpName: string
    /**
     * @description 商户退款单号
     */
    cpRefundTranNo: string
    /**
     * @value #datetime()
     * @description 创建时间
     */
    createTime: string
    /**
     * @description id
     */
    id: number
    /**
     * @description 通知状态
     */
    notifyState: number
    /**
     * @description 通知状态名称
     */
    notifyStateName: string
    /**
     * @description 支付方式
     */
    payType: string
    /**
     * @description 支付方式名称
     */
    payTypeName: string
    /**
     * @description 实际支付金额
     */
    realMoney: string
    /**
     * @description 退款金额
     */
    refundMoney: string
    /**
     * @description 退款原因
     */
    refundReason: string
    /**
     * @description 退款状态
     */
    refundStateName: string
    /**
     * @description 退款时间
     */
    refundTime: string
    /**
     * @description 退款订单号
     */
    refundTranNo: string
    /**
     * @description 退款总笔数
     */
    totalRefundCount: string
    /**
     * @description 退款总金额
     */
    totalRefundMoney: string
    /**
     * @description 交易金额
     */
    tranMoney: string
    /**
     * @description 支付订单号
     */
    tranNo: string
  }
