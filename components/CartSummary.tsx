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
// }"use client"

import { useCart } from "context/CartContext"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { CartItem } from "types/cart"
import { Button } from "components/ui/button"
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import router from "next/router"

interface CartSummaryProps {
  items: CartItem[]
}

export function CartSummary({ items }: CartSummaryProps) {
  const { removeFromCart, updateQuantity, getSubtotal, getTotal } = useCart()
  const [cartItems, setCartItems] = useState<CartItem[]>(items)

  useEffect(() => {
    setCartItems(items)
  }, [items])

  const handleRemoveFromCart = (item: CartItem) => {
    removeFromCart(item.product.id)
  }

  const handleUpdateQuantity = (item: CartItem, quantity: number) => {
    updateQuantity(item.product.id, quantity)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CA', { 
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-light mb-8 text-[#333]">Mon panier {cartItems.length > 0 && `(${cartItems.length})`}</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-6">Votre panier est vide</p>
              <Link href="/collection/products" passHref>
              <Button variant="longines" size="lg">
                CONTINUER VOS ACHATS
              </Button>
            </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="bg-white border border-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[180px] h-[180px] bg-[#f8f8f8] flex items-center justify-center p-4">
                      <Image
                        src={item.product.images[0] || "/placeholder.svg"}
                        alt={item.product.name}
                        width={140}
                        height={140}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-light text-lg uppercase tracking-wide text-[#333]">{item.product.name}</h3>
                          {item.product.reference && (
                            <p className="text-sm text-gray-500 mt-1">{item.product.reference}</p>
                          )}
                          
                        </div>
                        <button 
                          onClick={() => handleRemoveFromCart(item)}
                          className="text-gray-400 hover:text-gray-600"
                          aria-label="Remove item"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6">
                        <div className="flex items-center border border-gray-300 rounded-sm mb-4 md:mb-0 overflow-hidden">
                          <button 
                            onClick={() => handleUpdateQuantity(item, item.quantity - 1)} 
                            disabled={item.quantity <= 1}
                            className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-10 text-center font-light">{item.quantity}</span>
                          <button 
                            onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                            className="px-3 py-2 text-gray-500 hover:text-gray-700"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-light">
                            {formatPrice(Number.parseFloat(item.product.price.replace(/[^0-9.]/g, ""))) + " CAD"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white border border-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-light mb-6">Résumé</h2>
            
            <div className="space-y-4 border-border-white pb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span>{formatPrice(getSubtotal())} CAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="text-green-600">Gratuit</span>
              </div>
            </div>
            
            <div className="flex justify-between py-6 border-b border-gray-300">
              <span className="font-medium">Total</span>
              <span className="font-medium">{formatPrice(getTotal())} CAD</span>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="longines" 
                size="lg" 
                className="w-full"
                disabled={cartItems.length === 0}
              >
                Paiement
              </Button>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span>Swiss Made</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="16" height="13" x="4" y="5" rx="2" />
                    <path d="M16 2v3M8 2v3M3 10h18" />
                  </svg>
                </div>
                <span>Livraison & retours offerts</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span>Garantie LONGINES</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <span>Paiement sécurisé</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
            <FaCcVisa className="w-10 h-6 text-gray-600" />
            <FaCcMastercard className="w-10 h-6 text-gray-600" />
            <SiAmericanexpress className="w-10 h-6 text-gray-600" />
            <FaCcPaypal className="w-10 h-6 text-gray-600" />
            <FaCcMastercard className="w-10 h-6 text-gray-600" />
            <FaCcApplePay className="w-10 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}