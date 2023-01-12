export default function isServer(): boolean {
  return typeof document === "undefined";
}
