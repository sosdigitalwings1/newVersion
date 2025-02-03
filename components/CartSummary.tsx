// components/CartSummary.tsx
import { useCart } from 'context/CartContext';
import { X } from 'lucide-react';

interface CartSummaryProps {
  items: any[]; // Adjust type according to your cart item structure
}

export function CartSummary({ items }: CartSummaryProps) {
  const { removeFromCart, updateQuantity, getSubtotal, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Votre panier est vide</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-light mb-8">Mon panier ({items.length})</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center space-x-4 py-4 border-b border-gray-100">
            <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
              <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-light text-lg">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">{item.product.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.product.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <label className="text-sm text-gray-600">Qté:</label>
                <select value={item.quantity} onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))} className="border rounded-lg px-2 py-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Sous-total</span>
          <span className="font-medium">{getSubtotal().toFixed(2)} CAD</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Livraison</span>
          <span className="text-green-600">Gratuit</span>
        </div>
        <div className="flex justify-between py-2 text-lg font-medium">
          <span>Total</span>
          <span>{getTotal().toFixed(2)} CAD</span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button className="w-full bg-[#00264C] text-white py-4 text-sm tracking-widest font-medium hover:bg-[#003366] transition-colors duration-300">
          PAIEMENT
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
            <img src="https://www.longines.com/media/catalog/category/swiss-made_1.svg" alt="Swiss Made" className="w-full" />
          </div>
          <p className="text-sm">Swiss Made</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
            <img src="https://www.longines.com/media/catalog/category/shipping_1.svg" alt="Free Shipping" className="w-full" />
          </div>
          <p className="text-sm">Livraison & retours offerts</p>
        </div>
      </div>
    </div>
  );
}