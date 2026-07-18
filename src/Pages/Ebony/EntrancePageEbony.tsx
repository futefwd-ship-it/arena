import { RiArrowGoBackLine } from "react-icons/ri";


import WithoutbgHeader from '../../components/WithoutbgHeader'
import { Link } from "react-router-dom";
export default function EntrancePageEbony() {

    
    return (<>
        <div className="w-screen h-screen">
            <WithoutbgHeader />
            <div className="relative w-screen h-screen">
                <iframe
                    src="pano/pano3/index.html"
                    className="w-full h-full border-0 pointer-events-none" // prevents iframe from blocking clicks
                    title="Pano2VR Tour"
                ></iframe>

                {/* Overlay Buttons */}
                <div className="absolute bottom-10 right-6 z-30 pointer-events-auto">
                    <Link to="/"> <button  className="bg-white/70 text-gray-800/90 hover:text-black text-[18px] w-16 h-16 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center">
                       <RiArrowGoBackLine size={20} />
                    </button></Link>
                </div>
            </div>

        </div>

    </>)
}