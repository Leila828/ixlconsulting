import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());
  const server = createServer(app);

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { fullName, email, whatsapp, organization, role, country, service, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    try {
      // Configuration for SMTP
      // User needs to provide these in .env
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${fullName}" <${process.env.SMTP_USER}>`,
        to: "support@ixlconsulting.tech",
        replyTo: email,
        subject: `New Mandate Inquiry from ${fullName} — ${service || "General"}`,
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
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email. Please ensure SMTP settings are configured." });
    }
  });

  // API Route for Leads
  app.post("/api/leads", async (req, res) => {
    const { fullName, email, phone, metadata } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
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
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${fullName}" <${process.env.SMTP_USER}>`,
        to: "support@ixlconsulting.tech",
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
      res.status(200).json({ success: true, message: "Lead sent successfully" });
    } catch (error) {
      console.error("Error sending lead email:", error);
      res.status(500).json({ success: false, message: "Failed to send lead email. Please ensure SMTP settings are configured." });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 5000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
