import type { Int } from "grats";
import {
  getStories,
  getViewer,
  getNonViewerPersons,
} from "../database.ts";
import type { Actor } from "../graphql/actor.ts";
import type { Connection } from "../graphql/connection.ts";
import { Person } from "./person.ts";
import { Story, type Category } from "./story.ts";

/** @gqlType */
export class Viewer {
  /** @gqlField */
  actor(): Actor | null {
    return new Person(getViewer());
  }

  /** @gqlField */
  contacts(search?: string | null): Array<Actor> | null {
    const persons = getNonViewerPersons();
    if (search == null || search === "") {
      return persons.map((p) => new Person(p));
    }
    return persons
      .filter((p) =>
        p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      )
      .map((p) => new Person(p));
  }

  /** @gqlField */
  newsfeedStories(
    first?: Int | null,
    after?: string | null,
    category?: Category | null,
  ): Connection<Story> {
    const count = first ?? Infinity;
    const afterIdx = parseInt(after ?? "", 10) || 0;
    const next = count + afterIdx;
    const stories = getStories().filter(
      (s) =>
        category == null ||
        category === "ALL" ||
        category === s.category,
    );
    return {
      pageInfo: {
        hasNextPage: stories.length >= next,
        hasPreviousPage: null,
        startCursor: null,
        endCursor: "" + next,
        lastCursor: null,
      },
      edges: stories.slice(afterIdx, next).map((s) => ({
        node: new Story(s),
        cursor: s.id,
      })),
    };
  }

  /** @gqlQueryField */
  static viewer(): Viewer {
    return new Viewer();
  }
}
