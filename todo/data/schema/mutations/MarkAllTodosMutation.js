// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {mutationWithClientMutationId} from 'graphql-relay';
import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull} from 'graphql';
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

const MarkAllTodosMutation = mutationWithClientMutationId({
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
