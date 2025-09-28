import { supabase } from "./supabaseClient";

// 公開URLを取得（有効期限なし）
export const getPublicUrl = (path: string) => {
  const { data } = supabase.storage
    .from("noira-canvas") // バケット名
    .getPublicUrl(path);

  return data.publicUrl;
};

