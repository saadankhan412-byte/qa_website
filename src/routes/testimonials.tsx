import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialsSection } from "@/components/site/home/TestimonialsSection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  component: Page,
  head: () =>
    seo({
      title: "Testimonials | Quran Education Academy",
      description:
        "Read what students and parents say about learning Quran online with Quran Education Academy.",
      path: "/testimonials",
    }),
});

function Page() {
  return (
    <>
      <PageHeader
        title="Testimonials"
        text="Experiences shared by students and families learning with us."
        crumbs={[{ label: "Home", to: "/" }, { label: "Testimonials" }]}
      />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
