import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
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

  const { error } = await supabase.auth.resetPasswordForEmail(
    String(formData.get("email")),
    {
      redirectTo: "http://localhost:3000/auth/callback?next=/create_password",
    }
  );

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

  return json(null, { headers });
}

export default function ResetPassword() {
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
        RESET PASSWORD
      </span>
      <Form method="POST" className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
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
