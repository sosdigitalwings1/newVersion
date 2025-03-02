import { CartSummary } from "components/CartSummary"
import { useCart } from "context/CartContext"
import { useEffect } from "react"
import { sampleProducts } from "components/Product/sampleProduct"
import Head from "next/head"
import Link from "next/link"

export default function CartPage() {
  const { items, addToCart } = useCart()
  
  useEffect(() => {
    if (items.length === 0) {
      const sampleProduct = {
        ...sampleProducts[0],
        reference: "L2.909.4.92.0",
        diameter: "40.00 mm"
      }
      // addToCart(sampleProduct, 1)
    }
  }, [items.length, addToCart])

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Head>
        <title>sos - Mon panier</title>
        <meta name="description" content="Votre panier d'achats Longines" />
      </Head>
      
      <header className="border-b border-gray-100 py-6 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/assets/LogoBlack.png" alt="SOS" className="h-[45px] w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-800 relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#00264C] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <CartSummary items={items} />
      
      <footer className="bg-white border-t border-gray-100 py-6 mt-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center text-sm text-gray-500">
          <p>© 2025 Longines Watch Co. Francillon Ltd., Tous les droits sont réservés</p>
          <div className="flex justify-center gap-6 mt-4">
            <button className="hover:text-gray-700">Paramètres d'accessibilité</button>
            <button className="hover:text-gray-700">Paramètres des cookies</button>
          </div>
        </div>
      </footer>
    </div>
  )
}