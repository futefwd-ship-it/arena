// Unit_Pavilion.tsx (or .jsx if not using TSX, just remove type annotations)
import { useNavigate, useParams } from "react-router-dom";
import { floors } from '../../data/GreenfieldData';
import { useState } from "react";
import { Tooltip, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WithoutbgHeader from "../../components/WithoutbgHeader";
import type { RoomHotspot } from "../../types/room";

type LayoutType = "default" | "2D"  | "2Dstatic";

export default function Unit_Greenfield() {
  const { id } = useParams<{ id: string }>();
  const allUnits = floors.flatMap(f => f.units);
  const singleUnit = id ? allUnits.find((u) => u.id === Number(id)) : allUnits[0];

  const navigate = useNavigate();

  // Which layout is currently active
  const [activeLayout, setActiveLayout] = useState<LayoutType>("default");

  // Zoom overlay open
  const [zoomOpen, setZoomOpen] = useState(false);

  // Interaction states for default (unitimage)
  const [selectedRoomDefault, setSelectedRoomDefault] = useState<number | null>(null);
  const [hoveredRoomDefault, setHoveredRoomDefault] = useState<number | null>(null);
  const [clickedRoomDefault, 
    // setClickedRoomDefault
  ] = useState<number | null>(null);

  // Interaction states for 2D (image2D / roomstatic)
  const [selectedRoom2D, setSelectedRoom2D] = useState<number | null>(null);
  const [hoveredRoom2D, setHoveredRoom2D] = useState<number | null>(null);
  const [clickedRoom2D,
    //  setClickedRoom2D
    ] = useState<number | null>(null);

  // fallback if unit not found
  if (!singleUnit) {
    return (
      <div className="flex flex-col w-full items-center justify-center bg-[#5d5c61] text-center p-6 h-screen ">
        <div className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md mb-4">
          Unit not found.
        </div>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded-lg border border-white/70 text-white hover:bg-white hover:text-[#5d5c61] transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Determine which image to show in center (for normal view and zoom)
  const getActiveImage = () => {
    if (activeLayout === "2D") return singleUnit.image2D;
    // if (activeLayout === "3D") return singleUnit.image3D;
    if(activeLayout==="2Dstatic") return singleUnit.image2Dstatic;
    return singleUnit.unitimage; // default
  };

  return (
    <>
      <section className="flex gap-2 flex-col lg:flex-row  overflow-auto lg:overflow-hidden h-screen w-full p-2 bg-[#e8e8e8] select-none">
        <WithoutbgHeader />

        {/* Left sidebar - rooms list for whichever layout */}
        <div className="lg:w-[20%] w-full flex-shrink-0 justify-center flex flex-col border-r p-4 rounded-lg mt-20 lg:mt-0 lg:h-full">
          <h3 className="bg-gradient-to-r from-[#e3a528] to-[#e8e8e8] border-l-4 border-[#b97f0b] text-[#333] text-center font-semibold mb-5 p-3 text-lg rounded-sm shadow-sm">
            {singleUnit.name}
          </h3>

        {activeLayout !== "2Dstatic" &&( 
           <div className="lg:max-h-[450px] max-h-[270px] overflow-y-scroll p-2 bg-[rgba(251,245,222,0.6)] rounded-md ">
            {/* Show the list from rooms (default) or roomstatic (2D) depending on activeLayout */}
            {(activeLayout === "default" ? singleUnit.rooms : singleUnit.roomstatic)?.map((room: RoomHotspot, index: number) => {
              // choose states depending on layout
              const isDefaultLayout = activeLayout === "default";

              let bgClass = index % 2 === 0 ? "bg-[#f7f6f6] text-black" : "bg-white text-black";

              if (isDefaultLayout) {
                if (selectedRoomDefault === room.id) bgClass = "bg-[rgba(184,38,217,0.9)] text-black";
                else if (clickedRoomDefault === room.id) bgClass = "bg-[rgba(255,165,0,0.7)] text-white";
                else if (hoveredRoomDefault === room.id) bgClass = "bg-[rgba(184,38,217,0.9)] text-black";
              } else {
                // 2D layout
                if (selectedRoom2D === room.id) bgClass = "bg-[rgba(184,38,217,0.9)] text-black";
                else if (clickedRoom2D === room.id) bgClass = "bg-[rgba(255,165,0,0.7)] text-white";
                else if (hoveredRoom2D === room.id) bgClass = "bg-[rgba(184,38,217,0.9)] text-black";
              }

              return (
                <div
                  key={room.id}
                  onMouseEnter={() => isDefaultLayout ? setHoveredRoomDefault(room.id) : setHoveredRoom2D(room.id)}
                  onMouseLeave={() => isDefaultLayout ? setHoveredRoomDefault(null) : setHoveredRoom2D(null)}
                  // onClick={() => isDefaultLayout ? setClickedRoomDefault(room.id) : setClickedRoom2D(room.id)}
                  className={`${bgClass} transition-all mb-1 ease-in-out duration-300 p-2 border rounded-lg flex justify-between items-center`}
                >
                  <h4 className="font-semibold text-[13px]">{room.name}</h4>
                  <p className="text-[12px]">{room.size}</p>
                </div>
              );
            })}
          </div>)}
        </div>

        {/* Center area - main image and SVG overlays */}
        <div className="flex-1 min-w-0 w-full justify-center h-full items-center flex">
          <div className="relative flex justify-center items-center w-full h-full p-2">

            {/* Active image */}
            <img
              src={getActiveImage()}
              alt={singleUnit.name}
              className="w-full h-full rounded-lg shadow-md shadow-black/30 object-contain"
              // clicking center image opens zoom (custom fullscreen)
              onClick={() => setZoomOpen(true)}
              style={{ cursor: "zoom-in" }}
            />

            {/* SVG overlays for polygons: show only for default and 2D */}
            {activeLayout === "default" && singleUnit.rooms && (
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1688">
                {singleUnit.rooms.map((room: RoomHotspot) => (
                  <Tooltip
                    key={`r-default-${room.id}`}
                    title={`${room.name} - ${room.size}`}
                    arrow
                    placement="top"
                    slotProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: "rgba(0,0,0,0.7)",
                          color: "white",
                          fontSize: "14px",
                          padding: "6px 12px",
                        }
                      },
                      arrow: { sx: { color: "rgba(0,0,0,0.7)" } }
                    }}
                  >
                    <polygon
                      points={room.polygon}
                      fill={
                        clickedRoomDefault === room.id
                          // ? "rgba(255, 165, 0, 0.7)"
                          ?"rgba(184, 38, 217, 0.5)"
                          : selectedRoomDefault === room.id
                            ? "rgba(184, 38, 217, 0.5)"
                            : hoveredRoomDefault === room.id
                              ? "rgba(184, 38, 217, 0.5)"
                              : "transparent"
                      }
                      strokeWidth="4"
                      onMouseEnter={() => setSelectedRoomDefault(room.id)}
                      onMouseLeave={() => setSelectedRoomDefault(null)}
                         onClick={() => setSelectedRoomDefault(room.id)}
                      // onClick={() => setClickedRoomDefault(room.id)}
                      style={{ cursor: "pointer", transition: "fill 0.3s ease-in-out, stroke 0.3s ease-in-out" }}
                    />
                  </Tooltip>
                ))}
              </svg>
            )}

            {activeLayout === "2D" && singleUnit?.roomstatic && (
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1688">
                {singleUnit?.roomstatic.map((room: RoomHotspot) => (
                  <Tooltip
                    key={`r-2d-${room.id}`}
                    title={`${room.name} - ${room.size}`}
                    arrow
                    placement="top"
                    slotProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: "rgba(0,0,0,0.7)",
                          color: "white",
                          fontSize: "14px",
                          padding: "6px 12px",
                        }
                      },
                      arrow: { sx: { color: "rgba(0,0,0,0.7)" } }
                    }}
                  >
                    <polygon
                      points={room.polygon}
                      fill={
                        clickedRoom2D === room.id
                          // ? "rgba(255, 165, 0, 0.7)"
                          ?"rgba(184, 38, 217, 0.5)"
                          : selectedRoom2D === room.id
                            ? "rgba(184, 38, 217, 0.5)"
                            : hoveredRoom2D === room.id
                              ? "rgba(184, 38, 217, 0.5)"
                              : "transparent"
                      }
                      strokeWidth="4"
                      onMouseEnter={() => setSelectedRoom2D(room.id)}
                      onMouseLeave={() => setSelectedRoom2D(null)}
                      // onClick={() => setClickedRoom2D(room.id)}
                         onClick={() => setSelectedRoomDefault(room.id)}
                      style={{ cursor: "pointer", transition: "fill 0.3s ease-in-out, stroke 0.3s ease-in-out" }}
                    />
                  </Tooltip>
                ))}
              </svg>
            )}

          </div>
        </div>

        {/* Right sidebar - same UI buttons & features */}
        <div className="lg:w-[15%] flex-shrink-0 flex flex-col justify-center p-4 border-l mt-5 lg:mt-0 lg:h-full">
          <div className="bg-[#f0eeee] p-4 rounded-sm flex flex-col gap-2">
            <Button
              fullWidth
              onClick={() => {
                if (activeLayout !== "default") {
                  setActiveLayout("default")
                } else {
                  navigate(-1);
                }
              }}
              sx={{
                color: "white",
                backgroundColor: "#fdaf17",
                "&:hover": { backgroundColor: "#5d5c61" },
              }}
            >
              Go Back
            </Button>
            {activeLayout === "default" && (<Button
              fullWidth
              onClick={() => setActiveLayout("2D")}
              sx={{
                color: "white",
                backgroundColor: "#fdaf17",
                "&:hover": { backgroundColor: "#5d5c61" },
              }}
            >
              2D Unit Plan
            </Button>)}
            {/* Keep same UI: buttons now set activeLayout */}
            {activeLayout === "default" && (<Button
              fullWidth
              onClick={() => setActiveLayout("2Dstatic")}
              sx={{
                color: "white",
                backgroundColor: "#fdaf17",
                "&:hover": { backgroundColor: "#5d5c61" },
              }}
            >
              2D Static
            </Button>)}



            {/* <Button
              fullWidth
              onClick={() => setActiveLayout("3D")}
              sx={{
                color: "white",
                backgroundColor: "#fdaf17",
                "&:hover": { backgroundColor: "#5d5c61" },
              }}
            >
              3D Unit Plan
            </Button> */}

            <Button
              fullWidth
              onClick={() => setZoomOpen(true)}
              sx={{
                color: "white",
                backgroundColor: "#fdaf17",
                "&:hover": { backgroundColor: "#5d5c61" },
              }}
            >
              Zoom
            </Button>
          </div>

          {/* Apartment features list stays same */}
          <div className="max-h-72 overflow-y-scroll p-4 bg-[rgba(251,245,222,0.6)] rounded-md mt-4">
            <h3 className="font-bold text-[12px]">APARTMENT FEATURES</h3>
            <ul className="list-disc list-inside mt-2 text-[10px] space-y-2">
              <li className="border-t">Air-conditioned living, dining and bedroom with split units.</li>
              <li className="border-t">Wide sundecks with hook for swing and provision for recessed lights.</li>
              <li className="border-t">Large format vitrified tiles in all rooms & anti-skid tiles in balcony.</li>
              <li className="border-t">Heavy-duty aluminum single glazed windows.</li>
              <li className="border-t">High quality modular electrical switches & waterproof balcony switches.</li>
              <li className="border-t">Main entrance door in veneer with melamine finish, laminate on internal doors.</li>
              <li className="border-t">Video door phone with intercom.</li>
              <li className="border-t">Fully finished toilets with premium sanitary fittings, geyser, mirror, lights & glass partition.</li>
              <li className="border-t">High-quality non-corrosive plumbing.</li>
            </ul>
          </div>
        </div>

        {/* ================= Custom Zoom Overlay ================= */}
        {zoomOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90">
            <IconButton
              onClick={() => setZoomOpen(false)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.6)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                zIndex: 1100,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Zoomed image (clicking it will close zoom) */}
            <img
              src={getActiveImage()}
              alt="Zoomed"
              className="max-h-[92vh] max-w-[92vw] rounded-lg shadow-lg object-contain"
              onClick={() => setZoomOpen(false)}
              style={{ cursor: "zoom-out" }}
            />
          </div>
        )}
      </section>
    </>
  );
}
