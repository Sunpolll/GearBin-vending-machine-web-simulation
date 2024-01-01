import React, { useState } from "react";
import ModalCoupon from "./ModalCoupon";
import cp from "../asset/coupon.png";

function ButtonCoupon({ setDiscount }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isNot, setIsNotClicked] = useState(false);
  // const [isClickModal, setIsClickModal] = useState(false);
  const handleImageClick = () => {
    setIsClicked(true);
  };
  const closeModal = () => {
    setIsClicked(false);
  };
  const close = () => {
    setIsNotClicked(true);
    setIsClicked(false);
    setDiscount(true);
  };

  return (
    <div className="flex-1 ml-9 mr-9 bg-bg-brown rounded-[30px] cursor-pointer">
      {isClicked ? (
        <>
          <div className="absolute w-full h-full inset-0 z-40 bg-black bg-opacity-40 flex justify-center">
            <ModalCoupon
              onClose={closeModal}
              disableClick={close}
              isClicked={isClicked}
            />
          </div>
        </>
      ) : null}

      {isNot ? (
        <>
          <div className="h-full  bg-bg-brown  ml-9 mr-9  rounded-[30px] cursor-pointer grayscale">
            <div className="w-full flex justify-center items-end">
              <img
                className={`w-2/3 h-[150px] items-end -translate-y-12 ${
                  isClicked ? "scale-110" : ""
                }`}
                src={cp}
                alt="image"
              />
            </div>
            <p className="-translate-y-12  flex justify-center text-white text-4xl  ">
              ใช้คูปอง
            </p>
          </div>
        </>
      ) : (
        <>
          <div
            className="h-full bg-bg-brown  ml-9 mr-9  rounded-[30px] cursor-pointer"
            onClick={handleImageClick}
          >
            <div className="w-full flex justify-center items-end">
              <img
                className={`w-2/3 h-[150px] items-end -translate-y-12  ${
                  isClicked ? "scale-110" : ""
                }`}
                src={cp}
                alt="image"
              />
            </div>
            <p className="-translate-y-12  flex justify-center text-white text-4xl  ">
              ใช้คูปอง
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ButtonCoupon;
