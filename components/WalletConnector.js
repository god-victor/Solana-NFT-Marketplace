"use clinet";
import React, { useState, useEffect } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Connection Error:", err);
      }
    } else {
      alert("Please install the Phantom Wallet extension.");
    }
  };

  const disconnectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.disconnect();
        console.log(window.solana);

        setWalletAddress(null);
      } catch (err) {
        console.error("Connection Error:", err);
      }
    } else {
      alert("Please install the Phantom Wallet extension.");
    }
  };

  useEffect(() => {
    // Check if the wallet is already connected when the component mounts
    const checkIfWalletIsConnected = async () => {
      if (window.solana) {
        const response = await window.solana.connect({ onlyIfTrusted: true });
        if (response) {
          setWalletAddress(response.publicKey.toString());
        }
      }
    };
    checkIfWalletIsConnected();
  }, []);

  return {
    walletAddress,
    connectWallet,
    disconnectWallet,
  };
};

export default useWallet;
