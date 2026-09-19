import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FreeTrialSection } from "@/components/site/home/FreeTrialSection";
import { HowItWorks } from "@/components/site/home/HowItWorks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/free-trial")({
  component: Page,
  validateSearch: (search: Record<string, unknown>): { course?: string } =>
    typeof search["course"] === "string" && search["course"].length > 0
      ? { course: search["course"] }
      : {},
  head: () =>
    seo({
      title: "Start Your 3-Day Free Trial | Quran Education Academy",
      description:
        "Register for a 3-day free trial of one-to-one online Quran classes and discover the right course for you or your child.",
      path: "/free-trial",
    }),
});

function Page() {
  const { course } = Route.useSearch();
  return (
    <>
      <PageHeader
        title="Start Your 3-Day Free Trial"
        text="Experience live one-to-one Quran classes before committing. Register below and we will arrange your trial sessions."
        crumbs={[{ label: "Home", to: "/" }, { label: "Free Trial" }]}
      />
      <FreeTrialSection defaultCourse={course} />
      <HowItWorks withCta={false} />
    </>
  );
}
