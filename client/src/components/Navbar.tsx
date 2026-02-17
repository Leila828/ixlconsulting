import { Link, useLocation } from "wouter";
import logo from "../pages/images/logo.png";

export function Navbar() {
    const [location] = useLocation();

    const getLinkClass = (path: string) => {
        const isActive = location === path;
        return `transition-colors ${isActive ? "text-primary font-bold" : "text-foreground hover:text-primary"}`;
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-border">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    <a className="flex items-center gap-3 text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
                        <img
                            src={logo}
                            alt="iXL Consulting Logo"
                            className="h-10 w-auto object-contain"
                        />
                        <span>iXL Consulting</span>
                    </a>
                </Link>
                <div className="flex gap-8 items-center">
                    <Link href="/about">
                        <a className={getLinkClass("/about")}>About</a>
                    </Link>
                    <Link href="/services">
                        <a className={getLinkClass("/services")}>Services</a>
                    </Link>
                    <Link href="/projects">
                        <a className={getLinkClass("/projects")}>Projects</a>
                    </Link>
                    <Link href="/contact">
                        <a className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
