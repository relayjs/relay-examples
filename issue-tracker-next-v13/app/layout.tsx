"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "src/relay/environment";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const environment = getCurrentEnvironment();

  return (
    <html>
      <head>
        <title>Github Issues: Relay</title>
      </head>
      <RelayEnvironmentProvider environment={environment}>
        <body>{children}</body>
      </RelayEnvironmentProvider>
    </html>
  );
}
