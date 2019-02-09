// @flow
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

export class Todo {
  +id: string;
  +text: string;
  +complete: boolean;

  constructor(id: string, text: string, complete: boolean) {
    this.id = id;
    this.text = text;
    this.complete = complete;
  }
}

export class User {
  +id: string;

  constructor(id: string) {
    this.id = id;
  }
}

// Mock authenticated ID
export const USER_ID = 'me';

// Mock user database table
const usersById: Map<string, User> = new Map([[USER_ID, new User(USER_ID)]]);

// Mock todo database table
const todosById: Map<string, Todo> = new Map();
const todoIdsByUser: Map<string, $ReadOnlyArray<string>> = new Map([
  [USER_ID, []],
]);

// Seed initial data
let nextTodoId: number = 0;
addTodo('Taste JavaScript', true);
addTodo('Buy a unicorn', false);

function getTodoIdsForUser(id: string): $ReadOnlyArray<string> {
  return todoIdsByUser.get(id) || [];
}

export function addTodo(text: string, complete: boolean): string {
  const todo = new Todo(`${nextTodoId++}`, text, complete);
  todosById.set(todo.id, todo);

  const todoIdsForUser = getTodoIdsForUser(USER_ID);
  todoIdsByUser.set(USER_ID, todoIdsForUser.concat(todo.id));

  return todo.id;
}

export function changeTodoStatus(id: string, complete: boolean) {
  const todo = getTodo(id);

  if (todo) {
    // If found, replace with the modified complete value
    todosById.set(id, new Todo(id, todo.text, complete));
  }
}

export function getTodo(id: string): ?Todo {
  return todosById.get(id);
}

export function getTodos(status: string = 'any'): $ReadOnlyArray<Todo> {
  const todoIdsForUser = getTodoIdsForUser(USER_ID);

  const todosForUser = todoIdsForUser.map(
    (id: string): Todo => {
      const todo = todosById.get(id);

      if (!todo) {
        throw new Error(
          `Invariant exception, todo ${id} not found, but belongs to user ${USER_ID}`,
        );
      }

      return todo;
    },
  );

  if (status === 'any') {
    return todosForUser;
  }

  return todosForUser.filter(
    (todo: Todo): boolean => todo.complete === (status === 'completed'),
  );
}

export function getUser(id: string): ?User {
  return usersById.get(id);
}

export function markAllTodos(complete: boolean): $ReadOnlyArray<string> {
  const todosToChange = getTodos().filter(
    (todo: Todo): boolean => todo.complete !== complete,
  );

  todosToChange.forEach(
    (todo: Todo): void => changeTodoStatus(todo.id, complete),
  );

  return todosToChange.map((todo: Todo): string => todo.id);
}

export function removeTodo(id: string) {
  const todoIdsForUser = getTodoIdsForUser(USER_ID);

  // Remove from the users list
  todoIdsByUser.set(
    USER_ID,
    todoIdsForUser.filter((todoId: string): boolean => todoId !== id),
  );

  // And also from the total list of Todos
  todosById.delete(id);
}

export function removeCompletedTodos(): $ReadOnlyArray<string> {
  const todoIdsForUser = getTodoIdsForUser(USER_ID);

  const todoIdsToRemove = getTodos()
    .filter((todo: Todo): boolean => todo.complete)
    .map((todo: Todo): string => todo.id);

  // Remove from the users list
  todoIdsByUser.set(
    USER_ID,
    todoIdsForUser.filter(
      (todoId: string): boolean => !todoIdsToRemove.includes(todoId),
    ),
  );

  // And also from the total list of Todos
  todoIdsToRemove.forEach((id: string): boolean => todosById.delete(id));

  return todoIdsToRemove;
}

export function renameTodo(id: string, text: string) {
  const todo = getTodo(id);

  if (todo) {
    // If found, replace with the modified text value
    todosById.set(id, new Todo(id, text, todo.complete));
  }
}
