/**
 * @generated SignedSource<<8699ce7d491be7cce878f96a28b2bf15>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListFragment$data = {
  readonly contacts: ReadonlyArray<{
    readonly __id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContactRowFragment">;
  } | null> | null;
  readonly " $fragmentType": "ContactsListFragment";
};
export type ContactsListFragment$key = {
  readonly " $data"?: ContactsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contacts",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContactRowFragment"
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "f2b1bcdf3b2012c056beaff5ac2720d5";

export default node;
