import { Link } from 'react-router-dom';
import WithoutbgHeader from '../../components/WithoutbgHeader'
import { RiArrowGoBackLine } from "react-icons/ri";

export default function HomePage() {


    return (<>

        <div className="w-screen h-screen">
            <WithoutbgHeader />
            <iframe
                // src="pano/pano_new_arena/index.html"
                // src="https://futeservices.com/demo/arena%20360%20pano/index.html"
                src="https://futeservices.com/25-26/Arena%20Jan26/index.html"

                // className="w-full h-full border-0"
             className="w-full flex-1 border-0 h-full lg:h-full md:h-[calc(100vh-4px)] border-0 "
                title="Pano2VR Tour"
            ></iframe>

            {/* Overlay Buttons */}
            <div className="absolute bottom-10 right-6 z-30 pointer-events-auto">
                 <Link to="/"><button className="bg-white/70 text-gray-800/90 hover:text-black text-[18px] w-16 h-16 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center">
                   <RiArrowGoBackLine size={20} />
                </button></Link>
            </div>
        </div>
    </>)
}