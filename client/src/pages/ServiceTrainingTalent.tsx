import { Card } from "@/components/ui/card";
import { ArrowRight, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function ServiceTrainingTalent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services · People Development
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Training &amp; Talent
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We design talent programs that accelerate transformation across executives, technical teams, vocational
              roles, and the wider developer community MENA.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                A Full Talent Stack
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Transformation fails when people are not equipped. iXL brings decades of experience in executive
                education, technical training, and vocational skilling — backed by large-scale developer ecosystem
                programs.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Executive training programs (with partners like Ivey Business School)</li>
                <li>Technical tracks in AI agents, cloud, mobile, and emerging technologies</li>
                <li>Vocational programs (e.g., cybersecurity, nurse assistant) tailored to national priorities</li>
                <li>Community-led learning via devMENA (180K+ followers across YouTube and Facebook)</li>
              </ul>
            </div>
          </div>

          <Card className="p-6 space-y-4 border border-border/80 bg-secondary/40">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Talent Ecosystem Focus
              </p>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Alignment with national skilling and employability agendas</li>
              <li>Programs for executives, mid-career professionals, students, and youth</li>
              <li>Developer community MENA engagement through events, content, and challenges</li>
            </ul>
            <div className="pt-2">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-[#101a3b] transition-colors">
                  Design a Talent Program
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

