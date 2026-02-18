import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function Insights() {
  const posts = [
    {
      slug: "/insights/ai-transformation-10x-performance-mandate-2026",
      title: "The 10x Performance Mandate: Why AI Transformation Can't Wait in 2026",
      category: "AI Transformation",
      summary:
        "What MIT Sloan, McKinsey, Harvard, and Stanford SALT Lab are telling boards about agent-centric enterprises — and how to move from experimentation to execution.",
    },
    {
      slug: "/insights/chief-of-staff-modern-c-suite",
      title: "The Case for a Chief of Staff in the Modern C-Suite",
      category: "Leadership & Operating Models",
      summary:
        "Why CEOs, ministers, and chairs are turning to chief of staff roles to orchestrate strategy, information, and execution — and what it looks like in practice.",
    },
    {
      slug: "/insights/worlds-largest-hackathon-lessons",
      title: "How We Ran the World's Largest Hackathon — and What Corporate Innovation Can Learn From It",
      category: "Innovation & Ecosystems",
      summary:
        "Inside the Hajj Hackathon and the lessons it offers for corporate and government innovation programs across MENA and beyond.",
    },
    {
      slug: "/insights/scaling-developer-communities-16k-to-750k",
      title: "From 16K to 750K: What Scaling Developer Communities Taught Us About Transformation",
      category: "Capability Building",
      summary:
        "The story of scaling Google’s MENA developer ecosystem — and how the same principles apply to any large-scale capability-building initiative.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto px-4 space-y-5">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Insights
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Insights From the Front Lines of Innovation
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Perspectives from AI transformation consulting, chief of staff engagements, ecosystem-scale hackathons,
              and community building across MENA and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          {posts.map(post => (
            <Card key={post.slug} className="p-6 md:p-7 border border-border/80 hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {post.category}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-primary">
                  {post.title}
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {post.summary}
                </p>
              </div>
              <div className="mt-4">
                <Link href={post.slug}>
                  <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-[#2E86AB]">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Looking for something specific?</p>
              <p className="text-xs md:text-sm text-primary-foreground/80">
                We regularly write custom briefings for boards and leadership teams.
              </p>
            </div>
          </div>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-2.5 text-sm font-semibold text-[#050922] hover:bg-[#b2903f] transition-colors">
              Request a Briefing
              <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

