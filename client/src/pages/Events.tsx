import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Video, Calendar, MapPin } from "lucide-react";

export default function Events() {
    const events = [
        {
            title: "CST Digital Technology Forum",
            description: "Showcasing digital technology innovations.",
            link: "https://www.youtube.com/watch?v=X26WDBzMwX0", // Placeholder
            platform: "YouTube",
            date: "2023"
        },
        {
            title: "SDAIA Holo Show",
            description: "A holographic presentation experience.",
            link: "https://x.com/abid_salim/status/1717461919219515505?t=XkvH7wwMB9hBTByg031uTA&s=08", // Placeholder
            platform: "X (Twitter)",
            date: "2023"
        },
        {
            title: "AI Hack Tunisia",
            description: "Highlights from the AI Hackathon in Tunisia.",
            link: "https://drive.google.com/file/d/1JOXp5tSPIyTut03k1j5PplvdgzOBGJ20/view", // Placeholder
            platform: "Google Drive",
            date: "2019"
        },
        {
            title: "Snap Lensathon",
            description: "AR innovation and creativity on display.",
            link: "https://www.youtube.com/watch?v=YmJCOJwfMu8", // Placeholder
            platform: "YouTube",
            date: "2025"
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <section className="bg-secondary py-20">
                <div className="container mx-auto px-4 text-center space-y-6">
                    <h1 className="text-5xl font-bold text-primary">Our Events</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore our past events, workshops, and hackathons that have shaped the tech landscape.
                    </p>
                </div>
            </section>

            <section className="py-20 flex-grow">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((event, index) => (
                            <Card key={index} className="p-8 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary p-3 rounded-full">
                                        <Video className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary mb-2">{event.title}</h3>
                                        <p className="text-muted-foreground mb-4">{event.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1"><Calendar size={16} /> {event.date}</span>
                                            <span className="flex items-center gap-1"><MapPin size={16} /> Global</span>
                                        </div>
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent font-semibold hover:underline inline-flex items-center gap-2"
                                        >
                                            Watch on {event.platform}
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
