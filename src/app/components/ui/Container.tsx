import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] ${className}`}
      style={{
        paddingInline: "clamp(24px, 6vw, 96px)",
      }}
    >
      {children}
    </div>
  );
}