const Modal = ({
  NFTImage,
  NFTName,
  NFTPrice,
  handleConfirm,
}: {
  NFTImage: string;
  NFTName: string;
  NFTPrice: number;
  handleConfirm: Function;
}) => {
  return (
    <>
      {/* <div className="opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 inset-y-0 bottom-0 z-50 mb-4 mx-4 shadow-lg w-[40rem]">
        <div className="flex flex-row">
          <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
            <img src={NFTImage} alt="" className="object-fill" />
          </div>
          <div className="px-8 mt-8">
            <h2 className="text-slate-700 text-lg text-left">{NFTName}</h2>
            <h2 className="text-slate-500 text-base text-left">$ {NFTPrice}</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4 justify-between">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-green-500 border border-green-500 text-white hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
              onClick={() => handleConfirm(true)}
            >
              buy now
            </button>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
              onClick={() => handleConfirm(false)}
            >
              Cancle
            </button>
          </div>
        </div>
      </div> */}

      <div className="fixed w-full h-full top-0 left-0 inset-0 z-50 flex items-center justify-center bg-[#88888888] shadow outline-2">
        <div className="relative mx-auto max-w-sm sm:max-w-xl rounded-2xl bg-gray-100 shadow-sm flex items-center">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white p-1 text-black"
            onClick={() => handleConfirm(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="grid md:grid-cols-3 grid-cols-1 w-full">
            <div className="bg-[#134B70] col-span-1 sm:col-span-2 p-4">
              <img
                alt=""
                src={NFTImage}
                className="h-full w-full rounded-xl object-cover "
              />
            </div>
            <div className="flex flex-col sm:justify-center w-full bg-white">
              <div className="flex flex-row justify-between sm:flex-col sm:justify-center ">
                <h2 className="text-4xl sm:font-medium text-blue-700 text-left m-0">
                  {NFTName}
                </h2>
                <p className="sm:mt-4 text-3xl text-orange-700 font-semibold text-left">
                  $ {NFTPrice}
                </p>
              </div>

              <div className="sm:text-right gap-4 flex flex-col w-full">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none sm:text-xl text-xs py-2 px-4 rounded-lg bg-green-500 border border-green-500 text-white hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                  onClick={() => handleConfirm(true)}
                >
                  buy now
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none sm:text-xl text-xs py-2 px-4 rounded-lg border border-green-500 text-green-500 hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] block w-full mt-6"
                  onClick={() => handleConfirm(false)}
                >
                  Cancle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
