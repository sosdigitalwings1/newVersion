// import { ArrowRight } from "lucide-react";
// import { Button } from "./ui/button";

// export function GenderCategories() {
//   return (
//     // <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1920px] mx-auto px-4 md:px-8 py-16">

//     <section className="grid grid-cols-1 md:grid-cols-2 gap-2  py-16 mb-16">
//       <div className="relative group cursor-pointer h-[90vh]">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1728582543415-f3acc737f1fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Montres Homme"
//             className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
//         </div>
        
//         <div className="absolute inset-x-0 bottom-0 p-12 translate-y-6 transform transition-transform duration-500 group-hover:translate-y-0">
//           <div className="space-y-4">
//             <h2 className="text-[120px] font-light text-white leading-none tracking-tight">
//               Homme
//             </h2>
//             <div className="overflow-hidden">
//               <p className="text-white/80 text-lg font-light transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//                 Découvrez notre collection de montres pour homme
//               </p>
//             </div>
//             <Button
//               variant="outline"
//               className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
//             >
//               Montres <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="relative group cursor-pointer h-[90vh]">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1728582543460-1692e08eacbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Montres Femme"
//             className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
//         </div>
        
//         <div className="absolute inset-x-0 bottom-0 p-12 translate-y-6 transform transition-transform duration-500 group-hover:translate-y-0">
//           <div className="space-y-4">
//             <h2 className="text-[120px] font-light text-white leading-none tracking-tight">
//               Femme
//             </h2>
//             <div className="overflow-hidden">
//               <p className="text-white/80 text-lg font-light transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
//                 Explorez notre collection de montres pour femme
//               </p>
//             </div>
//             <Button
//               variant="outline"
//               className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
//             >
//               Montres <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export function GenderCategories() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 py-16 mb-16">
      <div className="relative group cursor-pointer h-[90vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1728582543415-f3acc737f1fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Montres Homme"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-12 translate-y-6 transform transition-transform duration-500 group-hover:translate-y-0">
          <div className="space-y-4">
            <h2 className="text-[120px] font-light text-white leading-none tracking-tight">Homme</h2>
            <div className="overflow-hidden">
              <p className="text-white/80 text-lg font-light transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Découvrez notre collection de montres pour homme
              </p>
            </div>
            <Button
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
            >
              Montres <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative group cursor-pointer h-[90vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1728582543460-1692e08eacbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Montres Femme"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-12 translate-y-6 transform transition-transform duration-500 group-hover:translate-y-0">
          <div className="space-y-4">
            <h2 className="text-[120px] font-light text-white leading-none tracking-tight">Femme</h2>
            <div className="overflow-hidden">
              <p className="text-white/80 text-lg font-light transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Explorez notre collection de montres pour femme
              </p>
            </div>
            <Button
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
            >
              Montres <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

