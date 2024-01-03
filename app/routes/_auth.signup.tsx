import { redirect, type DataFunctionArgs, json } from "@remix-run/node";
import { Form, Link, useNavigation } from "@remix-run/react";
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

  const { error } = await supabase.auth.signUp({
    email: String(formData.get("email")),
    password: String(formData.get("password")), // TODO: encrypt password before saving it
    options: {
      data: {
        name: formData.get("name"),
      },
    },
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
export default function Signup() {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col w-full">
      <span
        className={clsx(
          "block w-full relative mb-8 text-7xl text-white font-condensed text-center",
          "before:block before:w-[4.5rem] before:h-[0.5rem] before:bg-white before:absolute before:top-[45%] before:right-[28rem]",
          "after:block after:w-[4.5rem] after:h-[0.5rem] after:bg-white after:absolute after:top-[45%] after:left-[28rem]"
        )}
      >
        SIGN UP
      </span>
      <Form method="POST" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="NAME"
          name="name"
          className="input w-full bg-white h-[6.25rem] rounded-none text-3xl font-handwriting text-black uppercase"
        />
        <input
          type="email"
          placeholder="EMAIL"
          name="email"
          className="input w-full bg-white h-[6.25rem] rounded-none text-3xl font-handwriting text-black uppercase"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          name="password"
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
      <div className="mt-8 flex justify-center">
        <Link to="/signin">
          <span className="font-inter text-black dark:text-white text-xl link link-hover">
            Ready to Login?
          </span>
        </Link>
      </div>
    </div>
  );
}
