import Go_BackButton from "../../components/GoBackButton";

export default function Project_Status() {
  return (<>
  <Go_BackButton/>
    <div className="w-full h-screen bg-black">
      <div className="relative w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1185851711?h=bc96a327df&autoplay=1&muted=1&loop=1&controls=1"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>
    </div>
    </>
  );
}