import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Globe2, ListChecks, Target, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Overview Intro */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              What We Deliver: The Transformation Quadrant
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Five interconnected service pillars designed to drive exponential, self-sustaining
              growth. From chief of staff operating models and innovation portfolios to AI agents,
              training, and global partnerships, each pillar can be engaged individually or as part
              of a unified transformation program.
            </p>
          </div>
        </div>
      </section>

      {/* Service Card 1 — Chief of Staff & Agile Process Transformation */}
      <section id="chief-of-staff" className="bg-white py-16 md:py-20 border-b border-border/60 scroll-mt-24">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <Target className="h-3 w-3 text-primary" />
              Internal Foundation
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Chief of Staff &amp; Agile Process Transformation
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              We integrate into the executive office to make time, information, and decision-making
              more effective. This is the operating system of your leadership team — combining chief
              of staff capabilities, agile governance, and special projects execution.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Executive Operating System (EOS) design and implementation</li>
                <li>Agile governance &amp; OKR orchestration across business units</li>
                <li>Strategic liaison &amp; shadow leadership for CEOs and ministers</li>
                <li>Special projects leadership &amp; change advocacy inside the organization</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Impact Mapping
              </p>
              <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Strategy &amp; Planning</p>
                  <p className="text-muted-foreground">Strategic Alignment</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Operations</p>
                  <p className="text-muted-foreground">Operational Excellence</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Communication</p>
                  <p className="text-muted-foreground">Information Fluidity</p>
                </Card>
                <Card className="p-3 border border-border/70 bg-secondary/40">
                  <p className="font-semibold text-foreground">Execution</p>
                  <p className="text-muted-foreground">Rapid Value Delivery</p>
                </Card>
              </div>
            </div>

            <Link href="/services/chief-of-staff">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Explore This Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>

          <Card className="p-6 space-y-4 border border-border/80 bg-secondary/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Ideal For
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>CEOs, ministers, and chairpersons managing complex stakeholder maps</li>
              <li>Organizations undergoing rapid growth, restructuring, or post-M&amp;A integration</li>
              <li>Boards needing clear visibility and disciplined operating rhythm</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Service Card 2 — Innovation Transformation */}
      <section id="innovation-transformation" className="bg-secondary py-16 md:py-20 border-b border-border/60 scroll-mt-24">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              <Target className="h-3 w-3 text-primary" />
              Culture &amp; Growth Engine
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Innovation Transformation
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Shift from one-off projects to a continuous cycle of transformational growth aligned
              to Vision 2030 and your corporate strategy. We help you design the innovation
              operating model, pipeline, and culture that sustain long-term relevance.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Innovation strategy &amp; operating model design</li>
                <li>Innovation portfolio &amp; execution (ideas → delivery pipeline)</li>
                <li>Innovation capability building (people, culture, and leadership)</li>
                <li>
                  Innovation labs &amp; ecosystem activation (hackathons, accelerators, startup
                  partnerships)
                </li>
              </ul>
            </div>

            <Link href="/services/innovation-transformation">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Explore This Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>

          <Card className="p-6 space-y-3 border border-border/80 bg-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Where It Shows Up
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>National Vision 2030 innovation programs and sector strategies</li>
              <li>Corporate innovation labs and transformation offices</li>
              <li>University, accelerator, and ecosystem-level initiatives</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Service Card 3 — AI Transformation */}
      <section id="ai-transformation" className="bg-white py-16 md:py-20 border-b border-border/60 scroll-mt-24">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <Brain className="h-3 w-3 text-primary" />
              The Accelerator
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              AI Transformation
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Deploy AI to drive internal speed-to-information while creating new, sellable revenue
              streams. We combine AI strategy, agent deployment, and product development into a
              single, outcome-focused engagement.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Rapid AI agent deployment &amp; orchestration for internal workflows</li>
                <li>Strategic AI roadmap &amp; execution for board and CXO alignment</li>
                <li>Commercial AI product development (white-label and proprietary)</li>
                <li>AI workforce upskilling &amp; cultural integration across teams</li>
              </ul>
            </div>

            <Link href="/services/ai-transformation">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Explore This Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>

          <Card className="p-6 space-y-3 border border-border/80 bg-secondary/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Outcomes
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>2–10x productivity gains on targeted processes</li>
              <li>New AI-enabled products and revenue streams</li>
              <li>Clear governance around ethics, risk, and compliance</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Service Card 4 — Training & Talent */}
      <section id="training-talent" className="bg-secondary py-16 md:py-20 border-b border-border/60 scroll-mt-24">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              <Users className="h-3 w-3 text-primary" />
              People Development
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Training &amp; Talent
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Accelerate transformation through continuous talent development at every organizational
              level — from the boardroom to frontline teams, and across the broader developer
              ecosystem.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Executive training (in partnership with Ivey Business School and others)</li>
                <li>Technical training (AI agents, Cloud, Flutter, and more)</li>
                <li>Vocational training (Cybersecurity, nurse assistant, and more)</li>
                <li>
                  Community-led learning via devMENA (180K+ followers across YouTube and Facebook)
                </li>
              </ul>
            </div>

            <Link href="/services/training-talent">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Explore This Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>

          <Card className="p-6 space-y-3 border border-border/80 bg-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Talent Ecosystem
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Integration with national skilling agendas and corporate academies</li>
              <li>Programs for executives, professionals, and youth talent</li>
              <li>Developer community MENA engagement through events and content</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Service Card 5 — External Growth & Partnerships */}
      <section id="external-growth-partnerships" className="bg-white py-16 md:py-20 scroll-mt-24">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <Globe2 className="h-3 w-3 text-primary" />
              Expansion
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              External Growth &amp; Partnerships
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Achieve regional dominance through strategic partnerships, M&amp;A, and global tech
              transfer. We help you map ecosystems, build pipelines, and convert relationships into
              measurable growth.
            </p>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Deliverables
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Regional &amp; global ecosystem mapping (G2G, G2B)</li>
                <li>M&amp;A advisory &amp; opportunistic playbooks (on- and off-market)</li>
                <li>China-to-MENA tech bridge (IP acquisition &amp; localization)</li>
                <li>High-impact talent &amp; pipeline orchestration</li>
              </ul>
            </div>

            <div className="space-y-3">
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

            <Link href="/services/external-growth-partnerships">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Explore This Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>

          <Card className="p-6 space-y-3 border border-border/80 bg-secondary/40">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Use Cases
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Market entry into Saudi Arabia and wider MENA</li>
              <li>Cross-border M&amp;A and integration support</li>
              <li>Scaling government and private sector partnership pipelines</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not Sure Where to Start?
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto">
            We&apos;ll help you prioritize the right combination of chief of staff, innovation, AI,
            talent, and partnerships for your current mandate — starting with a free discovery
            engagement.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent-gold)] px-8 py-3 text-sm font-semibold text-[var(--brand-dark-deep)] hover:bg-[#b2903f] transition-colors">
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

