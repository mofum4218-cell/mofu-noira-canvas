import heroData from "@/config/sections/hero.json";
import { HeroSection } from "@/greenhouse/types/";

export const getSection = (id: string): HeroSection | null => {
  switch (id) {
    case "hero":
      return heroData as HeroSection;
    default:
      return null;
  }
};

