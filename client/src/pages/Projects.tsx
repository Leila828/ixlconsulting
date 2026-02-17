import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Users, Globe, Zap, Calendar, MapPin, Monitor } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


/**
 * Design Philosophy: Professional Minimalism with Strategic Blue Accents
 * - Showcase major projects and achievements
 * - Timeline-based presentation of key milestones
 * - Visual hierarchy emphasizing impact and scale
 */

export default function Projects() {
  const leadershipPrograms = [
    {
      title: "Leading AI Transformation in Banking",
      details: "Virtual & Hybrid sessions for CXO/Fintech teams",
      when: "Nov/Dec 2025",
      type: "Executive"
    },
    {
      title: "Demystify AI & Machine Learning",
      details: "Practical AI application minus the buzzwords",
      when: "Dec 17 (Riyadh)",
      type: "Workshop"
    },
    {
      title: "Leading Digital Innovation and Change",
      details: "Governance and scaling of digital change",
      when: "Mar 24-26 (Riyadh)",
      type: "Leadership"
    }
  ];

  const hackathons = [
    { name: "Hajj Hackathon 2018", detail: "Guinness World Record (3,000+ participants)" },
    { name: "AI Hack Africa", detail: "Large-scale event with 1,000+ participants" },
    { name: "Oman Ideathon", detail: "Major innovation competition (1,000+ attendees)" },
    { name: "Smartathon", detail: "Smart Cities Challenge focused on urban innovation" },
    { name: "Neom Hackathon", detail: "Future of technology within NEOM ecosystem" },
    { name: "MENA Challenge", detail: "Regional competition for tech innovation" },
    { name: " AI Hack-Tunis", detail: "Technology competition supported by global partners" },
    { name: " Lensathon", detail: "Creating Snapchat Lens using Lens studio" }
  ];

  const ceremonies = [
    { name: "SDAIA Innovators Ceremony", detail: "220+ VVIP/VIP guests" },
    { name: "CST Digital Technology Forum", detail: "Major forum with 1,500+ attendees (2023)" },
    { name: "SDAIA Holo Show", detail: "High-tech presentation ceremony" },
    { name: "Tawakkalna Holo Show", detail: "Specialized event showcasing Tawakkalna ecosystem" }
  ];

  const roadshows = [
    { name: "Snap AR Roadshow MENA", detail: "9-week tour, 20 events focused on AR" },
    { name: "60 Days Challenge", detail: "Developer training program conducted via YouTube" },
    { name: "Google Tech Events", detail: "Thousands of tech events for 500+ communities" }
  ];

  const diversity = [
    { name: "Women Techmakers Programs", detail: "Regional community events for women in tech" },
    { name: "Women Founders Program", detail: "In collaboration with US State Department" },
    { name: "Women Safety Hackathon", detail: "Focused on using tech to improve safety" }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary">Our Projects & Impact</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation through major hackathons, executive programs, and ecosystem initiatives across the MENA region.
          </p>
        </div>
      </section>

      {/* Executive Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Executive & Leadership Programs</h2>
            <p className="text-lg text-muted-foreground">in Partnership with Ivey Executive Education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipPrograms.map((prog, i) => (
              <Card key={i} className="p-8 border-t-4 border-t-accent hover:shadow-lg transition-all">
                <div className="bg-secondary/50 p-3 rounded-full w-fit mb-4">
                  <Calendar className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2 min-h-[3.5rem]">{prog.title}</h3>
                <p className="text-sm font-semibold text-accent mb-4">{prog.when}</p>
                <p className="text-muted-foreground">{prog.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Hackathons & Competitions */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Major Hackathons & Competitions</h2>
            <p className="text-lg text-muted-foreground">Landmark events that shaped the ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex-shrink-0 mt-1">
                  <Award className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Government Ceremonies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Corporate & Government Ceremonies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ceremonies.map((item, i) => (
              <Card key={i} className="p-8 hover:border-accent transition-all flex items-center gap-6">
                <div className="bg-secondary p-4 rounded-full">
                  <Zap className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-muted-foreground">{item.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Roadshows & Diversity */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Roadshows */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Globe className="text-accent" />
              Ecosystem Roadshows
            </h3>
            <div className="space-y-6">
              {roadshows.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-foreground mb-2">{item.name}</h4>
                  <p className="text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diversity */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Users className="text-accent" />
              Diversity & Inclusion
            </h3>
            <div className="space-y-6">
              {diversity.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-foreground mb-2">{item.name}</h4>
                  <p className="text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Be Part of Our Success Story?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join hundreds of organizations and thousands of professionals who have benefited from our expertise and guidance.
          </p>
          <Link href="/contact">
            <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-all inline-flex items-center gap-2">
              Start Your Journey
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
