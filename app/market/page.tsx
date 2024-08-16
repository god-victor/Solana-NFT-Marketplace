"use client";
import { useState } from "react";
import NFTItem from "@/components/NFTItem";
import { items } from "./items";
import { Toaster } from "react-hot-toast";
import Modal from "@/components/modal";

const Market = () => {
  const [buymodal, setbuymodal] = useState<boolean>(false);

  const [buyItem, setBuyItem] = useState<{
    image: any;
    name: string;
    price: number;
  }>({ image: null, name: "", price: 0 });
  const handleBuyClick = (image: string, name: string, price: number) => {
    if (buymodal) {
      setBuyItem({
        image: "",
        name: "",
        price: 0,
      });
    } else {
      setBuyItem({
        image: image,
        name: name,
        price: price,
      });
    }
    setbuymodal((prev) => !prev);
  };

  const handleConfirm = (confirm: boolean) => {
    if (confirm) {
    }
    setbuymodal(false);
  };
  console.log("====================================");
  console.log(buyItem);
  console.log("====================================");
  return (
    <>
      <div className="w-full min-h-[90vh] flex flex-1 justify-center items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Toaster position="top-right" reverseOrder={false} />
          <div className="mt-12 sm:mt-8 md:mt-4">
            <div className="flex flex-1">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                  <NFTItem
                    NFTImage={item.url}
                    NFTName={item.name}
                    key={index}
                    NFTPrice={item.price}
                    buyClick={handleBuyClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {buymodal && (
          <Modal
            NFTImage={buyItem.image}
            NFTName={buyItem.name}
            NFTPrice={buyItem.price}
            handleConfirm={handleConfirm}
          />
        )}
      </div>
    </>
  );
};

export default Market;
