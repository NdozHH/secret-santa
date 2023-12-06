import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import authBg from "~/images/bg__auth.png";

export default function Auth() {
  return (
    <div className="h-full flex flex-col gap-10">
      <main
        className="relative h-full min-h-[59rem] bg-cover bg-top"
        style={{ backgroundImage: `url(${authBg})` }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
