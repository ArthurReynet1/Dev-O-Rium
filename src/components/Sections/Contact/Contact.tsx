'use client';

import CircuitBackground from '@/components/ui/CircuitBackground';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
import { useState } from 'react';

type Status = 'idle' | 'success' | 'error';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const initialFormData = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus('error');
      return;
    }

    setStatus('idle');
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData(initialFormData);
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="bg-secondary flex items-center min-h-screen relative overflow-hidden py-16"
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
            aria-label="Formulaire de contact"
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
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 disabled:opacity-60"
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
                  required
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 disabled:opacity-60"
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
                disabled={isSubmitting}
                className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 disabled:opacity-60"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-white text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-3 py-2 bg-secondary/50 border border-primary/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-primary/50 min-h-[150px] resize-none disabled:opacity-60"
              />
            </div>

            {status === 'success' && (
              <p
                role="status"
                className="text-primary text-sm bg-primary/10 border border-primary/30 rounded-md px-4 py-3"
              >
                Merci, votre message a bien été envoyé. Je vous réponds au plus
                vite.
              </p>
            )}

            {status === 'error' && (
              <p
                role="alert"
                className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-md px-4 py-3"
              >
                {FORMSPREE_ID
                  ? "Une erreur est survenue. Merci de réessayer ou de m'écrire directement à arthur.reynet@gmail.com."
                  : "Le formulaire n'est pas encore configuré. Écrivez-moi à arthur.reynet@gmail.com."}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="group bg-primary text-secondary hover:bg-primary/90 px-6 py-3 text-base font-medium rounded-md transition-colors duration-200 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi…' : 'Envoyer'}
                <SendIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
