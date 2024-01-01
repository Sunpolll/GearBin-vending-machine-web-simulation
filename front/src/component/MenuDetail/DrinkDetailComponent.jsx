import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DrinkDetailComponent({
  keynum,
  pic,
  menu,
  detail,
  hot,
  cold,
  mix,
  lid,
}) {
  const [checkBox, setCheckbox] = useState(false);
  const [checkBoxStraw, setCheckboxStraw] = useState(false);
  const [checkBoxLid, setCheckboxLid] = useState(false);
  const [price, setPrice] = useState(0);
  const [chooseType, setChooseType] = useState(0);
  const [chooseSweet, setChooseSweet] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (clicked) {
      if (chooseSweet === 0 && chooseType != 0) {
        setText("กรุณาเลือกระดับความหวาน");
      } else if (chooseType === 0 && chooseSweet != 0) {
        setText("กรุณาเลือกประเภทเครื่องดื่ม");
      } else if (chooseSweet === 0 && chooseSweet === 0) {
        setText("กรุณาเลือกประเภทเครื่องดื่มและระดับความหวาน");
      } else {
        setText("\u00A0");
      }
    } else {
      setText("\u00A0");
    }
  });

  console.log(
    "sw : " +
      chooseSweet +
      "\ntype : " +
      chooseType +
      "\nclicked : " +
      clicked +
      "\ntext : " +
      text
  );

  return (
    <div className="flex h-5/6 px-11 gap-x-11">
      <div className="basis-2/5 flex flex-col justify-center gap-y-20">
        <div className="overflow-hidden">
          <img src={pic} alt="" className="rounded-3xl" />
        </div>
        <Link
          to={chooseType && chooseSweet ? `/payment/${keynum}/${price}` : null}
          className="bg-bg-green flex justify-center text-4xl text-white py-3 rounded-full text-center font-medium border-2 border-bg-green hover:bg-[#F7F2EC] hover:text-bg-green hover:border-2 hover:border-bg-green"
          onClick={() => setClicked(true)}
        >
          <button className="grid grid-cols-3">
            <p className=" text-right">ยืนยัน</p>
            <p className=" text-center">|</p>
            <p className=" text-left">{price} บาท</p>
          </button>
        </Link>
        <p className="text-center text-red-500 -translate-y-14">{text}</p>
      </div>
      <div className="basis-3/5 flex flex-col gap-y-5 justify-center">
        <h1 className="text-4xl font-medium text-[#080607]">{menu}</h1>
        <p className="text-justify text-[#685D5D] whitespace-pre-line font-medium">
          {detail}
        </p>
        <div className="flex gap-5 items-center pb-2 mt-10">
          <p className=" text-2xl font-bold ">ประเภทเครื่องดื่ม</p>
          <img
            className="w-14"
            src="https://cdn.pic.in.th/file/picinth/coffee.png"
            alt="coffee"
          />
        </div>
        <hr class="h-px mb-5 bg-gray-200 border-0"></hr>
        <div className="mx-4 flex gap-2 ">
          {hot ? (
            <a
              href="#"
              onClick={() => {
                setPrice(hot);
                setChooseType(1);
              }}
              className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 ${
                chooseType === 1
                  ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                  : ""
              }`}
            >
              <div className="flex gap-3 text-xl">
                <p>ร้อน</p>
                <div className="flex items-center gap-1">
                  <p>{hot}</p>
                  <p className=" text-lg">บ</p>
                </div>
              </div>
            </a>
          ) : null}
          {cold ? (
            <a
              href="#"
              onClick={() => {
                setPrice(cold);
                setChooseType(2);
              }}
              className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 ${
                chooseType === 2
                  ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                  : ""
              }`}
            >
              <div className="flex gap-3 text-xl">
                <p>เย็น</p>
                <div className="flex items-center gap-1">
                  <p>{cold}</p>
                  <p className=" text-lg">บ</p>
                </div>
              </div>
            </a>
          ) : null}
          {mix ? (
            <a
              href="#"
              onClick={() => {
                setPrice(mix);
                setChooseType(3);
              }}
              className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 ${
                chooseType === 3
                  ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                  : ""
              }`}
            >
              <div className="flex gap-3 text-xl">
                <p>ปั่น</p>
                <div className="flex items-center gap-1">
                  <p>{mix}</p>
                  <p className=" text-lg">บ</p>
                </div>
              </div>
            </a>
          ) : null}
        </div>
        <div className="flex gap-5 items-center pb-2 pt-10">
          <p className="font-bold text-2xl">ระดับความหวาน</p>
          <img
            className=" w-10"
            src="https://cdn.pic.in.th/file/picinth/sweet.png"
            alt="sweet"
          />
        </div>
        <hr class="h-px mb-5 bg-gray-200 border-0"></hr>
        <div className="mx-4 flex gap-2">
          <a
            href="#"
            className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1
            ${
              chooseSweet === 1
                ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                : ""
            }`}
            onClick={() => setChooseSweet(1)}
          >
            <p>ไม่หวาน</p>
          </a>
          <a
            href="#"
            className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1
            ${
              chooseSweet === 2
                ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                : ""
            }`}
            onClick={() => setChooseSweet(2)}
          >
            <p>หวานน้อย</p>
          </a>
          <a
            href="#"
            className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1
            ${
              chooseSweet === 3
                ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                : ""
            }`}
            onClick={() => setChooseSweet(3)}
          >
            <p>หวานปกติ</p>
          </a>
          <a
            href="#"
            className={`inline-flex text-xl text-[#685D5D] items-center px-3 py-2  font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1
            ${
              chooseSweet === 4
                ? "ring-1 outline-none ring-[#6A9B53] text-[#6A9B53]"
                : ""
            }`}
            onClick={() => setChooseSweet(4)}
          >
            <p>หวานมาก</p>
          </a>
        </div>
        <div className="flex flex-row gap-x-14 justify-center pt-10">
          <div className="flex gap-x-6 items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/00e7/f7e3/966051be2777659b973f0290f4614fba?Expires=1697414400&Signature=Ujf-0b8Ge6fiighUiqFwJi0iqsmFoZT-v6tKhTalM9gN2df-OFn20rRGz2nxpENcNfM7rUZlzHMFw6Tc0wMPO0vRk4DSdyoQqlzeaBUO53M0I6uYBZy-q4o5YQ-pkREEiN8tA7b-MA9jGzTrkWBVmPdCiBA4jNJBplal2ZUxbfb5qZWrJYFrN2f2vUhY6NlP0X~lfSAXIS5Z3f-0YQRrKbPnEoDgiOMa0OP8k46DntASabV0t09hbaTMx8462wm3J7qrGIjtIP4yoqZP9k3qws-8EcnNGravNuf3cPDSowjVuvTLHQGQnSsXbrcrmLispS324JSib6Xr35ERczeWmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="w-10"
            />
            <p className="text-gray-text text-3xl font-medium">รับหลอด</p>
            <div className="w-10 h-10">
              {checkBoxStraw ? (
                <>
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setCheckboxStraw(!checkBoxStraw)}
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
                    onClick={() => setCheckboxStraw(!checkBoxStraw)}
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
          <div className="flex gap-x-6 items-center justify-center">
            <img src={lid} alt="" className="w-10" />
            <p className="text-gray-text text-3xl font-medium">รับฝา</p>
            {checkBoxLid ? (
              <>
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setCheckboxLid(!checkBoxLid)}
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
                  onClick={() => setCheckboxLid(!checkBoxLid)}
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
  );
}

