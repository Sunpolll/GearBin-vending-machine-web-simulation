import React from "react";
import MachineZoom from "../../component/MachineZoom"
import Payments from "../../component/payments"
import Thank_2 from "../../asset/complete/Thank_2.gif"

const ThankYou = () => {
  return (
  <MachineZoom
    yourCode={
      <div>
        <img src={Thank_2} alt="GIF" />
      </div>
    }/>
  )
};

export default ThankYou;
