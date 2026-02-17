import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Target, Lightbulb, Users, Heart, Zap, Award } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


/**
 * Design Philosophy: Professional Minimalism with Strategic Blue Accents
 * - Consistent use of primary blue (#003D82) for headings
 * - Teal accents (#00A8CC) for highlights and CTAs
 * - Clean typography hierarchy with Poppins headings and Inter body
 */

export default function About() {
  const leadership = [
    {
      name: "Salim Abid",
      role: "Founder",
      highlights: ["x-Google Head of Startups MENA", "x-Qualcomm SW PMO", "x-Xilinx TPM", "8 Patents"],
      image: null // Placeholder for now
    },
    {
      name: "Rayan AL Zahab",
      role: "Partner",
      highlights: ["Founder of BambooGeeks", "x-McKinsey Lead PO", "x-Snap MEA AR Ecosystem Head"],
      image: null
    },
    {
      name: "Mustapha Iles",
      role: "Advisor",
      highlights: ["AI Solution Architect", "20+ years experience (USA/Europe/KSA)", "x-Xilinx & x-InComm"],
      image: null
    },
    {
      name: "Latif Abid",
      role: "Advisor",
      highlights: ["Investment expert", "Founder at AIPLabs", "Background in Barclays Investment Banking"],
      image: null
    }
  ];

  const milestones = [
    {
      year: "2016-2022",
      title: "Community Impact",
      description: "Championed 500+ developer communities in 17 countries; trained 750K developers annually."
    },
    {
      year: "2018",
      title: "World Records",
      description: "Executed the Hajj Hackathon 2018 (Guinness World Record for 3,000+ participants)."
    },
    {
      year: "Expansion",
      title: "Regional Growth",
      description: "Launched innovation hubs and accelerators: The Garage (KSA), Oman SaaS Accelerator, and Algeria Venture."
    },
    {
      year: "Economic",
      title: "Google MENA Impact",
      description: "Supported billions in economic activity in the UAE and thousands of jobs in the Android ecosystem."
    },
    {
      year: "Inclusion",
      title: "Diversity",
      description: "Initiated Women Techmakers and Women Founders programs with the US State Department."
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary">About iXL Consulting</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the belief that businesses thrive with the right guidance, iXL Consulting has been partnering with organizations worldwide to deliver data-driven, innovative solutions.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              A team of experts with backgrounds from Google, McKinsey, Snap, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all border-t-4 border-t-primary">
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  {/* Placeholder for user provided images later */}
                  <Users size={40} className="text-primary/50" />
                </div>
                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                <p className="text-accent font-semibold mb-3">{leader.role}</p>
                <ul className="text-sm text-left text-muted-foreground space-y-2 mt-4">
                  {leader.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-12">
            <Card className="p-8 bg-white border-primary/20">
              <Target className="text-primary mb-4" size={32} />
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed">
                To empower companies to achieve sustainable growth by leveraging strategic insights, embracing cutting-edge technologies, and fostering a culture of continuous improvement.
              </p>
            </Card>

            <Card className="p-8 bg-white border-accent/20">
              <Lightbulb className="text-accent mb-4" size={32} />
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-lg text-foreground leading-relaxed">
                To be the trusted partner for innovation and growth across the MENA region and beyond, recognized for our expertise in startup acceleration, digital transformation, and talent development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline / History Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">History Highlights</h2>
            <p className="text-lg text-muted-foreground">
              A legacy of impact and innovation.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32">
                  <div className="bg-primary text-white rounded-lg p-4 text-center">
                    <div className="text-lg font-bold">{milestone.year}</div>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Trusted By</h2>
          <div className="grid grid-cols-4 gap-8 items-center justify-items-center opacity-75">
            <span className="text-xl font-bold text-gray-500">Google</span>
            <span className="text-xl font-bold text-gray-500">NVIDIA</span>
            <span className="text-xl font-bold text-gray-500">Snap</span>
            <span className="text-xl font-bold text-gray-500">Qualcomm</span>
            <span className="text-xl font-bold text-gray-500">SDAIA</span>
            <span className="text-xl font-bold text-gray-500">NEOM</span>
            <span className="text-xl font-bold text-gray-500">Ivey Academy</span>
            <span className="text-xl font-bold text-gray-500">NTDP</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Let's Build Something Great Together</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Whether you're a startup looking to scale or an enterprise seeking innovation, we're here to help you succeed.
          </p>
          <Link href="/contact">
            <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-all inline-flex items-center gap-2">
              Get in Touch
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
