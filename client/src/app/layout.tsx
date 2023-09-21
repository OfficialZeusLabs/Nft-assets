"use client";
import { Provider } from "react-redux";
import Providers from "@/providers/walletconnect";
import store from "@/store";
import { poppins } from "../fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygon,
  moonbeam,
  moonbaseAlpha,
} from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon, moonbeam, moonbaseAlpha];

const projectId = "34043931dedf67433e6f95bfa3205586"; //process.env.API_KEY as string

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
    <Provider store={store}>
    <html lang="en">
      <Providers />
      <body className={`${poppins.className}`}>{children}</body>
      </html>
    </Provider>=
    </WagmiConfig>
  );
}

