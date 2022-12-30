import * as React from "react";
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";
import LoadingSpinner from './LoadingSpinner';
import type {SidebarQuery as SidebarQueryType} from './__generated__/SidebarQuery.graphql';

const SidebarQuery = graphql`
  query SidebarQuery {
    viewer {
      __typename
    }
  }
`;

export default function Sidebar() {
  return (
    <div className="sidebar">
      <React.Suspense fallback={<LoadingSpinner />}>
        <SidebarContents />
      </React.Suspense>
    </div>
  );
}

function SidebarContents() {
  const data = useLazyLoadQuery<SidebarQueryType>(SidebarQuery, {});
  return (
    <>
    </>
  );
}
