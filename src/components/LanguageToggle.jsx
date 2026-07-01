import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.lang.ariaLabel}
      title={t.lang.switchTo}
      className={`group relative flex items-center rounded-full border border-[#1f1f2a] bg-[#0f0f14] p-1 hover:border-indigo-500/30 transition-all duration-300 ${className}`}
    >
      <span
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-indigo-500/15 border border-indigo-500/25 transition-all duration-300 ease-out ${
          lang === "en" ? "left-1" : "left-[calc(50%+0px)]"
        }`}
        aria-hidden="true"
      />

      <span
        className={`relative z-10 flex items-center justify-center w-9 h-7 text-[11px] font-bold tracking-wide rounded-full transition-colors duration-200 ${
          lang === "en" ? "text-indigo-300" : "text-zinc-500 group-hover:text-zinc-400"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex items-center justify-center w-9 h-7 text-[11px] font-bold tracking-wide rounded-full transition-colors duration-200 ${
          lang === "ar" ? "text-indigo-300" : "text-zinc-500 group-hover:text-zinc-400"
        }`}
      >
        ع
      </span>
    </button>
  );
}
