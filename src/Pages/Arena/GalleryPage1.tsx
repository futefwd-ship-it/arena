
// import { useEffect, useState } from "react";

// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css';

// // import { RiArrowGoBackFill } from "react-icons/ri";
// // import { TfiBackRight } from "react-icons/tfi";

// // ---------- Types ----------
// interface ImageType {
//   src: string;
//   title?: string;

// }

// // ---------- Replace these imports with your actual images ----------
// import interior1 from "../../assets/gallery/interior1.webp";
// import interior2 from "../../assets/gallery/interior2.webp";
// import interior3 from "../../assets/gallery/interior3.webp";
// import interior4 from "../../assets/gallery/interior4.webp";
// import interior5 from "../../assets/gallery/interior5.webp";
// import interior6 from "../../assets/gallery/interior6.webp";
// import interior7 from "../../assets/gallery/interior7.webp";
// import interior8 from "../../assets/gallery/interior8.webp";
// import interior9 from "../../assets/gallery/interior9.webp";
// import interior10 from "../../assets/gallery/interior10.webp";
// import interior11 from "../../assets/gallery/interior11.webp";
// import interior12 from "../../assets/gallery/interior12.webp";
// import interior13 from "../../assets/gallery/interior13.webp";
// import interior14 from "../../assets/gallery/interior14.webp";
// import interior15 from "../../assets/gallery/interior15.webp";
// import interior16 from "../../assets/gallery/interior16.webp";


// import exterior1 from "../../assets/gallery/exterior1.webp";
// import exterior2 from "../../assets/gallery/exterior2.webp";
// import exterior3 from "../../assets/gallery/exterior3.webp";
// import exterior4 from "../../assets/gallery/exterior4.webp";
// import exterior5 from "../../assets/gallery/exterior5.png";
// import exterior6 from "../../assets/gallery/exterior6.webp";
// import exterior7 from "../../assets/gallery/exterior7.webp";
// import exterior8 from "../../assets/gallery/exterior8.webp";
// import exterior9 from "../../assets/gallery/exterior9.webp";
// import exterior10 from "../../assets/gallery/exterior10.jpg";
// import exterior11 from "../../assets/gallery/exterior11.webp";
// import exteriortwr1 from "../../assets/gallery/exteriortwr1.webp";
// import exteriortwr2 from "../../assets/gallery/exteriortwr2.webp";
// import exteriortwr3 from "../../assets/gallery/exteriortwr3.webp";
// import exteriortwr4 from "../../assets/gallery/exteriortwr4.webp";
// import exteriortwr5 from "../../assets/gallery/exteriortwr5.webp";
// import exteriortwr6 from "../../assets/gallery/exteriortwr6.webp";
// import exteriortwr7 from "../../assets/gallery/exteriortwr7.webp";

// import sports1 from "../../assets/gallery/sports1.webp";
// import sports2 from "../../assets/gallery/sports2.webp";
// import sports3 from "../../assets/gallery/sports3.webp";
// import sports4 from "../../assets/gallery/sports4.webp";
// import sports5 from "../../assets/gallery/sports5.webp";
// import sports6 from "../../assets/gallery/sports6.webp";
// import sports7 from "../../assets/gallery/sports7.webp";
// import { MdNavigateBefore, MdNavigateNext, MdPause, MdPlayArrow } from "react-icons/md";

// declare const InteriorImages: ImageType[];
// declare const ElevationImages: ImageType[];
// declare const LandscapeImages: ImageType[];
// declare const gallery9: string;
// declare const back: string;
// // ---------------------------------------------------------------
// const tabs = ["Interior", "Elevation", "Landscape"] as const;

// export default function GalleryPage1() {
//   const [paused, setPaused] = useState(false);
  



//   const InteriorImages = [
//     { src: interior1, title: '2BHK Guest Bedroom' },
//     { src: interior2, title: '2BHK Living' },
//     { src: interior3, title: '2BHK Master Bedroom' },
//     { src: interior4, title: '3BHK Balcony' },
//     { src: interior5, title: '3BHK Guest Bedroom' },
//     { src: interior6, title: '3BHK Kids Bedroom' },
//     { src: interior7, title: '3BHK Kitchen' },
//     { src: interior8, title: '3BHK Living & Dining' },
//     { src: interior9, title: '3BHK Master Bedroom' },
//     { src: interior10, title: '4BHK Bathroom' },
//     { src: interior11, title: '4BHK Dining' },
//     { src: interior12, title: '4BHK Guest Bedroom' },
//     { src: interior13, title: '4BHK Kids Bedroom' },
//     { src: interior14, title: '4BHK Living & Dining' },
//     { src: interior15, title: '4BHK Master Bedroom' },
//     { src: interior16, title: '4BHK Study Room' },
//     { src: interior7, title: '3BHK Kitchen' },
//     { src: interior8, title: '3BHK Living & Dining' },
//     { src: interior9, title: '3BHK Master Bedroom' },
//   ];

