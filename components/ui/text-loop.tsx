import { Children, type ReactNode } from "react";

type TextLoopProps = {
  children: ReactNode[];
  className?: string;
};

export function TextLoop({ children, className }: TextLoopProps) {
  const items = Children.toArray(children);

  return (
    <span className={["text-loop", className].filter(Boolean).join(" ")} aria-hidden="true">
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </span>
  );
}
