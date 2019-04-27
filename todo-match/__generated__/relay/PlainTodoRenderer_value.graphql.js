/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlainTodoRenderer_value$ref: FragmentReference;
declare export opaque type PlainTodoRenderer_value$fragmentType: PlainTodoRenderer_value$ref;
export type PlainTodoRenderer_value = {|
  +data: ?{|
    +id: string,
    +plainText: ?string,
  |},
  +$refType: PlainTodoRenderer_value$ref,
|};
export type PlainTodoRenderer_value$data = PlainTodoRenderer_value;
export type PlainTodoRenderer_value$key = {
  +$data?: PlainTodoRenderer_value$data,
  +$fragmentRefs: PlainTodoRenderer_value$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PlainTodoRenderer_value",
  "type": "PlainContent",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "data",
      "storageKey": null,
      "args": null,
      "concreteType": "PlainContentData",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "plainText",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '597ea07b22b85b54e202f70d4a053336';
module.exports = node;
