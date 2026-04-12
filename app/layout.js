import "./globals.css";

export const metadata = {
  title: "ECE 196 Project Website",
  description: "ECE 196 team site about improving student parking access at UCSD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
