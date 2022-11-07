export type MyJsonCore = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
}
export type MyJson1Core = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: {}
}
export type MyJson1Core0 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: string[]
}
export type MyJson1Core1 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: EnumDtoCommon[]
}
export type MyJson1Core2 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: ApiExternalParamResDtoApiCenter[]
}
export type MyJson1Core3 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: SystemParamResDtoApiCenter[]
}
export type MyJson1Core4 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: DataTableFieldResDtoFormModel[]
}
export type MyJson1Core5 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: DataTableResDtoFormModel[]
}
export type MyJson1Core6 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: ModelSubResDtoFormModel[]
}
export type MyJson1Core7 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: PageModelResDtoFormModel[]
}
export type MyJson1Core8 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  /**
   * @value 2
   */
  data: FormSubResDtoFormStruct[]
}
export type MyJson1Core9 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: string
}
export type MyJson1Core10 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: string
}
export type MyJson1Core11 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: PagedList1Core
}
export type MyJson1Core12 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: PagedList1Core0
}
export type MyJson1Core13 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: PagedList1Core1
}
export type MyJson1Core14 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: PagedList1Core2
}
export type MyJson1Core15 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: AliyunOssStsTokenResDtoOss
}
export type MyJson1Core16 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: SaveFormStructReqDtoFormStruct
}
export type MyJson1Core17 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: ApiResDtoApiCenter
}
export type MyJson1Core18 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: ModelDataPageResDtoFormModel
}
export type MyJson1Core19 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: ModelResDtoFormModel
}
export type MyJson1Core20 = {
  message: string
  msg: string
  code: number
  error: RemoteServiceErrorInfoHttp
  data: PageQueryFormDataResDtoFormStruct
}
export type PagedList1Core = {
  /**
   * @value 2
   */
  items: PageApiResDtoApiCenter[]
  totalCount: number
  pageIndex: number
  pageSize: number
  totalPages: number
  indexFrom: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export type PagedList1Core0 = {
  /**
   * @value 2
   */
  items: PageLogResDtoFormLog[]
  totalCount: number
  pageIndex: number
  pageSize: number
  totalPages: number
  indexFrom: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export type PagedList1Core1 = {
  /**
   * @value 2
   */
  items: PageModelResDtoFormModel[]
  totalCount: number
  pageIndex: number
  pageSize: number
  totalPages: number
  indexFrom: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export type PagedList1Core2 = {
  /**
   * @value 2
   */
  items: FormStructPageResDtoFormStruct[]
  totalCount: number
  pageIndex: number
  pageSize: number
  totalPages: number
  indexFrom: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export type AliyunOssStsAssumedRoleUserResDtoOss = {
  arn: string
  assumedRoleId: string
}
export type AliyunOssStsCredentialsResDtoOss = {
  securityToken: string
  accessKeyId: string
  accessKeySecret: string
  expiration: string
}
export type AliyunOssStsTokenResDtoOss = {
  requestId: string
  assumedRoleUser: AliyunOssStsAssumedRoleUserResDtoOss
  credentials: AliyunOssStsCredentialsResDtoOss
  bucketName: string
  tntCode: string
  tntId: string
}
/**
 * @description 枚举返回值
 */
export type EnumDtoCommon = {
  /**
   * @description 枚举值描述
   */
  title: string
  /**
   * @description 枚举值名称
   */
  name: string
}
/**
 * @description 通用键值对实体
 */
export type KeyValuePairDtoCommon = {
  /**
   * @description 键
   */
  key: string
}
/**
 * @description 第三方api分页搜索模型
 */
export type PageQueryApiReqDtoApiCenter = {
  pageIndex: number
  pageSize: number
  /**
   * @description 模糊搜索
   */
  searchKeyWord: string
}
/**
 * @description 第三方api参数
 */
export type SaveApiExternalParamReqDtoApiCenter = {
  id: string
  /**
   * @description 配置参数类型
   */
  paramType: string
  /**
   * @description 参数名
   */
  paramName: string
  /**
   * @description 值类型
   */
  valueType: string
  /**
   * @description 是否必填
   */
  isRequired: number
  /**
   * @value 2
   * @description 子类参数
   */
  children: SaveApiExternalParamReqDtoApiCenter[]
}
/**
 * @description 保存第三方api请求实体
 */
export type SaveApiExternalReqDtoApiCenter = {
  id: string
  /**
   * @description api名称
   */
  name: string
  /**
   * @description 请求地址
   */
  url: string
  /**
   * @description 描述
   */
  description: string
  /**
   * @description 请求方式
   */
  requestType: string
  /**
   * @description 超时时长默认15s
   */
  timeOut: number
  /**
   * @description body类型
   */
  bodyType: string
  /**
   * @description 返回结构转换格式
   */
  returnStructureConversionFormat: string
  /**
   * @description 是否允许外部分享没有cookie的时候使用
   */
  isNoCookie: number
  /**
   * @description 接口类型
   */
  apiType: string
  /**
   * @value 2
   * @description 请求头参数
   */
  headerParams: SaveApiExternalParamReqDtoApiCenter[]
  /**
   * @value 2
   * @description Path参数
   */
  pathParams: SaveApiExternalParamReqDtoApiCenter[]
  /**
   * @value 2
   * @description query参数
   */
  queryParams: SaveApiExternalParamReqDtoApiCenter[]
  /**
   * @value 2
   * @description 请求实体参数
   */
  bodyParams: SaveApiExternalParamReqDtoApiCenter[]
  /**
   * @value 2
   * @description 返回实体参数
   */
  returnParams: SaveApiExternalParamReqDtoApiCenter[]
}
/**
 * @description 日志查询条件
 */
export type PageQueryFormLogReqDtoFormLog = {
  pageIndex: number
  pageSize: number
  /**
   * @description 表单id或模型id或数据id
   */
  objectId: string
  /**
   * @description 搜索关键字
   */
  searchKeyWord: string
  /**
   * @description 搜索类型:Struct结构、Data数据、Model模型、Api接口、Mapping映射
   */
  searchType: string
}
/**
 * @description 表字段信息请求
 */
export type DataTableFieldReqDtoFormModel = {
  /**
   * @description 原始表
   */
  originalTable: string
  /**
   * @description 前置SQL
   */
  prefixSql: string
  /**
   * @description 模型类型
   */
  modelType: string
  /**
   * @description 字段的类型
   */
  fieldTypes: string[]
}
/**
 * @description 表单模型参数子表Dto
 */
export type FormFieldParamReqDtoFormModel = {
  /**
   * @description 字段名称
   */
  fieldName: string
  /**
   * @description 关系
   */
  relation: string
  /**
   * @description 值
   */
  data: string
}
/**
 * @description 按模型分页获取数据
 */
export type PageQueryModelDataReqDtoFormModel = {
  pageIndex: number
  pageSize: number
  /**
   * @description 模型Id
   */
  modelId: string
  /**
   * @description 模糊查询的字段
   */
  searchFields: string[]
  /**
   * @description 模糊查询
   */
  searchKeyWord: string
  /**
   * @description 查询的Id
   */
  id: string
  /**
   * @description 显示的字段列表
   */
  showFields: string[]
  /**
   * @value 2
   * @description 模型请求参数
   */
  paramValues: FormFieldParamReqDtoFormModel[][]
}
/**
 * @description 模型分页搜索模型
 */
export type PageQueryModelReqDtoFormModel = {
  pageIndex: number
  pageSize: number
  /**
   * @description 模糊搜索
   */
  searchKeyWord: string
}
/**
 * @description 保存表单模型参数子表Dto
 */
export type SaveFormFieldParamReqDtoFormModel = {
  /**
   * @description 表id
   */
  tableId: string
  /**
   * @description 表名
   */
  tableName: string
  /**
   * @description 字段名称
   */
  fieldName: string
  /**
   * @description 关系
   */
  relation: string
}
/**
 * @description 保存表单模型结构Dto
 */
export type SaveFormModelStructReqDtoFormModel = {
  /**
   * @value 2
   */
  relation: SaveModelRelationFormModel[]
}
/**
 * @description 保存表单模型子表Dto
 */
export type SaveFormModelSubReqDtoFormModel = {
  /**
   * @description 表id
   */
  tableId: string
  /**
   * @description 关联表名
   */
  tableName: string
  /**
   * @description 字段名称
   */
  fieldName: string
  /**
   * @description 字段描述
   */
  fieldText: string
  /**
   * @description 显示类型
   */
  showType: string
  /**
   * @description 对齐方式
   */
  alignment: string
  /**
   * @description 宽度
   */
  width: number
}
/**
 * @description 模型的主要信息
 */
export type SaveModelInfoFormModel = {
  /**
   * @description 主表id
   */
  tableId: string
  /**
   * @description 模型名称
   */
  name: string
  /**
   * @description 模型描述
   */
  description: string
  /**
   * @description 原始表
   */
  originalTable: string
  /**
   * @description 前置SQL
   */
  prefixSql: string
  /**
   * @description 模型类型
   */
  modelType: string
}
/**
 * @description 主表发出的所有连线
 */
export type SaveModelRelationFormModel = {
  /**
   * @description 原始字段
   */
  field: string
  /**
   * @description 关联表
   */
  linkTableName: string
  /**
   * @description 关联表别名
   */
  linkTableText: string
  /**
   * @description 关联字段
   */
  linkField: string
  /**
   * @description 表id
   */
  linkTableId: string
}
/**
 * @description 模型保存请求实体
 */
export type SaveModelReqDtoFormModel = {
  id: string
  info: SaveModelInfoFormModel
  structs: SaveFormModelStructReqDtoFormModel
  /**
   * @value 2
   * @description 模型明细
   */
  subs: SaveFormModelSubReqDtoFormModel[]
  /**
   * @value 2
   * @description 模型参数明细
   */
  params: SaveFormFieldParamReqDtoFormModel[][]
}
/**
 * @description 导出请求实体
 */
export type ExportFormDataReqDtoFormStruct = {
  /**
   * @description 表单id
   */
  formId: string
  /**
   * @description 查询关键字
   */
  searchKeyWord: string
  /**
   * @value 2
   * @description 高级搜索
   */
  searchBoxs: KeyValuePairDtoCommon[]
  /**
   * @description 排序方式
   */
  orderDir: string[]
  /**
   * @description 排序字段
   */
  orderField: string[]
  /**
   * @description 选中的数据id
   */
  ids: string[]
  /**
   * @description 需要导出的子表单id
   */
  subFormIds: string[]
  /**
   * @description 是否导出图片
   */
  isIncludeImg: boolean
}
/**
 * @description 外部分享参数
 */
export type ExternalSharingFormStruct = {
  /**
   * @description 是否允许外部分享
   */
  outSide: boolean
  /**
   * @description 开始和结束时间
   */
  selectTime: string[]
  /**
   * @description 备注
   */
  remark: string
  /**
   * @description 顶部头图
   */
  headImgUrl: string
  /**
   * @description 外部分享样式
   */
  outStyle: string
  /**
   * @description 底部内容
   */
  bottomContent: string
  /**
   * @description 是否允许重复提交
   */
  isLimitReSubmit: boolean
}
/**
 * @description 表单设置
 */
export type FormConfigFormStruct = {
  share: ExternalSharingFormStruct
}
/**
 * @description 当前版本表单分页查询请求条件
 */
export type PageQueryCurrentFormStructReqDtoFormStruct = {
  pageIndex: number
  pageSize: number
  /**
   * @description 关键字模糊查询
   */
  searchKeyWord: string
}
/**
 * @description 表单数据分页查询请求条件
 */
export type PageQueryFormDataReqDtoFormStruct = {
  pageIndex: number
  pageSize: number
  /**
   * @description 表单id
   */
  formId: string
  /**
   * @description 查询关键字
   */
  searchKeyWord: string
  /**
   * @value 2
   * @description 高级搜索
   */
  searchBoxs: KeyValuePairDtoCommon[]
  /**
   * @description 排序方式
   */
  orderDir: string[]
  /**
   * @description 排序字段
   */
  orderField: string[]
}
/**
 * @description 表单版本分页查询请求条件
 */
export type PageQueryFormStructVersionReqDtoFormStruct = {
  pageIndex: number
  pageSize: number
  /**
   * @description 表单id
   */
  formId: string
  /**
   * @description 关键字模糊查询
   */
  searchKeyWord: string
}
export type SaveFormJsonReqDtoFormStruct = {
  menuId: string
  formJson: string
}
/**
 * @description 表单基础信息
 */
export type SaveFormReqDtoFormStruct = {
  /**
   * @description 表单id
   */
  id: string
  /**
   * @description 表单类型
   */
  formType: string
  /**
   * @description 表单名称
   */
  name: string
  /**
   * @description 表单描述
   */
  description: string
  /**
   * @description 关联菜单id
   */
  menuId: string
  /**
   * @description 表名
   */
  tableName: string
  /**
   * @description 构建方式
   */
  buildFormat: string
}
/**
 * @description 表单保存
 */
export type SaveFormStructReqDtoFormStruct = {
  /**
   * @description 表单id
   */
  id: string
  /**
   * @description 表单类型
   */
  formType: string
  /**
   * @description 版本名称
   */
  name: string
  /**
   * @description 版本描述
   */
  description: string
  /**
   * @description 是否是当前版本
   */
  isCurrentVersion: boolean
  /**
   * @description 构建方式
   */
  buildFormat: string
  formConfig: FormConfigFormStruct
  widgets: any[]
}
/**
 * @description 第三方api参数
 */
export type ApiExternalParamResDtoApiCenter = {
  id: string
  /**
   * @description 配置参数类型
   */
  paramType: string
  /**
   * @description 参数名
   */
  paramName: string
  /**
   * @description 默认值
   */
  defaultValue: string
  /**
   * @description 值类型
   */
  valueType: string
  /**
   * @description 是否必填
   */
  isRequired: number
  /**
   * @value 2
   * @description 子类参数
   */
  children: ApiExternalParamResDtoApiCenter[]
}
/**
 * @description 第三方api实体
 */
export type ApiResDtoApiCenter = {
  id: string
  /**
   * @description api名称
   */
  name: string
  /**
   * @description 描述
   */
  description: string
  /**
   * @description 请求地址
   */
  url: string
  /**
   * @description 请求方式
   */
  requestType: string
  /**
   * @description 超时时长默认15s
   */
  timeOut: number
  /**
   * @description body类型
   */
  bodyType: string
  /**
   * @description 返回结构转换格式
   */
  returnStructureConversionFormat: string
  /**
   * @description 是否允许外部分享没有cookie的时候使用
   */
  isNoCookie: number
  /**
   * @description 接口类型
   */
  apiType: string
  /**
   * @value 2
   * @description 请求头参数
   */
  headerParams: ApiExternalParamResDtoApiCenter[]
  /**
   * @value 2
   * @description Path参数
   */
  pathParams: ApiExternalParamResDtoApiCenter[]
  /**
   * @value 2
   * @description query参数
   */
  queryParams: ApiExternalParamResDtoApiCenter[]
  /**
   * @value 2
   * @description 请求实体参数
   */
  bodyParams: ApiExternalParamResDtoApiCenter[]
  /**
   * @value 2
   * @description 返回实体参数
   */
  returnParams: ApiExternalParamResDtoApiCenter[]
}
/**
 * @description 第三方api分页数据
 */
export type PageApiResDtoApiCenter = {
  id: string
  /**
   * @description api名称
   */
  name: string
  /**
   * @description 描述
   */
  description: string
  /**
   * @description 请求地址
   */
  url: string
  /**
   * @description 请求方式
   */
  requestType: string
  /**
   * @description 超时时长默认15s
   */
  timeOut: number
  /**
   * @description body类型
   */
  bodyType: string
  /**
   * @description 返回结构转换格式
   */
  returnStructureConversionFormat: string
  /**
   * @description 是否允许外部分享没有cookie的时候使用
   */
  isNoCookie: number
  /**
   * @description 接口类型
   */
  apiType: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  creationTime: string
}
/**
 * @description 系统参数返回
 */
export type SystemParamResDtoApiCenter = {
  /**
   * @description 系统参数名
   */
  systemParamName: string
  /**
   * @description 系统参数值
   */
  systemParamValue: string
  /**
   * @description 系统参数描述
   */
  systemParamDesc: string
}
/**
 * @description 日志分页数据
 */
export type PageLogResDtoFormLog = {
  /**
   * @value #datetime()
   */
  creationTime: string
  creatorId: string
  /**
   * @value #datetime()
   */
  lastModificationTime: string
  lastModifierId: string
  isDeleted: boolean
  deleterId: string
  /**
   * @value #datetime()
   */
  deletionTime: string
  id: string
  /**
   * @description 表单Id
   */
  formId: string
  /**
   * @description 单据Id
   */
  dataId: string
  /**
   * @description 组件Id
   */
  fieldId: string
  /**
   * @description 日志类型
   */
  logType: string
  /**
   * @description 操作类型
   */
  operationType: string
  /**
   * @description 描述
   */
  description: string
}
/**
 * @description 表或sql字段信息
 */
export type DataTableFieldResDtoFormModel = {
  /**
   * @description 字段排序
   */
  idx: number
  /**
   * @description 字段名称
   */
  fieldName: string
  /**
   * @description 字段类型
   */
  fieldType: string
  /**
   * @description 字段描述
   */
  fieldDescription: string
}
/**
 * @description 数据库所有数据表的列表信息
 */
export type DataTableResDtoFormModel = {
  /**
   * @description 表名
   */
  tableName: string
  /**
   * @description 表描述
   */
  description: string
}
/**
 * @description 保存表单模型参数子表Dto
 */
export type FormFieldParamResDtoFormModel = {
  /**
   * @description 表id
   */
  tableId: string
  /**
   * @description 表名
   */
  tableName: string
  /**
   * @description 字段名称
   */
  fieldName: string
  /**
   * @description 关系
   */
  relation: string
}
/**
 * @description 保存表单模型结构Dto
 */
export type FormModelStructResDtoFormModel = {
  /**
   * @value 2
   */
  relation: SaveModelRelationResDtoFormModel[]
}
/**
 * @description 保存表单模型子表Dto
 */
export type FormModelSubResDtoFormModel = {
  /**
   * @description 表id
   */
  tableId: string
  /**
   * @description 关联表名
   */
  tableName: string
  /**
   * @description 字段名称
   */
  fieldName: string
  /**
   * @description 字段描述
   */
  fieldText: string
  /**
   * @description 显示类型
   */
  showType: string
  /**
   * @description 对齐方式
   */
  alignment: string
  /**
   * @description 宽度
   */
  width: number
}
/**
 * @description 模型分页数据
 */
export type ModelDataPageResDtoFormModel = {
  /**
   * @description 数据总条数
   */
  recordsTotal: number
}
/**
 * @description 模型返回结构
 */
export type ModelResDtoFormModel = {
  id: string
  info: SaveModelInfoResDtoFormModel
  structs: FormModelStructResDtoFormModel
  /**
   * @value 2
   * @description 模型明细
   */
  subs: FormModelSubResDtoFormModel[]
  /**
   * @value 2
   * @description 模型明细
   */
  params: FormFieldParamResDtoFormModel[][]
}
export type ModelSubResDtoFormModel = {
  /**
   * @description 主键
   */
  id: string
  /**
   * @description 表名
   */
  tableName: string
  /**
   * @description 字段名
   */
  fieldName: string
  /**
   * @description 描述
   */
  description: string
  /**
   * @description 显示类型
   */
  showType: string
}
/**
 * @description 模型分页返回数据
 */
export type PageModelResDtoFormModel = {
  id: string
  /**
   * @description 原始表或sql
   */
  originalTable: string
  /**
   * @description 模型名称
   */
  name: string
  /**
   * @description 描述
   */
  description: string
  /**
   * @description 模型类型
   */
  modelType: string
  /**
   * @value #datetime()
   * @description 创建时间
   */
  creationTime: string
  /**
   * @value #datetime()
   * @description 最后修改时间
   */
  lastModifiCationTime: string
}
/**
 * @description 模型的主要信息
 */
export type SaveModelInfoResDtoFormModel = {
  /**
   * @description 主表id
   */
  tableId: string
  /**
   * @description 模型名称
   */
  name: string
  /**
   * @description 模型描述
   */
  description: string
  /**
   * @description 原始表
   */
  originalTable: string
  /**
   * @description 前置SQL
   */
  prefixSql: string
  /**
   * @description 模型类型
   */
  modelType: string
}
/**
 * @description 主表发出的所有连线
 */
export type SaveModelRelationResDtoFormModel = {
  /**
   * @description 原始字段
   */
  field: string
  /**
   * @description 关联表
   */
  linkTableName: string
  /**
   * @description 关联表别名
   */
  linkTableText: string
  /**
   * @description 关联字段
   */
  linkField: string
  /**
   * @description 表id
   */
  linkTableId: string
}
/**
 * @description 表单结构分页返回实体
 */
export type FormStructPageResDtoFormStruct = {
  /**
   * @description 版本id
   */
  versionId: string
  /**
   * @description 表单id
   */
  formId: string
  /**
   * @description 表单编号
   */
  formCode: string
  /**
   * @description 表单名称
   */
  formName: string
  /**
   * @description 表单描述
   */
  formDesc: string
  /**
   * @description 表单类型
   */
  formType: string
  /**
   * @description 访问次数
   */
  visits: number
  /**
   * @description 版本名称
   */
  versionName: string
  /**
   * @description 版本描述
   */
  versionDesc: string
  /**
   * @description 是否被删除
   */
  isDelete: boolean
  /**
   * @description 是否可以被外部分享
   */
  isOut: boolean
  /**
   * @value #datetime()
   * @description 创建时间
   */
  creationTime: string
  /**
   * @description 是否为当前版本
   */
  isCurrentVersion: boolean
  /**
   * @description 创建人
   */
  creatorName: string
}
/**
 * @description 子表单对象
 */
export type FormSubResDtoFormStruct = {
  /**
   * @description 子表单组件id
   */
  id: string
  /**
   * @description 子表单名称
   */
  name: string
}
/**
 * @description 表单数据分页查询返回数据
 */
export type PageQueryFormDataResDtoFormStruct = {
  data: {}[]
  /**
   * @description 数据总条数
   */
  recordsTotal: number
  /**
   * @value 2
   * @description 小计集合
   */
  subTotals: KeyValuePairDtoCommon[]
  /**
   * @value 2
   * @description 总计集合
   */
  totals: KeyValuePairDtoCommon[]
}
export type RemoteServiceErrorInfoHttp = {
  code: string
  message: string
  details: string
  data: {}
  /**
   * @value 2
   */
  validationErrors: RemoteServiceValidationErrorInfoHttp[]
}
export type RemoteServiceErrorResponseHttp = {
  error: RemoteServiceErrorInfoHttp
}
export type RemoteServiceValidationErrorInfoHttp = {
  message: string
  members: string[]
}
