import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "../hooks/useCounter";
import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const { ref, isVisible } = useInView();
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const items = t.testimonials.items;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    resetTimer();
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 border-t border-[#1f1f2a] bg-[#0c0c11] relative overflow-hidden">
      {/* background glow orb */}
      <div className="glow-orb w-80 h-80 bg-indigo-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            number={t.testimonials.number}
            title={t.testimonials.title}
          />

          <div className="relative mt-12 overflow-hidden w-full">
            {/* Carousel track/wrapper (Forced LTR for consistent horizontal sliding animation) */}
            <div className="w-full" dir="ltr">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {items.map((item, idx) => (
                  <div key={idx} className="w-full shrink-0 px-2" dir={isRtl ? "rtl" : "ltr"}>
                    <blockquote className="card p-8 sm:p-12 relative border border-[#1f1f2a] bg-[#0f0f14]/60 backdrop-blur-md min-h-[220px] flex flex-col justify-between">
                      <div>
                        <Quote className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} text-indigo-500/10 w-16 h-16 pointer-events-none`} />
                        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                          {item.quote}
                        </p>
                      </div>

                      <footer className="flex items-center gap-4 pt-6 border-t border-[#1f1f2a]/60 mt-auto">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-lg font-bold">
                          {item.author[0]}
                        </div>
                        <div>
                          <p className="text-white text-base font-semibold">{item.author}</p>
                          <p className="text-zinc-500 text-sm mt-0.5">{item.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation and Indicators */}
            <div className="flex items-center justify-between mt-8 px-2 relative z-20">
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      resetTimer();
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx ? "w-8 bg-indigo-500" : "w-2 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-lg border border-[#1f1f2a] bg-[#0f0f14]/80 hover:bg-[#16161d] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-lg border border-[#1f1f2a] bg-[#0f0f14]/80 hover:bg-[#16161d] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
