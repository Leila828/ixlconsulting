import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { useState } from "react";

/**
 * Design Philosophy: Professional Minimalism with Strategic Blue Accents
 * - Clear contact information and multiple ways to reach out
 * - Contact form with professional styling
 * - Responsive layout for easy navigation
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    }, 3000);
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or ready to discuss your next project? We would love to hear from you. Contact us today to schedule a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-3">Email</h3>
              <p className="text-muted-foreground mb-2">Send us an email anytime</p>
              <a href="mailto:Salim@ixlconsulting.tech" className="text-accent font-semibold hover:underline">
                Salim@ixlconsulting.tech
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <Clock className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-3">Response Time</h3>
              <p className="text-muted-foreground mb-2">We typically respond within</p>
              <p className="text-accent font-semibold">24 business hours</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-primary mb-3">Global Presence</h3>
              <p className="text-muted-foreground">Operating across</p>
              <p className="text-accent font-semibold">17 countries</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Send us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we will get back to you as soon as possible.
              </p>
            </div>

            <Card className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p>We will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="startup-advisory">Startup Advisory</option>
                        <option value="workshops">Workshops & Training</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="speaker-agency">Speaker Agency</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">What Can We Help You With?</h2>

          <div className="grid grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent cursor-pointer">
              <h3 className="text-2xl font-bold text-primary mb-3">Startup Advisory</h3>
              <p className="text-muted-foreground mb-4">
                Looking to accelerate your startup? We provide end-to-end advisory services for incubators and accelerator programs.
              </p>
              <a href="mailto:Salim@ixlconsulting.tech" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
                Inquire Now →
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent cursor-pointer">
              <h3 className="text-2xl font-bold text-primary mb-3">Workshops & Training</h3>
              <p className="text-muted-foreground mb-4">
                Need to upskill your team? We offer specialized workshops in Design Thinking, OKR, Agile, AI, and more.
              </p>
              <a href="mailto:Salim@ixlconsulting.tech" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
                Inquire Now →
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent cursor-pointer">
              <h3 className="text-2xl font-bold text-primary mb-3">AI Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Transform your business with AI. We provide AI agents for content generation, customer support, and more.
              </p>
              <a href="mailto:Salim@ixlconsulting.tech" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
                Inquire Now →
              </a>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:border-accent cursor-pointer">
              <h3 className="text-2xl font-bold text-primary mb-3">Speaker Agency</h3>
              <p className="text-muted-foreground mb-4">
                Looking for expert speakers? We connect you with MENA's top tech experts for your events.
              </p>
              <a href="mailto:Salim@ixlconsulting.tech" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
                Inquire Now →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Let's Start a Conversation</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to explore possibilities, we are here to help.
          </p>
          <a
            href="mailto:Salim@ixlconsulting.tech"
            className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-all inline-flex items-center gap-2"
          >
            Email Us Now
            <Mail size={20} />
          </a>
        </div>
      </section>

      import {Footer} from "@/components/Footer";

      {/* Footer */}
      <Footer />
    </div>
  );
}
