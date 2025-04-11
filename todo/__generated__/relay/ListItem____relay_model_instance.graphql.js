/**
 * @generated SignedSource<<cfdae922445175646f5e12dadf34a66d>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { ListItem__id$data } from "./ListItem__id.graphql";
import type { FragmentType } from "relay-runtime";
import {ListItem as listItemRelayModelInstanceResolverType} from "../../js/resolvers/LocalPlayerQueue.js";
// Type assertion validating that `listItemRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(listItemRelayModelInstanceResolverType: (
  id: ListItem__id$data['id'],
) => mixed);
declare export opaque type ListItem____relay_model_instance$fragmentType: FragmentType;
export type ListItem____relay_model_instance$data = {|
  +__relay_model_instance: $NonMaybeType<ReturnType<typeof listItemRelayModelInstanceResolverType>>,
  +$fragmentType: ListItem____relay_model_instance$fragmentType,
|};
export type ListItem____relay_model_instance$key = {
  +$data?: ListItem____relay_model_instance$data,
  +$fragmentSpreads: ListItem____relay_model_instance$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListItem____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ListItem__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./ListItem__id.graphql'), require('./../../js/resolvers/LocalPlayerQueue').ListItem, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "ListItem",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  ListItem____relay_model_instance$fragmentType,
  ListItem____relay_model_instance$data,
>*/);
