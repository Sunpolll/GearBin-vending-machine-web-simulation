import React, { useState } from "react";

export default function CategorySeach({ selectedFilters, setSelectedFilters }) {
  // const [selectedFilters, setSelectedFilters] = useState([]);
  // const [filteredItems, setFilteredItems] = useState(items);
  const Category = {
    sweet: ["ทั้งหมด", "ช็อกโกแลต", "ผัก/ผลไม้แปรรูป", "ลูกอม", "ขนมขบเคี้ยว"],
    rtedetail: [
      "ทั้งหมด",
      "เมนูแนะนำ",
      "อาหารจานเดียว",
      "เมนูเส้น",
      "ข้าว/กับข้าว",
    ],
    choosebottledrink: [
      "ทั้งหมด",
      "น้ำดื่ม",
      "น้ำอัดลม",
      "เกลือแร่ ชูกำลัง",
      "ชากาแฟ",
    ],
    choosecafedrink: [
      "ทั้งหมด",
      "กาแฟ",
      "นม โกโก้",
      "ชา",
      "คาราเมล",
      "โซดา และ อื่นๆ",
    ],
    bakery: ["ทั้งหมด", "เค้ก", "ขนมปัง", "พาย", "แซนวิช"],
    appetizer: ["ทั้งหมด", "เมนูแนะนำ", "อาหารคาว", "ผลไม้", "อาหารหวาน"],
    dryfood: [
      "ทั้งหมด",
      "อาหารแห้ง",
      "อาหารสำเร็จรูป",
      "ผงชงดื่ม",
      "เครื่องกระป๋อง",
    ],
    press: [
      "ทั้งหมด",
      "ดื่มร้อน",
      "ดื่มเย็น",
      "slurpee",
      "น้ำอัดลม",
    ],
  };

  let pathname = window.location.pathname;
  pathname = pathname.replace("/", "");
  console.log(pathname);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([selectedCategory]);
    }
    return selectedCategory;
  };
  return (
    <div>
      <div className=" flex flex-row gap-5">
        {Category[pathname].map((category, idx) => {
          return pathname == "sweet" ? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-rose-400 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-rose-400 hover:bg-rose-500 text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : pathname == "rtedetail" || pathname == 'appetizer'? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-[#6A9B53] hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-[#6A9B53] hover:bg-[#6A9B53] text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : pathname == "choosebottledrink" || pathname == "press" ? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-[#FFBC35] hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-[#FFBC35] hover:bg-[#FFBC35] text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : pathname == "choosecafedrink" ? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-[#FFBC35] hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-[#FFBC35] hover:bg-[#FFBC35] text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : pathname == "bakery" ? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-rose-400 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-rose-400 hover:bg-rose-500 text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : pathname == "appetizer" ? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-[#6A9B53] hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-[#6A9B53] hover:bg-[#6A9B53] text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : pathname == "dryfood" ? (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-[#6A9B53] hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-[#6A9B53] hover:bg-[#6A9B53] text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          ) : (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`hover:bg-[#6A9B53] hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow ${
                selectedFilters?.includes(category)
                  ? " bg-[#6A9B53] hover:bg-[#6A9B53] text-white"
                  : "bg-white"
              }`}
              key={`${idx}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
