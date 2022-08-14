import {
  健康状况登记地区统计VO_1,
  CommResponse,
  CommResponseobject,
  健康状况日报VO,
  健康状况登记地区统计VOroute,
  SelectResult_1,
} from '../baseTypes'

/**
 * 分页查询健康状况日汇总
 * @url /center/health/detail/day
 * @method post
 * @introduce --
 */
export type IdetailDay = {
  request: {
    /**
     * 日期 yyyy-MM-dd
     * @value
     */
    day?: string

    /**
     * 学生日报统计类型 1按院系2按专业3按班级4按部门 不传默认按院系
     * @value
     */
    groupByType?: number

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 平台
     * @value
     */
    platform?: string

    /**
     * 加密后的用户ID
     * @value
     */
    uuToken?: string

    /**
     *
     * @value
     */
    classCodes?: string[]
  }

  response: 健康状况登记地区统计VO_1
}

/**
 * 打卡信息备注
 * @url /center/health/detail/doRemark
 * @method post
 * @introduce --
 */
export type IdetailDoRemark = {
  request: {
    /**
     * id
     * @value
     */
    id?: number

    /**
     * remark
     * @value
     */
    remark?: string
  }

  response: CommResponse
}

/**
 * 修改健康状况日报
 * @url /center/health/detail/doUpdate
 * @method post
 * @introduce --
 */
