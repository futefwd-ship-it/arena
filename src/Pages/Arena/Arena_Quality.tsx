// import Quality from '../../videos/QualityConstruction.mp4'
import Go_BackButton from '../../components/GoBackButton';

export default function Arena_Quality() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-black">
   
         {/* Wistia Video Wrapper */}
         <div className="w-full h-full max-h-screen flex justify-center items-center">
           <iframe
             src="https://fast.wistia.net/embed/iframe/7endp743th.html"
             title="Wistia Video"
             allow="autoplay; fullscreen; picture-in-picture"
             allowFullScreen
             frameBorder="0"
             scrolling="no"
             className="w-full h-full max-h-screen"
           />
         </div>
   
         <Go_BackButton />
       </div>
     );
   }
   