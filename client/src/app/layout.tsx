"use client";
import Providers from "@/providers/walletconnect";
import store from "@/store";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  moonbaseAlpha,
  moonbeam,
  polygon,
} from "wagmi/chains";
import { poppins } from "../fonts/fonts";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const chains = [arbitrum, mainnet, polygon, moonbeam, moonbaseAlpha];

const projectId = "34043931dedf67433e6f95bfa3205586"; //process.env.API_KEY as string

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <html lang="en">
        <Providers />
        <Provider store={store}>
          <body className={`${poppins.className}`}>{children}</body>
        </Provider>
        <ToastContainer />
      </html>
    </WagmiConfig>
  );
}
