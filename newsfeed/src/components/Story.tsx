import * as React from "react";
import Poster, { type Props as PosterProps } from "./Poster";

type Props = {
  story: {
    title: string;
    summary: string[];
    picture: string | null;
    poster: PosterProps["poster"];
  };
};

export default function Story({ story }: Props): React.ReactElement {
  return (
    <article className="story">
      <Poster poster={story.poster} />
      <div className="story__header">
        <h2>{story.title}</h2>
      </div>
      {story.picture != null ? (
        <div className="story__picture">
          <picture>
            <img src={story.picture} alt={story.title} />
          </picture>
        </div>
      ) : null}
      <div className="story__summary">
        {story.summary.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </article>
  );
}
