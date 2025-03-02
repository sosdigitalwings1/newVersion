// context/WishlistContext.tsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Product } from 'components/Product/types';

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  // useEffect(() => {
  //   console.log("Wishlist updated:", wishlist); // Debugging
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('wishlist', JSON.stringify(wishlist));
  //   }
  // }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
      console.error('Failed to persist wishlist:', error);
    }
  }, [wishlist]);


  // const addToWishlist = (product: Product) => {
  //   console.log("Adding to wishlist:", product); // Debugging
  //   setWishlist((prev) => {
  //     if (!prev.some((item) => item.id === product.id)) {
  //       return [...prev, product];
  //     }
  //     return prev;
  //   });
  // };
  const addToWishlist = useCallback((product: Product) => {
    setWishlist(prev => prev.some(p => p.id === product.id) ? prev : [...prev, product]);
  }, []);

  // const removeFromWishlist = (productId: string) => {
  //   console.log("Removing from wishlist:", productId); // Debugging
  //   setWishlist((prev) => prev.filter((item) => item.id !== productId));
  // };
  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist(prev => prev.filter(p => p.id !== productId));
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};