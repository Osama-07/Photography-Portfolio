
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-photo-dark">
      <Navigation />
      <Hero />
      
      {/* Featured Work Preview */}
      <section id="content" className="py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-photo-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-photo-light/80 max-w-2xl mx-auto">
              A glimpse into my latest photography collections, showcasing the beauty of light, form, and human connection.
            </p>
          </div>

          {/* Auto-scrolling image strip with enhanced animations */}
          <div className="relative mb-12 mask-gradient">
            <div className="flex space-x-6 animate-scroll-elegant group hover:animate-scroll-paused will-change-transform">
              {/* First set of images */}
              {[
                {
                  src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=800&fit=crop&q=80",
                  title: "Urban Geometry",
                  category: "Architecture"
                },
                {
                  src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=600&h=800&fit=crop&q=80",
                  title: "Mountain Light",
                  category: "Landscape"
                },
                {
                  src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=800&fit=crop&q=80",
                  title: "Forest Depths",
                  category: "Nature"
                },
                {
                  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
                  title: "Golden Hour",
                  category: "Portrait"
                },
                {
                  src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop&q=80",
                  title: "Wild Serenity",
                  category: "Wildlife"
                }
              ].concat([
                // Duplicate set for seamless loop
                {
                  src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=800&fit=crop&q=80",
                  title: "Urban Geometry",
                  category: "Architecture"
                },
                {
                  src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=600&h=800&fit=crop&q=80",
                  title: "Mountain Light",
                  category: "Landscape"
                },
                {
                  src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=800&fit=crop&q=80",
                  title: "Forest Depths",
                  category: "Nature"
                },
                {
                  src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
                  title: "Golden Hour",
                  category: "Portrait"
                },
                {
                  src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=800&fit=crop&q=80",
                  title: "Wild Serenity",
                  category: "Wildlife"
                }
              ]).map((image, index) => (
                <div
                  key={index}
                  className="group/item relative overflow-hidden rounded-xl flex-shrink-0 w-64 h-80 transform transition-all duration-500 hover:scale-105 hover:z-10"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110 filter brightness-90 group-hover/item:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-playfair font-semibold mb-1 text-shadow-lg">{image.title}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-0.5 bg-photo-gradient rounded-full"></div>
                        <p className="text-sm text-white/90 uppercase tracking-wider">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-block px-8 py-4 border-2 border-gradient-start hover:bg-photo-gradient text-photo-light hover:text-white transition-all duration-500 rounded-xl font-medium text-lg tracking-wide hover:shadow-2xl hover:shadow-gradient-start/20 transform hover:-translate-y-1"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
