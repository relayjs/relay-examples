export type TodoRow = {
  id: string;
  text: string;
  complete: boolean;
};

export type UserRow = {
  id: string;
};

// Mock authenticated ID
export const USER_ID = 'me';

// Mock user database table
const usersById: Map<string, UserRow> = new Map([
  [USER_ID, {id: USER_ID}],
]);

// Mock todo database table
const todosById: Map<string, TodoRow> = new Map();
const todoIdsByUser: Map<string, ReadonlyArray<string>> = new Map([
  [USER_ID, []],
]);

// Seed initial data
let nextTodoId: number = 0;
addTodo('Taste JavaScript', true);
addTodo('Buy a unicorn', false);

function getTodoIdsForUser(id: string): ReadonlyArray<string> {
  return todoIdsByUser.get(id) || [];
}

export function addTodo(text: string, complete: boolean): string {
  const todo: TodoRow = {id: `${nextTodoId++}`, text, complete};
  todosById.set(todo.id, todo);

  const todoIdsForUser = getTodoIdsForUser(USER_ID);
  todoIdsByUser.set(USER_ID, todoIdsForUser.concat(todo.id));

  return todo.id;
}

export function changeTodoStatus(id: string, complete: boolean) {
  const todo = getTodoOrThrow(id);
  todosById.set(id, {...todo, complete});
}

function getTodo(id: string): TodoRow | null {
  return todosById.get(id) ?? null;
}

export function getTodoOrThrow(id: string): TodoRow {
  const todo = getTodo(id);
  if (!todo) {
    throw new Error(`Invariant exception, Todo ${id} not found`);
  }
  return todo;
}

export function getTodos(status: string = 'any'): ReadonlyArray<TodoRow> {
  const todoIdsForUser = getTodoIdsForUser(USER_ID);
  const todosForUser = todoIdsForUser.map(getTodoOrThrow);

  if (status === 'any') {
    return todosForUser;
  }

  return todosForUser.filter(
    (todo) => todo.complete === (status === 'completed'),
  );
}

function getUser(id: string): UserRow | null {
  return usersById.get(id) ?? null;
}

export function getUserOrThrow(id: string): UserRow {
  const user = getUser(id);
  if (!user) {
    throw new Error(`Invariant exception, User ${id} not found`);
  }
  return user;
}

export function markAllTodos(complete: boolean): ReadonlyArray<string> {
  const todosToChange = getTodos().filter(
    (todo) => todo.complete !== complete,
  );

  todosToChange.forEach((todo) => changeTodoStatus(todo.id, complete));

  return todosToChange.map((todo) => todo.id);
}

export function removeTodo(id: string) {
  const todoIdsForUser = getTodoIdsForUser(USER_ID);

  todoIdsByUser.set(
    USER_ID,
    todoIdsForUser.filter((todoId) => todoId !== id),
  );

  todosById.delete(id);
}

export function removeCompletedTodos(): ReadonlyArray<string> {
  const todoIdsForUser = getTodoIdsForUser(USER_ID);

  const todoIdsToRemove = getTodos()
    .filter((todo) => todo.complete)
    .map((todo) => todo.id);

  todoIdsByUser.set(
    USER_ID,
    todoIdsForUser.filter((todoId) => !todoIdsToRemove.includes(todoId)),
  );

  todoIdsToRemove.forEach((id) => todosById.delete(id));

  return todoIdsToRemove;
}

export function renameTodo(id: string, text: string) {
  const todo = getTodoOrThrow(id);
  todosById.set(id, {...todo, text});
}
