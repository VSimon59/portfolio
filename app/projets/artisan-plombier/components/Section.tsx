import React from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`container mx-auto px-4 py-16 ${className}`}>
      {children}
    </section>
  );
}
