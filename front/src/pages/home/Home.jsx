import React, { useState } from "react";
import Machine from "../../component/Machine";
import { Link } from "react-router-dom";
import startHome from "../../asset/start_1.gif";

const Home = () => {
  return (
    <Machine
      yourCode={
        <div className="relative h-full">
          <img src={startHome} alt="" className="w-full scale-105 absolute" />
          <div className=" flex justify-center items-end h-full pb-3">
            <Link
              to="/zoom"
              className="absolute w-[45%] h-fit py-1 bg-start-btn rounded-3xl text-white flex flex-col justify-around items-center hover:bg-start-hover"
            >
              <p className="font-bold text-2xl">Touch to start</p>
              <p className="font-semibold text-xs">
                กดที่หน้าจอเพื่อเริ่มรายการ
              </p>
            </Link>
          </div>
        </div>
      }
    />
  );
};

export default Home;
