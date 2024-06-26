import { Endpoint } from "endpoint-client";
import { SectionObject } from "../../../object/section.object";
import { SectionPreviewObject } from "../../../object/sectionPreview.object";
import { AdminSectionPreviewObject } from "../../../object/adminSectionPreview.object";

/**
 * GET /books/:bookId/sections
 * 책의 섹션 목록을 조회합니다.
 */
export const ListSection: Endpoint<ListSectionReq, ListSectionRes> = {
  method: "GET",
  path: (e) => `/books/${e.bookId}/sections`,
  pathParams: ["bookId"],
};
export type ListSectionReqPath = {
  bookId: number | string;
};
export type ListSectionReq = ListSectionReqPath;
export type ListSectionRes = {
  sections: SectionPreviewObject[];
};

/**
 * GET /books/:bookId/sections/:sectionId
 * 책의 섹션을 조회합니다.
 */
export const GetSection: Endpoint<GetSectionReq, GetSectionRes> = {
  method: "GET",
  path: (e) => `/books/${e.bookId}/sections/${e.sectionId}`,
  pathParams: ["bookId", "sectionId"],
};
export type GetSectionReqPath = {
  bookId: number | string;
  sectionId: number | string;
};
export type GetSectionReq = GetSectionReqPath;
export type GetSectionRes = {
  section: SectionObject;
};

/**
 * GET /books/:bookId/sections/introduction
 * 책의 소개 섹션을 조회합니다.
 */
export const GetIntroductionSection: Endpoint<
  GetIntroductionSectionReq,
  GetIntroductionSectionRes
> = {
  method: "GET",
  path: (e) => `/books/${e.bookId}/sections/introduction`,
  pathParams: ["bookId"],
};
export type GetIntroductionSectionReqPath = {
  bookId: number | string;
};
export type GetIntroductionSectionReq = GetIntroductionSectionReqPath;
export type GetIntroductionSectionRes = {
  section?: SectionObject;
};

/**
 * GET /books/:bookId/sections/fetch
 * 노션 데이터베이스 내용과 함께 색션을 조회합니다
 */
export const FetchSection: Endpoint<FetchSectionReq, FetchSectionRes> = {
  method: "GET",
  path: (e) => `/books/${e.bookId}/sections/fetch`,
  pathParams: ["bookId"],
};
export type FetchSectionReqPath = {
  bookId: number | string;
};
export type FetchSectionReq = FetchSectionReqPath;
export type LoadedFetchSectionItem = {
  status: "loaded";
  notionPageId: string;
  section: AdminSectionPreviewObject;
  page: {
    title: string;
    updatedAt: string;
  };
};
export type NotLoadedFetchSectionItem = {
  status: "not_loaded";
  notionPageId: string;
  page: {
    title: string;
    updatedAt: string;
  };
};
export type NotFoundFetchSectionItem = {
  status: "not_found";
  notionPageId: string;
  section: AdminSectionPreviewObject;
};
export type FetchSectionItem =
  | LoadedFetchSectionItem
  | NotLoadedFetchSectionItem
  | NotFoundFetchSectionItem;
export type FetchSectionRes = {
  sections: FetchSectionItem[];
};

/**
 * POST /books/:bookId/sections
 * 책의 섹션을 생성합니다.
 */
export const LoadSection: Endpoint<LoadSectionReq, LoadSectionRes> = {
  method: "POST",
  path: (e) => `/books/${e.bookId}/sections`,
  pathParams: ["bookId"],
  bodyParams: ["notionPageId"],
};
export type LoadSectionReqPath = {
  bookId: number | string;
};
export type LoadSectionReq = LoadSectionReqPath & {
  notionPageId: string;
};
export type LoadSectionRes = {
  result: "added" | "updated" | "deleted";
  section?: AdminSectionPreviewObject;
};

/**
 * PATCH /books/:bookId/sections/:sectionId
 * 책의 섹션을 수정합니다.
 */
export const UpdateSection: Endpoint<UpdateSectionReq, UpdateSectionRes> = {
  method: "PATCH",
  path: (e) => `/books/${e.bookId}/sections/${e.sectionId}`,
  pathParams: ["bookId", "sectionId"],
  bodyParams: ["isIntroduction", "isPreviewAble"],
};
export type UpdateSectionReqPath = {
  bookId: number | string;
  sectionId: number | string;
};
export type UpdateSectionReqBody = {
  isIntroduction?: boolean;
  isPreviewAble?: boolean;
};
export type UpdateSectionReq = UpdateSectionReqPath & UpdateSectionReqBody;
export type UpdateSectionRes = {
  section: AdminSectionPreviewObject;
};

/**
 * DELETE /books/:bookId/sections/:sectionId
 * 책의 섹션을 삭제합니다.
 */
export const DeleteSection: Endpoint<DeleteSectionReq, DeleteSectionRes> = {
  method: "DELETE",
  path: (e) => `/books/${e.bookId}/sections/${e.sectionId}`,
  pathParams: ["bookId", "sectionId"],
};
export type DeleteSectionReqPath = {
  bookId: number | string;
  sectionId: number | string;
};
export type DeleteSectionReq = DeleteSectionReqPath;
export type DeleteSectionRes = {};
