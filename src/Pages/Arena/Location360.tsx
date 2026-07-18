import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

// import Go_BackButton from "../../components/GoBackButton";
const Location360 = () => {
    const navigate=useNavigate();
  return (<>
    <iframe
      // src="https://view.pixeldo.com/HiranandaniFortuneCity/"
       src="https://futeservices.com/26-27/Hiranadani/HFC/index.html" 
      title="360 View"
      className="w-screen h-screen border-none"
      allowFullScreen
    />
    {/* <Go_BackButton/> */}
    {/* Overlay Buttons */}
            <div className="absolute bottom-10 right-6 z-30 pointer-events-auto">
                 {/* <Link to="/"> */}
                 <button onClick={()=>navigate(-1)} className="bg-white/70 text-gray-800/90 hover:text-black text-[18px] w-16 h-16 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center">
                   <RiArrowGoBackLine size={20} />
                </button>
                {/* </Link> */}
            </div>
</>
  );
};

export default Location360;