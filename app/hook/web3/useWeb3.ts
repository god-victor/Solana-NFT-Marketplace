"use client";
import Web3 from "web3";
import abi from "@/app/utils/abi/nft";
import { usdc } from "@/app/utils/abi/usdc";
import { Contract, ethers } from "ethers";
import { useState } from "react";
import { setLazyProp } from "next/dist/server/api-utils";
const web3 = new Web3("https://base-sepolia.blockpi.network/v1/rpc/public");
const contractAddress = "0xf97A6a0BdbbBddCd9259dc5Ea4c97C82Da8d5252";
export const Web3Provider = web3.currentProvider;
const useWeb3 = () => {
  const contract = new web3.eth.Contract(abi(), contractAddress);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const _contract = new Contract(contractAddress, abi(), provider.getSigner());
  const usdcContractAddress = "0x1C3ebb1C5Fba593b8D84c703Cf63F470fA7a3655";

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState<string>("");
  const usdcContract = new Contract(
    usdcContractAddress,
    usdc,
    provider.getSigner()
  );

  // console.log("_contract==>", { _contract });
  // console.log("contract==>", _contract);

  const getNFTUri = async (type: number) => {
    setLoading(true);
    try {
      setMessage("Loading...");
      let uri = await contract.methods.tokenURI(type).call();
      setMessage("");
      return uri;
    } catch (err) {
      setLoading(false);
      setMessage("");
      console.error(err);
    }
  };
  const requestAccount = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error("User denied account access:", error);
      throw new Error("User denied account access");
    }
  };

  // Get the user's Ethereum accounts
  const getAccounts = async () => {
    await requestAccount();
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.error("No accounts found. Make sure your wallet is unlocked.");
      throw new Error("No accounts found");
    }
    // console.log("Available accounts:", accounts);
    return accounts;
  };

  // Get balance of tokens
  const getBalance = async (type: number) => {
    setLoading(true);
    const _type = BigInt(type);

    try {
      const getTokenBalance = async () => {
        const owner = "0xb52d613eE6D9eF3D04940544f5b6E21833682E9E";

        const tx = await _contract.balanceOf(owner, BigInt(type));

        // await tx.wait();
        return tx;
      };
      return getTokenBalance();
    } catch (err) {
      setLoading(false);
      console.error("Error purchasing NFT:", err);
      throw new Error("Failed to purchase NFT");
    }
  };

  // Buy an NFT
  const buyNFT = async (account: any, type: number, count: number) => {
    setLoading(true);
    const _type = BigInt(type);
    const _count = BigInt(count);

    try {
      // const gasPrice = await web3.eth.getGasPrice();
      // const transaction: {} = {
      //   from: account.address,
      //   gasPrice: gasPrice,
      // };
      // console.log("gasPrice", gasPrice);
      setMessage("Waiting for approve.. Please check.");
      const tx = await usdcContract.approve(
        contractAddress,
        BigInt(1000 * count * 1000000)
      );
      await tx.wait();

      setMessage("Waiting for confirm.. ");
      const receipt = await _contract.buyWithUSDC([_type], [_count]);
      await receipt.wait();
      console.log("NFT purchased successfully!", receipt);
      setMessage("");

      return receipt;
    } catch (err) {
      setMessage("");
      setLoading(false);
      console.error("Error purchasing NFT:", err);
      throw new Error("Failed to purchase NFT");
    }
  };

  return { getNFTUri, buyNFT, loading, setLoading, getBalance, message };
};

export default useWeb3;
