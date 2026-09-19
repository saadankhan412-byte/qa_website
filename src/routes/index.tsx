import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseGrid } from "@/components/site/CourseGrid";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AboutPreview } from "@/components/site/home/AboutPreview";
import { FreeTrialSection } from "@/components/site/home/FreeTrialSection";
import { GlobalReach } from "@/components/site/home/GlobalReach";
import { Hero } from "@/components/site/home/Hero";
import { HowItWorks } from "@/components/site/home/HowItWorks";
import { TestimonialsSection } from "@/components/site/home/TestimonialsSection";
import { TrustStrip } from "@/components/site/home/TrustStrip";
import { WhyChooseUs } from "@/components/site/home/WhyChooseUs";
import { courses } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    seo({
      title: "Quran Education Academy | Online Quran Classes",
      description:
        "Learn Quran online with personalized classes, flexible timings, and a 3-day free trial at Quran Education Academy.",
      path: "/",
    }),
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <section id="courses" className="bg-offwhite py-20 lg:py-28">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Courses"
              title="Our Quran Courses"
              text="Choose the learning path that fits your needs and begin your Quran journey with personalized online guidance."
            />
          </Reveal>
          <div className="mt-12">
            <CourseGrid courses={courses} />
          </div>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/courses">
                View All Courses <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
      <WhyChooseUs />
      <HowItWorks />
      <FreeTrialSection />
      <TestimonialsSection />
      <GlobalReach />
    </>
  );
}
