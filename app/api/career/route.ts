import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function isAllowedResumeType(file: File) {
  const name = file.name.toLowerCase();
  const allowedExt = name.endsWith('.pdf') || name.endsWith('.doc') || name.endsWith('.docx');
  const allowedMime =
    file.type === 'application/pdf' ||
    file.type === 'application/msword' ||
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.type === '';
  return allowedExt && allowedMime;
}

export async function POST(req: Request) {
  const redirectBase = new URL('/career#apply', req.url);

  try {
    const form = await req.formData();

    const fullName = String(form.get('fullName') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const resume = form.get('resume');

    if (!fullName || !email || !phone) {
      return NextResponse.redirect(new URL('/career?error=1#apply', req.url), { status: 303 });
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      return NextResponse.redirect(new URL('/career?error=1#apply', req.url), { status: 303 });
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.redirect(new URL('/career?error=1#apply', req.url), { status: 303 });
    }

    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.redirect(new URL('/career?error=1#apply', req.url), { status: 303 });
    }

    if (!isAllowedResumeType(resume)) {
      return NextResponse.redirect(new URL('/career?error=1#apply', req.url), { status: 303 });
    }

    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT ?? '465');
    const smtpSecure = (process.env.SMTP_SECURE ?? 'true') === 'true';
    const smtpUser = getEnv('SMTP_USER');
    const smtpPass = getEnv('SMTP_PASS');
    const mailTo = getEnv('CAREERS_MAIL_TO');
    const mailFrom = process.env.CAREERS_MAIL_FROM ?? smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `Teacher Application: ${fullName}`,
      text: [
        'New teacher application received.',
        '',
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phoneDigits}`,
        '',
        'Resume attached.',
      ].join('\n'),
      attachments: [
        {
          filename: resume.name || 'resume',
          content: resumeBuffer,
        },
      ],
    });

    return NextResponse.redirect(new URL('/career?success=1#apply', req.url), { status: 303 });
  } catch {
    redirectBase.searchParams.set('error', '1');
    return NextResponse.redirect(redirectBase, { status: 303 });
  }
}

