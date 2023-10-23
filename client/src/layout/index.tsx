"use client";

import { poppins } from "@/fonts/fonts";

export default function AppLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return ( 
        <body className={`${poppins.className}`}>{children}</body>
    )
}