// "use client";

// import Head from "next/head";
// import Header from "components/Header";
// import { Footer } from "components/Footer";
// import Image from "next/image";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Contact | SOSDigitalWings</title>
//         <meta name="description" content="Contactez SOSDigitalWings - Service clientèle et support technique" />
//       </Head>

//       <Header />

      
//       <main>
//         {/* Hero Section */}
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
//               <h1 className="text-6xl font-extralight mb-6 tracking-wider">SOS Contact Page</h1>
//               <p className="text-xl font-light max-w-2xl mx-auto px-4">
//                     Service Clientèle SOSDigitalWings
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        

//         {/* Contact Content */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-2xl font-light mb-4">Nous contacter</h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-medium">Service clients</h3>
//                   <p className="text-gray-600">+41 32 343 63 43</p>
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Email</h3>
//                   <p className="text-gray-600">contact@SOSDigitalWings.com</p>
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Heures d'ouverture</h3>
//                   <p className="text-gray-600">
//                     Lundi - Vendredi: 9h00 - 18h00<br />
//                     Samedi: 9h00 - 12h00
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-light mb-4">Trouvez une boutique</h2>
//               <button className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
//                 Localisateur de boutiques
//               </button>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-50 p-8 rounded-xl">
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Nom complet *</label>
//                 <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email *</label>
//                   <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Téléphone</label>
//                   <input type="tel" className="w-full px-4 py-2 border rounded-lg" />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Sujet *</label>
//                 <select className="w-full px-4 py-2 border rounded-lg bg-white" required>
//                   <option value="">Sélectionnez un sujet</option>
//                   <option>Service client</option>
//                   <option>Support technique</option>
//                   <option>Information produit</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">Message *</label>
//                 <textarea rows={4} className="w-full px-4 py-2 border rounded-lg" required />
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" className="rounded" required />
//                 <span className="text-sm">
//                   J'accepte la politique de confidentialité *
//                 </span>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
//               >
//                 Envoyer le message
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }


"use client"

import Head from "next/head"
import Header from "components/Header"
import { Footer } from "components/Footer"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact | SOSDigitalWings</title>
        <meta name="description" content="Contactez SOSDigitalWings - Service clientèle et support technique" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
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
              <h1 className="text-6xl font-extralight mb-6 tracking-wider">SOS Contact Page</h1>
              <p className="text-xl font-light max-w-2xl mx-auto px-4">Service Clientèle SOSDigitalWings</p>
            </div>
          </div>
        </div>
      </main>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-4 text-gray-900">Nous contacter</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Service clients</h3>
                  <p className="text-gray-600">+41 32 343 63 43</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@SOSDigitalWings.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Heures d'ouverture</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 9h00 - 18h00
                    <br />
                    Samedi: 9h00 - 12h00
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4 text-gray-900">Trouvez une boutique</h2>
              <button className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
                Localisateur de boutiques
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Nom complet *</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Sujet *</label>
                <select className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900" required>
                  <option value="">Sélectionnez un sujet</option>
                  <option>Service client</option>
                  <option>Support technique</option>
                  <option>Information produit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg bg-white text-gray-900" required />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black" required />
                <span className="text-sm text-gray-700">J'accepte la politique de confidentialité *</span>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

