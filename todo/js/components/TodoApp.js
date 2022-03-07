// @flow
import type {TodoAppQuery} from 'relay/TodoAppQuery.graphql';
import type {
  PreloadedQuery,
  EntryPointProps,
  EntryPointComponent,
} from 'react-relay';

import TodoList from './TodoList';

import * as React from 'react';
import {graphql, usePreloadedQuery} from 'react-relay';

type PreloadedQueries = {|todoAppQueryRef: PreloadedQuery<TodoAppQuery>|};
type Props = EntryPointProps<PreloadedQueries>;

export default (function TodoApp({queries}: Props): React.Node {
  const {user} = usePreloadedQuery(
    graphql`
      query TodoAppQuery($userId: String) @preloadable {
        user(id: $userId) @required(action: THROW) {
          ...TodoList_user
        }
      }
    `,
    queries.todoAppQueryRef,
  );

  return (
    <div>
      <section className="todoapp">
        <TodoList userRef={user} />
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>

        <p>
          Created by the{' '}
          <a href="https://facebook.github.io/relay/">Relay team</a>
        </p>

        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}: EntryPointComponent<PreloadedQueries>);
