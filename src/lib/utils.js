import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(dateString, locale = 'en') {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTime(timeString) {
  return timeString;
}

export function getDirection(locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getOppositeLocale(locale) {
  return locale === 'en' ? 'ar' : 'en';
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function generateWhatsAppMessage(name, email, phone, topic, message) {
  const text = `Hello! I&apos;m ${name} and I&apos;d like to inquire about ${topic}.

Contact Information:
- Email: ${email}
- Phone: ${phone}

Message:
${message}

Thank you!`;
  
  return encodeURIComponent(text);
}
