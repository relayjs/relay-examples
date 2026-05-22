type OrganizationKindValue =
  | "COMMERCIAL"
  | "NONPROFIT"
  | "GOVERNMENT"
  | "JOURNALISTIC"
  | "%future added value";

type Props = {
  kind: OrganizationKindValue;
};

export default function OrganizationKind({ kind }: Props) {
  return <div className="byline__detail">{label(kind)}</div>;
}

function label(kind: OrganizationKindValue): string {
  switch (kind) {
    case "COMMERCIAL":
      return "Company";
    case "NONPROFIT":
      return "Non-Profit Organization";
    case "GOVERNMENT":
      return "Official Government Account";
    case "JOURNALISTIC":
      return "Journalistic Organization";
  }
  return "";
}
