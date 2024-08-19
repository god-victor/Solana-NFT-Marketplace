"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
// import { items } from "../../market/items";
// import { INFT } from "@/app/utils/types";
import Image from "next/image";
import ConfirmModal from "@/components/ConfirmModal";
import useWeb3 from "@/app/hook/web3/useWeb3";
import { Web3Context } from "@/app/contexts/Web3Context";
import Loading from "@/components/Loading";
import { log } from "console";
import { id } from "ethers/lib/utils";
import { toast } from "react-toastify";
// import useContract from "@/app/hook/useContract";
// import useThirdweb from "@/app/hook/useThirdweb";

interface DetailViewProps {
  params: {
    id: string;
  };
}

const DetailView: React.FC<DetailViewProps> = ({ params }) => {
  const router = useRouter();

  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  // const { connectWallet, disconnectWallet, walletAddress } = useWallet();

  const account = useContext(Web3Context);

  const [tokenId, setTokenId] = useState<number>(0);
  const [countZeroError, setCountZeroError] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [tokenCount, setTokenCount] = useState<number>(0);
  const [NFTItem, setNFTItem] = useState<{
    tokenId: number;
    image: string;
  }>({
    tokenId: 0,
    image: "",
  });
  const [load, setLoad] = useState<boolean>(false);

  console.log("load", load);
  const { buyNFT, getNFTUri, loading, setLoading, getBalance, message } =
    useWeb3();

  const getBal = async () => {
    const count = await getBalance(tokenId);
    console.log("count", parseInt(count));

    setTokenCount(parseInt(count));
  };
  useEffect(() => {
    getBal();
  }, []);

  useEffect(() => {
    const { id } = params;
    setTokenId(() => parseInt(id));
    const tokenId = parseInt(id);

    const getNFTUrl = async () => {
      setLoading(true);
      setLoad(true);
      const uri: any = await getNFTUri(tokenId);
      const tokenURL = uri
        .replace("ipfs://", "https://ipfs.io/ipfs/")
        .toString();
      setNFTItem((prev) => ({ ...prev, image: tokenURL, tokenId: tokenId }));
      setLoad(false);
    };

    getNFTUrl();
    setLoading(false);
  }, []);

  const handleCountErrorModal = () => {
    setCountZeroError(false);
  };

  const handleConfirm = (confirm: boolean) => {
    setIsConfirm(false);
    if (confirm) {
      if (count !== 0) {
        const buy = async () => {
          try {
            setLoad(true);
            await buyNFT(account, tokenId, count);
            await getBal();
            setLoad(false);
            toast.success("Success!!");
          } catch (error) {
            setLoad(false);
            setErrorMsg(error + "");
          }
        };
        buy();
      } else {
        setCountZeroError(true);
        setErrorMsg("Count is Required!!");
      }
    }
    setLoading(false);
  };

  const handleClick = () => {
    setIsConfirm((prev) => !prev);
    console.log("isConfirm", isConfirm);
  };
  // console.log("url", url);
  return (
    <section className="overflow-y-hidden">
      {load ? (
        <Loading message={message} />
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-4 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <div className="grid gap-20">
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up"
                  >
                    <Image
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={NFTItem.image}
                      width={350}
                      height={350}
                      alt="Features 01"
                    />
                  </div>
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="px-8 md:px-4 lg:px-12 xl:px-16 w-full">
                      <h3 className="h3 mb-3">{"Item " + tokenId}</h3>
                      <p className="text-xl text-gray-400 mb-4 text-left">
                        This is a NFT-Token.
                        <br /> Token price is $1000.
                      </p>
                      <div className="w-full mb-5 flex flex-row gap-4 sm:gap-4 items-center">
                        <label
                          htmlFor="money"
                          className="items-center duration-300 text-lg sm:text-2xl origin-0 text-white block"
                        >
                          Amount
                        </label>
                        <div></div>
                        <input
                          min={0}
                          type="number"
                          value={count}
                          name="count"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setCount(e.target.valueAsNumber)
                          }
                          placeholder="Count"
                          className="pt-3 pb-2 px-5 block w-full mt-0 bg-transparent border-2 appearance-none focus:outline-none 
                           rounded-xl active:border-gray-200 focus:ring-0 focus:border-white border-gray-200 text-xl sm:text-2xl"
                        />
                        {/* <span className="text-sm text-red-600" id="error">
                        Amount is required
                      </span> */}
                      </div>
                      <div className="px-2 mt-4 w-full gap-4 flex justify-between items-center">
                        <div className="col-span-1">
                          <h2 className="text-green-300 text-2xl items-center text-left font-bold ">
                            {"Remain " + tokenCount}
                          </h2>
                        </div>
                        <div className="col-span-1">
                          <h2 className="text-red-500 text-2xl items-center text-left font-bold ">
                            {"$ " + 1000 * count}
                          </h2>
                        </div>
                      </div>
                      <div className="mt-8">
                        <button
                          data-modal-target="popup-modal"
                          data-modal-toggle="popup-modal"
                          className="block  w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                          onClick={handleClick}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isConfirm && (
        <ConfirmModal
          confirmFunction={handleConfirm}
          closeCaption="Close"
          confirmCaption="Buy Now"
          confirmQuestion="Do you buy this NFT Token just now?"
        />
      )}
      {countZeroError && (
        <ConfirmModal
          confirmFunction={handleCountErrorModal}
          closeCaption="Close"
          confirmCaption="OK"
          confirmQuestion={errorMsg}
        />
      )}
    </section>
  );
};

export default DetailView;
