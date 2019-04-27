/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { NormalizationSplitOperation } from 'relay-runtime';

*/


const node/*: NormalizationSplitOperation*/ = {
  "kind": "SplitOperation",
  "name": "BoldTodoRenderer_value$normalization",
  "metadata": {
    "derivedFrom": "BoldTodoRenderer_value"
  },
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "data",
      "storageKey": null,
      "args": null,
      "concreteType": "BoldContentData",
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
          "name": "boldText",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": "__module_operation",
      "name": "js",
      "args": [
        {
          "kind": "Literal",
          "name": "module",
          "value": "BoldTodoRenderer_value$normalization.graphql",
          "type": "String"
        }
      ],
      "storageKey": "__module_operation"
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '01ea7cfb2c5ab813b3338ef88bbc3ee8';
module.exports = node;
