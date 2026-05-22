/**
 * @gqlType */
export type PageInfo = {
  /** @gqlField */
  startCursor: string | null;
  /** @gqlField */
  endCursor: string | null;
  /** @gqlField */
  lastCursor: string | null;
  /** @gqlField */
  hasNextPage: boolean | null;
  /** @gqlField */
  hasPreviousPage: boolean | null;
};

/**
 * @gqlType */
export type Edge<T> = {
  /** @gqlField */
  node: T | null;
  /** @gqlField */
  cursor: string | null;
};

/**
 * @gqlType */
export type Connection<T> = {
  /** @gqlField */
  edges: Array<Edge<T> | null> | null;
  /** @gqlField */
  pageInfo: PageInfo | null;
};
