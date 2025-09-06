# Email Setup for Contact Form

This document explains how to configure email functionality for the contact form using Nodemailer.

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Email Configuration (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com

# Admin Email (where contact form submissions will be sent)
ADMIN_EMAIL=contact@globalcarnivaljeddah.com
```

## Email Provider Setup

### Gmail (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in `SMTP_PASS`

### Outlook/Hotmail

```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
SMTP_FROM=your-email@outlook.com
```

### Custom SMTP (Production)

For production, consider using:
- **SendGrid**: Professional email service
- **Mailgun**: Developer-friendly email API
- **Amazon SES**: AWS email service
- **Resend**: Modern email API

Example SendGrid configuration:
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_FROM=your-verified-email@yourdomain.com
```

## Features

### Admin Notification Email
- Sent to `ADMIN_EMAIL` when someone submits the contact form
- Includes all form data in a beautifully formatted HTML email
- Timestamp in Saudi Arabia timezone

### User Confirmation Email
- Sent to the user who submitted the form
- Professional confirmation message
- Branded with Global Carnival Jeddah styling

## Testing

1. Set up your environment variables
2. Start the development server: `npm run dev`
3. Submit the contact form
4. Check both admin and user email inboxes

## Troubleshooting

### Common Issues

1. **"Invalid login" error**:
   - Check your email and password
   - For Gmail, ensure you're using an App Password, not your regular password

2. **"Connection timeout" error**:
   - Check your SMTP_HOST and SMTP_PORT
   - Ensure your firewall allows outbound connections on port 587

3. **"Authentication failed" error**:
   - Verify your credentials
   - Check if 2FA is enabled and you're using an App Password

### Debug Mode

To enable detailed logging, add this to your `.env.local`:
```bash
NODE_ENV=development
```

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of your main email password
- Consider using environment-specific email services for production
- Implement rate limiting to prevent spam

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Use a professional email service (SendGrid, Mailgun, etc.)
3. Verify your domain for better deliverability
4. Set up proper SPF, DKIM, and DMARC records
5. Monitor email delivery and bounce rates
