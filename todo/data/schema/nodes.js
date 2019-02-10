// @flow
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
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

import {
  Todo,
  User,
  USER_ID,
  getTodoOrThrow,
  getTodos,
  getUserOrThrow,
} from '../database';

// $FlowFixMe graphql-relay types not available in flow-typed, strengthen this typing
const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId: string): ?{} => {
    const {type, id}: {id: string, type: string} = fromGlobalId(globalId);

    if (type === 'Todo') {
      return getTodoOrThrow(id);
    } else if (type === 'User') {
      return getUserOrThrow(id);
    }
    return null;
  },
  (obj: {}): ?GraphQLObjectType => {
    if (obj instanceof Todo) {
      return GraphQLTodo;
    } else if (obj instanceof User) {
      return GraphQLUser;
    }
    return null;
  },
);

const GraphQLTodo = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField('Todo'),
    text: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (todo: Todo): string => todo.text,
    },
    complete: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (todo: Todo): boolean => todo.complete,
    },
  },
  interfaces: [nodeInterface],
});

const {
  connectionType: TodosConnection,
  edgeType: GraphQLTodoEdge,
} = connectionDefinitions({
  name: 'Todo',
  nodeType: GraphQLTodo,
});

const GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (): string => USER_ID,
    },
    todos: {
      type: TodosConnection,
      args: {
        status: {
          type: GraphQLString,
          defaultValue: 'any',
        },
        ...connectionArgs,
      },
      // eslint-disable-next-line flowtype/require-parameter-type
      resolve: (root: {}, {status, after, before, first, last}) =>
        connectionFromArray([...getTodos(status)], {
          after,
          before,
          first,
          last,
        }),
    },
    totalCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (): number => getTodos().length,
    },
    completedCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (): number => getTodos('completed').length,
    },
  },
  interfaces: [nodeInterface],
});

export {nodeField, GraphQLTodo, GraphQLTodoEdge, GraphQLUser};
