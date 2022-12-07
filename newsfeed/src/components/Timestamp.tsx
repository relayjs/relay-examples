import * as React from "react";

export default function Timestamp({
  time,
}: {
  time: Date;
}): React.ReactElement {
  return <span className="timestamp">{time.toDateString()}</span>;
}
