// import bgImage from '../../assets/twr/Stadia Elev Interface.jpeg';
// import bgImage from '../../assets/twr/stadia_new1.png';
import bgImage from '../../assets/stadia_updated.png';
import { IoReturnUpBackOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { floorsData, description } from '../../data/StadiaData';
export default function Pavilion() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleBack = () => navigate(-1);
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E8E8E8] select-none">
      {/* Wrapper locked to exact dimensions matching viewBox (2979x1799) */}
      <div className="relative w-full max-h-screen aspect-[2979/1799]">

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
