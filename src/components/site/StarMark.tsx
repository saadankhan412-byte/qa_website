import { cn } from "@/lib/utils";

/** Small eight-point star — a subtle Islamic-inspired decorative mark. */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-4 text-primary", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 1l2.6 6.4L21 10l-6.4 2.6L12 19l-2.6-6.4L3 10l6.4-2.6z" />
    </svg>
  );
}
