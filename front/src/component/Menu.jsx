import React from "react";
import { Link } from "react-router-dom";

function Menu({ pic, name, price,link }) {
  return (
    <Link to={link}>
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

        <div className="flex gap-2 items-end px-5 pb-5">
          <p className="text-2xl text-[#6A9B53] font-semibold">{price}</p>
          <p className=" text-base">บาท</p>
        </div>
      </div>
    </Link>
  );
}

export default Menu;

// import React from "react";

// function Menu({ pic, name, price }) {
//   return (
//     <>
//       <div className="max-w-sm bg-[#F7F2EC] border w-52 shadow-xl border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
//         {/* picture */}
//         <a href="#">
//           <img
//             className="rounded-t-lg h-52 object-cover w-full"
//             src={pic}
//             alt={name}
//           />
//         </a>
//         <div className="p-5">
//           {/* menu name */}
//           <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {name}
//           </h2>

//           {/* option */}
//           <div className="flex gap-2 items-end ">
//               <p className="text-2xl text-[#6A9B53] font-semibold">{price}</p>
//               <p className=" text-base">บาท</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Menu;

{
  /* <div className="max-w-sm bg-[#F7F2EC] border w-52 shadow-xl border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
       
        <a href="#">
          <img
            className="rounded-t-lg h-52 object-cover w-full"
            src={pic}
            alt={name}
          />
        </a>
        <div className="p-5">
         
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h2>

         
          <div className="flex gap-2 items-end ">
              <p className="text-2xl text-[#6A9B53] font-semibold">{price}</p>
              <p className=" text-base">บาท</p>
          </div>
        </div>
      </div> */
}
