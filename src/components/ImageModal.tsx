
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

  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-photo-gradient hover:bg-photo-gradient-hover rounded-full transition-colors duration-200"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-photo-gradient hover:bg-photo-gradient-hover rounded-full transition-colors duration-200"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-photo-gradient hover:bg-photo-gradient-hover rounded-full transition-colors duration-200"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="max-w-6xl max-h-full flex flex-col items-center">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-full max-h-[80vh] object-contain animate-scale-in"
        />
        
        {/* Image Info */}
        <div className="mt-4 text-center">
          <h3 className="text-xl font-playfair font-semibold text-white mb-2">
            {currentImage.title}
          </h3>
          {currentImage.description && (
            <p className="text-photo-light/80 max-w-md">
              {currentImage.description}
            </p>
          )}
          {images.length > 1 && (
            <p className="text-sm text-photo-light/60 mt-2">
              {index + 1} of {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
