import { Download, ArrowUpRight, ArrowDown } from "lucide-react";
import { personal } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

const codeLines = [
  { indent: 0, parts: [{ t: "class ", c: "kw" }, { t: "DeveloperController", c: "cls" }, { t: " extends Controller", c: "def" }] },
  { indent: 0, parts: [{ t: "{", c: "def" }] },
  { indent: 1, parts: [{ t: "public function ", c: "kw" }, { t: "index", c: "fn" }, { t: "(): JsonResponse", c: "def" }] },
  { indent: 1, parts: [{ t: "{", c: "def" }] },
  { indent: 2, parts: [{ t: "return ", c: "kw" }, { t: "response", c: "fn" }, { t: "()->json([", c: "def" }] },
  { indent: 3, parts: [{ t: "'name'", c: "str" }, { t: " => ", c: "def" }, { t: "'elgamily'", c: "str" }, { t: ",", c: "def" }] },
  { indent: 3, parts: [{ t: "'role'", c: "str" }, { t: " => ", c: "def" }, { t: "'Backend Developer'", c: "str" }, { t: ",", c: "def" }] },
  { indent: 3, parts: [{ t: "'stack'", c: "str" }, { t: " => [", c: "def" }, { t: "'PHP'", c: "str" }, { t: ", ", c: "def" }, { t: "'Laravel'", c: "str" }, { t: "],", c: "def" }] },
  { indent: 2, parts: [{ t: "]);", c: "def" }] },
  { indent: 1, parts: [{ t: "}", c: "def" }] },
  { indent: 0, parts: [{ t: "}", c: "def" }] },
];

const colors = {
  kw: "text-violet-400",
  cls: "text-amber-300",
  fn: "text-sky-400",
  str: "text-emerald-400",
  def: "text-zinc-500",
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      <div className="glow-orb w-[500px] h-[500px] bg-indigo-600/10 -top-32 -start-32" />
      <div className="glow-orb w-[400px] h-[400px] bg-violet-600/8 bottom-0 end-0" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1f1f2a] bg-[#0f0f14] text-xs text-zinc-400 mb-8 animate-fade-up"
              style={{ animationDelay: "0s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              {t.hero.available}
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-zinc-500 font-semibold text-3xl sm:text-4xl block mb-2">
                {t.hero.greeting}
              </span>
              <span className="text-white">{personal.name}<span className="text-indigo-400">.</span></span>
            </h1>

            <p
              className="mt-5 text-xl sm:text-2xl font-semibold text-indigo-400 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {t.personal.title}
              <span className="text-zinc-600 mx-2">|</span>
              <span className="text-zinc-400 font-medium">{t.personal.subtitle}</span>
            </p>

            <p
              className="mt-6 text-zinc-500 text-base sm:text-lg leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              {t.personal.tagline}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a href={personal.cvUrl} download="Elgamily_CV.pdf" className="btn-primary">
                <Download size={16} />
                {t.hero.downloadCv}
              </a>
              <a href="#contact" className="btn-outline">
                {t.hero.contactMe}
                <ArrowUpRight size={16} />
              </a>
              <a href="#projects" className="btn-outline">
                {t.hero.viewProjects}
              </a>
            </div>

            <div
              className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { value: "15+", label: t.hero.stats.projects },
                { value: "2+", label: t.hero.stats.years },
                { value: t.hero.specialtyValue, label: t.hero.stats.specialty },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-white font-bold text-lg">{s.value}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
              <div className="w-px h-8 bg-[#1f1f2a]" />
              <p className="text-zinc-600 text-sm">{t.personal.location}</p>
            </div>
          </div>

          <div className="animate-fade-up hidden lg:block" style={{ animationDelay: "0.3s" }}>
            <div className="code-window shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f1f2a] bg-[#0c0c11]">
                <div className="code-dot bg-red-500/70" />
                <div className="code-dot bg-yellow-500/70" />
                <div className="code-dot bg-green-500/70" />
                <span className="ms-2 text-zinc-600 text-xs">DeveloperController.php</span>
              </div>
              <div className="p-5 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-zinc-700 select-none w-6 text-end me-4 text-xs leading-7">
                      {i + 1}
                    </span>
                    <span style={{ paddingInlineStart: `${line.indent * 16}px` }} className="leading-7">
                      {line.parts.map((p, j) => (
                        <span key={j} className={colors[p.c]}>{p.t}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 start-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
