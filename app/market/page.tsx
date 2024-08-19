"use client";
import { useContext, useEffect, useState } from "react";
import NFTItem from "@/components/NFTItem";
// import { items } from "./items";
import { NFT } from "@/app/utils/types";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
// import Modal from "@/components/modal";
import { useReadContract, ConnectButton } from "thirdweb/react";
import useWeb3 from "../hook/web3/useWeb3";
import Loading from "@/components/Loading";
import { Web3Context } from "../contexts/Web3Context";
import { toast } from "react-toastify";

const Market: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleBuyClick = (itemIndex: number) => {
    // setbuymodal((prev) => !prev);
    // console.log("itemIndex", itemIndex);
    router.push(`/details/${itemIndex}`);
  };

  const { buyNFT, getNFTUri, loading, setLoading, getBalance } = useWeb3();

  const [nfts, setNfts] = useState<NFT[]>([]);
  // const { contract } = useContract();
  const tokenIds = [0, 1, 2]; // Replace with your actual token IDs

  const account = useContext(Web3Context);

  // console.log("account==>", account);
  const getBal = async (tokenId: number) => {
    const count = await getBalance(tokenId);
    console.log("count", parseInt(count));
    return parseInt(count);
  };
  useEffect(() => {
    if (account?.isConnected) {
      const fetchNFTs = async () => {
        try {
          const fetchedNFTs: NFT[] = await Promise.all(
            tokenIds.map(async (tokenId) => {
              const uri: any = await getNFTUri(tokenId);
              const tokenURL = uri.replace("ipfs://", "https://ipfs.io/ipfs/");
              const _count = await getBal(tokenId);
              return { tokenId, image: tokenURL, count: _count }; // Store token ID and image URL
            })
          );
          setNfts(fetchedNFTs);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching NFTs:", error);
          setError("Failed to fetch NFTs. Please try again later.");
        }
      };
      fetchNFTs();
    } else {
      toast.warning("Connect the wallet!!");
      router.replace("/");
    }
  }, []);

  return (
    <>
      <div className="w-full min-h-[90vh] flex flex-1 justify-center items-center">
        <Toaster position="top-right" reverseOrder={false} />
        {loading ? (
          <Loading message={"    Loading..."} />
        ) : (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mt-12 sm:mt-8 md:mt-4">
              <div className="flex flex-1">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {nfts.map((item, index) => (
                    <NFTItem
                      NFTImage={item.image}
                      NFTName={"Image " + item.tokenId}
                      key={index}
                      itemIndex={item.tokenId}
                      NFTPrice={2000}
                      count={item.count}
                      buyClick={handleBuyClick}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* {buymodal && (
          <Modal
            NFTImage={buyItem.image}
            NFTName={buyItem.name}
            NFTPrice={buyItem.price}
            handleConfirm={handleConfirm}
          />
        )} */}
      </div>
    </>
  );
};

export default Market;