export type IdetailDoUpdate = {
  request: {
    /**
     * 返还地-市
     * @value
     */
    backCity?: string

    /**
     * 返还地-市编码
     * @value
     */
    backCityCode?: number

    /**
     * 返还地-区/县
     * @value
     */
    backDistrict?: string

    /**
     * 返还地-区/县编码
     * @value
     */
    backDistrictCode?: number

    /**
     * 返还地-省份
     * @value
     */
    backProvince?: string

    /**
     * 返还地-省份编码
     * @value
     */
    backProvinceCode?: number

    /**
     * 返校备注：车次或航班号
     * @value
     */
    backRemark?: string

    /**
     * 返校方式 1火车 2飞机 3轮渡 4拼车 5出租车 6自驾 7其他
     * @value
     */
    backWay?: number

    /**
     * 市
     * @value
     */
    city?: string

    /**
     * 市编码
     * @value
     */
    cityCode?: number

    /**
     * 班级/部门编码
     * @value
     */
    classCode?: string

    /**
     * 班级/部门
     * @value
     */
    className?: string

    /**
     * 是否接触过高发地区 0是1否
     * @value
     */
    contactArea?: number

    /**
     * 接触日期
     * @value #datetime()
     */
    contactDate?: string

    /**
     * 是否接触过确诊者 0是1否
     * @value
     */
    contactPatient?: number

    /**
     * 国家
     * @value
     */
    country?: string

    /**
     * 院系
     * @value
     */
    department?: string

    /**
     * 院系编码
     * @value
     */
    departmentCode?: string

    /**
     * 设备id
     * @value
     */
    deviceId?: string

    /**
     * 区/县
     * @value
     */
    district?: string

    /**
     * 区/县编码
     * @value
     */
    districtCode?: number

    /**
     * 招生年份（年级）
     * @value
     */
    entranceYear?: number

    /**
     * 拓展字段
     * @value
     */
    extField?: string

    /**
     * 是否全日制 0是1否
     * @value
     */
    fullTimeFlag?: number

    /**
     * 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
     * @value
     */
    healthStatusNew?: string

    /**
     * 是否春节期间在校 0是1否
     * @value
     */
    holidayInSchool?: number

    /**
     * id
     * @value
     */
    id?: number

    /**
     * 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
     * @value
     */
    identitySecondType?: string

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 是否政府定点集中隔离 0是1否
     * @value
     */
    inGovQuarantine?: number

    /**
     * 是否居家健康监测或隔离 0是1否
     * @value
     */
    inHomeQuarantine?: number

    /**
     * 是否在校 0是1否
     * @value
     */
    inSchool?: number

    /**
     * 是否校内集中隔离 0是1否
     * @value
     */
    inSchoolQuarantine?: number

    /**
     * 居住区是否有确诊、无症状、疑似 0是 1否
     * @value
     */
    isCommunityPatient?: number

    /**
     * 家庭成员是否有确诊、疑似、感染者 0是 1否
     * @value
     */
    isFamiliyPatient?: number

    /**
     * 今日是否在实习单位 0是 1否
     * @value
     */
    isInCompany?: number

    /**
     * 是否确诊、无症状 0是1否
     * @value
     */
    isPatient?: number

    /**
     * 是否为疑似病例 0是1否
     * @value
     */
    isSuspected?: number

    /**
     * 今日是否返校 0是 1否
     * @value
     */
    isTodayBack?: number

    /**
     * 隔离地点
     * @value
     */
    isolatedPlace?: string

    /**
     * 学工号
     * @value
     */
    jobNo?: string

    /**
     * 最近一次核酸检测日期（yyyy-MM-dd）
     * @value
     */
    lastNucleicAcidDate?: string

    /**
     * 现在联系方式
     * @value
     */
    linkPhone?: string

    /**
     * 登录手机号
     * @value
     */
    mobilePhone?: string

    /**
     * 姓名
     * @value
     */
    name?: string

    /**
     * 未接种疫苗原因 1未到年龄2与其他疫苗冲突3未到接种时间4身体抱恙无法接种
     * @value
     */
    noVaccineReason?: string

    /**
     * 近七日是否有核酸检测 0是1否
     * @value
     */
    nucleicAcidFlag?: number

    /**
     * 家长联系方式
     * @value
     */
    parentsPhone?: string

    /**
     * 就诊医院
     * @value
     */
    patientHospital?: string

    /**
     * 平台
     * @value
     */
    platform?: string

    /**
     * 省
     * @value
     */
    province?: string

    /**
     * 省编码
     * @value
     */
    provinceCode?: number

    /**
     * remark
     * @value
     */
    remark?: string

    /**
     * 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
     * @value
     */
    roommateHealthStatus?: string

    /**
     * 专业
     * @value
     */
    specialities?: string

    /**
     * 专业编码
     * @value
     */
    specialitiesCode?: string

    /**
     * 今日体温
     * @value
     */
    temperature?: string

    /**
     * 今日下午体温
     * @value
     */
    temperatureAfter?: string

    /**
     * 用户id
     * @value
     */
    userId?: number

    /**
     * 加密后的用户ID
     * @value
     */
    uuToken?: string

    /**
     * 疫苗第一针接种时间（yyyy-MM-dd HH:mm:ss）
     * @value
     */
    vaccineOneTime?: string

    /**
     * 疫苗接种情况 0未接种1已接种一针2已接种两针3已接种三针
     * @value
     */
    vaccineStatus?: string

    /**
     * 疫苗第三针接种时间（yyyy-MM-dd HH:mm:ss）
     * @value
     */
    vaccineThreeTime?: string

    /**
     * 疫苗第二针接种时间（yyyy-MM-dd HH:mm:ss）
     * @value
     */
    vaccineTwoTime?: string
  }

  response: CommResponse
}

/**
 * 导出
 * @url /center/health/detail/exportData
 * @method post
 * @introduce --
 */
