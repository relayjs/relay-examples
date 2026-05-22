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
  private model: PersonRow;

  constructor(model: PersonRow) {
    this.model = model;
    this._id = model.id;
    this._name = model.name;
    this._profilePicture = model.profilePicture;
    this._joined = model.joined;
  }

  /** @gqlField */
  email(): string | null {
    return null;
  }

  /** @gqlField */
  location(): Location | null {
    return this.model.location ? new Location(this.model.location) : null;
  }
}
