import type { ReactNode } from "react";

export function LegalSection({
  title,
  id,
  children
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[15px] md:leading-7">
        {children}
      </div>
    </section>
  );
}
