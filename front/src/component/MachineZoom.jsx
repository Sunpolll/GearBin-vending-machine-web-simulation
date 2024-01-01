import React, { useState } from "react";
import image1 from "../asset/Home/Group.svg";
import image2 from "../asset/Home/Group (1).svg";
import image3 from "../asset/Home/imageT.png";

function MachineZoom({ yourCode }) {
  return (
    <div className="w-full h-full fixed left-0 top-0 bg-bg-blue flex flex-col justify-center items-center">
      <div className="w-11/12 h-full flex items-end mt-10">
        <div className="flex-6 w-5/6 ml-5 h-full bg-bg-gray items-center flex justify-center rounded-t-[15px]">
          <div className="w-[95%] h-[95%] bg-white border border-gray-700 rounded-lg border-4 rounded-[30px] ">
            {yourCode}
          </div>
        </div>
        <div className="flex-2 w-[10px] mx-1 h-full bg-bg-gray"></div>
        <div className="w-2/6 h-full bg-bg-gray rounded-t-[15px]">
          <div className="flex-6 w-5/6 ml-5 h-full bg-bg-gray mt-5 items-center flex flex-col justify-center">
            <svg
              width="166"
              height="156"
              viewBox="0 0 166 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9455 0.222656H149.906C158.616 0.222656 165.675 7.27795 165.675 15.9845V140.038C165.675 148.744 158.616 155.799 149.906 155.799H15.9455C7.23508 155.799 0.176636 148.744 0.176636 140.038V15.9845C0.176636 7.27795 7.23508 0.222656 15.9455 0.222656Z"
                fill="url(#paint0_linear_649_24690)"
              />
              <path
                d="M25.9732 71.8994H140.05C147.469 71.8994 153.476 77.905 153.476 85.322V135.859C153.476 143.276 147.469 149.282 140.05 149.282H25.9732C18.5543 149.282 12.547 143.276 12.547 135.859V85.352C12.547 77.9351 18.5543 71.9294 25.9732 71.9294V71.8994Z"
                fill="url(#paint1_linear_649_24690)"
              />
              <path
                d="M142.092 119.074H23.9006V129.584H142.092V119.074Z"
                fill="#010101"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_649_24690"
                  x1="82.9257"
                  y1="0.222656"
                  x2="82.9257"
                  y2="155.799"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#010101" />
                  <stop offset="0.8" stop-color="#2E2C2E" />
                  <stop offset="0.87" stop-color="#333133" />
                  <stop offset="0.95" stop-color="#423F43" />
                  <stop offset="1" stop-color="#4E4B4F" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_649_24690"
                  x1="83.0113"
                  y1="149.252"
                  x2="83.0113"
                  y2="71.8994"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#010101" />
                  <stop offset="0.03" stop-color="#080808" />
                  <stop offset="0.13" stop-color="#191819" />
                  <stop offset="0.25" stop-color="#252325" />
                  <stop offset="0.41" stop-color="#2C2A2C" />
                  <stop offset="0.87" stop-color="#2E2C2E" />
                  <stop offset="0.94" stop-color="#424043" />
                  <stop offset="1" stop-color="#4E4B4F" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex mt-5">
              <img
                class="w-8 h-8 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-64fd38c3ec3904097.png"
                alt="image"
              />
              <p className="ml-5 ">ช่องใส่ธนบัตร</p>
            </div>
            <div className="flex mt-5">
              <img class="w-10 h-10 mt-0 " src={image1} alt="image" />
              <img class="w-13 h-13 mt-0 ml-3" src={image2} alt="image" />
            </div>
            <div className="flex mt-5">
              <img
                class="w-8 h-8 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-5601f5fde7f8a8417.png"
                alt="image"
              />
              <p className="ml-5">ช่องใส่เหรียญ</p>
            </div>
            <div className="mt-20 flex justify-center items-end">
              <img class="w-[140px] h-[211px] " src={image3} alt="image3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineZoom;
