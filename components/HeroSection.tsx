"use client";

import { Info, Brain } from "lucide-react";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <div className="relative h-[calc(150vh-108px)]">
      <video
        src="/assets/videos/Slow.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Sos Spirit Flyback video"
        className="absolute inset-0 object-cover w-full h-full"
      >
        <track kind="captions" srcLang="en" label="Sos Spirit Flyback" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
        <div className="max-w-[1920px] mx-auto px-8 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="font-extralight mb-4">
              <span className="text-6xl tracking-wide block mb-1">SOS SPIRIT</span>
              <span className="text-6xl tracking-wide block">FLYBACK</span>
            </h1>
            <p className="text-xl font-light mb-8">Maintenant disponible en titane</p>
            <button className="bg-white text-black px-12 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors">
              Découvrir
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Icons */}
      <div className="absolute bottom-8 right-8 flex space-x-3">
        <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-colors">
          <Info className="w-5 h-5" />
        </button>
        <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-colors">
          <Brain className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="text-white/80 text-sm font-light">Faire défiler</span>
      </div>
    </div>
  );
};