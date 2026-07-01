import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personal } from "../data/content";
import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const { ref, isVisible } = useInView();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t.contact.subject} ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    { icon: Mail, label: t.contact.labels.email, value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: t.contact.labels.phone, value: personal.phone, href: `tel:${personal.phone}` },
    { icon: GitHubIcon, label: t.contact.labels.github, value: "github.com/elgamilyER9", href: personal.github },
    { icon: LinkedInIcon, label: t.contact.labels.linkedin, value: "linkedin.com/in/elgamily-ramadan", href: personal.linkedin },
    { icon: MapPin, label: t.contact.labels.location, value: t.personal.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0c11] border-t border-[#1f1f2a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.contact.number}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="card flex items-center gap-4 px-5 py-4 group">
                    <div className="w-9 h-9 rounded-lg bg-[#16161d] border border-[#1f1f2a] flex items-center justify-center shrink-0 group-hover:border-indigo-500/30 transition-colors">
                      <Icon size={16} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-zinc-600 text-xs">{item.label}</p>
                      <p className="text-zinc-300 text-sm font-medium truncate">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight size={14} className="ms-auto text-zinc-700 group-hover:text-indigo-400 transition-colors shrink-0" />
                    )}
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wider">
                    {t.contact.labels.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#08080c] border border-[#1f1f2a] rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-700"
                    placeholder={t.contact.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wider">
                    {t.contact.labels.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#08080c] border border-[#1f1f2a] rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-zinc-700"
                    placeholder={t.contact.placeholders.email}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-zinc-500 mb-2 font-medium uppercase tracking-wider">
                  {t.contact.labels.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#08080c] border border-[#1f1f2a] rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none placeholder:text-zinc-700"
                  placeholder={t.contact.placeholders.message}
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={16} />
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
