
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-photo-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&q=80"
                alt="Alex Chen - Photographer"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg shadow-2xl photo-hover"
              />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6">
                About Alex
              </h1>
              <div className="w-24 h-1 bg-photo-gradient mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-photo-light/90 text-lg leading-relaxed">
                <p>
                  Welcome to my world of photography. I'm Alex Chen, a passionate photographer dedicated to capturing the extraordinary in the ordinary, finding beauty in shadows and light, and telling stories through visual narratives.
                </p>
                
                <p>
                  With over a decade of experience in portrait, landscape, and architectural photography, I believe that every moment holds a story worth preserving. My work focuses on the interplay between natural light and human emotion, creating images that resonate beyond the surface.
                </p>
                
                <p>
                  Based between San Francisco and the Pacific Northwest, I draw inspiration from both urban landscapes and the raw beauty of nature. Each photograph is a meditation on time, light, and the fleeting moments that define our human experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text text-center mb-16">
            Journey & Experience
          </h2>
          
          <div className="relative">
            {/* Gradient Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-photo-gradient rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2023 - Present",
                  title: "Fine Art Photography",
                  description: "Focusing on gallery exhibitions and commissioned portrait work, exploring the intersection of light and emotion."
                },
                {
                  year: "2020 - 2023",
                  title: "Commercial Photography",
                  description: "Collaborated with leading brands on architectural and product photography, developing a signature dark aesthetic."
                },
                {
                  year: "2018 - 2020",
                  title: "Editorial Work",
                  description: "Contributing photographer for several lifestyle and travel magazines, capturing stories across the Pacific Northwest."
                },
                {
                  year: "2014 - 2018",
                  title: "Photography Foundation",
                  description: "Studied Fine Arts with a focus on Photography at San Francisco Art Institute, developing technical skills and artistic vision."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-4 h-4 bg-photo-gradient rounded-full border-4 border-photo-dark relative z-10"></div>
                  <div className="flex-grow">
                    <div className="text-gradient-end font-semibold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-photo-light/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-12">
            Photography Philosophy
          </h2>
          
          <blockquote className="text-2xl md:text-3xl font-playfair font-light text-photo-light italic mb-8 animate-fade-in">
            "Photography is not about the camera or the technique—it's about seeing the world with intention and capturing the soul of a moment."
          </blockquote>
          
          <p className="text-lg text-photo-light/80 max-w-2xl mx-auto animate-fade-in-up">
            Every photograph I create is guided by this belief. Through careful composition, thoughtful use of light, and patient observation, I strive to create images that speak to the viewer's emotions and imagination.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
