import React, { useState, useEffect } from 'react';

function CountdownTimer(props) {
  const [countdown, setCountdown] = useState(20); // Set the initial countdown time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
      else{
        props.setTime();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="absolute top-10 right-2 p-2 text-stone-700 flex justify-between items-end">
      <div className="text-center flex-1">
        <div className="text-3xl font-bold ps-1">พร้อมเสิร์ฟใน</div>
        <div className="text-8xl font-bold text-center">{countdown > 0 ? countdown : "0"}</div>
      </div>
      <div className="text-2xl">วินาที</div>
    </div>
  );
}

export default CountdownTimer;
