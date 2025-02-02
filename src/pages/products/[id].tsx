import { useRouter } from 'next/router';
import { ProductDetails } from 'components/Product/ProductDetails';
import { products } from 'components/Product/ProductCarousel';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}