// renderers/renderSection.tsx
import dynamic from "next/dynamic";
import { Section } from "@/greenhouse/types";

// 💡 Heroだけ dynamic import
const Hero = dynamic(() => import("@/crops/sections/hero"), { ssr: false });
const About = dynamic(() => import("@/crops/sections/about"), { ssr: false });
const Strengths = dynamic(() => import("@/crops/sections/strengths"), { ssr: false });
const Contact = dynamic(() => import("@/crops/sections/contact"), { ssr: false });

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
