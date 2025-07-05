import Navigation from "@/components/Navigation";
import personalImg from "../../public/Personal-Image.png";

const About = () => {
  return (
    <div className="min-h-screen bg-photo-dark" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="animate-fade-in">
              <img
                src={personalImg}
                alt="عبدالله - مصور فوتوغرافي"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-lg photo-hover"
              />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl py-3 md:text-6xl font-bold gradient-text mb-6">
                عن عبدالله
              </h1>
              <div className="w-24 h-1 bg-photo-gradient mb-8 rounded-full"></div>

              <div className="space-y-6 text-photo-light/90 text-lg leading-relaxed">
                <p>
                  مرحبًا بكم في عالمي الفوتوغرافي. أنا عبدالله، مصور شغوف أكرس
                  جهدي لالتقاط الجمال الاستثنائي في التفاصيل اليومية، وأبحث عن
                  الجمال في الظلال والضوء، وأروي القصص من خلال الصور.
                </p>

                <p>
                  مع أكثر من عشر سنوات من الخبرة في تصوير البورتريه والمناظر
                  الطبيعية والعمارة، أؤمن أن كل لحظة تحمل قصة تستحق التوثيق.
                  يركز عملي على التفاعل بين الضوء الطبيعي والمشاعر الإنسانية،
                  لخلق صور تتجاوز السطح وتلامس الأعماق.
                </p>

                <p>
                  أستوحي إلهامي من المناظر الحضرية وجمال الطبيعة البكر. كل صورة
                  هي تأمل في الزمن والضوء واللحظات العابرة التي تشكل تجربتنا
                  الإنسانية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl py-3 font-bold gradient-text text-center mb-16">
            المسيرة والخبرة
          </h2>

          <div className="relative">
            {/* Gradient Timeline Line */}
            <div className="absolute top-0 bottom-0 w-1 bg-photo-gradient rounded-full"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2023 - الآن",
                  title: "التصوير الفني",
                  description:
                    "التركيز على المعارض الفنية وأعمال البورتريه الخاصة، واستكشاف تقاطع الضوء مع المشاعر.",
                },
                {
                  year: "2020 - 2023",
                  title: "التصوير التجاري",
                  description:
                    "التعاون مع علامات تجارية رائدة في تصوير العمارة والمنتجات، وتطوير أسلوب بصري خاص.",
                },
                {
                  year: "2018 - 2020",
                  title: "العمل التحريري",
                  description:
                    "مصور مساهم في عدة مجلات نمط حياة وسفر، وتوثيق قصص من مناطق متنوعة.",
                },
                {
                  year: "2014 - 2018",
                  title: "أساسيات التصوير",
                  description:
                    "دراسة الفنون الجميلة مع التركيز على التصوير في معهد سان فرانسيسكو للفنون، وتطوير المهارات التقنية والرؤية الفنية.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start right-4 animate-fade-in-up max-md:px-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-4 h-4 bg-photo-gradient rounded-full border-4 border-photo-dark relative z-10"></div>
                  <div className="flex-grow">
                    <div className="text-gradient-end font-semibold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
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
          <h2 className="text-3xl md:text-4xl py-3 font-bold gradient-text mb-12">
            فلسفتي في التصوير
          </h2>

          <blockquote className="text-2xl md:text-3xl font-light text-photo-light italic mb-8 animate-fade-in">
            "التصوير ليس مجرد كاميرا أو تقنية، بل هو رؤية العالم بقصد والتقاط
            روح اللحظة."
          </blockquote>

          <p className="text-lg text-photo-light/80 max-w-2xl mx-auto animate-fade-in-up">
            كل صورة ألتقطها مستوحاة من هذا الإيمان. من خلال التكوين الدقيق،
            واستخدام الضوء بعناية، والملاحظة الصبورة، أسعى لخلق صور تلامس مشاعر
            وخيال المشاهد.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
