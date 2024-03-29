import MachineZoom from "../../component/MachineZoom";
import rtdHeadIcon from "../../asset/rtdHeadIcon.svg";
import Menudrink from "../../component/Menudrink";
import { Link } from "react-router-dom";
import CategorySeach from "../../component/CategorySearch";
import StoreButton from "../../component/StoreButton";
import DATA from "../../data/Product_information";
import { useEffect, useState } from "react";

function ChooseCafeDrink() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.href = "/";
    }, 120000);
    return () => clearInterval(interval);
  }, []);
  const [zoom, setZoom] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]); // Add selectedFilters state
  const filteredItems = DATA.เครื่องดื่ม.filter((menuItem) => {
    if (menuItem.type != "คาเฟ่") return false;
    if (selectedFilters.length === 0 || selectedFilters.includes("ทั้งหมด")) {
      // If no filters are selected or "ทั้งหมด" is selected, show all items
      return true;
    } else {
      // Check if the item's category is in the selectedFilters array
      return selectedFilters.includes(menuItem.group);
    }
  });
  console.log(selectedFilters);
  console.log(filteredItems);

  return (
    <MachineZoom
      yourCode={
        <div className="w-full h-full overflow-hidden relative">
          <Link to="/mainmenu" className=" absolute right-20 bottom-12">
            <StoreButton color="bg-yellow-bg" />
          </Link>
          <div className="bg-yellow-bg w-full grid grid-cols-5 items-center px-9">
            <Link to="/choosedrinktype" className=" col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
              >
                <path
                  d="M44.47 56.2562L24.0533 35.8395L44.47 15.4229"
                  stroke="#F7F2EC"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <h1 className="text-5xl text-white font-bold col-span-3 text-center">
              คาเฟ่
            </h1>
            <div className="flex items-end gap-x-2 h-full translate-y-2 col-span-1">
              <svg
                width="98"
                height="111"
                viewBox="0 0 98 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-5"
              >
                <g id="Group 54">
                  <path
                    id="Vector"
                    d="M41.1471 11.4316H38.1191V47.2646H41.1471V11.4316Z"
                    fill="#926030"
                  />
                  <path
                    id="Vector_2"
                    d="M2.77539 33.1695L4.62065 37.2566L12.4395 33.7309L20.0862 48.335H25.2103L14.6815 27.7949L2.77539 33.1695Z"
                    fill="#43D3FF"
                  />
                  <g id="Group">
                    <path
                      id="Vector_3"
                      d="M35.9305 47.2646V103.106C34.5382 103.106 33.2768 102.593 32.3822 101.56C31.2145 102.433 29.8483 102.593 28.5645 102.32C27.2133 102.051 26.0905 101.291 25.4167 100.075C24.1142 100.681 22.7219 100.569 21.5316 100.052C20.274 99.487 19.3308 98.499 18.9266 97.1965C17.5118 97.5146 16.1831 97.1104 15.1276 96.3469C14.0234 95.5384 13.2823 94.3707 13.1513 93.0196C11.7365 93.0196 10.4976 92.3421 9.65173 91.4064C8.72723 90.3734 8.22945 89.0897 8.40911 87.7198C6.99056 87.4504 5.93877 86.5259 5.28751 85.4031C4.59134 84.2167 4.38924 82.8693 4.84213 81.5668C3.51715 81.0017 2.6825 79.8788 2.27827 78.6437C1.85158 77.345 1.9414 75.9976 2.64131 74.8037C1.46979 73.969 0.885888 72.7152 0.754887 71.4352C0.597686 70.0429 0.983224 68.7404 1.90023 67.7299C0.934567 66.6707 0.623889 65.3271 0.758633 64.0209C0.885891 62.651 1.52219 61.4384 2.64131 60.6524C1.92642 59.4173 1.90024 58.0213 2.28576 56.8124C2.71245 55.4837 3.58453 54.432 4.84588 53.893C4.39673 52.5269 4.64374 51.1533 5.29501 50.0567C5.99118 48.8441 7.07291 47.987 8.4166 47.74C8.40163 47.579 8.39037 47.4256 8.38663 47.2684H35.9342L35.9305 47.2646Z"
                      fill="#7AB200"
                    />
                    <path
                      id="Vector_4"
                      d="M69.9599 67.7299C70.9294 68.7891 71.24 70.1327 71.1053 71.4352C70.9706 72.8088 70.3417 74.0214 69.2189 74.8037C69.9412 76.0425 69.9599 77.4348 69.5782 78.6437C69.1515 79.9724 68.2757 81.0279 67.0218 81.5668C67.4635 82.9367 67.2202 84.3065 66.5727 85.4031C65.8727 86.6195 64.7985 87.4728 63.4473 87.7198C63.627 89.1571 63.0918 90.4371 62.2122 91.4064C61.2915 92.4132 60.0787 93.042 58.6826 93.0008C58.5704 94.4381 57.7619 95.5834 56.7289 96.3469C55.606 97.1553 54.281 97.4922 52.9336 97.1965C52.5069 98.5701 51.4963 99.5132 50.3061 100.052C49.0485 100.614 47.701 100.655 46.4434 100.075C45.7435 101.328 44.557 102.051 43.2769 102.32C41.9295 102.616 40.5783 102.391 39.4817 101.56C38.5347 102.638 37.2098 103.106 35.9297 103.106V47.2646H63.4848C63.4848 47.4218 63.4735 47.5753 63.4511 47.7362C64.8659 48.0057 65.9251 48.9302 66.5764 50.053C67.2651 51.2394 67.4747 52.5868 67.0255 53.8893C68.3505 54.4544 69.1852 55.5773 69.5857 56.8086C70.0123 58.1111 69.9263 59.4622 69.2226 60.6487C70.3904 61.4833 70.978 62.7371 71.1128 64.0171C71.2662 65.4094 70.8844 66.7194 69.9599 67.7262V67.7299Z"
                      fill="#678C02"
                    />
                  </g>
                  <g id="Group_2">
                    <path
                      id="Vector_5"
                      d="M39.635 0.839844L12.791 13.3593C16.0623 17.525 26.8455 20.579 39.635 20.579V0.839844Z"
                      fill="#F5E210"
                    />
                    <path
                      id="Vector_6"
                      d="M39.6348 0.839844L66.4788 13.3593C63.2075 17.525 52.4242 20.579 39.6348 20.579V0.839844Z"
                      fill="#EFB706"
                    />
                  </g>
                  <g id="Group_3">
                    <path
                      id="Vector_7"
                      d="M41.7307 87.7748C39.7469 88.2202 38.669 90.3573 39.4775 92.2212C40.4693 94.5117 41.9814 97.1467 43.5085 99.2089C44.7175 100.844 47.1129 100.979 48.4866 99.4859C50.5264 102.151 54.5688 102.02 56.5525 99.3174C60.0072 94.6053 62.1107 88.2801 62.1107 88.2801C59.3484 84.3727 60.2916 86.0232 58.2443 81.5806C58.2443 81.5806 51.7129 80.2369 45.9077 80.8732C42.5765 81.24 40.4394 84.6721 41.7307 87.7748Z"
                      fill="#FC4D17"
                    />
                    <path
                      id="Vector_8"
                      d="M76.9016 99.4821C78.279 100.975 80.6707 100.841 81.8796 99.2089C83.3655 97.2028 84.8926 94.5754 85.9145 92.2249C86.7267 90.3611 85.6487 88.2202 83.665 87.7748C84.9563 84.6721 82.8191 81.24 79.4842 80.8732C73.6753 80.2369 67.1476 81.5806 67.1476 81.5806C65.1452 85.9259 66.1034 84.2828 63.2812 88.2763C63.2812 88.2763 65.381 94.6016 68.8394 99.3137C70.8232 102.016 74.8655 102.151 76.9054 99.4821H76.9016Z"
                      fill="#FC4D17"
                    />
                    <path
                      id="Vector_9"
                      d="M69.454 63.1706C70.0604 61.2318 68.7466 59.2295 66.7292 58.9974C64.2514 58.713 61.2122 58.7055 58.6633 58.9974C56.6421 59.2295 55.3284 61.2318 55.9347 63.1706C52.6036 63.6085 50.6984 67.1753 52.0459 70.2406C54.3964 75.589 58.8242 80.5705 58.8242 80.5705C63.5889 80.1326 61.6875 80.1214 66.557 80.5705C66.557 80.5705 70.9849 75.589 73.3354 70.2406C74.6866 67.1715 72.7777 63.6047 69.4465 63.1706H69.454Z"
                      fill="#FC4D17"
                    />
                    <path
                      id="Vector_10"
                      d="M83.6612 79.1782C85.645 78.7328 86.7229 76.5957 85.9145 74.7318C84.9226 72.4412 83.4105 69.8063 81.8834 67.7441C80.6744 66.1085 78.279 65.9738 76.9054 67.4671C74.8617 64.8023 70.8232 64.9333 68.8394 67.6355C65.3847 72.3476 63.2812 78.6729 63.2812 78.6729C66.0435 82.5803 65.1003 80.9297 67.1476 85.3686C67.1476 85.3686 73.679 86.7123 79.4842 86.076C82.8154 85.7092 84.9525 82.2771 83.665 79.1744L83.6612 79.1782Z"
                      fill="#F73906"
                    />
                    <path
                      id="Vector_11"
                      d="M55.9382 103.779C55.3318 105.718 56.6456 107.72 58.663 107.952C61.1408 108.236 64.18 108.244 66.7289 107.952C68.7501 107.72 70.0638 105.718 69.4575 103.779C72.7886 103.345 74.6938 99.7741 73.3463 96.7088C70.9921 91.3605 66.5642 86.3789 66.5642 86.3789C61.7995 86.8168 63.7009 86.828 58.8314 86.3789C58.8314 86.3789 54.4036 91.3605 52.0493 96.7088C50.6981 99.7779 52.607 103.345 55.9382 103.779Z"
                      fill="#F73906"
                    />
                    <path
                      id="Vector_12"
                      d="M48.4904 67.4705C47.113 65.9772 44.7213 66.1119 43.5124 67.7437C42.0264 69.7498 40.4993 72.3773 39.4775 74.7277C38.6653 76.5916 39.7433 78.7324 41.727 79.1778C40.4357 82.2805 42.5766 85.7126 45.9078 86.0794C51.7167 86.7157 58.2443 85.372 58.2443 85.372C60.2468 81.0267 59.2886 82.6697 62.1107 78.6762C62.1107 78.6762 60.011 72.351 56.5525 67.6389C54.5688 64.9367 50.5265 64.802 48.4866 67.4705H48.4904Z"
                      fill="#F73906"
                    />
                  </g>
                  <g id="Group_4">
                    <g id="Group_5">
                      <path
                        id="Vector_13"
                        d="M88.6795 82.7713C88.6795 86.4317 85.7114 89.3959 82.0546 89.3959C78.3978 89.3959 75.4297 86.4317 75.4297 82.7713C75.4297 79.1109 78.3941 76.1504 82.0546 76.1504C85.7152 76.1504 88.6795 79.1147 88.6795 82.7713Z"
                        fill="#FFA4BA"
                      />
                      <path
                        id="Vector_14"
                        d="M86.113 82.7711C86.113 85.0093 84.2977 86.8245 82.0594 86.8245C79.8212 86.8245 78.0059 85.0093 78.0059 82.7711C78.0059 80.533 79.8212 78.7178 82.0594 78.7178C84.2977 78.7178 86.113 80.533 86.113 82.7711Z"
                        fill="#C40026"
                      />
                    </g>
                    <g id="Group_6">
                      <path
                        id="Vector_15"
                        d="M76.1303 82.3711C79.3005 84.2013 80.3859 88.251 78.5557 91.4173C76.7254 94.5874 72.6756 95.6728 69.5091 93.8426C66.3427 92.0124 65.2535 87.9628 67.0838 84.7965C68.914 81.6301 72.9638 80.5447 76.1303 82.3711Z"
                        fill="#FFA4BA"
                      />
                      <path
                        id="Vector_16"
                        d="M74.8454 84.5977C76.7842 85.7168 77.4504 88.1945 76.3313 90.137C75.2122 92.0757 72.7306 92.7382 70.7918 91.6191C68.853 90.5 68.1905 88.0223 69.3097 86.0798C70.4288 84.1411 72.9103 83.4787 74.8454 84.5977Z"
                        fill="#C40026"
                      />
                    </g>
                    <g id="Group_7">
                      <path
                        id="Vector_17"
                        d="M69.508 93.0417C72.6745 91.2115 76.728 92.2969 78.5545 95.4633C80.3848 98.6334 79.2994 102.683 76.1291 104.513C72.9627 106.34 68.9129 105.258 67.0826 102.088C65.2524 98.9216 66.3378 94.8719 69.508 93.0417Z"
                        fill="#FFA4BA"
                      />
                      <path
                        id="Vector_18"
                        d="M70.791 95.2647C72.7298 94.1456 75.2114 94.8081 76.3305 96.7468C77.4496 98.6856 76.7834 101.167 74.8446 102.286C72.9058 103.405 70.428 102.739 69.3089 100.804C68.1897 98.8652 68.8559 96.3838 70.791 95.2685V95.2647Z"
                        fill="#C40026"
                      />
                    </g>
                    <g id="Group_8">
                      <path
                        id="Vector_19"
                        d="M75.4336 104.109C75.4336 100.452 78.398 97.4844 82.0585 97.4844C85.7191 97.4844 88.6834 100.449 88.6834 104.109C88.6834 107.769 85.7191 110.734 82.0585 110.734C78.398 110.734 75.4336 107.769 75.4336 104.109Z"
                        fill="#FFA4BA"
                      />
                      <path
                        id="Vector_20"
                        d="M78.0039 104.109C78.0039 101.871 79.8192 100.056 82.0575 100.056C84.2957 100.056 86.111 101.871 86.111 104.109C86.111 106.347 84.2957 108.162 82.0575 108.162C79.8192 108.162 78.0039 106.347 78.0039 104.109Z"
                        fill="#C40026"
                      />
                    </g>
                    <g id="Group_9">
                      <path
                        id="Vector_21"
                        d="M87.9821 104.509C84.8156 102.679 83.7302 98.6293 85.5567 95.463C87.387 92.2929 91.4368 91.2075 94.6032 93.0377C97.7697 94.8679 98.8552 98.9175 97.0287 102.084C95.1984 105.25 91.1486 106.336 87.9821 104.509Z"
                        fill="#FFA4BA"
                      />
                      <path
                        id="Vector_22"
                        d="M89.2692 102.286C87.3304 101.167 86.6642 98.6893 87.7833 96.7506C88.9024 94.8119 91.384 94.1457 93.3228 95.2647C95.2616 96.3838 95.9241 98.8652 94.805 100.804C93.6859 102.743 91.2044 103.405 89.2655 102.286H89.2692Z"
                        fill="#C40026"
                      />
                    </g>
                    <g id="Group_10">
                      <path
                        id="Vector_23"
                        d="M94.6057 93.8422C91.4392 95.6686 87.3857 94.587 85.5592 91.4206C83.7289 88.2505 84.8144 84.2009 87.9846 82.3707C91.1511 80.5405 95.2046 81.6259 97.0311 84.796C98.8577 87.9624 97.7759 92.012 94.6057 93.8422Z"
                        fill="#FFA4BA"
                      />
                      <path
                        id="Vector_24"
                        d="M93.3169 91.6191C91.3781 92.7382 88.9003 92.0757 87.7775 90.137C86.6583 88.1982 87.3246 85.7168 89.2634 84.5977C91.2022 83.4787 93.68 84.1411 94.8029 86.0798C95.922 88.0186 95.2595 90.5 93.3169 91.6154V91.6191Z"
                        fill="#C40026"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                width="64"
                height="107"
                viewBox="0 0 64 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-y-5"
              >
                <g id="Group 55">
                  <path
                    id="Vector"
                    d="M53.5285 0.839844H11.0879V10.6907H53.5285V0.839844Z"
                    fill="#3981D0"
                  />
                  <path
                    id="Vector_2"
                    d="M11.0922 10.6904L0.720703 44.9439H63.9006L53.5328 10.6904H11.0922Z"
                    fill="#73C3EF"
                  />
                  <path
                    id="Vector_3"
                    d="M27.6429 2.2207H24.877V8.78922H27.6429V2.2207Z"
                    fill="#4098E0"
                  />
                  <path
                    id="Vector_4"
                    d="M21.0727 2.2207H18.3066V8.78922H21.0727V2.2207Z"
                    fill="#4098E0"
                  />
                  <path
                    id="Vector_5"
                    d="M46.311 2.2207H43.5449V8.78922H46.311V2.2207Z"
                    fill="#4098E0"
                  />
                  <path
                    id="Vector_6"
                    d="M39.7445 2.2207H36.9785V8.78922H39.7445V2.2207Z"
                    fill="#4098E0"
                  />
                  <path
                    id="Vector_7"
                    d="M0.720703 44.9443V101.284C0.720703 104.042 2.95898 106.28 5.71749 106.28H58.9C61.6623 106.28 63.9006 104.042 63.9006 101.284V44.9443H0.720703Z"
                    fill="#529EE2"
                  />
                  <path
                    id="Vector_8"
                    d="M63.9006 66.0273H0.720703V85.1977H63.9006V66.0273Z"
                    fill="#3650A3"
                  />
                  <path
                    id="Vector_9"
                    d="M57.4155 75.6119C57.4155 89.4788 46.1718 100.718 32.3082 100.718C18.4446 100.718 7.19727 89.4788 7.19727 75.6119C7.19727 61.7451 18.4408 50.502 32.3082 50.502C46.1756 50.502 57.4155 61.7414 57.4155 75.6119Z"
                    fill="#3650A3"
                  />
                  <path
                    id="Vector_10"
                    d="M49.6377 75.612C49.6377 85.1822 41.8787 92.9409 32.3119 92.9409C22.7451 92.9409 14.9824 85.1822 14.9824 75.612C14.9824 66.0419 22.7413 58.2832 32.3119 58.2832C41.8824 58.2832 49.6377 66.0419 49.6377 75.612Z"
                    fill="#4098E0"
                  />
                  <path
                    id="Vector_11"
                    d="M45.0603 72.5987C41.7703 71.2176 39.1989 71.7229 37.9563 72.6062C37.7841 72.3704 37.5932 72.1495 37.3836 71.9399C43.0092 70.3193 44.7608 66.4456 41.2051 63.6348C40.9468 63.4327 40.58 63.7172 40.7522 63.9866C42.2007 66.2772 41.426 69.6643 34.5915 70.3305C33.1355 69.8926 31.5073 69.8852 30.0214 70.3305C23.3254 69.6793 22.3485 66.3745 23.8606 63.9866C24.0328 63.7172 23.666 63.4327 23.4078 63.6348C19.8558 66.4456 21.5962 70.3193 27.2292 71.9399C27.0159 72.1495 26.825 72.3741 26.6528 72.6062C25.3989 71.7154 22.8239 71.2251 19.5488 72.5987C21.1732 74.1893 23.4601 75.5292 25.7283 75.2785C25.7283 75.2934 25.7283 75.3084 25.7283 75.3234C25.7283 77.0263 27.3827 81.6374 28.1575 83.9017C27.4688 85.6084 29.5909 87.6519 32.3045 87.6519C35.0181 87.6519 37.1366 85.6084 36.4479 83.9017C37.2227 81.6336 38.877 77.0226 38.877 75.3234C38.877 75.3047 38.877 75.2934 38.877 75.2785C41.1452 75.5292 43.4321 74.1893 45.0565 72.5987H45.0603Z"
                    fill="#FEFDF8"
                  />
                </g>
              </svg>
              <img src={rtdHeadIcon} alt="" className="translate-y-2" />
            </div>
          </div>
          <div className="flex w-full justify-center -translate-y-5">
            <CategorySeach
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          <div className=" overflow-y-scroll px-10 pb-20 h-5/6 no-scrollbar">
            <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((temp) => {
                console.log(temp.price);
                return temp.type == "คาเฟ่" ? (
                  <Menudrink
                    keynum={temp.number}
                    pic={temp.url}
                    name={temp.productName}
                    hot={temp.price.ร้อน}
                    cold={temp.price.เย็น}
                    mix={temp.price.ปั่น}
                  />
                ) : null;
              })}
            </div>
          </div>
        </div>
      }
    />
  );
}

export default ChooseCafeDrink;

{
  /* <div className=" overflow-y-scroll px-10 pb-20 h-5/6">
            <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((temp) => {
                console.log(temp.price);
                return temp.type == "คาเฟ่" ? (
                  <Menudrink
                    pic={temp.url}
                    name={temp.productName}
                    hot={temp.price.ร้อน}
                    cold={temp.price.เย็น}
                    mix={temp.price.ปั่น}
                  />
                ) : null;
              })}
            </div>
          </div>
        </div> */
}
