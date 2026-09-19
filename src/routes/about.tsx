import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { StarMark } from "@/components/site/StarMark";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    seo({
      title: "About Us | Quran Education Academy",
      description:
        "Learn about Quran Education Academy — personalized one-to-one online Quran classes for children and adults, taught from the comfort of home.",
      path: "/about",
    }),
});

const sections = [
  {
    title: "Our Mission",
    body: "Our mission is to make Quran education accessible, convenient, and personal. We want every learner — regardless of age, location, or starting level — to have the opportunity to read, understand, and connect with the Quran through patient, individual guidance.",
  },
  {
    title: "Our Teaching Approach",
    body: "Every class is one-to-one and live. Tutors adapt each lesson to the student's level and goals, listen carefully as students read or recite, and correct gently as they progress. Regular revision is built into the learning so that progress is steady and lasting.",
  },
  {
    title: "Who We Teach",
    body: "We teach children who are just beginning, adults who wish to start or continue their Quran learning, and women and girls who prefer to learn with female tutors. Courses cover Quran reading, Tajweed, memorization, and essential Islamic concepts.",
  },
  {
    title: "The Online Learning Experience",
    body: "Classes take place online at times agreed with each student or family. All that is needed is a device with an internet connection. Students learn from a familiar, comfortable environment at home, and families can stay closely involved in their child's progress.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Quran Education Academy"
        text="An online Quran academy offering personalized, one-to-one classes for learners who want to study from home with dedicated guidance."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />
      <section className="container-site py-16 lg:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            Quran Education Academy was created to help students build a stronger connection with
            the Quran through personal, attentive teaching. Rather than large group classes, each
            student learns directly with a tutor who understands their level, pace, and goals.
          </p>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80} className="h-full">
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <StarMark />
                <h2 className="mt-3 text-xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
