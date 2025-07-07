import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageModal from "@/components/ImageModal";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const featuredImages = [
    {
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=800&fit=crop&q=80",
      title: "هندسة حضرية",
      category: "عمارة",
      description: "استكشاف تقاطع الضوء والظل في العمارة الحديثة",
    },
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=600&h=800&fit=crop&q=80",
      title: "ضوء الجبل",
      category: "مناظر طبيعية",
      description: "التقاط سحر الساعة الذهبية فوق قمم الجبال",
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=800&fit=crop&q=80",
      title: "أعماق الغابة",
      category: "طبيعة",
      description: "في قلب البرية البكر والطبيعة الخلابة",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
      title: "الساعة الذهبية",
      category: "بورتريه",
      description: "صور بورتريه طبيعية في أروع أوقات الضوء الذهبي",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop&q=80",
      title: "هدوء البرية",
      category: "حياة برية",
      description: "لحظات سلام في جمال الطبيعة البرية",
    },
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

          {/* Swiper image carousel */}
          <div className="relative mb-12 mask-gradient">
            <Swiper
              spaceBetween={16}
              slidesPerView="auto"
              loop={true}
              freeMode={true}
              speed={20000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, FreeMode]}
              className="w-full"
            >
              {featuredImages.map((image, index) => (
                <SwiperSlide key={index} style={{ width: "16rem" }}>
                  <div
                    className="group/item relative overflow-hidden rounded-xl flex-shrink-0 w-64 h-80 mx-auto transform transition-all duration-500 hover:scale-105 hover:z-10 cursor-pointer select-none"
                    onClick={() => handleImageClick(index)}
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
                          {image.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-0.5 bg-photo-gradient ml-2 rounded-full"></div>
                          <p className="text-sm text-white/90 uppercase tracking-wider">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-4 border-2 border-gradient-start hover:bg-photo-gradient text-photo-light hover:text-white transition-all duration-500 rounded-xl font-medium text-lg tracking-wide hover:shadow-2xl hover:shadow-gradient-start/20 transform hover:-translate-y-1"
            >
              عرض جميع الأعمال
            </Link>
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
