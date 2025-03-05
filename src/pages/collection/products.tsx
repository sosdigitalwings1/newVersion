// "use client";

// import Head from "next/head";
// import { useState, useEffect } from "react";
// import Header from "components/Header";
// import { Filters } from "components/Filters";
// import { FilterState } from "types";
// import { watches } from "data/watches";
// import { SlidersHorizontal } from "lucide-react";
// import { Footer } from "components/Footer";
// import { ProductGrid } from "components/ProductGrid";
// import { ProductCarousel } from "components/Product/ProductCarousel";
// import { sampleProducts } from "components/Product/sampleProduct";
// import Image from "next/image";

// export default function WatchCollection() {
//   const [isFiltersOpen, setIsFiltersOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [filters, setFilters] = useState<FilterState>({
//     collections: [],
//     materials: [],
//     movements: [],
//     diameters: [],
//     priceRange: [0, 10000],
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredWatches = watches.filter((watch) => {
//     if (
//       filters.collections.length &&
//       !filters.collections.includes(watch.collection)
//     )
//       return false;
//     if (filters.materials.length && !filters.materials.includes(watch.material))
//       return false;
//     if (
//       watch.price < filters.priceRange[0] ||
//       watch.price > filters.priceRange[1]
//     )
//       return false;
//     return true;
//   });

//   return (
//     <div
//       className={`min-h-screen bg-white transition-opacity duration-500 ${
//         isLoading ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       <Head>
//         <title>Collection SOS Spirit Flyback | Longines</title>
//         <meta
//           name="description"
//           content="Découvrez notre collection de montres SOS Spirit Flyback, alliant légèreté exceptionnelle et durabilité incomparable."
//         />
//       </Head>

//       <Header />

//       <main>
//         {/* Hero Banner */}
//         <div className="relative h-[70vh] bg-gray-900 overflow-hidden">
//           <Image
//             src="/assets/shop.webp"
//             alt="Collection Banner"
//             width={1920}
//             height={1080}
//             className="w-full h-full object-cover opacity-70 transform scale-105 transition-transform duration-10000 hover:scale-100"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//           <div className="absolute inset-0 flex items-center justify-center text-white">
//             <div className="text-center transform translate-y-0 transition-transform duration-1000">
//               <h1 className="text-6xl font-extralight mb-6 tracking-wider">
//                 SOS SPIRIT FLYBACK
//               </h1>
//               <p className="text-xl font-light max-w-2xl mx-auto px-4">
//                 Une nouvelle ère de l'horlogerie en titane grade 5, alliant
//                 légèreté exceptionnelle et durabilité incomparable.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Collection Content */}
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="flex justify-between items-center mb-12">
//             <div>
//               <h2 className="text-3xl font-extralight mb-3">LA COLLECTION</h2>
//               <p className="text-gray-600">{filteredWatches.length} modèles</p>
//             </div>
//             <button
//               onClick={() => setIsFiltersOpen(true)}
//               className="group flex items-center space-x-3 px-8 py-4 border border-black hover:bg-black transition-all duration-300"
//             >
//               <SlidersHorizontal className="h-5 w-5 group-hover:text-white transition-colors" />
//               <span className="text-sm tracking-wider group-hover:text-white transition-colors">
//                 FILTRES
//               </span>
//             </button>
//           </div>

//           <Filters
//             filters={filters}
//             setFilters={setFilters}
//             isOpen={isFiltersOpen}
//             onClose={() => setIsFiltersOpen(false)}
//           />

//           <div className="opacity-0 animate-fade-in">
//             <ProductGrid watches={filteredWatches} />
//           </div>
//         </div>

//         {/* Featured Section */}
//         <section className="bg-gray-50 py-24">
//           <ProductCarousel products={sampleProducts} />
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// // "use client"

// // import { useState, useEffect } from "react"
// // import Header from "components/Header"
// // import { Filters } from "components/Filters"
// // import type { FilterState } from "types"
// // import { watches } from "data/watches"
// // import { SlidersHorizontal } from "lucide-react"
// // import { Footer } from "components/Footer"
// // import { ProductGrid } from "components/ProductGrid"
// // import { ProductCarousel } from "components/Product/ProductCarousel"
// // import { sampleProducts } from "components/Product/sampleProduct"
// // import Image from "next/image"

// // export default function WatchCollection() {
// //   const [isFiltersOpen, setIsFiltersOpen] = useState(false)
// //   const [isLoading, setIsLoading] = useState(true)
// //   const [filters, setFilters] = useState<FilterState>({
// //     collections: [],
// //     materials: [],
// //     movements: [],
// //     diameters: [],
// //     priceRange: [0, 10000],
// //   })

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsLoading(false)
// //     }, 500)
// //     return () => clearTimeout(timer)
// //   }, [])

// //   const filteredWatches = watches.filter((watch) => {
// //     if (filters.collections.length && !filters.collections.includes(watch.collection)) return false
// //     if (filters.materials.length && !filters.materials.includes(watch.material)) return false
// //     if (watch.price < filters.priceRange[0] || watch.price > filters.priceRange[1]) return false
// //     return true
// //   })

// //   return (
// //     <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
// //       {/* Remove Head component since it's not supported in app directory */}
// //       <Header />

// //       <main>
// //         {/* Hero Banner */}
// //         <div className="relative h-[70vh] bg-gray-900 overflow-hidden">
// //           <Image
// //             src="/assets/shop.webp"
// //             alt="Collection Banner"
// //             width={1920}
// //             height={1080}
// //             priority // Add priority for hero image
// //             quality={90} // Add quality for better image optimization
// //             className="w-full h-full object-cover opacity-70 transform scale-105 transition-transform duration-10000 hover:scale-100"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
// //           <div className="absolute inset-0 flex items-center justify-center text-white">
// //             <div className="text-center transform translate-y-0 transition-transform duration-1000">
// //               <h1 className="text-6xl font-extralight mb-6 tracking-wider">SOS SPIRIT FLYBACK</h1>
// //               <p className="text-xl font-light max-w-2xl mx-auto px-4">
// //                 Une nouvelle ère de l'horlogerie en titane grade 5, alliant légèreté exceptionnelle et durabilité
// //                 incomparable.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Collection Content */}
// //         <div className="max-w-7xl mx-auto px-4 py-16">
// //           <div className="flex justify-between items-center mb-12">
// //             <div>
// //               <h2 className="text-3xl font-extralight mb-3">LA COLLECTION</h2>
// //               <p className="text-gray-600">{filteredWatches.length} modèles</p>
// //             </div>
// //             <button
// //               onClick={() => setIsFiltersOpen(true)}
// //               className="group flex items-center space-x-3 px-8 py-4 border border-black hover:bg-black transition-all duration-300"
// //             >
// //               <SlidersHorizontal className="h-5 w-5 group-hover:text-white transition-colors" />
// //               <span className="text-sm tracking-wider group-hover:text-white transition-colors">FILTRES</span>
// //             </button>
// //           </div>

// //           <Filters
// //             filters={filters}
// //             setFilters={setFilters}
// //             isOpen={isFiltersOpen}
// //             onClose={() => setIsFiltersOpen(false)}
// //           />

// //           <div className="opacity-0 animate-fade-in">
// //             <ProductGrid watches={filteredWatches} />
// //           </div>
// //         </div>

// //         {/* Featured Section */}
// //         <section className="bg-gray-50 py-24">
// //           <ProductCarousel products={sampleProducts} />
// //         </section>
// //       </main>

// //       <Footer />
// //     </div>
// //   )
// // }


"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "components/Header";
import { Filters } from "components/Filters";
import { FilterState } from "types";
import { watches } from "data/watches";
import { SlidersHorizontal } from "lucide-react";
import { Footer } from "components/Footer";
import { ProductGrid } from "components/ProductGrid";
import { ProductCarousel } from "components/Product/ProductCarousel";
import { sampleProducts } from "components/Product/sampleProduct";
import Image from "next/image";

export default function WatchCollection() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    collections: [],
    materials: [],
    movements: [],
    diameters: [],
    priceRange: [0, 10000],
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Close filters when clicking outside (desktop/tablet)
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       filtersRef.current &&
  //       !filtersRef.current.contains(event.target as Node)
  //     ) {
  //       setIsFiltersOpen(false);
  //     }
  //   };

  //   if (isFiltersOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isFiltersOpen]);

  const filteredWatches = watches.filter((watch) => {
    if (
      filters.collections.length &&
      !filters.collections.includes(watch.collection)
    )
      return false;
    if (filters.materials.length && !filters.materials.includes(watch.material))
      return false;
    if (
      watch.price < filters.priceRange[0] ||
      watch.price > filters.priceRange[1]
    )
      return false;
    return true;
  });

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Head>
        <title>Collection SOS Spirit Flyback | Longines</title>
        <meta
          name="description"
          content="Découvrez notre collection de montres SOS Spirit Flyback, alliant légèreté exceptionnelle et durabilité incomparable."
        />
      </Head>

      <Header />

      <main className="relative">
        {/* Hero Banner */}
        <div className="relative h-[70vh] bg-gray-900 overflow-hidden">
          <Image
            src="/assets/shop.webp"
            alt="Collection Banner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-70 transform scale-105 transition-transform duration-10000 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center transform translate-y-0 transition-transform duration-1000">
              <h1 className="text-4xl md:text-6xl font-extralight mb-6 tracking-wider">
                SOS SPIRIT FLYBACK
              </h1>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-4">
                Une nouvelle ère de l'horlogerie en titane grade 5, alliant
                légèreté exceptionnelle et durabilité incomparable.
              </p>
            </div>
          </div>
        </div>

        {/* Collection Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row">
          {/* Filters Sidebar */}
          {isClient && (
            <div
              className={`fixed md:fixed inset-0 z-40 bg-white md:bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
                isFiltersOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{
                top: "92px",
                height: "calc(100vh - 92px)",
                width: "16rem",
              }}
            >
              <div className="w-full h-full p-6 border-r border-gray-200 overflow-y-auto">
                <Filters
                  filters={filters}
                  setFilters={setFilters}
                  isOpen={isFiltersOpen}
                  onClose={() => setIsFiltersOpen(false)} // Pass close handler
                />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-extralight mb-3">LA COLLECTION</h2>
                <p className="text-gray-600">{filteredWatches.length} modèles</p>
              </div>
              {/* Toggle Button */}
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)} // Simple toggle
                className="group flex items-center space-x-3 px-4 py-2 border border-black hover:bg-black transition-all duration-300"
              >
                <SlidersHorizontal className="h-5 w-5 group-hover:text-white transition-colors" />
                <span className="text-sm tracking-wider group-hover:text-white transition-colors">
                  FILTRES
                </span>
              </button>
            </div>

            <div className="opacity-0 animate-fade-in">
              <ProductGrid watches={filteredWatches} />
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <section className="bg-gray-50 py-12 md:py-24">
          <ProductCarousel products={sampleProducts} />
        </section>
      </main>

      <Footer />
    </div>
  );
}