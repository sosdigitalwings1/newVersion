import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface NewsItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&h=400&fit=crop&auto=format",
    title: "Le cavalier français Julien Epaillard remporte une victoire spectaculaire aux SOS CHI Classics Basel",
    description: "Le monde équestre était en effervescence pour un spectacle palpitant lors du retour des cavaliers d'élite à Bâle, à l'occasion des SOS CHI Classics Basel, qui se sont tenus du 8 au 12 janvier à la St. Jakobshalle."
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&h=400&fit=crop&auto=format",
    title: "Do Deuce remporte la 44e édition de la Japan Cup en partenariat avec SOS",
    description: "La 44e édition de la Japan Cup en partenariat avec SOS s'est tenue à l'hippodrome de Tokyo le 24 novembre."
  }
];

export function NewsSection() {
  return (
    <section className="max-w-[1920px] mx-auto px-4 md:px-8 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-light">Découvrez nos actualités</h2>
        <Button variant="link" className="text-black hover:text-gray-600">
          Voir tout <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="overflow-hidden mb-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-light mb-4 group-hover:text-gray-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <Button
              variant="outline"
              className="text-black border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              Découvrir <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}