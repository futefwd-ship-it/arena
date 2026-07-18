import bgImage from '../../assets/goldenwillows/projecthighlights.jpg'
import { FaMapMarkedAlt, FaBuilding } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

export default function ProjectHighlights_Gold() {

    const plot = [
        "11.11 Acres",
        "85% Open space:",
        "5.2 Acres of green space(50%)",
        "2.7 Acres of garden on the podium",
        "2.5 Acres of garden on the ground",

    ];

    const highlights = [
        "Integrated Township (1st in Mumbai NXT)",
        "19 Towers | 2200+ Apartments Delivered",
        "Fully Functional School, Retail & Commercial",
        "Wide Roads with Pedestrian Pathways",
        "100 Acres of Open Green Spaces",
        "25 Acres of Adjacent Reserve Forest",
        "Hill, Forest & River Views",
    ];

    const amenities = [
        "Clubhouse",
        "Hospital",
        "School",
        "Fire Station",
        "Cycling Track + Wide Roads",
        "Retail Shopping",
        "Garden Areas",
        "Playground"
    ];

    return (
        <section
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Right Panel */}
            <div className="absolute bg-black/45 backdrop-blur-md p-6 right-0 top-0 h-full w-full md:w-[35%] flex flex-col overflow-y-auto">

                <h2 className="text-3xl font-bold mb-8 tracking-wide">PROJECT OVERVIEW</h2>

                {/* Plot Area */}
                <h3 className="flex items-center gap-3 text-lg font-semibold mb-2">
                    <FaMapMarkedAlt className="text-yellow-400/80" size={30} /> PLOT AREA
                </h3>
                <ul className="list-disc ml-6 text-sm space-y-1 mb-5">
                    {plot.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/* Highlights */}
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                    <FaLeaf className="text-yellow-400/70" size={27} /> KEY TOWNSHIP HIGHLIGHTS(1ST IN MUMBAI NXT)
                </h3>
                <ul className="list-disc ml-6 text-sm space-y-1 mb-5">
                    {highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/* Amenities */}
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
                    <FaBuilding className="text-yellow-400/70" size={26} /> PROPOSED TOWNSHIP AMENITIES
                </h3>
                <ul className="list-disc ml-6 text-sm space-y-1">
                    {amenities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>
        </section>
    );
}