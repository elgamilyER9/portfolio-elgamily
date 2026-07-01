import { useState } from "react";
import { personal } from "../data/content";

const FALLBACK_IMAGE = "/profile.svg";

export default function ProfileImage({
  className = "",
  size = "lg",
  showRing = true,
}) {
  const [src, setSrc] = useState(personal.profileImage);
  const [failed, setFailed] = useState(false);

  const sizes = {
    md: "w-32 h-32 sm:w-36 sm:h-36",
    lg: "w-56 h-56 sm:w-64 sm:h-64",
    xl: "w-64 h-64 sm:w-72 sm:h-72",
  };

  const ring = showRing
    ? "ring-2 ring-indigo-500/30 ring-offset-2 ring-offset-[#08080c]"
    : "";

  const handleError = () => {
    if (src !== FALLBACK_IMAGE) {
      setSrc(FALLBACK_IMAGE);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div
        className={`${sizes[size]} ${ring} rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center ${className}`}
      >
        <span className="text-5xl sm:text-6xl font-bold text-indigo-400">
          {personal.name[0]}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={personal.name}
        onError={handleError}
        className={`${sizes[size]} ${ring} rounded-2xl object-cover border border-[#1f1f2a]`}
      />
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 -z-10 blur-sm" />
    </div>
  );
}
