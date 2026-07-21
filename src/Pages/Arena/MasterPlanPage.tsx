import { useState } from 'react';

// import masterPlan from '../../assets/arena_masterplan4.png';
import masterPlan from '../../assets/MASTERPLAN-5.png';
// import masterPlan from '../../assets/masterplan_new_18_7_2026.webp';

// import Header from '../components/Header';
// bg-gradient-to-b hover:bg-gradient-to-t hover:from-[#e6a524]  hover:to-[#696a68] from-[#e6a524]  to-[#696a68]
import Tooltip from '@mui/material/Tooltip';

import { amenities } from '../../data/Aminities';
import MasterPlanDescription from '../../components/MasterPlanDescription';

import { RiShareForwardLine } from "react-icons/ri";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';



export default function MasterPlanPage() {
    const [hoveredId, setHoveredId] = useState<Number | null>(null);
    const [selectedId, setSelectedId] = useState<Number | null>(null);

    // ...new Map gives unique values
    const uniqueAmenities = [...new Map(amenities.map(item => [item.id, item])).values()];


    // State
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15;

    // Slice amenities
    const startIndex = currentPage * itemsPerPage;
    const visibleAmenities = uniqueAmenities.slice(startIndex, startIndex + itemsPerPage);

    // Functions
    const handleNext = () => {
        if ((currentPage + 1) * itemsPerPage < uniqueAmenities.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div className='bg-[#696a68] overflow-auto lg:overflow-hidden justify-center items-center flex flex-col lg:flex-row w-full h-screen'>
         
            <div className='lg:w-[35%] w-full bg-[#5d5c61] h-screen'>

                <div className='  text-white py-5 px-5 mt-[30%] lg:mt-5'>
                    <h3 className='text-sm mt-2 mb-10 lg:mb-5 font-bold  '>PROPOSED FUTURE AMENITIES *</h3>
                    <div className='flex gap-3  text-[12px]'>
                        <button className='  rounded-lg flex gap-2 justify-items-center items-center'><div className='w-2 h-2 rounded-full bg-[#e6f100]'></div>PHASE-1</button>
                        <button className=' rounded-lg flex gap-2 justify-items-center items-center'><div className='w-2 h-2 rounded-full bg-[#add8e6]'></div>PHASE-2</button>
                    </div>
                </div>


                <div className='p-2 flex-wrap text-white text-sm flex flex-col gap-2 h-auto '>

                    {/* Left side (1–20) */}
                    <div className="md:space-y-[2px] lg:space-y-[3px] xl:space-y-[3.3px] 2xl:space-y-[3.3px] 3xl:space-y-[15px] 4xl:space-y-[15px]">
                        {visibleAmenities.map((item) => (

                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelectedId(item.id)} // click handler
                                className={`cursor-pointer transition flex items-center p-1 gap-2
                                    ${selectedId === item.id
                                        ? "bg-[#e6a524] text-white rounded-lg"   // clicked color
                                        : hoveredId === item.id
                                            ? "bg-white text-black rounded-lg"     // hover color
                                            : "text-white"
                                    }`}
                            >
                                <button
                                    className="bg-black/50 shadow-lg rounded-full text-center text-white w-6 h-6 flex items-center justify-center text-xs"
                                >
                                    {item.id}
                                </button>

                                {/* Make text wrap nicely */}
                                <span className="whitespace-normal break-words w-full">
                                    {item.title}
                                </span>
                            </div>

                        ))}
                    </div>
                </div>
                <div className="flex gap-4 text-[20px] absolute lg:top-10 top-8 left-6 md:top-12 md:left-[82%] lg:left-[20%]">
                    <button onClick={handlePrev} className="bg-white/50 px-4 py-1 rounded-lg text-white font-bold hover:bg-white/70 transition">
                        <TiArrowBackOutline />
                    </button>
                    <button onClick={handleNext} className="bg-white/50 px-4 py-1 rounded-lg text-white font-bold hover:bg-white/70 transition">
                        <RiShareForwardLine />
                    </button>
                </div>
            </div>
            {/* Master Plan SVG */}
            <div className='lg:w-[80%] w-full md:p-10 p-2 justify-center items-center flex flex-col'>
            <Link to="/arena_walkthrough"><button className="absolute right-[2.5%] top-[14%] md:top-[15%] lg:top-[10%] bg-white/80 hover:bg-[rgb(230,165,36)] hover:text-white font-medium transition-all duration-300 ease-in-out rounded-full text-[16px] hover:text-[17px]
             w-auto px-3 h-[6%]">
                Walkthrough

            </button></Link>
                <svg
                    viewBox="0 0 3194 2250"

                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >

                    {/* Correct Image inside SVG */}
                    <image href={masterPlan} x="0" y="0" width="3194" height="2250" />

                    {/* Circle markers */}
                    {amenities.map((item) => {
                        const [cx, cy] = item.coords.split(",").map(Number);

                        return (
                            <g key={item.id}>
                                <Tooltip
                                    title={item.title}
                                    placement="top"
                                    // open={hoveredId === item.id || selectedId === item.id}
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
                                    <circle
                                        cx={cx}
                                        cy={cy}
                                        r={hoveredId === item.id ? 28 : 25}
                                        fill={
                                            item.id >= 49 && item.id <= 88
                                                ? (selectedId === item.id
                                                    ? "#ED3F27"
                                                    : hoveredId === item.id
                                                        ? "#842A3B"
                                                        : "lightblue"
                                                )
                                                : (selectedId === item.id
                                                    ? "#ED3F27"
                                                    : hoveredId === item.id
                                                        ? "#842A3B"
                                                        : "yellow"
                                                )
                                        }
                                        stroke="black"
                                        strokeWidth={2}
                                        cursor="pointer"
                                        onMouseEnter={() => setHoveredId(item.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        onClick={() => setSelectedId(item.id)}
                                    />
                                </Tooltip>

                                <text
                                    x={cx}
                                    y={cy}
                                    fontSize="28"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill={
                                        item.id >= 49 && item.id <= 88
                                            ? (selectedId === item.id
                                                ? "black"
                                                : hoveredId === item.id
                                                    ? "white"
                                                    : "black"
                                            )
                                            : (selectedId === item.id
                                                ? "black"
                                                : hoveredId === item.id
                                                    ? "white"
                                                    : "black"
                                            )
                                    }
                                >
                                    {item.id}
                                </text>
                            </g>
                        );
                    })} </svg>



                {/* Right Side */}
                <MasterPlanDescription />

            </div>

            {/* <Navbar /> */}

        </div >
    );
}
