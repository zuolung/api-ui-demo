import { IResponse } from "../commonTypes/response.d";

/**
 * 获取用户商品列表
 * @url /z/personal/1.0/collection/list
 * @introduce 这是请求所有用户数据的接口
 * @method GET
 */
export type collectionList = {
  request: {
    /**
     * 不传则查询当前用户本人
     */
    userId?: string;
    pageSize: number;
    offset: number;
  };
  response: IResponse<
    /**
     * @rule 4
     */
    {
      image: string;
      /**
       * @value  xxxxx商品
       */
      title: string;
      /**
       * 总量
       * @value 666
       */
      total: number;
      /**
       * @value 39.9
       */
      price: string;
    }[]
  >;
};
