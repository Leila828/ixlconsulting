import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Brain,
  Globe2,
  LineChart,
  Network,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import salim from "../pages/images/salimhaj.png";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* SECTION 1 — Hero Banner */}
      <section className="relative overflow-hidden bg-[#050922] text-white">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#2E86AB33,_transparent_60%),radial-gradient(circle_at_bottom,_#C9A84C22,_transparent_55%)]" />
        <div className="relative container mx-auto px-4 py-20 lg:py-24 grid gap-12 lg:grid-cols-[1.4fr,1fr] items-center">
          <div className="space-y-8">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C]">
              360° Digital & Innovation Transformation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevating Innovation, Empowering Digital Excellence
            </h1>
            <p className="text-base md:text-lg text-blue-100 max-w-xl">
              iXL Consulting delivers 360° transformation — from AI strategy and
              chief of staff operating models to innovation strategy Vision 2030
              and global partnerships. We help boards, ministers, and CXOs
              unlock 2–10x performance across MENA, Saudi Arabia, and beyond
              through executive-grade{" "}
              <span className="font-semibold">
                AI transformation consulting MENA
              </span>
              .
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 rounded-lg bg-[#2E86AB] px-7 py-3 text-sm font-semibold shadow-lg shadow-[#00000066] hover:bg-[#256b88] transition-colors">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
              <a
                href="mailto:salim@ixlconsulting.tech?subject=iXL%20Consulting%20Portfolio%20Request"
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9A84C] px-7 py-3 text-sm font-semibold text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#050922] transition-colors"
              >
                Download Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-sm text-blue-100/90">
              <span className="rounded-full border border-blue-500/60 bg-blue-500/10 px-3 py-1">
                Guinness World Record Holder
              </span>
              <span className="rounded-full border border-blue-500/60 bg-blue-500/10 px-3 py-1">
                Ex-Google | Ex-Qualcomm
              </span>
              <span className="rounded-full border border-blue-500/60 bg-blue-500/10 px-3 py-1">
                17 Countries
              </span>
              <span className="rounded-full border border-blue-500/60 bg-blue-500/10 px-3 py-1">
                750K+ Developers Trained
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#2E86AB55] via-transparent to-[#C9A84C55] blur-2xl" />
            <Card className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-[#0b1024]/90 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2E86AB22,_transparent_60%)]" />
              <div className="relative p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={salim}
                    alt="Salim Abid, Founder of iXL Consulting"
                    loading="lazy"
                    className="h-20 w-20 rounded-2xl object-cover border border-blue-500/40"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
                      Founder Spotlight
                    </p>
                    <p className="text-lg font-semibold">Salim Abid</p>
                    <p className="text-xs text-blue-200">
                      Ex-Google Head of MENA Ecosystem · Guinness World Record
                      Holder
                    </p>
                  </div>
                </div>
                <p className="text-xs text-blue-100/90 leading-relaxed">
                  Trusted by global leaders for{" "}
                  <span className="font-semibold">
                    AI transformation consulting MENA
                  </span>
                  , innovation strategy Vision 2030 programs, and chief of staff
                  consulting Saudi Arabia and beyond.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs text-blue-100">
                  <div>
                    <p className="text-2xl font-bold text-white">750K+</p>
                    <p className="text-[11px] uppercase tracking-wide text-blue-200">
                      Developers Trained Annually
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">17</p>
                    <p className="text-[11px] uppercase tracking-wide text-blue-200">
                      Countries of Operation
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Credibility Stats Bar */}
      <section className="bg-[#0b1024] text-white border-b border-border/40">
        <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 lg:grid-cols-6 text-xs md:text-sm">
          <div className="space-y-1">
            <p className="text-lg font-semibold text-[#C9A84C]">30+</p>
            <p className="text-blue-100/90 leading-snug">
              Hackathons Run Internationally
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-[#C9A84C]">500+</p>
            <p className="text-blue-100/90 leading-snug">
              Developer Communities Built
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-[#C9A84C]">17</p>
            <p className="text-blue-100/90 leading-snug">
              Countries of Operation
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-[#C9A84C]">750K</p>
            <p className="text-blue-100/90 leading-snug">
              Developers Trained Annually
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-[#C9A84C]">40+</p>
            <p className="text-blue-100/90 leading-snug">
              Innovation Hubs & Partners
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-semibold text-[#C9A84C]">180K+</p>
            <p className="text-blue-100/90 leading-snug">
              Social Media Followers
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — The Transformation Quadrant */}
      <section
        id="transformation-quadrant"
        className="bg-white py-20 border-b border-border/60"
      >
        <div className="container mx-auto px-4 space-y-10">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Operating Model
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              A 360° Strategy: Harmonizing Leadership, Innovation, AI, and
              Global Partnerships
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
              iXL’s Transformation Quadrant aligns leadership, culture, AI, and
              external growth into a single execution system — from chief of
              staff consulting Saudi Arabia and MENA governments to building
              developer community MENA ecosystems and global partnership
              pipelines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Chief of Staff & Agile Transformation */}
            <Card
              id="chief-of-staff"
              className="group flex flex-col justify-between border border-border/80 hover:border-[#C9A84C] hover:shadow-lg transition-all"
            >
              <div className="p-6 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="h-3 w-3 text-[#2E86AB]" />
                  The Foundation
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Chief of Staff & Agile Transformation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Architect the executive operating model — OKRs, KPIs,
                  governance, and agile execution — for boards, ministers, and
                  CEOs seeking{" "}
                  <span className="font-semibold">
                    Chief of Staff consulting Saudi Arabia
                  </span>{" "}
                  and across the wider MENA region.
                </p>
              </div>
              <div className="flex items-center justify-between px-6 pb-4 text-xs text-muted-foreground">
                <span>OKR systems · KPI dashboards · CXO offices</span>
                <ArrowRight className="h-4 w-4 text-[#2E86AB] group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>

            {/* Innovation Transformation */}
            <Card
              id="innovation-transformation"
              className="group flex flex-col justify-between border border-border/80 hover:border-[#C9A84C] hover:shadow-lg transition-all"
            >
              <div className="p-6 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Target className="h-3 w-3 text-[#2E86AB]" />
                  The Culture
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Innovation Transformation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Design and scale innovation Centres of Excellence, pipelines
                  from ideas to delivery, and{" "}
                  <span className="font-semibold">
                    innovation strategy Vision 2030
                  </span>{" "}
                  programs tightly aligned with national and corporate agendas.
                </p>
              </div>
              <div className="flex items-center justify-between px-6 pb-4 text-xs text-muted-foreground">
                <span>Innovation CoE · governance · portfolio</span>
                <ArrowRight className="h-4 w-4 text-[#2E86AB] group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>

            {/* AI Transformation */}
            <Card
              id="ai-transformation"
              className="group flex flex-col justify-between border border-border/80 hover:border-[#C9A84C] hover:shadow-lg transition-all"
            >
              <div className="p-6 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Brain className="h-3 w-3 text-[#2E86AB]" />
                  The Accelerator
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  AI Transformation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Rapidly deploy AI agents, design AI roadmaps, and build
                  commercial AI products — targeted, measurable{" "}
                  <span className="font-semibold">
                    AI transformation consulting MENA
                  </span>{" "}
                  for enterprises, regulators, and ecosystems.
                </p>
              </div>
              <div className="flex items-center justify-between px-6 pb-4 text-xs text-muted-foreground">
                <span>Agentic workflows · GenAI products</span>
                <ArrowRight className="h-4 w-4 text-[#2E86AB] group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>

            {/* Training & Talent */}
            <Card
              id="training-talent"
              className="group flex flex-col justify-between border border-border/80 hover:border-[#C9A84C] hover:shadow-lg transition-all"
            >
              <div className="p-6 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Users className="h-3 w-3 text-[#2E86AB]" />
                  The People
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Training & Talent
                </h3>
                <p className="text-sm text-muted-foreground">
                  Executive education, technical academies, vocational tracks,
                  and community-led learning — building sustainable{" "}
                  <span className="font-semibold">developer community MENA</span>{" "}
                  and future-ready talent pipelines for your organization.
                </p>
              </div>
              <div className="flex items-center justify-between px-6 pb-4 text-xs text-muted-foreground">
                <span>Executive, technical & community tracks</span>
                <ArrowRight className="h-4 w-4 text-[#2E86AB] group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>

            {/* External Growth & Partnerships */}
            <Card
              id="external-growth"
              className="group flex flex-col justify-between border border-border/80 hover:border-[#C9A84C] hover:shadow-lg transition-all lg:col-span-2"
            >
              <div className="p-6 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Globe2 className="h-3 w-3 text-[#2E86AB]" />
                  The Expansion
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  External Growth & Partnerships
                </h3>
                <p className="text-sm text-muted-foreground">
                  Structure M&A, international expansion, and China-to-MENA tech
                  bridges. Design government and private sector pipelines,
                  including large-scale{" "}
                  <span className="font-semibold">
                    hackathon management Middle East
                  </span>{" "}
                  and ecosystem platforms.
                </p>
              </div>
              <div className="flex items-center justify-between px-6 pb-4 text-xs text-muted-foreground">
                <span>M&A advisory · cross-border · ecosystems</span>
                <ArrowRight className="h-4 w-4 text-[#2E86AB] group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Why iXL / Founder Spotlight */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr,1.2fr] items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              From Silicon Valley to Dubai — A Track Record That Speaks for
              Itself
            </h2>
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              Salim Abid built iXL after an extensive career spanning Silicon
              Valley, Google&apos;s MENA headquarters in Dubai, Qualcomm, and
              Xilinx. As Google&apos;s Head of MENA Ecosystem, he scaled
              developer training from 16K to 750K annually, built 500+
              communities across 17 countries, and holds a Guinness World Record
              for the 2018 Hajj Hackathon with 3,000 participants. iXL exists to
              bring that Silicon Valley execution discipline to organizations
              across the MENA region and beyond.
            </p>
            <Link href="/about">
              <a className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Meet the Full Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-5 border border-border/80 bg-white/80">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-5 w-5 text-[#C9A84C]" />
                <p className="text-sm font-semibold text-primary">
                  Guinness World Record
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Lead organizer of the 2018 Hajj Hackathon — the world&apos;s
                largest hackathon at the time, with over 3,000 participants and
                global recognition.
              </p>
            </Card>
            <Card className="p-5 border border-border/80 bg-white/80">
              <div className="flex items-center gap-3 mb-3">
                <Network className="h-5 w-5 text-[#2E86AB]" />
                <p className="text-sm font-semibold text-primary">
                  Ecosystem Architect
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Designed and scaled innovation programs across government,
                banking, and Big Tech — from developer communities to executive
                leadership programs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 — AI Transformation Urgency Block */}
      <section className="bg-[#02030b] text-white py-20">
        <div className="container mx-auto px-4 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300/90">
              AI Performance Mandate
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              The 10x Performance Mandate: Why AI Transformation Can&apos;t
              Wait
            </h2>
            <p className="text-sm md:text-base text-blue-100/90">
              Boardrooms are shifting from experimentation to execution. The
              question is no longer whether to adopt AI — it&apos;s whether your
              operating model, talent, and partnerships are ready for an
              agent-centric future.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="h-full border border-blue-500/30 bg-[#050922] text-blue-50">
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                  2–10x Productivity Potential
                </p>
                <p className="text-sm leading-relaxed">
                  MIT Sloan: organizations must move from &quot;tool-centric&quot; AI
                  to{" "}
                  <span className="font-semibold">agent-centric enterprises</span>{" "}
                  to unlock exponential productivity.
                </p>
                <p className="text-[11px] text-blue-300/80">Source: MIT Sloan</p>
              </div>
            </Card>

            <Card className="h-full border border-blue-500/30 bg-[#050922] text-blue-50">
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                  $4.4 Trillion Opportunity
                </p>
                <p className="text-sm leading-relaxed">
                  McKinsey estimates{" "}
                  <span className="font-semibold">$4.4 trillion</span> in annual
                  economic value from GenAI for early adopters that rewire
                  workflows, not just deploy tools.
                </p>
                <p className="text-[11px] text-blue-300/80">Source: McKinsey</p>
              </div>
            </Card>

            <Card className="h-full border border-blue-500/30 bg-[#050922] text-blue-50">
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                  Competitive Displacement
                </p>
                <p className="text-sm leading-relaxed">
                  Harvard Business School: firms that fail to re-architect
                  around AI face{" "}
                  <span className="font-semibold">
                    structural competitive obsolescence
                  </span>{" "}
                  in the next decade.
                </p>
                <p className="text-[11px] text-blue-300/80">
                  Source: Harvard Business School
                </p>
              </div>
            </Card>

            <Card className="h-full border border-blue-500/30 bg-[#050922] text-blue-50">
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
                  Human–Agent Collaboration
                </p>
                <p className="text-sm leading-relaxed">
                  Stanford SALT Lab: only{" "}
                  <span className="font-semibold">
                    human–AI agent collaboration
                  </span>{" "}
                  models break through the productivity ceiling of traditional
                  organizations.
                </p>
                <p className="text-[11px] text-blue-300/80">
                  Source: Stanford SALT Lab
                </p>
              </div>
            </Card>
          </div>

          <div>
            <Link href="/services">
              <a className="inline-flex items-center gap-2 rounded-lg bg-[#2E86AB] px-7 py-3 text-sm font-semibold text-white hover:bg-[#256b88] transition-colors">
                Explore Our AI Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Featured Clients & Partners Logos */}
      <section id="partners" className="bg-white py-20">
        <div className="container mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Credibility
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Trusted By Global Leaders
            </h2>
          </div>
          <div className="space-y-10">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm md:text-base text-muted-foreground">
              <span className="font-semibold text-gray-500">NVIDIA</span>
              <span className="font-semibold text-gray-500">Snapchat</span>
              <span className="font-semibold text-gray-500">Google</span>
              <span className="font-semibold text-gray-500">
                McKinsey &amp; Company
              </span>
              <span className="font-semibold text-gray-500">FlutterFlow</span>
              <span className="font-semibold text-gray-500">Barclays</span>
              <span className="font-semibold text-gray-500">
                EVC (Saudi Arabia)
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm md:text-base text-muted-foreground">
              <span className="font-semibold text-gray-500">NTDP</span>
              <span className="font-semibold text-gray-500">DevMENA</span>
              <span className="font-semibold text-gray-500">BambooGeeks</span>
              <span className="font-semibold text-gray-500">
                The Ivey Academy
              </span>
              <span className="font-semibold text-gray-500">
                The Founder Institute
              </span>
              <span className="font-semibold text-gray-500">
                Y Combinator (ecosystem touchpoints)
              </span>
              <span className="font-semibold text-gray-500">AitNews</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Engagement Model Teaser */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Engagement Model
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              How We Work Together
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              We structure engagements to de-risk transformation for boards and
              leadership teams. Phase A is offered at no cost as a partnership
              exploration — we prove value before formalizing anything.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="h-full border border-border/80 bg-white">
              <div className="p-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2E86AB]">
                  Phase A · Free
                </p>
                <h3 className="text-xl font-semibold text-primary">
                  Discovery & Quick Wins
                </h3>
                <p className="text-sm text-muted-foreground">
                  4–5 days onsite discovery with leadership, followed by 3–4
                  weeks of quick-win implementation across AI, innovation, and
                  operating model interventions.
                </p>
              </div>
            </Card>

            <Card className="h-full border border-border/80 bg-white">
              <div className="p-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2E86AB]">
                  Phase B
                </p>
                <h3 className="text-xl font-semibold text-primary">
                  Scaled Engagement
                </h3>
                <p className="text-sm text-muted-foreground">
                  Based on measurable results from Phase A, we scale into
                  focused workstreams — Chief of Staff offices, AI agents,
                  innovation programs, and talent academies.
                </p>
              </div>
            </Card>

            <Card className="h-full border border-border/80 bg-white">
              <div className="p-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2E86AB]">
                  Phase C
                </p>
                <h3 className="text-xl font-semibold text-primary">
                  Long-Term Partnership
                </h3>
                <p className="text-sm text-muted-foreground">
                  Multi-year partnerships structured via equity, revenue-share,
                  or executive retainers — aligned to long-term digital and
                  innovation outcomes.
                </p>
              </div>
            </Card>
          </div>

          <div>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-[#101a3b] transition-colors">
                Start With a Free Discovery
                <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Testimonials / Social Proof */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Social Proof
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Impact at Scale, Recognized Globally
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 border border-border/80 bg-secondary/40">
              <div className="flex items-center gap-3 mb-3">
                <Award className="h-6 w-6 text-[#C9A84C]" />
                <p className="text-sm font-semibold text-primary">
                  Guinness World Record Highlight
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                iXL leadership orchestrated the Hajj Hackathon 2018 — at the
                time, the world&apos;s largest hackathon with over 3,000
                participants — setting a global benchmark for{" "}
                <span className="font-semibold">
                  hackathon management Middle East
                </span>{" "}
                and ecosystem-scale innovation.
              </p>
            </Card>

            <Card className="p-6 border border-border/80 bg-secondary/40">
              <div className="flex items-center gap-3 mb-3">
                <LineChart className="h-6 w-6 text-[#2E86AB]" />
                <p className="text-sm font-semibold text-primary">
                  YouTube & Community Reach
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Through DevMENA and other ecosystem initiatives, iXL and its
                partners have built digital communities reaching{" "}
                <span className="font-semibold">95K+ YouTube subscribers</span>{" "}
                and hundreds of thousands of practitioners across MENA&apos;s
                developer community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Final CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform?
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto">
            Let&apos;s explore how iXL can accelerate your organization&apos;s
            next chapter across leadership, innovation, AI, and global
            partnerships.
          </p>
          <a
            href="mailto:salim@ixlconsulting.tech"
            className="inline-flex items-center gap-2 rounded-lg bg-[#C9A84C] px-8 py-3 text-sm font-semibold text-[#050922] hover:bg-[#b2903f] transition-colors"
          >
            Contact Salim
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

