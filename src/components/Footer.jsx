import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personal, navHrefs } from "../data/content";
import { navKeys } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const socials = [
    { icon: GitHubIcon, href: personal.github, label: "GitHub" },
    { icon: LinkedInIcon, href: personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
    { icon: FaWhatsapp, href: `https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`, label: "WhatsApp" },
    { icon: Phone, href: `tel:${personal.phone}`, label: "Phone" },
  ];

  return (
    <footer className="border-t border-[#1f1f2a] py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-bold text-white">
              {personal.name}
              <span className="text-indigo-400">.</span>
            </p>
            <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">{t.footer.links}</p>
            <ul className="space-y-2">
              {navHrefs.map((link, i) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {t.nav[navKeys[i]]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">{t.footer.connect}</p>
            <div className="flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-[#1f1f2a] bg-[#0f0f14] flex items-center justify-center text-zinc-500 hover:text-white hover:border-[#2e2e3a] transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1f1f2a] flex flex-wrap items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs">
            &copy; {year} {personal.name}. {t.footer.rights}
          </p>
          <p className="text-zinc-700 text-xs font-mono">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
