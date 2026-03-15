import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Target date: April 1, 2026 00:00:00 UTC
    const targetDate = new Date("2026-04-01T00:00:00Z").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Return empty placeholders to prevent hydration mismatch for SSR
    return (
      <div className="space-y-1.5 md:space-y-2">
        <p className="text-xs md:text-sm font-medium text-white/80">Enrollment closes in:</p>
        <div className="flex items-center gap-2 md:gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-1 items-center">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-amber-500 font-mono text-xl sm:text-2xl font-semibold rounded-md px-2 py-1.5 min-w-[3rem] sm:min-w-[4rem] text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                00
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/60 font-medium invisible">
                unit
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "mins", value: timeLeft.minutes },
    { label: "secs", value: timeLeft.seconds },
  ];

  return (
    <div className="space-y-1.5 md:space-y-2">
      <p className="text-xs md:text-sm font-medium text-white/80">Enrollment closes in:</p>
      <div className="flex items-center gap-2 md:gap-3">
        {timeUnits.map((unit, i) => (
          <div key={i} className="flex flex-col gap-1 items-center">
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-amber-500 font-mono text-xl sm:text-2xl font-semibold rounded-md px-2 py-1.5 min-w-[3rem] sm:min-w-[4rem] text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              {unit.value}
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/60 font-medium">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
