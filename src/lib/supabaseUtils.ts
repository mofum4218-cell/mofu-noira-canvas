// src/lib/supabaseUtils.ts
import { supabase } from "./supabaseClient";

// 画像の signed URL を生成
export const getSignedUrl = async (path: string, expire = 60) => {
  console.log("🔎 getSignedUrl path:", path);
  const { data, error } = await supabase
    .storage
    .from("noira-canvas") // バケット名
    .createSignedUrl(path, expire);

  if (error) {
    console.error("❌ Supabase signed URL error:", error);
    return "";
  }
  return data?.signedUrl ?? "";
};

// デバッグ用：指定フォルダ内のファイル一覧を取得
export const debugList = async (folder: string = "common") => {
  const { data, error } = await supabase.storage.from("noira-canvas").list(folder);
  if (error) {
    console.error("❌ Supabase list error:", error);
    return [];
  }
  console.log(`📂 Files in "${folder}":`, data);
  return data;
};

