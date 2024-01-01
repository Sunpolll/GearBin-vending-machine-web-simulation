import React from 'react';
import scorebg from '../../asset/complete/scoreBG.png'
import { Link } from "react-router-dom";
const ScoreDisplay = (props) => {

  const handleCloseButton = () => {
    props.changeState(2);
  };
  const now=new Date();
  now.setTime(now.getTime()+2629743000);
  return (
    <div className={`${props.page === 1 ? 'h-full w-full flex items-center justify-center' : 'hidden'}`}>
      <div className="relative bg-[#F7F2EC] rounded-3xl shadow-md justify-center justify-items-center content-center text-center text-stone-600 w-[53%] h-[69.5%] mx-auto overflow-hidden mb-10">
        <img src={scorebg} alt='score-background' className='w-full h-full m-0'/>
        <div className='absolute inset-0 w-full h-full'>
          <div className="text-5xl font-semibold mt-20 mb-8">คะแนนสะสมทั้งหมด</div>
          <div className="text-9xl font-medium border-2 border-stone-500 bg-white rounded-2xl w-[79.8%] h-[35%] mx-auto p-12 mb-8">
          {props.point} <span className='mt-2 block text-2xl font-semibold'>คะแนน</span>
          </div>
          <div className="text-2xl">จะหมดอายุใน {now.getDate()} {now.getMonth()+1}. {now.getFullYear()}</div>
          <button
            className="bg-stone-500 text-white rounded-full p-6 text-3xl mt-24 hover:bg-stone-600 w-[52%]"
            onClick={handleCloseButton}
          >
            ปิด
          </button> 
        </div>
        
      </div>
    </div>
    
  );
};

export default ScoreDisplay;
