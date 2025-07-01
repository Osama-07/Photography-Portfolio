
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-photo-dark">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6 animate-fade-in">
            Let's Work Together
          </h1>
          <p className="text-lg text-photo-light/80 max-w-2xl mx-auto animate-fade-in-up">
            Whether you're looking for portrait sessions, commercial photography, or artistic collaborations, I'd love to hear about your vision.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-playfair font-semibold gradient-text mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Photography Services</h3>
                  <ul className="space-y-2 text-photo-light/80">
                    <li>• Portrait & Headshot Sessions</li>
                    <li>• Commercial & Architectural Photography</li>
                    <li>• Fine Art Commissions</li>
                    <li>• Editorial & Lifestyle Photography</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Response Time</h3>
                  <p className="text-photo-light/80">
                    I typically respond to all inquiries within 24 hours. For urgent requests, please mention it in your message.
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-photo-light/80">
                  <Mail size={20} className="text-gradient-end" />
                  <span>alex@alexchenphoto.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200"
                  >
                    <option value="">Select a project type</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="fine-art">Fine Art Commission</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project, vision, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-photo-gradient hover:bg-photo-gradient-hover text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:transform-none animate-glow"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
