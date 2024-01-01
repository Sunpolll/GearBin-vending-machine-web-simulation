import { useState } from "react";
import { Link } from "react-router-dom";

function FoodDetailComponent({ keynum, pic, menu, price, detail, brand }) {
  const [checkBox, setCheckbox] = useState(false);
  const [wave, setWave] = useState(0);
  const [clicked, setClicked] = useState(false);

  console.log(keynum);

  return (
    <div className="flex h-5/6 px-11 gap-x-11">
      <div className="basis-2/5 flex flex-col justify-center gap-y-20">
        <div className="overflow-hidden">
          <img src={pic} alt="" className="rounded-3xl" />
        </div>
        <Link
          to={wave === 0 ? null : `/payment/${keynum}`}
          className="bg-bg-green text-4xl text-white py-3 rounded-full text-center font-medium border-2 border-bg-green hover:bg-[#F7F2EC] hover:text-bg-green hover:border-2 hover:border-bg-green"
          onClick={() => setClicked(true)}
        >
          ยืนยัน
        </Link>
        <p className="text-center text-red-500  -translate-y-14">
          {clicked && wave === 0 ? "กรุณาเลือกว่าต้องการอุ่นหรือไม่" : "\u00A0"}
        </p>
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
        <div className="flex flex-col gap-y-5">
          <div className="font-medium text-xl text-gray-text flex">
            <p>เลือก</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/0c0b/310f/da51e0bb5a06ad0ee8fced618fc627d0?Expires=1697414400&Signature=bPsacpF64eGKx7gZWAzYtaQQ5n~pPorkZCy72mdjDXH5WfxcVYV6pip6VVBhqOxyOoltxEdPwwgb81MuXMRbe~pLNiLFszODoQCb65Uko6bpb1vq-kQJsGTDFKeyTrecQU4PnVSfCklYGQH2Nr5hjQn3X8ZJSYryRSwECKoYSy9lzpt-NE26FeS02Jn2enOfE5Ypv~3QYNwf00SJTwwQbm61KLOXcK2wBlP6GRc0R~xqp0pcNsIexLyJboAsbF6dP8DLc6e-XgACMkJk6SzT3J~aZFu2~~Mbw3PioWRT1NhZWsWT0XUii0gq~2q8vJA060K4Scfn-KbNRloNp5U6fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="w-10 ml-3.5"
            />
          </div>
          <div className="flex justify-center gap-x-10">
            <button
              className={`bg-[#F7F2EC] text-3xl py-2 font-normal w-36 rounded-full text-gray-text hover:bg-wave-btn hover:text-white ${
                wave === 1 ? "bg-wave-btn text-white" : ""
              } `}
              onClick={() => setWave(1)}
            >
              อุ่น
            </button>
            <button
              className={`bg-[#F7F2EC] text-3xl py-2 font-normal w-36 rounded-full text-gray-text hover:bg-notWave-btn hover:text-white ${
                wave === 2 ? "bg-notWave-btn text-white" : ""
              } `}
              onClick={() => setWave(2)}
            >
              ไม่อุ่น
            </button>
          </div>
          <div className="flex gap-x-6 items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/495e/f0f9/4329193f10e5fd36aa07c998aa48e384?Expires=1697414400&Signature=jz0QsPG2oiIOETcfcGreQto-GO3FNcSk3w~OQNENMpblySbRPAiPi7iSfcMjfw-lhcqQ2piFITbDKVtE8oEyLmD1JQlaB93fCpaqk~yPjHB8AInHdoYRa0YoqEDx8qYJB~BNflCsqkn9K9WdyCr7IaGjZQ70RsRIs-T2W6EFJnkKxSEkIHN5uVYkJNAlXXCU6jv6ZKPKlPu-US8ebH8HQ4gAntZQh9Co~bRMKZ81FJ~n9EFhVJ-yLu1QaZcYB2q3nNU3utwGqHlLu1pl~fTSvcT7uCHICgaJ2MB1aS99GadYR7jpmWqfdc5gShoXslQNaM8VUnAP3PNzRTWcwwTxzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="w-10"
            />
            <p className="text-gray-text text-3xl font-medium">รับช้อนส้อม</p>
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

export default FoodDetailComponent;
