import { statisticsMeta } from "../data/content";
import { useCounter } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

function StatItem({ label, value, suffix }) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref} className="text-center px-4">
      <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        {count}
        <span className="text-indigo-400">{suffix}</span>
      </p>
      <p className="text-zinc-600 text-sm mt-2 font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function Statistics() {
  const { t } = useLanguage();

  return (
    <section id="statistics" className="py-24 sm:py-32 bg-[#0c0c11] border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader number={t.statistics.number} title={t.statistics.title} />

        <div className="card p-10 sm:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statisticsMeta.map((stat, i) => (
              <StatItem
                key={t.statistics.labels[i]}
                label={t.statistics.labels[i]}
                value={stat.value}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
