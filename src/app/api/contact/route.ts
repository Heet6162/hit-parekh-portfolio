import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // ── Validation ──────────────────────────────────────────────
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (minimum 2 characters)." },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please enter a message subject (minimum 3 characters)." },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message containing at least 10 characters." },
        { status: 400 }
      );
    }

    const sanitized = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 150),
      subject: subject.trim().slice(0, 200),
      message: message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
    };

    // ── Nodemailer transporter ───────────────────────────────────
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "parekhheet1@gmail.com";

    if (gmailUser && gmailPass && gmailPass !== "your_gmail_app_password_here") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      // ── Email to Hit Parekh (notification) ───────────────────
      await transporter.sendMail({
        from: `"Portfolio Contact" <${gmailUser}>`,
        to: recipientEmail,
        replyTo: sanitized.email,
        subject: `📩 New Portfolio Message: ${sanitized.subject}`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #05070f; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0d1527, #111827); padding: 32px 32px 24px; border-bottom: 1px solid #1e293b; text-align: center;">
              <div style="display: inline-block; background: linear-gradient(135deg, #38bdf8, #8b5cf6); padding: 2px; border-radius: 14px; margin-bottom: 16px;">
                <div style="background: #0d1527; border-radius: 12px; padding: 8px 18px;">
                  <span style="font-size: 18px; font-weight: 900; letter-spacing: -0.5px; background: linear-gradient(135deg, #38bdf8, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">HP</span>
                </div>
              </div>
              <h2 style="color: #f1f5f9; margin: 0; font-size: 22px; font-weight: 700;">New Portfolio Inquiry</h2>
              <p style="color: #64748b; margin: 6px 0 0; font-size: 13px;">Someone reached out through your portfolio</p>
            </div>

            <!-- Body -->
            <div style="padding: 28px 32px;">

              <!-- Sender Info -->
              <div style="background: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                <p style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-family: monospace;">Sender Details</p>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; width: 90px; font-family: monospace;">Name</td>
                    <td style="padding: 6px 0; color: #f1f5f9; font-size: 14px; font-weight: 600;">${sanitized.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-family: monospace;">Email</td>
                    <td style="padding: 6px 0;"><a href="mailto:${sanitized.email}" style="color: #38bdf8; text-decoration: none; font-size: 14px;">${sanitized.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-family: monospace;">Subject</td>
                    <td style="padding: 6px 0; color: #f1f5f9; font-size: 14px;">${sanitized.subject}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-family: monospace;">Received</td>
                    <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-family: monospace;">${new Date(sanitized.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" })}</td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="background: #0d1527; border: 1px solid #1e293b; border-left: 3px solid #38bdf8; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-family: monospace;">Message</p>
                <p style="color: #e2e8f0; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${sanitized.message}</p>
              </div>

              <!-- Reply CTA -->
              <div style="text-align: center;">
                <a href="mailto:${sanitized.email}?subject=Re: ${encodeURIComponent(sanitized.subject)}" style="display: inline-block; background: linear-gradient(135deg, #38bdf8, #6366f1, #8b5cf6); color: white; text-decoration: none; padding: 13px 32px; border-radius: 10px; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">
                  ↩ Reply to ${sanitized.name}
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #0a0f1d; padding: 16px 32px; border-top: 1px solid #1e293b; text-align: center;">
              <p style="color: #334155; font-size: 11px; margin: 0; font-family: monospace;">Hit Parekh Portfolio • parekhheet1@gmail.com • Anand, Gujarat, India</p>
            </div>
          </div>
        `,
      });

      // ── Auto-reply to sender ──────────────────────────────────
      await transporter.sendMail({
        from: `"Hit Parekh" <${gmailUser}>`,
        to: sanitized.email,
        subject: `✅ Got your message, ${sanitized.name}! — Hit Parekh`,
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #05070f; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
            <div style="background: linear-gradient(135deg, #0d1527, #111827); padding: 32px; border-bottom: 1px solid #1e293b; text-align: center;">
              <div style="display: inline-block; background: linear-gradient(135deg, #38bdf8, #8b5cf6); padding: 2px; border-radius: 14px; margin-bottom: 16px;">
                <div style="background: #0d1527; border-radius: 12px; padding: 8px 18px;">
                  <span style="font-size: 18px; font-weight: 900; background: linear-gradient(135deg, #38bdf8, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">HP</span>
                </div>
              </div>
              <h2 style="color: #f1f5f9; margin: 0; font-size: 22px; font-weight: 700;">Message Received! 🚀</h2>
            </div>
            <div style="padding: 28px 32px; color: #e2e8f0;">
              <p style="font-size: 16px; line-height: 1.7; margin: 0 0 16px;">Hi <strong style="color: #38bdf8;">${sanitized.name}</strong>,</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0 0 20px; color: #cbd5e1;">Thank you for reaching out! I've received your message and will get back to you within <strong style="color: #f1f5f9;">24 hours</strong>.</p>
              <div style="background: #0d1527; border: 1px solid #1e293b; border-radius: 10px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px; font-family: monospace;">Your Subject</p>
                <p style="color: #f1f5f9; font-size: 14px; margin: 0;">${sanitized.subject}</p>
              </div>
              <p style="font-size: 14px; color: #94a3b8; line-height: 1.7;">Meanwhile, explore more of my work on <a href="https://github.com/Heet6162" style="color: #38bdf8;">GitHub</a> or connect on <a href="https://linkedin.com/in/hit-parekh-a34b6031b" style="color: #8b5cf6;">LinkedIn</a>.</p>
              <p style="font-size: 15px; margin: 24px 0 0; color: #e2e8f0;">Best regards,<br><strong style="color: #38bdf8;">Hit Parekh</strong><br><span style="color: #64748b; font-size: 13px;">Full-Stack Web Developer & AI Enthusiast</span></p>
            </div>
            <div style="background: #0a0f1d; padding: 16px 32px; border-top: 1px solid #1e293b; text-align: center;">
              <p style="color: #334155; font-size: 11px; margin: 0; font-family: monospace;">Hit Parekh Portfolio • Anand, Gujarat, India</p>
            </div>
          </div>
        `,
      });

      console.log(`✅ Email sent to ${recipientEmail} from ${sanitized.email}`);
    } else {
      // No email config: log only (dev fallback)
      console.log("📧 [DEV] Email not sent — set GMAIL_APP_PASSWORD in .env.local to enable emails.");
      console.log("Contact form inquiry:", sanitized);
    }

    return NextResponse.json(
      {
        success: true,
        message: `Thank you for reaching out, ${sanitized.name}! Hit Parekh has received your message and will respond shortly. Check your inbox for a confirmation email.`,
        receivedAt: sanitized.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while submitting your message. Please try again or email parekhheet1@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
