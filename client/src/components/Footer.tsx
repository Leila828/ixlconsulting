import { Link } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../pages/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] text-gray-300 pt-10 pb-6 mt-12">
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start mb-6">
          {/* Column 1: Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="iXL Consulting Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-semibold text-white">
                iXL Consulting
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Elevating Innovation, Empowering Digital Excellence
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <a className="hover:text-white transition-colors">Partners</a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a className="hover:text-white transition-colors">
                    Insights
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Areas (Core Services) */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wide">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/services#chief-of-staff"
                  className="hover:text-white transition-colors"
                >
                  Chief of Staff & Agile
                </a>
              </li>
              <li>
                <a
                  href="/services#innovation-transformation"
                  className="hover:text-white transition-colors"
                >
                  Innovation Transformation
                </a>
              </li>
              <li>
                <a
                  href="/services#ai-transformation"
                  className="hover:text-white transition-colors"
                >
                  AI Transformation
                </a>
              </li>
              <li>
                <a
                  href="/services#training-talent"
                  className="hover:text-white transition-colors"
                >
                  Training & Talent
                </a>
              </li>
              <li>
                <a
                  href="/services#external-growth-partnerships"
                  className="hover:text-white transition-colors"
                >
                  External Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact / Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wide">
              Get in Touch
            </h4>
            <a
              href="mailto:support@ixlconsulting.tech"
              className="text-sm text-[var(--brand-accent-gold)] hover:underline block mb-4"
            >
              support@ixlconsulting.tech
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://ae.linkedin.com/in/salim-abid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 hover:border-[var(--brand-accent-gold)] hover:text-[var(--brand-accent-gold)] transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/ixlconsulting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 hover:border-[var(--brand-accent-gold)] hover:text-[var(--brand-accent-gold)] transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/results?search_query=devmena"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 hover:border-[var(--brand-accent-gold)] hover:text-[var(--brand-accent-gold)] transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-3 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>© 2026 iXL Consulting. All rights reserved.</p>
          <p className="text-center md:text-right">
            AI transformation consulting MENA · Chief of Staff consulting Saudi
            Arabia · innovation strategy Vision 2030 · developer community MENA
            · hackathon management Middle East
          </p>
        </div>
      </div>
    </footer>
  );
}
