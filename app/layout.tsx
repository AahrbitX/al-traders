import type { Metadata } from "next";
import "./globals.css";

import { interVariable, dmsansVariable } from "./fonts";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { WhatsAppOverlay } from "@/components/custom/whatsapp";

export const metadata: Metadata = {
  title: "AL Traders",
  description:
    "Buy premium hand tools in Tamil Nadu from Kanniyakumari's most trusted retailer. Explore high-quality manual tools, machine tool accessories, and brass hardware at the best prices. Limited stock—Shop now!",
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
        <WhatsAppOverlay
          companyName="AL Traders"
          companyDesignation="Medium Scale Enterprise"
          companyNumber={9677776883}
        />
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </body>
    </html>
  );
}
