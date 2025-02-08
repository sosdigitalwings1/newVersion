// import { useState, useEffect, useRef } from 'react';
import React, { useState, useRef,useEffect, type RefObject } from "react"

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Product } from './types';
import Image from 'next/image';
type FilterOption = "all" | "new" | "bestseller"

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all")
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

  return (
    <section 
      className="w-full bg-white py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1400px] mx-auto px-8">
      <div className="flex flex-col space-y-6 mb-16">
          <div className="flex justify-center space-x-16 border-b border-[#e5e5e5]">
            <FilterButton
              filter="all"
              label="GIFT SELECTION"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <FilterButton filter="new" label="NEW" activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <FilterButton
              filter="bestseller"
              label="BEST SELLERS"
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        </div>

      <div 
        ref={carouselRef}
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        // onMouseEnter={() => setIsHovered(true)}
        //     onMouseLeave={() => setIsHovered(false)}
      >
        <div
          // className="flex transition-transform duration-500 ease-out will-change-transform"
          // style={{
          //   transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          // }}
          style={{
            transform: `translateX(-${currentIndex * (100 / filteredProducts.length)}%)`,
            transition: isHovered ? "transform 0.3s ease-in-out" : "transform 0.7s ease-in-out",
          }}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {/* {products.map((product, idx) => ( */}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`min-w-[25%] px-4 transition-all duration-500 
                
              `}
            >
              <a 
                href={`/products/${product.id}`} 
                className="group block transform transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className="relative aspect-square mb-8 bg-[#f8f8f8]">
                <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="object-contain w-full h-full p-8 transition-all duration-700 group-hover:scale-105"
                      />
                  {product.isNew && (
                        <div className="absolute top-4 left-4">
                          <span className="text-[#0066cc] text-sm font-medium">New</span>
                        </div>
                      )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="pt-4 space-y-2">
                <h3 className="text-base font-medium tracking-wider text-black">{product.name}</h3>

                <div className="text-sm text-[#666666] space-y-1">
                        {product.keySpecs.map((spec, index) => (
                          <p key={index} className="font-light">
                            {spec.value}
                          </p>
                        ))}
                      </div>
                      <p className="text-base font-medium pt-2 text-black">{product.price}</p>
                    </div>
              </a>
            </div>
          ))}
        </div>

        <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2
                transition-all duration-300 hover:bg-black hover:text-white
                ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-90 hover:opacity-100"}`}
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === filteredProducts.length - 1}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2
                transition-all duration-300 hover:bg-black hover:text-white
                ${currentIndex === filteredProducts.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-90 hover:opacity-100"}`}
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
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
  filter: FilterOption
  label: string
  activeFilter: FilterOption
  setActiveFilter: (filter: FilterOption) => void
}) => (
  <button
    onClick={() => setActiveFilter(filter)}
    className={`px-4 py-4 text-sm tracking-wider transition-all duration-300
      ${
        activeFilter === filter ? "border-b-2 border-black text-black font-medium" : "text-[#666666] hover:text-black"
      }`}
  >
    {label}
  </button>
)




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

