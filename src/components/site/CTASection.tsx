import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

interface Props {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: "/free-trial" | "/contact" | "/courses";
}

export function CTASection({
  title = "Ready to Begin Your Quran Journey?",
  text = "Start with a 3-day free trial and experience personalized one-to-one online Quran classes.",
  primaryLabel = "Start Free Trial",
  primaryTo = "/free-trial",
}: Props) {
  return (
    <section className="container-site py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-dark px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pattern-star absolute inset-0 opacity-[0.12]" aria-hidden />
          <div
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-dark-foreground sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-dark-muted sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to={primaryTo}>{primaryLabel}</Link>
              </Button>
              <WhatsAppButton variant="outlineLight" size="lg" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
