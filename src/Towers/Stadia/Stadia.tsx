// import bgImage from '../../assets/twr/Stadia Elev Interface.jpeg';
// import bgImage from '../../assets/twr/stadia_new1.png';
import bgImage from '../../assets/stadia_updated.png';
import { IoReturnUpBackOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { floorsData, description } from '../../data/StadiaData';
export default function Pavilion() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const [hoveredId, setHoveredId] = useState<number | null>(null);
=======
  const [hoveredFloor, setHoveredFloor] = useState<any>(null);
>>>>>>> 247eac6d217680a19084d5ce86928d96de4d94cd

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
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E8E8E8]">
      {/* Wrapper locked to exact dimensions matching viewBox (2979x1799) */}
      <div className="relative w-full max-h-screen aspect-[2979/1799]">

<<<<<<< HEAD
        <img
          src={bgImage}
          alt="Arena"
          className="absolute top-0 left-0 w-full h-full object-fill pointer-events-none"
        />

        <svg
          viewBox="0 0 2979 1815"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-auto"
        >
          {floorsData.map((floor) => (
            <polygon
              key={floor.id}
              points={floor.polygon}
              data-tooltip-id={`tooltip-${floor.id}`}
              fill={
                hoveredId === floor.id
                  ? floor.hoverColor || "rgba(255, 165, 0, 0.6)"
                  : "rgba(255, 165, 0, 0.1)" // Slight fill so you can verify visibility
              }
              // stroke={hoveredId === floor.id ? "#ff9800" : "transparent"}
              // strokeWidth="2"
              className="cursor-pointer transition-all duration-300 outline-none focus:outline-none focus:stroke-none"
              onMouseEnter={() => setHoveredId(floor.id)}
              onMouseLeave={() => setHoveredId(null)}
              onDoubleClick={() => navigate(`/arena_floorstadia/${floor.id}`)}
            />
          ))}
        </svg>
      </div>

      {/* 3. Tooltips mapped outside the SVG */}
      {floorsData.map((floor) => (
        <Tooltip
          key={`tooltip-${floor.id}`}
          id={`tooltip-${floor.id}`}
          place="right"
          content={floor.name}
          className="border-l-4 border-l-orange-700 rounded-md z-[999]"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "6px 12px",
            fontSize: "14px",
          }}
        />
      ))}

=======

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
        <defs>
          {floorsData.map((f: any) => (
            <linearGradient
              key={`gradient-${f.id}`}
              id={`gradient-${f.id}`}
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
        </defs>

        {floorsData.map((floor: any, index) => {
          const isActive = hoveredFloor?.id === floor.id
          // || selectedRow === index;
          return (
            <polygon
              key={floor.id}
              points={floor.polygon}
              data-tooltip-id={`tooltip-${floor.id}`}
              fill={isActive ? `url(#gradient-${floor.id})` : "transparent"}
              stroke={isActive ? "#E8941A" : "transparent"}
              strokeWidth={isActive ? "1.5" : "0"}
              strokeOpacity={isActive ? 0.6 : 0}
              className="cursor-pointer transition-all duration-300"
              style={{
                filter: isActive
                  ? "drop-shadow(0 0 6px rgba(245,166,35,0.35))"
                  : "none",
              }}
              // onClick={() => navigate(`/unitplan/${floor.id}`)}
              onDoubleClick={() => navigate(`/arena_floorstadia/${floor.id}`)}
              onMouseEnter={() => setHoveredFloor(floor)}
              onMouseLeave={() => setHoveredFloor(null)}
            />
          );
        })}
      </svg>

      {floorsData.map((floor: any, index) => {
        return (<Tooltip
          id={`tooltip-${floor.id}`}
          place="left"
          content={floor.name}
          className="border-r-4 border-r-orange-700 rounded-md"
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
>>>>>>> 247eac6d217680a19084d5ce86928d96de4d94cd

      {/* Back Button */}
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
