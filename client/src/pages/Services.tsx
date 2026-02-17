import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Zap, BookOpen, Lightbulb, Mic2, Users, Target, Rocket, Database } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import cst from "../pages/images/cst.png";


/**
 * Design Philosophy: Professional Minimalism with Strategic Blue Accents
 * - Comprehensive service descriptions with clear benefits
 * - Service cards with hover effects and visual hierarchy
 * - Feature lists with checkmarks for easy scanning
 */

export default function Services() {
  const services = [
    {
      id: "startup-sme",
      icon: Rocket,
      title: "Startup & SME Support",
      subtitle: "Incubator & Accelerator Enablement",
      description: "End-to-end support for incubators and accelerator programs, either live or online. We empower startups from concept to launch.",
      features: [
        "Incubator/Accelerator Enablement: End-to-end program support",
        "Workshops: Design Thinking (Concept to launch, UX, User testing)",
        "OKR Training: Goal-setting frameworks for 10x efficiency",
        "Agile & Dev Tools: Scrum/Kanban ceremonies & Jira/Trello setup",
        "Founders workshops: Leadership and management",
        "VC access / investment strategies"
      ],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/oYFFpjOZw6xBeFolfWacx1/sandbox/zfrbPK58od4c6rOr9VvWtp-img-2_1770929369000_na1fn_c3RhcnR1cC1pbm5vdmF0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1lGRnBqT1p3NnhCZUZvbGZXYWN4MS9zYW5kYm94L3pmcmJQSzU4b2Q0YzZyT3I5VnZXdHAtaW1nLTJfMTc3MDkyOTM2OTAwMF9uYTFmbl9jM1JoY25SMWNDMXBibTV2ZG1GMGFXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XfqzvKzodeoNtWvi~~-R8xiVnSi9t8cxEqoFBQ3gbmqA3m~Swpht7fMGzcHbkkUN2wGJgL35Pel6q-9742tgMYeH7MfR14jqCc1~MvUqzF9vsQxqlK8kRui2baVK0T5aShjIZ~JmEnZYG4008TJEqvdybYoc0kEwaOfPE52Ib1tn4hUbh5YlKMqxfa~zQpgPOhu9-AV7RlwnCqoUphs56Hau4Rd1KYtChm92uNzNQyq7ESaG7T8mnDp9Yye8s2ZgJQZ9Q8t1YEXGbgAsfVZVhp137vJfGa91ekgWFFsqoBQR8JBkLp9r0nBbU65hi4GNXbN6Gz1ayGXJ2bAUvDTrFg__"
    },
    {
      id: "event-hackathon",
      icon: Mic2,
      title: "Event & Hackathon Organization",
      subtitle: "End-to-End Event Management & Production",
      description: "We create unforgettable experiences by handling every aspect of your event, from content and speakers to logistics and cutting-edge technology.",
      features: [
        "Content Creation: Tailoring engaging narratives and themes",
        "Speaker Management: Selection, logistics, and coordination",
        "Speaker Training: Professional rehearsals and public speaking coaching",
        "Hackathon Management: Promotion, registration, and submission growth",
        "Tech Mentorship: Expert guidance across all technical fields",
        "Hologram Shows: Production and management of immersive holographic displays"
      ],
      image: cst
    },
    {
      id: "emerging-tech",
      icon: Database,
      title: "Emerging Tech & AI Products",
      subtitle: "Cutting-Edge Automation & Intelligence",
      description: "Leverage advanced technology to automate content creation, customer interactions, and business intelligence with our AI solutions.",
      features: [
        "AI Agent: Automated content creation & video generation",
        "Real-time interactivity for support and e-learning",
        "Lead Generation: AI-driven data insights",
        "Tech Solutions: Solution Architecture Review",
        "Full Stack Development services",
        "AI Software Production (Prototype Development)"
      ],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/oYFFpjOZw6xBeFolfWacx1/sandbox/zfrbPK58od4c6rOr9VvWtp-img-5_1770929370000_na1fn_YWktdGVjaG5vbG9neQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1lGRnBqT1p3NnhCZUZvbGZXYWN4MS9zYW5kYm94L3pmcmJQSzU4b2Q0YzZyT3I5VnZXdHAtaW1nLTVfMTc3MDkyOTM3MDAwMF9uYTFmbl9ZV2t0ZEdWamFHNXZiRzluZVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ok0L6jgKc0qj6dIyqvxitUtubek8TfjYPk3j5onI5jX4tJAa3XXeXGQ4C6NMe4svTCba~ERWhQsKpC~mSXbUim9J3jVFaDH8pRV7nFdfHKH9kKbCcEQjgs8wbiJHCDV-J6t0ceDDt-LXXPCi~5bkbGNU9URK1BzZh0J81AdfHfAikvuDyf0nvacktB0oA3q~QmKDCzdj8tn4rN1Mk51rHQlZQjKFZJTefz-0UPMlk4tiJ7FbR5tMRO0Egv25OTn1g7EwOFUIt2bQxmM2DoYTPGbOWXE9xhIa9f3KeeG3nj4qJEFrPoexITN7XXASnbDZEsyUArTqaR2ky45CrLJo3w__"
    },
    {
      id: "career-talent",
      icon: Users,
      title: "Career & Talent Development",
      subtitle: "Connecting Experts & Upskilling Talent",
      description: "Bridging the gap between talent and opportunity through specialized tracks and our expert speaker network.",
      features: [
        "Resume Building: ATS-friendly, professional optimization",
        "Employability Series: Custom tracks (E.101 to E.501)",
        "Speaker Agency: Connecting with top MENA experts",
        "Expertise in AI, Cyber Security, FinTech, Blockchain",
        "M&A & Strategic Partnerships support",
        "E-Learning: Free tech platform via bamboogeeks.dev"
      ],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/oYFFpjOZw6xBeFolfWacx1/sandbox/zfrbPK58od4c6rOr9VvWtp-img-4_1770929369000_na1fn_d29ya3Nob3AtdHJhaW5pbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvb1lGRnBqT1p3NnhCZUZvbGZXYWN4MS9zYW5kYm94L3pmcmJQSzU4b2Q0YzZyT3I5VnZXdHAtaW1nLTRfMTc3MDkyOTM2OTAwMF9uYTFmbl9kMjl5YTNOb2IzQXRkSEpoYVc1cGJtYy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RvkFXbShtOXvVrH0bdTbOCDc1dvHRkkEYKAIZSdg6pbuOX81oGiijcX-QGe~Liuv57shcDUqXXQd1lpnKLO9zJ0JGkqfiJrsIaAlFQ~tCVGsLsafNeK1LQtA6A5jjNTdGiB~2-lYqmhi1QcZea7Vghwyhuq7gCbywFY29qkdTyzVeaBaNRYyizqdmVExOj~ckkz5jEZPm3~lRbxUMb9rzAS6oSYvrmddCL3qLeFrXK-lGpOXyHZFHP1ios1FgOwpWGEj86uygNeFo5XzeUPnTR0uW7NAFr85~bnpH5o~-m6qQfrBOrsdLliSymNy8H-CoTuuDmRm8s6Zmy5MxifHSQ__"
    },

  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to accelerate growth, drive innovation, and empower organizations across the MENA region and beyond.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className="grid grid-cols-2 gap-12 items-center">
                <div className={isEven ? "order-1" : "order-2"}>
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="text-primary mt-1" size={32} />
                    <div>
                      <p className="text-accent font-semibold text-sm uppercase tracking-wide">{service.subtitle}</p>
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-all inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight size={20} />
                  </a>
                </div>
                <div className={isEven ? "order-2" : "order-1"}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Why Choose iXL Consulting?</h2>
          <div className="grid grid-cols-3 gap-8">
            <Card className="p-8">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-3">Expert Team</h3>
              <p className="text-muted-foreground">Our team brings decades of combined experience in startup acceleration, digital transformation, and innovation.</p>
            </Card>
            <Card className="p-8">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground">We have trained 750K+ developers, accelerated 1000+ startups, and built 500+ communities across 17 countries.</p>
            </Card>
            <Card className="p-8">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-3">Results-Driven</h3>
              <p className="text-muted-foreground">We focus on delivering measurable results and sustainable growth for our clients and partners.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Let us discuss which service is the best fit for your organization and how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-all inline-flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
}
