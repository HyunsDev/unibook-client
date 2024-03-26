<p align="center">
  <img src="./assets/logo.png" width="10%" alt="Unibook" />
</p>
<h1 align="center">unibook-client</h1>
<h5 align="center">UniBook API를 위한 라이브러리</h5>
<p align="center">
  <img alt="Node.js" src="https://img.shields.io/npm/v/unibook-client"/>
  <img alt="Typescript" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

# 변경사항

## `v1.0.33`

### Object

* `BookOption` 타입 생성

    ```typescript
    type BookOption = {
        isExportPDFEnabled: boolean;
    };
    ```

* `AdminBookObject`, `BookObject`에 항목 추가

    ```typescript
    class {
        ...
        regularPrice: number;  // 정가
        publisher: string;     // 출판사
        publishedAt: string;   // 출판일
        ISBN?: string;         // ISBN
        options: BookOption;   // 책 옵션
    }
    ```

* `SectionObject`, `SectionPreviewObject`, `AdminSectionObject`, `AdminSectionPreviewObject` 에 항목 추가

    ```typescript
    class {
        isPreviewAble: boolean;   
    }
    ```

* `CouponDiscount` 관련 타입 생성

    ```typescript
    type CouponDiscountType = "price" | "rate";
    type CouponPriceDiscount = {
        type: "price";
        price: number | "free";
    };
    type CouponRateDiscount = {
        type: "rate";
        rate: number;
    };
    type CouponDiscount = CouponPriceDiscount | CouponRateDiscount
    ```

* `CouponTarget` 관련 타입 생성

    ```typescript
    type CouponTargetType = "book";
    type CouponBookTarget = {
        type: "book";
        bookIds: number[];
    };
    type CouponTarget = CouponBookTarget;
    ```

* `CouponObject` 오브젝트 생성
* `CouponUseLogObject` 오브젝트 생성
* `CouponLogObject` 오브젝트 생성

### Endpoint

* `CreateBookReqBody` 에 항목 추가

    ```typescript
    type CreateBookReqBody = {
        ...
        regularPrice: number;
        publisher: string;
        publishedAt: string;
        ISBN?: string;
    };
    ```

* `UpdateBookReqBody` 에 항목 추가

    ```typescript
    type UpdateBookReqBody = {
        ...
        regularPrice: number;
        publisher: string;
        publishedAt: string;
        ISBN?: string;
    };
    ```

* `UpdateSectionReqBody` 에 항목 추가

    ```typescript
    type UpdateSectionReqBody = {
        ...
        isPreviewAble?: boolean;
    }
    ```

* `CreateUserOrderReqBody` 에 항목 추가

    ```typescript
    type CreateUserOrderReqBody = {
        ...
        couponCode?: string;
    };
    ```

* `ListCoupon` 엔드포인트 추가
* `GetCoupon` 엔드포인트 추가
* `GetCouponByCode` 엔드포인트 추가
* `CreateCoupon` 엔드포인트 추가
* `UpdateCoupon` 엔드포인트 추가
* `DeleteCoupon` 엔드포인트 추가
* `ListCouponLog` 엔드포인트 추가
* `ListCouponUseLog` 엔드포인트 추가