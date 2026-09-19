import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const inputClass =
  "block w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 aria-[invalid=true]:border-destructive";

interface Props {
  id: string;
  label: string;
  error?: string | undefined;
  optional?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
}

export function FormField({ id, label, error, optional, className, children }: Props) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {optional && <span className="ml-1 font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
