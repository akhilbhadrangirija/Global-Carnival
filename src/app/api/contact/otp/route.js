import { NextResponse } from 'next/server';
import { createOtpState } from '@/lib/otp';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const { code, stateToken } = createOtpState(email);

    const emailResult = await sendEmail(email, 'emailOtp', { code });
    if (!emailResult.success) {
      return NextResponse.json({ message: 'Failed to send OTP' }, { status: 500 });
    }

    return NextResponse.json({ stateToken }, { status: 200 });
  } catch (error) {
    console.error('OTP send error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}


