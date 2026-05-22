import type {Int} from 'grats';
import {connectionFromArray} from 'graphql-relay';
import {
  type UserRow,
  USER_ID,
  getTodos,
  getUserOrThrow,
} from '../database.ts';
import type {Connection} from '../graphql/connection.ts';
import type {GraphQLNode} from '../graphql/node.ts';
import {Todo} from './todo.ts';

/** @gqlType */
export class User implements GraphQLNode {
  __typename = 'User' as const;
  private model: UserRow;

  constructor(model: UserRow) {
    this.model = model;
  }

  localID(): string {
    return this.model.id;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  userId(): string {
    return USER_ID;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  totalCount(): Int {
    return getTodos().length;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  completedCount(): Int {
    return getTodos('completed').length;
  }

  /** @gqlField */
  todos(
    status: string | null = 'any',
    after?: string | null,
    first?: Int | null,
    before?: string | null,
    last?: Int | null,
  ): Connection<Todo> {
    const connection = connectionFromArray([...getTodos(status ?? 'any')], {
      after,
      before,
      first,
      last,
    });
    return {
      edges: connection.edges.map((edge) => ({
        node: edge.node ? new Todo(edge.node) : null,
        cursor: edge.cursor,
      })),
      pageInfo: connection.pageInfo,
    };
  }

  /**
   * @gqlQueryField */
  static user(id?: string | null): User | null {
    if (id == null) return null;
    try {
      return new User(getUserOrThrow(id));
    } catch {
      return null;
    }
  }
}
