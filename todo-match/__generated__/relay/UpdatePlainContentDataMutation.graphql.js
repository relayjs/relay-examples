/**
 * @flow
 * @relayHash 0dac8e6b2a949087be0e06ffeadba9f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePlainContentDataInput = {|
  id: string,
  text: string,
  clientMutationId?: ?string,
|};
export type UpdatePlainContentDataMutationVariables = {|
  input: UpdatePlainContentDataInput
|};
export type UpdatePlainContentDataMutationResponse = {|
  +updatePlainContentData: ?{|
    +plainContentData: {|
      +id: string,
      +plainText: ?string,
    |}
  |}
|};
export type UpdatePlainContentDataMutation = {|
  variables: UpdatePlainContentDataMutationVariables,
  response: UpdatePlainContentDataMutationResponse,
|};
*/


/*
mutation UpdatePlainContentDataMutation(
  $input: UpdatePlainContentDataInput!
) {
  updatePlainContentData(input: $input) {
    plainContentData {
      id
      plainText
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdatePlainContentDataInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updatePlainContentData",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdatePlainContentDataInput!"
      }
    ],
    "concreteType": "UpdatePlainContentDataPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "plainContentData",
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
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdatePlainContentDataMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdatePlainContentDataMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdatePlainContentDataMutation",
    "id": null,
    "text": "mutation UpdatePlainContentDataMutation(\n  $input: UpdatePlainContentDataInput!\n) {\n  updatePlainContentData(input: $input) {\n    plainContentData {\n      id\n      plainText\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c267591d010dc9f79ed2ec7bb1f62c6e';
module.exports = node;
