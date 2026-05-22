import type { Int } from "grats";

/** @gqlType */
export class Image {
  private _url: string;
  private _altText: string | null;

  constructor(url: string, altText?: string | null) {
    this._url = url;
    this._altText = altText ?? null;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  url(height?: Int | null, width?: Int | null): string {
    const params: [string, Int][] = [];
    if (width != null) params.push(["width", width]);
    if (height != null) params.push(["height", height]);
    if (params.length === 0) return this._url;
    return this._url + "?" + params.map(([k, v]) => `${k}=${v}`).join("&");
  }

  /** @gqlField */
  altText(): string | null {
    return this._altText;
  }
}
