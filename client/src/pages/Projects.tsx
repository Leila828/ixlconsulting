import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Globe2, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto text-center space-y-5">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
            Case Studies
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Proven at Scale — From Silicon Valley to the Arabian Peninsula
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            A selection of programs, hackathons, and transformation initiatives that demonstrate
            iXL&apos;s ability to execute at scale across governments, Big Tech, and ecosystems.
          </p>
        </div>
      </section>

      {/* Visual Case Study Grid */}
      <CaseStudyGrid />

      {/* Case Study 1 — Hajj Hackathon 2018 */}
      <section className="bg-white py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto">
          <Card className="p-6 md:p-8 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start border border-border/80">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Award className="h-3 w-3 text-primary" />
                Case Study 1
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Hajj Hackathon 2018 — World&apos;s Largest Hackathon
              </h2>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                Client: Saudi Government
              </p>
              <p className="text-sm text-muted-foreground">
                iXL leadership played a central role in designing and executing the Hajj Hackathon
                2018, transforming a national vision into a globally recognized innovation event.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Challenge:</span> Organize the
                  world&apos;s largest hackathon during Hajj, under strict logistical and cultural
                  constraints.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Result:</span> Over 3,000
                  participants, Guinness World Record, and international coverage featuring Steve
                  Wozniak (Apple Co-Founder).
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Highlights</p>
              <ul className="space-y-1">
                <li>End-to-end hackathon design &amp; execution</li>
                <li>Global participation and media visibility</li>
                <li>Benchmark for hackathon management Middle East</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Study 2 — Google MENA Developer Ecosystem */}
      <section className="bg-secondary py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto">
          <Card className="p-6 md:p-8 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start border border-border/80 bg-white">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Target className="h-3 w-3 text-primary" />
                Case Study 2
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Google MENA Developer Ecosystem
              </h2>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                Client: Google (Internal)
              </p>
              <p className="text-sm text-muted-foreground">
                As Google&apos;s Head of MENA Ecosystem, iXL&apos;s founder led a multi-year
                transformation of the developer ecosystem across the region.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Challenge:</span> Scale developer
                  training and community engagement across diverse MENA markets.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Result:</span> From 16K developers
                  (2016) to 750K trained annually (2021); over 500 communities built across 17
                  countries, supported by thousands of tech events.
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Highlights</p>
              <ul className="space-y-1">
                <li>Developer community MENA architecture and scaling</li>
                <li>Blended online/offline learning programs</li>
                <li>Foundation for later AI and cloud adoption programs</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Study 3 — AI Hack Africa */}
      <section className="bg-white py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto">
          <Card className="p-6 md:p-8 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start border border-border/80">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Award className="h-3 w-3 text-primary" />
                Case Study 3
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                AI Hack Africa — Continent-Wide Innovation Competition
              </h2>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                Client: Pan-African Innovation Initiative
              </p>
              <p className="text-sm text-muted-foreground">
                iXL supported the design and execution of AI Hack Africa, one of the largest AI
                competitions in the continent.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Challenge:</span> Run a
                  continent-wide AI innovation competition that could attract top talent and global
                  partners.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Result:</span> 1,000+ participants
                  across multiple countries — an Africa record, with editions in 2019 and 2022.
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Highlights</p>
              <ul className="space-y-1">
                <li>Pan-African positioning and outreach</li>
                <li>AI-focused curriculum and mentorship</li>
                <li>Sustained ecosystem engagement over multiple years</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Study 4 — Oman Ideathon */}
      <section className="bg-secondary py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto">
          <Card className="p-6 md:p-8 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start border border-border/80 bg-white">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Target className="h-3 w-3 text-primary" />
                Case Study 4
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Oman Ideathon — National-Scale Innovation Platform
              </h2>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                Client: Oman Government
              </p>
              <p className="text-sm text-muted-foreground">
                A national-scale ideathon designed to surface, validate, and accelerate local
                innovation talent.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Challenge:</span> Create a
                  high-visibility ideathon that could attract and support innovators nationwide.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Result:</span> 1,000+ participants
                  in 2018, establishing one of the region&apos;s most visible innovation events.
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Highlights</p>
              <ul className="space-y-1">
                <li>National branding and engagement strategy</li>
                <li>Structured idea evaluation and follow-up</li>
                <li>Model for subsequent innovation events in the region</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Study 5 — MENA Startup Ecosystem (Google for Startups) */}
      <section className="bg-white py-14 md:py-16 border-b border-border/60">
        <div className="container mx-auto">
          <Card className="p-6 md:p-8 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start border border-border/80">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Globe2 className="h-3 w-3 text-primary" />
                Case Study 5
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                MENA Startup Ecosystem — Google for Startups
              </h2>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                Client: Google for Startups / Ecosystem Partners
              </p>
              <p className="text-sm text-muted-foreground">
                iXL leadership contributed to building and scaling the MENA startup ecosystem under
                the Google for Startups umbrella.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Result:</span> Launched MENA
                  Google for Startups presence; primary Saudi partner for The Garage Accelerator;
                  launched Oman SaaS Accelerator and Algeria Venture Accelerator.
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Highlights</p>
              <ul className="space-y-1">
                <li>Multi-country accelerator and ecosystem design</li>
                <li>Deep integration with national innovation agendas</li>
                <li>Long-term pipeline building for founders and investors</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Study 6 — Enterprise M&A Integration */}
      <section className="bg-secondary py-14 md:py-16">
        <div className="container mx-auto">
          <Card className="p-6 md:p-8 grid gap-6 md:grid-cols-[1.4fr,1fr] items-start border border-border/80 bg-white">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Target className="h-3 w-3 text-primary" />
                Case Study 6
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">
                Enterprise M&amp;A Integration — Processes, Culture, and Visibility
              </h2>
              <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                Context: Qualcomm (Atheros acquisition), Google, Nest
              </p>
              <p className="text-sm text-muted-foreground">
                iXL&apos;s leadership managed complex cultural and operational mergers post-M&amp;A
                across multiple Fortune 500 environments.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Challenge:</span> Align conflicting
                  organizational cultures, systems, and processes while maintaining delivery
                  velocity.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Result:</span> Established agile
                  processes, OKR frameworks, and visibility systems across functions, enabling
                  smoother integration and faster value realization.
                </li>
              </ul>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Highlights</p>
              <ul className="space-y-1">
                <li>Applied chief-of-staff style integration leadership</li>
                <li>Unified performance and reporting frameworks</li>
                <li>Blueprint for future M&amp;A playbooks</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want results like these? Let&apos;s talk.
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you&apos;re designing a national-scale program, transforming a corporate
            portfolio, or integrating a major acquisition, iXL can help architect and execute the
            journey.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent-gold)] px-8 py-3 text-sm font-semibold text-[var(--brand-dark-deep)] hover:bg-[#b2903f] transition-colors">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

