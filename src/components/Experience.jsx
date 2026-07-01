import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.experience.number}
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />

          <div className="relative">
            <div className="absolute start-[19px] top-2 bottom-2 w-px bg-[#1f1f2a] hidden sm:block" />

            <div className="space-y-6">
              {t.experience.items.map((job) => (
                <div key={job.title} className="flex gap-6 sm:gap-8">
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#0f0f14] border border-[#1f1f2a] items-center justify-center shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>

                  <div className="card flex-1 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-zinc-500 text-sm">
                          <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
