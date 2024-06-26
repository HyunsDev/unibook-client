import { Endpoint } from "endpoint-client";
import { BookObject } from "../../../object";

/**
 * GET /users/:userId/books
 * 책 목록을 조회합니다.
 */
export const ListUserBook: Endpoint<ListUserBookReq, ListUserBookRes> = {
  method: "GET",
  path: (e) => `/users/${e.userId}/books`,
  pathParams: ["userId"],
  queryParams: ["page", "take"],
};
export type ListUserBookReqPath = {
  userId: number | string;
};
export type ListUserBookReqQuery = {
  page?: number;
  take?: number;
};
export type ListUserBookReq = ListUserBookReqPath & ListUserBookReqQuery;
export type ListUserBookRes = {
  books: BookObject[];
  total: number;
};
