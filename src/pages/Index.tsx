
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen bg-photo-dark">
      <Navigation />
      <Hero />
      
      {/* Featured Work Preview */}
      <section id="content" className="py-20 px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              }
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg photo-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-playfair font-semibold">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-block px-6 py-3 border-2 border-gradient-start hover:bg-photo-gradient text-photo-light hover:text-white transition-all duration-300 rounded-lg font-medium"
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
