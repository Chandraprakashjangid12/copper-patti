import { head } from "../lib/fonts";

export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white p-1">
        <img src="/logo-mark.png" alt="" className="h-full w-full object-contain" />
      </span>
      <span className="leading-none">
        <span className={`${head.className} block text-xl font-semibold text-paper`}>Balaji Enterprises</span>
        <span className="mt-1 block text-xs text-copper-light">Copper winding strips</span>
      </span>
    </span>
  );
}
