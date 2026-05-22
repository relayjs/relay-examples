import type { ID } from "grats";
import type { LocationRow } from "../database.ts";

/** @gqlType */
export class Location {
  private row: LocationRow;

  constructor(row: LocationRow) {
    this.row = row;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  id(): ID {
    return this.row.id;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  name(): string {
    return this.row.name;
  }
}
