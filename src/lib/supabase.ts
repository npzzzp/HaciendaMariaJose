import { createClient } from "@supabase/supabase-js";
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env = (import.meta as any).env;
const supabaseUrl = env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY as string;
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 
export type MediaItem = {
  id: string;
  url: string;
  tipo: "foto" | "video";
  titulo: string | null;
  descripcion: string | null;
  orden: number;
  created_at: string;
};
 