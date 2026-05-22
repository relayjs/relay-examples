import { useMemo, type ReactNode } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { createEnvironment } from "./environment.ts";

export default function RelayEnvironment({
  children,
}: {
  children: ReactNode;
}) {
  const environment = useMemo(() => {
    return createEnvironment();
  }, []);

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
