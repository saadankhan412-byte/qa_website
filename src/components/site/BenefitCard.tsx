import { Icon, type IconName } from "./Icons";

interface Props {
  icon: IconName;
  title: string;
  text: string;
}

export function BenefitCard({ icon, title, text }: Props) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary-hover transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon name={icon} className="size-5" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
