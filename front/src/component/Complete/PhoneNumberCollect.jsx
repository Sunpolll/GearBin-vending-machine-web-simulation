import React, { useState } from 'react';
import backArrow from '../../asset/complete/back-arrow.png'
import axios from 'axios';
import { useParams } from 'react-router';
const PhoneNumberCollector = (props) => {
  const [phoneNumber, setPhoneNumber] = useState(''); // State to hold the phone number
  const price=useParams().price;
  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value !== '#' && phoneNumber.length < 10) {
      setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + value);
    }
  };

  // Function to clear the phone number
  const handleSkipButton = () => {
    props.changeState(2);
    setPhoneNumber('');
  };
  const  fetch=async ()=>{
        
        const res=await axios.post('http://127.0.0.1:3001/member',{"tel":phoneNumber,"point":parseInt(price)});
        props.setPoint(res.data)
  }
  const handleSubmitButton = () => {
    if (phoneNumber.length < 10) {
      // Apply a class with a red border
      document
        .querySelector('.phone-number-display')
        .classList.add('border-red-500','text-red-500');
      // Reset the border color after a few seconds (e.g., 3 seconds)
      setTimeout(() => {
        try {
          document
          .querySelector('.phone-number-display')
          .classList.remove('border-red-500','text-red-500');
        } catch (error) {
          
        }
      }, 1000); // 3000 milliseconds (3 seconds)
    }
    else{
      fetch();
      props.changeState(1);
      setPhoneNumber('');
    }
    
  };

  const handleDelete = () => {
    setPhoneNumber((prevPhoneNumber) =>
      prevPhoneNumber.slice(0, prevPhoneNumber.length - 1)
    );
  };

  const formatDisplayedPhoneNumber = (number) => {
    if (number.length >= 4 && number.length < 7) {
      return `${number.slice(0, 3)}-${number.slice(3)}`;
    } else if (number.length >= 7) {
      return `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
    }
    return number;
  };

  
  return (
    <div className={`${props.page === 0 ? 'h-full w-full flex items-center justify-center' : 'hidden'}`}>
      <div 
      className="h-[88%] w-[55%] flex flex-col bg-[#F7F2EC] p-4 rounded-3xl shadow-md justify-center text-stone-700 justify-items-center text-center mx-auto"

      >
        <div className="text-[24px] text-center font-[10] mt-2 mb-9">กรุณาใส่เบอร์มือถือเพื่อสะสมแต้ม</div>
        <div className="h-[11.25%] text-center text-5xl font-bold border-2 border-[#524848] rounded-xl p-5 mx-10 mb-10 phone-number-display">
          {formatDisplayedPhoneNumber(phoneNumber)}
        </div>
        <div className="mx-auto mb-14 grid grid-cols-3 gap-2 justify-center justify-items-center w-fit">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '#', 0].map((number) => (
            <button
              key={number}
              className={`${
                number === '#' ? 'bg-[#685D5D] text-white rounded-full p-4 text-4xl font-black' : 'bg-[#685D5D] text-white rounded-full p-4 text-4xl font-black hover:bg-[#594e4e]'
              }`}
              style = {{width: '100px', height: '100px'}}
              onClick={() => handleButtonClick(number)}
            >
              {number}
            </button>
            
          ))}
          <button
              key="deletedigit"
              className="bg-[#9B8A8A] text-white rounded-full p-4 text-3xl font-black hover:bg-[#524848] w-16 h-16" 
              style = {{width: '100px', height: '100px'}}
              onClick={handleDelete}
            >
              <img src={backArrow} alt='back-arraow' className="w-2/3 mx-auto"/>
            </button>
        </div>
        <div className='h-[8%] w-full'>
          <button
            className="h-full w-[33%] bg-[#9BB878] text-white rounded-full p-2 px-4 text-3xl hover:bg-lime-600"
            onClick={handleSubmitButton}
          >
            ตกลง
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberCollector;
