import React from 'react'
import store from "../asset/store (1).png"

function StoreButton({ color }) {
    return (
        <div>
            <button className={`rounded-full ${color} w-[100px] h-[100px] flex flex-col justify-center items-center`}>
                <img src={store} alt="" />
                <p className=" text-gray-text">หน้าสินค้า</p>
            </button>
        </div>
    )
}

export default StoreButton;