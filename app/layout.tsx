import type { Metadata } from "next";
import "./globals.css";

import { interVariable, dmsansVariable } from "./fonts";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AL Traders",
  description: "Medium Scale Enterprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${interVariable} ${dmsansVariable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
