import { Endpoint } from "endpoint-client";

/**
 * POST /users/:userId/notifications/devices
 * 디바이스를 등록합니다.
 */
export const RegisterUserNotificationDevice: Endpoint<
  RegisterUserNotificationDeviceReq,
  RegisterUserNotificationDeviceRes
> = {
  method: "POST",
  path: (e) => `/users/${e.userId}/notifications/devices`,
  pathParams: ["userId"],
  bodyParams: ["token"],
};
export type RegisterUserNotificationDeviceReqPath = {
  userId: number | string;
};
export type RegisterUserNotificationDeviceReq =
  RegisterUserNotificationDeviceReqPath & {
    token: string;
  };
export type RegisterUserNotificationDeviceRes = {};
