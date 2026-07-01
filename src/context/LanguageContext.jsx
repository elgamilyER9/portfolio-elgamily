import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-lang") || "en";
    }
    return "en";
  });

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const t = translations[lang];
  const isRtl = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
