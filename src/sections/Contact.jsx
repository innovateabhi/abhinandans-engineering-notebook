import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, ShieldCheck, FileDown, Send, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const roleTypes = [
  { id: 'hiring', label: 'Job Hiring / Full-Time' },
  { id: 'freelance', label: 'Freelance / Contract' },
  { id: 'internship', label: 'Technical Internship' },
  { id: 'collaboration', label: 'Engineering Collaboration' }
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    roleType: 'Job Hiring / Full-Time',
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'
  const [ticketId, setTicketId] = useState('');
  const [submittedAt, setSubmittedAt] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setStatus('submitting');
    const randomTicket = `ENG-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    setTimeout(() => {
      setTicketId(randomTicket);
      setSubmittedAt(now);
      setStatus('submitted');
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      roleType: 'Job Hiring / Full-Time',
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setStatus('idle');
  };

  const mailtoSubject = encodeURIComponent(`[${formData.roleType}] ${formData.subject || 'Engineering Inquiry'}`);
  const mailtoBody = encodeURIComponent(
    `From: ${formData.name} (${formData.email})\nInquiry Type: ${formData.roleType}\n\nMessage:\n${formData.message}`
  );
  const directMailtoUrl = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-grid/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 007 // LET'S CONNECT"
          title="Every good project starts with a conversation."
          subtitle="Whether you're reaching out for software engineering roles, cloud &amp; DevOps hiring, freelance system architecture, or technical internships, submit a docket below or write directly."
          handwrittenNote="inbox open for engineering inquiries"
          pageNumber="07"
        />

        {/* Closing Contact Card Layout */}
        <div className="docket-card p-6 sm:p-9 lg:p-11 bg-paper-light border border-grid-dark rounded-xl relative shadow-paper-lg overflow-hidden">
          {/* Top Docket Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-xs shrink-0"></span>
              <span className="font-bold text-ink uppercase tracking-wider text-[11px] sm:text-xs">
                DIRECT COMMUNICATION DESK
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs">
              <span className="paper-stamp text-[10px]">SLA // 24–48 HRS</span>
              <span className="text-ink-faint hidden sm:inline">DISPATCH SYSTEM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              {status === 'submitted' ? (
                /* Authenticated Success Receipt State */
                <div className="p-6 sm:p-8 rounded-xl bg-paper border border-sage/60 shadow-xs space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-grid text-xs font-mono">
                    <span className="paper-stamp text-[10px] flex items-center gap-1.5 text-sage-dark font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage-dark" />
                      TRANSMISSION LOGGED // {ticketId}
                    </span>
                    <span className="text-ink-faint text-[10px]">{submittedAt}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-editorial text-2xl font-semibold text-ink">
                      Inquiry Logged Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed">
                      Thank you for reaching out, <span className="font-bold text-ink">{formData.name}</span>. Your engineering dispatch has been recorded for review under <span className="font-mono font-bold text-accent">{formData.roleType}</span>.
                    </p>
                  </div>

                  {/* Summary Docket Box */}
                  <div className="p-4 rounded-lg bg-paper-secondary border border-grid text-xs font-mono space-y-1.5 text-ink-muted">
                    <div><span className="text-ink-faint">Sender:</span> <span className="text-ink font-semibold">{formData.name}</span> ({formData.email})</div>
                    <div><span className="text-ink-faint">Role Focus:</span> <span className="text-accent font-semibold">{formData.roleType}</span></div>
                    {formData.subject && (
                      <div><span className="text-ink-faint">Subject:</span> <span className="text-ink">{formData.subject}</span></div>
                    )}
                    <div className="pt-1.5 border-t border-grid/60 text-[11px] text-ink-faint italic">
                      "{formData.message.slice(0, 120)}{formData.message.length > 120 ? '...' : ''}"
                    </div>
                  </div>

                  {/* Actions: Open in Email App or Reset */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={directMailtoUrl}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-paper font-mono text-xs font-semibold tracking-wider transition-all shadow-xs cursor-pointer"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>OPEN PRE-FILLED IN EMAIL CLIENT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-paper-secondary hover:bg-paper-warm border border-grid text-ink font-mono text-xs font-semibold transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                      <span>SEND ANOTHER MESSAGE</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Frontend Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-accent font-bold tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      <span>Step 01 // Select Inquiry Purpose</span>
                    </div>
                    {/* Role / Inquiry Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {roleTypes.map((type) => {
                        const isSelected = formData.roleType === type.label;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => setFormData((prev) => ({ ...prev, roleType: type.label }))}
                            className={`px-3 py-2 rounded-lg text-left font-mono text-xs transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-ink text-paper border-ink font-semibold shadow-xs'
                                : 'bg-paper-secondary hover:bg-paper-warm border-grid text-ink-muted hover:text-ink'
                            }`}
                          >
                            <span className="flex items-center gap-1.5 truncate">
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-accent' : 'bg-grid-dark'}`} />
                              <span className="truncate">{type.label}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-mono uppercase font-bold text-ink-muted mb-1">
                        Your Name / Organization <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma / Tech Corp"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-grid text-ink font-sans text-xs sm:text-sm placeholder:text-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] font-mono uppercase font-bold text-ink-muted mb-1">
                        Your Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-grid text-ink font-sans text-xs sm:text-sm placeholder:text-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-mono uppercase font-bold text-ink-muted mb-1">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack / Cloud Role Opening (Summer 2026)"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-grid text-ink font-sans text-xs sm:text-sm placeholder:text-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-mono uppercase font-bold text-ink-muted mb-1">
                      Message / Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about the role, technical requirements, timeline, or engineering inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-paper border border-grid text-ink font-sans text-xs sm:text-sm placeholder:text-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y"
                    />
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-paper font-mono text-xs font-semibold tracking-wider transition-all shadow-paper active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>{status === 'submitting' ? 'PROCESSING TRANSMISSION...' : 'TRANSMIT INQUIRY'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels, Resume & Profiles */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct Mail Card */}
              <div className="p-5 rounded-xl bg-paper border border-grid space-y-3 shadow-xs">
                <div className="text-[11px] font-mono uppercase text-accent font-bold tracking-wider pb-1 border-b border-grid/60">
                  Direct Inbox Contact
                </div>
                <div className="font-editorial text-lg sm:text-xl font-semibold text-ink break-words">
                  {profile.email}
                </div>
                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  Prefer your own mail client? Copy my professional address or trigger a direct draft with one click.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-accent text-paper font-mono text-xs font-semibold hover:bg-accent-dark transition-colors shadow-xs cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    <span>Mail App</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-paper-secondary hover:bg-paper-warm border border-grid text-ink font-mono text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                        <span className="text-sage-dark">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-ink-muted shrink-0" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={profile.resumePdfUrl}
                    download={profile.resumeFilename}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-paper-secondary hover:bg-paper-warm border border-grid text-ink font-mono text-xs font-semibold transition-colors cursor-pointer"
                    title="Download verified phone-free resume PDF"
                  >
                    <FileDown className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>Resume PDF</span>
                  </a>
                </div>
              </div>

              {/* Professional Profiles Card */}
              <div className="p-5 rounded-xl bg-paper border border-grid space-y-3 shadow-xs">
                <div className="text-[11px] font-mono uppercase text-ink-muted font-bold tracking-wider pb-1 border-b border-grid/60">
                  Engineering Profiles
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-paper-secondary hover:bg-paper-warm border border-grid/70 text-ink transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-ink shrink-0" />
                      <span>github.com/innovateabhi</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-paper-secondary hover:bg-paper-warm border border-grid/70 text-ink transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-accent shrink-0" />
                      <span>linkedin.com/in/abhinandan-roy</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                  </a>
                </div>

                <div className="pt-1 text-[10px] font-mono text-ink-faint flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                  <span>Strict Privacy Compliant • Direct Communication Desk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Notebook Stamped Footer */}
          <div className="mt-8 sm:mt-10 pt-5 border-t border-grid flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="paper-stamp text-[10px]">
                INBOX ACCESS // 2026
              </span>
              <span className="text-ink-faint text-[10px] sm:text-xs hidden sm:inline">
                VERIFIED ATS &amp; CLIENT-SIDE ENCRYPTED DISPATCH
              </span>
            </div>
            <div className="handwritten text-base sm:text-lg text-accent select-none">
              ~ looking forward to connecting with your team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
