import type { GqlNode } from "./node.ts";
import type { ImageRow } from "../database.ts";
import { Image } from "../models/image.ts";

/** @gqlInterface */
export interface Actor extends GqlNode {
  _name: string;
  _profilePicture: ImageRow;
  _joined: string;
}

/** @gqlField */
export function name(actor: Actor): string | null {
  return actor._name;
}

/** @gqlField */
export function profilePicture(actor: Actor): Image | null {
  return new Image(actor._profilePicture.url, actor._profilePicture.altText);
}

/** @gqlField */
export function joined(actor: Actor): string | null {
  return actor._joined;
}
