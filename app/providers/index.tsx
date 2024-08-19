"use client";

import * as React from "react";
import NotificationProvider from "@/app/contexts/NotificationContext";
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";

import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  ledgerWallet,
  phantomWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { base, sepolia, baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//@ts-ignore
import { WagmiProvider, http } from "wagmi";
import ActiveWeb3Provider from "@/app/contexts/Web3Context";

// const { wallets } = getDefaultWallets({
//   appName: "NFT Marketing Place",
//   projectId: "YOUR_PROJECT_ID",
//   chains,
// });

const config = getDefaultConfig({
  appName: "NFT Marketing Place",
  projectId: "e89228fed40d4c6e9520912214dfd68b",
  wallets: [
    {
      groupName: "Other",
      wallets: [metaMaskWallet],
    },
  ],
  chains: [
    base,
    sepolia,
    baseSepolia,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  transports: {
    [sepolia.id]: http("https://base-sepolia.blockpi.network/v1/rpc/public"),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <ActiveWeb3Provider>{children}</ActiveWeb3Provider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </NotificationProvider>
    </WagmiProvider>
  );
}
