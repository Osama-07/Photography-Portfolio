import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type HomeImage = {
  src: string;
  title: string;
};

type HomeContextType = {
  images: HomeImage[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
};

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
};

type HomeProviderProps = {
  children: ReactNode;
};

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [images, setImages] = useState<HomeImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://photographer.runasp.net/api/drive/home"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch home images");
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

  const value: HomeContextType = {
    images,
    loading,
    error,
    refresh: fetchImages,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
