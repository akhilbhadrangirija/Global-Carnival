'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactSuccess({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-10 text-center border border-green-100"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mx-auto mb-5 ring-8 ring-green-50">
        <CheckCircle size={56} className="text-green-600" />
      </div>
      <h3 className="text-3xl md:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
        Thank you!
      </h3>
      <p className="text-gray-700 text-base md:text-lg mb-8">Your message has been sent successfully. Well get back to you soon.</p>
      {onReset && (
        <Button onClick={onReset} className="inline-flex">Send another message</Button>
      )}
    </motion.div>
  );
}


