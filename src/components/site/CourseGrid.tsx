import { CourseCard } from "./CourseCard";
import { Reveal } from "./Reveal";
import type { Course } from "@/data/site";

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c, i) => (
        <Reveal key={c.slug} delay={(i % 3) * 80} className="h-full">
          <CourseCard course={c} />
        </Reveal>
      ))}
    </div>
  );
}
