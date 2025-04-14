import "styles/globals.css";

import EnvironmentProvider from "src/relay/EnvironmentProvider";
import styles from "styles/layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Github Issues: Relay</title>
      </head>
      <body className={styles.layout}>
        <EnvironmentProvider>{children}</EnvironmentProvider>
      </body>
    </html>
  );
}
