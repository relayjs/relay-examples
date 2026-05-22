import type { PersonRow, ImageRow } from "../database.ts";
import type { GqlNode } from "../graphql/node.ts";
import type { Actor } from "../graphql/actor.ts";
import { Location } from "./location.ts";

/** @gqlType */
export class Person implements Actor, GqlNode {
  __typename = "Person" as const;
  _id: string;
  _name: string;
  _profilePicture: ImageRow;
  _joined: string;
  private row: PersonRow;

  constructor(row: PersonRow) {
    this.row = row;
    this._id = row.id;
    this._name = row.name;
    this._profilePicture = row.profilePicture;
    this._joined = row.joined;
  }

  /** @gqlField */
  email(): string | null {
    return null;
  }

  /** @gqlField */
  location(): Location | null {
    return this.row.location ? new Location(this.row.location) : null;
  }
}
