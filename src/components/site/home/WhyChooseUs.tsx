import { BenefitCard } from "../BenefitCard";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { benefits } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Quran Education Academy?"
            text="A learning experience built around the individual student — personal, flexible, and supportive."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80} className="h-full">
              <BenefitCard icon={b.icon} title={b.title} text={b.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
