// // hooks/useThirdweb.js
// import { useState, useEffect } from "react";
// import { createThirdwebClient, getContract } from "thirdweb";
// import { useReadContract } from "thirdweb/react";
// import { ethers } from "ethers";
// import { abi } from "@/app/utils/abi/abi";
// import { sepolia } from "thirdweb/chains";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// const useThirdweb = () => {
//   const contractAddress = "0xf97A6a0BdbbBddCd9259dc5Ea4c97C82Da8d5252";
//   const client = createThirdwebClient({
//     clientId: "66a166182d07e7224cb1c8fd1abaec71",
//   });

//   const getNFTUri = async (type: number) => {
//     const contract = getContract({
//       client,
//       chain: sepolia,
//       address: contractAddress,
//     });

//     const data = await contract.call("tokenURI", type);

//     // try {
//     //   const tx = await nftContract.call("tokenURI", [type]);
//     //   await tx.wait();

//     //   setSuccess(true);
//     //   alert("Success! NFTs purchased.");
//     //   return tx;
//     // } catch (err) {
//     //   console.error(err);
//     //   setError("Transaction failed");
//     // } finally {
//     //   setLoading(false);
//     // }
//   };
//   useEffect(() => {
//     // Add any necessary setup or cleanup here if needed
//   }, []);

//   return {};
// };

// export default useThirdweb;
