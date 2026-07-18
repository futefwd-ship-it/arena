
import { useEffect, useState, useRef } from "react";

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

// import { RiArrowGoBackFill } from "react-icons/ri";
// import { TfiBackRight } from "react-icons/tfi";

// ---------- Types ----------
interface ImageType {
  src: string;
  title?: string;

}

// ---------- Replace these imports with your actual images ----------
import interior1 from "../../assets/gallery/interior1.webp";
import interior2 from "../../assets/gallery/interior2.webp";
import interior3 from "../../assets/gallery/interior3.webp";
import interior4 from "../../assets/gallery/interior4.webp";
import interior5 from "../../assets/gallery/interior5.webp";
import interior6 from "../../assets/gallery/interior6.webp";
import interior7 from "../../assets/gallery/interior7.webp";
import interior8 from "../../assets/gallery/interior8.webp";
import interior9 from "../../assets/gallery/interior9.webp";
import interior10 from "../../assets/gallery/interior10.webp";
import interior11 from "../../assets/gallery/interior11.webp";
import interior12 from "../../assets/gallery/interior12.webp";
import interior13 from "../../assets/gallery/interior13.webp";
import interior14 from "../../assets/gallery/interior14.webp";
import interior15 from "../../assets/gallery/interior15.webp";
import interior16 from "../../assets/gallery/interior16.webp";
import interior17 from '../../assets/entrance_tower/gallery_new/Citadel_Lobby_HI-RES.jpg'


import exterior1 from "../../assets/gallery/exterior1.webp";
import exterior2 from "../../assets/gallery/exterior2.webp";
import exterior3 from "../../assets/gallery/exterior3.webp";
import exterior4 from "../../assets/gallery/exterior4.webp";
import exterior5 from "../../assets/gallery/exterior5.png";
import exterior6 from "../../assets/gallery/exterior6.webp";
import exterior7 from "../../assets/gallery/exterior7.webp";
import exterior8 from "../../assets/gallery/exterior8.webp";
import exterior9 from "../../assets/gallery/exterior9.webp";
import exterior10 from "../../assets/gallery/exterior10.jpg";
import exterior11 from "../../assets/gallery/exterior11.webp";
import exteriortwr1 from "../../assets/gallery/exteriortwr1.webp";
import exteriortwr2 from "../../assets/gallery/exteriortwr2.webp";
import exteriortwr3 from "../../assets/gallery/exteriortwr3.webp";
import exteriortwr4 from "../../assets/gallery/exteriortwr4.webp";
import exteriortwr5 from "../../assets/gallery/exteriortwr5.webp";
import exteriortwr6 from "../../assets/gallery/exteriortwr6.webp";
import exteriortwr7 from "../../assets/gallery/exteriortwr7.webp";
import exteriortwr8 from '../../assets/entrance_tower/gallery_new/Cam_01_Building_facade.png';
import exteriortwr9 from '../../assets/entrance_tower/gallery_new/Cam01_Grandstand_worm_eye.png';
import exteriortwr10 from '../../assets/entrance_tower/gallery_new/Cam02_Grandstand_close_up.png';
import exteriortwr11 from '../../assets/entrance_tower/gallery_new/Cam02_Night_Close-up.png'
// import exteriortwr12 from '../../assets/entrance_tower/Grandstand_interface.jpg';
// import exteriortwr13 from '../../assets/entrance_tower/Atheletica_interface.jpg';
// import exteriortwr14 from '../../assets/entrance_tower/Pavilion_interface.jpg';
import { IoReturnUpBackOutline } from "react-icons/io5";
import sports1 from "../../assets/gallery/sports1.webp";
import sports2 from "../../assets/gallery/sports2.webp";
import sports3 from "../../assets/gallery/sports3.webp";
import sports4 from "../../assets/gallery/sports4.webp";
import sports5 from "../../assets/gallery/sports5.webp";
import sports6 from "../../assets/gallery/sports6.webp";
import sports7 from "../../assets/gallery/sports7.webp";
import { MdNavigateBefore, MdNavigateNext, MdPause, MdPlayArrow } from "react-icons/md";


declare const InteriorImages: ImageType[];
declare const ElevationImages: ImageType[];
declare const LandscapeImages: ImageType[];
declare const gallery9: string;
declare const back: string;
// ---------------------------------------------------------------
const tabs = ["Interior", "Elevation", "Landscape"] as const;

