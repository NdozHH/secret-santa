import { redirect } from "@remix-run/node";
import { getSupabaseSession } from "./supabase.server";

export async function requireUser(request: Request) {
  const { session, headers } = await getSupabaseSession({ request });

  if (!session) {
    throw redirect("/signin", {
      headers,
    });
  }
}
