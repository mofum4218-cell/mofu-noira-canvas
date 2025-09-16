import heroTextRaw from "@/config/sections/heroText.json";
import aboutTextRaw from "@/config/sections/aboutText.json";
import strengthsTextRaw from "@/config/sections/strengthsText.json";
import contactTextRaw from "@/config/sections/contactText.json";

import { ThemeName } from "@/greenhouse/themes/types";

// 共通型（セクション用テキスト型）
export type SectionText = {
  id: string; // "hero", "about" など
  theme: ThemeName; // "pop", "night", "clear"
  title?: string;
  subtitle?: string;
  description?: string;
  [key: string]: unknown; // blocks など任意追加可
};

// 🔧 JSONに型をアサートすることで型エラー回避！
const heroText = heroTextRaw as SectionText[];
const aboutText = aboutTextRaw as SectionText[];
const strengthsText = strengthsTextRaw as SectionText[];
const contactText = contactTextRaw as SectionText[];

/**
 * テーマとセクションに応じたテキストデータを取得
 */
export const getTextByTheme = (
  sectionId: string,
  theme: ThemeName
): SectionText | null => {
  let dataset: SectionText[] = [];

  switch (sectionId) {
    case "hero":
      dataset = heroText;
      break;
    case "about":
      dataset = aboutText;
      break;
    case "strengths":
      dataset = strengthsText;
      break;
    case "contact":
      dataset = contactText;
      break;
    default:
      return null;
  }

  return dataset.find(
    (item) => item.id === sectionId && item.theme === theme
  ) ?? null;
};

