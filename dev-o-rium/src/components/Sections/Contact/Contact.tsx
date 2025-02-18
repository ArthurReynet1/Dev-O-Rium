'use client';

import CircuitBackground from '@/components/ui/CircuitBackground';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact-section"
      className="bg-secondary flex items-center h-screen relative overflow-hidden"
    >
      <CircuitBackground />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tighter text-white sm:text-4xl">
            Me Contacter
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-tertiary/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white text-sm">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-white text-sm">
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="Sujet de votre message"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-white text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 min-h-[150px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="group bg-primary text-secondary hover:bg-primary/90 px-6 py-3 text-base font-medium rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Envoyer
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
