import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/data/site";
import { cn } from "@/lib/utils";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1",
        plan.highlight ? "border-primary shadow-card" : "border-border",
      )}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">One-to-one online classes</p>

      <div className="mt-6">
        {plan.price ? (
          <p className="font-heading text-4xl font-extrabold text-foreground">
            {plan.price.amount}
            <span className="ml-1 text-sm font-medium text-muted-foreground">
              /{plan.price.period}
            </span>
          </p>
        ) : (
          <p className="font-heading text-2xl font-bold text-foreground">
            Pricing on request
            <span className="mt-1 block text-sm font-medium text-muted-foreground">
              Contact us for current fees
            </span>
          </p>
        )}
      </div>

      <dl className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-cream p-4 text-center">
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Per week
          </dt>
          <dd className="mt-1 font-heading text-xl font-bold text-foreground">
            {plan.classesPerWeek}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Per month
          </dt>
          <dd className="mt-1 font-heading text-xl font-bold text-foreground">
            {plan.classesPerMonth}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Session
          </dt>
          <dd className="mt-1 font-heading text-xl font-bold text-foreground">
            {plan.sessionDuration.replace(" minutes", "m")}
          </dd>
        </div>
      </dl>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-primary-hover" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <Button asChild className="mt-8 w-full" variant={plan.highlight ? "default" : "outline"}>
        <Link to="/free-trial">Start Free Trial</Link>
      </Button>
    </div>
  );
}
