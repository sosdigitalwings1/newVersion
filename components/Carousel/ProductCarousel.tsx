// import { Button } from "components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "components/ui/carousel";
// import Image from 'next/image';
// interface Product {
//   id: string;
//   name: string;
//   image: string;
//   isNew: boolean;
//   specs: {
//     size: string;
//     movement: string;
//     material: string;
//   };
//   price: string;
// }

// const products: Product[] = [
//   {
//     id: "1",
//     name: "SPIRIT CHRONO SKI EDITION",
//     image: "/assets/waches/wach2.png",
//     isNew: true,
//     specs: {
//       size: "42.00 mm",
//       movement: "Automatique",
//       material: "Inoxydable et lunette en céramique",
//     },
//     price: "5 700,00 CAD",
    
//   },
//   {
//     id: "2",
//     name: "LONGINES MINI DOLCEVITA",
//     image: "/assets/waches/wach1.png",
//     isNew: true,
//     specs: {
//       size: "21.50 X 29.00 mm",
//       movement: "Quartz",
//       material: "Or jaune 18 carats",
//     },
//     price: "33 000,00 CAD",
//   },
//   {
//     id: "3",
//     name: "FLAGSHIP HERITAGE MOONPHASE",
//     image: "/assets/waches/wach4.png",
//     isNew: true,
//     specs: {
//       size: "Ø 38.50 mm",
//       movement: "Automatique",
//       material: "Acier",
//     },
//     price: "4 000,00 CAD",
//   },
//   {
//     id: "4",
//     name: "LONGINES LEGEND DIVER",
//     image: "/assets/waches/wach3.png",
//     isNew: true,
//     specs: {
//       size: "Ø 39.00 mm",
//       movement: "Automatique",
//       material: "Acier",
//     },
//     price: "4 550,00 CAD",
//   },
//   {
//     id: "5",
//     name: "LONGINES SPIRIT TITANIUM",
//     image: "/assets/waches/wach1.png",
//     isNew: true,
//     specs: {
//       size: "Ø 39.00 mm",
//       movement: "Automatique",
//       material: "Titane et lunette en céramique",
//     },
//     price: "5 300,00 CAD",
//   },
//   {
//     id: "6",
//     name: "LONGINES MINI DOLCEVITA",
//     image: "/assets/waches/wach1.png",
//     isNew: true,
//     specs: {
//       size: "21.50 X 29.00 mm",
//       movement: "Quartz",
//       material: "Or jaune 18 carats",
//     },
//     price: "33 000,00 CAD",
//   },
//   {
//     id: "7",
//     name: "FLAGSHIP HERITAGE MOONPHASE",
//     image: "/assets/waches/wach4.png",
//     isNew: true,
//     specs: {
//       size: "Ø 38.50 mm",
//       movement: "Automatique",
//       material: "Acier",
//     },
//     price: "4 000,00 CAD",
//   },
// ];

// export function ProductCarousel() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-[1920px] mx-auto px-4 md:px-8">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="relative w-full"
//         >
//           <CarouselContent className="-ml-2 md:-ml-4">
//             {products.map((product) => (
//               <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
//                 <div className="group relative flex flex-col space-y-4">
//                   {/* Image */}
//                   <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//                     />
//                     {product.isNew && (
//                       <span className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-medium">
//                         Nouveau
//                       </span>
//                     )}
//                     <button
//                       aria-label="Compare"
//                       className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gray-100"
//                     >
//                       <svg
//                         className="w-5 h-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                     </button>
//                   </div>

//                   {/* Content */}
//                   <div className="space-y-2 text-center">
//                     <h3 className="font-medium text-lg">{product.name}</h3>
//                     <div className="space-y-1 text-sm text-gray-600">
//                       <p>{product.specs.size} - Montre</p>
//                       <p>{product.specs.movement}</p>
//                       <p>{product.specs.material}</p>
//                     </div>
//                     <p className="font-medium text-lg">{product.price}</p>
//                     <Button
//                       variant="outline"
//                       className="w-full mt-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
//                     >
//                       Acheter
//                     </Button>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="hidden md:flex -left-12" />
//           <CarouselNext className="hidden md:flex -right-12" />
//         </Carousel>
//       </div>
//     </section>
//   );
// }