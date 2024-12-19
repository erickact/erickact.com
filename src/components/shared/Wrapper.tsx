import React from "react";
import { cn } from "@/styles/helpers";

const Wrapper = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn("mx-auto max-w-[90vw] md:max-w-4xl", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Wrapper;
