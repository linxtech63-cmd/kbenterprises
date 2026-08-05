import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex items-center gap-3 rounded-md"
      aria-label="KB Enterprise Solutions home"
    >
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#002050] text-sm font-semibold text-white shadow-sm">
        KB
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-sm font-semibold text-[#101827]">
          KB Enterprise
        </span>
        <span className="block text-xs text-slate-500">Solutions LLC</span>
      </span>
    </Link>
  );
}
