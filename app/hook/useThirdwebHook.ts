import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import abi from "@/app/utils/abi/nft";
import { createWallet } from "thirdweb/wallets";

import { ethers } from "ethers/lib";

const useThirdwebHook = () => {
  const client = createThirdwebClient({
    clientId: "66a166182d07e7224cb1c8fd1abaec71",
  });
  const contractABI = abi();
  const contractAddress = "0xf97A6a0BdbbBddCd9259dc5Ea4c97C82Da8d5252";

  const provider = new ethers.providers.JsonRpcProvider(
    "https://base-sepolia.blockpi.network/v1/rpc/public"
  );
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  const metamaskWallet = createWallet("io.metamask");
  const coinbaseWallet = createWallet("com.coinbase.wallet"); // Coinbase Wallet
  const rainbowWallet = createWallet("me.rainbow"); // Rainbow Wallet

  //   const getNFTUri = async (type: number) => {
  //     contract.

  //   };

  return {
    client,
    wallet: [metamaskWallet, coinbaseWallet, rainbowWallet],
  };
};

export default useThirdwebHook;
