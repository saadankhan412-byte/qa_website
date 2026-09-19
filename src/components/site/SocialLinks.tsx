import { Facebook, Instagram } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  light?: boolean;
  labels?: boolean;
}

export function SocialLinks({ className, light, labels }: Props) {
  const items = [
    { label: "Instagram", href: site.instagram, Icon: Instagram },
    { label: "Facebook", href: site.facebook, Icon: Facebook },
  ];
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${site.name} on ${label}`}
          className={cn(
            "inline-flex h-11 items-center justify-center gap-2 rounded-full border text-sm font-medium transition-colors",
            labels ? "px-4" : "w-11",
            light
              ? "border-dark-border text-dark-muted hover:border-primary hover:text-primary"
              : "border-border text-foreground hover:border-primary hover:bg-primary-soft/60",
          )}
        >
          <Icon className="size-4" aria-hidden />
          {labels && label}
        </a>
      ))}
    </div>
  );
}
