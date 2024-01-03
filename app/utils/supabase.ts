import { useRevalidator } from "@remix-run/react";
import { createBrowserClient } from "@supabase/ssr";
import { type Session } from "@supabase/supabase-js";
import { type Database } from "database.types";
import { useEffect, useState } from "react";

export function useSupabase({
  env,
  session,
}: {
  env: {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
  };
  session: Session | null;
}) {
  const [supabase] = useState(() =>
    createBrowserClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  );
  const revalidator = useRevalidator();
  const serverAccessToken = session?.access_token;

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        revalidator.revalidate();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, serverAccessToken, revalidator]);

  return supabase;
}
