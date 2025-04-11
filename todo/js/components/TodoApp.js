// @flow
import type {TodoAppQuery} from 'relay/TodoAppQuery.graphql';
import type {
  PreloadedQuery,
  EntryPointProps,
  EntryPointComponent,
} from 'react-relay';

import * as React from 'react';
import {graphql, usePreloadedQuery} from 'react-relay';
import Todo from './Todo';

type PreloadedQueries = {|todoAppQueryRef: PreloadedQuery<TodoAppQuery>|};
type Props = EntryPointProps<PreloadedQueries>;

export default (function TodoApp({queries}: Props): React.Node {
  const {user, localPlayerQueue} = usePreloadedQuery(
    graphql`
      query TodoAppQuery($userId: String) @preloadable {
        user(id: $userId) @required(action: THROW) {
          ...Todo_user
          todos(first: 10) @connection(key: "TodoList_todos") {
            __id
            edges {
              node {
                id
              }
            }
          }
        }
        localPlayerQueue {
          list {
            todo @waterfall {
              ...Todo_todo
            }
          }
        }
      }
    `,
    queries.todoAppQueryRef,
  );

  return (
    <div>
      <section className="todoapp">
        {localPlayerQueue.list.map(({todo}, index) => (
          <Todo key={index} todoRef={todo} userRef={user} />
        ))}
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
