import { useRef } from 'react';
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


interface NewsItem {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    image: "/assets/blogs/1.avif",
    title: "Le cavalier français Julien Epaillard remporte une victoire spectaculaire aux SOS CHI Classics Basel",
    description: "Le monde équestre était en effervescence pour un spectacle palpitant lors du retour des cavaliers d'élite à Bâle, à l'occasion des SOS CHI Classics Basel, qui se sont tenus du 8 au 12 janvier à la St. Jakobshalle.",
    date: "12 Jan 2024",
    readTime: "5 min",
    category: "Compétition"
  },
  {
    id: "2",
    image: "/assets/blogs/2.avif",
    title: "Le cavalier français Julien Epaillard remporte une victoire spectaculaire aux SOS CHI Classics Basel",
    description: "Le monde équestre était en effervescence pour un spectacle palpitant lors du retour des cavaliers d'élite à Bâle, à l'occasion des SOS CHI Classics Basel, qui se sont tenus du 8 au 12 janvier à la St. Jakobshalle.",
    date: "12 Jan 2024",
    readTime: "5 min",
    category: "Compétition"
  },
  {
    id: "3",
    image: "/assets/blogs/3.avif",
    title: "Le cavalier français Julien Epaillard remporte une victoire spectaculaire aux SOS CHI Classics Basel",
    description: "Le monde équestre était en effervescence pour un spectacle palpitant lors du retour des cavaliers d'élite à Bâle, à l'occasion des SOS CHI Classics Basel, qui se sont tenus du 8 au 12 janvier à la St. Jakobshalle.",
    date: "12 Jan 2024",
    readTime: "5 min",
    category: "Compétition"
  },
  {
    id: "4",
    image: "/assets/blogs/4.avif",
    title: "Le cavalier français Julien Epaillard remporte une victoire spectaculaire aux SOS CHI Classics Basel",
    description: "Le monde équestre était en effervescence pour un spectacle palpitant lors du retour des cavaliers d'élite à Bâle, à l'occasion des SOS CHI Classics Basel, qui se sont tenus du 8 au 12 janvier à la St. Jakobshalle.",
    date: "12 Jan 2024",
    readTime: "5 min",
    category: "Compétition"
  },

  
];

export function NewsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-8 py-24 relative bg-white text-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Découvrez nos actualités</h2>
          <p className="text-gray-700 max-w-2xl">Restez informé des dernières nouvelles du monde équestre.</p>
        </div>
        <div className="flex items-center gap-6">
          <Button variant="link" className="text-blue-600 hover:text-blue-800 text-lg">
            Voir tout <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-3">
            <button 
              ref={prevRef} 
              className="p-3 hover:bg-gray-200 rounded-full border border-gray-400 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              ref={nextRef} 
              className="p-3 hover:bg-gray-200 rounded-full border border-gray-400 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

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
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop={true}
        className="!overflow-visible"
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <article className="group cursor-pointer h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 border border-gray-200">
              <div className="overflow-hidden relative aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{item.description}</p>
                <Button
                  variant="outline"
                  className="w-full justify-center text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


// "use client"

// import { useRef } from "react"
// import { Swiper } from "swiper/react"
// import { Navigation, Autoplay, EffectFade } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/effect-fade"

// // interface NewsItem {
// //   id: string
// //   image: string
// //   title: string
// //   description: string
// //   date: string
// //   readTime: string
// //   category: string
// // }

// // const newsItems: NewsItem[] = [
// //   // ... news items remain unchanged
// // ]

// export function NewsSection() {
//   const prevRef = useRef(null)
//   const nextRef = useRef(null)

//   return (
//     <section className="max-w-[1920px] mx-auto px-4 md:px-8 py-24 relative bg-gradient-to-b from-white to-gray-50">
//       {/* ... other JSX remains unchanged */}

//       <Swiper
//         modules={[Navigation, Autoplay, EffectFade]}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onInit={(swiper) => {
//           // @ts-expect-error Swiper's type definitions are not up to date
//           // The navigation property is not correctly typed in Swiper's definitions
//           swiper.params.navigation.prevEl = prevRef.current
//           // @ts-expect-error Swiper's type definitions are not up to date
//           // The navigation property is not correctly typed in Swiper's definitions
//           swiper.params.navigation.nextEl = nextRef.current
//           swiper.navigation.init()
//           swiper.navigation.update()
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
//         {/* ... Swiper content remains unchanged */}
//       </Swiper>
//     </section>
//   )
// }

