import { Globe2, Laptop, Wifi } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: Laptop, title: "Any device", text: "Join classes from a laptop, tablet, or phone." },
  { icon: Wifi, title: "Any time zone", text: "Class timings are arranged to suit your local time." },
  { icon: Globe2, title: "Any location", text: "All you need is an internet connection." },
];

export function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-dark-foreground lg:py-28">
      <GlobeArt />
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Global Learning"
            title="Learn From Anywhere"
            text="Online Quran learning makes it easier for students and families to learn from home, wherever they are."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="rounded-2xl border border-dark-border bg-dark-foreground/5 p-6 backdrop-blur-sm">
                <Icon className="size-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-sm text-dark-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Abstract globe made of dotted latitude/longitude lines. */
function GlobeArt() {
  return (
    <svg
      className="pointer-events-none absolute -right-32 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 text-primary opacity-20 sm:-right-16"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 6"
      aria-hidden
    >
      <circle cx="200" cy="200" r="180" />
      <ellipse cx="200" cy="200" rx="110" ry="180" />
      <ellipse cx="200" cy="200" rx="40" ry="180" />
      <line x1="20" y1="200" x2="380" y2="200" />
      <ellipse cx="200" cy="200" rx="180" ry="110" />
      <ellipse cx="200" cy="200" rx="180" ry="40" />
    </svg>
  );
}
