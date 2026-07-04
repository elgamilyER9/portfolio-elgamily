
import { useEffect, useState } from "react";
import { Clock3, MapPin, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const DEFAULT_LATITUDE = 31.0443;
const DEFAULT_LONGITUDE = 31.3785;

const toRadians = (deg) => (deg * Math.PI) / 180;
const toDegrees = (rad) => (rad * 180) / Math.PI;

export default function SupNav() {
  const { t, lang } = useLanguage();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [qiblaDirection, setQiblaDirection] = useState(0);
  const [showSupNav, setShowSupNav] = useState(true);

  const labels = {
    liveStatus: t.supNav?.liveStatus ?? "Live status",
    description: t.supNav?.description ?? "Backend systems with fast, secure, and scalable architecture.",
    location: t.supNav?.location ?? "Mansoura, Egypt",
    qibla: t.supNav?.qibla ?? "Qibla",
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDate(
        now.toLocaleDateString(lang === "ar" ? "ar-EG" : undefined, {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
      setTime(
        now.toLocaleTimeString(lang === "ar" ? "ar-EG" : undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    const calculateQibla = () => {
      const makkahLat = 21.4225241;
      const makkahLng = 39.8261818;
      const dLon = toRadians(makkahLng - DEFAULT_LONGITUDE);
      const lat1 = toRadians(DEFAULT_LATITUDE);
      const lat2 = toRadians(makkahLat);
      const term1 = Math.sin(dLon);
      const term2 = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(dLon);
      const angle = Math.atan2(term1, term2);
      setQiblaDirection(Math.round((toDegrees(angle) + 360) % 360));
    };

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setShowSupNav(currentY < lastScrollY || currentY < 40);
          lastScrollY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    updateTime();
    calculateQibla();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`border-b border-white/10 bg-[#0b0b12]/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden ${
        showSupNav ? "h-14 opacity-100" : "h-0 opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between gap-4 px-5 sm:px-8 text-white">
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 truncate">{labels.liveStatus}</p>
            <p className="text-sm font-semibold text-white truncate">
              <Clock3 size={14} className="inline-block align-text-bottom text-indigo-400 me-2" />
              {date} · {time}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-300">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 whitespace-nowrap">
            <MapPin size={14} className="text-indigo-400" />
            {labels.location}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 whitespace-nowrap">
            <Compass size={14} className="text-violet-400" />
            {labels.qibla} {qiblaDirection}°
          </div>
          <p className="hidden xl:block text-right uppercase tracking-[0.24em] text-zinc-500 truncate max-w-[250px]">
            {labels.description}
          </p>
        </div>
      </div>
    </header>
  );
}
