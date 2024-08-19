import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import { ThirdwebProvider } from "thirdweb/react";
import { WagmiProvider } from "wagmi";
import { config } from "@/app/hook/useWagmi";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "GreenTV DAO NFT WARZ",
  description:
    "Unlock exclusive VIP access to the GreenTV DAO with our limited edition GTV Logo NFTs. As one of only 420 available, this NFT is your ticket to early participation, unique content, and a stake in the future of the GreenTV DAO. Enjoy exclusive benefits, community involvement, and the potential for long-term value. Don't miss out on this rare opportunity to be part of a groundbreaking project at the intersection of environmental innovation and digital culture. Secure your GTV Logo NFT today and join us on this exciting journey!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <ThirdwebProvider>
            <WagmiProvider config={config}>
              <Header />
              {children}
            </WagmiProvider>
          </ThirdwebProvider>
        </div>
      </body>
    </html>
  );
}