export default DrinkDetailComponent;

{
  /* <div className="flex h-5/6 items-center">
      <div className=" basis-1/2 justify-center flex">
        <div class="max-w-sm bg-white ">
          <a href="#">
            <img
              class="rounded-xl"
              src={pic}
              alt={menu}
            />
          </a>
          <div class="pt-16 pb-5">
            <Link to="/payment" >
              <button className="grid grid-cols-3 w-full bg-[#9BB878] p-2 text-white text-xl rounded-2xl ">
                <p className=" text-right">ยืนยัน</p>
                <p className=" text-center">|</p>
                <p className=" text-left">{price}บาท</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" basis-1/2">
        <div className="mx-2">
          <div className="mb-10">
            <h1 className=" text-4xl pb-2">{menu}</h1>
            <p>{detail}</p>
          </div>
          <div className="flex gap-5 items-center pb-2">
            <p className=" text-lg font-bold">ประเภทเครื่องดื่ม</p>
            <img
              className=" w-10"
              src="https://cdn.pic.in.th/file/picinth/coffee.png"
              alt="coffee"
            />
          </div>

          <hr class="h-px mb-5 bg-gray-200 border-0"></hr>
          <div className="mx-4 flex gap-2">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full  focus:ring-1 focus:outline-none focus:ring-[#6A9B53] focus:text-white focus:bg-[#6A9B53] hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 "
            >
              <div className="flex gap-3">
                <p>ร้อน</p>
                <div className="flex items-center gap-1">
                  <p>{hot}</p>
                  <p className=" text-xs">บ</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full "
            >
              <div className="flex gap-3">
                <p>เย็น</p>
                <div className="flex items-center gap-1">
                  <p>{cold}</p>
                  <p className=" text-xs">บ</p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full  focus:ring-1 focus:outline-none focus:ring-[#6A9B53] focus:text-[#6A9B53] hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 "
            >
              <div className="flex gap-3">
                <p>ปั่น</p>
                <div className="flex items-center gap-1">
                  <p>{mix}</p>
                  <p className=" text-xs">บ</p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex gap-5 items-center pb-2 pt-10">
            <p className=" text-lg font-bold">ระดับความหวาน</p>
            <img
              className=" w-10"
              src="https://cdn.pic.in.th/file/picinth/sweet.png"
              alt="sweet"
            />
          </div>
          <hr class="h-px mb-5 bg-gray-200 border-0"></hr>
          <div className="mx-4 flex gap-2 ">
            <a
              href="#"
              className="inline-flex text-[#685D5D] items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full  focus:ring-1 focus:outline-none focus:ring-[#6A9B53] focus:text-[#6A9B53] hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 "
            >
              <p>ไม่หวาน</p>
            </a>
            <a
              href="#"
              className="inline-flex text-[#685D5D] items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full  focus:ring-1 focus:outline-none focus:ring-[#6A9B53] focus:text-[#6A9B53] hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 "
            >
              <p>หวานน้อย</p>
            </a>
            <a
              href="#"
              className="inline-flex text-[#685D5D] items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full  focus:ring-1 focus:outline-none focus:ring-[#6A9B53] focus:text-[#6A9B53] hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 "
            >
              <p>หวานปกติ</p>
            </a>
            <a
              href="#"
              className="inline-flex text-[#685D5D] items-center px-3 py-2 text-sm font-medium border-2 border-[#685D5D] text-[#685D5D4D] bg-[#F7F2EC] rounded-full  focus:ring-1 focus:outline-none focus:ring-[#6A9B53] focus:text-[#6A9B53] hover:text-[#6A9B53] hover:ring-[#6A9B53] hover:ring-1 "
            >
              <p>หวานมาก</p>
            </a>
          </div>
          <div className="flex mt-16 justify-start gap-20">
            <div className=" flex items-center gap-5">
              <img
                className=" w-7"
                src="https://cdn.pic.in.th/file/picinth/straws-1.png"
                alt="straw"
              />
              <p>รับหลอด </p>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="flex items-center gap-5">
              <img
                className="h-4"
                src="https://cdn.pic.in.th/file/picinth/drinks-1.png"
                alt="lid"
              />
              <p>รับฝา</p>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div> */
}
