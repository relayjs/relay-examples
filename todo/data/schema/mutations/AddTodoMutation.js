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

import {
  cursorForObjectInConnection,
  mutationWithClientMutationId,
} from 'graphql-relay';

import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
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

const AddTodoMutation = mutationWithClientMutationId({
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
