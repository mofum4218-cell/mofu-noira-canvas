// src/greenhouse/components/layout/ResponsiveHelpers.ts
import breakpoints from "@/greenhouse/themes/breakpoints/breakpoints.json";

type BreakpointKey = keyof typeof breakpoints;

export const mq = (key: BreakpointKey): string => {
  const size = breakpoints[key];
  return `@media (min-width: ${size})`;
};

