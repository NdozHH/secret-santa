import type { DataFunctionArgs } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { requireUser } from "~/utils/auth.server";

export async function loader({ request }: DataFunctionArgs) {
  await requireUser(request);

  return null;
}

export default function EventDetail() {
  const p = useParams();
  return <div>Hello from event detail {`${p.eventId}`}</div>;
}
