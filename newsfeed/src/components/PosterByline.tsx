import * as React from "react";
import Image from "./ImageComponent";

export type Props = {
  poster: {
    name: string;
    profilePicture: {
      url: string;
    };
  };
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  return (
    <div className="byline">
      <picture>
        <Image image={poster.profilePicture} width={60} height={60} />
      </picture>
      <div className="byline__name">{poster.name}</div>
    </div>
  );
}
