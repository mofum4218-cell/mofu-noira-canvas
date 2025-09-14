// src/utils/getImageUrl.ts

/**
 * Supabaseの画像ベースURL（公開バケットを使用）
 * 例: https://xxxx.supabase.co/storage/v1/object/public/bucket
 */
const SUPABASE_IMAGE_BASE_URL =
  "https://noioibhomhtqgcaigbze.supabase.co/storage/v1/object/public/auto-v1-assets";

/**
 * ローカル画像パスとSupabase画像URLを切り替える関数
 *
 * @param path - 画像の相対パス（例: "/img/hero-bg.webp"）
 * @param useSupabase - Supabase画像を使いたい場合はtrue（デフォルトtrue）
 * @returns 表示用の画像URL
 */
export const getImageUrl = (path: string, useSupabase: boolean = true): string => {
  if (!path) return "";

  // path先頭のスラッシュを除去（必要に応じて）
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (useSupabase) {
    return `${SUPABASE_IMAGE_BASE_URL}${cleanPath}`;
  }

  // 通常のローカルパス
  return cleanPath;
};

