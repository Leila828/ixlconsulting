import { useState } from "react";
import { Calendar, Clock, MonitorPlay, Award, ArrowRight, Download } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { LeadCaptureModal } from "./LeadCaptureModal";

export function HeroIveyTakeover() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100vh] w-full bg-[#0A1628] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Abstract Background Textures */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]" />
          <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-600/10 blur-[100px]" />
          {/* Faint geometric grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full pt-10 lg:pt-0">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="space-y-8 max-w-2xl mx-auto lg:mx-0 w-full">
              <div className="space-y-6 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                  <span className="text-lg leading-none">✦</span> Exclusive Partner Program
                </div>

                {/* Headline & Subheadline */}
                <div className="space-y-4 text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                    Igniting AI <br className="hidden sm:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                      Transformation
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100/80 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Lead your organization through disruption — a 5-week online cohort developed by Ivey Business School, exclusively promoted by iXL Consulting.
                  </p>
                </div>
              </div>

              {/* Key Stats Inline */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-medium text-blue-100/90 py-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  <span>April 1, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span>5 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <MonitorPlay className="w-5 h-5 text-amber-500" />
                  <span>Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Certificate</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-md shadow-xl inline-block w-full sm:w-auto text-center lg:text-left">
                <CountdownTimer />
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold rounded-lg shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5" />
                    Download the Brochure
                  </button>
                  <a 
                    href="https://www.ivey.uwo.ca/executive-education/online/cohorts/igniting-ai-transformation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold rounded-lg transition-all"
                  >
                    View Full Course Details
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-xs text-blue-200/50 flex flex-col sm:flex-row items-center gap-1.5 justify-center lg:justify-start">
                  <span>🔒 Register once to receive the brochure by email. No spam — iXL Consulting guarantee.</span>
                </p>
              </div>
            </div>

            {/* Right Column: Floating Course Card */}
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none perspective-1000 mt-8 lg:mt-0">
              {/* Glow backing */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 blur-2xl rounded-[2rem] transform lg:-rotate-3 translate-x-4 translate-y-4"></div>
              
              <div className="relative bg-[#0d1f38]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/50 transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
                
                {/* Card Header */}
                <div className="p-6 sm:p-8 border-b border-white/5 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-serif text-white tracking-tight">Ivey</h3>
                      <p className="text-xs uppercase tracking-widest text-amber-500 font-bold mt-1">Business School</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">$1,990 <span className="text-sm font-normal text-white/50">CAD</span></p>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-700 border-2 border-amber-500/50 overflow-hidden flex-shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Julian+Birkinshaw&background=0D8ABC&color=fff&size=128" alt="Julian Birkinshaw" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">Julian Birkinshaw</p>
                      <p className="text-xs text-blue-200/70 mt-0.5">Dean — Ivey Business School</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-8 bg-gradient-to-b from-transparent to-black/20">
                  <div className="grid grid-cols-2 gap-4 text-sm bg-black/20 rounded-lg p-4">
                    <div>
                      <p className="text-white/50 text-[11px] uppercase tracking-wider mb-1">Format</p>
                      <p className="text-white font-medium">Online Cohort</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-[11px] uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-white font-medium">5 Weeks · ~40 Hrs</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-500">What you will learn:</p>
                    <ul className="space-y-3">
                      {[
                        "Diagnose AI disruption in your industry",
                        "Assess your organization's readiness",
                        "Formulate your strategic response",
                        "Build and present a transformation plan"
                      ].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-blue-100/90">
                          <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://www.ivey.uwo.ca/executive-education/online/cohorts/igniting-ai-transformation/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full py-4 text-center bg-white text-slate-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      Enroll Now →
                    </a>
                    <p className="text-center text-[10px] uppercase tracking-widest text-white/40 mt-4 font-semibold">
                      Promoted exclusively by iXL Consulting
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
