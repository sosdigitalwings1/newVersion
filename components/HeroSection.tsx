"use client";

import { Info, Brain, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { FC, useState, useEffect } from "react";

export const HeroSection: FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[calc(120vh-108px)] overflow-hidden">
      <video
        src="/assets/videos/Slow.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        aria-label="Sos Spirit Flyback video"
        className="absolute inset-0 object-cover w-full h-full scale-105"
      >
        <track kind="captions" srcLang="fr" label="Sos Spirit Flyback" />
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </video>

      {/* Gradient Overlay with animated pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0">
        <div className="max-w-[1920px] mx-auto px-8 h-full flex items-center">
          <div 
            className={`text-white max-w-2xl transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-6">
              <span className="text-sm tracking-[0.3em] text-gray-300">NOUVELLE COLLECTION</span>
            </div>
            <h1 className="font-extralight mb-6">
              <span className="text-7xl tracking-wide block mb-2 leading-tight">
                SOS SPIRIT
              </span>
              <span className="text-7xl tracking-wide block leading-tight">
                FLYBACK
              </span>
            </h1>
            <p className="text-xl font-light mb-12 text-gray-200">
              Une nouvelle ère de l'horlogerie en titane grade 5, 
              alliant légèreté exceptionnelle et durabilité incomparable.
            </p>
            <div className="flex gap-6">
              <button className="bg-white text-black px-12 py-4 text-sm tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                DÉCOUVRIR LA COLLECTION
              </button>
              <button className="border border-white/30 text-white px-12 py-4 text-sm tracking-wider hover:bg-white/10 transition-all duration-300">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <button 
          className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Informations"
        >
          <Info className="w-5 h-5" />
        </button>
        <button 
          className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Caractéristiques techniques"
        >
          <Brain className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-white/80 text-sm font-light tracking-wider">FAIRE DÉFILER</span>
        <ChevronDown className="w-5 h-5 text-white/80 animate-bounce" />
      </div>

      {/* Technical Specs Overlay */}
      {/* <div className="absolute top-8 left-8 flex space-x-4">
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white/90 text-sm font-light">TITANE GRADE 5</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white/90 text-sm font-light">CHRONOGRAPHE FLYBACK</span>
        </div>
      </div> */}
    </div>
  );
};