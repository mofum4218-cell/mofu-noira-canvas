// src/lib/getAllSections.ts
import hero from "@/config/sections/hero.json";
import about from "@/config/sections/about.json";
import strengths from "@/config/sections/strengths.json";
import contact from "@/config/sections/contact.json";
import type { Section } from "@/greenhouse/types";

export const getAllSections = (): Section[] => {
  return [hero, about, strengths, contact] as Section[];
};

