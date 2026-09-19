import { Link } from "@tanstack/react-router";
import { Clock, Users, Video } from "lucide-react";
import heroImg from "@/assets/hero-quran-learning.jpg";
import { Button } from "@/components/ui/button";
import { StarMark } from "../StarMark";

const chips = [
  { icon: Video, label: "1-to-1 Live Classes", pos: "right-[6%] top-[19%]", anim: "animate-float" },
  { icon: Clock, label: "Flexible Timings", pos: "right-[24%] top-[46%]", anim: "animate-float-slow" },
  { icon: Users, label: "Male & Female Tutors", pos: "right-[8%] bottom-[17%]", anim: "animate-float" },
];

function ChipIcon({ icon: Icon }: { icon: typeof Video }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
      <Icon className="size-4" aria-hidden />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden sm:min-h-[640px] lg:min-h-[720px]">
      {/* Full-section background image */}
      <img
        src={heroImg}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[center_55%] animate-hero-zoom lg:object-[center_45%]"
      />

      {/* Layered overlay: darker behind the text, lighter over the visual */}
      <div className="hero-veil absolute inset-0 -z-20" aria-hidden />
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden />

      {/* Subtle eight-point star motif */}
      <div
        aria-hidden
        className="pattern-star absolute -left-8 bottom-10 -z-10 h-52 w-52 rotate-12 opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)] lg:-right-6 lg:left-auto lg:top-8"
      />

      {/* Content */}
      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-[34rem]">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-dark/50 px-3.5 py-1.5 text-sm font-semibold text-dark-foreground backdrop-blur">
            <StarMark className="size-3.5" />
            3-Day Free Trial Available
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-dark-foreground sm:text-5xl lg:text-[3.5rem]">
            Learn the Quran <span className="text-primary">Online</span>, From the Comfort of Your{" "}
            <span className="text-primary">Home</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-dark-foreground/85 sm:text-xl">
            One-to-one Quran classes with qualified tutors, flexible timings, and personalized
            learning for children and adults.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/free-trial">Start 3-Day Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>

          {/* Trust indicators — stacked chips on mobile */}
          <div className="mt-10 flex flex-wrap gap-3 lg:hidden">
            {chips.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-dark-foreground/20 bg-dark/55 px-3.5 py-2.5 text-sm font-semibold text-dark-foreground shadow-card backdrop-blur"
              >
                <ChipIcon icon={Icon} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust indicators — floating over the visual on desktop */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {chips.map(({ icon: Icon, label, pos, anim }) => (
          <div
            key={label}
            className={`absolute ${pos} ${anim} flex items-center gap-2.5 rounded-xl border border-dark-foreground/20 bg-dark/55 px-3.5 py-2.5 text-sm font-semibold text-dark-foreground shadow-card backdrop-blur`}
          >
            <ChipIcon icon={Icon} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
