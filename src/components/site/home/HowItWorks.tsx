import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { StepCard } from "../StepCard";
import { steps } from "@/data/site";

export function HowItWorks({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="container-site py-20 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="How It Works"
          title="Start Learning in 3 Simple Steps"
          text="Getting started is straightforward — register, agree a schedule, and begin your classes."
        />
      </Reveal>
      <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-8">
        {steps.map((s, i) => (
          <Reveal key={s.number} delay={i * 120}>
            <StepCard {...s} last={i === steps.length - 1} />
          </Reveal>
        ))}
      </div>
      {withCta && (
        <Reveal className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/free-trial">Start Free Trial</Link>
          </Button>
        </Reveal>
      )}
    </section>
  );
}
