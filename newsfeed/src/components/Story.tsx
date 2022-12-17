import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import PersonalByline, { type Props as PosterProps } from "./PersonalByline";
import StorySummary from "./StorySummary";
import Image from "./Image";

type Props = {
  story: {
    title: string;
    summary: string;
    createdAt: string;
    thumbnail: {
      url: string,
    };
    poster: PosterProps["person"];
  };
};

export default function Story({ story }: Props): React.ReactElement {
  return (
    <Card>
      <PersonalByline person={story.poster} />
      <Heading>{story.title}</Heading>
      <Image image={story.thumbnail.url} description={story.title} width={400} height={400} />
      <StorySummary summary={story.summary} />
    </Card>
  );
}
