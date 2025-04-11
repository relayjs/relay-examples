// @flow strict-local

/* 
    This has been added to demonstrate the issues with client resolvers and server edges
    ClientTodoList contains a list of todo items that point to Todo Server edges

*/

/**
 * @RelayResolver ClientTodoList
 */
export const ClientTodoList = () => ({});

/**
 * @RelayResolver ClientTodoList.items: [TodoListItem]
 */
export const items = () => ['VG9kbzow', 'VG9kbzox'];

/**
 * @RelayResolver TodoListItem
 */
export const TodoListItem = (id) => id;

/**
 * @RelayResolver TodoListItem.todo: Todo
 */
export const todo = (id) => id;
