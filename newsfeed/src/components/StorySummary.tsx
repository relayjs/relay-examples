import * as React from "react";

export default function StorySummary({
  summary,
}: {
  summary: string[];
}): React.ReactElement {
  return (
    <div className="story__summary">
      {summary.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}
