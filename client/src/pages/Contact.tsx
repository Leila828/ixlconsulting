import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, Send, ListChecks } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    organization: "",
    role: "",
    country: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          whatsapp: "",
          organization: "",
          role: "",
          country: "",
          service: "",
          message: "",
        });
      } else {
        setError(result.message || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Section 1 — Intro */}
      <section className="bg-secondary py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto space-y-5">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Let&apos;s Build Something Transformational
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Whether you&apos;re exploring a partnership, need AI strategy support, or want to discuss a Chief
              of Staff engagement — we&apos;d love to hear from you. Phase A discovery is offered at no cost.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Contact Form */}
      <section className="bg-white py-16 md:py-20 border-b border-border/60">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.5fr,1fr] items-start">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              Tell Us About Your Mandate
            </h2>
            <Card className="p-6 md:p-7">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg inline-block">
                    <p className="font-semibold">Thank you for your message.</p>
                    <p className="text-sm">We&apos;ll get back to you within 24 business hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your role"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Saudi Arabia"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="chief-of-staff">Chief of Staff &amp; Agile</option>
                      <option value="innovation-transformation">Innovation Transformation</option>
                      <option value="ai-transformation">AI Transformation</option>
                      <option value="training-talent">Training &amp; Talent</option>
                      <option value="external-partnerships">External Partnerships</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Share a bit about your context, objectives, and timeline..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-[var(--brand-primary-mid)] transition-colors text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </Card>
          </div>

          {/* Section 3 — Direct Contact */}
          <div className="space-y-6">
            <Card className="p-6 md:p-7 space-y-4">
              <h2 className="text-base md:text-lg font-semibold text-primary">
                Prefer Direct Contact?
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:support@ixlconsulting.tech"
                    className="text-[var(--brand-primary-light)] hover:underline"
                  >
                    support@ixlconsulting.tech
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-primary" />
                  <span>
                    LinkedIn:{" "}
                    <a
                      href="https://ae.linkedin.com/company/ixl-consulting-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      iXL Consulting
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Youtube className="h-4 w-4 text-primary" />
                  <span>
                    YouTube:{" "}
                    <a
                      href="https://www.youtube.com/results?search_query=devmena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      devMENA Channel — 95K+ subscribers
                    </a>
                  </span>
                </p>
              </div>
            </Card>

            {/* Section 4 — Engagement Model Reminder */}
            <Card className="p-6 md:p-7 space-y-4 bg-secondary/40 border border-border/80">
              <h3 className="text-sm font-semibold text-primary">
                How Our Engagement Model Works
              </h3>
              <ol className="space-y-3 text-xs md:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-semibold text-foreground">1.</span>
                  <span>
                    <span className="font-semibold text-foreground">
                      Send a message or email
                    </span>{" "}
                    with your context, objectives, and timelines.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-semibold text-foreground">2.</span>
                  <span>
                    <span className="font-semibold text-foreground">
                      Free Phase A discovery
                    </span>{" "}
                    — typically 4–5 days onsite with leadership plus 3–4 weeks of quick-win implementation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-semibold text-foreground">3.</span>
                  <span>
                    <span className="font-semibold text-foreground">
                      Formalize a partnership
                    </span>{" "}
                    that works for both sides, based on clear results and a shared roadmap.
                  </span>
                </li>
              </ol>
              <div className="pt-1">
                <p className="text-[11px] text-muted-foreground">
                  Phase A is offered at no cost as a partnership exploration — we prove value before asking you to
                  commit.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
