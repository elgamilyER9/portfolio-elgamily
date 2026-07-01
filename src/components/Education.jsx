import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 sm:py-32 bg-[#0c0c11] border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader number={t.education.number} title={t.education.title} />

          <div className="card p-8 max-w-2xl">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-xl">
                🎓
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">{t.education.university}</h3>
                <p className="text-zinc-400 mt-1">{t.education.degree}</p>
                <p className="text-indigo-400 text-sm font-medium mt-3 font-mono">
                  {t.education.graduation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
