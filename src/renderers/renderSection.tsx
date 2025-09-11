// src/renderers/renderSection.tsx
import dynamic from "next/dynamic";
import type {
  HeroSection,
  AboutSection,
  StrengthsSection,
  ContactSection,
  Section,
} from "@/greenhouse/types";

// 💡 dynamic import 後に as React.FC<型> を明示
const Hero = dynamic(() => import("@/crops/sections/hero")) as React.FC<HeroSection>;
const About = dynamic(() => import("@/crops/sections/about")) as React.FC<AboutSection>;
const Strengths = dynamic(() => import("@/crops/sections/strengths")) as React.FC<StrengthsSection>;
const Contact = dynamic(() => import("@/crops/sections/contact")) as React.FC<ContactSection>;

export const renderSection = (section: Section) => {
  switch (section.type) {
    case "hero":
      return <Hero {...section} />;
    case "about":
      return <About {...section} />;
    case "strengths":
      return <Strengths {...section} />;
    case "contact":
      return <Contact {...section} />;
    default:
      return null;
  }
};

