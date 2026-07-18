import bgImage from '../../assets/twr/greenfieldtower.jpg';
import { IoReturnUpBackOutline } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { floorsData ,description} from '../../data/GreenfieldData';
export default function GreenField() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleBack = () => navigate(-1);
  return (
    <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">

      {/* Background Image */}
      <img src={bgImage} alt="Arena" className="w-full h-full lg:object-fill object-contain" />

      {/* Floor Hotspots */}
      {floorsData.map((floor) => (
        <div key={floor.id}>
          {/* Hotspot */}
          <div
            data-tooltip-id={`tooltip-${floor.id}`}
            onDoubleClick={() => navigate(`/arena_floorgreenfield/${floor.id}`)}
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

          {/* Tooltip */}
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

      {/* Back Button */}
      <div
        onClick={handleBack}
        className="absolute bottom-5 left-2 p-2 bg-black/50 w-[55px] h-[55px] flex items-center justify-center rounded-full z-20 cursor-pointer hover:bg-black/70 transition"
      >
        <IoReturnUpBackOutline size={40} color="white" />
      </div>

     

      {/* Content Box */}
            <div className="absolute z-20 lg:bottom-16 bottom-20 md:bottom-56 right-20 lg:right-2 md:right-5 p-10 bg-black/60 rounded-xl max-w-lg text-center text-white">
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
