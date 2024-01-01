import React from "react";
import { Link } from "react-router-dom";

function Menudrink({ keynum,pic, name, hot, cold, mix }) {
  return (
    <Link to={`../drinkdetail/${keynum}`}>
      <div className="mb-4 hover:shadow-xl h-full flex flex-col max-w-sm bg-[#F7F2EC] border  shadow-lg border-gray-200 rounded-lg ">
        <div className="flex-1">
          <img
            className="rounded-t-lg object-cover w-full h-72"
            src={pic}
            alt={name}
          />

          <h2 className="p-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h2>
        </div>
        <div className="">
          <div className="flex gap-2 px-5 pb-5">
            {hot == undefined ? null : (
              <div class="inline-flex items-center px-1 py-2 text-sm font-medium border border-[#6A9B53] text-[#6A9B53] bg-[#F7F2EC] rounded-lg  ">
                <div className="flex w-full gap-1">
                  <p>ร้อน</p>
                  <p>{hot}</p>
                  <p>บ</p>
                </div>
              </div>
            )}

            {cold == undefined ? null : (
              <div class="inline-flex items-center px-1 py-2 text-sm font-medium border border-[#6A9B53] text-[#6A9B53] bg-[#F7F2EC] rounded-lg ">
                <div className="flex w-full gap-1">
                  <p>เย็น</p>
                  <p>{cold}</p>
                  <p>บ</p>
                </div>
              </div>
            )}

            {mix == undefined ? null : (
              <div class="inline-flex items-center px-1 py-2 text-sm font-medium border border-[#6A9B53] text-[#6A9B53] bg-[#F7F2EC] rounded-lg ">
                <div className="flex w-full gap-1">
                  <p>ปั่น</p>
                  <p>{mix}</p>
                  <p>บ</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Menudrink;
