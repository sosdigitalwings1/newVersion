import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function AdvertisingSection() {
  return (
    <section className="relative h-[calc(90vh-108px)]">
      <div className="absolute inset-0">
        <div className="relative h-full">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

          {/* Background video */}
          <video
            src="/assets/videos/Slow.mp4" // Ensure the path is correct
            autoPlay
            loop
            muted
            playsInline
            aria-label="Sos Spirit Flyback video"
            className="absolute inset-0 object-cover w-full h-full"
          >
            <track
              kind="captions"
              srcLang="en"
              label="Sos Spirit Flyback"
              default
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="relative z-20 h-full max-w-[1920px] mx-auto px-4 md:px-8 flex flex-col items-start justify-end pb-32">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white">
            SOS SPIRIT ZULU TIME
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
          >
            Découvrir <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}