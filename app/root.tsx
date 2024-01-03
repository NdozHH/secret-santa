import {
  json,
  type DataFunctionArgs,
  type LinksFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "~/styles/tailwind.css";
import fonts from "~/styles/font.css";
import { useSupabase } from "./utils/supabase";
import { getSupabaseSession } from "./utils/supabase.server";

export const links: LinksFunction = () => [
  // Preload CSS as a resource to avoid render blocking
  { rel: "preload", href: fonts, as: "style" },
  { rel: "preload", href: styles, as: "style" },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: fonts },
];

export const loader = async ({ request }: DataFunctionArgs) => {
  const { session, headers } = await getSupabaseSession({ request });
  return json(
    {
      session,
      env: {
        SUPABASE_URL: process.env.SUPABASE_URL!,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
      },
    },
    {
      headers,
    }
  );
};

export default function App() {
  const { env, session } = useLoaderData<typeof loader>();
  const supabase = useSupabase({ env, session });

  return (
    <html
      lang="en"
      className="min-h-screen flex justify-center bg-silver-tree dark:bg-nile-blue"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full max-w-[90rem] min-h-screen">
        <Outlet context={{ supabase }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
