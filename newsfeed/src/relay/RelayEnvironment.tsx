import { ReactNode, useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";

import { createEnvironment } from "./environment";

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
