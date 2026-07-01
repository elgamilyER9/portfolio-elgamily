import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";
import ProfileImage from "./ProfileImage";

export default function About() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.about.number}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-violet-500/10 blur-md" />
                <div className="absolute top-3 -end-3 w-full h-full rounded-2xl border border-indigo-500/20 -z-10" />
                <ProfileImage size="lg" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-zinc-400 text-lg leading-[1.8]">{t.about.text}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {t.about.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="card flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-4 gap-1"
                  >
                    <span className="text-zinc-600 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
