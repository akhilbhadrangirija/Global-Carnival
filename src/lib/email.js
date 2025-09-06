import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // For development/testing
    },
  });
};

// Email templates
export const emailTemplates = {
  contactForm: (data) => ({
    subject: `New Contact Form Submission from ${data.name} - Global Carnival Jeddah`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: 'Oswald', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background: white;
              border-radius: 10px;
              padding: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              color: white;
              padding: 20px;
              border-radius: 8px;
              text-align: center;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              margin-bottom: 30px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f8f9fa;
              border-radius: 6px;
              border-left: 4px solid #3b82f6;
            }
            .field-label {
              font-weight: 600;
              color: #374151;
              margin-bottom: 5px;
              text-transform: uppercase;
              font-size: 12px;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #1f2937;
              font-size: 16px;
            }
            .message-content {
              white-space: pre-wrap;
              background-color: white;
              padding: 15px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .timestamp {
              color: #9ca3af;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌍 New Contact Form Submission</h1>
              <p>Global Carnival Jeddah</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${data.name}</div>
              </div>
              
              ${data.shopName ? `
              <div class="field">
                <div class="field-label">Shop Name</div>
                <div class="field-value">${data.shopName}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">
                    ${data.email}
                  </a>
                </div>
              </div>
              
              ${data.phone ? `
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value">
                  <a href="tel:${data.phone}" style="color: #3b82f6; text-decoration: none;">
                    ${data.phone}
                  </a>
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-content">${data.message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This message was sent from the Global Carnival Jeddah contact form.</p>
              <div class="timestamp">
                Received on ${new Date().toLocaleString('en-US', {
                  timeZone: 'Asia/Riyadh',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission - Global Carnival Jeddah

Name: ${data.name}
${data.shopName ? `Shop Name: ${data.shopName}` : ''}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Message: ${data.message}

Received on: ${new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Riyadh',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })}
    `,
  }),

  confirmation: (data) => ({
    subject: 'Thank you for contacting Global Carnival Jeddah!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Global Carnival Jeddah</title>
          <style>
            body {
              font-family: 'Oswald', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background: white;
              border-radius: 10px;
              padding: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              color: white;
              padding: 30px;
              border-radius: 8px;
              text-align: center;
              margin-bottom: 30px;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
            }
            .content {
              margin-bottom: 30px;
            }
            .content h2 {
              color: #1f2937;
              margin-bottom: 20px;
            }
            .content p {
              color: #4b5563;
              margin-bottom: 15px;
              font-size: 16px;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: 600;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌍 Thank You, ${data.name}!</h1>
              <p>Global Carnival Jeddah</p>
            </div>
            
            <div class="content">
              <h2>We've received your message</h2>
              <p>Thank you for reaching out to us! We're excited to hear from you and will get back to you as soon as possible.</p>
              
              <p>In the meantime, feel free to explore more about our amazing cultural extravaganza:</p>
              
              <div style="text-align: center;">
                <a href="https://globalcarnivaljeddah.com" class="cta-button">
                  Visit Our Website
                </a>
              </div>
              
              <p>We look forward to welcoming you to the Global Carnival Jeddah experience!</p>
            </div>
            
            <div class="footer">
              <p>Best regards,<br>The Global Carnival Jeddah Team</p>
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Thank you for contacting Global Carnival Jeddah!

Dear ${data.name},

We've received your message and will get back to you as soon as possible.

In the meantime, feel free to explore more about our amazing cultural extravaganza at: https://globalcarnivaljeddah.com

We look forward to welcoming you to the Global Carnival Jeddah experience!

Best regards,
The Global Carnival Jeddah Team

This is an automated response. Please do not reply to this email.
    `,
  }),
};

// Send email function
export const sendEmail = async (to, template, data) => {
  try {
    const transporter = createTransporter();
    const emailTemplate = emailTemplates[template](data);
    
    const mailOptions = {
      from: {
        name: 'Global Carnival Jeddah',
        address: process.env.SMTP_FROM || process.env.SMTP_USER,
      },
      to,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('Email configuration is valid');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
};
