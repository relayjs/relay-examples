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
          # If this is uncommented the client edge queries are not made
          # as it is assumed we have the data in the store

          # todos(first: 10) @connection(key: "TodoList_todos") {
          #   __id
          #   edges {
          #     node {
          #       id
          #     }
          #   }
          # }
        }
        localPlayerQueue {
          list {
            todo @waterfall {
              # Similarly if this is uncommented it makes the edge query
              # as it is within the waterfall directive

              # text
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
