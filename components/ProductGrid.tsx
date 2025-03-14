import React from 'react';
import { Watch } from 'types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductGridProps {
  watches: Watch[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ watches }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {watches.map((watch) => (
        <Link 
        key={watch.id} 
        href={`/products/${watch.id}`} // Dynamic route to ProductDetails page
        passHref
        legacyBehavior
      >
        <a className="block group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={watch.imageUrl}
              alt={watch.name}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-medium dark:text-white">{watch.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{watch.collection}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {watch.diameter} | {watch.movement}
            </p>
            <p className="font-medium dark:text-white">${watch.price.toLocaleString()}</p>
          </div>
        </a>
      </Link>
      ))}
    </div>
  );
};