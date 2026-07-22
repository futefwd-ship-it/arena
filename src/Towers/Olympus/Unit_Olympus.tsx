import { useNavigate, useParams } from "react-router-dom";
import { floors } from '../../data/Olympus';
import { useState, useRef, useEffect } from "react";
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WithoutbgHeader from "../../components/WithoutbgHeader";

type LayoutType = "default" | "2D" | "2Dstatic";

export default function Unit_Olympus() {
    const { id } = useParams<{ id: string }>();
    const allUnits = floors.flatMap(f => f.units);
    const singleUnit = id ? allUnits.find((u) => u.id === Number(id)) : allUnits[0];
    const navigate = useNavigate();

    const [activeLayout, setActiveLayout] = useState<LayoutType>("default");
    const [zoomOpen, setZoomOpen] = useState(false);

    const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

    // Reference to the image container to calculate relative tooltip positions
    const containerRef = useRef<HTMLDivElement>(null);

    const [svgTooltip, setSvgTooltip] = useState<{
        id: number;
        x: number;
        y: number;
        name: string;
        size: string;
    } | null>(null);

    // fallback if unit not found
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

    useEffect(() => {
        setSvgTooltip(null);

        setHoveredRoom(null);
    }, [activeLayout]);

    const getActiveImage = () => {
        if (activeLayout === "2D") return singleUnit.image2D;
        if (activeLayout === "2Dstatic") return singleUnit.image2Dstatic;
        return singleUnit.unitimage;
    };

    const handleMouseEnter = (e: React.MouseEvent, room: any) => {
        setHoveredRoom(room.id);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setSvgTooltip({
                id: room.id,
                x: x,
                y: y,
                name: room.name,
                size: room.size,
            });
        }
    };


    const handleMouseLeave = () => {
        setHoveredRoom(null);
        setSvgTooltip(null);
    };
    return (
        <>
            <section className="flex flex-col lg:flex-row gap-2 overflow-auto lg:overflow-hidden h-screen w-full p-2 bg-[#e8e8e8] select-none">
                <WithoutbgHeader />

                {/* Left sidebar - rooms list for whichever layout */}
                <div className="lg:w-[20%] w-full flex-shrink-0 justify-center flex flex-col border-r p-4 rounded-lg mt-20 lg:mt-0 lg:h-full">
                    <h3 className="bg-gradient-to-r from-[#e3a528] to-[#e8e8e8] border-l-4 border-[#b97f0b] text-[#333] text-center font-semibold mb-5 p-3 text-lg rounded-sm shadow-sm">
                        {singleUnit.name}
                    </h3>

                    {activeLayout !== "2Dstatic" && (
                        <div className="lg:max-h-[450px] max-h-[300px] overflow-y-scroll p-2 bg-[rgba(251,245,222,0.6)] rounded-md ">
                            {/* Show the list from rooms (default) or roomstatic (2D) depending on activeLayout */}
                            {/* {(activeLayout === "default" ? singleUnit.rooms : singleUnit.roomstatic)?.map((room: any, index: number) => {
                // choose states depending on layout
                const isDefaultLayout = activeLayout === "default";
                 const is2DLayout = activeLayout === "2D";

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
                } */}


                            {(activeLayout === "default"
                                ? singleUnit.rooms
                                : singleUnit.roomstatic
                            )?.map((room: any, index: number) => {

                                const isDefaultLayout = activeLayout === "default";
                                const is2DLayout = activeLayout === "2D";

                                let bgClass =
                                    index % 2 === 0
                                        ? "bg-[#f7f6f6] text-black"
                                        : "bg-white text-black";

                                 if (hoveredRoom === room.id) {
                                     bgClass = "bg-[rgba(184,38,217,0.9)] text-white";

                                 }

                                 return (
                                     <div
                                         key={room.id}
                                         onMouseEnter={() => setHoveredRoom(room.id)}
                                         onMouseLeave={() => setHoveredRoom(null)}

                                         className={`${bgClass} transition-all mb-1 ease-in-out duration-300 p-2 border rounded-lg flex justify-between items-center cursor-pointer`}
                                     >
                                        <h4 className="font-semibold text-[13px]">{room.name}</h4>
                                        <p className="text-[12px]">{room.size}</p>
                                    </div>
                                );
                            })}
                        </div>)}
                </div>

                {/* Center area - main image and SVG overlays */}
                {/* CENTER AREA - TOOLTIP FIXED HERE */}
                <div className="flex-1 min-w-0 w-full h-full flex items-center justify-center relative">
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
                                 {(activeLayout === "default" ? singleUnit.rooms : singleUnit.roomstatic)?.map((room: any) => (
                                     <polygon
                                         key={room.id}
                                         points={room.polygon}
                                         fill={hoveredRoom === room.id ? "rgba(184, 38, 217, 0.4)" : "transparent"}
                                         className="transition-colors duration-300 cursor-pointer focus:outline-none outline-none"
                                         onMouseEnter={(e) => handleMouseEnter(e, room)}
                                         onMouseLeave={handleMouseLeave}
                                     />
                                 ))}
                            </svg>
                        )}

                        {/* DYNAMIC TOOLTIP - Now uses absolute positioning inside containerRef */}
                        {svgTooltip && (
                            <div
                                className="absolute pointer-events-none z-[999] bg-black/90 text-white text-xs px-3 py-2 rounded-md shadow-xl whitespace-nowrap border border-white/20 transition-all duration-200"
                                style={{
                                    left: `${svgTooltip.x}px`,
                                    top: `${svgTooltip.y}px`,
                                    transform: "translate(-50%, -180%)",
                                }}
                            >
                                <div className="font-bold border-b border-white/20 mb-1 pb-1">{svgTooltip.name}</div>
                                <div className="opacity-90">{svgTooltip.size}</div>
                                {/* Tooltip Arrow */}
                                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-black rotate-45" />
                            </div>
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