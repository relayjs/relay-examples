import * as React from "react";

import SmallSpinner from "./SmallSpinner";

export type Props = {
  value: string;
  onChange: (newValue: string) => void;
  isPending?: boolean;
};

export default function SearchInput({ value, onChange, isPending }: Props) {
  return (
    <div className="searchInput">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      {isPending && <SmallSpinner />}
    </div>
  );
}
