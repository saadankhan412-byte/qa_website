import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SocialLinks } from "@/components/site/SocialLinks";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () =>
    seo({
      title: "Contact Us | Quran Education Academy",
      description:
        "Get in touch with Quran Education Academy by phone, email, or WhatsApp to ask about online Quran classes and the free trial.",
      path: "/contact",
    }),
});

function Page() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        text="Have a question about our courses, schedules, or the free trial? We would be glad to help."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:py-24">
        <Reveal>
          <h2 className="text-2xl font-bold text-foreground">{site.name}</h2>
          <p className="mt-2 text-muted-foreground">
            Reach us through any of the channels below.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-hover">
                <Phone className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Phone</p>
                <a href={`tel:${site.phoneIntl}`} className="font-semibold text-foreground hover:underline">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-hover">
                <Mail className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</p>
                <a href={`mailto:${site.email}`} className="break-all font-semibold text-foreground hover:underline">
                  {site.email}
                </a>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <Button asChild variant="outline">
              <a href={`mailto:${site.email}`}>
                <Mail /> Send an Email
              </a>
            </Button>
          </div>
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground">Follow us</p>
            <SocialLinks className="mt-3" labels />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
