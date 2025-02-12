import React, { useState } from 'react';
import { ChevronLeft, Heart, Share2, ZoomIn } from 'lucide-react';
import Image from 'next/image';

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    image: string;
    isNew: boolean;
    specs: {
      size: string;
      movement: string;
      material: string;
    };
    price: string;
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Simulated additional product images
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="flex items-center text-gray-800 hover:text-gray-600">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  {/* <img
                    src={image}
                    alt={${product.name} view ${index + 1}}
                    className="w-full h-full object-cover"
                  /> */}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {product.isNew && (
              <span className="inline-block bg-black text-white px-4 py-1 text-sm">
                Nouveau
              </span>
            )}
            <div className="space-y-4">
              <h1 className="text-4xl font-light">{product.name}</h1>
              <p className="text-2xl">{product.price}</p>
            </div>

            <div className="space-y-6">
              <div className="prose prose-sm">
                <p className="text-gray-600">
                  Une montre d'exception qui allie élégance intemporelle et innovation technique.
                  Chaque détail a été méticuleusement conçu pour offrir une expérience horlogère unique.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Caractéristiques</h3>
                <dl className="grid grid-cols-1 gap-y-4">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Taille</dt>
                    <dd className="font-medium">{product.specs.size}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Mouvement</dt>
                    <dd className="font-medium">{product.specs.movement}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Matériau</dt>
                    <dd className="font-medium">{product.specs.material}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Étanchéité</dt>
                    <dd className="font-medium">100 mètres (10 bar)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Garantie</dt>
                    <dd className="font-medium">5 ans</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t pt-6">
                <button className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors">
                  Ajouter au panier
                </button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between cursor-pointer hover:text-gray-600">
                  <span className="font-medium">Description détaillée</span>
                  <ChevronLeft className="w-5 h-5 transform rotate-[-90deg]" />
                </div>
                <div className="flex items-center justify-between cursor-pointer hover:text-gray-600">
                  <span className="font-medium">Service client</span>
                  <ChevronLeft className="w-5 h-5 transform rotate-[-90deg]" />
                </div>
                <div className="flex items-center justify-between cursor-pointer hover:text-gray-600">
                  <span className="font-medium">Livraison et retours</span>
                  <ChevronLeft className="w-5 h-5 transform rotate-[-90deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}