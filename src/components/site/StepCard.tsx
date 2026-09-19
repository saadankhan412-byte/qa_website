interface Props {
  number: string;
  title: string;
  text: string;
  last?: boolean;
}

export function StepCard({ number, title, text, last }: Props) {
  return (
    <div className="relative">
      {!last && (
        <div
          className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] border-t-2 border-dashed border-primary/50 lg:block"
          aria-hidden
        />
      )}
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-heading text-xl font-extrabold text-primary-foreground shadow-glow">
          {number}
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
