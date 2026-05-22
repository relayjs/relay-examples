import type { ID } from "grats";
import { findNode } from "../database.ts";
import { Person } from "../models/person.ts";
import { Organization } from "../models/organization.ts";
import { Story } from "../models/story.ts";

/**
 * @gqlInterface Node */
export interface GqlNode {
  __typename: string;
  _id: string;
}

/**
 * @gqlField
 * @killsParentOnException */
export function id(node: GqlNode): ID {
  return node._id;
}

/** @gqlQueryField */
export function node(id: ID): GqlNode | null {
  const row = findNode(id);
  if (!row) return null;
  switch (row.__typename) {
    case "Person":
      return new Person(row);
    case "Organization":
      return new Organization(row);
    case "Story":
      return new Story(row);
  }
}
