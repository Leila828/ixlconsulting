/**
 * HeroVisual — Animated SVG illustration for the home page hero.
 * Depicts an abstract network/constellation of interconnected nodes
 * representing iXL's 360° transformation pillars.
 */
export function HeroVisual() {
    return (
        <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
            {/* Glow background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--brand-primary-light)]/20 via-transparent to-[var(--brand-accent-gold)]/15 blur-2xl" />

            <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative w-full h-full drop-shadow-2xl"
                aria-label="iXL Consulting 360° Transformation Visual"
            >
                {/* Connection lines */}
                <g stroke="#3783B2" strokeWidth="1" opacity="0.4">
                    <line x1="200" y1="60" x2="100" y2="150" className="animate-pulse" />
                    <line x1="200" y1="60" x2="300" y2="150" className="animate-pulse" />
                    <line x1="100" y1="150" x2="200" y2="240" />
                    <line x1="300" y1="150" x2="200" y2="240" />
                    <line x1="100" y1="150" x2="300" y2="150" strokeDasharray="6 4" />
                    <line x1="200" y1="60" x2="200" y2="240" strokeDasharray="4 6" opacity="0.3" />
                    {/* Outer connections */}
                    <line x1="60" y1="80" x2="200" y2="60" opacity="0.25" />
                    <line x1="340" y1="80" x2="200" y2="60" opacity="0.25" />
                    <line x1="60" y1="220" x2="100" y2="150" opacity="0.25" />
                    <line x1="340" y1="220" x2="300" y2="150" opacity="0.25" />
                </g>

                {/* Orbit ring */}
                <ellipse cx="200" cy="150" rx="140" ry="90" stroke="#3783B2" strokeWidth="0.8" opacity="0.15" strokeDasharray="8 6" />
                <ellipse cx="200" cy="150" rx="100" ry="65" stroke="#C9A84C" strokeWidth="0.6" opacity="0.12" strokeDasharray="5 8" />

                {/* Central node — AI */}
                <circle cx="200" cy="150" r="28" fill="#05389F" opacity="0.9">
                    <animate attributeName="r" values="26;30;26" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="150" r="34" stroke="#3783B2" strokeWidth="1.5" fill="none" opacity="0.5">
                    <animate attributeName="r" values="32;38;32" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="200" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="700" fontFamily="sans-serif">AI</text>
                <text x="200" y="158" textAnchor="middle" fill="#FFFFFF" fontSize="6" opacity="0.8" fontFamily="sans-serif">TRANSFORM</text>

                {/* Top node — Leadership */}
                <circle cx="200" cy="60" r="20" fill="#0F5092" opacity="0.85" />
                <circle cx="200" cy="60" r="25" stroke="#3783B2" strokeWidth="1" fill="none" opacity="0.3" />
                <text x="200" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">CHIEF OF</text>
                <text x="200" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">STAFF</text>

                {/* Left node — Innovation */}
                <circle cx="100" cy="150" r="22" fill="#3783B2" opacity="0.85" />
                <circle cx="100" cy="150" r="27" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.25" />
                <text x="100" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">INNOVATION</text>
                <text x="100" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="6" opacity="0.8" fontFamily="sans-serif">STRATEGY</text>

                {/* Right node — Growth */}
                <circle cx="300" cy="150" r="22" fill="#3783B2" opacity="0.85" />
                <circle cx="300" cy="150" r="27" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.25" />
                <text x="300" y="148" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">GLOBAL</text>
                <text x="300" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="6" opacity="0.8" fontFamily="sans-serif">GROWTH</text>

                {/* Bottom node — Talent */}
                <circle cx="200" cy="240" r="20" fill="#0F5092" opacity="0.85" />
                <circle cx="200" cy="240" r="25" stroke="#3783B2" strokeWidth="1" fill="none" opacity="0.3" />
                <text x="200" y="238" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">TRAINING</text>
                <text x="200" y="246" textAnchor="middle" fill="#FFFFFF" fontSize="6" opacity="0.8" fontFamily="sans-serif">& TALENT</text>

                {/* Satellite dots */}
                <circle cx="60" cy="80" r="5" fill="#C9A84C" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="340" cy="80" r="5" fill="#C9A84C" opacity="0.6">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="220" r="4" fill="#3783B2" opacity="0.5">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="340" cy="220" r="4" fill="#3783B2" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Pixel particles */}
                <circle cx="150" cy="100" r="2" fill="#FFFFFF" opacity="0.3">
                    <animate attributeName="cy" values="100;95;100" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="100" r="2" fill="#FFFFFF" opacity="0.3">
                    <animate attributeName="cy" values="100;105;100" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="200" r="1.5" fill="#C9A84C" opacity="0.4">
                    <animate attributeName="cy" values="200;196;200" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="200" r="1.5" fill="#C9A84C" opacity="0.4">
                    <animate attributeName="cy" values="200;204;200" dur="5s" repeatCount="indefinite" />
                </circle>

                {/* "360°" label */}
                <text x="200" y="25" textAnchor="middle" fill="#C9A84C" fontSize="11" fontWeight="700" fontFamily="sans-serif" opacity="0.7">360° TRANSFORMATION</text>
            </svg>
        </div>
    );
}
