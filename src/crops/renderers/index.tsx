import { Hero } from "@/crops/sections/hero";

import { Section } from "@/greenhouse/types";

export const renderSection = (section: Section) => {
  switch (section.type) {
    case "hero":
      return <Hero {...section} />;
    default:
      return null;
  }
};

