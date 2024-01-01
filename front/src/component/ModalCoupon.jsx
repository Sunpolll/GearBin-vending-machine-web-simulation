import React, { useEffect, useState } from "react";
import back from "../asset/back.png";
import iconper from "../asset/Group43.png";
// import { Link } from 'react-router-dom';

export default function Modal(props) {
  // const [showModal, setShowModal] = React.useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  // const handleImageClick = () => {
  //   setIsClicked(true);
  // };
  const [number, setnumber] = useState("");
  const [time, setTime] = useState(120);
  useEffect(() => {
    let interval = null;

    if (time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      window.location.href = "/";
    }
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const handleButtonClick = (value) => {
    if (value !== "#" && number.length < 8) {
      setnumber((prevnumber) => prevnumber + value);
    }
  };

  // Function to clear the phone number
  // const handleSkipButton = () => {
  //   props.changeState(2);
  //   setnumber('');
  // };

  const handleSubmitButton = () => {
    if (number.length < 8) {
      // Apply a class with a red border
      if (props.isClicked) {
        document
          .querySelector(".phone-number-display")
          .classList.add("border-red-500", "text-red-500");
      }
      // Reset the border color after a few seconds (e.g., 3 seconds)
      setTimeout(() => {
        if (props.isClicked) {
          try {
            document
              .querySelector(".phone-number-display")
              .classList.remove("border-red-500", "text-red-500");
          } catch (error) {}
        }
      }, 1000); // 3000 milliseconds (3 seconds)
    } else {
      props.disableClick();
      // props.changeState(1);
      setnumber("");
    }
  };

  const handleDelete = () => {
    setnumber((prevnumber) => prevnumber.slice(0, prevnumber.length - 1));
  };

  const formatDisplayednumber = (number) => {
    if (number.length >= 4) {
      return `${number.slice(0, 4)}-${number.slice(4)}`;
    } else {
      return number;
    }
  };

  return (
    <div className="justify-center relative items-center flex w-1/2 ">
      <div className=" rounded-lg  relative flex-col w-full bg-type-card outline-none focus:outline-none ">
        <div className=" absolute text-3xl flex text-gray-text right-0 m-3">
          {time} วินาที
        </div>
        <div className="text-[24px] justify-center font-[10] mt-10 mb-10 flex">
          <p className=" text-bg-brown">กรุณาใส่</p>
          <p className=" text-gray-text">โค้ต 8 หลัก</p>
          <p className=" text-bg-brown">เพื่อใช้คูปอง</p>
        </div>
        <div className="h-[100px] text-center text-5xl font-bold border-2 border-bg-brown rounded-xl p-5 mx-10 mb-10 phone-number-display flex ">
          <img src={iconper} alt="" />
          <div className="w-full flex justify-center -translate-x-7 text-gray-text">
            {number == "" ? (
              <div className="text-gray-text">XXXX-XXXX</div>
            ) : (
              formatDisplayednumber(number)
            )}
          </div>
        </div>
        <div className="w-full flex">
          <div className="mx-auto mb-14 grid grid-cols-3 gap-2 justify-center justify-items-center w-fit">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "#", 0].map((number) => (
              <button
                key={number}
                className={`${
                  number === "#"
                    ? "bg-[#685D5D] text-white rounded-full p-4 text-4xl font-black"
                    : "bg-[#685D5D] text-white rounded-full p-4 text-4xl font-black hover:bg-[#594e4e]"
                }`}
                style={{ width: "100px", height: "100px" }}
                onClick={() => handleButtonClick(number)}
              >
                {number}
              </button>
            ))}
            <button
              key="deletedigit"
              className="bg-[#9B8A8A] text-white rounded-full p-4 text-3xl font-black hover:bg-[#524848] w-16 h-16"
              style={{ width: "100px", height: "100px" }}
              onClick={handleDelete}
            >
              <img src={back} alt="back" className="w-2/3 mx-auto" />
            </button>
          </div>
          <div className="grid grid-cols-1 h-full mb-14 -translate-x-4">
            <button
              className="bg-[#FDA54A] text-white rounded-full text-4xl font-white hover:bg-[#ea580c] -translate-x-14 mb-2 font-bold"
              style={{ width: "100px", height: "100px" }}
              onClick={() => handleButtonClick("B", number)}
            >
              B
            </button>
            <button
              className="bg-[#FDA54A] text-white rounded-full text-4xl font-white hover:bg-[#ea580c]  -translate-x-14 font-bold  "
              style={{ width: "100px", height: "100px" }}
              onClick={() => handleButtonClick("G", number)}
            >
              G
            </button>
          </div>
        </div>
        <div className="h-[8%] w-full mb-6 flex justify-center">
          <button
            className="bg-[#F7F2EC] text-4xl py-1 font-normal w-1/3  rounded-full text-gray-text hover:bg-bg-brown hover:text-white focus:bg-bg-brown focus:text-white border-2 border-bg-brown text-center "
            type="button"
            onClick={props.onClose}
          >
            <p className="m-1">ยกเลิก </p>
          </button>
          <div className="w-[6%]"></div>
          <button
            className="w-1/3 bg-[#9BB878] text-white rounded-full p-2 px-4 text-3xl hover:bg-lime-600"
            onClick={handleSubmitButton}
          >
            ตกลง
          </button>
        </div>
      </div>
    </div>
  );
}
