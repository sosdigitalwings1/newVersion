
"use client";
import { ChevronLeft, Heart } from 'lucide-react';

import { useWishlist } from 'context/WishlistContext';
import Link from 'next/link';
import Image from 'next/image';

export default function FavoritesPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center text-gray-800 hover:text-gray-600 transition-colors group"
              aria-label="Back to home"
            >
              <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm tracking-wide">Back to home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-light tracking-wide mb-8">Your Favorites</h1>
        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 mb-4">You have no favorites yet.</p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-500 transition-colors"
            >
              Explore products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                priority={false}
              />
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md backdrop-blur-sm 
                          hover:bg-white transition-all duration-300 hover:scale-105"
                aria-label="Remove from favorites"
              >
                <Heart className="w-4 h-4 fill-current text-red-500" />
              </button>
                </div>
                <div className="mt-4 space-y-2">
                  <h2 className="text-lg font-medium tracking-wide">{product.name}</h2>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <p className="text-lg font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}