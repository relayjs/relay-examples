import type { ID } from "grats";
import type { CommentRow } from "../database.ts";

/** @gqlType */
export class Comment {
  private model: CommentRow;

  constructor(model: CommentRow) {
    this.model = model;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  id(): ID {
    return this.model.id;
  }

  /** @gqlField */
  text(): string | null {
    return this.model.text;
  }
}
