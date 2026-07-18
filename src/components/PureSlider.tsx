
import React, { useEffect, useState, useRef } from "react";
import type { ReactNode } from 'react';
import { MdNavigateBefore, MdNavigateNext, MdPause, MdPlayArrow } from "react-icons/md";
interface PureSliderProps {

    slides: ReactNode[];   // Array of JSX elements (iframe, img, etc.)
    interval?: number | number[];     // Auto-slide interval in ms
}
export default function PureSlider({ slides = [], interval = 3800 }: PureSliderProps) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const videoRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (paused) return;

        let timer: any;



        if (index === 0 && videoRef.current) {
            const iframe = videoRef.current;
            const handleWistiaReady = () => {
                // @ts-ignore
                const wistiaEmbed = window.Wistia?.embed(iframe);
                if (wistiaEmbed) {
                    wistiaEmbed.bind("end", () => {
                        setIndex((prev) => (prev + 1) % slides.length);
                    });


                }
            }

            // Wait a little to ensure Wistia API loads
            const readyTimer = setTimeout(handleWistiaReady, 1000);

            return () => clearTimeout(readyTimer);
        } else {
            // Other slides use interval
            timer = setTimeout(() => {
                setIndex((prev) => (prev + 1) % slides.length);
            }, Array.isArray(interval) ? interval[index] : interval);
        }

        return () => clearTimeout(timer);
    }, [index, interval, paused, slides.length]);

    return (<>
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg max-h-72 md:max-h-[400px] lg:max-h-[650px]">
            {/* Slider wrapper */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="min-w-full">
                        {i === 0 ? React.cloneElement(slide as any, { ref: videoRef }) : slide}
                    </div>
                ))}
            </div>



        </div>

        <div className="absolute bottom-[11%] md:bottom-[13%] left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 shadow-black rounded-full shadow-lg">
            {/* Back Button */}
            <button
                onClick={() => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                // className="absolute left-3 top-1/2 -translate-y-1/2
                //     className=" bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
                // >
                //     ◀
                className="text-white text-3xl hover:scale-110 transition"
            >
                <MdNavigateBefore />
            </button>

            {/* Next Button */}
            <button
                onClick={() => setPaused(!paused)}

                // className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
                //     className=" bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
                // >
                //     ▶
                className="text-white text-2xl mx-3 hover:scale-110 transition"
            >
                {paused ? <MdPlayArrow /> : <MdPause />}
            </button>
            {/* PAUSE / PLAY BUTTON */}
            <button
                onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
                // className=" bg-black/50 text-white px-3 py-2 rounded-full shadow-md hover:bg-black/70"
                // className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full shadow-md hover:bg-black/80"
                // >
                //     {paused ? "▶ Play" : "⏸ Pause"}
                className="text-white text-3xl hover:scale-110 transition"
            >
                <MdNavigateNext />
            </button>

        </div>


    </>)
}