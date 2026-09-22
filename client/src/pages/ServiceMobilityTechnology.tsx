import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ListChecks,
  MapPinned,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { useEffect } from "react";

const PAGE_TITLE =
  "Mobility Technology & Infrastructure Expertise | iXL Consulting";
const PAGE_DESCRIPTION =
  "Program management, technical assurance, and strategic advisory for large-scale public transport transformations — ITS, account-based ticketing, payment ecosystems, and multi-modal integration.";

export default function ServiceMobilityTechnology() {
  useEffect(() => {
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title =
        "iXL Consulting | Elevating Innovation, Empowering Digital Excellence";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Services · Specialized Expertise
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Mobility Technology &amp; Infrastructure Expertise
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              We deliver world-class program management, technical assurance, and strategic advisory
              for large-scale public transport transformations. Our core competencies bridge advanced
              operational software, secure financial ecosystems, and seamless multi-modal integration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Capabilities
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Core Domain Capabilities
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 space-y-3 border border-border/80 bg-secondary/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <Radio className="h-3 w-3 text-[var(--brand-primary-light)]" />
                ITS
              </div>
              <h3 className="text-lg font-semibold text-primary">
                Intelligent Transport Systems (ITS)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We architect and supervise advanced Automatic Vehicle Management (AVM) and
                Computer-Aided Dispatch / Automatic Vehicle Location (CAD/AVL) environments,
                empowering authorities with real-time tracking, automated dispatch, headway
                management, and passenger information systems.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80 bg-secondary/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <CreditCard className="h-3 w-3 text-[var(--brand-primary-light)]" />
                Ticketing
              </div>
              <h3 className="text-lg font-semibold text-primary">
                Next-Generation Account-Based Ticketing (ABT)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We specialize in evolving legacy closed-loop infrastructure into modern ABT platforms,
                supporting open-payment acceptance, tokenized media, and interoperable national transit
                schemes.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80 bg-secondary/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-[var(--brand-primary-light)]" />
                Revenue
              </div>
              <h3 className="text-lg font-semibold text-primary">
                Payment Ecosystem &amp; Revenue Assurance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We ensure robust financial integrity across complex merchant acquirer frameworks,
                issuer clearinghouses, settlement engines, PCI-DSS compliance, debt recovery, and
                automated multi-party revenue apportionment.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80 bg-secondary/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                <MapPinned className="h-3 w-3 text-[var(--brand-primary-light)]" />
                Integration
              </div>
              <h3 className="text-lg font-semibold text-primary">
                Multi-Modal Public Transport (PT) Integration
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We align diverse urban mobility networks — including bus rapid transit, rail,
                micro-mobility, and alternative-energy fleets (EV and hydrogen) — into unified,
                future-proof operational platforms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Track Record
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Proven Track Record &amp; Major Engagements
            </h2>
          </div>

          <div className="grid gap-6">
            <Card className="p-6 md:p-8 border border-border/80 bg-white space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-primary">
                RTA Smart Systems
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team was part of the consulting program management that successfully contributed
                to and worked on advanced smart transit solutions for the Roads and Transport
                Authority (RTA).
              </p>
              <div className="ml-4 md:ml-6 pl-4 md:pl-5 border-l-2 border-[var(--brand-primary-light)]/40 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Team Highlight · Rayan ALZahab
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Served as Product Owner within the McKinsey team supporting Smart Dubai&apos;s
                  customer-centric digital transformation, redesigning government services into
                  integrated digital journeys across entities and contributing to the transformation
                  underpinning the DubaiNow platform. Led and trained technical teams through the
                  transition from traditional delivery models to Design Thinking and Agile
                  methodologies, enabling a more customer-centric, iterative approach to designing
                  and delivering digital government services.
                </p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border border-border/80 bg-white">
              <h3 className="text-lg md:text-xl font-semibold text-primary">
                KSA Ministry of Hajj Smart Transport
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Delivered strategic smart transport and mobility innovations for the Kingdom of Saudi
                Arabia Ministry of Hajj across Omran and Hajj operations, partnering closely with
                EVC.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Assurance
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Our Strategic Assurance Approach
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 space-y-3 border border-border/80">
              <h3 className="text-base font-semibold text-primary">
                Rigorous Design &amp; Technical Governance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We conduct comprehensive reviews of High-Level Designs (HLD), Low-Level Designs
                (LLD), and Interface Control Documents (ICDs), enforcing open standards such as
                ITxPT, SIRI, GTFS, and NeTEx to eliminate vendor lock-in.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80">
              <h3 className="text-base font-semibold text-primary">
                Testing &amp; Commissioning Lifecycle Control
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We orchestrate rigorous, end-to-end testing frameworks spanning Factory Acceptance
                Testing (FAT), System Integration Testing (SIT), Site Acceptance Testing (SAT), and
                operational readiness reviews.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80">
              <h3 className="text-base font-semibold text-primary">
                Zero-Disruption Migration &amp; Cutover Engineering
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We design bulletproof transition strategies that manage data migration, customer
                balance rollovers, and live system coexistence, protecting public transport
                continuity and passenger trust.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
              Next Step
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Discuss a Mobility &amp; Infrastructure Engagement
            </h2>
            <p className="text-sm md:text-base text-primary-foreground/80">
              Phase A discovery is offered at no cost — explore how iXL can support your public
              transport transformation with program management and technical assurance.
            </p>
          </div>
          <Card className="p-4 md:p-5 bg-[var(--brand-dark)] border border-primary/40 text-xs md:text-sm text-primary-foreground">
            <div className="flex items-start gap-3">
              <ListChecks className="h-4 w-4 mt-1 shrink-0" />
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>ITS, ABT, and payment ecosystem advisory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Design governance and commissioning oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Zero-disruption migration and cutover planning</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="container mx-auto mt-8">
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-accent-gold)] px-7 py-3 text-sm font-semibold text-[var(--brand-dark-deep)] hover:bg-[#b2903f] transition-colors">
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
