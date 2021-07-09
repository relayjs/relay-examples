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
declare export opaque type Todo_todo$fragmentType: Todo_todo$ref;
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
export type Todo_todo$data = Todo_todo;
export type Todo_todo$key = {
  +$data?: Todo_todo$data,
  +$fragmentRefs: Todo_todo$ref,
};
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
          "kind": "InlineFragment",
          "type": "PlainContent",
          "selections": [
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
            },
            {
              "kind": "ModuleImport",
              "fragmentPropName": "value",
              "fragmentName": "PlainTodoRenderer_value"
            }
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "BoldContent",
          "selections": [
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
            },
            {
              "kind": "ModuleImport",
              "fragmentPropName": "value",
              "fragmentName": "BoldTodoRenderer_value"
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
