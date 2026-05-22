import type { ID, Int } from "grats";
import type { StoryRow } from "../database.ts";
import { findNode, getStories, likeStory, postComment } from "../database.ts";
import type { GqlNode } from "../graphql/node.ts";
import type { Actor } from "../graphql/actor.ts";
import type { Connection, Edge } from "../graphql/connection.ts";
import { Image } from "./image.ts";
import { Comment } from "./comment.ts";
import { Person } from "./person.ts";
import { Organization } from "./organization.ts";

/** @gqlEnum */
export type Category = "ALL" | "EDUCATION" | "NEWS" | "COOKING";

/** @gqlType */
export class Story implements GqlNode {
  __typename = "Story" as const;
  _id: string;
  private model: StoryRow;

  constructor(model: StoryRow) {
    this.model = model;
    this._id = model.id;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  createdAt(): string {
    return this.model.createdAt;
  }

  /** @gqlField */
  category(): Category | null {
    return this.model.category as Category;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  title(): string {
    return this.model.title;
  }

  /** @gqlField */
  summary(): string | null {
    return this.model.summary;
  }

  /** @gqlField */
  updatedAt(): string | null {
    return null;
  }

  /** @gqlField */
  attachments(): Array<Image> | null {
    return this.model.attachments.map((a) => new Image(a.url, a.altText));
  }

  /**
   * @gqlField
   * @killsParentOnException */
  poster(): Actor {
    const row = findNode(this.model.authorID);
    if (!row || row.__typename === "Story") {
      throw new Error("Poster not found");
    }
    if (row.__typename === "Person") return new Person(row);
    return new Organization(row);
  }

  /** @gqlField */
  thumbnail(): Image | null {
    const t = this.model.thumbnail;
    return t ? new Image(t.url, t.altText) : null;
  }

  /** @gqlField */
  likeCount(): Int | null {
    return this.model.likeCount;
  }

  /** @gqlField */
  doesViewerLike(): boolean | null {
    return this.model.doesViewerLike;
  }

  /** @gqlField */
  comments(first?: Int | null, after?: string | null): Connection<Comment> {
    const count = first ?? Infinity;
    const afterIdx = parseInt(after ?? "", 10) || 0;
    const next = count + afterIdx;
    const allComments = this.model.comments;
    return {
      pageInfo: {
        hasNextPage: allComments.length >= next,
        hasPreviousPage: null,
        startCursor: null,
        endCursor: "" + next,
        lastCursor: null,
      },
      edges: allComments.slice(afterIdx, next).map((c) => ({
        node: new Comment(c),
        cursor: null,
      })),
    };
  }

  /** @gqlQueryField */
  static topStory(category?: Category | null): Story | null {
    const stories = getStories();
    if (category != null && category !== "ALL") {
      return stories
        .filter((s) => s.category === category)
        .map((s) => new Story(s))[0] ?? null;
    }
    return stories.map((s) => new Story(s))[0] ?? null;
  }

  /** @gqlQueryField */
  static topStories(): Array<Story> | null {
    return getStories()
      .slice(0, 3)
      .map((s) => new Story(s));
  }

  /** @gqlMutationField */
  static likeStory(id: ID, doesLike: boolean): StoryMutationResponse | null {
    const story = likeStory(id, doesLike);
    if (!story) return null;
    return { story: new Story(story) };
  }

  /** @gqlMutationField */
  static postStoryComment(
    id: ID,
    text: string,
  ): StoryCommentMutationResponse | null {
    const result = postComment(id, text);
    if (!result) return null;
    const comment = result.story.comments.find(
      (c) => c.id === result.commentId,
    )!;
    return {
      story: new Story(result.story),
      commentEdge: { node: new Comment(comment), cursor: null },
    };
  }
}

/** @gqlType */
type StoryMutationResponse = {
  /** @gqlField */
  story: Story | null;
};

/** @gqlType */
type StoryCommentMutationResponse = {
  /** @gqlField */
  story: Story | null;
  /** @gqlField */
  commentEdge: Edge<Comment> | null;
};
