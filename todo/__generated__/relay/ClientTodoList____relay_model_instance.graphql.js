/**
 * @generated SignedSource<<6c2b1bcaad859d53c2c19cf3380a82aa>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { ClientTodoList__id$data } from "./ClientTodoList__id.graphql";
import type { FragmentType } from "relay-runtime";
import {ClientTodoList as clientTodoListRelayModelInstanceResolverType} from "../../js/resolvers/ClientTodoList.js";
// Type assertion validating that `clientTodoListRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(clientTodoListRelayModelInstanceResolverType: (
  id: ClientTodoList__id$data['id'],
) => mixed);
declare export opaque type ClientTodoList____relay_model_instance$fragmentType: FragmentType;
export type ClientTodoList____relay_model_instance$data = {|
  +__relay_model_instance: $NonMaybeType<ReturnType<typeof clientTodoListRelayModelInstanceResolverType>>,
  +$fragmentType: ClientTodoList____relay_model_instance$fragmentType,
|};
export type ClientTodoList____relay_model_instance$key = {
  +$data?: ClientTodoList____relay_model_instance$data,
  +$fragmentSpreads: ClientTodoList____relay_model_instance$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientTodoList____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClientTodoList__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./ClientTodoList__id.graphql'), require('./../../js/resolvers/ClientTodoList').ClientTodoList, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "ClientTodoList",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  ClientTodoList____relay_model_instance$fragmentType,
  ClientTodoList____relay_model_instance$data,
>*/);
