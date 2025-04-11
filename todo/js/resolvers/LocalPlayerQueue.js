// @flow strict-local

/**
 * @RelayResolver LocalPlayerQueue
 */
export const LocalPlayerQueue = () => ({});

/**
 * @RelayResolver LocalPlayerQueue.list: [ListItem]
 */
export const list = (): string => ['VG9kbzow', 'VG9kbzox'];

/**
 * @RelayResolver ListItem
 */
export const ListItem = (id) => id;

/**
 * @RelayResolver ListItem.todo: Todo
 */
export const todo = (id) => id;