export type IdetailExportData = {
  request: {
    /**
     * 返校方式 1火车 2飞机 3轮渡 4拼车 5出租车 6自驾 7其他
     * @value
     */
    backWay?: number

    /**
     * 楼栋
     * @value
     */
    building?: string

    /**
     * 上报时间结束
     * @value
     */
    createTimeEnd?: string

    /**
     * 上报时间开始
     * @value
     */
    createTimeStart?: string

    /**
     * 当前页,从1开始(默认1)
     * @value
     */
    currentPage?: number

    /**
     * 用户是否自定义limit最大值,默认：false，部分下载场景下需要自定义
     * @value
     */
    customLimit?: boolean

    /**
     * 招生年份（年级）
     * @value
     */
    entranceYear?: number

    /**
     * 房间号
     * @value
     */
    floor?: string

    /**
     * 是否全日制 0是1否
     * @value
     */
    fullTimeFlag?: number

    /**
     * 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
     * @value
     */
    healthStatusNew?: string

    /**
     * 是否春节期间在校 0是1否
     * @value
     */
    holidayInSchool?: number

    /**
     * 身份证号
     * @value
     */
    identity?: string

    /**
     * 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
     * @value
     */
    identitySecondType?: string

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 是否政府定点集中隔离 0是1否
     * @value
     */
    inGovQuarantine?: number

    /**
     * 是否居家健康监测或隔离 0是1否
     * @value
     */
    inHomeQuarantine?: number

    /**
     * 是否在校 0是1否
     * @value
     */
    inSchool?: number

    /**
     * 是否校内集中隔离 0是1否
     * @value
     */
    inSchoolQuarantine?: number

    /**
     * 居住区是否有确诊、无症状、疑似 0是 1否
     * @value
     */
    isCommunityPatient?: number

    /**
     * 家庭成员是否有确诊、疑似、感染者 0是 1否
     * @value
     */
    isFamiliyPatient?: number

    /**
     * 今日是否在实习单位 0是 1否
     * @value
     */
    isInCompany?: number

    /**
     * 是否确诊、无症状 0是1否
     * @value
     */
    isPatient?: number

    /**
     * 是否为疑似病例 0是1否
     * @value
     */
    isSuspected?: number

    /**
     * 今日是否返校 0是 1否
     * @value
     */
    isTodayBack?: number

    /**
     * 学工号
     * @value
     */
    jobNo?: string

    /**
     * 登录手机号
     * @value
     */
    mobilePhone?: string

    /**
     * 姓名
     * @value
     */
    name?: string

    /**
     * 未接种疫苗原因 1未到年龄2与其他疫苗冲突3未到接种时间4身体抱恙无法接种
     * @value
     */
    noVaccineReason?: string

    /**
     * 近七日是否有核酸检测 0是1否
     * @value
     */
    nucleicAcidFlag?: number

    /**
     * 分页大小(默认10)
     * @value
     */
    pageSize?: number

    /**
     * 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
     * @value
     */
    roommateHealthStatus?: string

    /**
     * 用户ID
     * @value
     */
    userId?: number

    /**
     * 疫苗接种情况 0未接种1已接种一针2已接种两针3已接种三针
     * @value
     */
    vaccineStatus?: string

    /**
     *
     * @value
     */
    classCode?: string

    /**
     *
     * @value
     */
    classCodes?: string[]

    /**
     *
     * @value
     */
    className?: string

    /**
     *
     * @value
     */
    contactArea?: number

    /**
     *
     * @value
     */
    contactPatient?: number

    /**
     *
     * @value
     */
    department?: string

    /**
     *
     * @value
     */
    departmentCode?: string

    /**
     *
     * @value
     */
    district?: string

    /**
     *
     * @value
     */
    districtCode?: number

    /**
     *
     * @value
     */
    healthStatus?: number

    /**
     *
     * @value
     */
    healthStatusNewList?: string[]

    /**
     *
     * @value
     */
    id?: number

    /**
     *
     * @value
     */
    isSearchCount?: boolean

    /**
     *
     * @value
     */
    linkPhone?: string

    /**
     *
     * @value
     */
    locationInfo?: string

    /**
     *
     * @value
     */
    longitudeAndLatitude?: string

    /**
     *
     * @value
     */
    order?: string

    /**
     *
     * @value
     */
    parentsPhone?: string

    /**
     *
     * @value
     */
    roommateHealthStatusList?: string[]

    /**
     *
     * @value
     */
    schoolCode?: string

    /**
     *
     * @value
     */
    sort?: string

    /**
     *
     * @value
     */
    specialities?: string

    /**
     *
     * @value
     */
    specialitiesCode?: string

    /**
     *
     * @value
     */
    updateTimeEnd?: string

    /**
     *
     * @value
     */
    updateTimeStart?: string
  }

  response: CommResponseobject
}

/**
 * 导出学生日汇总
 * @url /center/health/detail/exportStudentDailyStats
 * @method post
 * @introduce --
 */
