import { Oval } from "react-loader-spinner";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Loading = ({ message }: { message: string }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="flex left-0 top-0 w-full h-full bg-[#242424] opacity-95 justify-center items-center fixed"
      style={{ zIndex: 999 }}
    >
      <div className="flex flex-col sm:flex-row items-center ">
        <Oval
          height={40}
          width={40}
          color="white"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="white"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />

        <h1 className="text-lg sm:text-xl text-white block ml-4">{message}</h1>
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
