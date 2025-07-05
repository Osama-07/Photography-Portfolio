import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaYoutube, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "تم إرسال الرسالة بنجاح!",
      description: "شكرًا لتواصلك. سأرد عليك خلال 24 ساعة إن شاء الله.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-photo-dark" dir="rtl">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl py-3 font-bold gradient-text mb-6 animate-fade-in">
            دعنا نعمل معًا
          </h1>
          <p className="text-lg text-photo-light/80 max-w-2xl mx-auto animate-fade-in-up">
            سواء كنت تبحث عن جلسات بورتريه، تصوير تجاري، أو تعاون فني، يسعدني
            سماع رؤيتك.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold gradient-text mb-8 py-4">
                تواصل معي
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    خدمات التصوير
                  </h3>
                  <ul className="space-y-2 text-photo-light/80">
                    <li>• جلسات بورتريه وصور شخصية</li>
                    <li>• تصوير تجاري ومعماري</li>
                    <li>• أعمال فنية خاصة</li>
                    <li>• تصوير تحريري ونمط حياة</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    مدة الرد
                  </h3>
                  <p className="text-photo-light/80">
                    عادةً ما أجيب على جميع الاستفسارات خلال 24 ساعة. للطلبات
                    العاجلة، يرجى ذكر ذلك في رسالتك.
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-photo-light/80">
                  <Mail size={20} className="text-gradient-end ml-2" />
                  <span>abdullah@abdullahphoto.com</span>
                </div>

                {/* Social Media */}
                <div className="flex justify-center gap-4 text-[#c8b192] text-2xl">
                  <a
                    className="text-4xl transition-all hover:scale-110"
                    href="https://www.youtube.com/@abodspro1"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    className="text-4xl transition-all hover:scale-110"
                    href="https://wa.me/966531177595"
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    className="text-4xl transition-all hover:scale-110"
                    href="https://www.instagram.com/abodspro"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    className="text-4xl transition-all hover:scale-110"
                    href="https://x.com/abodspro"
                    target="_blank"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    className="text-4xl transition-all hover:scale-110"
                    href="https://www.tiktok.com/@abodspro"
                    target="_blank"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    الاسم *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200"
                    placeholder="الاسم الكامل"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    نوع المشروع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200"
                  >
                    <option value="">اختر نوع المشروع</option>
                    <option value="portrait">جلسة بورتريه</option>
                    <option value="commercial">تصوير تجاري</option>
                    <option value="wedding">تصوير زفاف</option>
                    <option value="fine-art">عمل فني خاص</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gradient-end focus:outline-none focus:ring-2 focus:ring-gradient-end/20 transition-all duration-200 resize-vertical"
                    placeholder="حدثني عن مشروعك، رؤيتك، الجدول الزمني، وأي متطلبات خاصة..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-photo-gradient hover:bg-photo-gradient-hover text-white font-semibold rounded-lg transition-all duration-3000 transform hover:scale-[1.02] disabled:opacity-70 disabled:transform-none animate-glow"
                >
                  {isSubmitting ? "جاري إرسال الرسالة..." : "إرسال الرسالة"}
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
