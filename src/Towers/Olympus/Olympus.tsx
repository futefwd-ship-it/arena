import bgImage from '../../assets/entrance_tower/Pavilion_interface.jpg';
import { IoReturnUpBackOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { floorsData, description } from '../../data/Olympus';

export default function Olympus() {
  const navigate = useNavigate();
  const [hoveredFloor, setHoveredFloor] = useState<null>(null);



  // Inside your component:
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkWidth = () => setIsLargeScreen(window.innerWidth >= 1024);

    // Initial check
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const handleBack = () => navigate(-1);
  return (
    <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">


      {/* <img src={bgImage} alt="Arena" className="w-full h-full object-contain lg:w-full lg:h-full lg:object-fill" /> */}


      {/* {floorsData.map((floor) => (
        <div key={floor.id}>
          
          <div
            data-tooltip-id={`tooltip-${floor.id}`}
            onDoubleClick={() => navigate(`/arena_floorpavilion/${floor.id}`)}
            className="absolute cursor-pointer rounded-sm  transition-all duration-300"
            style={{
              top: floor.top,
              left: floor.left,
              height: `${floor.height}px`,
              width: `${floor.width}px`,
              transform: "translate(-50%, -50%)",
              backgroundColor: hoveredId === floor.id ? floor.hoverColor : "transparent",
            }}
            onMouseEnter={() => setHoveredId(floor.id)}
            onMouseLeave={() => setHoveredId(null)}
          />

        
          <Tooltip
            id={`tooltip-${floor.id}`}
            place="right"
            content={floor.name}
            className="border-l-4 border-l-orange-700 rounded-md"
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "6px 12px",
              fontSize: "14px",
            }}
          />
        </div>
      ))}       
     */}


      {/* <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex items-center justify-center"> */}

      {/* 1. Hình nền tòa nhà */}
      <img
        src={bgImage}// Thay bằng đường dẫn ảnh của bạn
        alt="Building Skyline"
        className="absolute inset-0 w-full h-full object-contain lg:object-cover"

      />

      {/* 2. Lớp SVG vẽ vùng Highlight */}
      {/* ── Interactive SVG layer ── */}
      <svg
        viewBox={`0 0 3000 1688`}
        /* FIX 3: Changed from 'none' to 'xMidYMid slice'. 
          This forces the SVG vector layer to crop and scale exactly like the 'object-cover' image above,
          keeping coordinates seamlessly pinned together on mobile, tablets, and desktops.
        */
        // preserveAspectRatio="xMidYMid slice"
        preserveAspectRatio={isLargeScreen ? "xMidYMid slice" : "xMidYMid meet"}
        className="absolute inset-0 w-full h-full z-20 pointer-events-auto"
        aria-hidden="true"
      >
        {/* <defs>
            {floorsData.map((f) => (
              <linearGradient
                key={f.gradientId}
                id={f.gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#fac870" stopOpacity="0.10" />
                <stop offset="45%" stopColor="#fac870" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#fac870" stopOpacity="0.35" />
                <stop offset="68%" stopColor="#E8941A" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#E8941A" stopOpacity="0.55" />
                <stop offset="78%" stopColor="#E8941A" stopOpacity="0.60" />
                <stop offset="100%" stopColor="#fac870" stopOpacity="0.65" />
              </linearGradient>
            ))}
          </defs> */}

        {floorsData.map((floor: any, _index) => {
          const isActive = hoveredFloor?.id === floor.id
          // || selectedRow === index;
          return (
            <polygon
              key={floor.id}
              points={floor.polygon}
              fill={isActive ? `url(#${floor.gradientId})` : "transparent"}
              strokeOpacity={isActive ? 0.6 : 0}
              className="cursor-pointer transition-all duration-300"
              style={{
                filter: isActive
                  ? "drop-shadow(0 0 6px rgba(245,166,35,0.35))"
                  : "none",
              }}
              // onClick={() => navigate(`/unitplan/${floor.id}`)}
              onDoubleClick={() => navigate(`/arena_floorolympus/${floor.id}`)}
              onMouseEnter={() => setHoveredFloor(floor)}
              onMouseLeave={() => setHoveredFloor(null)}
            />
          );
        })}
      </svg>

      {floorsData.map((floor: any, _index) => {
        return (<Tooltip
          id={`tooltip-${floor.id}`}
          place="right"
          content={floor.name}
          className="border-l-4 border-l-orange-700 rounded-md"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "6px 12px",
            fontSize: "14px",
          }}
        />)
      })}

      {/* ── Tooltip ── 
        {hoveredFloor && (() => {
          const { x, y } = svgToPercent(hoveredFloor.tooltipX, hoveredFloor.tooltipY);
          return (
            <div
              className="absolute z-30 flex items-center pointer-events-none transition-all duration-150"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translateY(-50%)",
              }}
            >
             
              <ArrowPointer />

             
              <div
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "1px",
                }}
                /* FIX 4: Added mobile padding boundaries and smaller base text sizes 
                  via Tailwind responsive variants so the tooltip isn't oversized sm:p-[7px_14px_8px] on mobile.
              
                className="text-white font-sans bg-gradient-to-r from-[#F5C369]/50
                 via-transparent to-transparent backdrop-blur-sm flex flex-col justify-center 
                 gap-0.5 py-[9px] px-1.5 min-w-[90px]  sm:min-w-[110px]"
              >
                <span className="text-[9px] sm:text-[11px] font-medium tracking-wide
                 leading-tight opacity-80">
                  {hoveredFloor.name}
                </span>
                <span className="font-light text-[10px]  tracking-wide leading-tight text-white">
                  {/* {hoveredFloor.sqft}  {hoveredFloor.title}
                </span>
              </div>
            </div>
          );
        })()}*/}

      {/* </div> */}
      <div
        onClick={handleBack}
        className="absolute bottom-5 left-2 p-2 bg-black/50 w-[55px] h-[55px] flex items-center justify-center rounded-full z-20 cursor-pointer hover:bg-black/70 transition"
      >
        <IoReturnUpBackOutline size={40} color="white" />
      </div>

      {/* Content Box */}
      <div className="absolute z-20 bottom-[5%] md:bottom-48 lg:bottom-16 right-20 md:right-2 p-10 bg-black/60 rounded-xl max-w-lg text-center text-white">
        {description.map((item, index) => (
          <div key={index}>
            <p className="mb-2 font-semibold">Tower Name: {item.towerName}</p>
            <p>
              Configuration Available: <br /> {item.configuration}
            </p>
          </div>
        ))}
      </div>



    </div>
  );
}
