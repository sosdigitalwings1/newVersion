import { useState } from 'react';
import { ChevronLeft, ChevronDown, Heart, Share2, ZoomIn, Clock, Watch, Droplet, Shield, Plus, Minus } from 'lucide-react';
import { Product } from './types';
import { ProductCarousel } from './ProductCarousel';
import { AddToCartModal } from 'components/AddToCartModalProps';
import { useCart } from 'context/CartContext';

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
  
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAddToCartModal(true);
  };

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setMousePosition({ x, y });
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

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
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center text-gray-800 hover:text-gray-600 transition-colors group">
              <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm tracking-wide">Retour à la collection</span>
            </a>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsWishlistActive(!isWishlistActive)}
                className={`group p-2 rounded-full transition-all duration-300 ${
                  isWishlistActive ? 'bg-red-50 text-red-500' : 'hover:bg-gray-50'
                }`}
              >
                <Heart className={`w-4 h-4 transition-transform group-hover:scale-110 ${isWishlistActive ? 'fill-current' : ''}`} />
              </button>
              <button className="group p-2 rounded-full hover:bg-gray-50 transition-all duration-300">
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
              className="relative aspect-[4/5] overflow-hidden bg-gray-50 rounded-lg cursor-zoom-in"
              onMouseMove={handleZoom}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
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
                  hover:bg-white transition-all duration-300 hover:scale-105 group"
              >
                <ZoomIn className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-2 ring-black ring-offset-2'
                      : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
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
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors group"
                  >
                    <Minus className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </button>
                  <span className="w-12 text-center font-medium text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors group"
                  >
                    <Plus className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#00264C] text-white h-12 text-sm tracking-widest font-medium 
                    hover:bg-[#003366] transition-all duration-300 hover:scale-[1.01]"
                >
                  AJOUTER AU PANIER
                </button>
              </div>
              <button
                onClick={() => setIsWishlistActive(!isWishlistActive)}
                className={`w-full h-12 text-sm tracking-widest font-medium border transition-all duration-300 
                  hover:scale-[1.01] ${
                  isWishlistActive
                    ? 'bg-red-50 border-red-200 text-red-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                {isWishlistActive ? 'RETIRER DE LA LISTE' : 'AJOUTER À LA LISTE'}
              </button>
            </div>

            <div className="border-t border-gray-100 pt-8 space-y-3">
              {product.details.map((section) => (
                <div key={section.title} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex justify-between items-center py-4 group"
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
                  >
                    <div className="prose prose-sm text-gray-600 leading-relaxed text-sm">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-base font-medium tracking-wide mb-6">Caractéristiques techniques</h3>
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
          <h2 className="text-2xl font-light tracking-wide mb-12">Vous pourriez aussi aimer</h2>
          <ProductCarousel products={relatedProducts} />
        </div>
      </div>

      <AddToCartModal
        product={product}
        isOpen={showAddToCartModal}
        onClose={() => setShowAddToCartModal(false)}
        // onViewCart={() => {
        //   setShowAddToCartModal(false);
        //   // Navigate to cart page
        // }}
        onContinueShopping={() => setShowAddToCartModal(false)}
      />
    </div>
  );
}

