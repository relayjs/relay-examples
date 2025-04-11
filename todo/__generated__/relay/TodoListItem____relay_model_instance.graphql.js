/**
 * @generated SignedSource<<efd64e55127cd88f8f9e5e76ef0ce236>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { TodoListItem__id$data } from "./TodoListItem__id.graphql";
import type { FragmentType } from "relay-runtime";
import {TodoListItem as todoListItemRelayModelInstanceResolverType} from "../../js/resolvers/ClientTodoList.js";
// Type assertion validating that `todoListItemRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(todoListItemRelayModelInstanceResolverType: (
  id: TodoListItem__id$data['id'],
) => mixed);
declare export opaque type TodoListItem____relay_model_instance$fragmentType: FragmentType;
export type TodoListItem____relay_model_instance$data = {|
  +__relay_model_instance: $NonMaybeType<ReturnType<typeof todoListItemRelayModelInstanceResolverType>>,
  +$fragmentType: TodoListItem____relay_model_instance$fragmentType,
|};
export type TodoListItem____relay_model_instance$key = {
  +$data?: TodoListItem____relay_model_instance$data,
  +$fragmentSpreads: TodoListItem____relay_model_instance$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoListItem__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./TodoListItem__id.graphql'), require('./../../js/resolvers/ClientTodoList').TodoListItem, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "TodoListItem",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  TodoListItem____relay_model_instance$fragmentType,
  TodoListItem____relay_model_instance$data,
>*/);
