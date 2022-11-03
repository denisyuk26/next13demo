import "../styles/main.scss";

import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>

      <body>
        <main className={styles.content}>{children}</main>
      </body>
    </html>
  );
}
