"use client";

import StoreProvider from "./context";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}
