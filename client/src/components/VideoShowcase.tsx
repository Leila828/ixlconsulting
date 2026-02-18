import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
    title: string;
    description: string;
    thumbnailLabel: string;
    youtubeId?: string;
    gradient: string;
}

function VideoCard({ title, description, thumbnailLabel, youtubeId, gradient }: VideoCardProps) {
    const [playing, setPlaying] = useState(false);

    return (
        <Card className="group overflow-hidden border border-border/80 card-hover-shadow">
            <div className="relative aspect-video bg-gradient-to-br overflow-hidden cursor-pointer" onClick={() => youtubeId && setPlaying(true)}>
                {playing && youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                ) : (
                    <div className={`absolute inset-0 ${gradient} flex flex-col items-center justify-center gap-3`}>
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <svg viewBox="0 0 400 225" className="w-full h-full">
                                <pattern id={`grid-${title.replace(/\s/g, '')}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                                <rect width="400" height="225" fill={`url(#grid-${title.replace(/\s/g, '')})`} />
                            </svg>
                        </div>
                        {youtubeId && (
                            <div className="relative z-10 h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                                <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                            </div>
                        )}
                        <p className="relative z-10 text-xs font-semibold text-white/80 uppercase tracking-wider">{thumbnailLabel}</p>
                    </div>
                )}
            </div>
            <div className="p-4 space-y-1.5">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </Card>
    );
}

export function VideoShowcase() {
    const videos: VideoCardProps[] = [
        {
            title: "HoloShow — Holographic Experience",
            description: "A cutting-edge holographic show production showcasing iXL's event innovation capabilities across the MENA region.",
            thumbnailLabel: "Holographic Show",
            youtubeId: undefined,
            gradient: "bg-gradient-to-br from-[var(--brand-dark-deep)] via-[#0F5092] to-[var(--brand-primary-light)]",
        },
        {
            title: "AI Hack Tunisia",
            description: "Pan-African AI hackathon bringing together developers from across the continent to build AI-powered solutions.",
            thumbnailLabel: "AI Hackathon",
            youtubeId: undefined,
            gradient: "bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-mid)] to-[#3783B2]",
        },
        {
            title: "DTF CST — Digital Transformation Forum",
            description: "Chief of Staff and digital transformation forum bringing together CXOs and government leaders from Saudi Arabia and MENA.",
            thumbnailLabel: "DTF Forum",
            youtubeId: undefined,
            gradient: "bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-primary)] to-[var(--brand-primary-mid)]",
        },
    ];

    return (
        <section className="bg-[var(--brand-dark-deep)] text-white py-20">
            <div className="container mx-auto space-y-10">
                <div className="max-w-3xl space-y-4">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--brand-accent-gold)]">
                        In Action
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Events, Hackathons &amp; Innovation at Scale
                    </h2>
                    <p className="text-sm md:text-base text-blue-100/80">
                        From holographic shows to continent-wide hackathons and digital transformation forums — see iXL's programs come to life.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((v) => (
                        <VideoCard key={v.title} {...v} />
                    ))}
                </div>
            </div>
        </section>
    );
}
