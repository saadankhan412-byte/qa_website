import { z } from "zod";
import { getCourse } from "@/data/site";

/**
 * Form submission layer.
 * Replace `submitLead` with a real integration (email service, CRM, backend)
 * when ready — the forms only depend on this function's contract.
 */

export const freeTrialSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  studentAge: z.string().trim().min(1, "Please enter the student's age").max(20),
  course: z.string().min(1, "Please select a course"),
  preferredDays: z.string().min(1, "Please select preferred days"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().trim().max(1000, "Message is too long").optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  subject: z.string().trim().min(2, "Please enter a subject").max(150),
  message: z.string().trim().min(10, "Please write a short message").max(1500),
});

export type FreeTrialInput = z.infer<typeof freeTrialSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

export type LeadPayload =
  | { type: "free-trial"; data: FreeTrialInput }
  | { type: "contact"; data: ContactInput };

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  // Placeholder: connect to your preferred backend or email service here.
  await new Promise((r) => setTimeout(r, 600));
  if (import.meta.env.DEV) console.info("[lead]", payload.type);
  return { ok: true };
}

/** Academy WhatsApp number in international format without "+" (wa.me format). */
export const WHATSAPP_NUMBER = "923187779954";

export function whatsappUrlFor(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Open WhatsApp in a new tab/window. `preOpened` is a tab opened synchronously
 * during the submit click (avoids popup blockers across the async submit);
 * it is redirected to WhatsApp here. Falls back to a fresh tab, then to the
 * same tab if popups are blocked. On mobile, wa.me hands off to the WhatsApp
 * app; on desktop it opens WhatsApp Web.
 */
export function openWhatsApp(message: string, preOpened?: Window | null): void {
  const url = whatsappUrlFor(message);
  const win = preOpened ?? null;
  if (win && !win.closed) {
    win.opener = null;
    win.location.href = url;
    return;
  }
  const fresh = window.open(url, "_blank");
  if (!fresh) window.location.href = url;
}

export function freeTrialMessage(data: FreeTrialInput): string {
  const courseTitle = getCourse(data.course)?.title ?? data.course;
  return [
    "Assalamualaikum Quran Education Academy,",
    "",
    "I would like to start the 3-Day Free Trial.",
    "",
    `Student Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `WhatsApp / Phone: ${data.phone}`,
    `Student Age: ${data.studentAge}`,
    `Course: ${courseTitle}`,
    `Preferred Days: ${data.preferredDays}`,
    `Preferred Time: ${data.preferredTime}`,
    `Additional Message: ${data.message || "-"}`,
    "",
    "Thank you.",
  ].join("\n");
}

export function contactMessage(data: ContactInput): string {
  return [
    "Assalamualaikum Quran Education Academy,",
    "",
    "I would like to contact you.",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Subject: ${data.subject}`,
    `Message: ${data.message}`,
    "",
    "Thank you.",
  ].join("\n");
}

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "");
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
