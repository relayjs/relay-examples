import type { ID } from "grats";
import type { CommentRow } from "../database.ts";

/** @gqlType */
export class Comment {
  private row: CommentRow;

  constructor(row: CommentRow) {
    this.row = row;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  id(): ID {
    return this.row.id;
  }

  /** @gqlField */
  text(): string | null {
    return this.row.text;
  }
}
