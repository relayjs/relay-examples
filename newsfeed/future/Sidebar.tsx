import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import LoadingSpinner from "./LoadingSpinner";
import type { SidebarQuery as SidebarQueryType } from "./__generated__/SidebarQuery.graphql";
import ViewerProfile from "./ViewerProfile";
import ContactsList from "./ContactsList";

const SidebarQuery = graphql`
  query SidebarQuery {
    viewer {
      ...ViewerProfileFragment
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
      <ViewerProfile viewer={data.viewer} />
      <ContactsList viewer={data.viewer} />
    </>
  );
}
