import type { ID } from "grats";
import type { LocationRow } from "../database.ts";

/** @gqlType */
export class Location {
  private model: LocationRow;

  constructor(model: LocationRow) {
    this.model = model;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  id(): ID {
    return this.model.id;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  name(): string {
    return this.model.name;
  }
}
