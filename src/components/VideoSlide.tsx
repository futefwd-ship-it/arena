import  { forwardRef } from "react";

const VideoSlide = forwardRef<HTMLIFrameElement>((props, ref) => (
  <iframe
    ref={ref}
    src="https://fast.wistia.net/embed/iframe/gjqpm13f05?videoFoam=true&autoplay=true"
    allowTransparency={true}
    frameBorder="0"
    scrolling="no"
    allowFullScreen
    style={{ width: "100%", height: "650px" }}
    title="Wistia Video"
    {...props}
  />
));

export default VideoSlide;
