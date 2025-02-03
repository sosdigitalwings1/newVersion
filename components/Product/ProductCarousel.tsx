import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Product } from './types';

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex * (100 / 3));
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newIndex = Math.round((scrollLeft - walk) / (100 / 3));
    if (newIndex !== currentIndex) {
      setCurrentIndex(Math.max(0, Math.min(newIndex, products.length - 3)));
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, products.length - 3));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered && !isDragging) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => 
          prev >= products.length - 3 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered, isDragging, products.length]);

  return (
    <section 
      className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={carouselRef}
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`min-w-[33.333%] p-3 transition-all duration-500 ${
                idx === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
              }`}
            >
              <a 
                href={`/products/${product.id}`} 
                className="group block transform transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-500">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <div className="absolute top-3 left-3 transform -rotate-2">
                      <span className="bg-black text-white px-3 py-1 text-xs tracking-wider rounded-sm">
                        NOUVEAU
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="pt-4 space-y-2">
                  <h3 className="font-light text-lg group-hover:text-gray-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    {product.keySpecs.map((spec, index) => (
                      <p key={index} className="font-light">
                        {spec.value}
                      </p>
                    ))}
                  </div>
                  <p className="font-medium text-base tracking-wide">{product.price}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-[-1rem] top-1/3 transform bg-white/90 p-3 rounded-full shadow-md backdrop-blur-sm 
            transition-all duration-300 hover:scale-105 hover:bg-white
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-90 hover:opacity-100'}`}
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= products.length - 3}
          className={`absolute right-[-1rem] top-1/3 transform bg-white/90 p-3 rounded-full shadow-md backdrop-blur-sm 
            transition-all duration-300 hover:scale-105 hover:bg-white
            ${currentIndex >= products.length - 3 ? 'opacity-50 cursor-not-allowed' : 'opacity-90 hover:opacity-100'}`}
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
          {Array.from({ length: products.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 ${
                currentIndex === index 
                  ? 'w-6 h-1.5 bg-black' 
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}