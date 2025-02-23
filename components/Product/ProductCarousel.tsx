// import React, { useState, useRef, useEffect } from "react";
// import { ArrowLeft, ArrowRight, Star } from "lucide-react";
// import type { Product } from "./types";
// import Image from 'next/image';

// type FilterOption = "all" | "new" | "bestseller";

// interface ProductCarouselProps {
//   products: Product[];
// }

// export function ProductCarousel({ products }: ProductCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const filteredProducts = React.useMemo(() => {
//     switch (activeFilter) {
//       case "new":
//         return products.filter((product) => product.isNew);
//       case "bestseller":
//         return products.filter((product) =>
//           product.keySpecs.some((spec) => 
//             spec.value.toLowerCase().includes("bestseller")
//           )
//         );
//       default:
//         return products;
//     }
//   }, [products, activeFilter]);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
//     setScrollLeft(currentIndex * (100 / 4));
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
//     const walk = (x - startX) * 1.5;
//     const newIndex = Math.round((scrollLeft - walk) / (100 / 4));
//     if (newIndex !== currentIndex) {
//       setCurrentIndex(Math.max(0, Math.min(newIndex, filteredProducts.length - 4)));
//     }
//   };

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => Math.min(prev + 1, filteredProducts.length - 4));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (!isHovered && !isDragging) {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => 
//           prev >= filteredProducts.length - 4 ? 0 : prev + 1
//         );
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isHovered, isDragging, filteredProducts.length]);

//   return (
//     <section className="w-full bg-gradient-to-b from-white to-neutral-50 py-32">
//       <div className="max-w-[1920px] mx-auto px-8 lg:px-12">
//         <div className="flex flex-col space-y-16 mb-24">
//           <div className="flex justify-center">
//             <div className="inline-flex p-1.5 bg-neutral-100/80 backdrop-blur-sm rounded-full">
//               <FilterButton
//                 filter="all"
//                 label="CURATED SELECTION"
//                 activeFilter={activeFilter}
//                 setActiveFilter={setActiveFilter}
//               />
//               <FilterButton 
//                 filter="new" 
//                 label="NEW ARRIVALS" 
//                 activeFilter={activeFilter} 
//                 setActiveFilter={setActiveFilter} 
//               />
//               <FilterButton
//                 filter="bestseller"
//                 label="TRENDING NOW"
//                 activeFilter={activeFilter}
//                 setActiveFilter={setActiveFilter}
//               />
//             </div>
//           </div>
//         </div>

//         <div 
//           ref={carouselRef}
//           className="relative overflow-hidden px-4"
//           onMouseDown={handleMouseDown}
//           onMouseUp={() => setIsDragging(false)}
//           onMouseLeave={() => {
//             setIsDragging(false);
//             setIsHovered(false);
//           }}
//           onMouseMove={handleMouseMove}
//           onMouseEnter={() => setIsHovered(true)}
//         >
//           <div
//             style={{
//               transform: `translateX(-${currentIndex * 25}%)`,
//               transition: isDragging 
//                 ? 'none' 
//                 : `transform ${isHovered ? '300ms' : '700ms'} cubic-bezier(0.4, 0, 0.2, 1)`,
//             }}
//             className="flex"
//           >
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="min-w-[25%] px-4"
//               >
//                 <a 
//                   href={`/products/${product.id}`} 
//                   className="group block"
//                 >
//                   <div className="relative aspect-[4/5] mb-8 bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl">
//                     <Image
                      
//                       src={product.images[0] || "/placeholder.svg"}
//                       alt={product.name}
//                       width={400}
//                       height={500}
//                       className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
//                     />
//                     {product.isNew && (
//                       <div className="absolute top-6 left-6">
//                         <span className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
//                           New Arrival
//                         </span>
//                       </div>
//                     )}
//                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div className="space-y-4 px-2">
//                     <div className="flex items-start justify-between gap-4">
//                       <h3 className="text-lg font-medium leading-tight tracking-wide text-neutral-900 group-hover:text-black transition-colors">
//                         {product.name}
//                       </h3>
//                       <div className="flex items-center gap-1 text-amber-500">
//                         <Star className="w-4 h-4 fill-current" />
//                         <span className="text-sm font-medium">4.8</span>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       {product.keySpecs.map((spec, index) => (
//                         <p key={index} className="text-sm text-neutral-600 font-light leading-relaxed">
//                           {spec.value}
//                         </p>
//                       ))}
//                     </div>
//                     <div className="flex items-center justify-between pt-2">
//                       <p className="text-lg font-semibold text-neutral-900">
//                         {product.price}
//                       </p>
//                       <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg transition-colors hover:bg-blue-100">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={prevSlide}
//             disabled={currentIndex === 0}
//             className={`absolute left-0 top-1/3 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-r-2xl shadow-lg
//               transition-all duration-300 hover:bg-black hover:text-white
//               ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
//             aria-label="Previous slide"
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             disabled={currentIndex >= filteredProducts.length - 4}
//             className={`absolute right-0 top-1/3 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-4 rounded-l-2xl shadow-lg
//               transition-all duration-300 hover:bg-black hover:text-white
//               ${currentIndex >= filteredProducts.length - 4 ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
//             aria-label="Next slide"
//           >
//             <ArrowRight className="w-6 h-6" />
//           </button>

