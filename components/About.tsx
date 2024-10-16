"use client"

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {t('about.title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg mb-4">
            {t('about.description')}
          </p>
          {/* Add more details about your skills, experience, etc. */}
        </motion.div>
      </div>
    </section>
  );
}