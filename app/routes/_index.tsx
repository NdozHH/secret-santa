import {
  json,
  type DataFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getSupabaseSession } from "~/utils/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: DataFunctionArgs) => {
  const { session } = await getSupabaseSession({ request });

  console.log("SS", session);
  return null;
};

export const action = async ({ request }: DataFunctionArgs) => {
  const { supabase, headers } = await getSupabaseSession({ request });

  const { data, error } = await supabase.auth.signUp({
    email: "test3@test.com",
    password: "12345678",
  });

  return json(
    {
      data,
      error,
    },
    { headers }
  );
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Form method="POST">
        <button type="submit" name="action">
          Create
        </button>
      </Form>
    </div>
  );
}
