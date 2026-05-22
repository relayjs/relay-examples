/**
 * Information about pagination in a connection.
 * @gqlType */
export type PageInfo = {
  /**
   * When paginating forwards, are there more items?
   * @gqlField
   * @killsParentOnException */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   * @gqlField
   * @killsParentOnException */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   * @gqlField */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   * @gqlField */
  endCursor: string | null;
};

/**
 * An edge in a connection.
 * @gqlType */
export type Edge<T> = {
  /**
   * The item at the end of the edge
   * @gqlField */
  node: T | null;
  /**
   * A cursor for use in pagination
   * @gqlField
   * @killsParentOnException */
  cursor: string;
};

/**
 * A connection to a list of items.
 * @gqlType */
export type Connection<T> = {
  /**
   * Information to aid in pagination.
   * @gqlField
   * @killsParentOnException */
  pageInfo: PageInfo;
  /**
   * A list of edges.
   * @gqlField */
  edges: Array<Edge<T> | null> | null;
};