//           <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-3">
//             {Array.from({ length: Math.ceil(filteredProducts.length / 4) }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index * 4)}
//                 className={`transition-all duration-500 ${
//                   Math.floor(currentIndex / 4) === index 
//                     ? 'w-10 h-1.5 bg-blue-600' 
//                     : 'w-2 h-1.5 bg-neutral-200 hover:bg-neutral-300'
//                 } rounded-full`}
//                 aria-label={`Go to slide group ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const FilterButton = ({
//   filter,
//   label,
//   activeFilter,
//   setActiveFilter,
// }: {
//   filter: FilterOption;
//   label: string;
//   activeFilter: FilterOption;
//   setActiveFilter: (filter: FilterOption) => void;
// }) => (
//   <button
//     onClick={() => setActiveFilter(filter)}
//     className={`px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 rounded-full
//       ${
//         activeFilter === filter 
//           ? "bg-white text-black shadow-sm" 
//           : "text-neutral-600 hover:text-black"
//       }`}
//   >
//     {label}
//   </button>
// );

// export default ProductCarousel;


"use client"

import React, { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import type { Product } from "./types"
import Image from "next/image"

type FilterOption = "all" | "new" | "bestseller"

interface ProductCarouselProps {
  products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all")
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const filteredProducts = React.useMemo(() => {
    switch (activeFilter) {
      case "new":
        return products.filter((product) => product.isNew)
      case "bestseller":
        return products.filter((product) =>
          product.keySpecs.some((spec) => spec.value.toLowerCase().includes("bestseller")),
        )
      default:
        return products
    }
  }, [products, activeFilter])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(currentIndex * (100 / itemsPerView))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(currentIndex * (100 / itemsPerView))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    const newIndex = Math.round((scrollLeft - walk) / (100 / itemsPerView))
    if (newIndex !== currentIndex) {
      setCurrentIndex(Math.max(0, Math.min(newIndex, filteredProducts.length - itemsPerView)))
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1.5
    const newIndex = Math.round((scrollLeft - walk) / (100 / itemsPerView))
    if (newIndex !== currentIndex) {
      setCurrentIndex(Math.max(0, Math.min(newIndex, filteredProducts.length - itemsPerView)))
    }
  }

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.min(prev + 1, filteredProducts.length - itemsPerView))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.max(0, prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (!isHovered && !isDragging) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= filteredProducts.length - itemsPerView ? 0 : prev + 1))
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isHovered, isDragging, filteredProducts.length, itemsPerView])

  return (
    <section className="w-full bg-gradient-to-b from-white to-neutral-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-16 mb-12 sm:mb-16 lg:mb-24">
          <div className="flex justify-center">
            <div className="inline-flex flex-nowrap overflow-x-auto sm:overflow-x-visible p-1.5 bg-neutral-100/80 backdrop-blur-sm rounded-full gap-2">
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
          onTouchStart={handleTouchStart}
          onMouseUp={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
          onMouseLeave={() => {
            setIsDragging(false)
            setIsHovered(false)
          }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsHovered(true)}
        >
          <div
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: isDragging
                ? "none"
                : `transform ${isHovered ? "300ms" : "700ms"} cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
            className="flex"
          >
            {filteredProducts.map((product) => (
              <div key={product.id} style={{ width: `${100 / itemsPerView}%` }} className="px-2 sm:px-3 md:px-4">
                <a href={`/products/${product.id}`} className="group block">
                  <div className="relative aspect-[4/5] mb-4 sm:mb-6 lg:mb-8 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-700 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                        <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                          New Arrival
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="space-y-2 sm:space-y-3 px-1 sm:px-2">
                    <div className="flex items-start justify-between gap-2 sm:gap-4">
                      <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-tight tracking-wide text-neutral-900 group-hover:text-black transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        <span className="text-xs sm:text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {product.keySpecs.slice(0, 2).map((spec, index) => (
                        <p key={index} className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                          {spec.value}
                        </p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-neutral-900">{product.price}</p>
                      <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 rounded-lg transition-colors hover:bg-blue-100">
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
            className={`absolute left-0 top-1/3 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-2 sm:p-4 rounded-r-xl sm:rounded-r-2xl shadow-lg
              transition-all duration-300 hover:bg-black hover:text-white
              ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= filteredProducts.length - itemsPerView}
            className={`absolute right-0 top-1/3 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-2 sm:p-4 rounded-l-xl sm:rounded-l-2xl shadow-lg
              transition-all duration-300 hover:bg-black hover:text-white
              ${currentIndex >= filteredProducts.length - itemsPerView ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
            aria-label="Next slide"
          >
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3">
            {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`transition-all duration-500 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "w-6 sm:w-10 h-1 sm:h-1.5 bg-blue-600"
                    : "w-1.5 sm:w-2 h-1 sm:h-1.5 bg-neutral-200 hover:bg-neutral-300"
                } rounded-full`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FilterButton = ({
  filter,
  label,
  activeFilter,
  setActiveFilter,
}: {
  filter: FilterOption
  label: string
  activeFilter: FilterOption
  setActiveFilter: (filter: FilterOption) => void
}) => (
  <button
    onClick={() => setActiveFilter(filter)}
    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 rounded-full whitespace-nowrap
      ${activeFilter === filter ? "bg-white text-black shadow-sm" : "text-neutral-600 hover:text-black"}`}
  >
    {label}
  </button>
)

export default ProductCarousel

