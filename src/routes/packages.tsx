import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { PricingCard } from "@/components/site/PricingCard";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { pricingPlans } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  component: Page,
  head: () =>
    seo({
      title: "Class Packages | Quran Education Academy",
      description:
        "Flexible one-to-one online Quran class packages — choose the number of classes per week that suits your schedule. Start with a 3-day free trial.",
      path: "/packages",
    }),
});

function Page() {
  return (
    <>
      <PageHeader
        title="Class Packages"
        text="Choose a class schedule that fits your routine. Every package includes live one-to-one classes with flexible timings."
        crumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />
      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-6 pt-3 md:grid-cols-3">
          {pricingPlans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="h-full">
              <PricingCard plan={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-offwhite p-6 sm:flex-row sm:items-center">
            <Info className="size-6 shrink-0 text-primary-hover" aria-hidden />
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              Fees depend on the number of classes and session length. Contact us for current
              pricing, or begin with a free trial and we will help you choose the right package.
            </p>
            <WhatsAppButton
              variant="outline"
              message="Assalamualaikum, I would like to know the current package fees at Quran Education Academy."
              label="Ask About Fees"
            />
          </div>
        </Reveal>
      </section>
      <CTASection />
    </>
  );
}
