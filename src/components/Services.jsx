import { Server, Globe, Database, Shield, Code2 } from "lucide-react";
import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

const icons = [Server, Globe, Database, Shield, Code2];

export default function Services() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.services.number}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.services.items.map((service, i) => {
              const Icon = icons[i];
              return (
                <div key={service.title} className="card p-6 group">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
