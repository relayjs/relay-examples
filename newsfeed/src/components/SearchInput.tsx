import * as React from "react";

const { useState } = React;

export type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function SearchInput({ value, onChange }: Props) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}
