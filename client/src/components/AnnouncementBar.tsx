import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white text-xs sm:text-sm py-2.5 px-4 relative flex items-center justify-center font-medium z-50">
      <div className="flex items-center gap-3 max-w-[90%] text-center leading-snug">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <span className="hidden sm:inline">
          🎓 Exclusive Partnership · Ivey Business School · Cohort starts April 1, 2026 — Limited Spots
        </span>
        <span className="sm:hidden">
          🎓 Ivey Business School Cohort starts April 1, 2026
        </span>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
