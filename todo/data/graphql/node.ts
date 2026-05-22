import type {ID} from 'grats';
import {fromGlobalId, toGlobalId} from 'graphql-relay';
import {getTodoOrThrow, getUserOrThrow} from '../database.ts';
import {Todo} from '../models/todo.ts';
import {User} from '../models/user.ts';

/**
 * An object with an ID
 * @gqlInterface Node */
export interface GraphQLNode {
  __typename: string;
  localID(): string;
}

/**
 * The id of the object.
 *
 * @gqlField
 * @killsParentOnException */
export function id(node: GraphQLNode): ID {
  return toGlobalId(node.__typename, node.localID());
}

/**
 * Fetches an object given its ID
 * @gqlQueryField */
export function node(
  /** The ID of an object */
  id: ID,
): GraphQLNode | null {
  const {type, id: localId} = fromGlobalId(id);

  switch (type) {
    case 'Todo':
      return new Todo(getTodoOrThrow(localId));
    case 'User':
      return new User(getUserOrThrow(localId));
    default:
      return null;
  }
}
