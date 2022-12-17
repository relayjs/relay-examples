import * as React from "react";
import Image from './Image';

export type Props = {
  person: {
    name: string;
    profilePicture: {
      url: string
    }
  };
};

export default function PersonalByline({ person }: Props): React.ReactElement {
  return (
    <div className="person">
      <picture>
        <Image image={person.profilePicture} width={60} height={60} />
      </picture>
      <div className="person__name">{person.name}</div>
    </div>
  );
}
