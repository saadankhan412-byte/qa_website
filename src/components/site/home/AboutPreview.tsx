import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import logo from "@/assets/qe_logo.jpeg";
import { Button } from "@/components/ui/button";
import { Reveal } from "../Reveal";
import { StarMark } from "../StarMark";

const points = [
  "Live one-to-one classes with a dedicated tutor",
  "Courses for children, adults, and female learners",
  "Timings arranged around your routine",
];

export function AboutPreview() {
  return (
    <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <Reveal>
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-cream">
          <div className="pattern-star absolute inset-0 rounded-3xl opacity-50" aria-hidden />
          <img
            src={logo}
            alt="Quran Education Academy logo"
            width={400}
            height={400}
            loading="lazy"
            className="relative w-3/5"
          />
        </div>
      </Reveal>
      <Reveal delay={100}>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary-hover">
          <StarMark className="size-3.5" /> About the Academy
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl">
          Helping Students Build a Stronger Connection With the Quran
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Quran Education Academy provides online Quran education for learners who want to study
          from home with personalized guidance. Every student learns one-to-one with a tutor, at a
          pace and schedule that suits them — whether they are reading their first letters,
          refining Tajweed, or memorizing the Quran.
        </p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-foreground">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3" aria-hidden />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/about">
            Learn More About Us <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
