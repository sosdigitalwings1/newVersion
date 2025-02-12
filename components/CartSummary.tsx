// "use client"

// import { useCart } from "context/CartContext"
// import { Minus, Plus, Trash2 } from "lucide-react"
// import Image from "next/image"
// import { useState, useEffect } from "react"

// interface CartSummaryProps {
//   items: any[] // Adjust type according to your cart item structure
// }

// export function CartSummary({ items }: CartSummaryProps) {
//   const { removeFromCart, updateQuantity, getSubtotal, getTotal } = useCart()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null // Prevent hydration mismatch

//   if (items.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center h-[50vh]">
//         <Image src="/empty-cart.svg" alt="Empty Cart" width={200} height={200} />
//         <p className="text-gray-600 mt-4">Votre panier est vide</p>
//         <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//           Continuer vos achats
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-8">Mon panier ({items.length})</h1>

//       <div className="lg:flex lg:space-x-8">
//         <div className="lg:w-2/3">
//           <div className="space-y-6">
//             {items.map((item) => (
//               <div
//                 key={item.product.id}
//                 className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-sm"
//               >
//                 <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
//                   <Image
//                     src={item.product.images[0] || "/placeholder.svg"}
//                     alt={item.product.name}
//                     width={128}
//                     height={128}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-1 w-full">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-medium text-lg">{item.product.name}</h3>
//                       <p className="text-sm text-gray-600">{item.product.price} CAD</p>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item.product.id)}
//                       className="text-gray-400 hover:text-red-600 transition-colors p-1"
//                       aria-label="Remove item"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                   <div className="mt-4 flex items-center space-x-4">
//                     <div className="flex items-center border rounded-md">
//                       <button
//                         onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
//                         className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
//                         aria-label="Decrease quantity"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="px-4 py-2 text-center w-12">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
//                         className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
//                         aria-label="Increase quantity"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="lg:w-1/3 mt-8 lg:mt-0">
//           <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
//             <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
//             <div className="space-y-4">
//               <div className="flex justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Sous-total</span>
//                 <span className="font-medium">{getSubtotal().toFixed(2)} CAD</span>
//               </div>
//               <div className="flex justify-between py-2 border-b border-gray-100">
//                 <span className="text-gray-600">Livraison</span>
//                 <span className="text-green-600">Gratuit</span>
//               </div>
//               <div className="flex justify-between py-2 text-lg font-medium">
//                 <span>Total</span>
//                 <span>{getTotal().toFixed(2)} CAD</span>
//               </div>
//             </div>

//             <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md text-sm tracking-wider font-medium hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               PAIEMENT
//             </button>

//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
//                   <Image
//                     src="https://www.longines.com/media/catalog/category/swiss-made_1.svg"
//                     alt="Swiss Made"
//                     width={48}
//                     height={48}
//                   />
//                 </div>
//                 <p className="text-sm text-gray-600">Swiss Made</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
//                   <Image
//                     src="https://www.longines.com/media/catalog/category/shipping_1.svg"
//                     alt="Free Shipping"
//                     width={48}
//                     height={48}
//                   />
//                 </div>
//                 <p className="text-sm text-gray-600">Livraison & retours offerts</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import type { CartItem } from "../types/cart"
import { useCart } from "../context/CartContext"

interface CartSummaryProps {
  items: CartItem[]
}

export function CartSummary({ items }: CartSummaryProps) {
  const { removeFromCart, updateQuantity, getSubtotal, getTotal } = useCart()
  const total = items.reduce((sum, item) => {
    const price = Number.parseFloat(item.product.price.replace(/[^0-9.]/g, ""))
    return sum + price * item.quantity
  }, 0)

  return (
    <div>
      {items.map((item) => (
        <div key={item.product.id}>
          {item.product.name} - Quantity: {item.quantity} - Price:{" "}
          <p className="text-sm text-gray-600">{Number.parseFloat(item.product.price).toFixed(2)} CAD</p>
        </div>
      ))}
      <div>Total: ${total.toFixed(2)}</div>
    </div>
  )
}

