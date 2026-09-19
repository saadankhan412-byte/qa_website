import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/data/site";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Packages", to: "/packages" },
  { label: "Contact", to: "/contact" },
  { label: "Free Trial", to: "/free-trial" },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo light size="lg" />
          <p className="mt-5 text-sm leading-relaxed text-dark-muted">{site.description}</p>
          <SocialLinks className="mt-6" light />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-dark-muted transition-colors hover:text-dark-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phoneIntl}`}
                className="inline-flex items-center gap-2.5 text-dark-muted transition-colors hover:text-dark-foreground"
              >
                <Phone className="size-4 text-primary" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 break-all text-dark-muted transition-colors hover:text-dark-foreground"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dark-border">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-dark-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Online Quran learning for children and adults.</p>
        </div>
      </div>
    </footer>
  );
}
