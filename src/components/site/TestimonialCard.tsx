import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/site";

export function TestimonialCard({ quote, name, location, photo }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <Quote className="size-6 text-primary" aria-hidden />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {photo ? (
          <img
            src={photo}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft font-heading font-bold text-primary-hover"
            aria-hidden
          >
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          {location && <p className="text-xs text-muted-foreground">{location}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
