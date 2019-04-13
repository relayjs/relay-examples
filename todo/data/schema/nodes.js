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
  GraphQLUnionType,
  GraphQLList,
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
  type TodoType,
  BOLD_TODO,
  User,
  USER_ID,
  getTodoOrThrow,
  getTodos,
  getUserOrThrow,
} from '../database';

import JSDependency, {
  toJSDependency,
  type JSDependencyType,
} from './JSDependency';

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

const GraphQLPlainContentData = new GraphQLObjectType({
  name: 'PlainContentData',
  fields: {
    id: globalIdField('PlainContentData'),
    plainText: {
      type: GraphQLString,
      resolve: (todo: Todo): string => todo.text,
    },
  },
});

const GraphQLBoldContentData = new GraphQLObjectType({
  name: 'BoldContentData',
  fields: {
    id: globalIdField('BoldContentData'),
    boldText: {
      type: GraphQLString,
      resolve: (todo: Todo): string => todo.text,
    },
  },
});

const PlainContent = new GraphQLObjectType({
  name: 'PlainContent',
  fields: {
    data: {
      type: GraphQLPlainContentData,
      resolve: (todo: Todo): Todo => todo,
    },
    js: {
      type: JSDependency,
      args: {
        module: {
          type: new GraphQLNonNull(GraphQLString),
        },
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_: mixed, {module}: {module: string}): JSDependencyType =>
        toJSDependency(module),
    },
  },
});

const BoldContent = new GraphQLObjectType({
  name: 'BoldContent',
  fields: {
    data: {
      type: GraphQLBoldContentData,
      resolve: (todo: Todo): Todo => todo,
    },
    js: {
      type: JSDependency,
      args: {
        module: {
          type: new GraphQLNonNull(GraphQLString),
        },
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_: mixed, {module}: {module: string}): JSDependencyType =>
        toJSDependency(module),
    },
  },
});

const FormattedContent = new GraphQLUnionType({
  name: 'FormattedContent',
  types: [PlainContent, BoldContent],
  resolveType: resolveFormatType,
});

function resolveFormatType({type}: {|type: TodoType|}) {
  return type === BOLD_TODO ? BoldContent : PlainContent;
}

const GraphQLTodo = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: globalIdField('Todo'),
    content: {
      type: FormattedContent,
      args: {
        supported: {
          type: new GraphQLNonNull(
            new GraphQLList(new GraphQLNonNull(GraphQLString)),
          ),
        },
      },
      resolve: (todo: Todo): Todo => todo,
    },
    complete: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (todo: Todo): boolean => todo.complete,
    },
    js: {
      type: JSDependency,
      args: {
        module: {
          type: new GraphQLNonNull(GraphQLString),
        },
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_: mixed, {module}: {module: string}): JSDependencyType =>
        toJSDependency(module),
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

export {
  nodeField,
  GraphQLTodo,
  GraphQLTodoEdge,
  GraphQLUser,
  GraphQLPlainContentData,
  GraphQLBoldContentData,
};
