import React from "react";
import image1 from "../asset/Home/Group.svg";
import image2 from "../asset/Home/Group (1).svg";
import image3 from "../asset/Home/imageT.png";

function Machine({ yourCode }) {
  return (
    <div className=" w-full h-full fixed left-0 top-0 bg-bg-blue flex flex-col justify-center items-center">
      <div className="w-7/12 pt-10  h-full flex items-end ">
        <div className="flex-col w-5/6 h-full bg-bg-gray items-center flex justify-center rounded-t-[15px] pt-5">
          <div className="w-[95%] h-2/3 bg-white border-gray-700 border-4 rounded-[30px] overflow-hidden">
            {yourCode}
          </div>
          {/* down box */}
          <div className="w-[95%] h-1/2 bg-bg-gray  overflow-hidden pt-10">
            <div className="flex items-end gap-5 justify-center">
              <div>
                <svg
                  width="317"
                  height="102"
                  viewBox="0 0 317 102"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M308.847 0.0352783H7.52184C3.40607 0.0352783 0.0695801 3.37028 0.0695801 7.48421V94.1451C0.0695801 98.259 3.40607 101.594 7.52184 101.594H308.847C312.962 101.594 316.299 98.259 316.299 94.1451V7.48421C316.299 3.37028 312.962 0.0352783 308.847 0.0352783Z"
                    fill="#A7A9AC"
                  />
                  <path
                    d="M0.0695801 80.3048H316.299V94.1599C316.299 98.2717 312.96 101.609 308.847 101.609H7.52184C3.40819 101.609 0.0695801 98.2717 0.0695801 94.1599V80.3048Z"
                    fill="#414042"
                  />
                </svg>
                <div className="flex justify-center items-center pt-5 gap-2">
                  <img
                    className="w-5 h-5"
                    src="https://cdn.pic.in.th/file/picinth/image0f368c448694d98e.png"
                  />
                  <div className="text-center text-sm">ช่องรับสินค้า</div>
                </div>
              </div>
              <div>
                <svg
                  className="flex justify-center w-full"
                  width="118"
                  height="152"
                  viewBox="0 0 118 152"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M109.749 0.216553H8.20397C4.0882 0.216553 0.751709 3.55155 0.751709 7.66549V144.16C0.751709 148.274 4.0882 151.609 8.20397 151.609H109.749C113.864 151.609 117.201 148.274 117.201 144.16V7.66549C117.201 3.55155 113.864 0.216553 109.749 0.216553Z"
                    fill="#A7A9AC"
                  />
                  <path
                    d="M0.751709 126.878H117.201V144.16C117.201 148.272 113.862 151.609 109.749 151.609H8.20397C4.09032 151.609 0.751709 148.272 0.751709 144.16V126.878Z"
                    fill="#414042"
                  />
                </svg>
                <div className="flex justify-center items-center pt-5 gap-1">
                  <img
                    className="w-5 h-5"
                    src="https://cdn.pic.in.th/file/picinth/image-106955a203f153e32.png"
                  />
                  <div className="text-center text-sm">ช่องรับเครื่องดื่ม</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" translate-y-5">
            <svg
              width="410"
              height="45"
              viewBox="0 0 410 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M393.266 0.937134H16.5394C7.50116 0.937134 0.174255 8.26077 0.174255 17.295V27.947C0.174255 36.9812 7.50116 44.3048 16.5394 44.3048H393.266C402.304 44.3048 409.631 36.9812 409.631 27.947V17.295C409.631 8.26077 402.304 0.937134 393.266 0.937134Z"
                fill="#231F20"
              />
            </svg>
          </div>
        </div>

        <div className="flex-2 w-[10px] mx-0.5 h-full bg-bg-gray"></div>
        <div className="w-2/6  h-full bg-bg-gray rounded-t-[15px] ">
          <div className="flex-6 w-5/6 ml-5 h-full bg-bg-gray  items-center flex flex-col justify-center ">
            <svg
              className="w-1/2 h-fit"
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
                class="w-5 h-5 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-64fd38c3ec3904097.png"
                alt="image"
              />
              <p className="ml-2 text-sm ">ช่องใส่ธนบัตร</p>
            </div>
            <div className="flex mt-5 w-2/6 h-fit justify-center">
              <img class="w-10 h-10 mt-0 " src={image1} alt="image" />
              <img class="w-13 h-13 mt-0 ml-3" src={image2} alt="image" />
            </div>
            <div className="flex mt-5">
              <img
                class="w-5 h-5 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-5601f5fde7f8a8417.png"
                alt="image"
              />
              <p className="ml-2 text-sm">ช่องใส่เหรียญ</p>
            </div>
            <div className="mt-20 flex justify-center items-end">
              <img
                class="w-3/6 h-fit justify-center "
                src={image3}
                alt="image3"
              />
            </div>
            <div className="flex mt-5">
              <img
                class="w-5 h-5 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-2e8b86f7d7238d9e1.png"
                alt="image"
              />
              <p
                className="ml-2
               text-sm"
              >
                ช่องรับเงินทอน
              </p>
            </div>
            <div className="mt-10 flex justify-center items-end">
              <svg
                width="117"
                height="50"
                viewBox="0 0 117 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M109.544 0.697754H7.99987C3.8841 0.697754 0.547607 4.03276 0.547607 8.14669V42.3224C0.547607 46.4363 3.8841 49.7713 7.99987 49.7713H109.544C113.66 49.7713 116.997 46.4363 116.997 42.3224V8.14669C116.997 4.03276 113.66 0.697754 109.544 0.697754Z"
                  fill="#E6E7E8"
                />
                <path
                  d="M0.547607 41.2051H116.997V42.5012C116.997 46.613 113.658 49.9501 109.544 49.9501H7.99987C3.88622 49.9501 0.547607 46.613 0.547607 42.5012V41.2051Z"
                  fill="#414042"
                />
              </svg>
            </div>
            <div className="flex mt-5">
              <img
                class="w-5 h-5 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-43758f9f0125f0afd.png"
                alt="image"
              />
              <p className="ml-2 text-sm mb-5">ช่องรับช้อนและส้อม</p>
            </div>
            <div className="flex justify-center items-end">
              <svg
                width="117"
                height="50"
                viewBox="0 0 117 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M109.544 0.327637H7.99987C3.8841 0.327637 0.547607 3.66264 0.547607 7.77657V41.9523C0.547607 46.0662 3.8841 49.4012 7.99987 49.4012H109.544C113.66 49.4012 116.997 46.0662 116.997 41.9523V7.77657C116.997 3.66264 113.66 0.327637 109.544 0.327637Z"
                  fill="#E6E7E8"
                />
                <path
                  d="M0.547607 40.6562H116.997V41.9524C116.997 46.0642 113.658 49.4013 109.544 49.4013H7.99987C3.88622 49.4013 0.547607 46.0642 0.547607 41.9524V40.6562Z"
                  fill="#414042"
                />
              </svg>
            </div>
            <div className="flex mt-5">
              <img
                class="w-5 h-5 mt-0 "
                src="https://cdn.pic.in.th/file/picinth/image-35dfb4274bcbeeba1.png"
                alt="image"
              />
              <p className="ml-2 text-sm ">ช่องรับหลอด และ ฝา</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#231F20] w-7/12 pt-6 flex items-end mb-10"></div>
    </div>
  );
}
export default Machine;
