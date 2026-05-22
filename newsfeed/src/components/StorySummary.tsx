export default function StorySummary({ summary }: { summary: string }) {
  return (
    <div className="story__summary">
      <p>{summary}</p>
    </div>
  );
}
