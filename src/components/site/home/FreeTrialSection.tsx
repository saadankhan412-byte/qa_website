import { Check } from "lucide-react";
import { FreeTrialForm } from "../FreeTrialForm";
import { Reveal } from "../Reveal";
import { StarMark } from "../StarMark";
import { WhatsAppButton } from "../WhatsAppButton";

const included = [
  "Three live one-to-one trial classes",
  "A tutor matched to the student's needs",
  "Timings arranged around your schedule",
  "No commitment required",
];

export function FreeTrialSection({ defaultCourse }: { defaultCourse?: string | undefined }) {
  return (
    <section id="free-trial" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pattern-star absolute left-0 top-0 h-64 w-64 opacity-40 [mask-image:radial-gradient(circle_at_top_left,black,transparent_70%)]" aria-hidden />
      <div className="container-site relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary-hover">
            <StarMark className="size-3.5" /> Free Trial
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl">
            Start With a 3-Day Free Trial
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experience the learning process and discover the right Quran course for you or your
            child.
          </p>
          <ul className="mt-8 space-y-3">
            {included.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-background p-5">
            <p className="text-sm font-semibold text-foreground">Prefer to chat first?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Message us on WhatsApp and we'll help you choose the right course.
            </p>
            <WhatsAppButton className="mt-4" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <FreeTrialForm defaultCourse={defaultCourse} />
        </Reveal>
      </div>
    </section>
  );
}
