import type { OrganizationRow, ImageRow } from "../database.ts";
import type { GqlNode } from "../graphql/node.ts";
import type { Actor } from "../graphql/actor.ts";

/** @gqlEnum */
type OrganizationKind = "COMMERCIAL" | "NONPROFIT" | "GOVERNMENT" | "JOURNALISTIC";

/** @gqlType */
export class Organization implements Actor, GqlNode {
  __typename = "Organization" as const;
  _id: string;
  _name: string;
  _profilePicture: ImageRow;
  _joined: string;
  private model: OrganizationRow;

  constructor(model: OrganizationRow) {
    this.model = model;
    this._id = model.id;
    this._name = model.name;
    this._profilePicture = model.profilePicture;
    this._joined = model.joined;
  }

  /** @gqlField */
  organizationKind(): OrganizationKind | null {
    return this.model.organizationKind as OrganizationKind;
  }
}
