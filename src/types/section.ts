// 🌈 使用するテーマ一覧（追加したらここも更新）
export type ThemeName =
  | "forest"
  | "ocean"
  | "dark"
  | "neonViolet"
  | "burningRed"
  | "iceBlue";

// 💡 Lottieエフェクトの種類
export type EffectType = "none" | "vanta" | "three";

// 🧱 各セクションで共通する基本構造
export type SectionBase = {
  id: string;
  type: string;
  theme: ThemeName;
  title?: string;
  subtitle?: string;
  description?: string;
  lottieSrc?: string;
  bg?: string;
  effect?: EffectType;
};

// ==============================
// 🚀 各セクション固有の拡張型
// ==============================

// 🦾 Strengths（アイコン付き特徴カード）
export type FeatureItem = {
  icon: string; // アイコン名（例: "sparkles", "award"）
  title: string;
  subtitle?: string;
  description?: string;
};

export type StrengthsSection = SectionBase & {
  type: "strengths";
  features?: FeatureItem[];
};

// 🪄 About（必要なら拡張）
export type AboutSection = SectionBase & {
  type: "about";
};

// 💬 Contact（FAQ付き・フォームなどに拡張可）
export type FAQItem = {
  question: string;
  answer: string;
};

export type ContactSection = SectionBase & {
  type: "contact";
  faq?: FAQItem[]; // ✅ ここが新しく追加された部分
};

// 🎮 Hero（背景や効果）
export type HeroSection = SectionBase & {
  type: "hero";
};

// ==============================
// 💡 Union型（renderSectionなどで使う）
// ==============================
export type Section =
  | HeroSection
  | AboutSection
  | StrengthsSection
  | ContactSection;

