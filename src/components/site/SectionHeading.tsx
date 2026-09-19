import { cn } from "@/lib/utils";
import { StarMark } from "./StarMark";

interface Props {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-hover",
            align === "center" && "justify-center",
            light && "text-primary",
          )}
        >
          <StarMark className="size-3.5" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-[1.15] sm:text-4xl",
          light ? "text-dark-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-dark-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
