import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import authBg from "~/images/bg__auth.png";
import secretSantaLogo from "~/images/logo__secret-santa.png";

export default function Auth() {
  return (
    <div className="h-full flex flex-col gap-10">
      <main
        className="relative h-full min-h-[59rem] bg-cover bg-top flex justify-center"
        style={{ backgroundImage: `url(${authBg})` }}
      >
        <div className="flex-col items-center">
          <img
            src={secretSantaLogo}
            alt="Secret Santa main logo"
            className="mt-[5rem] mb-10"
          />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
