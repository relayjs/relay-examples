import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import LoadingSpinner from "./LoadingSpinner";
import type { SidebarQuery as SidebarQueryType } from "./__generated__/SidebarQuery.graphql";
import ContactsList from "./ContactsList";

const SidebarQuery = graphql`
  query SidebarQuery {
    viewer {
      ...ContactsListFragment
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
      <ContactsList viewer={data.viewer} />
    </>
  );
}
