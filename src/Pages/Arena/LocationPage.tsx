import bgImage from '../../assets/projecthighexterior.webp';
import Header from '../../components/Header';
// import location from '../../videos/location_arena.mp4';
import { Link } from 'react-router-dom'

export default function LocationPage() {
  return (
    <div
      className="h-screen w-screen relative bg-cover bg-no-repeat overflow-hidden bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <div className='absolute bg-black/70 h-screen w-screen'></div>

      {/* Wistia video overlay using iframe */}
      <div className="absolute top-[35%]  lg:top-[10%] xl:top-[10%] 2xl:top-1 left-0 w-full h-full flex items-center justify-center text-white">
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://fast.wistia.net/embed/iframe/ak6r9x3joq?videoFoam=true&autoplay=true"
            title="Wistia Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "0",
            }}
          />
          {/* <video src={location}  /> */}

          {/* <Link
            to="/360"
            className="absolute bottom-10 right-2 z-50 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            360
          </Link> */}
        </div>
      </div>
      {/* <Navbar /> */}

      <div className="absolute bottom-14 md:bottom-20 lg:bottom-12 right-6 z-30">
        <Link to="/360"><button

          className="bg-black/50 text-white lg:bg-white/70 lg:text-gray-800/90
           hover:text-black text-[10px] w-16 h-16 font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center"
        >
          360°
        </button></Link>
      </div>



    </div>
  );
}
