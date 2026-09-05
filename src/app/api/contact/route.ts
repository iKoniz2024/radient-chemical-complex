import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      )
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpUser || !smtpPass) {
      console.error("Nodemailer SMTP credentials (SMTP_USER / SMTP_PASS) are missing in environment variables.")
      return NextResponse.json(
        { 
          error: "Email server credentials are not configured. Please set SMTP_USER and SMTP_PASS in .env.local" 
        },
        { status: 500 }
      )
    }

    const smtpHost = process.env.SMTP_HOST || "mail.radiantgroup-bd.com"
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10)
    const isSecure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === "true" : smtpPort === 465
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@radiantgroup-bd.com"
    const fromName = process.env.SMTP_FROM_NAME || "Radiant Contact Form"

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const info = await transporter.sendMail({
      from: `"${fromName}" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background-color: #0A1930; color: #ffffff; padding: 28px; text-align: center; }
              .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; }
              .header p { margin: 6px 0 0 0; font-size: 13px; color: #D99B22; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
              .content { padding: 32px 28px; }
              .field-group { margin-bottom: 20px; }
              .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
              .field-value { font-size: 15px; color: #0f172a; font-weight: 500; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #f1f5f9; }
              .message-box { font-size: 15px; color: #0f172a; line-height: 1.6; background: #f8fafc; padding: 16px; border-radius: 10px; border-left: 4px solid #D99B22; white-space: pre-wrap; }
              .footer { background-color: #f8fafc; padding: 16px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Radiant Chemical Complex</h1>
                <p>Website Contact Inquiry</p>
              </div>
              <div class="content">
                <div class="field-group">
                  <div class="field-label">Sender Name</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field-group">
                  <div class="field-label">Email Address</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></div>
                </div>

                ${company ? `
                <div class="field-group">
                  <div class="field-label">Company / Factory</div>
                  <div class="field-value">${company}</div>
                </div>
                ` : ''}

                ${phone ? `
                <div class="field-group">
                  <div class="field-label">Phone Number</div>
                  <div class="field-value">${phone}</div>
                </div>
                ` : ''}

                <div class="field-group">
                  <div class="field-label">Message Content</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                This message was sent from the Radiant Chemical Complex website contact form using Nodemailer.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (err: unknown) {
    console.error("Error sending email via Nodemailer:", err)
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error"
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
