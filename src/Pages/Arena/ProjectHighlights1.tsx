/*eslint-disable*/


import gallery9 from "../../assets/gallery/gallery9.webp";
import exteriortwr7 from "../../assets/projecthighexterior.webp";
import ProjectOverview from '../../components/ProjectOverview';


export default function Projecthighlight() {

    const sections = [
        {
            heading: "PLOT AREA",
            items: [
                "10.19 acres land parcel",
                "80% open spaces",
                "5.3 acres sports themed landscaping",
                "80+ exclusive active-life amenities",
                "2, 3 & 4 BHK Luxe home",
            ],
        },
        {
            heading: "KEY TOWNSHIP HIGHLIGHTS (1st IN MUMBAI 3.0)",
            items: [
                "Largest Integrated Township of Mumbai 3.0",
                "19 towers | 2200+ apartments delivered",
                "Fully functional school, retail and commercial",
                "Wide roads with pedestrian pathways",
                "100 acres of open green spaces",
                "25 acres of adjacent reserve forest",
                "Hill, Forest and River view",
                "Hakone Gaming Center",
                "Bedrock Turf (Football & Cricket)",
                "Propose largest clubhouse of Mumbai 3.0",
            ],
        },
    ];


    return (
        <>


            <section className="">
                <div className="relative min-h-screen"
                    style={{
                        backgroundImage: `url(${gallery9})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top", // Optional: centers the image
                        backgroundAttachment: "fixed", // Ensures the background is fixed
                    }}>
                    <div className="absolute  inset-0 bg-black/60 opacity-75" />

                    <div className="container mx-auto bg-gray-500/80 border-2 border-[#e6a524] xxl:px-24 xl:px-24 lg:px-0 px-4 py-4 flex  justify-end items-end lg:h-screen raleway">
                        <div className="w-full flex xl:flex-nowrap lg:flex-nowrap flex-wrap justify-end bg-grey-opacity py-12  ">
                            <div className="xl:w-7/12 lg:w-7/12 w-full">
                                <div className="relative rounded overflow-hidden w-full h-full">
                                    <img
                                        src={exteriortwr7}
                                        alt="Tower"
                                        className="w-full h-full object-cover max-h-[90vh]"
                                    />

                                </div>
                            </div>
                            <ProjectOverview title="Project Overview" sections={sections} />

                        </div>

                    </div>

                </div>
            </section>

            {/* <Footer /> */}
        </>
    );
}
