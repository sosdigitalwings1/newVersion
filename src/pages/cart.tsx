import { CartSummary } from "components/CartSummary"
import { useCart } from "context/CartContext"

export default function CartPage() {
  const { items } = useCart()

  return (
    <div className="min-h-screen bg-white">
      <CartSummary items={items} />
    </div>
  )
}

