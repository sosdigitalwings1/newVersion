// pages/products/[id].tsx
import { ProductDetails } from 'components/Product/ProductDetails';
import { Product } from 'components/Product/types';
import { sampleProducts } from 'components/Product/sampleProduct'; // Updated import to reflect an array

import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure the ID is defined and not an array
  if (!id || Array.isArray(id)) {
    return <div>Invalid product ID</div>;
  }

  // Find the product by ID from the static list
  const product: Product | undefined = sampleProducts.find((p) => p.id === id);

  // If the product doesn't exist, return a not found message
  if (!product) {
    return <div>Product not found</div>;
  }

  // Find related products based on some criteria (e.g., same specifications or category)
  const relatedProducts = sampleProducts.filter((p) => p.id !== product.id); // Exclude the current product

  return (
    <div>
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </div>
  );
}