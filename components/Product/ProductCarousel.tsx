import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { Product } from "./types";
import Image from 'next/image';

type FilterOption = "all" | "new" | "bestseller";

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProducts = React.useMemo(() => {
    switch (activeFilter) {
      case "new":
        return products.filter((product) => product.isNew);
      case "bestseller":
        return products.filter((product) =>
          product.keySpecs.some((spec) => 
            spec.value.toLowerCase().includes("bestseller")
          )
        );
      default:
        return products;
    }
  }, [products, activeFilter]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex * (100 / 4));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    const newIndex = Math.round((scrollLeft - walk) / (100 / 4));
    if (newIndex !== currentIndex) {
      setCurrentIndex(Math.max(0, Math.min(newIndex, filteredProducts.length - 4)));
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, filteredProducts.length - 4));
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
          prev >= filteredProducts.length - 4 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered, isDragging, filteredProducts.length]);

  return (
    <section className="w-full bg-gradient-to-b from-white to-neutral-50 py-32">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col space-y-16 mb-24">
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-neutral-100/80 backdrop-blur-sm rounded-full">
              <FilterButton
                filter="all"
                label="CURATED SELECTION"
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <FilterButton 
                filter="new" 
                label="NEW ARRIVALS" 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
              />
              <FilterButton
                filter="bestseller"
                label="TRENDING NOW"
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            </div>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="relative overflow-hidden px-4"
          onMouseDown={handleMouseDown}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => {
            setIsDragging(false);
            setIsHovered(false);
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
        >
          <div
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              transition: isDragging 
                ? 'none' 
                : `transform ${isHovered ? '300ms' : '700ms'} cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
            className="flex"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[25%] px-4"
              >
                <a 
                  href={`/products/${product.id}`} 
                  className="group block"
                >
                  <div className="relative aspect-[4/5] mb-8 bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl">
                    <Image
                      
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={500}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-6 left-6">
                        <span className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
                          New Arrival
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-4 px-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium leading-tight tracking-wide text-neutral-900 group-hover:text-black transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {product.keySpecs.map((spec, index) => (
                        <p key={index} className="text-sm text-neutral-600 font-light leading-relaxed">
                          {spec.value}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-lg font-semibold text-neutral-900">
                        {product.price}
                      </p>
                      <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg transition-colors hover:bg-blue-100">
                        View Details
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/3 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-r-2xl shadow-lg
              transition-all duration-300 hover:bg-black hover:text-white
              ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= filteredProducts.length - 4}
            className={`absolute right-0 top-1/3 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-l-2xl shadow-lg
              transition-all duration-300 hover:bg-black hover:text-white
              ${currentIndex >= filteredProducts.length - 4 ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-3">
            {Array.from({ length: Math.ceil(filteredProducts.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 4)}
                className={`transition-all duration-500 ${
                  Math.floor(currentIndex / 4) === index 
                    ? 'w-10 h-1.5 bg-blue-600' 
                    : 'w-2 h-1.5 bg-neutral-200 hover:bg-neutral-300'
                } rounded-full`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FilterButton = ({
  filter,
  label,
  activeFilter,
  setActiveFilter,
}: {
  filter: FilterOption;
  label: string;
  activeFilter: FilterOption;
  setActiveFilter: (filter: FilterOption) => void;
}) => (
  <button
    onClick={() => setActiveFilter(filter)}
    className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 rounded-full
      ${
        activeFilter === filter 
          ? "bg-white text-black shadow-sm" 
          : "text-neutral-600 hover:text-black"
      }`}
  >
    {label}
  </button>
);

export default ProductCarousel;




// import React, { useState, useRef, type RefObject } from "react"
// import { ArrowLeft, ArrowRight } from "lucide-react"
// import type { Product } from "./types"

// type FilterOption = "all" | "new" | "bestseller"

// const ProductCarousel = ({ products }: { products: Product[] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [activeFilter, setActiveFilter] = useState<FilterOption>("all")
//   const [isHovered, setIsHovered] = useState(false)
//   const carouselRef: RefObject<HTMLDivElement> = useRef(null)

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1))
//   }

//   const filteredProducts = React.useMemo(() => {
//     switch (activeFilter) {
//       case "new":
//         return products.filter((product) => product.isNew)
//       case "bestseller":
//         return products.filter((product) =>
//           product.keySpecs.some((spec) => spec.value.toLowerCase().includes("bestseller")),
//         )
//       default:
//         return products
//     }
//   }, [products, activeFilter])

//   return (
//     <section className="w-full bg-white py-16">
//       <div className="max-w-[1400px] mx-auto px-8">
//         <div className="flex flex-col space-y-6 mb-16">
//           <div className="flex justify-center space-x-16 border-b border-[#e5e5e5]">
//             <FilterButton
//               filter="all"
//               label="GIFT SELECTION"
//               activeFilter={activeFilter}
//               setActiveFilter={setActiveFilter}
//             />
//             <FilterButton filter="new" label="NEW" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
//             <FilterButton
//               filter="bestseller"
//               label="BEST SELLERS"
//               activeFilter={activeFilter}
//               setActiveFilter={setActiveFilter}
//             />
//           </div>
//         </div>
//         <div className="px-0">
//           <div
//             ref={carouselRef}
//             className="relative overflow-hidden"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div
//               style={{
//                 transform: `translateX(-${currentIndex * (100 / filteredProducts.length)}%)`,
//                 transition: isHovered ? "transform 0.3s ease-in-out" : "transform 0.7s ease-in-out",
//               }}
//               className="flex transition-transform duration-700 ease-in-out"
//             >
//               {filteredProducts.map((product) => (
//                 <div key={product.id} className="min-w-[25%] px-4 transition-all duration-500">
//                   <div className="group">
//                     <div className="relative aspect-square mb-8 bg-[#f8f8f8]">
//                       <img
//                         src={product.images[0] || "/placeholder.svg"}
//                         alt={product.name}
//                         className="object-contain w-full h-full p-8 transition-all duration-700 group-hover:scale-105"
//                       />
//                       {product.isNew && (
//                         <div className="absolute top-4 left-4">
//                           <span className="text-[#0066cc] text-sm font-medium">New</span>
//                         </div>
//                       )}
//                     </div>
//                     <div className="text-center space-y-3">
//                       <h3 className="text-base font-medium tracking-wider text-black">{product.name}</h3>
//                       <div className="text-sm text-[#666666] space-y-1">
//                         {product.keySpecs.map((spec, index) => (
//                           <p key={index} className="font-light">
//                             {spec.value}
//                           </p>
//                         ))}
//                       </div>
//                       <p className="text-base font-medium pt-2 text-black">{product.price}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={prevSlide}
//               disabled={currentIndex === 0}
//               className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2
//                 transition-all duration-300 hover:bg-black hover:text-white
//                 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-90 hover:opacity-100"}`}
//               aria-label="Previous slide"
//             >
//               <ArrowLeft className="w-4 h-4" />
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={currentIndex === filteredProducts.length - 1}
//               className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2
//                 transition-all duration-300 hover:bg-black hover:text-white
//                 ${currentIndex === filteredProducts.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-90 hover:opacity-100"}`}
//               aria-label="Next slide"
//             >
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const FilterButton = ({
//   filter,
//   label,
//   activeFilter,
//   setActiveFilter,
// }: {
//   filter: FilterOption
//   label: string
//   activeFilter: FilterOption
//   setActiveFilter: (filter: FilterOption) => void
// }) => (
//   <button
//     onClick={() => setActiveFilter(filter)}
//     className={`px-4 py-4 text-sm tracking-wider transition-all duration-300
//       ${
//         activeFilter === filter ? "border-b-2 border-black text-black font-medium" : "text-[#666666] hover:text-black"
//       }`}
//   >
//     {label}
//   </button>
// )

// export default ProductCarousel

