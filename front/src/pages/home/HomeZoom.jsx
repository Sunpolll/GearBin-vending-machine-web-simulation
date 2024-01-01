import MachineZoom from "../../component/MachineZoom";
import startHome from "../../asset/start_1.gif";
import { Link } from "react-router-dom";

function HomeZoom() {
  return (
    <MachineZoom
      yourCode={
        <div className="relative h-full overflow-hidden">
          <img src={startHome} alt="" className="absolute h-full scale-105" />
          <div className=" flex justify-center items-end h-full pb-20">
            <Link
              to="/mainmenu"
              className="absolute w-[45%] h-fit py-5 bg-start-btn rounded-[50px] text-white flex flex-col justify-around items-center hover:bg-start-hover"
            >
              <p className="font-bold text-5xl">Touch to start</p>
              <p className="font-semibold text-lg">
                กดที่หน้าจอเพื่อเริ่มรายการ
              </p>
            </Link>
          </div>
        </div>
      }
    />
  );
}

export default HomeZoom;
