import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MachineZoom from "../../component/MachineZoom";
import Machine from '../../component/Machine';
import CountdownTimer from "../../component/Complete/CountdownTimer";
import PhoneNumberCollector from '../../component/Complete/PhoneNumberCollect';
import ScoreDisplay from '../../component/Complete/ScoreDisplay';
import Thank_2 from "../../asset/complete/Thank_2.gif";
import dropProduct from "../../asset/complete/drop_product.gif";
import start1 from "../../asset/start_1.gif";
const Complete = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showGearAndTimer, setShowGearAndTimer] = useState(false);
  const [isTimeOver, setTimeover] = useState(false);
  const [point,setPoint]=useState(0);
  useEffect(() => {

    const timer = setTimeout(() => {
      setShowGearAndTimer(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const changePage = (state) => {
    setCurrentPage(state);
  };

  const setTimeOver = () => {
    setCurrentPage(2);
    setTimeover(true);
  };
  return (
    <div>
      <MachineZoom
        yourCode={
          <div className="relative w-full h-full bg-[#f7f2ea]">
            <div>
              <img src={Thank_2} alt="GIF" className="w-full h-full"/>
            </div>
            {showGearAndTimer && (
              <>
                <CountdownTimer setTime = {setTimeOver}/>
                {currentPage !== 2 && (
                  <div className="absolute inset-0 w-full h-full justify-center items-center place-content-center bg-black bg-opacity-40">
                    <PhoneNumberCollector page={currentPage} changeState={changePage} setPoint={setPoint}/>
                    <ScoreDisplay page={currentPage} changeState={changePage} point={point}/>
                  </div>
                )}
              </>
            )}
          </div>
        }
      />
      {isTimeOver && (
        <div className='relative w-screen h-screen'>
          <Machine
      yourCode={
        <div className="relative h-full">
          <img src={start1} alt="" className="w-full scale-105 absolute" />
          <div className=" flex justify-center items-end h-full pb-3">
            <Link
              to="/zoom"
              className="absolute w-[45%] h-fit py-1 bg-start-btn rounded-3xl text-white flex flex-col justify-around items-center hover:bg-start-hover"
            >
            </Link>
          </div>
        </div>
      }
    />
          <div className='absolute top-[61.7%] left-[29.6%]'>
            <img src={dropProduct} alt="" className='rounded-xl'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complete;
