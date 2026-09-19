import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { CourseGrid } from "@/components/site/CourseGrid";
import { PageHeader } from "@/components/site/PageHeader";
import { courses } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/courses/")({
  component: CoursesPage,
  head: () =>
    seo({
      title: "Online Quran Courses | Quran Education Academy",
      description:
        "Explore our online Quran courses: Basic Quran Reading, Tajweed, Memorization, courses for kids and females, and Islamic Concepts — all one-to-one with a free trial.",
      path: "/courses",
    }),
});

function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Our Quran Courses"
        text="Choose the learning path that fits your needs and begin your Quran journey with personalized online guidance."
        crumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]}
      />
      <section className="container-site py-16 lg:py-24">
        <CourseGrid courses={courses} />
      </section>
      <CTASection />
    </>
  );
}
