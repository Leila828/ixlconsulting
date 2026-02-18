import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, LineChart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ServiceAiTransformation() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services · The Accelerator
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              AI Transformation
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We help organizations deploy AI to create internal speed-to-information and new, sellable
              revenue streams – grounded in research from MIT Sloan, McKinsey, Harvard, and Stanford SALT Lab.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                From AI Experiments to Agent-Centric Enterprises
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Most organizations are stuck in pilots. We design AI programs that rewire workflows instead of
                adding tools — aligning operating model, data, and talent with an agent-centric vision.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Rapid AI agent deployment and orchestration for targeted processes</li>
                <li>Board-level AI strategy and roadmap with measurable value cases</li>
                <li>Commercial AI product development (white-label or proprietary solutions)</li>
                <li>AI workforce upskilling and change management for adoption</li>
              </ul>
            </div>
          </div>

          <Card className="p-6 space-y-4 border border-border/80 bg-secondary/40">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Outcomes
              </p>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>2–10x productivity on targeted processes and journeys</li>
              <li>New AI-enabled revenue streams and product lines</li>
              <li>Clear governance around risk, ethics, and compliance</li>
            </ul>
            <div className="pt-2">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[#101a3b] transition-colors">
                  Explore an AI Transformation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-[#02030b] text-white py-14 md:py-16">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 items-start">
          <Card className="p-6 border border-blue-500/40 bg-[#050922]">
            <div className="flex items-center gap-2 mb-3">
              <LineChart className="h-4 w-4 text-[#2E86AB]" />
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                The 10x Mandate
              </p>
            </div>
            <p className="text-sm text-blue-50">
              Research from MIT Sloan, McKinsey (estimating $4.4T annual GenAI value), Harvard Business
              School, and Stanford SALT Lab is clear: organizations that don&apos;t re-architect around AI
              will face structural competitive disadvantage within the decade.
            </p>
          </Card>
          <Card className="p-6 border border-blue-500/40 bg-[#050922]">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-200 mb-3">
              How We Engage
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-blue-100">
              <li>Start with 2–3 high-value use cases to demonstrate impact in weeks, not years</li>
              <li>Design an AI operating model that connects technology, data, and people</li>
              <li>Scale to products, services, and ecosystem partnerships where it makes sense</li>
            </ul>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

