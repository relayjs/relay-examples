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
  private row: OrganizationRow;

  constructor(row: OrganizationRow) {
    this.row = row;
    this._id = row.id;
    this._name = row.name;
    this._profilePicture = row.profilePicture;
    this._joined = row.joined;
  }

  /** @gqlField */
  organizationKind(): OrganizationKind | null {
    return this.row.organizationKind as OrganizationKind;
  }
}
