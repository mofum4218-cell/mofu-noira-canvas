// greenhouse/types/section.ts

// 🌈 使用するテーマ一覧（追加したらここも更新）
export type ThemeName = "noir" | "aura" | "solaris" | "cosmos" | "eden";
// 💡 Lottieエフェクトの種類
export type EffectType = "none" | "vanta" | "three";

// 🧱 共通ベース型（全セクション共通プロパティ）
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

// 🌟 Hero
export type HeroSection = SectionBase & {
  type: "hero";
  // Hero専用プロパティを追加する場合ここに書く
};

// 🪄 About
export type AboutSection = SectionBase & {
  type: "about";
};

// 💎 Strengths
export type FeatureItem = {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
};

export type PlanCardItem = {
  icon: string;
  title: string;
  desc?: string;
};

export type PlanTab = {
  name: string;
  subtitle: string;
  description: string;
  lottie: string;
  cards: {
    icon: string;
    title: string;
    desc: string;
  }[];
  image: string;
};

// Strengthsセクションは features と tabs を両方持てる
export type StrengthsSection = SectionBase & {
  type: "strengths";
  features?: FeatureItem[];
  tabs?: PlanTab[];
};

// 💬 Contact
export type FAQItem = {
  question: string;
  answer: string;
};

export type ContactSection = SectionBase & {
  type: "contact";
  faq?: FAQItem[];
};

// ==============================
// 💡 Union型（基本はこれで受け取る）
// ==============================
export type Section =
  | HeroSection
  | AboutSection
  | StrengthsSection
  | ContactSection;


