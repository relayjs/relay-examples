export default function Timestamp({ time }: { time: string }) {
  if (time == null) {
    return null;
  }
  return <span className="timestamp">{new Date(time).toDateString()}</span>;
}
