import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center bg-secondary py-20 px-4 text-center">
                <Clock size={64} className="text-primary mb-6" />
                <h1 className="text-5xl font-bold text-primary mb-4">Coming Soon</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    We are working hard to bring you this content. Stay tuned for updates!
                </p>
            </div>
            <Footer />
        </div>
    );
}
