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

function buildHtml(p: LeadEmailPayload): string {
  const rows: Array<[string, unknown]> = [
    ["Name", p.name],
    ["Phone", p.phone],
    ["Email", p.email],
    ["Moving From", p.from_zip],
    ["Moving To", p.to_zip],
    ["Home Size", p.home_size],
    ["Move Type", p.move_type],
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

function buildText(p: LeadEmailPayload): string {
  return [
    `Name: ${p.name ?? "—"}`,
    `Phone: ${p.phone ?? "—"}`,
    `Email: ${p.email ?? "—"}`,
    `Moving From: ${p.from_zip ?? "—"}`,
    `Moving To: ${p.to_zip ?? "—"}`,
    `Home Size: ${p.home_size ?? "—"}`,
    `Move Type: ${p.move_type ?? "—"}`,
    `Move Date: ${p.move_date ?? "—"}`,
    `Flexibility: ${p.flexibility ?? "—"}`,
    `Language: ${p.language ?? "—"}`,
    `Source Page: ${p.source_path ?? "—"}`,
  ].join("\n");
}

export const sendLeadEmail = createServerFn({ method: "POST" })
  .inputValidator((data: LeadEmailPayload) => leadEmailSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return { sent: false, reason: "missing_api_key" as const };
    }

    const subject = `NEW LEAD: ${data.from_zip || "—"} to ${data.to_zip || "—"}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: data.email || undefined,
        subject,
        html: buildHtml(data),
        text: buildText(data),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend send failed [${res.status}]: ${body}`);
      return { sent: false, reason: "provider_error" as const, status: res.status };
    }
    return { sent: true as const };
  });
