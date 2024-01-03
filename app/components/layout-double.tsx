import type { ReactNode } from "react";
import Footer from "~/components/footer";
import authBg from "~/images/bg__auth.png";
import secretSantaLogo from "~/images/logo__secret-santa.png";

export default function LayoutDouble({ children }: { children: ReactNode }) {
  return (
    <div className="h-full flex flex-col gap-10">
      <main
        className="relative h-full min-h-[59rem] bg-contain bg-top flex justify-center bg-no-repeat"
        style={{ backgroundImage: `url(${authBg})` }}
      >
        <div className="flex flex-col items-center max-w-[41rem] w-full">
          <img
            src={secretSantaLogo}
            alt="Secret Santa main logo"
            className="mt-[5rem] mb-10"
          />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
