import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip, Button, Modal, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { floors } from '../../data/StadiaData';

import WithoutbgHeader from '../../components/WithoutbgHeader';

export default function Floor_Stadia() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const singleFloor = id
        ? floors.find((f) => f.id === Number(id))
        : floors[0];

    const [hoveredUnit,
        setHoveredUnit
    ] = useState<number | null>(null);
    const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
    const [zoomOpen, setZoomOpen] = useState(false);
    const [image3DOpen, setImage3DOpen] = useState(false);

    console.log("singleFloor", singleFloor)
    if (!singleFloor) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#5d5c61] text-center p-6">
                <div className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md mb-4">
                    Floor data not found.
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

    return (
        <div className="justify-center flex itmes-center w-screen h-screen">
        <div className="flex flex-col md:flex-row h-screen w-full gap-2
        bg-[#E8E8E8]">
            <WithoutbgHeader />
            {/* Left Sidebar */}
            <div className="md:w-[60%] lg:w-[25%] xl:w-[20%] mt-[30%] md:mt-5 
            mb-2 w-full flex flex-col items-center justify-center border-r p-4 overflow-y-auto">
                <h3 className="bg-gradient-to-r w-full from-[#e3a528] to-[#e8e8e8] 
                border-l-4 border-[#b97f0b] text-[#333] text-center font-semibold mb-5 p-4 
                text-sm lg:text-lg rounded-sm shadow-sm">
                    FLOOR PLANS
                </h3>
                {/* <h3 className="text-xl font-semibold mb-4">  UNITS→ {singleFloor.title}</h3> */}



                <div

                    className="bg-[#F0EEEE] p-4 rounded-lg w-full"
                >
                    {/* <h3 className="text-lg font-semibold mb-4 text-center"> {singleFloor.title}</h3> */}
                    <h3 className="text-sm lg:text-lg font-semibold mb-4   flex items-center gap-4 shadow-md">
                        <span className="inline-block text-yellow-600 text-2xl font-bold px-2 py-1 
                        rounded-md shadow-md">
                            {singleFloor.id + 1}
                        </span>
                        FLOOR{" "}

                    </h3>

                    {singleFloor?.units.map((unit) => (
                        <ul key={unit.id}>
                            <li
                                className={`
                cursor-pointer transition-transform duration-200 mt-2 flex p-1 
                rounded-sm justify-between border-b pb-2 text-[10px] lg:text-[12px]
                ${hoveredUnit === unit.id ? "scale-105 bg-slate-200" : "scale-100"}
            `}
                                onMouseEnter={() => setHoveredUnit(unit.id)}
                                onMouseLeave={() => setHoveredUnit(null)}
                                onDoubleClick={() => setSelectedUnit(unit.id)}
                            // onClick={(e) => {
                            //     e.stopPropagation();
                            //     // Toggle selection: if already selected, close it; otherwise, select new.
                            //     setSelectedUnit(prev => prev === unit.id ? null : unit.id);
                            // }}
                            >
                                <p>{unit.name}</p> <p>{unit.type}</p>
                            </li>
                        </ul>
                    ))}

                </div>


                <div className="mt-3 flex flex-col gap-2 px-2
                 w-full justify-center items-center">
                    {Object.values(singleFloor.buttonSettings).map((btn, idx) => (
                        <button
                            key={idx}
                            className="w-full py-2 rounded-sm text-[10px] lg:text-[13px]"
                            style={{ backgroundColor: btn.bgColor }}
                        >
                            {btn.text}
                        </button>
                    ))}
                </div>

            </div>

            {/* Floor Plan */}
            <div className="relative w-full md:h-screen flex items-center justify-center">
                <svg
                    viewBox={singleFloor.imageSettings.svgSize}
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <image
                        href={singleFloor.image}
                        width={singleFloor.imageSettings.imageWidth}
                        height={singleFloor.imageSettings.imageHeight}
                    />
                    {singleFloor.units.map((unit) => (
                        <Tooltip
                            key={unit.id}
                            // title={`${unit.name} (${unit.type})`}
                            title={
                                <Typography sx={{ fontSize: { xs: '9px', md: '7px', lg: '13px' } }}>
                                    {unit.name} ({unit.type})
                                </Typography>
                            }
                            arrow
                            placement="top"
                            // Controlled visibility for Tablet stability
                            open={selectedUnit === unit.id || hoveredUnit === unit.id}
                            disableHoverListener={false}
                            disableTouchListener={false}
                            enterTouchDelay={0}
                            // Prevents the "flicker" on tablet browsers
                            PopperProps={{
                                className: "pointer-events-none"
                            }}
                        >
                            <polygon
                                points={unit.polygonPoints}
                                // fill={
                                //     (selectedUnit === unit.id || hoveredUnit === unit.id)
                                //         ? unit.hoverColor || "rgba(253, 175, 23, 0.4)"
                                //         : "transparent"
                                // }
                                fill={
                                    hoveredUnit === unit.id
                                        ? unit.hoverColor || "rgba(253, 175, 23, 0.4)"
                                        : selectedUnit === unit.id
                                            ? unit.hoverColor || "rgba(253, 175, 23, 0.4)"
                                            : "transparent"
                                }
                                style={{
                                    cursor: "pointer",
                                    touchAction: "manipulation",
                                    outline: "none" // Removes the blue outline box on some tablets
                                }}
                                onMouseEnter={(e) => {
                                    e.stopPropagation();
                                    setSelectedUnit(null);
                                    // Toggle selection: if already selected, close it; otherwise, select new.
                                    setHoveredUnit(prev => prev === unit.id ? null : unit.id);
                                }}
                                onMouseLeave={(e) => {
                                    e.stopPropagation();
                                    // Toggle selection: if already selected, close it; otherwise, select new.
                                    setHoveredUnit(null);
                                }}
                                // onClick={(e) => {
                                //     e.stopPropagation();
                                //     // Toggle selection: if already selected, close it; otherwise, select new.
                                //     setSelectedUnit(prev => prev === unit.id ? null : unit.id);
                                // }}
                                onDoubleClick={() => navigate(`/arena_unitstadia/${unit.id}`)}
                            />
                        </Tooltip>
                    ))}
                </svg>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-[45%] lg:w-[20%] w-full flex 
            flex-col items-center justify-center text-[9px] lg:text-lg border-r p-2 lg:p-4">
                <div className="bg-[#f0eeee] p-4 rounded-sm flex flex-col gap-2">
                    <Button
                        fullWidth
                        // variant="contained"
                        onClick={() => navigate(-1)}

                        sx={{
                            mb: 1,
                            color: "white",
                            backgroundColor: "#fdaf17",
                            // backgroundColor: "#5d5c61",
                            // "&:hover": { backgroundColor: "black" },
                            "&:hover": { backgroundColor: "#5d5c61" },
                        }}
                    >
                        Go Back
                    </Button>


                    <Button
                        fullWidth
                        // variant="outlined"
                        onClick={() => setZoomOpen(true)}
                        sx={{
                            mb: 1,
                            color: "white",
                            backgroundColor: "#fdaf17",
                            // backgroundColor: "#5d5c61",
                            // "&:hover": { backgroundColor: "black" },
                            "&:hover": { backgroundColor: "#5d5c61" },
                        }}
                    >
                        Zoom Image
                    </Button>
                    {/* <Button
                        fullWidth
                        // variant="outlined"
                        onClick={() => setImage3DOpen(true)}
                        sx={{
                            mb: 1,
                            color: "white",
                            backgroundColor: "#fdaf17",
                            // backgroundColor: "#5d5c61",
                            // "&:hover": { backgroundColor: "black" },
                             "&:hover": { backgroundColor: "#5d5c61" },
                        }}
                    >
                        3D FLOOR PLAN
                    </Button> */}
                </div>

                {/* <div className="mt-3 p-2 border border-gray-300 rounded-sm w-full">
                    <h3 className="text-lg font-semibold mb-4">TOWER FEATURES</h3>
                    <ul className="list-disc list-inside space-y-2 text-[12px]">
                        {singleFloor.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div> */}
            </div>

            {/* Zoom Modal */}
            <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
                <Box
                    className="flex items-center justify-center h-screen w-screen bg-black/80"
                    sx={{ outline: "none" }}
                >
                    <IconButton
                        onClick={() => setZoomOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={singleFloor.image}
                        alt={`Floor ${singleFloor.id}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>

            <Modal open={image3DOpen} onClose={() => setImage3DOpen(false)}>
                <Box
                    className="flex items-center justify-center h-screen w-screen bg-black/80"
                    sx={{ outline: "none" }}
                >
                    <IconButton
                        onClick={() => setImage3DOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={singleFloor.image1}
                        alt={`Floor ${singleFloor.id}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>

        </div></div>
    );
}
