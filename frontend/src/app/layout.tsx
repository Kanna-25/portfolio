import "./globals.css"; // この一行があるかチェック！

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
