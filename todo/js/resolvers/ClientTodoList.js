// @flow strict-local

// These are the ids of the todo items
const TODO_IDS = ['VG9kbzow', 'VG9kbzox'];

/* 
    ClientTodoList contains a list of todo items that point to Todo Server edges
*/

/**
 * @RelayResolver ClientTodoList
 */
export const ClientTodoList = () => ({});

/**
 * @RelayResolver ClientTodoList.items: [TodoListItem]
 */
export const items = () => TODO_IDS;

/**
 * @RelayResolver TodoListItem
 */
export const TodoListItem = (id) => id;

/**
 * @RelayResolver TodoListItem.todo: Todo
 */
export const todo = (id) => id;
