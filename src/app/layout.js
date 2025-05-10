import "./globals.css";

export const metadata = {
  title: "Cybertales",
  description: "Online Stories App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
