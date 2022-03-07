// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */

import {
  cursorForObjectInConnection,
  mutationWithClientMutationId,
} from 'graphql-relay';

import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  type GraphQLFieldConfig,
} from 'graphql';
import {GraphQLTodoEdge, GraphQLUser} from '../nodes';

import {
  addTodo,
  getTodoOrThrow,
  getTodos,
  getUserOrThrow,
  User,
} from '../../database';

type Input = {|
  +text: string,
  +userId: string,
|};

type Payload = {|
  +todoId: string,
  +userId: string,
|};

const AddTodoMutation: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe> =
  mutationWithClientMutationId({
    name: 'AddTodo',
    inputFields: {
      text: {type: new GraphQLNonNull(GraphQLString)},
      userId: {type: new GraphQLNonNull(GraphQLID)},
    },
    outputFields: {
      todoEdge: {
        type: new GraphQLNonNull(GraphQLTodoEdge),
        resolve: ({todoId}: Payload) => {
          const todo = getTodoOrThrow(todoId);

          return {
            cursor: cursorForObjectInConnection([...getTodos()], todo),
            node: todo,
          };
        },
      },
      user: {
        type: new GraphQLNonNull(GraphQLUser),
        resolve: ({userId}: Payload): User => getUserOrThrow(userId),
      },
    },
    mutateAndGetPayload: ({text, userId}: Input): Payload => {
      const todoId = addTodo(text, false);

      return {todoId, userId};
    },
  });

export {AddTodoMutation};
