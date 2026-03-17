import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: `Method not allowed. Received: ${req.method}`
        });
    }

    const { fullName, email, phone, metadata } = req.body;

    if (!fullName || !email) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const source = metadata?.source || "Brochure Download Form";

    // --- N8N WEBHOOK INTEGRATION ---
    try {
        const nameParts = fullName.trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        const webhookPayload = {
            firstName,
            lastName,
            email,
            phone: phone || "Not provided",
            source: metadata?.source,
            timestamp: metadata?.timestamp
        };

        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        if (webhookUrl) {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(webhookPayload)
            });
        }
    } catch (error) {
        console.error('Error sending data to n8n webhook:', error);
    }
    // --- END N8N WEBHOOK INTEGRATION ---

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
            subject: `New Lead: ${fullName} — ${source}`,
            text: `
New Lead Submission

Source: ${source}
Date: ${metadata?.timestamp || new Date().toISOString()}

Full Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Please manually send the brochure to the user at ${email} within 24 hours.
      `,
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Lead sent successfully' });
    } catch (error: any) {
        console.error('Error sending lead email:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send lead email. Please ensure SMTP settings are configured.',
            error: error.message
        });
    }
}
