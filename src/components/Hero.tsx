import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("content");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop&q=80"
          alt="منظر جبلي ضبابي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl py-3 font-bold mb-6 gradient-text">
          عبدالله
        </h1>
        <p className="text-xl md:text-2xl text-photo-light/90 mb-8 max-w-2xl mx-auto font-light">
          ألتقط لحظات تروي قصصًا من خلال الضوء والظل والمشاعر
        </p>

        <Link
          to="/portfolio"
          className="inline-block px-8 py-4 bg-photo-gradient hover:bg-photo-gradient-hover text-white font-medium rounded-lg transition-all duration-1000 transform hover:scale-105 hover:shadow-lg animate-glow"
        >
          دخول المعرض
        </Link>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-photo-light/70 hover:text-white transition-colors duration-1000 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
