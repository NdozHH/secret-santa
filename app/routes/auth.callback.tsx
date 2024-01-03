import { type DataFunctionArgs, redirect } from "@remix-run/node";
import { getSupabaseClient } from "~/utils/supabase.server";

export async function loader({ request }: DataFunctionArgs) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next");

  if (!code || !next) {
    throw redirect("/login");
  }

  const { supabase, headers } = getSupabaseClient({ request });
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    throw redirect("/login");
  }

  return redirect(next, { headers });
}
