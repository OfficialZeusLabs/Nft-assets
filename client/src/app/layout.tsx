"use client";
import { Provider } from "react-redux";
import store from "@/store";
import { poppins } from "@/fonts/fonts";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "@/providers/walletconnect";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <body className={`${poppins.className}`}>{children}</body>
      </WagmiConfig>
    </Provider>
  );
}
