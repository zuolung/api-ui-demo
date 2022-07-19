// @ts-nocheck
import { createFetch } from "../request"
import type { getRoleList, login, sendCode } from "./types/common"

// 获取角色列表
export const getRoleListAction = createFetch<
  getRoleList["request"],
  getRoleList["response"]
>("/z/common/1.0/role/list", "GET")

// 登录
export const loginAction = createFetch<login["request"], login["response"]>(
  "/z/api/1.0/login",
  "POST"
)

// 获取验证码
export const sendCodeAction = createFetch<
  sendCode["request"],
  sendCode["response"]
>("/z/api/1.0/sendCode", "POST")
