import secretSantaLogoSmall from "~/images/logo__secret-santa--small.png";

export default function Footer() {
  return (
    <footer className="h-[22.375rem] bg-acadia flex flex-col items-center pb-4">
      <img
        src={secretSantaLogoSmall}
        alt="Secret Santa logo"
        className="mt-[5rem]"
      />
      <span className="font-inter text-scotch-mist text-base mt-14 text-center">
        Copyright ©2023. <span className="underline">Ah Ha Creative, LLC.</span>{" "}
        All Rights Reserved.
      </span>
      <span className="font-inter text-scotch-mist text-base mt-4 text-center">
        <span className="underline">Terms & Conditions</span> .{" "}
        <span className="underline">Privacy Policy</span> .{" "}
        <span className="underline">Disclaimers</span>
      </span>
    </footer>
  );
}
