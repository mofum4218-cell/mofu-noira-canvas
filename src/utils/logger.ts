// src/utils/logger.ts
type ConsoleMethod = "log" | "warn" | "error";

const toConsole = (method: ConsoleMethod) =>
  (...args: unknown[]) => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      (console[method] as (...a: unknown[]) => void)(...args);
    }
  };

export const log = {
  info: toConsole("log"),
  warn: toConsole("warn"),
  error: toConsole("error"),
};

