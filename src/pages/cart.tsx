// pages/cart.tsx
import { CartSummary } from 'components/CartSummary'; // Ensure this path is correct
import { useCart } from 'context/CartContext';

export default function CartPage() {
  const { items } = useCart(); // Access items from the cart context

  return (
    <div className="min-h-screen bg-white">
      <CartSummary items={items} />
    </div>
  );
}