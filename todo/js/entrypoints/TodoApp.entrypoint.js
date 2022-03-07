// @flow
import type {EntryPoint} from 'react-relay';
import typeof TodoApp from '../components/TodoApp';

import JSResource from '../utilities/JSResource';
import TodoAppQuery from '../../__generated__/relay/TodoAppQuery.graphql';

type Params = {|userId: string|};

const TodoAppEntryPoint: EntryPoint<Params, TodoApp> = {
  getPreloadProps({userId}: Params) {
    return {
      queries: {
        todoAppQueryRef: {
          parameters: {
            kind: 'PreloadableConcreteRequest',
            params: TodoAppQuery.params,
          },
          variables: {
            userId,
          },
        },
      },
    };
  },
  root: JSResource<TodoApp>(
    'TodoApp',
    () =>
      ((import(
        /* webpackPrefetch: true */ '../components/TodoApp.js'
      ): $FlowFixMe): Promise<TodoApp>),
  ),
};

export default TodoAppEntryPoint;
