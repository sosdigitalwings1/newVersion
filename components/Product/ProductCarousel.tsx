// components/Product/ProductCarousel.tsx
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "components/ui/carousel";
  import { Button } from "components/ui/button";
  import Link from 'next/link';
import { Product } from "./types";
  
  export const products: Product[] = [
    {
      id: "1",
      name: "SPIRIT CHRONO SKI EDITION",
      images: ["/assets/waches/wach2.png"],
      isNew: true,
      specs: {
        Taille: "42.00 mm",
        Mouvement: "Automatique",
        Matériau: "Inoxydable et lunette en céramique",
      },
      price: "5 700,00 CAD",
      description: "Une montre exceptionnelle...",
    },
    {
        id: "2",
        name: "SPIRIT CHRONO SKI EDITION",
        images: ["/assets/waches/wach1.png"],
        isNew: true,
        specs: {
          Taille: "42.00 mm",
          Mouvement: "Automatique",
          Matériau: "Inoxydable et lunette en céramique",
        },
        price: "5 700,00 CAD",
        description: "Une montre exceptionnelle...",
      },
      {
        id: "3",
        name: "SPIRIT CHRONO SKI EDITION",
        images: ["/assets/waches/wach3.png"],
        isNew: true,
        specs: {
          Taille: "42.00 mm",
          Mouvement: "Automatique",
          Matériau: "Inoxydable et lunette en céramique",
        },
        price: "5 700,00 CAD",
        description: "Une montre exceptionnelle...",
      },
      {
          id: "4",
          name: "SPIRIT CHRONO SKI EDITION",
          images: ["/assets/waches/wach4.png"],
          isNew: true,
          specs: {
            Taille: "42.00 mm",
            Mouvement: "Automatique",
            Matériau: "Inoxydable et lunette en céramique",
          },
          price: "5 700,00 CAD",
          description: "Une montre exceptionnelle...",
        },
    // ... other products
  ];
  
  export function ProductCarousel() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={`/products/${product.id}`} className="group relative flex flex-col space-y-4">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm">
                          Nouveau
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <p key={key}>{value}</p>
                        ))}
                      </div>
                      <p className="font-medium text-lg">{product.price}</p>
                      <Button
                        variant="outline"
                        className="w-full mt-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        Acheter
                      </Button>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>
    );
  }