import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function GenderCategories() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1920px] mx-auto px-4 md:px-8 py-16">
      <div className="relative group cursor-pointer">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&h=1000&fit=crop&auto=format"
            alt="Montres Homme"
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-6xl font-light mb-4">Homme</h2>
          <Button
            variant="outline"
            className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
          >
            Montres <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative group cursor-pointer">
        <div className="overflow-hidden">
          <img
            src="/assets/girlsWach.webp"
            alt="Montres Femme"
            className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-6xl font-light mb-4">Femme</h2>
          <Button
            variant="outline"
            className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
          >
            Montres <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}