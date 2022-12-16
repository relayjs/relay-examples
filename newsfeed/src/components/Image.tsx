import * as React from "react";

export default function Image({
  image,
  description,
  width,
  height,
}: {
  image: string | null;
  description: string;
  width?: number;
  height?: number;
}): React.ReactElement {
  if (image == null) {
    return null;
  }
  return <img key={image} src={image} alt={description} width={width} height={height} />;
}
