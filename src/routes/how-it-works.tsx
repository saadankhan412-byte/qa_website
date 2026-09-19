import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { HowItWorks } from "@/components/site/home/HowItWorks";
import { TrustStrip } from "@/components/site/home/TrustStrip";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  component: Page,
  head: () =>
    seo({
      title: "How It Works | Quran Education Academy",
      description:
        "Start learning Quran online in 3 simple steps: register, choose your schedule, and begin personalized one-to-one classes.",
      path: "/how-it-works",
    }),
});

function Page() {
  return (
    <>
      <PageHeader
        title="How It Works"
        text="Getting started with online Quran classes is simple. Here is what to expect from registration to your first lesson."
        crumbs={[{ label: "Home", to: "/" }, { label: "How It Works" }]}
      />
      <HowItWorks />
      <TrustStrip />
      <CTASection />
    </>
  );
}