//   const ElevationImages = [
//     { src: exteriortwr1, title: 'Greenfield Tower' },
//     { src: exteriortwr2, title: 'Greenfield Tower' },
//     { src: exteriortwr3, title: 'Greenfield Tower' },
//     { src: exteriortwr4, title: 'Citadel Tower' },
//     { src: exteriortwr5, title: 'Citadel Tower' },
//     { src: exteriortwr6, title: 'Arcadia Tower' },
//     { src: exteriortwr7, title: 'Arcadia Tower' },
//     { src: exteriortwr1, title: 'Greenfield Tower' },
//     { src: exteriortwr2, title: 'Greenfield Tower' },
//     { src: exteriortwr3, title: 'Greenfield Tower' },
//     { src: exteriortwr4, title: 'Citadel Tower' },
//     { src: exteriortwr5, title: 'Citadel Tower' },
//     { src: exteriortwr6, title: 'Arcadia Tower' },
//     { src: exteriortwr7, title: 'Arcadia Tower' },
//   ];

//   const LandscapeImages = [
//     { src: sports1, title: 'Archery Zone' },
//     { src: sports2, title: 'Badminton Court' },
//     { src: sports3, title: 'Basketball Court' },
//     { src: sports4, title: 'Mini Golf Course' },
//     { src: sports5, title: 'Padel & Pickle Ball Court' },
//     { src: sports6, title: 'Tennis Court' },
//     { src: sports7, title: 'Volleyball Court' },
//     { src: exterior3, title: 'Leisure Garden' },
//     { src: exterior4, title: 'Cricket' },
//     { src: exterior6, title: 'Skate Park' },
//     { src: exterior10, title: 'Pool View' },
//     { src: exterior1, title: 'Aerial View from River Side' },
//     { src: exterior2, title: 'Central Landscape' },
//     { src: exterior5, title: 'Pool View' },
//     { src: exterior7, title: 'Sprint Track' },
//     { src: exterior8, title: 'Play and Learning Garden' },
//     { src: exterior9, title: 'Pool View ' },
//     { src: exterior11, title: 'Wellness and Therapy Garden' },
//   ];


//   const [selectedTab, setSelectedTab] = useState<typeof tabs[number]>("Interior");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [lightboxOpen, setLightboxOpen] = useState(false);

//   const [loading, setLoading] = useState(true);

//   // Get images based on selected tab
//   const images =
//     selectedTab === "Interior"
//       ? InteriorImages
//       : selectedTab === "Elevation"
//         ? ElevationImages
//         : LandscapeImages;

//   // Optional: autoplay slider
//   useEffect(() => {
//     if (lightboxOpen) return;
//     if(paused) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length, lightboxOpen,paused]);


//   const handleBack = () => {
//     window.history.back();
//   }
//   return (
//     <div className="h-screen w-full overflow-auto">
//       <div className="min-h-screen bg-gray-900 p-4 text-white flex flex-col gap-6">

//         {loading && (<div className="absolute inset-0 bg-gray-700 animate-pulse rounded"></div>)}
//         <div className="flex justify-between">
//           {/* Tabs */}
//           <div className="flex flex-col md:flex-row gap-2 mb-4">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setSelectedTab(tab);
//                   setCurrentIndex(0); // reset slider
//                 }}
//                 className={`px-4 py-2 rounded font-medium ${selectedTab === tab
//                   ? "bg-yellow-700 text-black"
//                   : "border border-white text-white"
//                   }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <div>
//             <button className="px-5 py-2 font-bold rounded-lg transition-all duration-300 bg-white/50 hover:bg-white hover:text-black " onClick={handleBack}>Back</button>
//           </div>

//         </div>

//         {/* Main Slider */}
//         <div className="relative w-full max-w-4xl mt-5 mx-auto h-[450px] flex items-center justify-center overflow-hidden rounded">

