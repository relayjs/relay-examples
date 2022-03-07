// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */

import {fromGlobalId, mutationWithClientMutationId} from 'graphql-relay';
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  type GraphQLFieldConfig,
} from 'graphql';
import {GraphQLTodo, GraphQLUser} from '../nodes';
import {
  changeTodoStatus,
  getTodoOrThrow,
  getUserOrThrow,
  Todo,
  User,
} from '../../database';

type Input = {|
  +complete: boolean,
  +id: string,
  +userId: string,
|};

type Payload = {|
  +todoId: string,
  +userId: string,
|};

const ChangeTodoStatusMutation: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe> =
  mutationWithClientMutationId({
    name: 'ChangeTodoStatus',
    inputFields: {
      complete: {type: new GraphQLNonNull(GraphQLBoolean)},
      id: {type: new GraphQLNonNull(GraphQLID)},
      userId: {type: new GraphQLNonNull(GraphQLID)},
    },
    outputFields: {
      todo: {
        type: new GraphQLNonNull(GraphQLTodo),
        resolve: ({todoId}: Payload): Todo => getTodoOrThrow(todoId),
      },
      user: {
        type: new GraphQLNonNull(GraphQLUser),
        resolve: ({userId}: Payload): User => getUserOrThrow(userId),
      },
    },
    mutateAndGetPayload: ({id, complete, userId}: Input): Payload => {
      const todoId = fromGlobalId(id).id;
      changeTodoStatus(todoId, complete);

      return {todoId, userId};
    },
  });

export {ChangeTodoStatusMutation};
