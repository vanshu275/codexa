import { useRef, useState } from 'react';

export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 5000);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <section id='contact' ref={containerRef} className="py-24 sm:py-32 relative overflow-hidden" style={{ background: '#050505' }}>
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs tracking-[0.3em] uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{ color: '#00e5ff', border: '1px solid rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.04)' }}>
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Get in touch with us to discuss how we can help your business grow and achieve its goals.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6 p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl"
          style={{ background: 'rgba(10, 10, 10, 0.6)', backdropFilter: 'blur(20px)' }}
        >
          {/* Top gradient for depth */}
          <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent h-1/3 opacity-20 pointer-events-none" />

          {/* Hidden fields for Netlify forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2 tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2 tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/50 transition-all"
              />
            </div>
          </div>

          <div className="relative z-10">
            <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2 tracking-wide">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project details"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/50 transition-all"
            />
          </div>

          <div className="relative z-10">
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2 tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="5"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/50 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 mt-4 bg-transparent border border-[#00e5ff]/30 text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:border-[#00e5ff] rounded-xl font-medium transition-all duration-300 text-lg relative overflow-hidden group z-10"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

        </form>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          submitted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-4 px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_10px_40px_rgba(0,229,255,0.15)]">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-wide text-sm sm:text-base">Message Sent Successfully</span>
            <span className="text-white/60 text-xs sm:text-sm">We&apos;ll be in touch with you shortly.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
