import { Card } from "@/components/ui/card";
import { ArrowRight, ListChecks, Target, Users, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ServiceChiefOfStaff() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services · Internal Foundation
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Chief of Staff &amp; Agile Process Transformation
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We embed alongside the CEO, minister, or chairperson to architect the executive{" "}
              <strong>operating system of your leadership team</strong> —
              aligning strategy, governance, and execution for 2–10x performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                What This Service Covers
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                The Chief of Staff &amp; Agile Process Transformation engagement gives you a single point of
                integration across strategy, operations, and communication. We bring chief-of-staff discipline from
                Google, Qualcomm, and growth-stage environments into your C-suite.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Design and rollout of an Executive Operating System (EOS)</li>
                <li>OKR and KPI frameworks connected to board and leadership priorities</li>
                <li>Rhythms for executive committees, steering committees, and working groups</li>
                <li>Special projects leadership across AI, innovation, partnerships, and M&amp;A integration</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Impact Mapping
              </p>
              <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <Card className="p-3 border border-border/70 bg-secondary/40 hover:shadow-md transition-all cursor-default">
                  <p className="font-semibold text-foreground">Strategy &amp; Planning</p>
                  <p className="text-muted-foreground">Strategic Alignment</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40 hover:shadow-md transition-all cursor-default">
                  <p className="font-semibold text-foreground">Operations</p>
                  <p className="text-muted-foreground">Operational Excellence</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40 hover:shadow-md transition-all cursor-default">
                  <p className="font-semibold text-foreground">Communication</p>
                  <p className="text-muted-foreground">Information Fluidity</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40 hover:shadow-md transition-all cursor-default">
                  <p className="font-semibold text-foreground">Execution</p>
                  <p className="text-muted-foreground">Rapid Value Delivery</p>
                </Card>
              </div>
            </div>
          </div>

          <Card className="p-6 space-y-4 border border-border/80 bg-slate-50">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Ideal For
              </p>
            </div>
            <ul className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--brand-primary-light)] shrink-0" />
                <span>CEOs, ministers, and chairs leading multi-stakeholder transformations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--brand-primary-light)] shrink-0" />
                <span>Organizations in post-M&amp;A integration, restructuring, or high-growth phases</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--brand-primary-light)] shrink-0" />
                <span>Entities seeking to connect Vision 2030, AI, and innovation agendas into one execution model</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                  Discuss a Chief of Staff Engagement
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
              Next Step
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Start with a Free Phase A Discovery
            </h2>
            <p className="text-sm md:text-base text-primary-foreground/80">
              4–5 days onsite discovery with your leadership team followed by 3–4 weeks of quick-win
              implementation – at no cost, as a partnership exploration.
            </p>
          </div>
          <Card className="p-4 md:p-5 bg-[var(--brand-dark)] border border-primary/40 text-xs md:text-sm text-primary-foreground">
            <div className="flex items-start gap-3">
              <ListChecks className="h-4 w-4 mt-1" />
              <ul className="space-y-1.5">
                <li>Map current decision, communication, and execution flows</li>
                <li>Identify constraints across AI, innovation, and external partnerships</li>
                <li>Deliver a concrete operating model proposal with measurable targets</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