export default function GalleryPage() {
  const [paused, setPaused] = useState(false);

  const thumbsRef = useRef<(HTMLDivElement | null)[]>([]);



  const InteriorImages = [
    { src: interior1, title: '2BHK Guest Bedroom' },
    { src: interior2, title: '2BHK Living' },
    { src: interior3, title: '2BHK Master Bedroom' },
    { src: interior4, title: '3BHK Balcony' },
    { src: interior5, title: '3BHK Guest Bedroom' },
    { src: interior6, title: '3BHK Kids Bedroom' },
    { src: interior7, title: '3BHK Kitchen' },
    { src: interior8, title: '3BHK Living & Dining' },
    { src: interior9, title: '3BHK Master Bedroom' },
    { src: interior10, title: '4BHK Bathroom' },
    { src: interior11, title: '4BHK Dining' },
    { src: interior12, title: '4BHK Guest Bedroom' },
    { src: interior13, title: '4BHK Kids Bedroom' },
    { src: interior14, title: '4BHK Living & Dining' },
    { src: interior15, title: '4BHK Master Bedroom' },
    { src: interior16, title: '4BHK Study Room' },
    { src: interior7, title: '3BHK Kitchen' },
    { src: interior8, title: '3BHK Living & Dining' },
    { src: interior9, title: '3BHK Master Bedroom' },
    { src: interior17, title: 'Citadel Lobby' },
  ];

  const ElevationImages = [
    { src: exteriortwr1, title: 'Greenfield Tower' },
    { src: exteriortwr2, title: 'Greenfield Tower' },
    { src: exteriortwr3, title: 'Greenfield Tower' },
    { src: exteriortwr4, title: 'Citadel Tower' },
    { src: exteriortwr5, title: 'Citadel Tower' },
    { src: exteriortwr6, title: 'Arcadia Tower' },
    { src: exteriortwr7, title: 'Arcadia Tower' },
    { src: exteriortwr1, title: 'Greenfield Tower' },
    { src: exteriortwr2, title: 'Greenfield Tower' },
    { src: exteriortwr3, title: 'Greenfield Tower' },
    { src: exteriortwr4, title: 'Citadel Tower' },
    { src: exteriortwr5, title: 'Citadel Tower' },
    { src: exteriortwr6, title: 'Arcadia Tower' },
    { src: exteriortwr8, title: 'Pavilion Tower' },
    { src: exteriortwr9, title: 'Grandstand Tower' },
    { src: exteriortwr10, title: 'Grandstand Tower' },
    { src: exteriortwr11, title: 'Grandstand Tower' },
    // { src: exteriortwr12, title: 'Grandstand Tower' },
    //  { src: exteriortwr13, title: 'Atheletica Tower' },
    // { src: exteriortwr14, title: 'Pavilion Tower' },
  ];

  const LandscapeImages = [
    { src: sports1, title: 'Archery Zone' },
    { src: sports2, title: 'Badminton Court' },
    { src: sports3, title: 'Basketball Court' },
    { src: sports4, title: 'Mini Golf Course' },
    { src: sports5, title: 'Padel & Pickle Ball Court' },
    { src: sports6, title: 'Tennis Court' },
    { src: sports7, title: 'Volleyball Court' },
    { src: exterior3, title: 'Leisure Garden' },
    { src: exterior4, title: 'Cricket' },
    { src: exterior6, title: 'Skate Park' },
    { src: exterior10, title: 'Pool View' },
    { src: exterior1, title: 'Aerial View from River Side' },
    { src: exterior2, title: 'Central Landscape' },
    { src: exterior5, title: 'Pool View' },
    { src: exterior7, title: 'Sprint Track' },
    { src: exterior8, title: 'Play and Learning Garden' },
    { src: exterior9, title: 'Pool View ' },
    { src: exterior11, title: 'Wellness and Therapy Garden' },
  ];


  const [selectedTab, setSelectedTab] = useState<typeof tabs[number]>("Interior");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const activeThumb = thumbsRef.current[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  // Get images based on selected tab
  const images =
    selectedTab === "Interior"
      ? InteriorImages
      : selectedTab === "Elevation"
        ? ElevationImages
        : LandscapeImages;



  // 1. Fix the ref setter (Move this outside or use useCallback)
  const setThumbRef = (idx: number) => (el: HTMLDivElement | null) => {
    thumbsRef.current[idx] = el;
  };

  // 2. Optimized Autoplay (Prevents "Double Jumping" after a click)
  useEffect(() => {
    if (lightboxOpen || paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    // This cleanup function is KEY. 
    // It clears the old 7-second timer the moment you click a thumbnail,
    // then starts a fresh 7-second countdown for the new image.
    return () => clearInterval(interval);
  }, [currentIndex, lightboxOpen, paused, images.length]);
  // Adding currentIndex here ensures the timer restarts after every manual click.
  // Optional: autoplay slider
  // useEffect(() => {
  //   if (lightboxOpen) return;
  //   if (paused) return;
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, [images.length, lightboxOpen, paused]);

  // const setThumbRef = (idx: number) => (el: HTMLDivElement | null) => {
  //   thumbsRef.current[idx] = el;
  // };

  const handleBack = () => {
    window.history.back();
  }
  return (
    <div className=" w-full h-screen md:overflow-hidden overflow-auto bg-gray-900 flex flex-col gap-5  justify-center items-center p-4">


      {/* {loading && (<div className="absolute inset-0 bg-gray-700 animate-pulse rounded"></div>)}  */}
      <div className="flex justify-center items-center md:justify-start md:items-start w-full md:w-[95%] h-[15%] ">

        <div className="flex  gap-2 h-[50%] w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedTab(tab);
                setCurrentIndex(0); // reset slider
              }}
              className={`px-4 py-2 rounded font-medium ${selectedTab === tab
                ? "bg-yellow-700 text-black"
                : "border border-white text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>


      </div>



      <div
        onClick={handleBack}
        className="absolute bottom-10 right-2 p-2 bg-white/30 w-[55px] h-[55px] flex items-center justify-center rounded-full z-20 cursor-pointer hover:bg-black/70 transition"
      >
        <IoReturnUpBackOutline size={40} color="white" />
      </div>


      <div className="flex items-center justify-center w-full max-w-[85%] h-[65%]">

        {/* Main Slider */}
        <div className="relative justify-center items-center w-full  flex h-full">

          {/* {images.length > 0 && (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              loading="lazy"
              // onLoad={() => setLoading(false)}
              onClick={() => setLightboxOpen(true)}
              className="object-contain h-full cursor-zoom-in"
            />
          )} */}
          {images.length > 0 && (
            <img
              key={images[currentIndex].src} // IMPORTANT: The 'key' triggers the animation on every click
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              loading="lazy"
              onClick={() => setLightboxOpen(true)}
              className="object-contain h-full cursor-zoom-in transition-opacity duration-1000 animate-in fade-in"
              style={{ animation: "fadeIn1 0.8s ease-in-out" }}
            />
          )}

          {/* Show ONLY the title for the current image */}
          <div className="absolute bottom-2 z-[2000] px-4 py-1 rounded-full bg-black/30 backdrop-blur-md shadow">
            <p className="text-white text-sm">{images[currentIndex].title}</p>
          </div>
          {/* -------------------------------------- */}


          {/* <div className="md:absolute bottom-[13.5%] sticky translate-x-10 md:bottom-[24.5%] xl:bottom-[2%] 2xl:bottom-[28.5%] left-1/2 md:-translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-10 py-3 shadow-black rounded-full shadow-lg"> */}
          <div className="absolute bottom-10  bg-white/10 backdrop-blur-md rounded-full px-10 py-3 shadow-black rounded-full shadow-lg">
            {/* Back Button */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1) % images.length)}

              className="text-white text-3xl hover:scale-110 transition"
            >
              <MdNavigateBefore />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setPaused(!paused)}


              className="text-white text-2xl mx-3 hover:scale-110 transition"
            >
              {paused ? <MdPause /> : <MdPlayArrow />}
            </button>
            {/* PAUSE / PLAY BUTTON */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}

              className="text-white text-3xl hover:scale-110 transition"
            >
              <MdNavigateNext />
            </button>

          </div>
        </div>

      </div>




      {/* Thumbnails */}
      {/* <div className="flex gap-2 justify-center items-center h-[20%] w-[92%] overflow-x-auto no-scrollbar">
        <div className="flex gap-2 justify-center px-4"> */}
      <div className="w-[92%] overflow-x-auto no-scrollbar h-[20%]">
        <div className="flex gap-2 px-4 w-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={setThumbRef(idx)}
              className="relative w-24 h-24 flex-shrink-0 cursor-pointer"
              // className={`relative w-24 h-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ${idx === currentIndex ? "ring-4 ring-yellow-600 scale-110 z-10" : "opacity-40 grayscale-[50%]"
              // }`}
              onClick={(e) => {
                e.stopPropagation();

                setCurrentIndex(idx)
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className={`w-24 h-24 object-cover rounded border-2 transition-all duration-500 ease-in-out
            ${idx === currentIndex
                    ? "border-yellow-500 scale-105"
                    : "border-transparent"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>


      {/* Lightbox */}
      {
        lightboxOpen && images.length > 0 && (
          <div className="fade-in-lightbox">
            <Lightbox
              mainSrc={images[currentIndex].src}
              nextSrc={images[(currentIndex + 1) % images.length].src}
              prevSrc={images[(currentIndex - 1 + images.length) % images.length].src}
              imageTitle={images[currentIndex].title}
              onCloseRequest={() => setLightboxOpen(false)}
              onMovePrevRequest={() =>
                setCurrentIndex((currentIndex - 1 + images.length) % images.length)
              }
              onMoveNextRequest={() =>
                setCurrentIndex((currentIndex + 1) % images.length)
              }
              reactModalStyle={{ overlay: { zIndex: 1500, backgroundColor: "rgba(0,0,0,0.9)" }, content: { padding: "30px" }, }}
            /></div>
        )
      }
    </div >
  );
}