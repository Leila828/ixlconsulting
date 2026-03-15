import { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2 } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    agreed: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          metadata: {
            source: "Ivey AI Transformation Brochure",
            timestamp: new Date().toISOString()
          }
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 sm:py-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0A1628] border border-blue-900/50 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get the Full Course Brochure
            </h2>
            <p className="text-sm text-blue-200/80 mt-1">
              Igniting AI Transformation — Ivey Business School
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-[fade-in_0.5s_ease-out]">
              <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">✅ Done!</h3>
              <p className="text-blue-100/90 text-lg max-w-md">
                We will send the brochure to <span className="font-semibold text-white">{formData.email}</span> within 24 hours.
              </p>
              <p className="text-sm text-blue-300/60 mt-4">
                Our team may follow up with more details.
              </p>
              <button 
                onClick={onClose}
                className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="fullName" className="text-xs font-semibold text-blue-200/80 uppercase tracking-wider">Full Name *</label>
                  <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-white placeholder-white/30 transition-colors focus:outline-none" placeholder="Jane Doe" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-blue-200/80 uppercase tracking-wider">Professional Email *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-white placeholder-white/30 transition-colors focus:outline-none" placeholder="jane@company.com" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-blue-200/80 uppercase tracking-wider">Phone Number (Optional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-white placeholder-white/30 transition-colors focus:outline-none" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 text-left">
                <input required type="checkbox" id="agreed" name="agreed" checked={formData.agreed} onChange={handleChange} className="mt-1 flex-shrink-0 h-4 w-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500 focus:ring-offset-gray-900 cursor-pointer" />
                <label htmlFor="agreed" className="text-sm text-blue-100/70 leading-relaxed cursor-pointer select-none">
                  I agree to receive communications from iXL Consulting about this and related programs.
                </label>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm text-center">
                  {error}
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-300/60 font-medium">
                  <ShieldCheck size={16} className="text-amber-500/70" />
                  <span>🔒 Your data is safe. We don't spam.</span>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || !formData.agreed}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold rounded-lg shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Download Brochure"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
