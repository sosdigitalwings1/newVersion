"use client";

import { Info, Brain, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useRouter } from "next/router";
import { FC, useState, useEffect, useRef } from "react";

interface HeroSectionProps {
  onDiscoverClick: () => void;
}

interface HeroSlide {
  video: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const heroSlides: HeroSlide[] = [
  {
    video: "/assets/videos/Slow.mp4",
    title: "SOS SPIRIT",
    subtitle: "FLYBACK",
    description: "Une nouvelle ère de l'horlogerie en titane grade 5, alliant légèreté exceptionnelle et durabilité incomparable.",
    buttonText: "DÉCOUVRIR LA COLLECTION"
  },
  {
    video: "/assets/videos/Advert.mp4", // Add your second video
    title: "MASTER",
    subtitle: "COLLECTION",
    description: "L'excellence horlogère dans sa forme la plus pure, une fusion parfaite entre tradition et innovation.",
    buttonText: "EXPLORER LA COLLECTION"
  }
];

export const HeroSection: FC<HeroSectionProps> = ({ onDiscoverClick }) => {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [canScroll, setCanScroll] = useState(true);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const touchStart = useRef(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWheel = (e: WheelEvent) => {
    if (!canScroll) return;
    
    const now = Date.now();
    if (now - lastScrollTime.current < 1000) return;
  
    const delta = e.deltaY;
    if (Math.abs(delta) < 50) return;
  
    if (delta > 0) { // Scrolling down
      if (currentSlide < heroSlides.length - 1) {
        e.preventDefault();
        handleNextSlide();
      } else {
        setCanScroll(false); // Allow natural scrolling after the last slide
      }
    } else { // Scrolling up
      if (currentSlide > 0) {
        e.preventDefault();
        handlePrevSlide();
      }
    }
  
    lastScrollTime.current = now;
  };
  

  const handleTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!canScroll) return;
    
    const touchEnd = e.touches[0].clientY;
    const delta = touchStart.current - touchEnd;
    
    if (Math.abs(delta) < 50) return;
    
    if (delta > 0) {
      if (currentSlide < heroSlides.length - 1) {
        handleNextSlide();
      }
    } else {
      if (currentSlide > 0) {
        handlePrevSlide();
      }
    }
    
    touchStart.current = touchEnd;
  };

  useEffect(() => {
    const element = document.body;
    element.addEventListener('wheel', handleWheel, { passive: false });
    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);

    return () => {
      element.removeEventListener('wheel', handleWheel);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSlide, canScroll]);

  const handleNextSlide = () => {
    if (isTransitioning || currentSlide >= heroSlides.length - 1) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
    
    scrollTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const handlePrevSlide = () => {
    if (isTransitioning || currentSlide <= 0) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
    
    scrollTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="relative h-[calc(120vh-108px)] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <video
            src={slide.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            aria-label={`${slide.title} video`}
            className="absolute inset-0 object-cover w-full h-full scale-105"
          >
            <track kind="captions" srcLang="fr" label={slide.title} />
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        </div>
      ))}

      {/* Gradient Overlay with animated pattern */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/60 to-transparent">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-30">
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
                {currentHero.title}
              </span>
              <span className="text-7xl tracking-wide block leading-tight">
                {currentHero.subtitle}
              </span>
            </h1>
            <p className="text-xl font-light mb-12 text-gray-200">
              {currentHero.description}
            </p>
            <div className="flex gap-6">
              <button 
                onClick={onDiscoverClick}
                className="bg-white text-black px-12 py-4 text-sm tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                {currentHero.buttonText}
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="border border-white/30 text-white px-12 py-4 text-sm tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute left-8 bottom-8 z-30 flex items-center space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-12 h-0.5 transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Right Controls */}
      <div className="absolute bottom-8 right-8 z-30 flex space-x-4">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2">
        <span className="text-white/80 text-sm font-light tracking-wider">FAIRE DÉFILER</span>
        <ChevronDown className="w-5 h-5 text-white/80 animate-bounce" />
      </div>
    </div>
    
  );
};