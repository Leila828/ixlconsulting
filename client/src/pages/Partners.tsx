import { Card } from "@/components/ui/card";
import { ArrowRight, Globe2, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Partners &amp; Network
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              A Global Network That Opens Doors
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We have deep relationships that accelerate traction, access, and reputation for our
              clients across geographies and industries — from Saudi national programs to global
              tech, funds, and academia.
            </p>
          </div>
        </div>
      </section>

      {/* By Region */}
      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-8">
          <div className="flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              By Region
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Saudi Arabia */}
            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Saudi Arabia
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">EVC (رؤية الخبراء)</span> — Innovation
                  Partnership
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    NTDP MVPLAB Exec Committee
                  </span>{" "}
                  — National Technology Development Program
                </li>
              </ul>
            </Card>

            {/* Algeria / Egypt */}
            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Algeria / Egypt
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">DevMENA</span> — 92K+ YouTube
                  subscribers, developer community across MENA
                </li>
              </ul>
            </Card>

            {/* UAE / MENA */}
            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                UAE / MENA
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">BambooGeeks</span> — Tech consulting
                  partner
                </li>
                <li>
                  <span className="font-semibold text-foreground">AitNews (البوابة التقنية)</span> —
                  Tech media partner
                </li>
              </ul>
            </Card>

            {/* United States */}
            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                United States
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">The Founder Institute</span> —
                  Innovation Partner
                </li>
              </ul>
            </Card>

            {/* Canada */}
            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Canada
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">The Ivey Academy</span> — Executive
                  Education Partner
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Network (Clients & Associates) */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-8">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Global Network (Clients &amp; Associates)
            </p>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Our extended network includes global technology companies, funds, universities, and
            ecosystem partners. This connectivity accelerates market access, tech transfer, and
            reputation-building for our clients.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-xs md:text-sm">
            {[
              "NVIDIA",
              "Snapchat",
              "Google",
              "McKinsey & Company",
              "FlutterFlow",
              "Barclays",
              "EIT Digital (EU)",
              "Simple Ventures",
              "Y Combinator",
              "Slow Ventures",
              "Penta",
              "Humboldt University Berlin",
              "Universidad de Navarra",
              "Inovia",
              "Anemex",
            ].map((name) => (
              <Card
                key={name}
                className="px-4 py-3 border border-border/80 bg-white/90 flex items-center justify-center text-center"
              >
                <span className="text-foreground font-semibold">{name}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunity */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Partnership Opportunity
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Partner With iXL to Amplify Your Impact
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Whether you are a university, accelerator, fund, technology company, or government
              entity, iXL can help you design and scale programs that unlock real outcomes —
              connecting you to the right ecosystems across Saudi Arabia, MENA, and beyond.
            </p>
          </div>
          <div className="space-y-4">
            <Card className="p-6 border border-border/80 bg-secondary/40">
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>Co-branded innovation programs and academies</li>
                <li>Joint AI, cloud, and startup initiatives</li>
                <li>Cross-market partnership and M&amp;A pipelines</li>
              </ul>
            </Card>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Become a Partner
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

