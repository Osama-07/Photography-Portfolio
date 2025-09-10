import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import { useGallery } from "@/Context/GalleryContext";

const Gallery = () => {
  const { images, loading } = useGallery();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = [{ id: "all", name: "كل الأعمال" }];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => "all" === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-photo-dark" dir="rtl">
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
      {loading ? (
        // For the case where images are being loaded
        <div className="flex justify-center items-center mt-44">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-y-gradient-end">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : filteredImages.length === 0 ? (
        // For the case where no images match the selected category
        <div className="flex flex-col justify-center items-center mt-44 animate-fade-in-up">
          <div className="mb-6">
            <svg
              className="w-20 h-20 animate-pulse"
              fill="none"
              viewBox="0 0 48 48"
            >
              <defs>
                <linearGradient
                  id="grad1"
                  x1="0"
                  y1="0"
                  x2="48"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#635047" />
                  <stop offset="1" stopColor="#b59f8d" />
                </linearGradient>
              </defs>
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="url(#grad1)"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8"
                stroke="url(#grad1)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="24" cy="30" r="2.5" fill="url(#grad1)" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl text-photo-light font-semibold gradient-text bg-clip-text text-transparent animate-fade-in-up delay-200">
            لا يوجد عناصر في هذا القسم.
          </p>
          <span className="mt-4 text-photo-light/60 text-lg animate-fade-in-up delay-300">
            جرب اختيار قسم آخر أو عد لاحقًا!
          </span>
        </div>
      ) : (
        // For the case where images match the selected category
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ImageModal
        images={filteredImages}
        currentIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Gallery;
