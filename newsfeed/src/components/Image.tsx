import * as React from "react";

export default function Image({
  image,
  description,
}: {
  image: string | null;
  description: string;
}): React.ReactElement {
  if (image == null) {
    return null;
  }
  return <img className="image" src={image} alt={description} />;
}
