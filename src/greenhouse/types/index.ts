// types/section.ts

export type ThemeName =
  | "forest"
  | "ocean"
  | "dark"
  | "neonViolet"
  | "burningRed"
  | "iceBlue";

// 🌱 共通ベース型（全セクション共通プロパティ）
export type SectionBase = {
  id: string;
  type: string;
  theme: ThemeName;
  title?: string;
  subtitle?: string;
  description?: string;
  lottieSrc?: string;
  bg?: string;
  effect?: "none" | "vanta" | "three";
};

// 🌟 各セクション個別定義（必要ならカスタム項目追加）
export type HeroSection = SectionBase & {
  type: "hero";
  // Hero専用追加プロパティがあればここに追加
};

export type AboutSection = SectionBase & {
  type: "about";
};

export type StrengthsSection = SectionBase & {
  type: "strengths";
};

export type ContactSection = SectionBase & {
  type: "contact";
};

// ✅ 全セクションのUnion型（基本これで受け取る）
export type Section =
  | HeroSection
  | AboutSection
  | StrengthsSection
  | ContactSection;

