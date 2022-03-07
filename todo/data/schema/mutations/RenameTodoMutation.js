// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */

import {mutationWithClientMutationId, fromGlobalId} from 'graphql-relay';
import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  type GraphQLFieldConfig,
} from 'graphql';
import {GraphQLTodo} from '../nodes';
import {getTodoOrThrow, renameTodo, Todo} from '../../database';

type Input = {|
  +id: string,
  +text: string,
|};

type Payload = {|
  +localTodoId: string,
|};

const RenameTodoMutation: GraphQLFieldConfig<$FlowFixMe, $FlowFixMe> =
  mutationWithClientMutationId({
    name: 'RenameTodo',
    inputFields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      text: {type: new GraphQLNonNull(GraphQLString)},
    },
    outputFields: {
      todo: {
        type: new GraphQLNonNull(GraphQLTodo),
        resolve: ({localTodoId}: Payload): Todo => getTodoOrThrow(localTodoId),
      },
    },
    mutateAndGetPayload: ({id, text}: Input): Payload => {
      const localTodoId = fromGlobalId(id).id;
      renameTodo(localTodoId, text);

      return {localTodoId};
    },
  });

export {RenameTodoMutation};
