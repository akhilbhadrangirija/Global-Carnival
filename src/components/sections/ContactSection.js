'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { ContactSuccess } from '@/components/ui/ContactSuccess';

export function ContactSection() {
  const t = useTranslations();
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    getValues,
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

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I've visited the Global Carnival Jeddah website and would like to get in touch.`
    );
    window.open(`https://wa.me/+971502755860?text=${message}`, '_blank');
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about Global Carnival Jeddah? Want to learn more about our pavilions, activities, or partnership opportunities? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          {submitStatus === 'success' ? (
            <ContactSuccess onReset={() => setSubmitStatus('idle')} />
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 ? (
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <Input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      id="email"
                      type="email"
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                    <div className="mt-3 flex items-center gap-2">
                      <Button type="button" onClick={handleSendOtp} disabled={otpStatus === 'sending' || otpStatus === 'verified' || otpCooldown > 0}>
                        {otpStatus === 'verified' ? 'Verified' : otpStatus === 'sending' ? 'Sending...' : otpCooldown > 0 ? `Resend in ${otpCooldown}s` : 'Send OTP'}
                      </Button>
                      {(otpStatus === 'sent' || otpStatus === 'verifying' || otpStatus === 'error') && (
                        <>
                          <Input
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            placeholder="Enter code"
                            className="w-32"
                          />
                          <Button type="button" onClick={handleVerifyOtp} disabled={otpStatus === 'verifying'}>
                            {otpStatus === 'verifying' ? 'Verifying...' : 'Verify'}
                          </Button>
                        </>
                      )}
                    </div>
                    {otpError && <p className="mt-1 text-sm text-red-600">{otpError}</p>}
                    <div className="mt-6">
                      <Button type="button" onClick={() => setStep(2)} disabled={otpStatus !== 'verified'} className="w-full">
                        Continue
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.name')} *
                        </label>
                        <Input
                          {...register('name', { required: 'Name is required' })}
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.phone')} *
                        </label>
                        <Input
                          {...register('phone', {
                            required: 'Phone is required',
                            pattern: {
                              value: /^[\+]?[1-9][\d]{0,15}$/,
                              message: 'Please enter a valid phone number',
                            },
                          })}
                          id="phone"
                          type="tel"
                          className="w-full"
                          placeholder="+966 XX XXX XXXX (optional)"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="shopName" className="block text-sm font-medium text-gray-700 mb-2">
                          Shop Name
                        </label>
                        <Input
                          {...register('shopName')}
                          id="shopName"
                          type="text"
                          className="w-full"
                          placeholder="Your shop or business name (optional)"
                        />
                        {errors.shopName && (
                          <p className="mt-1 text-sm text-red-600">{errors.shopName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        {...register('message', { required: 'Message is required' })}
                        id="message"
                        rows={6}
                        className="w-full"
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    {submitStatus === 'error' && errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg"
                      >
                        <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-600">{errorMessage}</p>
                      </motion.div>
                    )}

                    <div className="flex gap-3">
                      <Button type="button" onClick={() => setStep(1)} variant="secondary" className="flex-1">
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={submitStatus === 'loading'}
                        className="flex-1 group"
                        size="lg"
                      >
                        {submitStatus === 'loading' ? (
                          <>
                            <Loader2 size={20} className="animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </form>

              {/* WhatsApp Quick Contact */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-semibold text-green-800">
                  Quick Chat on WhatsApp
                </h4>
              </div>
              <p className="text-green-700 mb-4">
                Prefer to chat? Send us a quick message on WhatsApp and we&apos;ll respond right away.
              </p>
              <Button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Chat on WhatsApp
              </Button>
              </div>
            </motion.div>
          )}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="text-primary p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      M-09, Arabilla Building, Hor Al Anz East, Dubai -UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Phone
                    </h4>
                    <a 
                      href="tel:+971503545972" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +971 50 354 5972
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h4>
                    <a 
                      href="mailto:info@globalcarnivaljeddah.com" 
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      info@globalcarnivaljeddah.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Hours
                    </h4>
                    <p className="text-gray-600">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Location
              </h4>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.2967310980894!2d39.198796900000005!3d21.5743375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d100783b5e59%3A0x390c13690b4c7c75!2scarnival%20Jeddah!5e0!3m2!1sen!2sin!4v1756806397206!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carnival Jeddah Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
