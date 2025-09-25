'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MessageCircle, X, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactSuccess } from '@/components/ui/ContactSuccess';

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const [otpStatus, setOtpStatus] = useState('idle');
  const [otpError, setOtpError] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpStateToken, setOtpStateToken] = useState('');
  const [verifiedToken, setVerifiedToken] = useState('');
  const [step, setStep] = useState(1);
  const [otpCooldown, setOtpCooldown] = useState(0);
  const otpTimerRef = useRef(null);
  const autoOpenTimerRef = useRef(null);
  const AUTO_OPEN_SESSION_KEY = 'contactWidgetAutoOpened';

  const onSubmit = async (data) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      if (!verifiedToken) {
        setErrorMessage('Please verify your email via OTP before submitting.');
        setSubmitStatus('error');
        return;
      }
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-verified-token': verifiedToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    }
  };

  const handleToggle = () => {
    if (autoOpenTimerRef.current) {
      clearTimeout(autoOpenTimerRef.current);
      autoOpenTimerRef.current = null;
      try { sessionStorage.setItem(AUTO_OPEN_SESSION_KEY, 'true'); } catch {}
    }
    if (isOpen) {
      setIsOpen(false);
      setSubmitStatus('idle');
      setErrorMessage('');
    } else {
      setIsOpen(true);
      try { sessionStorage.setItem(AUTO_OPEN_SESSION_KEY, 'true'); } catch {}
    }
  };

  const handleSendOtp = async () => {
    setOtpError('');
    const email = getValues('email');
    if (!email) {
      setOtpError('Enter your email first');
      return;
    }
    if (otpCooldown > 0) return;
    setOtpStatus('sending');
    try {
      const res = await fetch('/api/contact/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to send OTP');
      setOtpStateToken(data.stateToken);
      setOtpStatus('sent');
      setOtpCooldown(40);
      if (otpTimerRef.current) clearInterval(otpTimerRef.current);
      otpTimerRef.current = setInterval(() => {
        setOtpCooldown((s) => {
          if (s <= 1) {
            clearInterval(otpTimerRef.current);
            otpTimerRef.current = null;
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } catch (e) {
      setOtpError(e.message);
      setOtpStatus('error');
    }
  };

  const handleVerifyOtp = async () => {
    setOtpError('');
    const email = getValues('email');
    if (!email || !otpCode || !otpStateToken) {
      setOtpError('Enter the code sent to your email');
      return;
    }
    setOtpStatus('verifying');
    try {
      const res = await fetch('/api/contact/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: otpCode, stateToken: otpStateToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Invalid code');
      setVerifiedToken(data.verifiedToken);
      setOtpStatus('verified');
      setStep(2);
    } catch (e) {
      setOtpError(e.message);
      setOtpStatus('error');
    }
  };

  useEffect(() => {
    return () => {
      if (otpTimerRef.current) clearInterval(otpTimerRef.current);
    };
  }, []);

  // Auto-open the widget once per session, 5 seconds after first visit
  useEffect(() => {
    try {
      const alreadyOpened = sessionStorage.getItem(AUTO_OPEN_SESSION_KEY);
      if (!alreadyOpened) {
        autoOpenTimerRef.current = setTimeout(() => {
          setIsOpen(true);
          try { sessionStorage.setItem(AUTO_OPEN_SESSION_KEY, 'true'); } catch {}
        }, 5000);
      }
    } catch {}
    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
        autoOpenTimerRef.current = null;
      }
    };
  }, []);

  // Clear name field when transitioning to step 2 to prevent autofill issues
  useEffect(() => {
    if (step === 2) {
      setValue('name', '');
    }
  }, [step, setValue]);

  const formVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 200,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      {/* Floating Contact Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 flex items-center gap-2"
        variants={iconVariants}
        whileHover="hover"
        whileTap="tap"
        aria-label="Open contact form"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </motion.div>
        <span className="font-medium text-sm hidden sm:inline">
          {isOpen ? 'Close' : 'Contact Us'}
        </span>
      </motion.button>

      {/* Overlay and Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleToggle}
            />

            {/* Contact Form */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[90vh] overflow-hidden"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6 pb-8 max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <MessageCircle size={24} className="text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
                  </div>
                  <button
                    onClick={handleToggle}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close contact form"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>

                {/* Form Content */}
                <div className="space-y-6">
                  {submitStatus === 'success' ? (
                    <ContactSuccess onReset={() => setSubmitStatus('idle')} />
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {step === 1 ? (
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="your.email@example.com"
                          />
                          {errors.email && (<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>)}
                          <div className="mt-3 flex items-center gap-2">
                            <motion.button
                              type="button"
                              onClick={handleSendOtp}
                              disabled={otpStatus === 'sending' || otpStatus === 'verified' || otpCooldown > 0}
                              className="px-3 py-2 bg-blue-600 text-white rounded-md disabled:opacity-60"
                              whileHover={{ scale: otpStatus === 'sending' || otpStatus === 'verified' ? 1 : 1.02 }}
                              whileTap={{ scale: otpStatus === 'sending' || otpStatus === 'verified' ? 1 : 0.98 }}
                            >
                              {otpStatus === 'verified' ? 'Verified' : otpStatus === 'sending' ? 'Sending...' : otpCooldown > 0 ? `Resend in ${otpCooldown}s` : 'Send OTP'}
                            </motion.button>
                            {(otpStatus === 'sent' || otpStatus === 'verifying' || otpStatus === 'error') && (
                              <>
                                <input
                                  value={otpCode}
                                  onChange={(e) => setOtpCode(e.target.value)}
                                  placeholder="Enter code"
                                  className="w-32 px-3 py-2 border border-gray-300 rounded-md"
                                />
                                <motion.button
                                  type="button"
                                  onClick={handleVerifyOtp}
                                  disabled={otpStatus === 'verifying'}
                                  className="px-3 py-2 bg-green-600 text-white rounded-md disabled:opacity-60"
                                  whileHover={{ scale: otpStatus === 'verifying' ? 1 : 1.02 }}
                                  whileTap={{ scale: otpStatus === 'verifying' ? 1 : 0.98 }}
                                >
                                  {otpStatus === 'verifying' ? 'Verifying...' : 'Verify'}
                                </motion.button>
                              </>
                            )}
                          </div>
                          {otpError && <p className="mt-1 text-sm text-red-600">{otpError}</p>}
                          <div className="mt-6">
                            <motion.button
                              type="button"
                              onClick={() => setStep(2)}
                              disabled={otpStatus !== 'verified'}
                              className="w-full bg-gray-900 text-white rounded-lg py-3 disabled:opacity-60"
                              whileHover={{ scale: otpStatus !== 'verified' ? 1 : 1.02 }}
                              whileTap={{ scale: otpStatus !== 'verified' ? 1 : 0.98 }}
                            >
                              Continue
                            </motion.button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                            <input
                              {...register('name', { required: 'Name is required' })}
                              type="text"
                              id="name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                              placeholder="Your full name"
                              autoComplete="off"
                            />
                            {errors.name && (<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>)}
                          </div>
                          <div>
                            <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-2">Shop Name</label>
                            <input
                              {...register('shopName')}
                              type="text"
                              id="shopName"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                              placeholder="Your shop or business name (optional)"
                            />
                            {errors.shopName && (<p className="mt-1 text-sm text-red-600">{errors.shopName.message}</p>)}
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input
                              {...register('phone', {
                                required: 'Phone is required',
                                pattern: { value: /^[\+]?[1-9][\d]{0,15}$/, message: 'Please enter a valid phone number' },
                              })}
                              type="tel"
                              id="phone"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                              placeholder="+966 XX XXX XXXX (optional)"
                            />
                            {errors.phone && (<p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>)}
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea
                              {...register('message', { required: 'Message is required' })}
                              id="message"
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                              placeholder="Tell us how we can help you..."
                            />
                            {errors.message && (<p className="mt-1 text-sm text-red-600">{errors.message.message}</p>)}
                          </div>
                          {submitStatus === 'error' && errorMessage && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                              <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                              <p className="text-sm text-red-600">{errorMessage}</p>
                            </motion.div>
                          )}
                          <div className="flex gap-3">
                            <motion.button type="button" onClick={() => setStep(1)} className="flex-1 bg-gray-200 text-gray-900 rounded-lg py-3">Back</motion.button>
                            <motion.button
                              type="submit"
                              disabled={submitStatus === 'loading'}
                              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 disabled:cursor-not-allowed"
                              whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                              whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
                            >
                              {submitStatus === 'loading' ? (
                                <div className="flex items-center justify-center gap-2"><Loader2 size={20} className="animate-spin" /><span>Sending...</span></div>
                              ) : (
                                <div className="flex items-center justify-center gap-2"><Send size={20} /><span>Send Message</span></div>
                              )}
                            </motion.button>
                          </div>
                        </>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

