import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import type { ViewerProfileFragment$key } from "../__generated__/ViewerProfileFragment.graphql.ts";
import Card from "./Card.tsx";

const ViewerProfileFragment = graphql`
  fragment ViewerProfileFragment on Viewer {
    actor {
      name
      profilePicture {
        url
      }
    }
  }
`;

export default function ViewerProfile({
  viewer,
}: {
  viewer: ViewerProfileFragment$key;
}) {
  const data = useFragment(ViewerProfileFragment, viewer);
  return (
    <Card dim={true}>
      <div className="viewerProfile">
        <img
          src={data.actor?.profilePicture?.url}
          height="60"
          width="60"
        />
        <div className="viewerProfile__name">{data.actor?.name}</div>
        <div className="viewerProfile__menu">⋯</div>
      </div>
    </Card>
  );
}
