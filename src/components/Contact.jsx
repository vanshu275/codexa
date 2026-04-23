import {  useRef, useState } from 'react';


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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id='contact' ref={containerRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Have a project in mind? Get in touch with us to discuss how we can help your business grow.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6  p-8 rounded-lg border border-gray-200 "
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project details"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200 text-lg"
          >
            Send Message
          </button>

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              Thank you! We&apos;ll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
