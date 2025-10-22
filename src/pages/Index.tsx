import Hero from "@/components/Hero";
import ImageModal from "@/components/ImageModal";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHome } from "@/Context/HomeContext";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { images, loading } = useHome();

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  }, []);

  return (
    <section id="home" className="min-h-screen">
      <Hero />

      {/* Featured Work Preview */}
      <div className="py-20 px-4 overflow-hidden relative" data-aos="fade-up">
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

          {/* Swiper image carousel */}
          {!loading && (
            <div className="relative p-10 mb-12 mask-gradient flex justify-center items-center max-md:flex-col gap-10">
              <Swiper
                effect={"cards"}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                cardsEffect={{
                  rotate: true,
                  slideShadows: false,
                }}
                modules={[Autoplay, FreeMode, EffectCards, Pagination]}
                className="w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} style={{ width: "16rem" }}>
                    <div
                      className="group/item relative overflow-hidden rounded-xl flex-shrink-0 w-64 h-80 mx-auto transform transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer select-none"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                          <h3 className="text-xl font-semibold mb-1 text-shadow-lg">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                effect={"cards"}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                cardsEffect={{
                  rotate: true,
                  slideShadows: false,
                }}
                modules={[Autoplay, FreeMode, EffectCards, Pagination]}
                className="w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} style={{ width: "16rem" }}>
                    <div
                      className="group/item relative overflow-hidden rounded-xl flex-shrink-0 w-64 h-80 mx-auto transform transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer select-none"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                          <h3 className="text-xl font-semibold mb-1 text-shadow-lg">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block px-8 py-4 border-2 border-gradient-start hover:bg-photo-gradient text-photo-light hover:text-white transition-all duration-500 rounded-xl font-medium text-lg tracking-wide hover:shadow-2xl hover:shadow-gradient-start/20 transform hover:-translate-y-1"
            >
              عرض جميع الأعمال
            </Link>
          </div>
        </div>
      </div>

      <ImageModal
        images={images}
        currentIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default Index;
