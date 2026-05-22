import type {TodoAppQuery} from '../__generated__/TodoAppQuery.graphql.ts';
import type {PreloadedQuery} from 'react-relay';

import TodoList from './TodoList.tsx';

import {graphql, usePreloadedQuery} from 'react-relay';

type Props = {
  queryRef: PreloadedQuery<TodoAppQuery>;
};

export default function TodoApp({queryRef}: Props) {
  const {user} = usePreloadedQuery<TodoAppQuery>(
    graphql`
      query TodoAppQuery($userId: String) {
        user(id: $userId) @required(action: THROW) {
          ...TodoList_user
        }
      }
    `,
    queryRef,
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
}
