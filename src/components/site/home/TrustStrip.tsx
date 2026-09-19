import { Icon } from "../Icons";
import { trustItems } from "@/data/site";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-background" aria-label="Key benefits">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
        {trustItems.map((t) => (
          <div key={t.title} className="flex items-start gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-hover">
              <Icon name={t.icon} className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-base font-bold text-foreground">{t.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
