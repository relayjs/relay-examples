import Card from "./Card";
import Heading from "./Heading";
import Image from "./Image";
import PosterByline, { type Props as PosterBylineProps } from "./PosterByline";
import StorySummary from "./StorySummary";

type Props = {
  story: {
    title: string;
    summary: string;
    thumbnail: {
      url: string;
    };
    poster: PosterBylineProps["poster"];
  };
};

export default function Story({ story }: Props) {
  return (
    <Card>
      <PosterByline poster={story.poster} />
      <Heading>{story.title}</Heading>
      <Image image={story.thumbnail} width={400} height={400} />
      <StorySummary summary={story.summary} />
    </Card>
  );
}
