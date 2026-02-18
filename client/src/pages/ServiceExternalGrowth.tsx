import { Card } from "@/components/ui/card";
import { ArrowRight, Globe2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ServiceExternalGrowth() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services · Expansion
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              External Growth &amp; Partnerships
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We help you achieve regional and global growth through strategic partnerships, M&amp;A, and
              tech transfer — with a strong focus on Saudi Arabia and MENA.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Building the Right External Engine
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                External growth is not just about signing MOUs. We map ecosystems, structure partnerships, and support
                M&amp;A plays that translate into market access, capabilities, and defensible advantages.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Regional &amp; global ecosystem mapping (G2G, G2B)</li>
                <li>M&amp;A advisory and opportunistic playbooks (on- and off-market)</li>
                <li>China-to-MENA tech bridge for IP acquisition and localization</li>
                <li>High-impact talent and partnership pipeline orchestration</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Partnership Pillars
              </p>
              <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Partnerships</p>
                  <p className="text-muted-foreground">Market Access &amp; Tech Transfer</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Investments</p>
                  <p className="text-muted-foreground">Rapid Capability Expansion</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Product &amp; IP</p>
                  <p className="text-muted-foreground">Higher Valuation &amp; Differentiation</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Pipelines</p>
                  <p className="text-muted-foreground">Sustainable Revenue Growth</p>
                </Card>
              </div>
            </div>
          </div>

          <Card className="p-6 space-y-4 border border-border/80 bg-secondary/40">
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Example Use Cases
              </p>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>International companies entering Saudi and wider MENA markets</li>
              <li>National champions seeking strategic partners and acquisitions</li>
              <li>Government entities building cross-border innovation and investment platforms</li>
            </ul>
            <div className="pt-2">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[#101a3b] transition-colors">
                  Explore Growth &amp; Partnerships
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