export type IdetailExportStudentDailyStats = {
  request: {
    /**
     * 日期 yyyy-MM-dd
     * @value
     */
    day?: string

    /**
     * 学生日报统计类型 1按院系2按专业3按班级4按部门 不传默认按院系
     * @value
     */
    groupByType?: number

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 平台
     * @value
     */
    platform?: string

    /**
     * 加密后的用户ID
     * @value
     */
    uuToken?: string

    /**
     *
     * @value
     */
    classCodes?: string[]
  }

  response: CommResponseobject
}

/**
 * 导出教职工日汇总
 * @url /center/health/detail/exportTeacherDailyStats
 * @method post
 * @introduce --
 */
export type IdetailExportTeacherDailyStats = {
  request: {
    /**
     * 日期 yyyy-MM-dd
     * @value
     */
    day?: string

    /**
     * 学生日报统计类型 1按院系2按专业3按班级4按部门 不传默认按院系
     * @value
     */
    groupByType?: number

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 平台
     * @value
     */
    platform?: string

    /**
     * 加密后的用户ID
     * @value
     */
    uuToken?: string

    /**
     *
     * @value
     */
    classCodes?: string[]
  }

  response: CommResponseobject
}

/**
 * 根据id查询信息
 * @url /center/health/detail/getById
 * @method post
 * @introduce --
 */
export type IdetailGetById = {
  request: {
    /**
     * id
     * @value
     */
    id?: number
  }

  response: 健康状况日报VO
}

/**
 * 分页查询健康状况日报
 * @url /center/health/detail/listData
 * @method post
 * @introduce --
 */
export type IdetailListData = {
  request: {
    /**
     * 返校方式 1火车 2飞机 3轮渡 4拼车 5出租车 6自驾 7其他
     * @value
     */
    backWay?: number

    /**
     * 楼栋
     * @value
     */
    building?: string

    /**
     * 上报时间结束
     * @value
     */
    createTimeEnd?: string

    /**
     * 上报时间开始
     * @value
     */
    createTimeStart?: string

    /**
     * 当前页,从1开始(默认1)
     * @value
     */
    currentPage?: number

    /**
     * 用户是否自定义limit最大值,默认：false，部分下载场景下需要自定义
     * @value
     */
    customLimit?: boolean

    /**
     * 招生年份（年级）
     * @value
     */
    entranceYear?: number

    /**
     * 房间号
     * @value
     */
    floor?: string

    /**
     * 是否全日制 0是1否
     * @value
     */
    fullTimeFlag?: number

    /**
     * 健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛
     * @value
     */
    healthStatusNew?: string

    /**
     * 是否春节期间在校 0是1否
     * @value
     */
    holidayInSchool?: number

    /**
     * 身份证号
     * @value
     */
    identity?: string

    /**
     * 身份二级分类 11内地学生12港澳台学生13留学生14实习生15应征入伍16延期毕业 21内地教职工22港澳台教职工23外籍教职工24离退休教职工
     * @value
     */
    identitySecondType?: string

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 是否政府定点集中隔离 0是1否
     * @value
     */
    inGovQuarantine?: number

    /**
     * 是否居家健康监测或隔离 0是1否
     * @value
     */
    inHomeQuarantine?: number

    /**
     * 是否在校 0是1否
     * @value
     */
    inSchool?: number

    /**
     * 是否校内集中隔离 0是1否
     * @value
     */
    inSchoolQuarantine?: number

    /**
     * 居住区是否有确诊、无症状、疑似 0是 1否
     * @value
     */
    isCommunityPatient?: number

    /**
     * 家庭成员是否有确诊、疑似、感染者 0是 1否
     * @value
     */
    isFamiliyPatient?: number

    /**
     * 今日是否在实习单位 0是 1否
     * @value
     */
    isInCompany?: number

    /**
     * 是否确诊、无症状 0是1否
     * @value
     */
    isPatient?: number

    /**
     * 是否为疑似病例 0是1否
     * @value
     */
    isSuspected?: number

    /**
     * 今日是否返校 0是 1否
     * @value
     */
    isTodayBack?: number

    /**
     * 学工号
     * @value
     */
    jobNo?: string

    /**
     * 登录手机号
     * @value
     */
    mobilePhone?: string

    /**
     * 姓名
     * @value
     */
    name?: string

    /**
     * 未接种疫苗原因 1未到年龄2与其他疫苗冲突3未到接种时间4身体抱恙无法接种
     * @value
     */
    noVaccineReason?: string

    /**
     * 近七日是否有核酸检测 0是1否
     * @value
     */
    nucleicAcidFlag?: number

    /**
     * 分页大小(默认10)
     * @value
     */
    pageSize?: number

    /**
     * 共同居住人员健康情况 1正常2发烧3咳嗽4乏力5腹泻6头晕头痛7出疹8水疱9其它
     * @value
     */
    roommateHealthStatus?: string

    /**
     * 用户ID
     * @value
     */
    userId?: number

    /**
     * 疫苗接种情况 0未接种1已接种一针2已接种两针3已接种三针
     * @value
     */
    vaccineStatus?: string

    /**
     *
     * @value
     */
    classCode?: string

    /**
     *
     * @value
     */
    classCodes?: string[]

    /**
     *
     * @value
     */
    className?: string

    /**
     *
     * @value
     */
    contactArea?: number

    /**
     *
     * @value
     */
    contactPatient?: number

    /**
     *
     * @value
     */
    department?: string

    /**
     *
     * @value
     */
    departmentCode?: string

    /**
     *
     * @value
     */
    district?: string

    /**
     *
     * @value
     */
    districtCode?: number

    /**
     *
     * @value
     */
    healthStatus?: number

    /**
     *
     * @value
     */
    healthStatusNewList?: string[]

    /**
     *
     * @value
     */
    id?: number

    /**
     *
     * @value
     */
    isSearchCount?: boolean

    /**
     *
     * @value
     */
    linkPhone?: string

    /**
     *
     * @value
     */
    locationInfo?: string

    /**
     *
     * @value
     */
    longitudeAndLatitude?: string

    /**
     *
     * @value
     */
    order?: string

    /**
     *
     * @value
     */
    parentsPhone?: string

    /**
     *
     * @value
     */
    roommateHealthStatusList?: string[]

    /**
     *
     * @value
     */
    schoolCode?: string

    /**
     *
     * @value
     */
    sort?: string

    /**
     *
     * @value
     */
    specialities?: string

    /**
     *
     * @value
     */
    specialitiesCode?: string

    /**
     *
     * @value
     */
    updateTimeEnd?: string

    /**
     *
     * @value
     */
    updateTimeStart?: string
  }

  response: 健康状况日报VO
}

