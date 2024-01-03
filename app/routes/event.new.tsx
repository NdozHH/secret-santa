import type { DataFunctionArgs } from "@remix-run/node";
import { requireUser } from "~/utils/auth.server";

export async function loader({ request }: DataFunctionArgs) {
  await requireUser(request);

  return null;
}

export default function NewEvent() {
  return <div>Hello form new event</div>;
}
