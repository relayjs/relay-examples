// In a real app this would be imported from PosterBylineFragment.graphql; it is only defined
// separately here to make the step-by-step examples work when partially completed.
type OrganizationKind =
  | "COMMERCIAL"
  | "NONPROFIT"
  | "GOVERNMENT"
  | "JOURNALISTIC"
  | "%future added value";

type Props = {
  kind: OrganizationKind;
};

export default function OrganizationKind({
  kind,
}: Props) {
  return <div className="byline__detail">{label(kind)}</div>;
}

function label(kind: OrganizationKind): string {
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
