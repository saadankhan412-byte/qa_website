import { MessageSquareHeart } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { TestimonialCard } from "../TestimonialCard";
import { WhatsAppButton } from "../WhatsAppButton";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="container-site py-20 lg:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Students Say"
          text="Feedback from students and parents learning with Quran Education Academy."
        />
      </Reveal>
      {testimonials.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 80} className="h-full">
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="mt-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-primary/50 bg-offwhite p-8 text-center sm:p-10">
            <MessageSquareHeart className="mx-auto size-10 text-primary-hover" aria-hidden />
            <h3 className="mt-4 text-xl font-bold text-foreground">
              Student stories are coming soon
            </h3>
            <p className="mt-2 text-muted-foreground">
              We will share feedback from our students and their families here. In the meantime,
              you're welcome to ask us any questions directly.
            </p>
            <WhatsAppButton className="mt-6" label="Ask Us on WhatsApp" />
          </div>
        </Reveal>
      )}
    </section>
  );
}
