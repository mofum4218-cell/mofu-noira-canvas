// src/hooks/useResponsiveImage.ts
import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const getBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

export const useResponsiveImage = <T extends { [key in Breakpoint]?: string }>(
  sources: T,
  fallback: string = ""
): string => {
  const [current, setCurrent] = useState<string>(fallback);

  useEffect(() => {
    const update = () => {
      const bp = getBreakpoint(window.innerWidth);
      setCurrent(sources[bp] ?? fallback);
    };

    update(); // 初期化
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [sources, fallback]);

  return current;
};

