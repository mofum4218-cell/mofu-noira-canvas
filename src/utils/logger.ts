// src/utils/logger.ts

export const log = {
  info: (...args: unknown[]) => {
    if (process.env.NODE_ENV === "development") {
      console.info("[INFO]", ...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (process.env.NODE_ENV === "development") {
      console.warn("[WARN]", ...args);
    }
  },
  error: (...args: unknown[]) => {
    if (process.env.NODE_ENV === "development") {
      console.error("[ERROR]", ...args);
    }
  },
};

