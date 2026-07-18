import { useState } from 'react';
import BackButton from '../components/GoBackButton';

// 1. Define the shape of your video data
type VideoKey = 'Default' | 'Process' | 'Materials' | 'Standard' | 'Testing' | 'Certification';

interface Tab {
  id: Exclude<VideoKey, 'Default'>; // Tabs only contain the 5 sub-categories
  label: string;
}

export default function QualityTab() {
  // 2. Strongly type the state
  const [activeTab, setActiveTab] = useState<VideoKey>('Default');

//   const videoMap: Record<VideoKey, string> = {
//     Default: "1172527614/f22539e836",
//     Process: "1172527715/74c32336e5",
//     Materials: "1172527654/cff6281142",
//     Standard: "1172527764/9dd9417bf4",
//     Testing: "1172527865/33415027d4",
//     Certification: "1172527820/458a3f8da6",
//   };

const videoMap: Record<VideoKey, string> = {
    Default: "1175735592/9bcb1f971a",
    Process: "1175735726/afb8703717",
    Materials: "1175735781/c0f5b40cdf",
    Standard: "1175735694/3bb501e4e7",
    Testing: "1175735761/e1e1e90102",
    Certification: "1175735664/b3cd35311b",
  };

  const tabs: Tab[] = [
    { id: 'Process', label: 'Construction Process' },
    { id: 'Materials', label: 'Leakage Proofing' },
    { id: 'Standard', label: 'MEP' },
    { id: 'Testing', label: 'Finishing' },
    { id: 'Certification', label: 'IT Infra' },
  ];

  const getVimeoSrc = (id: VideoKey): string => {
    const videoData = videoMap[id];
    if (!videoData) return '';

    const [videoId, hash] = videoData.split('/');
    // Use background=0 to ensure the control bar is visible and interactive
    return `https://player.vimeo.com/video/${videoId}?h=${hash}&autoplay=1&controls=1&muted=0&title=0&byline=0&portrait=0&background=0`;
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <BackButton />

      {/* 1. Dynamic Video Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <iframe
          key={activeTab}
          src={getVimeoSrc(activeTab)}
          // Adjusted class: We use aspect-video to ensure the control bar stays within view
          // and h-full/w-full to make sure it doesn't bleed off the screen edges.
          className="w-full aspect-video max-h-[87vh] z-0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Quality Video Content"
        />

        {/* We reduced the vignette intensity so it doesn't block the bottom controls */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Overlay Text for Active State 
      {activeTab !== 'Default' && (
        <div className="absolute top-20 left-0 w-full z-10 flex justify-center">
          <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
            <p className="text-[#FCF6BA] text-lg font-medium tracking-wide bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm">
              Viewing <span className="underline decoration-[#B38728] underline-offset-8">
                {tabs.find(t => t.id === activeTab)?.label}
              </span>
            </p>
          </div>
        </div>
      )}*/}

      {/* 3. Bottom Navigation */}
      {/* 3. Bottom Navigation */}
      <div className="absolute bottom-2 left-0 w-full z-20 flex justify-center px-4">
        {/* Changed w-full to w-auto to shrink-wrap the content */}
        <div className="w-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-2xl">
          {/* Removed justify-between and added w-max to ensure buttons sit tightly together */}
          <div className="flex flex-row items-center justify-center gap-1 md:gap-2 w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                // Removed flex-1 so buttons don't stretch; added whitespace-nowrap
                className={`relative py-3 px-4 md:px-6 text-[10px] md:text-xs 
            font-bold uppercase tracking-widest transition-all duration-500 rounded-xl whitespace-nowrap
            ${activeTab === tab.id
                    ? 'text-black bg-gradient-to-b from-[rgb(137,127,115)] to-[rgb(249,249,248)]  shadow-[0_10px_20px_rgba(179,135,40,0.3)] scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}