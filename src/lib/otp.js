import crypto from 'crypto';

const OTP_SECRET = process.env.OTP_SECRET || process.env.SMTP_PASS || 'dev-secret-change-me';

const base64url = (input) =>
  Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

const fromBase64url = (input) =>
  Buffer.from(input.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

export const generateOtpCode = (digits = 6) => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return String(Math.floor(min + Math.random() * (max - min + 1)));
};

const hashOtp = (code, salt) =>
  crypto.createHash('sha256').update(`${code}:${salt}`).digest('hex');

const sign = (payload) => {
  const header = { alg: 'HS256', typ: 'JWT' };
  const headerB64 = base64url(JSON.stringify(header));
  const payloadB64 = base64url(JSON.stringify(payload));
  const data = `${headerB64}.${payloadB64}`;
  const signature = crypto.createHmac('sha256', OTP_SECRET).update(data).digest('base64url');
  return `${data}.${signature}`;
};

const verify = (token) => {
  try {
    const [headerB64, payloadB64, signature] = token.split('.');
    if (!headerB64 || !payloadB64 || !signature) return null;
    const data = `${headerB64}.${payloadB64}`;
    const expected = crypto.createHmac('sha256', OTP_SECRET).update(data).digest('base64url');
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
    const payload = JSON.parse(fromBase64url(payloadB64).toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
};

export const createOtpState = (email, ttlMs = 5 * 60 * 1000) => {
  const salt = crypto.randomBytes(8).toString('hex');
  const code = generateOtpCode(6);
  const otpHash = hashOtp(code, salt);
  const exp = Date.now() + ttlMs;
  const stateToken = sign({ email, otpHash, salt, exp, scope: 'contact-otp-state' });
  return { code, stateToken };
};

export const verifyOtpCodeWithState = ({ email, code, stateToken }) => {
  const state = verify(stateToken);
  if (!state || state.scope !== 'contact-otp-state') return { ok: false, error: 'Invalid state' };
  if (state.email !== email) return { ok: false, error: 'Email mismatch' };
  const computed = hashOtp(code, state.salt);
  if (computed !== state.otpHash) return { ok: false, error: 'Incorrect code' };
  return { ok: true };
};

export const issueVerifiedToken = (email, ttlMs = 10 * 60 * 1000) => {
  const exp = Date.now() + ttlMs;
  return sign({ email, exp, scope: 'contact-otp-verified' });
};

export const verifyVerifiedToken = (token) => {
  const payload = verify(token);
  if (!payload || payload.scope !== 'contact-otp-verified') return null;
  return payload;
};


