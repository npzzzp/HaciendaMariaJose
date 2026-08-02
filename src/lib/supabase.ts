import { createClient } from "@supabase/supabase-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env = (import.meta as any).env;

export const supabase = createClient(
  env.VITE_SUPABASE_URL as string,
  env.VITE_SUPABASE_ANON_KEY as string
);

export type MediaItem = {
  id: string;
  url: string;
  tipo: "foto" | "video";
  titulo: string | null;
  descripcion: string | null;
  categoria: "inauguracion" | "actividades" | "equipo" | null;
  orden: number;
  created_at: string;
};

export type Categoria = "inauguracion" | "actividades" | "equipo";

export const PAGE_SIZE = 12;

export async function fetchMedia(
  categoria: Categoria,
  page: number
): Promise<{ items: MediaItem[]; hasMore: boolean }> {
  const from = page * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("categoria", categoria)
    .order("orden", { ascending: true })
    .range(from, to);

  if (error) throw error;

  return {
    items: (data as MediaItem[]) ?? [],
    hasMore: (data?.length ?? 0) === PAGE_SIZE,
  };
}
