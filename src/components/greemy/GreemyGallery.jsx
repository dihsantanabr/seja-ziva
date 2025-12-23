import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/b10c68cca_greemy01530.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/7c1252bd9_greemy01533.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/c3dfce7e4_greemy01541.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/aafc370a4_greemy01549.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/321caa013_greemy01552.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943057000397efc6e14db64/a9cdd280a_greemy01568.jpg"
];

export default function GreemyGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Energia Verde na Prática
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Veja como o Greemy faz parte da rotina de milhares de pessoas
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 lg:gap-8">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_45%] xl:flex-[0_0_35%]"
                >
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-green-600 to-lime-600 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={image}
                      alt={`Greemy ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-green-600 text-green-600 shadow-xl z-10 w-10 h-10 lg:w-12 lg:h-12"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
          <Button
            onClick={scrollNext}
            variant="outline"
            size="icon"
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-green-600 text-green-600 shadow-xl z-10 w-10 h-10 lg:w-12 lg:h-12"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}