import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import { FormField, inputClass } from "./FormField";
import { courses, preferredDays, preferredTimes } from "@/data/site";
import {
  fieldErrors,
  freeTrialMessage,
  freeTrialSchema,
  openWhatsApp,
  submitLead,
} from "@/lib/forms";

interface Props {
  defaultCourse?: string | undefined;
  compact?: boolean | undefined;
}

export function FreeTrialForm({ defaultCourse = "" }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = freeTrialSchema.safeParse(raw);
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
      const res = await submitLead({ type: "free-trial", data: parsed.data });
      if (res.ok) {
        openWhatsApp(freeTrialMessage(parsed.data), waWindow);
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
        <h3 className="mt-4 text-2xl font-bold text-foreground">Request Received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for registering for your free trial. We will contact you shortly to arrange
          your first class.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton />
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="ft-fullName" label="Full Name" error={errors["fullName"]}>
          <input id="ft-fullName" name="fullName" autoComplete="name" className={inputClass} required />
        </FormField>
        <FormField id="ft-email" label="Email" error={errors["email"]}>
          <input id="ft-email" name="email" type="email" autoComplete="email" className={inputClass} required />
        </FormField>
        <FormField id="ft-phone" label="WhatsApp / Phone Number" error={errors["phone"]}>
          <input id="ft-phone" name="phone" type="tel" autoComplete="tel" placeholder="+92 ..." className={inputClass} required />
        </FormField>
        <FormField id="ft-age" label="Student Age" error={errors["studentAge"]}>
          <input id="ft-age" name="studentAge" inputMode="numeric" className={inputClass} required />
        </FormField>
        <FormField id="ft-course" label="Select Course" error={errors["course"]} className="sm:col-span-2">
          <select id="ft-course" name="course" defaultValue={defaultCourse} className={inputClass} required>
            <option value="" disabled>
              Choose a course
            </option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </FormField>
        <FormField id="ft-days" label="Preferred Days" error={errors["preferredDays"]}>
          <select id="ft-days" name="preferredDays" defaultValue="" className={inputClass} required>
            <option value="" disabled>
              Select days
            </option>
            {preferredDays.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </FormField>
        <FormField id="ft-time" label="Preferred Time" error={errors["preferredTime"]}>
          <select id="ft-time" name="preferredTime" defaultValue="" className={inputClass} required>
            <option value="" disabled>
              Select time
            </option>
            {preferredTimes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </FormField>
        <FormField id="ft-message" label="Additional Message" optional error={errors["message"]} className="sm:col-span-2">
          <textarea id="ft-message" name="message" rows={4} className={inputClass} />
        </FormField>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-destructive" role="alert">
          We couldn't send your request right now. Please try again or reach us on WhatsApp.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"} className="sm:min-w-56">
          {status === "submitting" && <Loader2 className="animate-spin" />}
          Start My Free Trial
        </Button>
        <WhatsAppButton variant="ghost" className="text-foreground" />
      </div>
    </form>
  );
}
