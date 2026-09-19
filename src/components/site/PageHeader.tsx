import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface Props {
  title: string;
  text?: string;
  crumbs: Crumb[];
}

export function PageHeader({ title, text, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-offwhite">
      <div className="pattern-star absolute inset-y-0 right-0 w-1/2 opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
      <div className="container-site relative py-14 sm:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
          {title}
        </h1>
        {text && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