/**
 * 分页查询健康状况日汇总(route)
 * @url /center/health/detail/route/day
 * @method post
 * @introduce --
 */
export type IrouteDay = {
  request: {
    /**
     * 日期 yyyy-MM-dd
     * @value
     */
    day?: string

    /**
     * 学生日报统计类型 1按院系2按专业3按班级4按部门 不传默认按院系
     * @value
     */
    groupByType?: number

    /**
     * 身份类型 1学生2教职工
     * @value
     */
    identityType?: number

    /**
     * 平台
     * @value
     */
    platform?: string

    /**
     * 加密后的用户ID
     * @value
     */
    uuToken?: string

    /**
     *
     * @value
     */
    classCodes?: string[]

    /**
     * schoolCode
     * @value
     */
    schoolCode?: string

    /**
     * schoolName
     * @value
     */
    schoolName?: string

    /**
     * userId
     * @value
     */
    userId?: number

    /**
     * userName
     * @value
     */
    userName?: string
  }

  response: 健康状况登记地区统计VOroute
}

/**
 * 获取用户需要分组统计的类型列表(route)
 * @url /center/health/detail/route/getGroupByTypeList
 * @method post
 * @introduce --
 */
export type IrouteGetGroupByTypeList = {
  request: {
    /**
     * schoolCode
     * @value
     */
    schoolCode?: string

    /**
     * schoolName
     * @value
     */
    schoolName?: string

    /**
     * userId
     * @value
     */
    userId?: number

    /**
     * userName
     * @value
     */
    userName?: string
  }

  response: SelectResult_1
}
