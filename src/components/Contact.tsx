import React, { useState } from 'react';
import { Mail01Icon, Tick01Icon, Copy01Icon, ArrowUpRight01Icon, GithubIcon, SentIcon, InstagramIcon, WhatsappIcon } from 'hugeicons-react';
import { PROFILE_DATA } from '../data/portfolioData';

const DIRECT_LINKS = [
  {
    label: "WhatsApp",
    handle: "+62 812-8711-0249",
    href: "https://wa.me/6281287110249",
    icon: <WhatsappIcon className="w-4 h-4 text-zinc-300" />
  },
  {
    label: "Email",
    handle: "yannz.2005@gmail.com",
    href: "mailto:yannz.2005@gmail.com",
    icon: <Mail01Icon className="w-4 h-4 text-zinc-300" />
  },
  {
    label: "GitHub",
    handle: "@caya8205-2",
    href: "https://github.com/caya8205-2",
    icon: <GithubIcon className="w-4 h-4 text-zinc-300" />
  },
  {
    label: "Instagram",
    handle: "@ryannotfound404",
    href: "https://instagram.com/ryannotfound404",
    icon: <InstagramIcon className="w-4 h-4 text-zinc-300" />
  }
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatusMessage("Please provide your name and message first.");
      return;
    }

    if (sendMethod === 'whatsapp') {
      const waText = encodeURIComponent(
        `Hi Ryan,\n\nName: ${formData.name}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message}`
      );
      const waUrl = `https://wa.me/6281287110249?text=${waText}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setStatusMessage("Opening WhatsApp with your formatted message...");
    } else {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      setStatusMessage("Opening email client with your pre-filled draft...");
    }

    setTimeout(() => setStatusMessage(null), 6000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
            <span className="text-zinc-200">05</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
            Let&apos;s build something durable.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-4 leading-relaxed">
            Have a project in mind, an architectural query, or an engineering opportunity? Reach out directly via the channels below.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels & Interactive Real Message Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-5 space-y-3">
              <span className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider block mb-1">
                Direct Communication Channels
              </span>

              <div className="space-y-2">
                {DIRECT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 rounded bg-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                        {link.icon}
                      </span>
                      <div>
                        <div className="text-xs font-medium text-zinc-400">{link.label}</div>
                        <div className="text-sm font-semibold text-zinc-100 font-mono">{link.handle}</div>
                      </div>
                    </div>
                    <ArrowUpRight01Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Copy Email Card */}
            <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-500 block mb-0.5">Quick Copy Email</span>
                <span className="text-sm font-mono text-zinc-200">{PROFILE_DATA.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md transition-colors inline-flex items-center gap-1.5"
              >
                {copied ? <Tick01Icon className="w-3.5 h-3.5 text-white" /> : <Copy01Icon className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Interactive Real Message Composer (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 rounded-xl p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Message Dispatch
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Transmits formatted inquiry directly to Ryan&apos;s personal WhatsApp or email client.
                </p>
              </div>
            </div>

            {/* Method Switcher */}
            <div className="flex items-center gap-2 my-5 p-1 bg-zinc-950 border border-zinc-800 rounded-lg w-fit">
              <button
                type="button"
                onClick={() => setSendMethod('whatsapp')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all inline-flex items-center gap-1.5 ${
                  sendMethod === 'whatsapp'
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <SentIcon className="w-3.5 h-3.5" />
                <span>Dispatch via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setSendMethod('email')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all inline-flex items-center gap-1.5 ${
                  sendMethod === 'email'
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Mail01Icon className="w-3.5 h-3.5" />
                <span>Dispatch via Email</span>
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase text-zinc-400 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono uppercase text-zinc-400 block mb-1.5">
                    Your Email / Contact (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-zinc-400 block mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your project, technical inquiry, or team requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-zinc-950 border border-zinc-800 rounded-md text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 text-xs bg-zinc-900 border border-zinc-700 text-zinc-200 rounded-md font-mono">
                  {statusMessage}
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <SentIcon className="w-3.5 h-3.5" />
                  <span>
                    {sendMethod === 'whatsapp' ? 'Open WhatsApp & Send Message' : 'Open Email & Send Message'}
                  </span>
                </button>

                <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                  Direct dispatch to Ryan
                </span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
