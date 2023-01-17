"use client";

import { RelayEnvironmentProvider } from "react-relay";
import { getCurrentEnvironment } from "src/relay/environment";
import "styles/globals.css";

import styles from "styles/layout.module.css";

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
        <body className={styles.layout}>{children}</body>
      </RelayEnvironmentProvider>
    </html>
  );
}
