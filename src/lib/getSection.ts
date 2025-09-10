import hero from "@/config/sections/hero.json";
import about from "@/config/sections/about.json";
import strengths from "@/config/sections/strengths.json";
import contact from "@/config/sections/contact.json";
import type { Section } from "@/greenhouse/types";

export const getSection = (id: string): Section | null => {
  switch (id) {
    case "hero":
      return hero as Section;
    case "about":
      return about as Section;
    case "strengths":
      return strengths as Section;
    case "contact":
      return contact as Section;
    default:
      return null;
  }
};

