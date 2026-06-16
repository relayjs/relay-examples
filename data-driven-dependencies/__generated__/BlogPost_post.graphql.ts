/**
 * @generated SignedSource<<54680f7389874591918f22cc85f2637e>>
 * @lightSyntaxTransform
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogPost_post$data = {
  readonly content: string;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "BlogPost_post";
};
export type BlogPost_post$key = {
  readonly " $data"?: BlogPost_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogPost_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogPost_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "BlogPost",
  "abstractKey": null
};

(node as any).hash = "ee8322a1fc4de12746496244ebf245f1";

export default node;
