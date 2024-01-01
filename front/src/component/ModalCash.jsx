import React, { useEffect, useState } from "react";
import iconn from "../asset/Group48.svg";
import { Link } from "react-router-dom";

export default function Modal(props) {
  // const [showModal, setShowModal] = React.useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  const [time, setTime] = useState(props.time);

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

  // const handleImageClick = () => {
  //   setIsClicked(true);
  // };

  return (
    <div className="justify-center items-center flex w-2/4 ">
      <div className=" rounded-lg  relative flex-col w-full bg-type-card outline-none focus:outline-none ">
        <div className=" w-full  p-5  border-blueGray-200 rounded-t">
          <p className="text-3xl flex text-gray-text justify-end">
            {time} วินาที
          </p>
          <h3 className="text-5xl text-gray-text flex justify-center mt-3">
            กรุณาใส่ธนบัตร
          </h3>
          <h3 className="text-5xl text-gray-text flex justify-center mt-2">
            หรือหยอดเหรียญ
          </h3>
        </div>

        <Link to={`/complete/${props.price}`}>
          <div className=" mt-5 flex justify-center">
            <div className="w-2/3  border-2 border-bg-brown rounded-lg ">
              <p className="ml-5 text-gray-text ">จำนวนเงิน</p>
              <p className="text-9xl text-bg-green text-center ">
                {props.price}
              </p>
              <div className="flex  justify-end mr-14">
                <p className=" text-gray-text  -translate-y-7">บาท</p>
              </div>
            </div>
          </div>
        </Link>
        <div className=" w-5/6 ml-12 mt-5 flex justify-center items-center">
          <img src={iconn} alt="" />
        </div>

        <div className="flex justify-center mt-4 mb-9">
          <button
            className="bg-[#F7F2EC] text-4xl py-1 font-normal w-1/3  rounded-full text-gray-text hover:bg-bg-brown hover:text-white focus:bg-bg-brown focus:text-white border-2 border-bg-brown text-center "
            type="button"
            onClick={props.onClose}
          >
            <p className="m-1">ยกเลิก </p>
          </button>
        </div>
      </div>
    </div>
  );
}
