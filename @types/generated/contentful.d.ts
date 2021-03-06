// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPageFields {
  /** Title */
  title?: string | undefined;

  /** Description */
  description?: string | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPersonFields {
  /** Name */
  name?: string | undefined;

  /** Age */
  age?: number | undefined;
}

export interface IPerson extends Entry<IPersonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "person";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProductFields {
  /** name */
  name?: string | undefined;

  /** image */
  image?: Asset[] | undefined;

  /** price */
  price?: number | undefined;

  /** type */
  type?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** Description */
  description?: string | undefined;

  /** isNew */
  isNew?: boolean | undefined;

  /** price_data */
  price_data?: Record<string, any> | undefined;
}

export interface IProduct extends Entry<IProductFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "product";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITypeFields {
  /** name */
  name: "silver" | "gold" | "platinum";
}

/** The type of the asset */

export interface IType extends Entry<ITypeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "type";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "page" | "person" | "product" | "type";

export type LOCALE_CODE = "de-DE" | "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
