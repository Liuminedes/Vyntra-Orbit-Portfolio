import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    // Validación básica server-side
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[Portfolio] New message from ${firstname} ${lastname} — ${service}`,
      html: `
        <div style="font-family: monospace; background: #1c1c22; color: #fff; padding: 24px; border-radius: 12px;">
          <h2 style="color: #bb55ff; margin-top: 0;">New contact from portfolio</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:6px 0; color:#888;">Name</td><td style="padding:6px 0;">${firstname} ${lastname}</td></tr>
            <tr><td style="padding:6px 0; color:#888;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#bb55ff;">${email}</a></td></tr>
            <tr><td style="padding:6px 0; color:#888;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>
            <tr><td style="padding:6px 0; color:#888;">Service</td><td style="padding:6px 0;">${service}</td></tr>
          </table>
          <hr style="border-color:#333; margin: 16px 0;" />
          <h4 style="color:#888; margin-bottom:8px;">Message</h4>
          <p style="background:#27272c; padding:16px; border-radius:8px; margin:0; white-space:pre-wrap;">${message}</p>
          <p style="color:#555; font-size:12px; margin-top:16px;">Sent from Vyntra Orbit Portfolio</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}