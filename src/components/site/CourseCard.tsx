import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icons";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/site";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card sm:p-7">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-hover transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon name={course.icon} className="size-6" />
        </div>
        <span className="font-heading text-sm font-bold text-muted-foreground/70">
          {course.number}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-foreground">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{course.short}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild variant="outline" size="sm">
          <Link to="/courses/$slug" params={{ slug: course.slug }}>
            Learn More
            <ArrowRight />
          </Link>
        </Button>
        <Link
          to="/free-trial"
          search={{ course: course.slug }}
          className="text-sm font-semibold text-primary-hover underline-offset-4 hover:underline"
        >
          Start Free Trial
        </Link>
      </div>
    </article>
  );
}
