// 🌈 使用するテーマ一覧（追加したらここも更新）
export type ThemeName =
  | "pop"
  | "nigth"
  | "clear";
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
// 🧠 Planカード（tabs用）との区別も兼ねて共存！
export type FeatureItem = {
  icon: string;
  title: string;
  subtitle?: string;
  description?: string;
};

// 💎 Plan用カード（planタブ内に表示するカード）
export type PlanCardItem = {
  icon: string;
  title: string;
  desc?: string;
};

// 🧩 Plan用タブ構造（tabの中にcardsやlottieを持つ）
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
export type PlanSection = SectionBase & {
  type: "strengths"; // 💡 Plan も strengths セクション扱い
  tabs: PlanTab[];
};
// 💡 StrengthsSection は今後プラン機能を兼ねるので統合
export type StrengthsSection = SectionBase & {
  type: "strengths";
  features?: FeatureItem[];
  tabs?: PlanTab[]; // ← 🆕 これが plan 対応ポイント！
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
  faq?: FAQItem[];
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

