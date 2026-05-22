import type { PosterBylineLocationFragment$key } from "../__generated__/PosterBylineLocationFragment.graphql.ts";

import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

const PosterBylineLocationFragment = graphql`
  fragment PosterBylineLocationFragment on Location {
    name
  }
`;

type Props = {
  location: PosterBylineLocationFragment$key;
};

export default function PosterBylineLocation({ location }: Props) {
  const data = useFragment(PosterBylineLocationFragment, location);
  return <div className="byline__detail">{data.name}</div>;
}
