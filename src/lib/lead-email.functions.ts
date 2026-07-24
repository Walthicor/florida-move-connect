import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type LeadEmailPayload = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  from_zip?: string | null;
  to_zip?: string | null;
  home_size?: string | null;
  move_type?: string | null;
  move_date?: string | null;
  flexibility?: string | null;
  language?: string | null;
  source_path?: string | null;
};

const TO = ["mardigitalcali@gmail.com"];
const FROM = "Florida Movers Direct <leads@floridamoversdirect.com>";

const leadEmailSchema = z.object({
  name: z.string().trim().min(2).max(100).nullable().optional(),
  email: z.string().trim().email().max(255).nullable().optional(),
  phone: z.string().trim().min(7).max(30).nullable().optional(),
  from_zip: z.string().trim().min(2).max(80).nullable().optional(),
  to_zip: z.string().trim().min(2).max(80).nullable().optional(),
  home_size: z.string().trim().min(1).max(80).nullable().optional(),
  move_type: z.string().trim().min(1).max(80).nullable().optional(),
  move_date: z.string().trim().max(40).nullable().optional(),
  flexibility: z.string().trim().max(80).nullable().optional(),
  language: z.string().trim().max(10).nullable().optional(),
  source_path: z.string().trim().max(300).nullable().optional(),
});

