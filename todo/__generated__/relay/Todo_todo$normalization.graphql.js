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
  "name": "Todo_todo$normalization",
  "metadata": {
    "derivedFrom": "Todo_todo"
  },
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "complete",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "content",
      "storageKey": "content(supported:[\"PlainContent\",\"BoldContent\"])",
      "args": [
        {
          "kind": "Literal",
          "name": "supported",
          "value": [
            "PlainContent",
            "BoldContent"
          ]
        }
      ],
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "__typename",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "type": "PlainContent",
          "selections": [
            {
              "kind": "ModuleImport",
              "documentName": "Todo_todo",
              "fragmentName": "PlainTodoRenderer_value",
              "fragmentPropName": "value"
            }
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "BoldContent",
          "selections": [
            {
              "kind": "ModuleImport",
              "documentName": "Todo_todo",
              "fragmentName": "BoldTodoRenderer_value",
              "fragmentPropName": "value"
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '155c226cd659a9e7cd6def9287340d9e';
module.exports = node;
