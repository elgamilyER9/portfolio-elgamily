import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

export default function Certificates() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 sm:py-32 border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader number={t.certificates.number} title={t.certificates.title} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.certificates.items.map((cert, i) => (
              <div key={cert} className="card flex items-center gap-4 px-5 py-4">
                <span className="text-zinc-700 font-mono text-xs w-5">0{i + 1}</span>
                <span className="text-zinc-300 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
