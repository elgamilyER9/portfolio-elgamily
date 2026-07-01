import {
  Server,
  Database,
  Monitor,
  Wrench,
  Code2,
  Globe,
  Shield,
  KeyRound,
  TableProperties,
  Layers,
} from "lucide-react";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiGit,
  SiPostman,
  SiApache,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { GitHubIcon } from "./SocialIcons";
import { skills } from "../data/content";
import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

const categoryConfig = {
  Backend: { icon: Server, color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  Database: { icon: Database, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  Frontend: { icon: Monitor, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
  Tools: { icon: Wrench, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  Languages: { icon: Globe, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
};

const skillIcons = {
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  "REST API": { Icon: Globe, color: "#818cf8" },
  Sanctum: { Icon: Shield, color: "#FF2D20" },
  JWT: { Icon: KeyRound, color: "#f59e0b" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  "Database Design": { Icon: TableProperties, color: "#22d3ee" },
  "Eloquent ORM": { Icon: Layers, color: "#FF2D20" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  React: { Icon: SiReact, color: "#61DAFB" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: GitHubIcon, color: "#fafafa" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  "VS Code": { Icon: VscCode, color: "#007ACC" },
  XAMPP: { Icon: SiApache, color: "#D22128" },
  Laragon: { Icon: Server, color: "#0ea5e9" },
};

function SkillIcon({ name }) {
  const config = skillIcons[name] || { Icon: Code2, color: "#818cf8" };
  const Icon = config.Icon;

  return (
    <Icon
      size={14}
      className="shrink-0"
      style={{ color: config.color }}
    />
  );
}

export default function Skills() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#0c0c11] border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.skills.number}
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {Object.entries(skills).map(([category, items]) => {
              const config = categoryConfig[category] || { icon: Code2, color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" };
              const CategoryIcon = config.icon;

              return (
                <div key={category} className="card p-6 group hover:border-[#2e2e3a]">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center ${config.bg}`}
                    >
                      <CategoryIcon size={18} className={config.color} />
                    </div>
                    <h3 className="text-white font-semibold">
                      {t.skills.categories[category]}
                    </h3>
                    <span className="ms-auto text-xs text-zinc-600 font-mono">
                      {items.length} {t.skills.count}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill inline-flex items-center gap-2 hover:border-indigo-500/30"
                      >
                        <SkillIcon name={skill} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
