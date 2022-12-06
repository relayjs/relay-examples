import * as React from "react";

export type Props = {
  poster: { name: string; picture: string };
};

export default function Poster({ poster }: Props): React.ReactElement {
  return (
    <div className="poster">
      <picture>
        <img src={poster.picture} alt={poster.name} />
      </picture>
      <div className="poster__name">{poster.name}</div>
    </div>
  );
}
