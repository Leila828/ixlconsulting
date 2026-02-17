import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Users, Globe, BookOpen, Mic2, Lightbulb } from "lucide-react";
import salim from "../pages/images/salimhaj.png";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


/**
 * Design Philosophy: Professional Minimalism with Strategic Blue Accents
 * - Deep Professional Blue (#003D82) as primary brand color
 * - Vibrant Teal (#00A8CC) for CTAs and highlights
 * - Light Slate Gray (#F5F7FA) for secondary backgrounds
 * - Generous whitespace and clean typography hierarchy
 * - Asymmetric layouts with diagonal section dividers
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-primary leading-tight">
              Elevating Innovation, Empowering Digital Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              iXL Consulting blends industry expertise with forward-thinking strategies to drive sustainable growth. We empower businesses by unlocking their full potential through innovative consulting solutions.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <a className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all hover:shadow-lg inline-flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight size={20} />
                </a>
              </Link>
              <Link href="/services">
                <a className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-secondary transition-all">
                  Explore Services
                </a>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={salim}
              alt="Consulting Team"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-secondary transform -skew-y-2 -mb-1"></div>
      </section>

      {/* 2025 Core Focus Areas */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">2025 Core Focus Areas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-6 py-3 rounded-full shadow-sm text-primary font-semibold text-lg border border-primary/10">Innovation</span>
              <span className="bg-white px-6 py-3 rounded-full shadow-sm text-primary font-semibold text-lg border border-primary/10">Ecosystem Building</span>
              <span className="bg-white px-6 py-3 rounded-full shadow-sm text-primary font-semibold text-lg border border-primary/10">Tech & Strategy Consulting</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">750K+</div>
              <p className="text-muted-foreground">Developers Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">17</div>
              <p className="text-muted-foreground">Countries Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Developer Communities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Startups Accelerated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting solutions designed to accelerate growth and drive innovation across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent group cursor-pointer flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                  <Zap size={24} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Startup & SME Support</h3>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow">
                End-to-end support for incubators, accelerators, and workshops including Design Thinking, OKR, and Agile practices.
              </p>
              <Link href="/services">
                <a className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Learn More <ArrowRight size={16} />
                </a>
              </Link>
            </Card>

            {/* Service Card 2 */}
            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent group cursor-pointer flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                  <Lightbulb size={24} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Emerging Tech & AI</h3>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow">
                Development of AI Agent products, lead generation via AI insights, and technical solution architecture reviews.
              </p>
              <Link href="/services">
                <a className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Learn More <ArrowRight size={16} />
                </a>
              </Link>
            </Card>

            {/* Service Card 3 */}
            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent group cursor-pointer flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-secondary p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                  <Users size={24} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Career & Talent</h3>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow">
                Resume building, employability tracks for graduates, and connecting organizations with top MENA tech experts.
              </p>
              <Link href="/services">
                <a className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                  Learn More <ArrowRight size={16} />
                </a>
              </Link>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all inline-flex items-center gap-2">
                View All Services
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Partners</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-muted-foreground uppercase tracking-wide">Global Partners</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
              {/* Text placeholders for logos as per current design style, can be replaced with images later */}
              <span className="text-2xl font-bold text-gray-400">Google</span>
              <span className="text-2xl font-bold text-gray-400">NVIDIA</span>
              <span className="text-2xl font-bold text-gray-400">Snap</span>
              <span className="text-2xl font-bold text-gray-400">Flutterflow</span>
              <span className="text-2xl font-bold text-gray-400">The Founder Institute innovation</span>
              <span className="text-2xl font-bold text-gray-400">Ivey Academy</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center mb-6 text-muted-foreground uppercase tracking-wide">Regional Partners</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
              <span className="text-2xl font-bold text-gray-400">NTDP (KSA)</span>
              <span className="text-2xl font-bold text-gray-400">SDAIA</span>
              <span className="text-2xl font-bold text-gray-400">CST</span>
              <span className="text-2xl font-bold text-gray-400">NEOM</span>
              <span className="text-2xl font-bold text-gray-400">SAFCSP</span>
              <span className="text-2xl font-bold text-gray-400">The garage</span>
              <span className="text-2xl font-bold text-gray-400">DevMENA</span>
              <span className="text-2xl font-bold text-gray-400">Bamboogeeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/oYFFpjOZw6xBeFolfWacx1/sandbox/zfrbPK58od4c6rOr9VvWtp-img-3_1770929368000_na1fn_Z2xvYmFsLW5ldHdvcms.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1lGRnBqT1p3NnhCZUZvbGZXYWN4MS9zYW5kYm94L3pmcmJQSzU4b2Q0YzZyT3I5VnZXdHAtaW1nLTNfMTc3MDkyOTM2ODAwMF9uYTFmbl9aMnh2WW1Gc0xXNWxkSGR2Y21zLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ELo5ak3UO64MUYXRN-Wn815DppfxeOBI0kLWkqmtN-dxirt5HF93DMcgVnjQHPcXpep5YJ34rWlKmAkw6ncYmsWu03pFPiPGzZekTWB2yL9vyRYVon4GmeeVn1PasJyaRV1WJbyTvqUsBTyTiTAQ7vrXqfG1cpmHWK~6t-xHvmlH0DdNQmE6D~cWkra1d~eBYqkaBgS1y~PqN0CxHdXXp25MxOG7Zg3VgvVTiwJ4SjPr9u541b6oKaLdKBEN3WcNxElCCSp6NkNgV0ieqBvp20M-1iJC84qsyDGezUztFvzyM4~nK9m9o32BRF55EHA0wT2x4rktq53kMunfcfK8Mw__"
              alt="Global Network"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">Global Impact, Local Expertise</h2>
            <p className="text-lg text-muted-foreground">
              With operations across 17 countries and partnerships with leading organizations, we bring global best practices to local markets. Our network of experts ensures you get the right guidance, wherever you are.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Globe size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Presence in 17 countries across MENA and beyond</span>
              </li>
              <li className="flex items-start gap-3">
                <Users size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">500+ developer communities worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Partnerships with Google, governments, and leading tech companies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Let's discuss how iXL Consulting can help you achieve sustainable growth and drive innovation.
          </p>
          <Link href="/contact">
            <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-all inline-flex items-center gap-2">
              Book Your Free Consultation
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      import {Footer} from "@/components/Footer";

      {/* Footer */}
      <Footer />
    </div>
  );
}
