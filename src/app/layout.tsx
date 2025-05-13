import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {Menu} from "@/components/created/Menu";

export const metadata: Metadata = {
  title: "Ojasva Manik",
  description: "Portfolio of Ojasva Manik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      return (
        <html lang="en" suppressHydrationWarning={true}>
          <body className={`antialiased`}>
            {children}
            <Menu />
          </body>
        </html>
      );
}