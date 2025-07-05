import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageModal from "@/components/ImageModal";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay, { AutoplayType } from "embla-carousel-autoplay";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const featuredImages = [
    // {
    //   src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=800&fit=crop&q=80",
    //   title: "هندسة حضرية",
    //   category: "عمارة",
    //   description: "استكشاف تقاطع الضوء والظل في العمارة الحديثة",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=600&h=800&fit=crop&q=80",
    //   title: "ضوء الجبل",
    //   category: "مناظر طبيعية",
    //   description: "التقاط سحر الساعة الذهبية فوق قمم الجبال",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=800&fit=crop&q=80",
    //   title: "أعماق الغابة",
    //   category: "طبيعة",
    //   description: "في قلب البرية البكر والطبيعة الخلابة",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
    //   title: "الساعة الذهبية",
    //   category: "بورتريه",
    //   description: "صور بورتريه طبيعية في أروع أوقات الضوء الذهبي",
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop&q=80",
    //   title: "هدوء البرية",
    //   category: "حياة برية",
    //   description: "لحظات سلام في جمال الطبيعة البرية",
    // },
    {
      src: "/تصوير اطعمة/_MG_4696.jpg",
      title: "اوريو فانيلا",
      category: "حلويات",
      description: "تصوير حبات اوريو فانيلا",
    },
    {
      src: "/تصوير اطعمة/IMG_7572.jpg",
      title: "قهوة وشوكولاتة",
      category: "حلويات",
      description: "تصوير قهوة وشوكولاتة",
    },
    {
      src: "/تصوير اطعمة/_MG_5155.jpg",
      title: "كب كيك بالفنيلا",
      category: "حلويات",
      description: "تصوير كب كيك بالفنيلا",
    },
    {
      src: "/تصوير اطعمة/IMG_7571.jpg",
      title: "كوراسون وقهوة",
      category: "حلويات",
      description: "تصوير كوراسون وقهوة",
    },
    {
      src: "/تصوير اطعمة/_MG_6241.jpg",
      title: "بقلاوة",
      category: "حلويات",
      description: "تصوير بقلاوة",
    },
    {
      src: "/تصوير اطعمة/_MG_6193.jpg",
      title: "معجنات منوعة",
      category: "فطائر ومعجنات",
      description: "تصوير معجنات منوعة",
    },
  ];

  // Auto-play plugin configuration
  const autoplay = AutoPlay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      slidesToScroll: 1,
      containScroll: "keepSnaps",
      dragFree: true,
    },
    // @ts-expect-error - Version mismatch between embla-carousel packages
    [autoplay]
  );

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-photo-dark">
      <Navigation />
      <Hero />

      {/* Featured Work Preview */}
      <section id="content" className="py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl py-3 font-bold gradient-text mb-6">
              الأعمال المميزة
            </h2>
            <div className="w-24 h-1 bg-photo-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-photo-light/80 max-w-2xl mx-auto">
              لمحة عن أحدث مجموعاتي الفوتوغرافية، أستعرض فيها جمال الضوء والشكل
              وروعة التواصل الإنساني.
            </p>
          </div>

          {/* Draggable/swipeable image carousel with auto-scroll */}
          <div className="relative mb-12 mask-gradient">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5">
                {/* Duplicate images for seamless loop */}
                {featuredImages.map((image, index) => (
                  <div
                    key={index}
                    className="group/item relative overflow-hidden rounded-xl flex-shrink-0 w-64 h-80 transform transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer select-none"
                    onClick={() =>
                      handleImageClick(index % featuredImages.length)
                    }
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110 filter brightness-90 group-hover/item:brightness-100 pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-semibold mb-1 text-shadow-lg">
                          {(() => {
                            switch (image.title) {
                              case "هندسة حضرية":
                                return "هندسة حضرية";
                              case "ضوء الجبل":
                                return "ضوء الجبل";
                              case "أعماق الغابة":
                                return "أعماق الغابة";
                              case "الساعة الذهبية":
                                return "الساعة الذهبية";
                              case "هدوء البرية":
                                return "هدوء البرية";
                              default:
                                return image.title;
                            }
                          })()}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-0.5 bg-photo-gradient ml-2 rounded-full"></div>
                          <p className="text-sm text-white/90 uppercase tracking-wider">
                            {(() => {
                              switch (image.category) {
                                case "عمارة":
                                  return "عمارة";
                                case "مناظر طبيعية":
                                  return "مناظر طبيعية";
                                case "طبيعة":
                                  return "طبيعة";
                                case "بورتريه":
                                  return "بورتريه";
                                case "حياة برية":
                                  return "حياة برية";
                                default:
                                  return image.category;
                              }
                            })()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-block px-8 py-4 border-2 border-gradient-start hover:bg-photo-gradient text-photo-light hover:text-white transition-all duration-500 rounded-xl font-medium text-lg tracking-wide hover:shadow-2xl hover:shadow-gradient-start/20 transform hover:-translate-y-1"
            >
              عرض جميع الأعمال
            </a>
          </div>
        </div>
      </section>

      <ImageModal
        images={featuredImages}
        currentIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Index;
