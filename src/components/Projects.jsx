import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projectsMeta } from "../data/content";
import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#0c0c11] border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.projects.number}
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />

          <div className="space-y-5">
            {projectsMeta.map((project, index) => {
              const content = t.projects.items[index];
              return (
                <article key={project.name} className="card group overflow-hidden">
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div
                      className="lg:col-span-1 hidden lg:flex items-center justify-center"
                      style={{
                        background: `${project.color}15`,
                        borderInlineEnd: `1px solid ${project.color}25`,
                      }}
                    >
                      <span
                        className="text-xs font-mono font-bold tracking-widest"
                        style={{
                          color: project.color,
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="lg:col-span-11 p-6 sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-mono px-2.5 py-1 rounded border border-[#1f1f2a] text-zinc-500"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline !py-2 !px-3 !text-xs"
                          >
                            <GitHubIcon size={14} />
                            {t.projects.github}
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !py-2 !px-3 !text-xs"
                          >
                            <ExternalLink size={14} />
                            {t.projects.liveDemo}
                          </a>
                        </div>
                      </div>

                      <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl">
                        {content.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {content.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 rounded-full text-zinc-400 border border-[#1f1f2a] bg-[#16161d]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/elgamilyER9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              {t.projects.viewAll}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
