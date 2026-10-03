import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate reliable dispatch
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span>07</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Contact Me
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Interested in discussing an internship, junior engineering opportunity, or technical project? Reach out directly.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800">
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Direct Contact Information
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                Feel free to email me directly or connect across professional platforms.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral-500">Email Address</span>
                      <a
                        href={`mailto:${data.email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:underline"
                      >
                        {data.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-1.5 text-neutral-400 hover:text-white rounded-md transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral-500">LinkedIn Profile</span>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:underline">
                        linkedin.com/in/sravya-cs
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500 group-hover:text-white transition-colors">↗</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-neutral-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-800 text-neutral-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral-500">GitHub Profile</span>
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:underline">
                        github.com/sravya2005
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500 group-hover:text-white transition-colors">↗</span>
                </a>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typically responds within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-2 text-neutral-400 text-sm max-w-md leading-relaxed">
                    Thank you for reaching out, {name}! Your message has been received. I look forward to connecting with you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="mt-6 px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-950 border ${
                          errors.name ? 'border-red-500/70' : 'border-neutral-800'
                        } text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-[11px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-950 border ${
                          errors.email ? 'border-red-500/70' : 'border-neutral-800'
                        } text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-[11px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. Software Engineering Internship Opportunity"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-950 border ${
                        errors.subject ? 'border-red-500/70' : 'border-neutral-800'
                      } text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 text-[11px] text-red-400 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share details regarding the role, timeline, or project scope..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg bg-neutral-950 border ${
                        errors.message ? 'border-red-500/70' : 'border-neutral-800'
                      } text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors leading-relaxed`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-[11px] text-red-400 mt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-colors active:scale-98"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Message</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
