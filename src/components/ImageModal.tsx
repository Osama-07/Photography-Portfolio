
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: Array<{ src: string; title: string; description?: string }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ images, currentIndex, isOpen, onClose }: ImageModalProps) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
          break;
        case 'ArrowRight':
          setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 bg-photo-gradient hover:bg-photo-gradient-hover rounded-full transition-all duration-300 shadow-2xl hover:shadow-gradient-start/30 hover:scale-110"
      >
        <X size={20} className="text-white" />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-photo-gradient hover:bg-photo-gradient-hover rounded-full transition-all duration-300 shadow-2xl hover:shadow-gradient-start/30 hover:scale-110"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-photo-gradient hover:bg-photo-gradient-hover rounded-full transition-all duration-300 shadow-2xl hover:shadow-gradient-start/30 hover:scale-110"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div 
        className="max-w-7xl max-h-full flex flex-col items-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Image Info */}
        <div className="mt-6 text-center px-4 animate-fade-in-up">
          <h3 className="text-2xl font-playfair font-semibold text-white mb-3 text-shadow-lg">
            {currentImage.title}
          </h3>
          {currentImage.description && (
            <p className="text-photo-light/80 max-w-lg mx-auto mb-3 leading-relaxed">
              {currentImage.description}
            </p>
          )}
          {images.length > 1 && (
            <div className="flex items-center justify-center space-x-3 mt-4">
              <div className="flex space-x-1">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'bg-photo-gradient scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-photo-light/60 ml-3">
                {index + 1} of {images.length}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
