// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */

import {mutationWithClientMutationId} from 'graphql-relay';
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  type GraphQLFieldConfig,
} from 'graphql';
import {GraphQLTodo, GraphQLUser} from '../nodes';

import {
  getTodoOrThrow,
  getUserOrThrow,
  markAllTodos,
  Todo,
  User,
} from '../../database';

type Input = {|
  +complete: boolean,
  +userId: string,
|};

type Payload = {|
  +changedTodoIds: $ReadOnlyArray<string>,
  +userId: string,
|};

const MarkAllTodosMutation: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe> =
  mutationWithClientMutationId({
    name: 'MarkAllTodos',
    inputFields: {
      complete: {type: new GraphQLNonNull(GraphQLBoolean)},
      userId: {type: new GraphQLNonNull(GraphQLID)},
    },
    outputFields: {
      changedTodos: {
        type: new GraphQLList(new GraphQLNonNull(GraphQLTodo)),
        resolve: ({changedTodoIds}: Payload): $ReadOnlyArray<Todo> =>
          changedTodoIds.map((todoId: string): Todo => getTodoOrThrow(todoId)),
      },
      user: {
        type: new GraphQLNonNull(GraphQLUser),
        resolve: ({userId}: Payload): User => getUserOrThrow(userId),
      },
    },
    mutateAndGetPayload: ({complete, userId}: Input): Payload => {
      const changedTodoIds = markAllTodos(complete);

      return {changedTodoIds, userId};
    },
  });

export {MarkAllTodosMutation};
