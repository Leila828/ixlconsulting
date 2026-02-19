import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import logo from "../pages/images/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const SERVICE_LINKS = [
  { href: "/services#chief-of-staff", label: "Chief of Staff & Agile Transformation" },
  { href: "/services#innovation-transformation", label: "Innovation Transformation" },
  { href: "/services#ai-transformation", label: "AI Transformation" },
  { href: "/services#training-talent", label: "Training & Talent" },
  { href: "/services#external-growth-partnerships", label: "External Growth & Partnerships" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = path === "/" ? location === "/" : location.startsWith(path);
    return `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"
      }`;
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="container mx-auto py-3 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img
            src={logo}
            alt="iXL Consulting Logo"
            className="h-[46px] w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-primary">
              iXL Consulting
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Elevating Innovation, Empowering Digital Excellence
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>

          <div className="relative group">
            <button
              type="button"
              className="text-sm font-medium text-foreground hover:text-primary inline-flex items-center gap-1 py-1"
            >
              Services
              <span className="text-xs">▼</span>
            </button>
            {/* pt-2 bridges the gap so cursor stays inside group when moving to menu */}
            <div className="absolute right-0 top-full pt-2 w-80 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              <div className="rounded-lg border border-border bg-white shadow-lg py-2">
                {SERVICE_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary first:rounded-t-lg last:rounded-b-lg"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            Case Studies
          </Link>
          <Link href="/partners" className={getLinkClass("/partners")}>
            Partners
          </Link>
          <Link href="/insights" className={getLinkClass("/insights")}>
            Insights
          </Link>
          <Link href="/contact" className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--brand-primary-mid)] transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile: hamburger + contact */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-secondary"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-[min(320px,85vw)]">
          <SheetHeader>
            <SheetTitle className="text-primary">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 pt-4">
            <Link href="/" onClick={closeMobile} className="block py-3 px-2 text-foreground font-medium hover:bg-secondary rounded-lg">
              Home
            </Link>
            <p className="pt-2 pb-1 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Services
            </p>
            {SERVICE_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobile}
                className="block py-2.5 px-2 pl-4 text-sm text-foreground hover:bg-secondary rounded-lg border-l-2 border-transparent hover:border-primary"
              >
                {label}
              </a>
            ))}
            <Link href="/about" onClick={closeMobile} className="block py-3 px-2 text-foreground font-medium hover:bg-secondary rounded-lg">
              About
            </Link>
            <Link href="/projects" onClick={closeMobile} className="block py-3 px-2 text-foreground font-medium hover:bg-secondary rounded-lg">
              Case Studies
            </Link>
            <Link href="/partners" onClick={closeMobile} className="block py-3 px-2 text-foreground font-medium hover:bg-secondary rounded-lg">
              Partners
            </Link>
            <Link href="/insights" onClick={closeMobile} className="block py-3 px-2 text-foreground font-medium hover:bg-secondary rounded-lg">
              Insights
            </Link>
            <Link href="/contact" onClick={closeMobile} className="block py-3 px-2 text-primary font-semibold hover:bg-secondary rounded-lg">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
