import { Link } from "react-router-dom"
import image1 from '../../assets/club_house/club1.webp';
import image2 from '../../assets/club_house/club10.webp';
import image3 from '../../assets/club_house/club11.webp';
import image4 from '../../assets/club_house/club12.webp';
import image5 from '../../assets/club_house/club13.webp';
import image6 from '../../assets/club_house/club14.webp';
import image7 from '../../assets/club_house/club15.webp';
import image8 from '../../assets/club_house/club2.webp';
import image9 from '../../assets/club_house/club2.webp';
import image10 from '../../assets/club_house/club3.webp';
import image11 from '../../assets/club_house/club4.webp';
import image12 from '../../assets/club_house/club5.webp';
import image13 from '../../assets/club_house/club6.webp';
import image14 from '../../assets/club_house/club7.webp';
import image15 from '../../assets/club_house/club8.webp';
import image16 from '../../assets/club_house/club9.webp';
import PureSlider from "../../components/PureSlider";
import { FaLeaf } from "react-icons/fa";
import VideoSlide from '../../components/VideoSlide';

export default function ClubHouse() {

    const data1 = [
        {
            id: 1, title: " Ground Floor", list: [
                "Reception & Entrance Lounge ",
                "Gourmet Restaurant ",
                "Business Center", "Squash Courts (2 Nos) ",
                "Badminton Courts (2 Nos) ", " Multipurpose Hall (500 Person Capacity)", "Toilets & Changing Rooms "
            ]
        },
        {
            id: 2, title: " First Floor", list: [
                "Themed SPA & Massage ",
                "Yoga Room & Meditation Den ",
                "Indoor Games",
                "Children's Play Kingdom", " Toilets",
            ]
        },

        {
            id: 3, title: " Second Floor", list: [
                "Gymnasium ",
                "Spinning/Dance Area ",
                "Toilets",
                "Star Gazing Restaurant/Roof Top Restaurant",
            ]
        },
        {
            id: 3, title: "Outdoor", list: [
                "Swimming Pool (Half Olympic Size) ",
                "Pool Lounge Deck",
                "Wet Lounge",
                "Floating Cabana", " Landscaped Garden With Sculptures",
            ]
        },
    ]





    const data2 = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 }, { id: 4, image: image4 }, { id: 5, image: image5 }, { id: 6, image: image6 }, { id: 7, image: image7 }, { id: 8, image: image8 },
        { id: 9, image: image9 }, { id: 10, image: image10 }, { id: 11, image: image11 }, { id: 12, image: image12 }, { id: 13, image: image13 },
        { id: 14, image: image14 }, { id: 15, image: image15 }, { id: 16, image: image16 }
    ]
    return (<>
        <div className="flex flex-col md:flex-row justify-center h-auto md:h-screen items-center p-5">
            {/* Left Amenities */}

            <div className="w-full md:w-[25%] lg:w-[20%] p-2 lg:p-2 max-h-96 md:max-h-[470px] lg:max-h-[610px] overflow-y-scroll border-r bg-white   flex flex-col  ">
                <h1 className="lg:text-xl text-lg font-bold mb-5 text-white text-center bg-[rgb(251,146,60)] p-2 rounded-full">List of Amenities</h1>

                {data1.map((e) => (
                    <div key={e.id} className="mb-4">
                        <h2 className="font-semibold text-sm lg:text-lg text-orange-500 ml-5">{e.title}</h2>
                        <ul className="list-disc ml-10 text-gray-600">
                            {e.list.map((item, i) => (
                                <li key={i} className="py-1 text-[12px] lg:text-[14px]" >{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-[60%] md:w-[50%] flex justify-center items-center text-center p-5">
                <div className="w-full max-w-5xl">

                    <PureSlider
                        interval={[150000, ...Array(data2.length).fill(3500)]}
                        slides={[
                            // FIRST SLIDE → IFRAME
                            // <iframe
                            //     key="video"
                            //     src="https://fast.wistia.net/embed/iframe/gjqpm13f05?videoFoam=true&autoplay=true"
                            //     allowTransparency={true}
                            //     frameBorder="0"

                            //     scrolling="no"
                            //     allowFullScreen
                            //     style={{ width: "100%", height: "650px" }}
                            //     title="Wistia Video"
                            // ></iframe>,
                            <VideoSlide key="video" />,



                            // OTHER SLIDES → IMAGES
                            ...data2.map((e) => (
                                <img
                                    key={e.id}
                                    src={e.image}
                                    alt={`Club House view ${e.id}`}
                                    className="w-full h-[50%] md:h-[400px] lg:h-[650px] object-cover "
                                />
                            )),
                        ]}
                    />

                </div>
            </div>
            {/* Right Info Section */}
            <div className="w-full md:w-[25%] lg:w-[20%] p-6 bg-white border-l flex flex-col justify-center items-start text-start ">
                <Link to="/" className="bg-orange-400 w-full py-3 mb-5 hover:bg-orange-500 transition-all duration-300 ease-in-out  text-center rounded-xl text-white font-semibold ">
                    Go Back
                </Link>

                <p className="text-gray-700 mb-3 flex lg:gap-3 gap-2 text-[12px] lg:text-sm"><span className="text-orange-400 "><FaLeaf size={18} /></span> Hiranandani Clubhouse with 90k+ sqft area.</p>
                <p className="text-gray-700 mb-3 flex lg:gap-3 gap-2 text-[12px] lg:text-sm"><span className="text-orange-400 "><FaLeaf size={18} /></span>20+ Lifestyle amenities.</p>
                <p className="text-gray-700 flex lg:gap-3 gap-2 text-[12px] lg:text-sm"><span className="text-orange-400 "><FaLeaf size={18} /></span>Access to all HFC residents.</p>
            </div>

        </div>
    </>)
}