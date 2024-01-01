import React, { useEffect, useState } from "react";
import QR from "../asset/imageQR.png";
import { Link } from "react-router-dom";

export default function ModalPromptpay(props) {
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

  return (
    <div className="justify-center items-center flex w-1/2 ">
      <div className=" rounded-[25px]  relative flex-col w-full bg-type-card outline-none focus:outline-none ">
        <div className=" w-full  p-5  border-blueGray-200 rounded-t">
          <p className="text-3xl flex text-gray-text justify-end">
            {time} วินาที
          </p>
          <h3 className="text-5xl text-gray-text flex justify-center mt-3">
            สแกนเพื่อจ่ายเงิน
          </h3>
        </div>
        <Link to={`/complete/${props.price}`}>
          <div className=" w-full  mt-5 flex justify-center items-center">
            <img src={QR} alt="" />
          </div>
        </Link>
        <p className="m-5 text-3xl flex text-gray-text justify-center">
          {" "}
          สแกนได้ด้วยแอปของทุกธนาคาร
        </p>
        <div className="flex justify-center mt-8 mb-9">
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
