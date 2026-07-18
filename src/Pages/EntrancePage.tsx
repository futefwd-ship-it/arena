import { Link } from "react-router-dom"



export default function EntrancePage() {
    return (<>
        <div className="w-screen h-screen">

            <div className="relative w-screen h-screen ">
                <iframe
                    // src="pano/pano1/index.html"
                    src="https://futeservices.com/25-26/V2/VR_10/index.html"
                    className="w-full h-full border-0 z-[4000]" // prevents iframe from blocking clicks
                    title="Pano2VR Tour"
                ></iframe>

                {/* Overlay Buttons bg-[rgb(253,175,23,0.7)]*/}
                <div className="absolute  top-0 right-4 h-full flex flex-col justify-center items-center z-30 pointer-events-auto">
                    <div className="flex w-full flex-col gap-2">
                        <button className="bg-white/80 text-gray-800/90 hover:text-black text-[14px] px-3 py-2 font-bold rounded-lg hover:bg-white transition-all duration-300"><Link to="/arena">THE ARENA</Link></button>

                         <button className="bg-white/80 text-gray-800/90 
                         hover:text-black text-[14px] px-3 py-2 font-bold 
                         rounded-lg hover:bg-white transition-all duration-300">
                            <Link to="https://elena.futeservices.in">ELENA</Link></button>
                        <button className="bg-white/80 text-gray-800/90 hover:text-black text-[14px] px-3 py-2 font-bold rounded-lg hover:bg-white transition-all duration-300">
                            <Link to="https://ebony.futeservices.in">
                                EBONY
                            </Link>
                        </button>
                        <button className="bg-white/80 text-gray-800/90 hover:text-black text-[14px] px-3 py-2 font-bold rounded-lg hover:bg-white transition-all duration-300">
                            {/* <Link to="https://hiranandanigoldenwillows.futeservices.in">GOLDEN WILLOWS</Link> */}
                            {/* <Link to="/goldenwillows">GOLDEN WILLOWS</Link>  */}
                            <Link to="https://hiranandanigoldenwillows.com">GOLDEN WILLOWS</Link>

                        </button>
                        <button className="bg-white/80 text-gray-800/90 hover:text-black text-[14px] px-3 py-2 font-bold rounded-lg hover:bg-white transition-all duration-300">
                            {/* <Link to="https://hiranandanigoldenwillows.com/club-house.php"> */}
                            <Link to="/club-house">
                                CLUB HOUSE</Link></button>


                        <button className="bg-white/80 text-gray-800/90 hover:text-black text-[14px] px-3 py-2 font-bold rounded-lg hover:bg-white transition-all duration-300">
                            {/* <Link to="https://hiranandanigoldenwillows.com/club-house.php"> */}
                            <Link to="/quality">
                                QUALITY</Link></button>




                    </div>
                </div>
            </div>

        </div>
    </>)
}