import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Gallery from "./pages/Gallery";
import { GalleryProvider } from "./Context/GalleryContext";
import { HomeProvider } from "./Context/HomeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="smooth-scroll">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <HomeProvider>
                <Index />
              </HomeProvider>
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryProvider>
                <Gallery />
              </GalleryProvider>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
