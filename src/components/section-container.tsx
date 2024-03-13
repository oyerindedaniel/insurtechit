import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionContainer = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <section className={cn("px-12", className)} ref={ref} {...rest}>
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;