//           {images.length > 0 && (
//             <img
//               src={images[currentIndex].src}
//               alt={images[currentIndex].title}
//               loading="lazy"
//               onLoad={() => setLoading(false)}
//               onClick={() => setLightboxOpen(true)}
//               className="object-contain h-full cursor-zoom-in"
//             />
//           )}

//           {/* Show ONLY the title for the current image */}
//           <div className="absolute bottom-2 z-[2000] px-4 py-1 rounded-full bg-black/30 backdrop-blur-md shadow">
//             <p className="text-white text-sm">{images[currentIndex].title}</p>
//           </div>
//           {/* -------------------------------------- */}


//           {/* Prev/Next buttons */}
//           {/* <button
//             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 text-white text-lg rounded-full p-2 hover:bg-white hover:text-black transition-all duration-300"
//             onClick={() =>
//               setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
//             }
//           >
//             {/* &#8592; 
//             <RiArrowGoBackFill />
//           </button>
//           <button
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 ext-white text-lg rounded-full p-2 hover:bg-white hover:text-black transition-all duration-300"
//             onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
//           >
//             {/* &#8594; 
//             <TfiBackRight />
//           </button> */}
//         </div>

//         <div className="md:absolute bottom-[13.5%] sticky translate-x-10 md:bottom-[24.5%] xl:bottom-[2%] 2xl:bottom-[28.5%] left-1/2 md:-translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-10 py-3 shadow-black rounded-full shadow-lg">
//           {/* Back Button */}
//           <button
//             onClick={() => setCurrentIndex((prev) => (prev - 1) % images.length)}
//             // className="absolute left-3 top-1/2 -translate-y-1/2
//             //     className=" bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
//             // >
//             //     ◀
//             className="text-white text-3xl hover:scale-110 transition"
//           >
//             <MdNavigateBefore />
//           </button>

//           {/* Next Button */}
//           <button
//              onClick={() => setPaused(!paused)}

//             // className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
//             //     className=" bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
//             // >
//             //     ▶
//             className="text-white text-2xl mx-3 hover:scale-110 transition"
//           >
//             {paused ? <MdPause />:<MdPlayArrow /> }
//           </button>
//           {/* PAUSE / PLAY BUTTON */}
//           <button
//             onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
//             // className=" bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
//             // className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full shadow-md hover:bg-black/80"
//             // >
//             //     {paused ? "▶ Play" : "⏸ Pause"}
//             className="text-white text-3xl hover:scale-110 transition"
//           >
//             <MdNavigateNext />
//           </button>

//         </div>


//         {/* Thumbnails */}
//         <div className="flex gap-2 justify-center mt-10 md:mt-24 flex-wrap md:flex-nowrap">
//           {images.map((img, idx) => (
//             <div key={idx} className="relative w-24 h-24 cursor-pointer" onClick={() => setCurrentIndex(idx)}>
//               <img
//                 key={idx}
//                 src={img.src}
//                 alt={img.title}
//                 loading="lazy"
//                 onLoad={() => setLoading(false)}
//                 className={`w-24 h-24 object-cover rounded cursor-pointer border-2 ${idx === currentIndex ? "border-yellow-500" : "border-transparent"
//                   }`}
//                 onClick={() => setCurrentIndex(idx)}
//               />
//               {/* {img.title && (
//               <div>
//                 <p className="absolute left-0 top-0 p-1 rounded-sm bg-black/50 text-[10px]">{img.title}</p>
//               </div>
//             )} */}
//             </div>
//           ))}
//         </div>

//         {/* Lightbox */}
//         {
//           lightboxOpen && images.length > 0 && (
//             <div className="fade-in-lightbox">
//               <Lightbox
//                 mainSrc={images[currentIndex].src}
//                 nextSrc={images[(currentIndex + 1) % images.length].src}
//                 prevSrc={images[(currentIndex - 1 + images.length) % images.length].src}
//                 imageTitle={images[currentIndex].title}
//                 onCloseRequest={() => setLightboxOpen(false)}
//                 onMovePrevRequest={() =>
//                   setCurrentIndex((currentIndex - 1 + images.length) % images.length)
//                 }
//                 onMoveNextRequest={() =>
//                   setCurrentIndex((currentIndex + 1) % images.length)
//                 }
//                 reactModalStyle={{ overlay: { zIndex: 1500, backgroundColor: "rgba(0,0,0,0.9)" }, content: { padding: "30px" }, }}
//               /></div>
//           )
//         }
//       </div ></div >
//   );
// }