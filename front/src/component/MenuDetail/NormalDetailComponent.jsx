import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NormalDetailComponent({ keynum,pic, menu, price, detail, brand }) {
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
      </div>
    </div>
  );
}

export default NormalDetailComponent;
