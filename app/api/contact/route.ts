import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key_for_nextjs_build');
const EMAIL_TARGET = 'sushen.d3v@gmail.com';

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || '127.0.0.1';
    
    // Limit to 3 requests per 10 minutes (600,000 ms)
    const isAllowed = rateLimit(ip, 3, 600000);
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again after 10 minutes.' },
        { status: 429 }
      );
    }

    // 2. Parse request payload
    const body = await request.json();
    const { name, email, message, _honeypot } = body;

    // 3. Honeypot check (spam prevention)
    // If the honeypot field is filled, silently ignore it and return 200 OK
    if (_honeypot && _honeypot.trim() !== '') {
      console.warn(`Honeypot triggered by IP: ${ip}`);
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    }

    // 4. Server-Side Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name must be at least 2 characters.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 });
    }

    // 5. Send Email via Resend
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not defined.');
      return NextResponse.json({ error: 'Internal server error. Mail service unavailable.' }, { status: 500 });
    }

    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: EMAIL_TARGET,
      replyTo: `${name} <${email}>`,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
              .header { font-size: 18px; font-weight: bold; border-bottom: 2px solid #4961DC; padding-bottom: 10px; margin-bottom: 20px; color: #4961DC; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; font-size: 14px; color: #555; }
              .value { font-size: 16px; margin-top: 5px; }
              .message { white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #e3e3e3; }
              .footer { font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">New Contact Form Message</div>
              
              <div class="field">
                <div class="label">Sender Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Sender Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value message">${message}</div>
              </div>
              
              <div class="footer">
                Submitted from IP: ${ip} on ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend email error:', emailResponse.error);
      return NextResponse.json({ error: emailResponse.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error: any) {
    console.error('Unhandled route error:', error);
    return NextResponse.json({ error: 'An unexpected server error occurred.' }, { status: 500 });
  }
}
