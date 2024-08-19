"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { createThirdwebClient } from "thirdweb";
// import { ConnectButton } from "thirdweb/react";
// import useThirdwebHook from "@/app/hook/useThirdwebHook";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Header() {
  const client = createThirdwebClient({
    clientId: "66a166182d07e7224cb1c8fd1abaec71",
  });
  // const { client, wallet } = useThirdwebHook();
  // const wallets = [
  //   createWallet("io.metamask"), // MetaMask
  //   createWallet("com.coinbase.wallet"), // Coinbase Wallet
  //   createWallet("me.rainbow"), // Rainbow Wallet
  // ];
  return (
    <header className=" w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                src="/images/gtv.png"
                width={52}
                height={52}
                alt={""}
              ></Image>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                {/* <ConnectButton client={client} wallets={wallet} /> */}
                <ConnectButton accountStatus={"address"} chainStatus={"full"} />
                {/* <button>connect</button> */}
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
