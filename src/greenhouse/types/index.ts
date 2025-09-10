export type ThemeName = "forest" | "ocean" | "dark" | "neonViolet" | "burningRed" | "iceBlue";

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

export type AboutSection = SectionBase & {
  type: "about";
  title: string;
  subtitle: string;
  bg: string;
};

export type StrengthsSection = SectionBase & {
  type: "strengths";
  title: string;
  subtitle: string;
  bg: string;
};

export type ContactSection = SectionBase & {
  type: "contact";
  title: string;
  subtitle: string;
  bg: string;
};

// 全部Union型にする
export type Section = HeroSection | AboutSection | StrengthsSection | ContactSection;

