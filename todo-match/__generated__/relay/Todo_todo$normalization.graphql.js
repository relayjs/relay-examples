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
      "storageKey": "content(BoldTodoRenderer_value:BoldTodoRenderer,PlainTodoRenderer_value:PlainTodoRenderer)",
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
              "fragmentPropName": "value",
              "fragmentName": "PlainTodoRenderer_value"
            },
            {
              "kind": "ScalarField",
              "alias": "__module_component",
              "name": "js",
              "args": [
                {
                  "kind": "Literal",
                  "name": "module",
                  "value": "PlainTodoRenderer"
                }
              ],
              "storageKey": "__module_component"
            }
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "BoldContent",
          "selections": [
            {
              "kind": "ModuleImport",
              "fragmentPropName": "value",
              "fragmentName": "BoldTodoRenderer_value"
            },
            {
              "kind": "ScalarField",
              "alias": "__module_component",
              "name": "js",
              "args": [
                {
                  "kind": "Literal",
                  "name": "module",
                  "value": "BoldTodoRenderer"
                }
              ],
              "storageKey": "__module_component"
            }
          ]
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
          "value": "Todo_todo$normalization.graphql"
        }
      ],
      "storageKey": "__module_operation"
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '155c226cd659a9e7cd6def9287340d9e';
module.exports = node;
