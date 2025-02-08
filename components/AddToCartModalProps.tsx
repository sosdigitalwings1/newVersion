// components/AddToCartModal.tsx
import { X } from 'lucide-react';
import { Product } from './Product/types';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import Image from 'next/image'; 

interface AddToCartModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  
  onContinueShopping: () => void;
}

export function AddToCartModal({
  product,
  isOpen,
  onClose,
  onContinueShopping,
}: AddToCartModalProps) {
  const router = useRouter(); // Initialize the router

  // Return null if the modal is not open
  if (!isOpen) return null;

  const handleViewCart = () => {
    onClose(); // Close the modal
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-light text-center">Ajouté au panier</h2>

          <p className="text-gray-600 text-center text-sm">
            Votre produit a été ajouté à votre panier. Vous pouvez visualiser votre commande, ou la compléter avec un produit complémentaire.
          </p>

          <div className="flex items-center space-x-4 border-t border-b border-gray-100 py-4">
            <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
            <Image
  src={product.images[0]} // Use the Image component
  alt={product.name}
  width={500} // Specify the width (adjust as necessary)
  height={500} // Specify the height (adjust as necessary)
  className="w-full h-full object-cover" // Keep the same classes for styling
/>
            </div>
            <div>
              <h3 className="font-light text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={handleViewCart}
              className="w-full bg-[#00264C] text-white py-3 text-sm tracking-widest font-medium hover:bg-[#003366] transition-colors duration-300"
            >
              VOIR MON PANIER
            </button>
            <button
              onClick={onContinueShopping}
              className="w-full border border-gray-200 py-3 text-sm tracking-widest font-medium hover:bg-gray-50 transition-colors duration-300"
            >
              CONTINUER VOS ACHATS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}