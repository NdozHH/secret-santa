import { createServerClient, parse, serialize } from "@supabase/ssr";
import { type Database } from "database.types";

export function getSupabaseClient({ request }: { request: Request }) {
  const cookies = parse(request.headers.get("cookie") ?? "");
  const headers = new Headers();

  const supabase = createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append("set-cookie", serialize(key, value, options));
        },
        remove(key, options) {
          headers.append("set-cookie", serialize(key, "", options));
        },
      },
    }
  );

  return { supabase, headers };
}

export async function getSupabaseSession({ request }: { request: Request }) {
  const { supabase, headers } = getSupabaseClient({
    request,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { session, headers, supabase };
}