function esc(v: unknown): string {
  if (v == null || v === "") return "—";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildInternalHtml(p: LeadEmailPayload): string {
  const rows: Array<[string, unknown]> = [
    ["Name", p.name],
    ["Phone", p.phone],
    ["Email", p.email],
    ["Moving From", p.from_zip],
    ["Moving To", p.to_zip],
    ["Property Type", p.move_type],
    ["Size", p.home_size],
    ["Move Date", p.move_date],
    ["Flexibility", p.flexibility],
    ["Language", p.language],
    ["Source Page", p.source_path],
  ];
  const tr = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#0B1F3A;width:160px">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#1F2937">${esc(v)}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#F4F7FB;font-family:Arial,sans-serif">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
      <div style="background:#F04800;color:#fff;padding:18px 22px;font-size:18px;font-weight:700">
        New Lead — Florida Movers Direct
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${tr}</table>
      <div style="padding:14px 22px;color:#6b7280;font-size:12px;background:#F4F7FB">
        Sent automatically from floridamoversdirect.com
      </div>
    </div></body></html>`;
}

function buildInternalText(p: LeadEmailPayload): string {
  return [
    `Name: ${p.name ?? "—"}`,
    `Phone: ${p.phone ?? "—"}`,
    `Email: ${p.email ?? "—"}`,
    `Moving From: ${p.from_zip ?? "—"}`,
    `Moving To: ${p.to_zip ?? "—"}`,
    `Property Type: ${p.move_type ?? "—"}`,
    `Size: ${p.home_size ?? "—"}`,
    `Move Date: ${p.move_date ?? "—"}`,
    `Flexibility: ${p.flexibility ?? "—"}`,
    `Language: ${p.language ?? "—"}`,
    `Source Page: ${p.source_path ?? "—"}`,
  ].join("\n");
}

function buildClientEmail(p: LeadEmailPayload): { subject: string; html: string; text: string } {
  const isEs = p.language === "es";
  const firstName = (p.name || "").split(" ")[0] || (isEs ? "cliente" : "there");

  const subject = isEs
    ? "Recibimos su solicitud — Florida Movers Direct"
    : "We received your request — Florida Movers Direct";

  const t = isEs
    ? {
        hello: `Hola ${firstName},`,
        thanks:
          "Gracias por contactar a Florida Movers Direct. Recibimos su solicitud de cotización y un asesor licenciado se comunicará con usted en breve.",
        summary: "Resumen de su solicitud",
        next: "¿Qué sigue?",
        n1: "Hasta 4 empresas de mudanza licenciadas de Florida revisarán su solicitud.",
        n2: "Recibirá una llamada, mensaje o correo en breve con cotizaciones por escrito.",
        n3: "Sin obligación de compra — compare y elija la mejor opción.",
        support: "Si necesita responder, puede contestar directamente a este correo.",
        signoff: "Equipo Florida Movers Direct",
        rowsLabels: {
          from: "Origen",
          to: "Destino",
          type: "Tipo de propiedad",
          size: "Tamaño",
          date: "Fecha preferida",
          phone: "Teléfono",
        },
      }
    : {
        hello: `Hi ${firstName},`,
        thanks:
          "Thanks for contacting Florida Movers Direct. We received your quote request and a licensed advisor will reach out to you shortly.",
        summary: "Your request summary",
        next: "What happens next?",
        n1: "Up to 4 licensed Florida moving companies will review your request.",
        n2: "You'll get a call, text or email shortly with written quotes.",
        n3: "No obligation — compare and choose the best option for you.",
        support: "If you need to reply, you can respond directly to this email.",
        signoff: "The Florida Movers Direct Team",
        rowsLabels: {
          from: "Moving From",
          to: "Moving To",
          type: "Property Type",
          size: "Size",
          date: "Preferred Date",
          phone: "Phone",
        },
      };

  const rows: Array<[string, unknown]> = [
    [t.rowsLabels.from, p.from_zip],
    [t.rowsLabels.to, p.to_zip],
    [t.rowsLabels.type, p.move_type],
    [t.rowsLabels.size, p.home_size],
    [t.rowsLabels.date, p.move_date],
    [t.rowsLabels.phone, p.phone],
  ];
  const tr = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#0B1F3A;width:160px">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#1F2937">${esc(v)}</td></tr>`,
    )
    .join("");

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#F4F7FB;font-family:Arial,sans-serif;color:#1F2937">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
      <div style="background:linear-gradient(135deg,#0B1F3A,#123a6b);color:#fff;padding:22px 24px">
        <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.8">Florida Movers Direct</div>
        <div style="font-size:22px;font-weight:800;margin-top:6px">${isEs ? "¡Solicitud recibida!" : "Request received!"}</div>
      </div>
      <div style="padding:24px">
        <p style="margin:0 0 12px 0;font-size:15px">${t.hello}</p>
        <p style="margin:0 0 18px 0;font-size:15px;line-height:1.55">${t.thanks}</p>

        <div style="margin:18px 0 8px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0B1F3A">${t.summary}</div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">${tr}</table>

        <div style="margin:22px 0 8px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0B1F3A">${t.next}</div>
        <ul style="margin:0 0 8px 20px;padding:0;font-size:14px;line-height:1.6">
          <li>${t.n1}</li>
          <li>${t.n2}</li>
          <li>${t.n3}</li>
        </ul>

        <p style="margin:22px 0 0 0;font-size:13px;color:#6b7280">${t.support}</p>
        <p style="margin:18px 0 0 0;font-size:14px;font-weight:700;color:#0B1F3A">${t.signoff}</p>
      </div>
      <div style="padding:14px 22px;color:#6b7280;font-size:12px;background:#F4F7FB;border-top:1px solid #e5e7eb">
        floridamoversdirect.com
      </div>
    </div></body></html>`;

  const text = [
    t.hello,
    "",
    t.thanks,
    "",
    `${t.rowsLabels.from}: ${p.from_zip ?? "—"}`,
    `${t.rowsLabels.to}: ${p.to_zip ?? "—"}`,
    `${t.rowsLabels.type}: ${p.move_type ?? "—"}`,
    `${t.rowsLabels.size}: ${p.home_size ?? "—"}`,
    `${t.rowsLabels.date}: ${p.move_date ?? "—"}`,
    `${t.rowsLabels.phone}: ${p.phone ?? "—"}`,
    "",
    `- ${t.n1}`,
    `- ${t.n2}`,
    `- ${t.n3}`,
    "",
    t.signoff,
    "floridamoversdirect.com",
  ].join("\n");

  return { subject, html, text };
}

async function sendResend(apiKey: string, payload: Record<string, unknown>): Promise<Response> {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export const sendLeadEmail = createServerFn({ method: "POST" })
  .inputValidator((data: LeadEmailPayload) => leadEmailSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return { sent: false, reason: "missing_api_key" as const };
    }

    // 1) Internal notification to FMD
    const internalSubject = `NEW LEAD: ${data.from_zip || "—"} to ${data.to_zip || "—"}`;
    const internalRes = await sendResend(apiKey, {
      from: FROM,
      to: TO,
      reply_to: data.email || undefined,
      subject: internalSubject,
      html: buildInternalHtml(data),
      text: buildInternalText(data),
    });

    if (!internalRes.ok) {
      const body = await internalRes.text();
      console.error(`Resend internal send failed [${internalRes.status}]: ${body}`);
      return { sent: false, reason: "provider_error" as const, status: internalRes.status };
    }

    // 2) Confirmation to the client (best-effort; do not fail lead if this bounces)
    if (data.email) {
      try {
        const client = buildClientEmail(data);
        const clientRes = await sendResend(apiKey, {
          from: FROM,
          to: [data.email],
          reply_to: "mardigitalcali@gmail.com",
          subject: client.subject,
          html: client.html,
          text: client.text,
        });
        if (!clientRes.ok) {
          const body = await clientRes.text();
          console.error(`Resend client confirmation failed [${clientRes.status}]: ${body}`);
        }
      } catch (err) {
        console.error("Client confirmation email error:", err);
      }
    }

    return { sent: true as const };
  });
