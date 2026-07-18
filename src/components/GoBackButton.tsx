import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


export default function Go_BackButton() {
    const navigate = useNavigate();
    return (
        <>
            {/* Overlay Back Button */}
            <div className="absolute bottom-14 left-6 z-30">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-black/50 text-white lg:bg-white/70 lg:text-gray-800/90 hover:text-black text-[18px] w-16 h-16 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center"
                >
                    <RiArrowGoBackLine size={20} />
                </button>
            </div>
        </>

    )
}
