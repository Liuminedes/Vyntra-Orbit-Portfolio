import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    if (!firstname || !lastname || !email || !phone || !service || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS");
      return Response.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const destino = process.env.EMAIL_TO || process.env.EMAIL_USER;
    const fecha = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });

    await Promise.all([

      // 1. Notificación a Mauricio
      transporter.sendMail({
        from: `"Vyntra Orbit Contact" <${process.env.EMAIL_USER}>`,
        to: destino,
        replyTo: email,
        subject: `[Portfolio] ${firstname} ${lastname} — ${service}`,
        headers: {
          "X-Priority": "1",
          "X-Mailer": "Vyntra Orbit Portfolio",
        },
        html: `
          <!DOCTYPE html>
          <html><head><meta charset="utf-8"></head>
          <body style="margin:0;padding:0;background:#080810;font-family:monospace;">
            <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
              <div style="border-bottom:1px solid #1a1a30;padding-bottom:20px;margin-bottom:24px;">
                <h2 style="color:#8B5CF6;margin:0 0 4px;font-size:18px;">📬 Nuevo contacto desde el portfolio</h2>
                <p style="color:#555;margin:0;font-size:12px;">${fecha}</p>
              </div>
              <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr><td style="padding:8px 0;color:#666;font-size:12px;width:120px;">NOMBRE</td><td style="padding:8px 0;color:#e8e8f0;font-size:14px;font-weight:600;">${firstname} ${lastname}</td></tr>
                <tr><td style="padding:8px 0;color:#666;font-size:12px;">EMAIL</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#8B5CF6;text-decoration:none;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#666;font-size:12px;">TELÉFONO</td><td style="padding:8px 0;color:#e8e8f0;font-size:14px;">${phone}</td></tr>
                <tr><td style="padding:8px 0;color:#666;font-size:12px;">SERVICIO</td><td style="padding:8px 0;"><span style="background:rgba(139,92,246,0.15);color:#8B5CF6;padding:3px 10px;border-radius:100px;font-size:12px;border:1px solid rgba(139,92,246,0.3);">${service}</span></td></tr>
              </table>
              <div style="margin-bottom:24px;">
                <p style="color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 8px;">MENSAJE</p>
                <div style="background:#111120;border:1px solid #1a1a30;border-radius:8px;padding:16px;color:#e8e8f0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
              <div style="text-align:center;padding-top:20px;border-top:1px solid #1a1a30;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(service)} — Vyntra Orbit"
                  style="display:inline-block;background:linear-gradient(135deg,#6C63FF,#5a52e0);color:white;padding:11px 28px;border-radius:6px;text-decoration:none;font-size:13px;letter-spacing:0.1em;">
                  Responder a ${firstname} →
                </a>
              </div>
              <p style="color:#2a2a2a;font-size:11px;text-align:center;margin-top:20px;">Vyntra Orbit Portfolio · vyntra-orbit-portfolio.vercel.app</p>
            </div>
          </body></html>
        `,
      }),

      // 2. Confirmación al cliente
      transporter.sendMail({
        from: `"Vyntra Orbit Studio" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Recibimos tu mensaje — Vyntra Orbit`,
        headers: {
          "X-Priority": "3",
          "X-Mailer": "Vyntra Orbit Portfolio",
        },
        html: `
          <!DOCTYPE html>
          <html><head><meta charset="utf-8"></head>
          <body style="margin:0;padding:0;background:#080810;font-family:monospace;">
            <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
              <div style="text-align:center;margin-bottom:32px;">
                <h1 style="color:#8B5CF6;font-size:22px;margin:0 0 6px;">Vyntra Orbit</h1>
                <p style="color:#555;font-size:11px;margin:0;letter-spacing:0.15em;text-transform:uppercase;">Digital Development Studio</p>
              </div>
              <div style="background:#111120;border:1px solid #1a1a30;border-radius:10px;padding:28px;">
                <h2 style="color:#e8e8f0;font-size:18px;margin:0 0 12px;">Hola, ${firstname} 👋</h2>
                <p style="color:#888;font-size:14px;line-height:1.7;margin:0 0 20px;">
                  Recibimos tu mensaje sobre <strong style="color:#8B5CF6;">${service}</strong>.<br>
                  Te responderemos en menos de <strong style="color:#e8e8f0;">24 horas</strong> con una propuesta detallada.
                </p>
                <div style="background:#0c0c18;border-radius:6px;padding:14px;border-left:3px solid #8B5CF6;">
                  <p style="color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 6px;">Tu mensaje</p>
                  <p style="color:#aaa;font-size:13px;line-height:1.6;margin:0;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;").slice(0, 300)}${message.length > 300 ? "..." : ""}</p>
                </div>
              </div>
              <div style="text-align:center;margin-top:24px;">
                <a href="https://vyntra-orbit-portfolio.vercel.app/work"
                  style="color:#8B5CF6;font-size:12px;text-decoration:none;font-family:monospace;">
                  Ver nuestros trabajos →
                </a>
              </div>
              <p style="color:#2a2a2a;font-size:11px;text-align:center;margin-top:28px;">Si no solicitaste este correo, ignóralo.</p>
            </div>
          </body></html>
        `,
      }),

    ]);

    return Response.json({ ok: true });

  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}