import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useNavigation } from "@remix-run/react";
import clsx from "clsx";
import { getSupabaseClient, getSupabaseSession } from "~/utils/supabase.server";

export async function loader({ request }: DataFunctionArgs) {
  const { session, headers } = await getSupabaseSession({ request });

  if (session) {
    throw redirect("/", { headers });
  }

  return null;
}

export async function action({ request }: DataFunctionArgs) {
  const formData = await request.formData();
  const { supabase, headers } = getSupabaseClient({ request });

  const { error } = await supabase.auth.updateUser({
    password: String(formData.get("password")),
  });

  if (error) {
    return json(
      {
        error: error.message,
      },
      {
        status: error.status,
      }
    );
  }

  return redirect("/", {
    headers,
  });
}

export default function CreatePassword() {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col w-full">
      <span
        className={clsx(
          "block w-full relative mb-8 text-7xl text-white font-condensed text-center",
          "before:block before:w-[4.5rem] before:h-[0.5rem] before:bg-white before:absolute before:top-[45%] before:right-[35rem]",
          "after:block after:w-[4.5rem] after:h-[0.5rem] after:bg-white after:absolute after:top-[45%] after:left-[35rem]"
        )}
      >
        CREATE PASSWORD
      </span>
      <Form method="POST" className="flex flex-col gap-4">
        <input
          type="text"
          name="password"
          placeholder="PASSWORD"
          className="input w-full bg-white h-[6.25rem] rounded-none text-3xl font-handwriting text-black uppercase"
        />
        <button
          type="submit"
          className="w-full btn bg-supernova h-[5.5rem] rounded-full text-3xl font-handwriting text-black uppercase hover:bg-supernova"
        >
          {navigation.state !== "idle" ? (
            <span className="loading loading-dots" />
          ) : null}
          Submit
        </button>
      </Form>
    </div>
  );
}
