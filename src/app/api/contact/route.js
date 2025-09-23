import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, shopName, phone } = body;

    // Basic validation
    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      message,
      shopName: shopName || 'Not provided',
      phone: phone || 'Not provided',
      timestamp: new Date().toISOString(),
    });

    // Send email notification to admin
    const adminEmailResult = await sendEmail(
      process.env.ADMIN_EMAIL || 'contact@globalcarnivaljeddah.com',
      'contactForm',
      { name, email, message, shopName, phone }
    );

    if (!adminEmailResult.success) {
      console.error('Failed to send admin notification:', adminEmailResult.error);
      // Continue processing even if admin email fails
    }

    // Send confirmation email to user
    const userEmailResult = await sendEmail(
      email,
      'confirmation',
      { name, email, message, shopName, phone }
    );

    if (!userEmailResult.success) {
      console.error('Failed to send user confirmation:', userEmailResult.error);
      // Continue processing even if user email fails
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

