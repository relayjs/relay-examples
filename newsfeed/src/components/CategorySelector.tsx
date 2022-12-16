import * as React from "react";
import SmallSpinner from "./SmallSpinner";

export default function CategorySelector({
  value,
  onChange,
  isPending,
}: {
  value: string;
  onChange: (newValue: string) => void;
  isPending?: boolean,
}): React.ReactElement {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="ALL">All</option>
        <option value="EDUCATION">Education</option>
        <option value="NEWS">News</option>
        <option value="COOKING">Cooking</option>
      </select>
      {isPending && <SmallSpinner />}
    </div>
  );
}
