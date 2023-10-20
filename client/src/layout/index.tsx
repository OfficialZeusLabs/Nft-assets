"use client";

import { poppins } from "@/fonts/fonts";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function AppLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
      const { address, isConnected } = useAccount();

    useEffect(() => {
        console.log(address, "#address")
        console.log(isConnected, "#connected");
    }, []);
    
    return ( 
        <body className={`${poppins.className}`}>{children}</body>
    )
}