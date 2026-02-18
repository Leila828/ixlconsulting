import { Card } from "@/components/ui/card";
import { ArrowRight, Globe2, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ServiceInnovation() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services · Culture &amp; Growth Engine
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Innovation Transformation
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We help organizations move beyond one-off innovation projects to a continuous, Vision 2030–aligned
              growth engine — built on a clear operating model, portfolio, and culture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                From Initiatives to an Innovation System
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Many organizations run hackathons, labs, or pilots, but struggle to convert them into sustained results.
                iXL designs the innovation strategy, operating model, and governance that connect front-line ideas to
                board-level priorities.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Innovation strategy tightly aligned to national Vision 2030 and corporate objectives</li>
                <li>Innovation operating model (roles, processes, governance, funding)</li>
                <li>Ideas → delivery pipeline with clear stage gates and decision rights</li>
                <li>
                  Innovation labs &amp; ecosystem activation: hackathons, accelerators, startup partnerships, and
                  challenge programs
                </li>
                <li>Leadership and culture interventions to embed experimentation and learning</li>
              </ul>
            </div>
          </div>

          <Card className="p-6 space-y-4 border border-border/80 bg-secondary/40">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Where This Applies
              </p>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>National innovation authorities and Vision 2030 programs</li>
              <li>Corporate innovation labs, digital transformation offices, and PMOs</li>
              <li>Universities, accelerators, and ecosystem builders seeking regional impact</li>
            </ul>
            <div className="pt-2">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                  Explore an Innovation Engagement
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-secondary py-14 md:py-16">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-start">
          <Card className="p-6 border border-border/80 bg-white">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Ecosystem-Scale Experience
            </h3>
            <p className="text-sm text-muted-foreground">
              Our work on programs like Hajj Hackathon, Oman Ideathon, and Google&apos;s MENA developer ecosystem
              means we design innovation systems that work at national and regional scale — not just within a single
              department.
            </p>
          </Card>
          <Card className="p-6 border border-border/80 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <Globe2 className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Connected to Global Hubs
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              We connect your innovation programs with global tech, funds, and universities — including China, Europe,
              and North America — for faster IP transfer, pilots, and co-creation.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

