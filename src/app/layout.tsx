import "./globals.css";

export const metadata = {
  title: "Cyber Security Training",
  description: "AI-Assisted Security Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}