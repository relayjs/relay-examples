/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IssueDetailRoot_timelineItems$ref: FragmentReference;
declare export opaque type IssueDetailRoot_timelineItems$fragmentType: IssueDetailRoot_timelineItems$ref;
export type IssueDetailRoot_timelineItems = {|
  +__typename: "IssueComment",
  +body: string,
  +$refType: IssueDetailRoot_timelineItems$ref,
|} | {|
  +__typename: "CrossReferencedEvent",
  +willCloseTarget: boolean,
  +$refType: IssueDetailRoot_timelineItems$ref,
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other",
  +$refType: IssueDetailRoot_timelineItems$ref,
|};
export type IssueDetailRoot_timelineItems$data = IssueDetailRoot_timelineItems;
export type IssueDetailRoot_timelineItems$key = {
  +$data?: IssueDetailRoot_timelineItems$data,
  +$fragmentRefs: IssueDetailRoot_timelineItems$ref,
  ...
};
*/

const node /*: ReaderFragment*/ = {
  kind: 'Fragment',
  name: 'IssueDetailRoot_timelineItems',
  type: 'IssueTimelineItems',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    {
      kind: 'InlineFragment',
      type: 'IssueComment',
      selections: [
        {
          kind: 'ScalarField',
          alias: null,
          name: 'body',
          args: null,
          storageKey: null,
        },
      ],
    },
    {
      kind: 'InlineFragment',
      type: 'CrossReferencedEvent',
      selections: [
        {
          kind: 'ScalarField',
          alias: null,
          name: 'willCloseTarget',
          args: null,
          storageKey: null,
        },
      ],
    },
  ],
};
// prettier-ignore
(node/*: any*/).hash = '5a90dfc8324816bb8849054961f471bf';

module.exports = node;
