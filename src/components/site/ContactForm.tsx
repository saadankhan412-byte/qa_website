import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FormField, inputClass } from "./FormField";
import {
  contactMessage,
  contactSchema,
  fieldErrors,
  openWhatsApp,
  submitLead,
} from "@/lib/forms";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form).entries()));
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      return;
    }
    setErrors({});
    setStatus("submitting");
    // Open the WhatsApp tab synchronously (user gesture) so popup blockers
    // don't block it after the async submit completes.
    const waWindow = window.open("about:blank", "_blank");
    try {
      const res = await submitLead({ type: "contact", data: parsed.data });
      if (res.ok) {
        openWhatsApp(contactMessage(parsed.data), waWindow);
        setStatus("success");
        form.reset();
      } else {
        waWindow?.close();
        setStatus("error");
      }
    } catch {
      waWindow?.close();
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft" role="status">
        <CheckCircle2 className="mx-auto size-12 text-primary-hover" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-foreground">Message Sent</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="c-name" label="Name" error={errors["name"]}>
          <input id="c-name" name="name" autoComplete="name" className={inputClass} required />
        </FormField>
        <FormField id="c-email" label="Email" error={errors["email"]}>
          <input id="c-email" name="email" type="email" autoComplete="email" className={inputClass} required />
        </FormField>
        <FormField id="c-phone" label="Phone" error={errors["phone"]}>
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} required />
        </FormField>
        <FormField id="c-subject" label="Subject" error={errors["subject"]}>
          <input id="c-subject" name="subject" className={inputClass} required />
        </FormField>
        <FormField id="c-message" label="Message" error={errors["message"]} className="sm:col-span-2">
          <textarea id="c-message" name="message" rows={5} className={inputClass} required />
        </FormField>
      </div>
      {status === "error" && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          We couldn't send your message right now. Please try again or email us directly.
        </p>
      )}
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" && <Loader2 className="animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}
