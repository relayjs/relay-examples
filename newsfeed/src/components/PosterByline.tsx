import * as React from "react";
import Image from "./Image";

export type Props = {
  poster: {
    name: string;
    profilePicture: {
      url: string;
    };
  };
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  if (poster == null) {
    return null;
  }
  return (
    <div className="byline">
      <Image
        image={poster.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{poster.name}</div>
    </div>
  );
}
