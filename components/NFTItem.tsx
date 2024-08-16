const NFTItem = ({
  NFTImage,
  NFTName,
  NFTPrice,
  buyClick,
}: {
  NFTImage: any;
  NFTName: string;
  NFTPrice: number;
  buyClick: Function;
}) => {
  return (
    // <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
    //   <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
    //     <img src={NFTImage} alt="" className="object-fill" />
    //     <div className="px-8 mt-4 flex flex-row justify-between">
    //       <h2 className="text-slate-700 text-lg text-left">{NFTName}</h2>
    //       <h2 className="text-red-500 text-base text-left">$ {NFTPrice}</h2>
    //     </div>
    //   </div>
    //   <div className="p-6 border-t border-blue-gray-50">
    //     <button
    //       className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
    //       onClick={() => buyClick(NFTImage, NFTName, NFTPrice)}
    //     >
    //       buy now
    //     </button>
    //   </div>
    // </div>
    <>
      <div className="group relative block overflow-hidden bg-[#134B70] rounded-2xl ">
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={NFTImage}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 p-6 rounded-xl"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-[#134B70] px-3 py-1.5 text-md font-medium text-white">
            {" "}
            New{" "}
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">{NFTName}</h3>

          <p className="mt-1.5 text-lg text-red-700">${NFTPrice}</p>

          <div className="mt-4">
            <button
              className="block w-full rounded bg-[#134B70] p-4 text-lg font-medium transition hover:scale-105 hover:bg-[#2f6992] text-white"
              onClick={() => buyClick(NFTImage, NFTName, NFTPrice)}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTItem;
