/**
 * @flow
 * @relayHash 0751d6773ba7ce86747c2bcdade9adb8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateBoldContentDataInput = {|
  id: string,
  text: string,
  clientMutationId?: ?string,
|};
export type UpdateBoldContentDataMutationVariables = {|
  input: UpdateBoldContentDataInput
|};
export type UpdateBoldContentDataMutationResponse = {|
  +updateBoldContentData: ?{|
    +boldContentData: {|
      +id: string,
      +boldText: ?string,
    |}
  |}
|};
export type UpdateBoldContentDataMutation = {|
  variables: UpdateBoldContentDataMutationVariables,
  response: UpdateBoldContentDataMutationResponse,
|};
*/


/*
mutation UpdateBoldContentDataMutation(
  $input: UpdateBoldContentDataInput!
) {
  updateBoldContentData(input: $input) {
    boldContentData {
      id
      boldText
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateBoldContentDataInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateBoldContentData",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateBoldContentDataPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "boldContentData",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateBoldContentDataMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateBoldContentDataMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateBoldContentDataMutation",
    "id": null,
    "text": "mutation UpdateBoldContentDataMutation(\n  $input: UpdateBoldContentDataInput!\n) {\n  updateBoldContentData(input: $input) {\n    boldContentData {\n      id\n      boldText\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b54f77c49973c705c2be2c3309f7196';
module.exports = node;
