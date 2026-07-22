import { useNavigate, useParams } from "react-router-dom";
import { floors } from "../../data/StadiaData";
import { useState, useRef, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WithoutbgHeader from "../../components/WithoutbgHeader";
import type { RoomHotspot } from "../../types/room";

type LayoutType = "default" | "2D" | "2Dstatic";

export default function Unit_Stadia() {
  const { id } = useParams<{ id: string }>();
  const allUnits = floors.flatMap((f) => f.units);
  const singleUnit = id
    ? allUnits.find((u) => u.id === Number(id))
    : allUnits[0];
  const navigate = useNavigate();

  const [activeLayout, setActiveLayout] = useState<LayoutType>("default");
  const [zoomOpen, setZoomOpen] = useState(false);
  const [clickedRoomDefault, setClickedRoomDefault] = useState<number | null>(
    null
  );
  const [clickedRoom2D, setClickedRoom2D] = useState<number | null>(null);
  const [, setHoveredRoomDefault] = useState<number | null>(
    null
  );
  const [, setHoveredRoom2D] = useState<number | null>(null);

  // Reference to the image container to calculate relative tooltip positions
  const containerRef = useRef<HTMLDivElement>(null);

  const [svgTooltip, setSvgTooltip] = useState<{
    id: number;
    x: number;
    y: number;
    name: string;
    size: string;
  } | null>(null);

  // 1. Reset tooltips on layout change (Top-level Hook)
  useEffect(() => {
    setSvgTooltip(null);
    setClickedRoomDefault(null);
    setClickedRoom2D(null);
  }, [activeLayout]);

  // Fallback if unit not found
  if (!singleUnit) {
    return (
      <div className="flex flex-col w-full items-center justify-center bg-[#5d5c61] text-center p-6 h-screen">
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

  // Helper to get image based on active layout
  const getActiveImage = () => {
    if (activeLayout === "2D") return singleUnit.image2D;
    if (activeLayout === "2Dstatic") return singleUnit.image2Dstatic;
    return singleUnit.unitimage;
  };

  // 2. Click Handler for SVG Polygons
  const handlePolygonClick = (
    e: React.MouseEvent,
    room: RoomHotspot,
    layout: "default" | "2D"
  ) => {
    e.stopPropagation();
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (layout === "default") setClickedRoomDefault(room.id);
      else setClickedRoom2D(room.id);

      setSvgTooltip({
        id: room.id,
        x: x,
        y: y,
        name: room.name,
        size: room.size,
      });
    }
  };

  // 3. Click Handler for Sidebar Room items
  const handleSidebarRoomClick = (room: RoomHotspot) => {
    const isDefaultLayout = activeLayout === "default";

    // Update active highlight states
    if (isDefaultLayout) {
      setClickedRoomDefault(room.id);
    } else {
      setClickedRoom2D(room.id);
    }

    // Locate polygon in DOM to position tooltip directly over room on the 3D map
    const roomSvgElement = document.getElementById(`room-polygon-${room.id}`);

    if (roomSvgElement && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const roomRect = roomSvgElement.getBoundingClientRect();

      // Calculate center of polygon relative to container
      const x = roomRect.left + roomRect.width / 2 - containerRect.left;
      const y = roomRect.top + roomRect.height / 2 - containerRect.top;

      setSvgTooltip({
        id: room.id,
        x: x,
        y: y,
        name: room.name,
        size: room.size,
      });
    }
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-2 overflow-auto lg:overflow-hidden h-screen w-full bg-[#e8e8e8] select-none">
        <WithoutbgHeader />

        {/* Left sidebar - rooms list */}
        <div className="lg:w-[20%] w-full justify-center flex flex-col border-r p-4 rounded-lg mt-20 lg:mt-4 h-screen">
          <h3 className="bg-gradient-to-r from-[#e3a528] to-[#e8e8e8] border-l-4 border-[#b97f0b] text-[#333] text-center font-semibold mb-5 p-3 text-lg rounded-sm shadow-sm">
            {singleUnit.name}
          </h3>

          {activeLayout !== "2Dstatic" && (
            <div className="lg:max-h-[450px] max-h-[300px] overflow-y-scroll p-2 bg-[rgba(251,245,222,0.6)] rounded-md">
              {(activeLayout === "default"
                ? singleUnit.rooms
                : singleUnit.roomstatic
              )?.map((room: RoomHotspot, index: number) => {
                const isDefaultLayout = activeLayout === "default";
                const is2DLayout = activeLayout === "2D";

                let bgClass =
                  index % 2 === 0
                    ? "bg-[#f7f6f6] text-black"
                    : "bg-white text-black";

                if (isDefaultLayout && clickedRoomDefault === room.id) {
                  bgClass = "bg-[rgba(184,38,217,0.9)] text-white";
                }

                if (is2DLayout && clickedRoom2D === room.id) {
                  bgClass = "bg-[rgba(184,38,217,0.9)] text-white";
                }

                return (
                  <div
                    key={room.id}
                    onClick={() => handleSidebarRoomClick(room)}
                    onMouseEnter={() =>
                      isDefaultLayout
                        ? setHoveredRoomDefault(room.id)
                        : setHoveredRoom2D(room.id)
                    }
                    onMouseLeave={() =>
                      isDefaultLayout
                        ? setHoveredRoomDefault(null)
                        : setHoveredRoom2D(null)
                    }
                    className={`${bgClass} transition-all mb-1 ease-in-out duration-300 p-2 border rounded-lg flex justify-between items-center cursor-pointer`}
                  >
                    <h4 className="font-semibold text-[13px]">{room.name}</h4>
                    <p className="text-[12px]">{room.size}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Center area - image & SVG overlays */}
        <div className="lg:w-[65%] w-full h-full flex items-center justify-center relative">
          <div
            ref={containerRef}
            className="relative inline-block w-full h-full max-h-screen"
          >
            <img
              src={getActiveImage()}
              alt={singleUnit.name}
              className="w-full h-full object-contain cursor-zoom-in"
              onClick={() => setZoomOpen(true)}
            />

            {/* SVG OVERLAY */}
            {(activeLayout === "default" || activeLayout === "2D") && (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-auto"
                viewBox="0 0 3000 1688"
                preserveAspectRatio="xMidYMid meet"
                onClick={() => setSvgTooltip(null)}
              >
                {(activeLayout === "default"
                  ? singleUnit.rooms
                  : singleUnit.roomstatic
                )?.map((room: RoomHotspot) => (
                  <polygon
                    id={`room-polygon-${room.id}`}
                    key={room.id}
                    points={room.polygon}
                    fill={
                      (activeLayout === "default"
                        ? clickedRoomDefault
                        : clickedRoom2D) === room.id
                        ? "rgba(184, 38, 217, 0.4)"
                        : "transparent"
                    }
                    className="transition-colors duration-500 cursor-pointer"
                    onMouseEnter={(e) =>
                      handlePolygonClick(e, room, activeLayout as "default" | "2D")
                    }
                    onMouseLeave={() => setSvgTooltip(null)}
                    onClick={(e) =>
                      handlePolygonClick(e, room, activeLayout as "default" | "2D")
                    }
                  />
                ))}
              </svg>
            )}

            {/* DYNAMIC TOOLTIP */}
            {svgTooltip && (
              <div
                className="absolute pointer-events-none z-[999] bg-black/90 text-white text-xs px-3 py-2 rounded-md shadow-xl whitespace-nowrap border border-white/20 transition-all duration-300 ease-in-out"
                style={{
                  left: `${svgTooltip.x}px`,
                  top: `${svgTooltip.y}px`,
                  transform: "translate(-50%, -180%)",
                }}
              >
                <div className="font-bold border-b border-white/20 mb-1 pb-1">
                  {svgTooltip.name}
                </div>
                <div className="opacity-90">{svgTooltip.size}</div>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="lg:w-[15%] flex flex-col justify-center p-4 border-l mt-5">
          <div className="bg-[#f0eeee] p-4 rounded-sm flex flex-col gap-2">
            <Button
              fullWidth
              onClick={() => {
                if (activeLayout !== "default") {
                  setActiveLayout("default");
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
            {activeLayout === "default" && (
              <Button
                fullWidth
                onClick={() => setActiveLayout("2D")}
                sx={{
                  color: "white",
                  backgroundColor: "#fdaf17",
                  "&:hover": { backgroundColor: "#5d5c61" },
                }}
              >
                2D Unit Plan
              </Button>
            )}
            {activeLayout === "default" && (
              <Button
                fullWidth
                onClick={() => setActiveLayout("2Dstatic")}
                sx={{
                  color: "white",
                  backgroundColor: "#fdaf17",
                  "&:hover": { backgroundColor: "#5d5c61" },
                }}
              >
                2D Static
              </Button>
            )}

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

        {/* Custom Zoom Overlay */}
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

            <img
              src={getActiveImage()}
              alt="Zoomed"
              className="max-h-[92vh] max-w-[92vw] rounded-lg shadow-lg object-contain cursor-zoom-out"
              onClick={() => setZoomOpen(false)}
            />
          </div>
        )}
      </section>
    </>
  );
}