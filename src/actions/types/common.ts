import { IResponse } from "../commonTypes/response.d";

/**
 * 获取角色列表111
 * @url /z/common/1.0/role/list
 * @method GET
 */
export type getRoleList = {
  request: Record<string, any>;
  response: IResponse<
    Array<{
      /**
       * 名称
       * @value ['角色AA11 ', '角色BB11']
       * @rule +1
       */
      name: string;

      /**
       * 描述角色作用
       * @value 1
       * @rule +1
       */
      id: number;

      /**
       * 描述角色作用
       * @value ['描述AA', '描述BB']
       * @rule +1
       */
      desc: string;
    }>
  >;
};

/**
 * 登录
 * @url /z/api/1.0/login
 * @method POST
 */
export type login = {
  request: {
    phone: string;
    code: string;
    inviteCode?: string;
  };
  response: IResponse<{
    /**
     * @value  xcfvgbhdewdwe
     **/
    token: string;
  }>;
};

/**
 *  获取验证码
 * @url /z/api/1.0/sendCode
 * @method POST
 */
export type sendCode = {
  request: {
    phone: string;
  };
  response: IResponse<boolean>;
};
