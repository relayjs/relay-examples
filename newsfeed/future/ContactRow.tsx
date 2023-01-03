import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";

import type { ContactRowFragment$key } from "./__generated__/ContactRowFragment.graphql";

export type Props = {
  contact: ContactRowFragment$key;
};

const ContactRowFragment = graphql`
  fragment ContactRowFragment on Actor {
    name
    profilePicture {
      ...ImageFragment
    }
  }
`;

export default function ContactRow({ contact }: Props): React.ReactElement {
  const data = useFragment(ContactRowFragment, contact);
  return (
    <div className="contactRow">
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="contactRow__image"
      />
      <div className="contactRow__name">{data.name}</div>
    </div>
  );
}
