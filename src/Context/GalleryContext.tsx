import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type GalleryImage = {
  src: string;
  title: string;
};

type GalleryContextType = {
  images: GalleryImage[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
};

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};

type GalleryProviderProps = {
  children: ReactNode;
};

export const GalleryProvider = ({ children }: GalleryProviderProps) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://photographer.runasp.net/api/drive/gallery"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch gallery images");
      }
      const data = await response.json();
      setImages(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Unknown error");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const value: GalleryContextType = {
    images,
    loading,
    error,
    refresh: fetchImages,
  };

  return (
    <GalleryContext.Provider value={value}>
        {children}
    </GalleryContext.Provider>
  );
};
