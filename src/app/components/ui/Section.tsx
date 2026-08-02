import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: string;
}

export function Section({
  id,
  children,
  className = "",
  background,
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        background,
        paddingBlock: "clamp(72px, 10vh, 140px)",
      }}
    >
      {children}
    </section>
  );
}