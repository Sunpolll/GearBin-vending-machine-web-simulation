import React, { useState } from "react";
import ModalPromptpay from "./ModalPromptpay";
import pp from "../asset/promptpay.png"

function ButtonPromptpay({ pirce }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(true);
  };
  const closeModal = () => {
    setIsClicked(false);
  };

  return (
    <div className="flex-1 ml-9 mr-9 bg-bg-brown rounded-[30px] cursor-pointer">
      <div className="w-full h-full " onClick={handleImageClick}>
        <div className="w-full flex justify-center items-start">
          <div className="w-full flex justify-center">
            <img
              className={` w-[160px] h-[130px] flex justify-center  rounded-[45px] -translate-y-7 ${
                isClicked ? "scale-110" : ""
              }`}
              src={pp}
              alt="image"
            />
          </div>
        </div>
        <p className="-translate-y-7 flex justify-center text-white text-4xl   items-start">
          จ่ายด้วย QR
        </p>
      </div>
      {isClicked ? (
        <>
          <div className="absolute w-full h-full inset-0 z-40 bg-black bg-opacity-40 flex justify-center">
            <ModalPromptpay onClose={closeModal} time={120} pirce={pirce} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ButtonPromptpay;
