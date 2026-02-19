import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { fullName, email, whatsapp, organization, role, country, service, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${fullName}" <${process.env.SMTP_USER}>`,
            to: 'support@ixlconsulting.tech',
            replyTo: email,
            subject: `New Mandate Inquiry from ${fullName} — ${service || 'General'}`,
            text: `
Full Name: ${fullName}
Email: ${email}
WhatsApp: ${whatsapp}
Organization: ${organization}
Role: ${role}
Country: ${country}
Service: ${service}

Message:
${message}
      `,
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send email. Please ensure SMTP settings are configured.',
            error: error.message
        });
    }
}
