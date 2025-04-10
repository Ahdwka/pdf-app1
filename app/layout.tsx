import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navBar";

export const metadata: Metadata = {
  title: "IUST Lecturs",
  description: "IUST Lecture Materials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={``}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
