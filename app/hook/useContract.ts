// hooks/useThirdweb.js
import Web3 from "web3";
import { abi } from "@/app/utils/abi/nft";
const useContract = () => {
  const contractAddress = "0xf97A6a0BdbbBddCd9259dc5Ea4c97C82Da8d5252";
  const contract = new web3.eth.Contract(contractABI, contractAddress);
};
export default useContract;
