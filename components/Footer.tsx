import { Facebook, Instagram, Twitter, Youtube, ArrowRight, Mail } from "lucide-react";

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
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1920px] mx-auto px-8 py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-light mb-4">Restez informé</h2>
            <p className="text-gray-400 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
              et offres exclusives de SOS.
            </p>
            <form className="flex gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 flex items-center gap-2 hover:bg-gray-200 transition-colors group"
              >
                S'inscrire
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1920px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-medium mb-6">Collections</h3>
            <ul className="space-y-4">
              {footerLinks.collections.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link}
                    </span>
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link}
                    </span>
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link}
                    </span>
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
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 SOSDigitalWings. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "Youtube" },
              { icon: Mail, label: "Contact" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}