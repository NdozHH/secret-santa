import { Outlet } from "@remix-run/react";
import LayoutDouble from "~/components/layout-double";

export default function Auth() {
  return (
    <LayoutDouble>
      <Outlet />
    </LayoutDouble>
  );
}
