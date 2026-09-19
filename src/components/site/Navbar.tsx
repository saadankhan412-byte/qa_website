import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "border-b border-border shadow-soft" : "border-b border-transparent",
      )}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-primary-soft/70" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/free-trial">Start Free Trial</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[calc(100dvh-72px)] opacity-100" : "max-h-0 opacity-0 border-t-0",
        )}
        aria-hidden={!open}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              tabIndex={open ? 0 : -1}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-cream"
              activeProps={{ className: "bg-primary-soft/70" }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-3 w-full">
            <Link to="/free-trial" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              Start Free Trial
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
