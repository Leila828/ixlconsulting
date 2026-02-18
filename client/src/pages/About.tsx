import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Globe2, Linkedin, Target, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* SECTION 1 — Company Story */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto grid gap-10 md:grid-cols-[1.4fr,1fr] items-start">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Our Story
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              From Silicon Valley to the MENA Region
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              iXL Consulting was born from a journey that started in Silicon Valley and matured across
              Google&apos;s MENA headquarters, Qualcomm, and Xilinx. After years building developer
              ecosystems, innovation programs, and M&amp;A integration playbooks for some of the
              world&apos;s most demanding organizations, our leadership saw a clear gap: the MENA
              region needed world-class execution, not just strategy decks.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              As Google&apos;s Head of MENA Ecosystem, our founder helped grow the region&apos;s
              developer base from 16K to 750K+ annually, built 500+ communities across 17 countries,
              and delivered record-setting innovation platforms like the Hajj Hackathon. iXL
              translates that experience into a 360° transformation partner for boards, ministries,
              and CEOs across Saudi Arabia, the wider MENA region, and beyond.
            </p>
            <p className="text-sm md:text-base font-semibold text-primary">
              We don&apos;t just advise — we integrate, execute, and deliver measurable
              transformation.
            </p>
          </div>

          <Card className="p-6 md:p-7 space-y-4 border border-border/80 bg-white/90">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Core Mission
            </p>
            <p className="text-sm md:text-base leading-relaxed text-foreground">
              Enable organizations in Saudi Arabia, MENA, and globally to achieve 2–10x performance
              by aligning leadership, culture, AI, and partnerships into a single execution system.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-[2px]" />
                <span>Embedded support in executive offices, not arm&apos;s-length consulting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-[2px]" />
                <span>Measured by outcomes: adoption, revenue, capability, and speed to execution.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-[2px]" />
                <span>Built on proven playbooks from Google, Qualcomm, McKinsey, Snap, and more.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* SECTION 2 — Why Us / Differentiation */}
      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Why iXL
            </p>
            <h2 className="text-3xl font-bold text-primary">
              What Makes iXL Different
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Most consultancies write recommendations. iXL stands at the intersection of strategy,
              special projects, and execution — embedded with your leadership team to drive change
              from the inside.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Localized Expertise
              </p>
              <p className="text-sm font-semibold text-foreground">
                Deeply rooted in the Saudi &amp; MENA ecosystem.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Hands-on experience with Vision 2030 programs, Qiyas, Misk, NTDP, and other national
                initiatives means we understand the policy, culture, and ambition driving the region.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Proven Leadership
              </p>
              <p className="text-sm font-semibold text-foreground">
                Leadership experience from Director to CEO levels.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Backgrounds from Google, Qualcomm, McKinsey, Snap, and major ecosystem programs
                bring board-grade thinking and operating discipline to every engagement.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Global Connectivity
              </p>
              <p className="text-sm font-semibold text-foreground">
                Bridges to China, North America, and Europe.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                We connect Saudi and MENA organizations with international innovation hubs — including
                China — to accelerate IP acquisition, product localization, and market access.
              </p>
            </Card>

            <Card className="p-6 space-y-3 border border-border/80">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Execution-First
              </p>
              <p className="text-sm font-semibold text-foreground">
                Embedded change agents, not slideware.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                We provide special project support, chief of staff capabilities, and change advocacy
                — staying involved until new behaviors, systems, and results are real.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Comparison Table */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Differentiation
            </p>
            <h2 className="text-3xl font-bold text-primary">
              How iXL Compares to Typical Consultancies
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              The numbers and capabilities behind our approach to AI transformation consulting MENA,
              innovation strategy Vision 2030, and ecosystem-scale delivery.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-xs md:text-sm bg-white border border-border/70 rounded-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Key Capability</th>
                  <th className="px-4 py-3 text-left font-semibold">iXL</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Consultancy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border/60">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Hackathons Run Internationally
                  </td>
                  <td className="px-4 py-3 text-foreground">30+</td>
                  <td className="px-4 py-3 text-muted-foreground">—</td>
                </tr>
                <tr className="border-t border-border/60 bg-secondary/40">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Communities Developed
                  </td>
                  <td className="px-4 py-3 text-foreground">500+</td>
                  <td className="px-4 py-3 text-muted-foreground">—</td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Innovation Hubs &amp; Partners
                  </td>
                  <td className="px-4 py-3 text-foreground">40+</td>
                  <td className="px-4 py-3 text-muted-foreground">—</td>
                </tr>
                <tr className="border-t border-border/60 bg-secondary/40">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Innovation Execution Experience
                  </td>
                  <td className="px-4 py-3 text-foreground">✅</td>
                  <td className="px-4 py-3 text-muted-foreground">❌</td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Active International Social Media
                  </td>
                  <td className="px-4 py-3 text-foreground">✅ (180K+)</td>
                  <td className="px-4 py-3 text-muted-foreground">❌</td>
                </tr>
                <tr className="border-t border-border/60 bg-secondary/40">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Additional Funding Required
                  </td>
                  <td className="px-4 py-3 text-foreground">$0</td>
                  <td className="px-4 py-3 text-muted-foreground">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Leadership Team */}
      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Leadership
            </p>
            <h2 className="text-3xl font-bold text-primary">
              The Team Behind iXL
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              A senior team with experience across Google, Qualcomm, McKinsey, Snap, and leading
              regional innovation programs — combining strategy, engineering, and finance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Salim Abid */}
            <Card className="p-6 space-y-4 border border-border/80">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Salim Abid
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Founder · Innovation &amp; Strategy Advisor
                    </p>
                  </div>
                </div>
                <a
                  href="https://ae.linkedin.com/in/salim-abid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Salim Abid on LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>Ex-Google Head of MENA Startups Ecosystem</li>
                <li>Ex-Qualcomm SW PMO Lead</li>
                <li>Ex-Xilinx Lead TPM / Sr. Staff Engineer</li>
                <li>Ex-NTDP Exec Committee MVPLAB</li>
                <li>Ex-EVC Innovation Director, CoS &amp; VP Strategic Partnerships &amp; M&amp;A</li>
                <li>Guinness World Record Holder (Hackathons)</li>
              </ul>
            </Card>

            {/* Rayan AL Zahab */}
            <Card className="p-6 space-y-4 border border-border/80">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Rayan AL Zahab
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Partner · Tech Lead &amp; Consultant
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/rayanalzahab"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rayan AL Zahab on LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>Founder, BambooGeeks</li>
                <li>Ex-McKinsey Lead PO &amp; Engineering Manager</li>
                <li>Ex-Snap MEA AR Ecosystem Head</li>
                <li>Startup Mentor &amp; Trainer</li>
                <li>#1 Google Developer Expert 2019–2022</li>
              </ul>
            </Card>

            {/* Mustapha Iles */}
            <Card className="p-6 space-y-4 border border-border/80">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Mustapha Iles
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Advisor · AI Solution Architect
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/mustaphailes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mustapha Iles on LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>AI Solution Architect Consultant (20+ years)</li>
                <li>VP of Engineering, Hudhud Maps</li>
                <li>Ex-Xilinx, Staff Software Developer</li>
                <li>Ex-Level3 / InComm, Software Engineer</li>
                <li>Experience across USA, Europe &amp; KSA</li>
              </ul>
            </Card>

            {/* Latif Abid */}
            <Card className="p-6 space-y-4 border border-border/80">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Latif Abid
                    </p>
                    <p className="text-xs text-primary font-medium">
                      Advisor · Investment &amp; Finance Expert
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/latifabid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Latif Abid on LinkedIn"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>Founder, AIPLabs (AI &amp; Digital Health)</li>
                <li>Ivey Business School (Entrepreneurship)</li>
                <li>Barclays Investment Banking</li>
                <li>Specialist in venture, growth, and M&amp;A finance</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Global Reach Map */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Global Reach
            </p>
            <h2 className="text-3xl font-bold text-primary">
              17 Countries. One Integrated Network.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              iXL operates across 17 countries with a footprint that spans Middle East &amp; Africa,
              APAC, Europe, the USA, and Latin America — enabling truly global partnerships for our
              clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card className="p-5 flex flex-col gap-2 border border-border/80 bg-white/90">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Middle East &amp; Africa
                </p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Saudi Arabia, UAE, Oman, North Africa &amp; pan-African ecosystems — anchored around
                Vision 2030, national digital strategies, and large-scale innovation programs.
              </p>
            </Card>

            <Card className="p-5 flex flex-col gap-2 border border-border/80 bg-white/90">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  APAC
                </p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Strategic connectivity into China and APAC innovation hubs, enabling IP transfer,
                localization, and cross-border product partnerships.
              </p>
            </Card>

            <Card className="p-5 flex flex-col gap-2 border border-border/80 bg-white/90">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Europe
                </p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Links to leading European universities, funds, and innovation hubs, connecting
                capital, talent, and technology back into Saudi &amp; MENA mandates.
              </p>
            </Card>

            <Card className="p-5 flex flex-col gap-2 border border-border/80 bg-white/90">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  USA &amp; Latin America
                </p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Relationships across Silicon Valley, North America, and LATAM innovation ecosystems
                that unlock new opportunities for partnerships, investments, and expansion.
              </p>
            </Card>
          </div>

          <div>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-primary-mid)] transition-colors">
                Discuss Your Global Ambitions
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

