import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personal, navHrefs } from "../data/content";
import { navKeys } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080c]/90 backdrop-blur-md border-b border-[#1f1f2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg font-bold text-white tracking-tight">
            {personal.name}
            <span className="text-indigo-400">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navHrefs.map((link, i) => (
              <a key={link.href} href={link.href} className="nav-link text-sm">
                {t.nav[navKeys[i]]}
              </a>
            ))}
            <LanguageToggle />
            <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm">
              {t.nav.hireMe}
              <ArrowUpRight size={14} />
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-5 border-t border-[#1f1f2a] pt-4 space-y-1">
            {navHrefs.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {t.nav[navKeys[i]]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-3 w-full justify-center !text-sm"
            >
              {t.nav.hireMe}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
