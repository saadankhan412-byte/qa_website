import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CourseCard } from "@/components/site/CourseCard";
import { FreeTrialForm } from "@/components/site/FreeTrialForm";
import { Icon } from "@/components/site/Icons";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { courses, getCourse } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) =>
    seo({
      title: `${loaderData?.course.title ?? "Course"} | Quran Education Academy`,
      description: loaderData?.course.short ?? "",
      path: `/courses/${loaderData?.course.slug ?? ""}`,
      type: "article",
    }),
  component: CoursePage,
});

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-foreground">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-3" aria-hidden />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CoursePage() {
  const { course } = Route.useLoaderData();
  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-offwhite">
        <div className="pattern-star absolute inset-y-0 right-0 w-1/2 opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
        <div className="container-site relative py-14 sm:py-20">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Courses", to: "/courses" }, { label: course.title }]}
          />
          <div className="mt-6 flex items-start gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground sm:flex">
              <Icon name={course.icon} className="size-8" />
            </div>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary-hover">Course {course.number}</p>
              <h1 className="mt-1 text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
                {course.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {course.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#register">Start Free Trial</a>
                </Button>
                <WhatsAppButton
                  variant="outline"
                  size="lg"
                  message={`Assalamualaikum, I am interested in the ${course.title} course at Quran Education Academy.`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-24">
        <div className="space-y-14">
          <Reveal>
            <ListBlock title="What Students Learn" items={course.learn} />
          </Reveal>
          <Reveal>
            <ListBlock title="Who This Course Is For" items={course.audience} />
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Learning Approach</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{course.approach}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Benefits</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {course.benefits.map((b) => (
                <div key={b} className="rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-soft">
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-dark p-7 text-dark-foreground">
            <p className="text-sm font-semibold text-primary">3-Day Free Trial</p>
            <h2 className="mt-2 text-2xl font-bold">Try {course.title} for free</h2>
            <p className="mt-3 text-sm text-dark-muted">
              Experience live one-to-one classes before deciding. Register below or message us on
              WhatsApp.
            </p>
            <Button asChild size="lg" className="mt-6 w-full">
              <a href="#register">Register Now</a>
            </Button>
            <Button asChild variant="link" className="mt-2 w-full text-dark-foreground">
              <Link to="/packages">View class packages</Link>
            </Button>
          </div>
        </aside>
      </section>

      <section id="register" className="scroll-mt-24 bg-cream py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Registration"
              title="Register for Your Free Trial"
              text={`Fill in the form and we will arrange your ${course.title} trial classes.`}
            />
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <FreeTrialForm defaultCourse={course.slug} />
          </Reveal>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Related Courses" title="You May Also Like" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80} className="h-full">
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
