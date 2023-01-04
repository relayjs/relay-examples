import * as React from "react";
import { graphql, useFragment } from "react-relay";
import { ImageFragment$key } from "./__generated__/ImageFragment.graphql";

type Props = {
  image: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

export default function Image({ image, ...rest }: Props): React.ReactElement {
  const { url } = useFragment(
    graphql`
      fragment ImageFragment on Image {
        url
      }
    `,
    image
  );
  return <img key={url} src={url} {...rest} />;
}
