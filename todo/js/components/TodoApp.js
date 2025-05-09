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
  const {user, clientTodoList} = usePreloadedQuery(
    graphql`
      query TodoAppQuery($userId: String) @preloadable {
        user(id: $userId) @required(action: THROW) {
          ...Todo_user
          # This adds the todo edges to the store and causes the waterfall edge query below to not be made as it seems to assume that the data is in the store

          # If this is commented out the Edge query below will be requested
          todos(first: 10) @connection(key: "TodoList_todos") {
            __id
            edges {
              node {
                id
              }
            }
          }
        }
        clientTodoList {
          items {
            todo @waterfall {
              # If any data not in the store is requested within the waterfall directive.  the edge query is made, however data from the fragment is not requested

              # if 'text' is uncommented the edge query is made
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
        {clientTodoList.items.map(({todo}, index) => (
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
