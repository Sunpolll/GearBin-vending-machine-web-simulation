import { useState } from "react";
import { Link } from "react-router-dom";

function RTDDetailComponent({ keynum,pic, menu, price, detail, brand }) {
  const [checkBox, setCheckbox] = useState(false);

  return (
    <div className="flex h-5/6 px-11 gap-x-11">
      <div className="basis-2/5 flex flex-col justify-center gap-y-20">
        <div className="overflow-hidden">
          <img src={pic} alt="" className="rounded-3xl" />
        </div>
        <Link
          to={`/payment/${keynum}`}
          className="bg-bg-green text-4xl text-white py-3 rounded-full text-center font-medium border-2 border-bg-green hover:bg-[#F7F2EC] hover:text-bg-green hover:border-2 hover:border-bg-green"
        >
          ยืนยัน
        </Link>
      </div>
      <div className="basis-3/5 flex flex-col gap-y-5 justify-center">
        <h1 className="text-4xl font-medium text-[#080607]">{menu}</h1>
        <p>
          <span className="font-medium text-6xl text-[#6A9B53]">{price}</span>
          <span className="text-4xl font-medium"> บาท</span>
        </p>
        <div className="border-y-2 border-[#685D5D33] text-xl text-gray-text flex flex-col gap-y-5 py-5 h-80 overflow-y-scroll no-scrollbar justify-between">
          <p className="flex flex-col gap-y-5">
            <span className="font-semibold">รายละเอียดสินค้า</span>
            <span className="text-justify whitespace-pre-line font-medium">
              {detail}
            </span>
          </p>
          <p className="font-medium">แบรนด์ : {brand}</p>
        </div>
        <p className="font-medium text-xl text-gray-text">เลือก</p>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-6 items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/00e7/f7e3/966051be2777659b973f0290f4614fba?Expires=1697414400&Signature=Ujf-0b8Ge6fiighUiqFwJi0iqsmFoZT-v6tKhTalM9gN2df-OFn20rRGz2nxpENcNfM7rUZlzHMFw6Tc0wMPO0vRk4DSdyoQqlzeaBUO53M0I6uYBZy-q4o5YQ-pkREEiN8tA7b-MA9jGzTrkWBVmPdCiBA4jNJBplal2ZUxbfb5qZWrJYFrN2f2vUhY6NlP0X~lfSAXIS5Z3f-0YQRrKbPnEoDgiOMa0OP8k46DntASabV0t09hbaTMx8462wm3J7qrGIjtIP4yoqZP9k3qws-8EcnNGravNuf3cPDSowjVuvTLHQGQnSsXbrcrmLispS324JSib6Xr35ERczeWmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="w-10"
            />
            <p className="text-gray-text text-3xl font-medium">รับหลอด</p>
            <div className="w-10 h-10">
              {checkBox ? (
                <>
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setCheckbox(!checkBox)}
                  >
                    <g clip-path="url(#clip0_727_24647)">
                      <rect
                        x="4.08325"
                        y="4.08398"
                        width="40.8333"
                        height="40.8333"
                        rx="6.125"
                        fill="#685D5D"
                      />
                      <path
                        d="M21.4376 29.358L35.5129 15.2812L37.6796 17.4464L21.4376 33.6884L11.6927 23.9435L13.8579 21.7783L21.4376 29.358Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_727_24647">
                        <rect
                          x="4.08325"
                          y="4.08398"
                          width="40.8333"
                          height="40.8333"
                          rx="6.125"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setCheckbox(!checkBox)}
                  >
                    <rect
                      x="6.12492"
                      y="6.12565"
                      width="36.75"
                      height="36.75"
                      rx="4.08333"
                      fill="white"
                    />
                    <rect
                      x="6.12492"
                      y="6.12565"
                      width="36.75"
                      height="36.75"
                      rx="4.08333"
                      stroke="#685D5D"
                      stroke-width="4.08333"
                    />
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RTDDetailComponent;
