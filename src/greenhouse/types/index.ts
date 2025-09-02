export type ThemeName = "forest" | "ocean" | "dark";

export type SectionBase = {
  id: string;
  type: string;
  theme: ThemeName;
};

export type HeroSection = SectionBase & {
  type: "hero";
  title: string;
  subtitle: string;
  bg: string;
};

// 今後、AboutSection なども同様に追加していける
export type Section = HeroSection; // | AboutSection | ... etc.

