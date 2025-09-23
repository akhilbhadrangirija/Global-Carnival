import { NextResponse } from 'next/server';
import { verifyOtpCodeWithState, issueVerifiedToken } from '@/lib/otp';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, code, stateToken } = body;

    if (!email || !code || !stateToken) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const result = verifyOtpCodeWithState({ email, code, stateToken });
    if (!result.ok) {
      return NextResponse.json({ message: result.error || 'Invalid code' }, { status: 400 });
    }

    const verifiedToken = issueVerifiedToken(email);
    return NextResponse.json({ verifiedToken }, { status: 200 });
  } catch (error) {
    console.error('OTP verify error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}


