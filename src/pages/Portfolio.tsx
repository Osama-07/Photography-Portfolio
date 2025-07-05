import { useState } from "react";
import Navigation from "@/components/Navigation";
import ImageModal from "@/components/ImageModal";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "كل الأعمال" },
    { id: "landscape", name: "مناظر طبيعية" },
    { id: "architecture", name: "عمارة" },
    { id: "nature", name: "طبيعة" },
    { id: "food", name: "أطعمة" },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=1000&fit=crop&q=80",
      title: "هندسة حضرية",
      description: "استكشاف تقاطع الضوء والشكل في العمارة الحديثة",
      category: "architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&q=80",
      title: "قمم ضبابية",
      description: "ضباب الصباح الباكر يلف الجبال",
      category: "landscape",
    },
    {
      src: "/تصوير اطعمة/_MG_4696.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/_MG_4739.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/_MG_5152.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/_MG_5153.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=800&fit=crop&q=80",
      title: "الساعة الذهبية",
      description: "ضوء دافئ يتسلل عبر أشجار الغابة",
      category: "nature",
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&q=80",
      title: "إطلالة الوادي",
      description: "منظر جوي للوديان الخضراء والتلال المتدحرجة",
      category: "landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&fit=crop&q=80",
      title: "أحلام رقمية",
      description: "أنماط مجردة في التكنولوجيا والحياة الحديثة",
      category: "architecture",
    },
    {
      src: "/تصوير اطعمة/_MG_5154.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/_MG_5155.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/_MG_6193.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/_MG_6241.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&h=1200&fit=crop&q=80",
      title: "روعة الألب",
      description: "جمال الطبيعة البكر في جبال الألب",
      category: "landscape",
    },
    {
      src: "/تصوير اطعمة/Chocolate.png.PNG",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/IMG_7570.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/IMG_7571.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/IMG_7572.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/IMG_7573.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/IMG_7574.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/IMG_7575.jpg",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/تصميم بدون عنوان.png.PNG",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/تصميم بدون عنوان.png(1).PNG",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/تصميم بدون عنوان.png(2).PNG",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
    {
      src: "/تصوير اطعمة/تصميم بدون عنوان.png(3).PNG",
      title: "تصوير اطعمة",
      description: "تصوير اطعمة في الصباح",
      category: "food",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-photo-dark" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl py-3 font-bold gradient-text mb-6 animate-fade-in">
            المعرض
          </h1>
          <p className="text-lg text-photo-light/80 max-w-2xl mx-auto animate-fade-in-up">
            مجموعة مختارة من أعمالي الفوتوغرافية، أستكشف فيها جمال العالم من
            زوايا وعدسات مختلفة.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-photo-gradient text-white shadow-lg"
                    : "bg-transparent border border-gradient-start text-photo-light hover:bg-photo-gradient hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={`${selectedCategory}-${index}`}
                className="break-inside-avoid group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-lg photo-hover">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        images={filteredImages}
        currentIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
