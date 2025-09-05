// src/utils/logger.ts

type LogArg = string | number | boolean | object | null | undefined;

export const log = {
  info: (...args: LogArg[]) => {
    if (process.env.NODE_ENV === "development") {
      console.info("[INFO]", ...args);
    }
  },
  warn: (...args: LogArg[]) => {
    if (process.env.NODE_ENV === "development") {
      console.warn("[WARN]", ...args);
    }
  },
  error: (...args: LogArg[]) => {
    if (process.env.NODE_ENV === "development") {
      console.error("[ERROR]", ...args);
    }
  },
};

