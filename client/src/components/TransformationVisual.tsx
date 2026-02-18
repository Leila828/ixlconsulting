/**
 * TransformationVisual — Animated SVG illustration for the Transformation Quadrant section.
 * Visually depicts the four interconnected pillars: Leadership, Culture, AI, and Expansion.
 */
import { cn } from "@/lib/utils";

export function TransformationVisual({ className }: { className?: string }) {
    return (
        <div className={cn("relative w-full aspect-square max-w-md mx-auto", className)}>
            {/* Background Glow */}
            <div className="absolute inset-10 rounded-full bg-[var(--brand-primary-light)]/10 blur-3xl animate-pulse" />

            <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative w-full h-full drop-shadow-xl"
                aria-label="iXL Transformation Quadrant Diagram"
            >
                {/* Central Core */}
                <circle cx="200" cy="200" r="40" fill="#05389F" opacity="0.9" />
                <circle cx="200" cy="200" r="50" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
                </circle>
                <text x="200" y="200" dy="5" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12" fontFamily="sans-serif">CORE</text>

                {/* Quadrant Connectors */}
                <g stroke="#3783B2" strokeWidth="2" opacity="0.3">
                    <line x1="200" y1="150" x2="200" y2="80" />
                    <line x1="200" y1="250" x2="200" y2="320" />
                    <line x1="150" y1="200" x2="80" y2="200" />
                    <line x1="250" y1="200" x2="320" y2="200" />
                </g>

                {/* Top Quadrant: Leadership (Chief of Staff) */}
                <g transform="translate(200, 60)">
                    <circle r="35" fill="#151F28" stroke="#3783B2" strokeWidth="2" />
                    <path d="M-10 -5 L0 -15 L10 -5 M0 -15 L0 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <text y="48" textAnchor="middle" fill="#0F5092" fontSize="10" fontWeight="bold" fontFamily="sans-serif">LEADERSHIP</text>
                </g>

                {/* Right Quadrant: Expansion (Global) */}
                <g transform="translate(340, 200)">
                    <circle r="35" fill="#151F28" stroke="#3783B2" strokeWidth="2" />
                    <circle r="15" stroke="white" strokeWidth="1.5" strokeDasharray="30 100" />
                    <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="white" strokeWidth="1" opacity="0.5" />
                    <text y="48" textAnchor="middle" fill="#0F5092" fontSize="10" fontWeight="bold" fontFamily="sans-serif">EXPANSION</text>
                </g>

                {/* Bottom Quadrant: People (Talent) */}
                <g transform="translate(200, 340)">
                    <circle r="35" fill="#151F28" stroke="#3783B2" strokeWidth="2" />
                    <path d="M-10 5 Q0 15 10 5 M0 -10 L0 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="0" cy="-15" r="5" fill="white" />
                    <text y="48" textAnchor="middle" fill="#0F5092" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PEOPLE</text>
                </g>

                {/* Left Quadrant: Culture (Innovation) */}
                <g transform="translate(60, 200)">
                    <circle r="35" fill="#151F28" stroke="#3783B2" strokeWidth="2" />
                    <path d="M-8 -8 L8 8 M-8 8 L8 -8" stroke="white" strokeWidth="2" />
                    <text y="48" textAnchor="middle" fill="#0F5092" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CULTURE</text>
                </g>

                {/* Orbital Particles */}
                <circle r="4" fill="#C9A84C">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 200 60 Q 340 60 340 200 Q 340 340 200 340 Q 60 340 60 200 Q 60 60 200 60" />
                </circle>
                <circle r="4" fill="#3783B2">
                    <animateMotion dur="6s" begin="3s" repeatCount="indefinite" path="M 200 60 Q 340 60 340 200 Q 340 340 200 340 Q 60 340 60 200 Q 60 60 200 60" />
                </circle>

            </svg>
        </div>
    );
}
