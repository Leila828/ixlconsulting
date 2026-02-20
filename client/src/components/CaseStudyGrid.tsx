import { Card } from "@/components/ui/card";
import { Award, Globe2, Sparkles, Zap, Target, Users } from "lucide-react";

interface CaseStudyThumbProps {
    title: string;
    subtitle: string;
    gradient: string;
    icon: React.ReactNode;
    stats: string;
    imageUrl?: string;
}

function CaseStudyThumb({ title, subtitle, gradient, icon, stats, imageUrl }: CaseStudyThumbProps) {
    return (
        <Card className="group overflow-hidden border border-border/80 card-hover-shadow">
            <div className={`relative aspect-[16/10] ${gradient} flex flex-col items-center justify-center gap-2 p-6 overflow-hidden`}>
                {/* Abstract geometric decoration or Image */}
                {imageUrl ? (
                    <>
                        <img
                            src={imageUrl}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    </>
                ) : (
                    <div className="absolute inset-0 opacity-10">
                        <svg viewBox="0 0 320 200" className="w-full h-full">
                            <circle cx="160" cy="100" r="70" stroke="white" strokeWidth="0.5" fill="none" />
                            <circle cx="160" cy="100" r="50" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="5 5" />
                            <circle cx="160" cy="100" r="90" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="8 8" />
                            <line x1="0" y1="100" x2="320" y2="100" stroke="white" strokeWidth="0.3" strokeDasharray="4 8" />
                            <line x1="160" y1="0" x2="160" y2="200" stroke="white" strokeWidth="0.3" strokeDasharray="4 8" />
                        </svg>
                    </div>
                )}

                <div className="relative z-10 h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <p className="relative z-10 text-white text-center text-base font-bold leading-tight">{title}</p>
                <p className="relative z-10 text-white/70 text-center text-xs">{subtitle}</p>
            </div>
            <div className="p-4 flex items-center justify-between bg-white">
                <p className="text-xs font-semibold text-primary">{stats}</p>
                <p className="text-xs text-muted-foreground">View Case Study →</p>
            </div>
        </Card>
    );
}


import hajjImg from "@/pages/images/Hajj Hackathon 2018.jpg";
import omanImg from "@/pages/images/Oman Ideathon.jpg";
import snapchatImg from "@/pages/images/Snapchat Lensathon.jpg";
import cstImg from "@/pages/images/cst.png";
import aiHackImg from "@/pages/images/AI Hack Africa.jpeg";
import googleImg from "@/pages/images/Google MENA Ecosystem.jpeg";

export function CaseStudyGrid() {
    const studies: CaseStudyThumbProps[] = [
        {
            title: "Hajj Hackathon 2018",
            subtitle: "World's Largest Hackathon",
            gradient: "bg-gradient-to-br from-[var(--brand-dark-deep)] via-[var(--brand-primary)] to-[var(--brand-primary-mid)]",
            icon: <Award className="h-6 w-6 text-[#C9A84C]" />,
            stats: "3,000+ Participants · Guinness Record",
            imageUrl: hajjImg,
        },
        {
            title: "Oman Ideathon",
            subtitle: "National Innovation Platform",
            gradient: "bg-gradient-to-br from-[#0F5092] via-[#3783B2] to-[var(--brand-primary-light)]",
            icon: <Target className="h-6 w-6 text-white" />,
            stats: "1,000+ Innovators · National Scale",
            imageUrl: omanImg,
        },
        {
            title: "Snapchat Lensathon",
            subtitle: "AR Innovation Competition",
            gradient: "bg-gradient-to-br from-[#C9A84C] via-[#b2903f] to-[var(--brand-primary)]",
            icon: <Sparkles className="h-6 w-6 text-white" />,
            stats: "MENA-Wide · Snap Partnership",
            imageUrl: snapchatImg,
        },
        {
            title: "DTF CST Forum",
            subtitle: "Digital Transformation Forum",
            gradient: "bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-primary-mid)] to-[var(--brand-primary)]",
            icon: <Zap className="h-6 w-6 text-[#C9A84C]" />,
            stats: "CXO Level · Saudi Arabia",
            imageUrl: cstImg,
        },
        {
            title: "AI Hack Africa",
            subtitle: "Continental AI Competition",
            gradient: "bg-gradient-to-br from-[var(--brand-primary-light)] via-[var(--brand-primary)] to-[var(--brand-dark-deep)]",
            icon: <Globe2 className="h-6 w-6 text-white" />,
            stats: "1,000+ Participants · Africa Record",
            imageUrl: aiHackImg,
        },
        {
            title: "Google MENA Ecosystem",
            subtitle: "Developer Community at Scale",
            gradient: "bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary-mid)] to-[#3783B2]",
            icon: <Users className="h-6 w-6 text-white" />,
            stats: "750K Devs · 17 Countries",
            imageUrl: googleImg,
        },
    ];

    return (
        <section className="bg-secondary py-20 border-b border-border/60">
            <div className="container mx-auto space-y-10">
                <div className="text-center space-y-3">
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                        Portfolio Highlights
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Events &amp; Programs That Made History
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                        A visual showcase of hackathons, innovation forums, and ecosystem programs delivered across MENA and beyond.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {studies.map((s) => (
                        <CaseStudyThumb key={s.title} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}
