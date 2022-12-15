import * as React from "react";

export default function StorySummary({
  summary,
}: {
  summary: string;
}): React.ReactElement {
  return (
    <div className="story__summary">
      <p>{summary}</p>
    </div>
  );
}
