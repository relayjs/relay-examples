import * as React from "react";
import SmallSpinner from "./SmallSpinner";

// In a real app this would be imported from NewsfeedQuery.graphql; it is only defined
// separately here to make the step-by-step examples work when partially completed.
type Category =
  | "ALL"
  | "COOKING"
  | "EDUCATION"
  | "NEWS"
  | "%future added value";

export default function CategorySelector({
  value,
  onChange,
  isPending,
}: {
  value: Category;
  onChange: (newValue: Category) => void;
  isPending?: boolean;
}): React.ReactElement {
  return (
    <div>
      <select value={value} onChange={(e) => onChange(coerce(e.target.value))}>
        <option value="ALL">All</option>
        <option value="EDUCATION">Education</option>
        <option value="NEWS">News</option>
        <option value="COOKING">Cooking</option>
      </select>
      {isPending && <SmallSpinner />}
    </div>
  );
}

function coerce(s: string): Category {
  if (s === "ALL") return s;
  if (s === "COOKING") return s;
  if (s === "EDUCATION") return s;
  if (s === "NEWS") return s;
  return "ALL";
}
