import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  collections: [
    "MASTER",
    "CONQUEST",
    "SPIRIT",
    "ELEGANCE",
    "HERITAGE",
  ],
  service: [
    "Service client",
    "FAQ",
    "Garantie",
    "Entretien",
    "Trouver une boutique",
  ],
  univers: [
    "Notre histoire",
    "Ambassadeurs",
    "Sports",
    "Actualités",
    "Carrières",
  ],
  legal: [
    "Mentions légales",
    "Politique de confidentialité",
    "Conditions générales",
    "Plan du site",
    "Cookies",
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-medium mb-6">Collections</h3>
            <ul className="space-y-4">
              {footerLinks.collections.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Service</h3>
            <ul className="space-y-4">
              {footerLinks.service.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Notre Univers</h3>
            <ul className="space-y-4">
              {footerLinks.univers.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Légal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 SOSDigitalWings. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}