import { type SVGProps } from "react";
import spriteHref from "~/styles/icon.svg";

export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: string;
}) {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
