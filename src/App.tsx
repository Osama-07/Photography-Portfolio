import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Gallery from "./pages/Gallery";
import { GalleryProvider } from "./Context/GalleryContext";
import { HomeProvider } from "./Context/HomeContext";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            history.replaceState(null, "", `#${entry.target.id}`);
            setHash(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.25, // أقل شوية حتى يلتقط أكثر
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation hash={hash} />
        <HomeProvider>
          <Index />
        </HomeProvider>
        <GalleryProvider>
          <Gallery />
        </GalleryProvider>
        <About />
        <Contact />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
