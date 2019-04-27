/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { BoldTodoRenderer_value$ref } from "./BoldTodoRenderer_value.graphql";
import type { PlainTodoRenderer_value$ref } from "./PlainTodoRenderer_value.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Todo_todo$ref: FragmentReference;
export type Todo_todo = {|
  +complete: boolean,
  +id: string,
  +content: ?{|
    +__fragmentPropName?: ?string,
    +__module_component?: ?string,
    +$fragmentRefs: PlainTodoRenderer_value$ref & BoldTodoRenderer_value$ref,
  |},
  +$refType: Todo_todo$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Todo_todo",
  "type": "Todo",
  "metadata": null,
  "argumentDefinitions": [],
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
      "storageKey": "content(BoldTodoRenderer_value:BoldTodoRenderer.react,PlainTodoRenderer_value:PlainTodoRenderer.react)",
      "args": [
        {
          "kind": "Literal",
          "name": "supported",
          "value": [
            "PlainContent",
            "BoldContent"
          ],
          "type": "[String!]!"
        }
      ],
      "concreteType": null,
      "plural": false,
      "selections": [
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
                  "value": "PlainTodoRenderer.react",
                  "type": "String"
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
                  "value": "BoldTodoRenderer.react",
                  "type": "String"
                }
              ],
              "storageKey": "__module_component"
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '82f7eaaadd4a59fb2dae7f251fd21705';
module.exports = node;
