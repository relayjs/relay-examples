/**
 * @generated SignedSource<<6f3ec410128ccf263f64ef8a448d40cc>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { LocalPlayerQueue__id$data } from "./LocalPlayerQueue__id.graphql";
import type { FragmentType } from "relay-runtime";
import {LocalPlayerQueue as localPlayerQueueRelayModelInstanceResolverType} from "../../js/resolvers/LocalPlayerQueue.js";
// Type assertion validating that `localPlayerQueueRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(localPlayerQueueRelayModelInstanceResolverType: (
  id: LocalPlayerQueue__id$data['id'],
) => mixed);
declare export opaque type LocalPlayerQueue____relay_model_instance$fragmentType: FragmentType;
export type LocalPlayerQueue____relay_model_instance$data = {|
  +__relay_model_instance: $NonMaybeType<ReturnType<typeof localPlayerQueueRelayModelInstanceResolverType>>,
  +$fragmentType: LocalPlayerQueue____relay_model_instance$fragmentType,
|};
export type LocalPlayerQueue____relay_model_instance$key = {
  +$data?: LocalPlayerQueue____relay_model_instance$data,
  +$fragmentSpreads: LocalPlayerQueue____relay_model_instance$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocalPlayerQueue____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LocalPlayerQueue__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": require('relay-runtime/experimental').resolverDataInjector(require('./LocalPlayerQueue__id.graphql'), require('./../../js/resolvers/LocalPlayerQueue').LocalPlayerQueue, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "LocalPlayerQueue",
  "abstractKey": null
};

module.exports = ((node/*: any*/)/*: Fragment<
  LocalPlayerQueue____relay_model_instance$fragmentType,
  LocalPlayerQueue____relay_model_instance$data,
>*/);
