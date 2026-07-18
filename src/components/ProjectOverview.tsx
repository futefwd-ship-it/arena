import { FaLandmark, FaAngleRight } from "react-icons/fa";
interface Section {
    heading: string;
    items: string[];
}

interface ProjectOverviewProps {
    title: string;
    sections: Section[];
}
const ProjectOverview: React.FC<ProjectOverviewProps> = ({ title, sections }) => {
    return (
        <div className="xl:w-5/12 lg:w-5/12 w-full">
            <div
                className="py-6 bg-gray-200/70 rounded overflow-y-auto"
                style={{ height: "-webkit-fill-available" }}
            >
                <div className="relative px-6 z-50">
                    <h3 className="text-white uppercase text-center xl:text-xl text-base font-bold tracking-wide">
                        {title}
                    </h3>

                    {sections.map((section, index) => (
                        <div key={index} className="mt-4">
                            <h1 className="flex gap-4 items-center text-white uppercase text-left xl:text-base text-sm font-bold tracking-wide pb-1">
                                <FaLandmark className="text-yellow-500 xl:text-xl text-sm" />
                                {section.heading}
                            </h1>

                            {section.items.map((item, i) => (
                                <p
                                    key={i}
                                    className="text-sm py-1 text-white flex gap-4 items-center"
                                >
                                    <FaAngleRight className="text-yellow-500 text-lg py-1" />
                                    {item}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview;
