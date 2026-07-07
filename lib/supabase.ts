import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type PageView = {
  id?: number;
  created_at?: string;
  path: string;
  referrer: string | null;
  user_agent: string | null;
  country: string | null;
  session_id: string;
};
