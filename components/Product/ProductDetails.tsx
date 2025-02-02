// components/Product/ProductDetails.tsx
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, Heart, Share2, ZoomIn } from 'lucide-react';
import { Button } from "components/ui/button";
import { Product } from './types';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-gray-800 hover:text-gray-600">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Retour
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-4 right-4 shadow-lg"
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => setSelectedImage(index)}
                  className={`h-auto p-0 aspect-[3/4] rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {product.isNew && (
              <span className="inline-block bg-black text-white px-4 py-1 text-sm">
                Nouveau
              </span>
            )}
            <div className="space-y-4">
              <h1 className="text-4xl font-light">{product.name}</h1>
              <p className="text-2xl font-medium">{product.price}</p>
            </div>

            <div className="space-y-6">
              <div className="prose prose-sm">
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Caractéristiques</h3>
                <dl className="grid grid-cols-1 gap-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-gray-600">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border-t pt-6">
                <Button className="w-full h-14 text-lg">
                  Ajouter au panier
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                {['Description détaillée', 'Service client', 'Livraison et retours'].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center justify-between cursor-pointer hover:text-gray-600"
                  >
                    <span className="font-medium">{item}</span>
                    <ChevronLeft className="w-5 h-5 transform rotate-[-90deg]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

