import { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronDown, Heart, Share2, ZoomIn, Clock, Watch, Droplet, Shield, Plus, Minus } from 'lucide-react';
import { Product } from './types';
import Image from 'next/image';

import { useCart } from 'context/CartContext';
import { ProductCarousel } from './ProductCarousel';
import { AddToCartModal } from 'components/AddToCartModalProps';

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    addToCart(product, quantity);
    setShowAddToCartModal(true);
  }, [addToCart, product, quantity]);

  const handleZoom = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageRef.current) return;
    const bounds = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setMousePosition({ x, y });
  }, [isZoomed]);

  const toggleSection = useCallback((section: string) => {
    setOpenSection(openSection === section ? null : section);
  }, [openSection]);

  const handleQuantityChange = useCallback((delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  const getIconComponent = (iconName: string) => {
    const icons = {
      clock: Clock,
      watch: Watch,
      droplet: Droplet,
      shield: Shield,
    };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="/" 
              className="flex items-center text-gray-800 hover:text-gray-600 transition-colors group"
              aria-label="Back to collection"
            >
              <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm tracking-wide">Back to collection</span>
            </a>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsWishlistActive(!isWishlistActive)}
                className={`group p-2 rounded-full transition-all duration-300 ${
                  isWishlistActive ? 'bg-red-50 text-red-500' : 'hover:bg-gray-50'
                }`}
                aria-label={isWishlistActive ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={isWishlistActive}
              >
                <Heart className={`w-4 h-4 transition-transform group-hover:scale-110 ${isWishlistActive ? 'fill-current' : ''}`} />
              </button>
              <button 
                className="group p-2 rounded-full hover:bg-gray-50 transition-all duration-300"
                aria-label="Share product"
              >
                <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] overflow-hidden bg-gray-50 rounded-lg cursor-zoom-in"
              onMouseMove={handleZoom}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              role="img"
              aria-label={`${product.name} - View ${selectedImage + 1}`}
            >
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'hover:scale-105'
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      }
                    : undefined
                }
              />
              <button
                className="absolute bottom-4 right-4 bg-white/90 p-2.5 rounded-full shadow-md backdrop-blur-sm 
                  hover:bg-white transition-all duration-300 hover:scale-105 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Toggle zoom"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>
            <div 
              className="grid grid-cols-4 gap-4"
              role="tablist"
              aria-label="Product images"
            >
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    selectedImage === index
                      ? 'ring-2 ring-black ring-offset-2'
                      : 'hover:opacity-80'
                  }`}
                  role="tab"
                  aria-selected={selectedImage === index}
                  aria-label={`View ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-light tracking-wide leading-tight">{product.name}</h1>
              <p className="text-xl font-medium tracking-wide">{product.price}</p>
              <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-8 border-t border-gray-100">
              {product.keySpecs.map((spec, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-full bg-gray-50">
                    {getIconComponent(spec.icon)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                    <p className="font-medium tracking-wide text-sm">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-gray-50 transition-colors group disabled:opacity-50"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </button>
                  <span className="w-12 text-center font-medium text-sm" aria-label="Quantity">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-gray-50 transition-colors group"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#00264C] text-white h-12 text-sm tracking-widest font-medium 
                    hover:bg-[#003366] transition-all duration-300 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  ADD TO CART
                </button>
              </div>
              <button
                onClick={() => setIsWishlistActive(!isWishlistActive)}
                className={`w-full h-12 text-sm tracking-widest font-medium border transition-all duration-300 
                  hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isWishlistActive
                    ? 'bg-red-50 border-red-200 text-red-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                {isWishlistActive ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
              </button>
            </div>

            <div className="border-t border-gray-100 pt-8 space-y-3">
              {product.details.map((section) => (
                <div key={section.title} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex justify-between items-center py-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-expanded={openSection === section.title}
                  >
                    <span className="font-medium tracking-wide text-sm group-hover:text-gray-600 transition-colors">
                      {section.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        openSection === section.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openSection === section.title ? 'max-h-[500px] pb-4' : 'max-h-0'
                    }`}
                    role="region"
                    aria-labelledby={`section-${section.title}`}
                  >
                    <div className="prose prose-sm text-gray-600 leading-relaxed text-sm">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-base font-medium tracking-wide mb-6">Technical Specifications</h3>
              <dl className="grid grid-cols-1 gap-y-4">
                {Object.entries(product.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="text-gray-500 tracking-wide text-sm">{key}</dt>
                    <dd className="font-medium text-right text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-light tracking-wide mb-12">You might also like</h2>
          <ProductCarousel products={relatedProducts} />
        </div>
      </div>

      <AddToCartModal
        product={product}
        isOpen={showAddToCartModal}
        onClose={() => setShowAddToCartModal(false)}
        onContinueShopping={() => setShowAddToCartModal(false)}
      />
    </div>
  );
}