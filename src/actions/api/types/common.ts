/**
 * 获取用户列表信息
 * @url /z/common/user/list
 * @introduce 这是请求所有用户数据的接口
 * @method GET
 */
export type userInfo = {
  request: {
    /**
     * 每页数据数量
     **/
    pageSize: number
    /**
     * 第几页
     **/
    pageNum: number
  }
  response: {
    /**
     * 成功
     **/
    success: boolean
    data: {
      /**
       * 用户总数
       * @value 39
       **/
      total: number
      /**
       * 用户列表
       * @rule 19-20
       **/
      list: {
        /**
         * 用户名称
         * @value #title
         **/
        userName: string
      }[]
    }
  }
}
