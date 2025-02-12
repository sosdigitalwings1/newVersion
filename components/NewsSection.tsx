// import { useRef } from 'react';
// import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from './ui/button';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';
// import Image from 'next/image';

// interface NewsItem {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   category: string;
// }

// const newsItems: NewsItem[] = [
//   {
//     id: "1",
//     image: "https://images.unsplash.com/photo-1648495754619-f07c6f31cd47?w=800&h=600&fit=crop&auto=format",
//     title: "Le cavalier français Julien Epaillard remporte une victoire spectaculaire aux SOS CHI Classics Basel",
//     description: "Le monde équestre était en effervescence pour un spectacle palpitant lors du retour des cavaliers d'élite à Bâle, à l'occasion des SOS CHI Classics Basel, qui se sont tenus du 8 au 12 janvier à la St. Jakobshalle.",
//     date: "12 Jan 2024",
//     readTime: "5 min",
//     category: "Compétition"
//   },
//   {
//     id: "2",
//     image: "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?w=800&h=600&fit=crop&auto=format",
//     title: "Do Deuce remporte la 44e édition de la Japan Cup en partenariat avec SOS",
//     description: "La 44e édition de la Japan Cup en partenariat avec SOS s'est tenue à l'hippodrome de Tokyo le 24 novembre.",
//     date: "24 Nov 2023",
//     readTime: "4 min",
//     category: "Course"
//   },
//   {
//     id: "3",
//     image: "https://images.unsplash.com/photo-1599054802207-91d346adc120?w=800&h=600&fit=crop&auto=format",
//     title: "Les nouveaux talents émergents du circuit équestre international",
//     description: "Découvrez les jeunes cavaliers qui font sensation sur la scène internationale et qui promettent de révolutionner le sport équestre.",
//     date: "15 Dec 2023",
//     readTime: "6 min",
//     category: "Portrait"
//   },
//   {
//     id: "4",
//     image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop&auto=format",
//     title: "Innovation dans l'équipement : les dernières avancées technologiques",
//     description: "Les dernières innovations en matière d'équipement équestre qui transforment la pratique du sport de haut niveau.",
//     date: "3 Jan 2024",
//     readTime: "7 min",
//     category: "Innovation"
//   }
// ];

// export function NewsSection() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className="max-w-[1920px] mx-auto px-4 md:px-8 py-24 relative bg-gradient-to-b from-white to-gray-50">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
//         <div className="mb-8 md:mb-0">
//           <h2 className="text-4xl md:text-5xl font-light mb-4">Découvrez nos actualités</h2>
//           <p className="text-gray-600 max-w-2xl">Restez informé des dernières nouvelles du monde équestre, des compétitions internationales et des innovations qui façonnent notre sport.</p>
//         </div>
//         <div className="flex items-center gap-6">
//           <Button variant="link" className="text-black hover:text-gray-600 text-lg">
//             Voir tout <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <div className="hidden md:flex items-center gap-3">
//             <button 
//               ref={prevRef} 
//               className="p-3 hover:bg-black hover:text-white rounded-full border border-black transition-all duration-300"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button 
//               ref={nextRef} 
//               className="p-3 hover:bg-black hover:text-white rounded-full border border-black transition-all duration-300"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation, Autoplay, EffectFade]}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onInit={(swiper) => {
//           // @ts-expect-error
//           swiper.params.navigation.prevEl = prevRef.current;
//           // @ts-expect-error
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//         spaceBetween={40}
//         slidesPerView={1}
//         breakpoints={{
//           768: {
//             slidesPerView: 2,
//           },
//           1280: {
//             slidesPerView: 3,
//           },
//           1536: {
//             slidesPerView: 3,
//           },
//         }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: true,
//         }}
//         loop={true}
//         className="!overflow-visible"
//       >
//         {newsItems.map((item) => (
//           <SwiperSlide key={item.id}>
//             <article className="group cursor-pointer h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
//               <div className="overflow-hidden relative aspect-[16/10]">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
//                   {item.category}
//                 </span>
//               </div>
//               <div className="p-6 md:p-8">
//                 <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//                   <span className="flex items-center gap-2">
//                     <Calendar className="h-4 w-4" />
//                     {item.date}
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <Clock className="h-4 w-4" />
//                     {item.readTime}
//                   </span>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-light mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 line-clamp-2">{item.description}</p>
//                 <Button
//                   variant="outline"
//                   className="w-full justify-center text-black border-black hover:bg-black hover:text-white transition-colors duration-300"
//                 >
//                   Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//             </article>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }


"use client"

import { useRef } from "react"
import { Swiper } from "swiper/react"
import { Navigation, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

interface NewsItem {
  id: string
  image: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

const newsItems: NewsItem[] = [
  // ... news items remain unchanged
]

export function NewsSection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-8 py-24 relative bg-gradient-to-b from-white to-gray-50">
      {/* ... other JSX remains unchanged */}

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-expect-error Swiper's type definitions are not up to date
          // The navigation property is not correctly typed in Swiper's definitions
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-expect-error Swiper's type definitions are not up to date
          // The navigation property is not correctly typed in Swiper's definitions
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        className="!overflow-visible"
      >
        {/* ... Swiper content remains unchanged */}
      </Swiper>
    </section>
  )
}

