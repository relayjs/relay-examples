/**
 * @generated SignedSource<<6f9153145e8a075f20faf8e7bdc4ca70>>
 * @relayHash 8414dcd4ff3b9e8a93b8f25346295d80
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 8414dcd4ff3b9e8a93b8f25346295d80

/*::
import type { PreloadableConcreteRequest } from 'relay-runtime';
import type { TodoAppQuery } from './TodoAppQuery.graphql';
*/

var node/*: PreloadableConcreteRequest<TodoAppQuery>*/ = {
  "kind": "PreloadableConcreteRequest",
  "params": {
    "id": "8414dcd4ff3b9e8a93b8f25346295d80",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "user",
            "todos"
          ]
        }
      ]
    },
    "name": "TodoAppQuery",
    "operationKind": "query",
    "text": null
  }
};

module.exports = ((node/*: any*/)/*: PreloadableConcreteRequest<TodoAppQuery>*/);
