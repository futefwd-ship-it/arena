import { useState } from 'react';
import image from '../../assets/goldenwillows/master_goldenwillows.jpg';
import WithoutbgHeader from '../../components/WithoutbgHeader';
import Tooltip from '@mui/material/Tooltip';
import { data } from '../../data/GoldenMasterPlanData';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/goldenwillows/masterplannewimage.webp'

export default function GoldenWillowsLayout() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [showVideo, setShowVideo] = useState(false);
    const [showImage, setShowImage] = useState(false);


    const uniqueAmenities = [
        ...new Map(data.map(item => [item.id, item])).values()
    ];

    const navigate = useNavigate();

    // Utility function to calculate centroid of a polygon
    function getPolygonCentroid(points: string) {
        const pts = points.split(" ").map(p => p.split(",").map(Number));
        let x = 30, y = 32;
        const len = pts.length;
        pts.forEach(([px, py]) => {
            x += px;
            y += py;
        });
        return [x / len, y / len]; // centroid x, y
    }



    return (<>

        <div className="h-screen w-screen flex flex-col-reverse gap-4 lg:flex-row relative bg-contain bg-no-repeat overflow-auto lg:overflow-hidden bg-center"

        >
            <WithoutbgHeader />
            <div className='xl:w-[30%] lg:w-[60%] w-full flex justify-centeritems-center bg-gray-50  px-3 py-1 '>
                <div className=' lg:overflow-y-scroll  h-[30%] md:h-[30%] lg:h-[90%] mt-1 lg:mt-20  w-full p-3 bg-[rgb(224,226,225,0.2)]  scrollbar-thin scrollbar-thumb-[#e6a524] scrollbar-track-transparent'>
                    {uniqueAmenities.map((item) => (
                        <div
                            key={item.id}

                        >
                            <div className='py-[4px] bg-gradient-to-r bg-white/10  text-black/85 font-medium px-4 '>{item.heading}</div>

                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelectedId(item.id)}
                                className={`cursor-pointer transition flex items-center px-3 py-2 gap-2 
        ${selectedId === item.id
                                        ? "bg-[#e6a524] text-white rounded-lg"
                                        : hoveredId === item.id
                                            ? "bg-[#e6a524] text-black rounded-lg"
                                            : "text-black/80 font-medium"
                                    }`}
                            >
                                <button
                                    className="bg-black/50 shadow-lg rounded-full text-center text-white w-6 h-6 flex items-center justify-center text-xs"
                                >
                                    {item.id}
                                </button>

                                <span className="whitespace-normal break-words w-full">
                                    {item.title}
                                </span>
                            </div></div>
                    ))}
                </div>
            </div>
            <div className='xl:w-[55%] lg-[60%] w-full flex justify-center items-center p-5 ' >

                <svg viewBox='0 0  3592 3592' className='w-full -auto' preserveAspectRatio="xMidYMid meet">

                    <image href={image} x="0" y="0" width="3592" height="3592" />

                    {data.map((item) => {

                        return (<g key={item.id}>
                            <Tooltip title={item.title} placement='top'
                                open={selectedId === item.id}

                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            backgroundColor: '#211832',
                                            color: 'white',
                                            fontSize: '14px',
                                            padding: '6px 10px',
                                            borderRadius: '4px',
                                        }
                                    }
                                }}
                            >
                                <polygon

                                    points={item.polygon}
                                    fill={


                                        selectedId === item.id
                                            ? "#ED3F27"
                                            : hoveredId === item.id
                                                ? "#842A3B"
                                                : "yellow"

                                    }

                                    //    fill = {
                                    //         selectedId === item.id
                                    //         ? "rgba(237, 63, 39, 0.8)"  // red with 80% opacity
                                    //         : hoveredId === item.id
                                    //             ? "rgba(132, 42, 59, 0.8)"  // dark pink/purple with 80% opacity
                                    //             : "rgba(255, 255, 0, 0.5)"  // yellow with 50% opacity
                                    // }

                                    // stroke="black"
                                    strokeWidth={2}
                                    cursor="pointer"
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    onClick={() => setSelectedId(item.id)}
                                />


                            </Tooltip>
                            {/* Text at centroid */}
                            {(() => {
                                const [cx, cy] =item.textPos || getPolygonCentroid(item.polygon);
                                return (
                                    <text
                                        x={cx}
                                        y={cy}
                                        fontSize="35"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill={
                                            selectedId === item.id
                                                ? "black"
                                                : hoveredId === item.id
                                                    ? "white"
                                                    : "black"
                                        }
                                    >
                                        {item.id}
                                    </text>
                                );
                            })()}

                        </g>)
                    })}


                </svg>

            </div>

            <div className='lg:w-[30%] xl:w-[20%] lg:mt-10 w-full  justify-center  items-center flex flex-col gap-3 md:mt-20 mt-20 '>

                <button onClick={() => navigate(-1)} className='rounded-lg transition-all text-sm duration-300 ease-in-out py-3 w-[70%] 
                bg-[#e6a524] hover:bg-black text-white '>GO BACK</button>
                <button onClick={() => setShowVideo(true)} className='rounded-lg text-sm transition-all duration-300 ease-in-out py-3 w-[70%] bg-gray-500/90 hover:bg-black text-white'>WALKTHROUGH</button>


                <button onClick={() => setShowImage(true)} className='rounded-lg transition-all text-sm duration-300 ease-in-out py-3 w-[70%] bg-gray-500/90 hover:bg-black text-white '>ZOOM IMAGE</button>

            </div>

            {showVideo && (
                <div className='w-full h-full absolute top-0 left-0 bg-black/90 z-50 flex justify-center items-center p-5'>

                    {/* Close button */}
                    <button
                        onClick={() => setShowVideo(false)}
                        className="absolute top-2  right-2 bg-black/80 text-white px-3 py-3 rounded-lg text-[16px] font-bold hover:bg-black/80 transition"
                    >
                        ✕ Close
                    </button>
                    <iframe
                        src="https://fast.wistia.net/embed/iframe/tc3gj6wsb0?videoFoam=true&autoplay=1&muted=1&playbar=false"

                        className="w-[85%] h-full"
                        allow="autoplay; fullscreen"
                    />

                </div>
            )}

            {showImage && (
                <div className='w-full h-full absolute top-0 left-0 bg-black/80 z-50 flex justify-center items-center p-5'>

                    <button
                        onClick={() => setShowImage(false)}
                        className="absolute top-2 right-2 bg-black/60 text-white px-3 py-1  rounded-lg text-[16px] font-bold hover:bg-black/80 transition"
                    >
                        ✕ Close
                    </button>
                    <img src={image1} alt="Golden Willows Master Plan" className='w-[85%] h-full' />

                </div>
            )}


        </div>

    </>)
}