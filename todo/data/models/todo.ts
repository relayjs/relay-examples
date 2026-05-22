import type {ID} from 'grats';
import {
  fromGlobalId,
  toGlobalId,
  cursorForObjectInConnection,
} from 'graphql-relay';
import {
  type TodoRow,
  addTodo as dbAddTodo,
  changeTodoStatus as dbChangeTodoStatus,
  getTodoOrThrow,
  getTodos,
  getUserOrThrow,
  markAllTodos as dbMarkAllTodos,
  removeCompletedTodos as dbRemoveCompletedTodos,
  removeTodo as dbRemoveTodo,
  renameTodo as dbRenameTodo,
} from '../database.ts';
import type {Edge} from '../graphql/connection.ts';
import type {GraphQLNode} from '../graphql/node.ts';
import {User} from './user.ts';

// --- Input Types ---

/** @gqlInput */
type AddTodoInput = {
  text: string;
  userId: ID;
  clientMutationId?: string | null;
};

/** @gqlInput */
type ChangeTodoStatusInput = {
  complete: boolean;
  id: ID;
  userId: ID;
  clientMutationId?: string | null;
};

/** @gqlInput */
type MarkAllTodosInput = {
  complete: boolean;
  userId: ID;
  clientMutationId?: string | null;
};

/** @gqlInput */
type RemoveCompletedTodosInput = {
  userId: ID;
  clientMutationId?: string | null;
};

/** @gqlInput */
type RemoveTodoInput = {
  id: ID;
  userId: ID;
  clientMutationId?: string | null;
};

/** @gqlInput */
type RenameTodoInput = {
  id: ID;
  text: string;
  clientMutationId?: string | null;
};

// --- Payload Types ---

/** @gqlType */
type AddTodoPayload = {
  /** @gqlField
   * @killsParentOnException */
  todoEdge: Edge<Todo>;
  /** @gqlField
   * @killsParentOnException */
  user: User;
  /** @gqlField */
  clientMutationId: string | null;
};

/** @gqlType */
type ChangeTodoStatusPayload = {
  /** @gqlField
   * @killsParentOnException */
  todo: Todo;
  /** @gqlField
   * @killsParentOnException */
  user: User;
  /** @gqlField */
  clientMutationId: string | null;
};

/** @gqlType */
type MarkAllTodosPayload = {
  /** @gqlField */
  changedTodos: Array<Todo> | null;
  /** @gqlField
   * @killsParentOnException */
  user: User;
  /** @gqlField */
  clientMutationId: string | null;
};

/** @gqlType */
type RemoveCompletedTodosPayload = {
  /** @gqlField */
  deletedTodoIds: Array<ID> | null;
  /** @gqlField
   * @killsParentOnException */
  user: User;
  /** @gqlField */
  clientMutationId: string | null;
};

/** @gqlType */
type RemoveTodoPayload = {
  /** @gqlField
   * @killsParentOnException */
  deletedTodoId: ID;
  /** @gqlField
   * @killsParentOnException */
  user: User;
  /** @gqlField */
  clientMutationId: string | null;
};

/** @gqlType */
type RenameTodoPayload = {
  /** @gqlField
   * @killsParentOnException */
  todo: Todo;
  /** @gqlField */
  clientMutationId: string | null;
};

// --- Todo Type ---

/** @gqlType */
export class Todo implements GraphQLNode {
  __typename = 'Todo' as const;
  private model: TodoRow;

  constructor(model: TodoRow) {
    this.model = model;
  }

  localID(): string {
    return this.model.id;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  text(): string {
    return this.model.text;
  }

  /**
   * @gqlField
   * @killsParentOnException */
  complete(): boolean {
    return this.model.complete;
  }

  /**
   * @gqlMutationField */
  static addTodo(input: AddTodoInput): AddTodoPayload {
    const {text, userId} = input;
    const todoId = dbAddTodo(text, false);
    const todo = getTodoOrThrow(todoId);
    const todos = [...getTodos()];

    return {
      todoEdge: {
        cursor: cursorForObjectInConnection(todos, todo) ?? '',
        node: new Todo(todo),
      },
      user: new User(getUserOrThrow(userId)),
      clientMutationId: input.clientMutationId ?? null,
    };
  }

  /**
   * @gqlMutationField */
  static changeTodoStatus(input: ChangeTodoStatusInput): ChangeTodoStatusPayload {
    const {id: globalId, complete, userId} = input;
    const todoId = fromGlobalId(globalId).id;
    dbChangeTodoStatus(todoId, complete);

    return {
      todo: new Todo(getTodoOrThrow(todoId)),
      user: new User(getUserOrThrow(userId)),
      clientMutationId: input.clientMutationId ?? null,
    };
  }

  /**
   * @gqlMutationField */
  static markAllTodos(input: MarkAllTodosInput): MarkAllTodosPayload {
    const {complete, userId} = input;
    const changedTodoIds = dbMarkAllTodos(complete);

    return {
      changedTodos: changedTodoIds.map(
        (todoId) => new Todo(getTodoOrThrow(todoId)),
      ),
      user: new User(getUserOrThrow(userId)),
      clientMutationId: input.clientMutationId ?? null,
    };
  }

  /**
   * @gqlMutationField */
  static removeCompletedTodos(input: RemoveCompletedTodosInput): RemoveCompletedTodosPayload {
    const {userId} = input;
    const deletedTodoLocalIds = dbRemoveCompletedTodos();
    const deletedTodoIds = deletedTodoLocalIds.map((localId) =>
      toGlobalId('Todo', localId),
    );

    return {
      deletedTodoIds,
      user: new User(getUserOrThrow(userId)),
      clientMutationId: input.clientMutationId ?? null,
    };
  }

  /**
   * @gqlMutationField */
  static removeTodo(input: RemoveTodoInput): RemoveTodoPayload {
    const {id: globalId, userId} = input;
    const localTodoId = fromGlobalId(globalId).id;
    dbRemoveTodo(localTodoId);

    return {
      deletedTodoId: globalId,
      user: new User(getUserOrThrow(userId)),
      clientMutationId: input.clientMutationId ?? null,
    };
  }

  /**
   * @gqlMutationField */
  static renameTodo(input: RenameTodoInput): RenameTodoPayload {
    const {id: globalId, text} = input;
    const localTodoId = fromGlobalId(globalId).id;
    dbRenameTodo(localTodoId, text);

    return {
      todo: new Todo(getTodoOrThrow(localTodoId)),
      clientMutationId: input.clientMutationId ?? null,
    };
  }
}
