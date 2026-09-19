import { Link } from "@tanstack/react-router";
import logo from "@/assets/qa_logo_tp.png";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "h-9 w-9", md: "h-11 w-11", lg: "h-14 w-14" };

export function Logo({ className, light, size = "md" }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-2.5 rounded-lg", className)}
      aria-label={`${site.name} home`}
    >
      <img
        src={logo}
        alt=""
        width={64}
        height={64}
        className={cn("shrink-0 object-contain", sizes[size])}
      />
      <span
        className={cn(
          "font-heading text-[15px] font-bold leading-tight tracking-tight sm:text-base",
          light ? "text-dark-foreground" : "text-foreground",
        )}
      >
        Quran Education
        <br />
        <span className={cn("font-semibold", light ? "text-primary" : "text-primary-hover")}>
          Academy
        </span>
      </span>
    </Link>
  );
}
