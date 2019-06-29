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
  "name": "PlainTodoRenderer_value$normalization",
  "metadata": {
    "derivedFrom": "PlainTodoRenderer_value"
  },
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
