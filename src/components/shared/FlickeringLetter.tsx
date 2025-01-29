"use client";

import React, { HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/styles/helpers";

const FlickeringLetter = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const { children, className } = props;
  const [isOff, setIsOff] = useState(false);

  useEffect(() => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const flicker = async () => {
      await sleep(3000);
      setIsOff((prev) => !prev);
      await sleep(50);
      setIsOff((prev) => !prev);
      await sleep(4000);
      setIsOff((prev) => !prev);
      await sleep(50);
      setIsOff((prev) => !prev);
      await sleep(50);
      setIsOff((prev) => !prev);
      await sleep(50);
      setIsOff((prev) => !prev);
    };

    const timeoutId = setInterval(flicker, 9000);

    return () => clearTimeout(timeoutId);
  }, []);

  return React.cloneElement(
    children as React.ReactElement<HTMLHeadingElement>,
    {
      className: cn(className, `${isOff ? "neon-off" : "neon"}`),
    },
  );
};

export default FlickeringLetter;
